#!/bin/bash

# GitHub Pages Deployment Script
# This script deploys the Nuxt.js application to GitHub Pages using git subtree

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REMOTE_NAME="monfared"
BRANCH_NAME="gh-pages"
GITIGNORE_BACKUP=".gitignore.backup"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Cleanup function
cleanup() {
    local exit_code=$?
    log "Cleaning up..."
    
    # Restore .gitignore if backup exists
    if [ -f "$GITIGNORE_BACKUP" ]; then
        log "Restoring original .gitignore..."
        mv "$GITIGNORE_BACKUP" .gitignore
        log_success ".gitignore restored"
    fi
    
    if [ $exit_code -ne 0 ]; then
        log_error "Script failed with exit code $exit_code"
        exit $exit_code
    fi
}

# Set trap to run cleanup on exit
trap cleanup EXIT

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    log_error "Not in a git repository"
    exit 1
fi

# Check if remote exists
if ! git remote | grep -q "^${REMOTE_NAME}$"; then
    log_error "Remote '${REMOTE_NAME}' not found"
    log "Available remotes:"
    git remote -v
    exit 1
fi

# Confirmation prompt
log_warning "This script will:"
echo "  1. Backup and modify .gitignore"
echo "  2. Remove .nuxt/ and dist/ folders"
echo "  3. Generate static site with DEPLOY_ENV=GH_PAGES"
echo "  4. Force push to ${REMOTE_NAME}:${BRANCH_NAME}"
echo ""
read -p "Do you want to continue? (yes/no): " -r
if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    log "Deployment cancelled"
    exit 0
fi

# Step 1: Backup .gitignore
log "Step 1: Backing up .gitignore..."
if [ -f .gitignore ]; then
    cp .gitignore "$GITIGNORE_BACKUP"
    log_success ".gitignore backed up to $GITIGNORE_BACKUP"
else
    log_warning ".gitignore not found, creating empty backup"
    touch "$GITIGNORE_BACKUP"
fi

# Step 2: Append exclusions to .gitignore
log "Step 2: Appending exclusions to .gitignore..."
{
    echo ""
    echo "# Temporary exclusions for GH Pages deployment"
    echo ".env"
    echo ".env.*"
    echo "*.env"
    echo "/ssl/"
    echo "/ssl/**"
} >> .gitignore
log_success "Exclusions appended to .gitignore"

# Step 3: Remove .nuxt/ and dist/ folders
log "Step 3: Removing .nuxt/ and dist/ folders..."
if [ -d ".nuxt" ]; then
    rm -rf .nuxt
    log_success "Removed .nuxt/ folder"
else
    log ".nuxt/ folder not found, skipping"
fi

if [ -d "dist" ]; then
    rm -rf dist
    log_success "Removed dist/ folder"
else
    log "dist/ folder not found, skipping"
fi

# Step 4: Run generate with DEPLOY_ENV=GH_PAGES
log "Step 4: Running 'DEPLOY_ENV=GH_PAGES npm run generate'..."
if ! DEPLOY_ENV=GH_PAGES npm run generate; then
    log_error "Generation failed"
    exit 1
fi
log_success "Generation completed successfully"

# Verify dist folder exists
if [ ! -d "dist" ]; then
    log_error "dist/ folder was not created"
    exit 1
fi

# Step 5: Deploy to GitHub Pages using git subtree
log "Step 5: Deploying to ${REMOTE_NAME}:${BRANCH_NAME}..."
log_warning "This will force push to ${REMOTE_NAME}:${BRANCH_NAME}"

# Check if dist has content
if [ -z "$(ls -A dist)" ]; then
    log_error "dist/ folder is empty"
    exit 1
fi

# Get current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
log "Current branch: $CURRENT_BRANCH"

# Create subtree split and push
if ! git push "$REMOTE_NAME" "$(git subtree split --prefix dist):${BRANCH_NAME}" --force; then
    log_error "Failed to push to ${REMOTE_NAME}:${BRANCH_NAME}"
    exit 1
fi

log_success "Successfully pushed to ${REMOTE_NAME}:${BRANCH_NAME}"

# Step 6: Restore .gitignore (handled by cleanup trap)
log "Step 6: .gitignore will be restored on exit"

log_success "GitHub Pages deployment completed successfully!"
log "Your site should be available at: https://$(git remote get-url ${REMOTE_NAME} | sed -E 's/.*github\.com[:/]([^/]+)\/([^/]+)(\.git)?$/\1.github.io\/\2/' | sed 's/\.git$//')"

