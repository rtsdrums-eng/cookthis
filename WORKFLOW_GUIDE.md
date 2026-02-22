# CookThis.com Workflow Guide

## 🔄 Development Workflow

### Daily Development Flow
```
1. Start Dev Server → 2. Make Changes → 3. Test Locally → 4. Commit → 5. Deploy
```

---

## 🚀 Quick Start Commands

```bash
# Navigate to project
cd ~/Documents/CT3/cookthis

# Start development
npm run dev

# Open in browser
open http://localhost:4321

# Make changes, then deploy
git add .
git commit -m "Your change description"
git push origin main
```

---

## 📝 Recipe Creation Workflow

### Step 1: Plan Your Recipe
- Recipe name and description
- Gather ingredients list
- Write clear instructions
- Take/source photo

### Step 2: Create Recipe File
```bash
# Create new recipe file
touch src/content/recipes/your-recipe-name.md
```

### Step 3: Add Recipe Content
```markdown
---
title: "Your Recipe Name"
description: "A delicious recipe that..."
author: "Ryan"
prepTime: 15
cookTime: 30
totalTime: 45
servings: 4
category: "dinner"
tags: ["tag1", "tag2", "tag3"]
image: "/images/your-recipe.jpg"
imageAlt: "Description of the finished dish"
date: 2026-02-22
draft: false
---

## Ingredients

### For the Main Dish
- 2 cups ingredient one
- 1 tbsp ingredient two
- 1/2 tsp ingredient three

### For the Sauce
- 1/4 cup sauce ingredient
- 2 cloves garlic, minced

## Instructions

1. **Prep the ingredients:** Start by...

2. **Cook the base:** In a large pan...

3. **Make the sauce:** While that's cooking...

4. **Combine and serve:** Finally...

## Notes

- **Storage:** Keep leftovers in...
- **Variations:** Try substituting...
- **Tips:** For best results...
```

### Step 4: Add Recipe Image
```bash
# Add image to public folder
cp ~/path/to/image.jpg public/images/your-recipe.jpg

# Optimize image (if you have ImageMagick installed)
convert public/images/your-recipe.jpg -resize 1200x800 -quality 85 public/images/your-recipe.jpg
```

### Step 5: Test Locally
```bash
# Start dev server
npm run dev

# View your recipe at:
# http://localhost:4321/recipes/your-recipe-name
```

### Step 6: Deploy
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Add new recipe: Your Recipe Name"

# Push to deploy
git push origin main

# Monitor deployment (optional)
open https://github.com/yourusername/cookthis/actions
```

---

## 🎨 Component Development Workflow

### Creating a New Component

1. **Create component file**
```bash
touch src/components/YourComponent.astro
```

2. **Basic component structure**
```astro
---
// Component Script (TypeScript)
export interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- Component Template -->
<div class="your-component">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  /* Component styles */
  .your-component {
    @apply p-4 bg-cream rounded-lg;
  }
</style>
```

3. **Use in pages**
```astro
---
import YourComponent from '../components/YourComponent.astro';
---

<YourComponent title="Hello" description="World" />
```

---

## 🎯 Feature Development Workflow

### Planning a New Feature

1. **Define Requirements**
   - What problem does it solve?
   - Who will use it?
   - How will it work?

2. **Create Feature Branch** (optional for larger features)
```bash
git checkout -b feature/feature-name
```

3. **Implement Feature**
   - Write code
   - Test thoroughly
   - Update documentation

4. **Test Across Devices**
```bash
# Build and preview
npm run build && npm run preview

# Test on:
# - Desktop (Chrome, Safari, Firefox)
# - Mobile (iOS Safari, Chrome)
# - Different screen sizes
```

5. **Deploy Feature**
```bash
# If on feature branch, merge to main
git checkout main
git merge feature/feature-name

# Push to deploy
git push origin main
```

---

## 🔍 Testing Workflow

### Local Testing Checklist
- [ ] All links work
- [ ] Images load properly
- [ ] Responsive on mobile
- [ ] Print styles work
- [ ] Copy/Print buttons function
- [ ] Newsletter signup works
- [ ] No console errors
- [ ] Fast page loads

### Browser Testing
```bash
# Start dev server
npm run dev

