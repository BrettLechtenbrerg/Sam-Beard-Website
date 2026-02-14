# Sam Beard Website - Ultimate Restart Prompt
**Last Updated:** February 14, 2026 @ 8:05 AM MST
**Current Commit:** 6518dbf

---

## CRITICAL: READ THIS FIRST

**ALWAYS** sync with GitHub before making changes:
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1
git fetch origin && git status
```

---

## PROJECT OVERVIEW

**Sam Beard / GIFT Connect Website**
- Early childhood education advocacy and parenting resources
- AI-powered tools for parents and caregivers (Sammie, Geno, Stacy)
- Black/Gold/White glassmorphic design (based on MACC website template)
- **2 pages** (Home, Birth To 3) + external Contact link
- **100% mobile optimized** with responsive design and safe area insets

---

## PROJECT LOCATIONS

### Primary Location (USE THIS ONE):
```
/Users/brettlechtenberg/Documents/agent-girl/samb-website1
```

### Backup Location (also synced):
```
/Users/brettlechtenberg/Desktop/Claude Projects/Sam-Beard-Website
```

### Remote:
- **GitHub:** https://github.com/BrettLechtenbrerg/Sam-Beard-Website
- **Live URL:** https://samb-website1.vercel.app
- **Vercel Project:** bretts-projects-3e254e58/samb-website1

### WARNING:
Both local folders deploy to the SAME Vercel project and GitHub repo. Always run `git pull` before working to avoid conflicts.

---

## TECH STACK

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.1.6 | App Router |
| React | 19 | Latest |
| Tailwind CSS | 3.4 | **USE v3, NOT v4** |
| Framer Motion | Latest | Animations |
| TypeScript | Latest | Type safety |
| Deployment | Vercel | **CLI workflow only** |

---

## CURRENT STATE (as of Feb 14, 2026 @ 8:05 AM)

### ✅ Home Page (`/`) - COMPLETE

**Sections in order:**
1. **Hero** - "Join Us NOW To Save Our Children" headline + Vimeo video (832805208)
2. **AI For Good** (id="ai-tools") - 3 tool cards with mascot images:
   - ✅ **Sammie** (Parenting Assistant) → https://voiceassistant.gift-connect.org/org/
   - ✅ **Geno** (Song Generator) → https://newsonggenerator.gift-connect.org/
   - ✅ **Stacy** (Story Generator) → https://storygenerator.gift-connect.org/
3. **Music & Edutainment** - 2 YouTube videos side-by-side:
   - Abujubuju baby (qnb8-EeRuIY)
   - Second video (w2PN3aTl644)
   - Rupert Hitzig quote (GC Creative Director)
4. **Think Big! Yes We Can!** - YouTube video (ECBTbTntOLE)
5. **Six Loving Habits** - 6 individual cards in responsive grid (6-col desktop, 3-col tablet, 2-col mobile):
   - Speak, Sing, Read, Play, Count, Serve & Return
6. **Legacy of Literacy** - 2-column layout with text + photos (children-reading.png, family-generations.png)
7. **Advisory Council** - 22 individual member cards in responsive grid (3-col desktop, 2-col tablet, 1-col mobile) with photos, names, titles, and bios

### ✅ Birth To 3 Page (`/birth-to-3`) - COMPLETE

**Sections in order:**
1. **Hero** - Sam Beard photo + quote (side by side on desktop)
2. **America's Economy & Workforce** - 6 stat cards with icons:
   - 1/3 Not Workforce Ready (StriveTogether.org; OECD)
   - 34th OECD Ranking
   - $2.2T Lost GDP Potential (Barbara Bush Foundation)
   - 13% Return on Investment (James Heckman)
   - 1.2M Annual Dropouts
   - <2% Pre-Primary Budgets (UNICEF)
3. **Leadership** - Judith Otter bio with photo + Team section with photo + Historical photos:
   - President Bush with Sam - 2002
   - Lesley Stahl, Ethel Kennedy, Sam, Eunice Shriver and Michael Keaton - 2012
   - Ethel Kennedy quote
4. **Key Facts** - 3 stat cards:
   - 90% brain development in first 3 years
   - 1M+ neural connections per second
   - 65K mothers impacted
5. **CTA** - "Ready to Make a Difference?" with gold button linking to /#ai-tools

### ✅ Navigation
- Sam Beard logo (from GoHighLevel CDN)
- Home → `/`
- Birth To 3 → `/birth-to-3`
- Contact → External link to gift-connect.org/contact-us/

### ✅ Favicon
- Sam Beard logo as favicon (`app/icon.png`)
- Apple touch icon (`app/apple-icon.png`)

### ✅ Mobile Optimization (Added Feb 11, 2026)
- Responsive typography: `text-3xl sm:text-5xl lg:text-6xl`
- Responsive padding: `pt-24 sm:pt-32`, `px-4 sm:px-8 lg:px-12`
- Responsive spacing: `py-16 sm:py-24 lg:py-32`, `gap-4 sm:gap-8`
- Safe area insets for notched devices (iPhone X+)
- Minimum touch targets (44px) for accessibility
- Disabled hover transforms on touch devices
- Small screen optimizations for iPhone SE (375px and below)

---

## AI MASCOT IMAGES (All Complete)

| Tool | Mascot | Image URL |
|------|--------|-----------|
| Parenting Assistant | Sammie | https://voiceassistant.gift-connect.org/assets/sammie-DcXPA9Jh.png |
| Song Generator | Geno | https://newsonggenerator.gift-connect.org/static/geno_transparent.png |
| Story Generator | Stacy | https://storygenerator.gift-connect.org/images/stacy_logo.png |

---

## KEY FILES

```
samb-website1/
├── app/
│   ├── layout.tsx              # Root layout, fonts (Montserrat + Open Sans)
│   ├── page.tsx                # ⭐ Home page with all 6 sections
│   ├── birth-to-3/page.tsx     # ⭐ Birth To 3 page
│   ├── globals.css             # Glassmorphic design system + mobile optimizations
│   ├── icon.png                # Favicon
│   └── apple-icon.png          # Apple touch icon
├── components/
│   ├── Navigation.tsx          # Main nav with Sam Beard logo (responsive)
│   ├── Footer.tsx              # Site footer (safe area insets)
│   └── animations/
│       ├── FadeIn.tsx          # Fade-in animation component
│       └── ScaleIn.tsx         # Scale-in animation component
├── public/images/
│   ├── sam-beard.png           # Sam's photo (from desktop)
│   ├── council/                # ⭐ 22 Advisory Council member photos
│   │   └── [22 member photos]
│   ├── habits/                 # ⭐ 6 Loving Habits photos
│   │   ├── speak.png
│   │   ├── sing.png
│   │   ├── read.png
│   │   ├── play.png
│   │   ├── count.png
│   │   └── serve-return.png
│   ├── literacy/               # Legacy of Literacy photos
│   │   ├── children-reading.png
│   │   └── family-generations.png
│   └── leadership/             # ⭐ Leadership section photos
│       ├── judith-otter.png
│       ├── team.png
│       ├── sam-bush-2002.png
│       └── sam-kennedy-2012.png
├── CLAUDE.md                   # Project instructions
├── RESTART-PROMPT-SAM-BEARD.md # This file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## BRAND COLORS

