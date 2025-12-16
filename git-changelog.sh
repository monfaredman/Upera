#!/bin/bash

###############################################################################
# Git Changelog Generator
#
# A comprehensive script for Git version control and JSON changelog generation
# Supports semantic versioning, commit type detection, and filtering
###############################################################################

set -euo pipefail

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHANGELOG_FILE="${SCRIPT_DIR}/CHANGELOG.json"
VERSION_FILE="${SCRIPT_DIR}/VERSION"
PACKAGE_JSON="${SCRIPT_DIR}/package.json"

# Default values
COMMIT_MESSAGE=""
AUTO_VERSION=false
FILTER_AUTHOR=""
FILTER_TYPE=""
FILTER_DATE_FROM=""
FILTER_DATE_TO=""
OUTPUT_FILE="${CHANGELOG_FILE}"
DRY_RUN=false
VERBOSE=false

# Get version bump type for commit type
get_version_bump_type() {
    local commit_type="$1"
    case "$commit_type" in
        feat)
            echo "minor"
            ;;
        fix|perf|refactor|revert)
            echo "patch"
            ;;
        docs|style|test|chore|ci|build)
            echo "none"
            ;;
        *)
            echo "none"
            ;;
    esac
}

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

###############################################################################
# Utility Functions
###############################################################################

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

log_verbose() {
    if [[ "$VERBOSE" == "true" ]]; then
        echo -e "${BLUE}[VERBOSE]${NC} $1"
    fi
}

###############################################################################
# Version Management
###############################################################################

# Get current version from package.json or VERSION file
get_current_version() {
    if [[ -f "$PACKAGE_JSON" ]]; then
        local version=$(grep -o '"version": "[^"]*"' "$PACKAGE_JSON" | cut -d'"' -f4)
        echo "${version:-0.0.0}"
    elif [[ -f "$VERSION_FILE" ]]; then
        cat "$VERSION_FILE"
    else
        echo "0.0.0"
    fi
}

# Bump version based on type (major, minor, patch)
bump_version() {
    local current_version="$1"
    local bump_type="$2"

    if [[ "$bump_type" == "none" ]]; then
        echo "$current_version"
        return
    fi

    IFS='.' read -ra VERSION_PARTS <<< "$current_version"
    local major="${VERSION_PARTS[0]:-0}"
    local minor="${VERSION_PARTS[1]:-0}"
    local patch="${VERSION_PARTS[2]:-0}"

    case "$bump_type" in
        major)
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        minor)
            minor=$((minor + 1))
            patch=0
            ;;
        patch)
            patch=$((patch + 1))
            ;;
    esac

    echo "${major}.${minor}.${patch}"
}

# Update version in package.json or VERSION file
update_version() {
    local new_version="$1"

    if [[ -f "$PACKAGE_JSON" ]]; then
        if [[ "$(uname)" == "Darwin" ]]; then
            sed -i '' "s/\"version\": \"[^\"]*\"/\"version\": \"$new_version\"/" "$PACKAGE_JSON"
        else
            sed -i "s/\"version\": \"[^\"]*\"/\"version\": \"$new_version\"/" "$PACKAGE_JSON"
        fi
        log_success "Updated version in package.json to $new_version"
    else
        echo "$new_version" > "$VERSION_FILE"
        log_success "Updated version in VERSION file to $new_version"
    fi
}

###############################################################################
# Commit Type Detection
###############################################################################

# Extract commit type from message (conventional commits format)
extract_commit_type() {
    local message="$1"
    local type=$(echo "$message" | grep -oE '^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?:' | cut -d':' -f1 | sed 's/(.*//')

    if [[ -z "$type" ]]; then
        # Try to detect from message content
        if echo "$message" | grep -qiE '^(add|new|feature)'; then
            echo "feat"
        elif echo "$message" | grep -qiE '^(fix|bug|hotfix)'; then
            echo "fix"
        elif echo "$message" | grep -qiE '^(doc|documentation)'; then
            echo "docs"
        else
            echo "chore"
        fi
    else
        echo "$type"
    fi
}

###############################################################################
# Git Operations
###############################################################################

# Check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log_error "Not in a Git repository"
        exit 1
    fi
}

