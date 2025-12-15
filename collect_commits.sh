#!/usr/bin/env bash

set -e

OUTPUT_FILE="last_100_commits_all_branches.txt"

echo "Collecting last 100 commits from all branches..."
echo "Generated at: $(date)" > "$OUTPUT_FILE"
echo "========================================" >> "$OUTPUT_FILE"

# Ensure all remote branches are fetched
git fetch --all --prune

# Get last 100 unique commits across all branches
git log --all --no-merges -n 200 \
  --pretty=format:"%h | %ad | %an | %d%n    %s%n" \
  --date=short >> "$OUTPUT_FILE"

echo "========================================" >> "$OUTPUT_FILE"
echo "Saved to $OUTPUT_FILE"