# Test in different browsers
open -a "Google Chrome" http://localhost:4321
open -a "Safari" http://localhost:4321
open -a "Firefox" http://localhost:4321
```

### Performance Testing
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run Lighthouse audit
# 1. Open Chrome DevTools
# 2. Go to Lighthouse tab
# 3. Run audit
```

---

## 🐛 Debugging Workflow

### Common Issues & Solutions

#### Dev Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Build Fails
```bash
# Check for TypeScript errors
npx astro check

# Clear Astro cache
rm -rf .astro dist
npm run build
```

#### Images Not Showing
```bash
# Check image paths (should start with /)
# Wrong: image: "images/recipe.jpg"
# Right: image: "/images/recipe.jpg"

# Verify image exists
ls public/images/
```

#### Deploy Not Working
```bash
# Check GitHub Actions
open https://github.com/yourusername/cookthis/actions

# Verify CNAME file exists
cat public/CNAME
# Should output: cookthis.com
```

---

## 📊 Content Management Workflow

### Weekly Content Schedule
- **Monday**: Plan recipes for the week
- **Tuesday-Wednesday**: Test and photograph recipes
- **Thursday**: Write and format recipes
- **Friday**: Publish and promote

### Recipe Photography Tips
1. Use natural light when possible
2. Shoot from multiple angles
3. Include process shots for complex steps
4. Maintain consistent style
5. Optimize images before uploading

### Image Optimization
```bash
# Using ImageMagick (install: brew install imagemagick)
# Resize and compress
convert original.jpg -resize 1200x800 -quality 85 optimized.jpg

# Using online tools
# - https://squoosh.app
# - https://tinypng.com
```

---

## 🔄 Update Workflow

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install astro@latest

# Test after updates
npm run dev
npm run build
```

### Updating Content
1. **Edit existing recipe**
```bash
# Open recipe file
code src/content/recipes/recipe-name.md

# Make changes
# Test locally
npm run dev

# Deploy
git add .
git commit -m "Update recipe: Recipe Name"
git push
```

2. **Batch updates**
```bash
# Update multiple recipes
# Use find and replace in VS Code
# Test all changed pages
# Deploy once
```

---

## 🚀 Deployment Workflow

### Automatic Deployment (Current Setup)
```
Push to main branch → GitHub Actions → Build → Deploy to GitHub Pages
```

### Manual Deployment Check
```bash
# View deployment status
open https://github.com/yourusername/cookthis/actions

# View live site
open https://cookthis.com

# Check for issues
# - Console errors (F12)
# - Broken links
# - Missing images
```

### Rollback if Needed
```bash
# Find last working commit
git log --oneline

# Revert to previous commit
git revert HEAD
git push

# Or reset to specific commit (careful!)
git reset --hard commit-hash
git push --force
```

---

## 📝 Documentation Workflow

### Keeping Docs Updated
1. Document new features as you build them
2. Update README when adding dependencies
3. Add comments to complex code
4. Update this guide with new workflows

### Documentation Locations
- `/README.md` - Project overview
- `/TECH_STACK_AND_PLAN.md` - Technical details
- `/WORKFLOW_GUIDE.md` - This file
- Component files - JSDoc comments
- Recipe files - Inline comments for special formatting

---

## 🎯 Quick Reference

### Most Used Commands
```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview build

# Git
git status              # Check changes
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push                # Deploy

# Navigation
cd ~/Documents/CT3/cookthis  # Go to project
code .                       # Open in VS Code
```

### File Locations
```
Recipes:     src/content/recipes/
Components:  src/components/
Pages:       src/pages/
Images:      public/images/
Styles:      src/styles/
Config:      astro.config.mjs
```

### Important URLs
- Dev Server: http://localhost:4321
- Live Site: https://cookthis.com
- GitHub Repo: https://github.com/yourusername/cookthis
- GitHub Actions: https://github.com/yourusername/cookthis/actions

---

## 💡 Pro Tips

1. **Always test locally first** - Never push untested changes
2. **Commit often** - Small, focused commits are easier to debug
3. **Write clear commit messages** - Future you will thank you
4. **Optimize images** - Large images slow down the site
5. **Keep recipes consistent** - Use the same format/style
6. **Monitor deployments** - Check GitHub Actions after pushing
7. **Back up regularly** - Keep local copies of images/content

---

*Last Updated: February 22, 2026*
*For questions or issues, check the TECH_STACK_AND_PLAN.md file*