- **Black (Primary Background):** #000000
- **Gold (Accent):** #FACC15 (Tailwind yellow-400)
- **White (Text):** #FFFFFF
- **Gold Gradients:** from-yellow-400 to-amber-600

---

## MOBILE OPTIMIZATION DETAILS

### Responsive Breakpoints Used:
- `sm:` (640px+) - Tablets and small laptops
- `md:` (768px+) - Tablets landscape and laptops
- `lg:` (1024px+) - Large screens and desktops

### Safe Area Insets (iPhone X+ Notch Support):
```css
@supports (padding: max(0px)) {
  body {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
  }
  .footer-glass {
    padding-bottom: max(1rem, env(safe-area-inset-bottom));
  }
}
```

### Touch Device Optimizations:
- Minimum button/link height: 44px
- Hover transforms disabled on mobile
- Tap highlight color uses gold accent

### Very Small Screens (iPhone SE - 375px and below):
- Reduced card padding
- Smaller button text and padding

---

## VIDEOS ON SITE

| Page | Section | Platform | Video ID |
|------|---------|----------|----------|
| Home | Hero | Vimeo | 832805208 |
| Home | Music & Edutainment | YouTube | qnb8-EeRuIY |
| Home | Music & Edutainment | YouTube | w2PN3aTl644 |
| Home | Think Big | YouTube | ECBTbTntOLE |

---

## EXTERNAL LINKS

- **AI Parenting Assistant:** https://voiceassistant.gift-connect.org/org/
- **AI Song Generator:** https://newsonggenerator.gift-connect.org/
- **AI Story Generator:** https://storygenerator.gift-connect.org/
- **Contact:** https://gift-connect.org/contact-us/
- **Sam Beard Logo:** https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/tr3jkIX12hM9NJuWV5zO/media/68f4d459e374a65e59e60dd0.webp

---

## DEPLOYMENT WORKFLOW

