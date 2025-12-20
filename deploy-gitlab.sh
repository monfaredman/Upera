#!/bin/bash

# GitLab Main Build Deployment Script
# This script ensures .gitignore is restored and pushes the current branch to origin

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REMOTE_NAME="origin"
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

# Get current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
log "Current branch: $CURRENT_BRANCH"

# Step 1: Ensure .gitignore is restored
log "Step 1: Checking .gitignore status..."

if [ -f "$GITIGNORE_BACKUP" ]; then
    log_warning "Found .gitignore backup file"

    # Check if .gitignore has the temporary exclusions
    if grep -q "# Temporary exclusions for GH Pages deployment" .gitignore 2>/dev/null; then
        log_warning ".gitignore contains temporary exclusions, restoring from backup..."
        mv "$GITIGNORE_BACKUP" .gitignore
        log_success ".gitignore restored from backup"
    else
        log ".gitignore appears to be clean, removing backup file"
        rm "$GITIGNORE_BACKUP"
        log_success "Backup file removed"
    fi
else
    log ".gitignore backup not found, assuming it's already in correct state"
fi

# Verify .gitignore doesn't have temporary exclusions
if grep -q "# Temporary exclusions for GH Pages deployment" .gitignore 2>/dev/null; then
    log_error ".gitignore still contains temporary exclusions"
    log "Please restore .gitignore manually or run deploy-gh-pages.sh cleanup"
    exit 1
fi

log_success ".gitignore is in correct state"


# Step 1.1: Remove build artifacts (.nuxt and dist)
log "Step 1.1: Removing build artifacts..."

REMOVED=false

if [ -d ".nuxt" ]; then
    rm -rf .nuxt
    log_success "Removed .nuxt/ folder"
    REMOVED=true
else
    log ".nuxt/ folder not found, skipping"
fi

if [ -d "dist" ]; then
    rm -rf dist
    log_success "Removed dist/ folder"
    REMOVED=true
else
    log "dist/ folder not found, skipping"
fi

# Commit removal if needed
if [ "$REMOVED" = true ]; then
    git add -A
    git commit -m "chore: remove build artifacts (.nuxt, dist)"
    log_success "Build artifacts removal committed"
fi



# Step 2: Check git status
log "Step 2: Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    log_warning "You have uncommitted changes:"
    git status --short
    echo ""
    read -p "Do you want to continue? Uncommitted changes will not be pushed. (yes/no): " -r
    if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
        log "Deployment cancelled"
        exit 0
    fi
else
    log_success "Working directory is clean"
fi

# Step 3: Check if branch exists on remote
log "Step 3: Checking remote branch status..."
REMOTE_BRANCH_EXISTS=false
if git ls-remote --heads "$REMOTE_NAME" "$CURRENT_BRANCH" | grep -q "$CURRENT_BRANCH"; then
    REMOTE_BRANCH_EXISTS=true
    log "Remote branch '${REMOTE_NAME}/${CURRENT_BRANCH}' exists"

    # Check if local and remote are in sync
    LOCAL_COMMIT=$(git rev-parse HEAD)
    REMOTE_COMMIT=$(git rev-parse "${REMOTE_NAME}/${CURRENT_BRANCH}" 2>/dev/null || echo "")

    if [ -n "$REMOTE_COMMIT" ] && [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
        log_warning "Local and remote branches are out of sync"
        log "Local commit:  ${LOCAL_COMMIT:0:7}"
        log "Remote commit: ${REMOTE_COMMIT:0:7}"
        echo ""
        read -p "Do you want to force push? This will overwrite remote branch. (yes/no): " -r
        if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
            log "Deployment cancelled"
            exit 0
        fi
        FORCE_PUSH=true
    else
        FORCE_PUSH=false
    fi
else
    log "Remote branch '${REMOTE_NAME}/${CURRENT_BRANCH}' does not exist (will be created)"
    FORCE_PUSH=false
fi

# Step 4: Push to origin
log "Step 4: Pushing ${CURRENT_BRANCH} to ${REMOTE_NAME}..."

if [ "$FORCE_PUSH" = true ]; then
    log_warning "Force pushing to ${REMOTE_NAME}:${CURRENT_BRANCH}..."
    if ! git push "$REMOTE_NAME" "$CURRENT_BRANCH" --force; then
        log_error "Failed to push to ${REMOTE_NAME}:${CURRENT_BRANCH}"
        exit 1
    fi
else
    if ! git push "$REMOTE_NAME" "$CURRENT_BRANCH"; then
        log_error "Failed to push to ${REMOTE_NAME}:${CURRENT_BRANCH}"
        log "If you need to force push, run with --force flag or answer 'yes' to the prompt above"
        exit 1
    fi
fi

log_success "Successfully pushed ${CURRENT_BRANCH} to ${REMOTE_NAME}"

log_success "GitLab deployment completed successfully!"

