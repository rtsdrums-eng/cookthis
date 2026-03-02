# CookThis Development Notes

## Project Overview
Recipe website with minimalist design inspired by Boffi aesthetics. Built with Astro, deployed on GitHub Pages.

## Current Status (March 2, 2026)

### ✅ Completed Features
1. **Minimalist Redesign** - Clean, typography-focused design with subtle animations
2. **Recipe Sorting** - Date-based sorting system (Feb 22 for featured recipes with photos, Feb 1-20 for others)
3. **Pagination** - Working pagination with 9 recipes per page across 6 pages
4. **Newsletter Integration** - Buttondown email subscription in navbar and footer
5. **Content Schema** - Astro content collections with Zod validation
6. **Decap CMS Setup Started** - Admin panel configuration in /public/admin/

### 🚧 In Progress: Authentication & Favorites System

#### Architecture Decision: Clerk + Supabase Hybrid
- **Clerk** for authentication (handles all auth complexity)
- **Supabase** for database (stores favorites, user preferences)
- **Rationale**: Best UX for auth, scalable database, clean separation of concerns

#### Production-First Approach (IMPORTANT!)
To avoid local/production mismatches that plagued previous auth attempts:
1. Set up production services FIRST
2. Use environment variables for everything
3. No localhost-only redirect URLs
4. Deploy early and often
5. GitHub Secrets from the start

#### Environment Variables Setup
```bash
# .env file structure
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJ...
PUBLIC_SITE_URL=https://cookthis.cc
```

#### Packages Installed
- @clerk/clerk-js (auth)
- @supabase/supabase-js (database)

### 📝 Todo List
1. [ ] Set up Clerk account with production URLs
2. [ ] Set up Supabase project
3. [ ] Configure GitHub Secrets for production
4. [ ] Implement auth UI (sign in button, user menu)
5. [ ] Create favorites database schema
6. [ ] Add heart icons to recipe cards
7. [ ] Build "My Favorites" page
8. [ ] Test everything in production

### 🔗 Important URLs
- **Production**: https://cookthis.cc
- **GitHub Repo**: https://github.com/rtsdrums-eng/cookthis
- **Local Dev**: http://localhost:4321

### 🎨 Design Decisions
- **Typography**: Clean, minimal, no unnecessary decoration
- **Colors**: Black text, white background, subtle grays
- **Layout**: 3-column grid on desktop, responsive to mobile
- **Interactions**: Subtle hover effects, no flashy animations
- **Recipe Cards**: Title, description, cook time, minimal metadata

### 🐛 Known Issues & Fixes
1. **Build Error with RecipeCard**: Fixed by updating to MinimalRecipeCard component
2. **SortOrder Not Working**: Fixed by adding content collection schema
3. **Duplicate IDs Warning**: Harmless, related to content collection loading

### 📦 Build & Deploy
```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (automatic via GitHub Actions on push to main)
git push origin main
```

### 🔑 Services to Configure

#### Clerk Setup
1. Create app at clerk.com
2. Enable Email + Google auth
3. Add redirect URLs:
   - https://cookthis.cc/*
   - http://localhost:4321/*
   - http://localhost:432[2-4]/* (for multiple preview ports)
4. Copy publishable and secret keys

#### Supabase Setup
1. Create project at supabase.com
2. Name: cookthis
3. Copy project URL and anon key
4. Will create favorites table with RLS policies

#### GitHub Secrets (via Settings > Secrets)
- PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- PUBLIC_SUPABASE_URL
- PUBLIC_SUPABASE_ANON_KEY

### 💡 Future Features
- Recipe search/filtering
- User comments/ratings
- Recipe collections/meal planning
- Print-friendly recipe view
- Nutritional information
- Cooking timers

### 📚 Tech Stack
- **Framework**: Astro 5.17.3
- **Styling**: Vanilla CSS (no framework)
- **Content**: Markdown with frontmatter
- **Search**: Pagefind
- **Auth**: Clerk (planned)
- **Database**: Supabase (planned)
- **Email**: Buttondown
- **Deployment**: GitHub Pages with Actions

## Session History
- **Feb 22**: Initial redesign, started TinaCMS (failed), removed it
- **Feb 23**: Fixed sorting with dates, pagination, started Decap CMS
- **Mar 2**: Starting auth implementation with production-first approach