### Step 1: Navigate to project
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1
```

### Step 2: Check status and sync
```bash
git fetch origin
git status
# If behind, run: git pull origin main
```

### Step 3: Make changes and test
```bash
npm run dev
# Open http://localhost:3000
```

### Step 4: Build and verify
```bash
npm run build
```

### Step 5: Commit and push to GitHub
```bash
git add -A
git commit -m "Your commit message"
git push origin main
```

### Step 6: Deploy to Vercel
```bash
vercel --prod --yes
```

### Step 7: Sync backup folder (optional but recommended)
```bash
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Sam-Beard-Website"
git fetch origin && git reset --hard origin/main
```

---

## IMPORTANT WARNINGS

1. **USE TAILWIND v3** - v4 has CSS variable issues that break the design
2. **VERCEL CLI ONLY** - Don't rely on GitHub auto-deploy, use `vercel --prod --yes`
3. **TWO FOLDERS** - Both folders deploy to same project. Keep them synced.
4. **ALWAYS GIT PULL FIRST** - Check `git status` before making changes
5. **LOGO FROM CDN** - Sam Beard logo loads from external GoHighLevel URL
6. **MOBILE OPTIMIZED** - All responsive styles are in place, test on mobile after changes

---

## WHAT NOT TO DO

- ❌ Don't use Tailwind v4
- ❌ Don't deploy from the wrong folder without syncing
- ❌ Don't push without building first
- ❌ Don't modify the glassmorphic design (black/gold theme is final)
- ❌ Don't change the logo URL (it's from GoHighLevel CDN)
- ❌ Don't remove safe area insets or mobile optimizations

---

## REMAINING WORK / FUTURE ENHANCEMENTS

### Placeholders Still Needing Real Content:
1. **Birth To 3 Quote** - Sam's quote on Birth To 3 page is placeholder text
2. **Rupert Hitzig Photo** - Currently shows "RH" initials, needs actual photo

### Recently Completed (Feb 14, 2026):
- ✅ **Advisory Council Redesign** - Replaced 6 stacked images with 22 individual member cards
- ✅ **Six Loving Habits Redesign** - 6 individual cards with photos (Speak, Sing, Read, Play, Count, Serve & Return)
- ✅ **Legacy of Literacy Redesign** - 2-column layout with text and photos
- ✅ **Birth to 3 Page Overhaul**:
  - America's Economy & Workforce section with 6 stat cards
  - Leadership section (Judith Otter bio, Team photo, Historical photos)
  - Ethel Kennedy quote
- ✅ **CTA Button Update** - Gold styling, links to /#ai-tools

### Potential Future Pages:
- More GIFT Connect content pages
- Event calendar
- Resource downloads
- Newsletter signup

### Potential Integrations:
- GHL forms for contact/signup
- Analytics tracking
- Newsletter integration

---

## SAMPLE PROMPTS FOR CONTINUING

**To update Sam's quote on Birth To 3:**
> "Update Sam Beard's quote on the Birth To 3 page to: [new quote text]"

**To add Rupert Hitzig's photo:**
> "Replace the RH initials with Rupert's actual photo. Here's the image: [path or URL]"

**To add a new section:**
> "Add a new section called [name] to the home page with [description]"

**To update videos:**
> "Replace the Think Big video with this new YouTube URL: [URL]"

**To add new images:**
> "Add these images to the [section name]: [image paths]"

**To fix issues:**
> "The [page/section] isn't working correctly. Here's what I see: [description]"

---

## QUICK VERIFICATION COMMANDS

Check current git status:
```bash
git log --oneline -1
```

Count pages:
```bash
find /Users/brettlechtenberg/Documents/agent-girl/samb-website1/app -name "page.tsx" | wc -l
# Should return 2 (home + birth-to-3)
```

Count images:
```bash
ls /Users/brettlechtenberg/Documents/agent-girl/samb-website1/public/images/ | wc -l
# Should return 10
```

Check both folders are synced:
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1 && git log --oneline -1
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Sam-Beard-Website" && git log --oneline -1
# Both should show same commit hash: 6518dbf
```

---

## GIT HISTORY

```
6518dbf Update Explore Our Tools button to gold styling with AI tools link
cd3419f Add historical photos section to Leadership
a7f4f3d Add Judith Otter and team photos to Leadership section
c129182 Redesign Birth to 3 page with stat cards and Leadership section
1da884a Add photos to Legacy of Literacy section
(earlier commits...)
9563fff Redesign Advisory Council with 22 individual member cards
f35cc46 Add comprehensive mobile optimizations for 100% responsive design
4ed92f8 Add AI mascot images to tool cards
4a45cbf Add project documentation and restart prompt
8764bc5 Initial commit - Sam Beard Website
```

---

**Ready to continue!** 🚀

Just paste this restart prompt to resume work on the Sam Beard website.