# Commit staged changes
commit_staged() {
    local message="$1"

    if [[ -z "$message" ]]; then
        log_error "Commit message is required"
        exit 1
    fi

    # Check if there are staged changes
    if ! git diff --cached --quiet; then
        if [[ "$DRY_RUN" == "true" ]]; then
            log_info "DRY RUN: Would commit with message: $message"
        else
            git commit -m "$message"
            log_success "Committed changes with message: $message"

            # Auto version bump if enabled
            if [[ "$AUTO_VERSION" == "true" ]]; then
                local commit_type=$(extract_commit_type "$message")
                local bump_type=$(get_version_bump_type "$commit_type")

                if [[ "$bump_type" != "none" ]]; then
                    local current_version=$(get_current_version)
                    local new_version=$(bump_version "$current_version" "$bump_type")
                    update_version "$new_version"

                    # Create version tag
                    git tag -a "v${new_version}" -m "Version ${new_version}"
                    log_success "Created tag v${new_version}"
                fi
            fi
        fi
    else
        log_warning "No staged changes to commit"
    fi
}

###############################################################################
# Changelog Generation
###############################################################################

# Parse git log and extract commit information
parse_commits() {
    local format="%H|%an|%ad|%s|%b"
    local log_cmd="git log --pretty=format:\"${format}\" --date=iso-strict"

    # Apply filters
    if [[ -n "$FILTER_AUTHOR" ]]; then
        log_cmd="${log_cmd} --author=\"${FILTER_AUTHOR}\""
    fi

    if [[ -n "$FILTER_DATE_FROM" ]]; then
        log_cmd="${log_cmd} --since=\"${FILTER_DATE_FROM}\""
    fi

    if [[ -n "$FILTER_DATE_TO" ]]; then
        log_cmd="${log_cmd} --until=\"${FILTER_DATE_TO}\""
    fi

    eval "$log_cmd" | while IFS='|' read -r hash author date subject body; do
        # Clean up the fields (remove quotes)
        hash=$(echo "$hash" | tr -d '"')
        author=$(echo "$author" | tr -d '"')
        date=$(echo "$date" | tr -d '"')
        subject=$(echo "$subject" | tr -d '"')
        body=$(echo "$body" | tr -d '"')

        # Extract commit type
        local commit_type=$(extract_commit_type "$subject")

        # Apply type filter
        if [[ -n "$FILTER_TYPE" ]] && [[ "$commit_type" != "$FILTER_TYPE" ]]; then
            continue
        fi

        # Combine subject and body for full message
        local full_message="$subject"
        if [[ -n "$body" ]]; then
            full_message="${subject}\n${body}"
        fi

        # Output JSON for this commit
        cat <<EOF
        {
          "hash": "$hash",
          "author": "$author",
          "date": "$date",
          "type": "$commit_type",
          "message": "$(echo -e "$full_message" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')"
        }
EOF
    done
}

# Get all version tags sorted by date
get_version_tags() {
    git tag -l "v*" --sort=-creatordate | head -20
}

# Escape JSON string
escape_json() {
    local str="$1"
    # Escape backslashes first, then quotes, then newlines
    str=$(echo "$str" | sed 's/\\/\\\\/g')
    str=$(echo "$str" | sed 's/"/\\"/g')
    str=$(echo "$str" | sed ':a;N;$!ba;s/\n/\\n/g')
    str=$(echo "$str" | sed 's/\r/\\r/g')
    str=$(echo "$str" | sed 's/\t/\\t/g')
    echo "$str"
}

