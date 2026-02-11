# Sam Beard Website - Ultimate Restart Prompt
**Last Updated:** February 11, 2026 @ 6:55 AM MST
**Current Commit:** 8764bc5

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
- AI-powered tools for parents and caregivers
- Black/Gold/White glassmorphic design (based on MACC website template)
- **2 pages** (Home, Birth To 3) + external Contact link

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

## CURRENT STATE (as of Feb 11, 2026)

### ✅ Home Page (`/`)

**Sections in order:**
1. **Hero** - "Join Us NOW To Save Our Children" headline + Vimeo video (832805208)
2. **AI For Good** - 3 tool cards:
   - My AI Parenting Assistant → https://voiceassistant.gift-connect.org/org/
   - My AI Song Generator → https://newsonggenerator.gift-connect.org/
   - My AI Story Generator → https://storygenerator.gift-connect.org/
3. **Music & Edutainment** - 2 YouTube videos side-by-side:
   - Abujubuju baby (qnb8-EeRuIY)
   - Second video (w2PN3aTl644)
   - Rupert Hitzig quote (GC Creative Director)
4. **Think Big! Yes We Can!** - YouTube video (ECBTbTntOLE)
5. **Get Started** - 2 full-width stacked images:
   - Six Loving Habits infographic
   - Legacy of Literacy
6. **Advisory Council** - 6 full-width stacked images (advisory-council-1 through 6)

### ✅ Birth To 3 Page (`/birth-to-3`)

**Sections in order:**
1. **Hero** - Sam Beard photo + quote (side by side on desktop)
2. **America in Crisis** - 2 full-width stacked images:
   - Help America 1
   - Help America 2
3. **Key Facts** - 3 stat cards:
   - 90% brain development in first 3 years
   - 1M+ neural connections per second
   - 65K mothers impacted
4. **CTA** - "Ready to Make a Difference?" with button to home page

### ✅ Navigation
- Sam Beard logo (from GoHighLevel CDN)
- Home → `/`
- Birth To 3 → `/birth-to-3`
- Contact → External link to gift-connect.org/contact-us/

### ✅ Favicon
- Sam Beard logo as favicon (`app/icon.png`)
- Apple touch icon (`app/apple-icon.png`)

---

## KEY FILES

```
samb-website1/
├── app/
│   ├── layout.tsx              # Root layout, fonts (Montserrat + Open Sans)
│   ├── page.tsx                # ⭐ Home page with all 6 sections
│   ├── birth-to-3/page.tsx     # ⭐ Birth To 3 page
│   ├── globals.css             # Glassmorphic design system (black/gold/white)
│   ├── icon.png                # Favicon
│   └── apple-icon.png          # Apple touch icon
├── components/
│   ├── Navigation.tsx          # Main nav with Sam Beard logo
│   ├── Footer.tsx              # Site footer
│   └── animations/
│       ├── FadeIn.tsx          # Fade-in animation component
│       └── ScaleIn.tsx         # Scale-in animation component
├── public/images/
│   ├── sam-beard.png           # Sam's photo (from desktop)
│   ├── six-loving-habits.webp  # Infographic
│   ├── legacy-of-literacy.webp # Infographic
│   ├── advisory-council-1.webp # Council member 1
│   ├── advisory-council-2.webp # Council member 2
│   ├── advisory-council-3.webp # Council member 3
│   ├── advisory-council-4.webp # Council member 4
│   ├── advisory-council-5.webp # Council member 5
│   ├── advisory-council-6.webp # Council member 6
│   ├── help-america-1.webp     # America in Crisis image 1
│   └── help-america-2.webp     # America in Crisis image 2
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

---

## WHAT NOT TO DO

- ❌ Don't use Tailwind v4
- ❌ Don't deploy from the wrong folder without syncing
- ❌ Don't push without building first
- ❌ Don't modify the glassmorphic design (black/gold theme is final)
- ❌ Don't change the logo URL (it's from GoHighLevel CDN)

---

## REMAINING WORK / FUTURE ENHANCEMENTS

### Placeholders Still Needing Real Content:
1. **Birth To 3 Quote** - Sam's quote on Birth To 3 page is placeholder text
2. **Rupert Hitzig Photo** - Currently shows "RH" initials, needs actual photo

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
# Both should show same commit hash
```

---

## GIT HISTORY

```
8764bc5 Initial commit - Sam Beard Website
```

---

**Ready to continue!** 🚀

Just paste this restart prompt to resume work on the Sam Beard website.
