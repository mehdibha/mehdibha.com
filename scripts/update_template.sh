#!/bin/bash

# Fetch changes from the template repository
git fetch template

# Merge changes from the template repository while excluding specific files
git merge template/main --no-commit
git reset ./public ./src/config/site.config.ts
git commit -m "Merge changes from template (excluding certain files)"

# Push changes to your website repository
# git push origin main