# Process commits and return JSON array
process_commits() {
    local range="$1"
    local commits_file=$(mktemp)

    # Process commits and write to temp file
    git log "$range" --pretty=format:"%H|%an|%ad|%s|%b" --date=iso-strict 2>/dev/null | \
    while IFS='|' read -r hash author date subject body; do
        # Clean up fields
        hash=$(echo "$hash" | xargs)
        author=$(echo "$author" | xargs)
        date=$(echo "$date" | xargs)
        subject=$(echo "$subject" | xargs)
        body=$(echo "$body" | xargs)

        # Skip empty commits
        if [[ -z "$hash" ]]; then
            continue
        fi

        # Extract commit type
        local commit_type=$(extract_commit_type "$subject")

        # Apply type filter
        if [[ -n "$FILTER_TYPE" ]] && [[ "$commit_type" != "$FILTER_TYPE" ]]; then
            continue
        fi

        # Apply author filter
        if [[ -n "$FILTER_AUTHOR" ]] && [[ "$author" != *"$FILTER_AUTHOR"* ]]; then
            continue
        fi

        # Apply date filters
        if [[ -n "$FILTER_DATE_FROM" ]] && [[ "$date" < "$FILTER_DATE_FROM" ]]; then
            continue
        fi

        if [[ -n "$FILTER_DATE_TO" ]] && [[ "$date" > "$FILTER_DATE_TO" ]]; then
            continue
        fi

        # Combine subject and body
        local full_message="$subject"
        if [[ -n "$body" ]]; then
            full_message="${subject}\n${body}"
        fi

        # Escape JSON
        local escaped_message=$(escape_json "$full_message")
        local escaped_author=$(escape_json "$author")

        # Output JSON object
        echo "{\"hash\":\"$hash\",\"author\":\"$escaped_author\",\"date\":\"$date\",\"type\":\"$commit_type\",\"message\":\"$escaped_message\"}"
    done > "$commits_file"

    # Convert to JSON array
    if [[ -s "$commits_file" ]]; then
        if command -v jq > /dev/null 2>&1; then
            jq -s '.' "$commits_file" 2>/dev/null || {
                # Fallback if jq fails
                echo -n "["
                local first=true
                while IFS= read -r line; do
                    if [[ -n "$line" ]]; then
                        if [[ "$first" == "true" ]]; then
                            first=false
                        else
                            echo -n ","
                        fi
                        echo -n "$line"
                    fi
                done < "$commits_file"
                echo -n "]"
            }
        else
            # Manual JSON array construction
            echo -n "["
            local first=true
            while IFS= read -r line; do
                if [[ -n "$line" ]]; then
                    if [[ "$first" == "true" ]]; then
                        first=false
                    else
                        echo -n ","
                    fi
                    echo -n "$line"
                fi
            done < "$commits_file"
            echo -n "]"
        fi
    else
        echo "[]"
    fi

    rm -f "$commits_file"
}

# Generate changelog JSON grouped by version tags
generate_changelog() {
    log_info "Generating changelog..."

    local temp_file=$(mktemp)
    local project_name=$(basename "$(git rev-parse --show-toplevel)")
    local generated_at=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

    # Start JSON structure
    echo "{" > "$temp_file"
    echo "  \"project\": \"$project_name\"," >> "$temp_file"
    echo "  \"generated_at\": \"$generated_at\"," >> "$temp_file"
    echo "  \"versions\": [" >> "$temp_file"

    local tags=($(get_version_tags))
    local first_version=true

    # Process each version tag
    for tag in "${tags[@]}"; do
        local version="${tag#v}"  # Remove 'v' prefix
        local tag_date=$(git log -1 --format=%ai "$tag" 2>/dev/null || echo "")

        if [[ "$first_version" == "false" ]]; then
            echo "," >> "$temp_file"
        fi
        first_version=false

        # Get commits for this version
        local previous_tag=$(git describe --tags --abbrev=0 "${tag}^" 2>/dev/null || echo "")
        local range="${previous_tag}..${tag}"

        if [[ -z "$previous_tag" ]]; then
            range="$tag"
        fi

        log_verbose "Processing version $version (range: $range)"

        # Process commits
        local commits_json=$(process_commits "$range")

        # Write version entry
        echo "    {" >> "$temp_file"
        echo "      \"version\": \"$version\"," >> "$temp_file"
        echo "      \"tag\": \"$tag\"," >> "$temp_file"
        echo "      \"date\": \"$tag_date\"," >> "$temp_file"
        echo "      \"commits\": $commits_json" >> "$temp_file"
        echo -n "    }" >> "$temp_file"
    done

    # Add commits since last tag (unreleased)
    local last_tag=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
    local unreleased_range=""

    if [[ -n "$last_tag" ]]; then
        unreleased_range="${last_tag}..HEAD"
    else
        # No tags exist, show all commits as unreleased
        unreleased_range="HEAD"
    fi

    local unreleased_commits=$(process_commits "$unreleased_range")

    # Check if unreleased commits exist and are not empty
    if [[ "$unreleased_commits" != "[]" ]] && [[ -n "$unreleased_commits" ]]; then
        if [[ "$first_version" == "false" ]]; then
            echo "," >> "$temp_file"
        fi
        echo "    {" >> "$temp_file"
        echo "      \"version\": \"unreleased\"," >> "$temp_file"
        echo "      \"tag\": null," >> "$temp_file"
        echo "      \"date\": null," >> "$temp_file"
        echo "      \"commits\": $unreleased_commits" >> "$temp_file"
        echo -n "    }" >> "$temp_file"
    fi

    # Close JSON structure
    echo "" >> "$temp_file"
    echo "  ]" >> "$temp_file"
    echo "}" >> "$temp_file"

    # Format JSON and save
    if command -v jq > /dev/null 2>&1; then
        jq '.' "$temp_file" > "$OUTPUT_FILE" 2>/dev/null || cp "$temp_file" "$OUTPUT_FILE"
    else
        cp "$temp_file" "$OUTPUT_FILE"
        log_warning "jq not found. Install jq for formatted JSON output: brew install jq (macOS) or apt-get install jq (Linux)"
    fi

    rm -f "$temp_file"
    log_success "Changelog generated: $OUTPUT_FILE"
}

###############################################################################
# Help and Usage
###############################################################################

show_usage() {
    cat <<EOF
Git Changelog Generator

Usage: $0 [OPTIONS] [COMMAND]

Commands:
  commit <message>     Commit staged changes with message
  changelog            Generate changelog JSON file
  version              Show current version
  bump <type>          Bump version (major|minor|patch)

Options:
  -m, --message TEXT       Commit message (for commit command)
  -a, --auto-version       Auto-bump version based on commit type
  -f, --filter-author      Filter commits by author
  -t, --filter-type        Filter commits by type (feat|fix|docs|etc.)
  -d, --date-from DATE     Filter commits from date (YYYY-MM-DD)
  -D, --date-to DATE       Filter commits to date (YYYY-MM-DD)
  -o, --output FILE        Output file path (default: CHANGELOG.json)
  -n, --dry-run           Show what would be done without executing
  -v, --verbose           Verbose output
  -h, --help              Show this help message

Examples:
  # Commit staged changes with auto version bump
  $0 commit -m "feat: add new feature" --auto-version

  # Generate changelog
  $0 changelog

  # Generate changelog filtered by author
  $0 changelog --filter-author "John Doe"

  # Generate changelog filtered by type and date range
  $0 changelog --filter-type feat --date-from "2024-01-01" --date-to "2024-12-31"

  # Bump version manually
  $0 bump minor

EOF
}

###############################################################################
# Main
###############################################################################

main() {
    check_git_repo

    local command=""

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            commit)
                command="commit"
                shift
                ;;
            changelog)
                command="changelog"
                shift
                ;;
            version)
                command="version"
                shift
                ;;
            bump)
                command="bump"
                local bump_type="$2"
                shift 2

                if [[ -z "$bump_type" ]]; then
                    log_error "Bump type required (major|minor|patch)"
                    exit 1
                fi

                local current_version=$(get_current_version)
                local new_version=$(bump_version "$current_version" "$bump_type")

                if [[ "$DRY_RUN" == "true" ]]; then
                    log_info "DRY RUN: Would bump version from $current_version to $new_version"
                else
                    update_version "$new_version"
                    git tag -a "v${new_version}" -m "Version ${new_version}"
                    log_success "Version bumped to $new_version and tagged"
                fi
                exit 0
                ;;
            -m|--message)
                COMMIT_MESSAGE="$2"
                shift 2
                ;;
            -a|--auto-version)
                AUTO_VERSION=true
                shift
                ;;
            -f|--filter-author)
                FILTER_AUTHOR="$2"
                shift 2
                ;;
            -t|--filter-type)
                FILTER_TYPE="$2"
                shift 2
                ;;
            -d|--date-from)
                FILTER_DATE_FROM="$2"
                shift 2
                ;;
            -D|--date-to)
                FILTER_DATE_TO="$2"
                shift 2
                ;;
            -o|--output)
                OUTPUT_FILE="$2"
                shift 2
                ;;
            -n|--dry-run)
                DRY_RUN=true
                shift
                ;;
            -v|--verbose)
                VERBOSE=true
                shift
                ;;
            -h|--help)
                show_usage
                exit 0
                ;;
            *)
                if [[ -z "$command" ]] && [[ "$1" =~ ^[a-z]+: ]]; then
                    # Assume it's a commit message without 'commit' command
                    command="commit"
                    COMMIT_MESSAGE="$1"
                else
                    log_error "Unknown option: $1"
                    show_usage
                    exit 1
                fi
                shift
                ;;
        esac
    done

    # Execute command
    case "$command" in
        commit)
            if [[ -z "$COMMIT_MESSAGE" ]]; then
                log_error "Commit message is required"
                show_usage
                exit 1
            fi
            commit_staged "$COMMIT_MESSAGE"
            ;;
        changelog)
            generate_changelog
            ;;
        version)
            local current_version=$(get_current_version)
            echo "Current version: $current_version"
            ;;
        "")
            log_error "No command specified"
            show_usage
            exit 1
            ;;
        *)
            log_error "Unknown command: $command"
            show_usage
            exit 1
            ;;
    esac
}

# Run main function
main "$@"

