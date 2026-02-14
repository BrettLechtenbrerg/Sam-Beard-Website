# Sam Beard Website - Claude Instructions

## Project Overview

**Sam Beard / GIFT Connect Website**
- Early childhood education advocacy site
- AI-powered parenting tools (Sammie, Geno, Stacy)
- Black/Gold/White glassmorphic design
- 2 pages: Home + Birth To 3

## Quick Start

```bash
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1
npm run dev
# Open http://localhost:3000
```

## Project Locations

### Primary Location (USE THIS):
```
/Users/brettlechtenberg/Documents/agent-girl/samb-website1
```

### Backup Location:
```
/Users/brettlechtenberg/Desktop/Claude Projects/Sam-Beard-Website
```

### Remote:
- **GitHub:** https://github.com/BrettLechtenbrerg/Sam-Beard-Website
- **Live URL:** https://samb-website1.vercel.app
- **Vercel Project:** bretts-projects-3e254e58/samb-website1

## Tech Stack

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.1.6 | App Router |
| React | 19 | Latest |
| Tailwind CSS | 3.4 | **USE v3, NOT v4** |
| Framer Motion | Latest | Animations |
| TypeScript | Latest | Type safety |
| Deployment | Vercel | CLI workflow only |

## Brand Colors

- **Black (Primary):** #000000
- **Gold (Accent):** #FACC15 (yellow-400)
- **White (Text):** #FFFFFF

## Pages

### Home (`/`)
1. Hero - "Join Us NOW To Save Our Children" + Vimeo video
2. AI For Good - 3 tool cards (Sammie, Geno, Stacy) with mascot images
3. Music & Edutainment - 2 YouTube videos + Sam Beard quote
4. Think Big! Yes We Can! - YouTube video
5. Six Loving Habits - 6 individual cards with photos
6. Legacy of Literacy - 2-column with text + photos
7. Advisory Council - 22 individual member cards

### Birth To 3 (`/birth-to-3`)
1. Hero - Sam Beard photo + quote
2. America's Economy & Workforce - 6 stat cards
3. Leadership - Judith Otter bio, Team photo, Historical photos
4. Key Facts - 90%, 1M+, 65K stats
5. CTA - Explore Our Tools

### Contact
- External link to gift-connect.org/contact-us/

## Key Files

```
samb-website1/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home page (7 sections)
│   ├── birth-to-3/page.tsx  # Birth To 3 page (5 sections)
│   ├── globals.css          # Glassmorphic design system
│   ├── icon.png             # Favicon
│   └── apple-icon.png       # Apple touch icon
├── components/
│   ├── Navigation.tsx       # Main nav with logo
│   ├── Footer.tsx           # Site footer
│   └── animations/
│       ├── FadeIn.tsx       # Fade animation
│       └── ScaleIn.tsx      # Scale animation
├── public/images/
│   ├── sam-beard.png        # Sam's photo
│   ├── council/             # 22 Advisory Council photos
│   ├── habits/              # 6 Loving Habits photos
│   ├── literacy/            # Legacy of Literacy photos
│   └── leadership/          # Leadership section photos
└── RESTART-PROMPT-SAM-BEARD.md  # Ultimate restart prompt
```

## Deployment Workflow

```bash
# 1. Navigate to project
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1

# 2. Check status and sync
git fetch origin && git status
# If behind: git pull origin main

# 3. Make changes and test
npm run dev

# 4. Build and verify
npm run build

# 5. Commit and push
git add -A
git commit -m "Your message"
git push origin main

# 6. Deploy to Vercel
vercel --prod --yes
```

## External Links

- AI Parenting Assistant: https://voiceassistant.gift-connect.org/org/
- AI Song Generator: https://newsonggenerator.gift-connect.org/
- AI Story Generator: https://storygenerator.gift-connect.org/
- Contact: https://gift-connect.org/contact-us/

## Important Notes

1. **Use Vercel CLI** - Always deploy with `vercel --prod --yes`
2. **Sam Beard Logo** - From GoHighLevel CDN (external URL in Navigation.tsx)
3. **Tailwind v3** - Do not upgrade to v4
4. **Two Folders** - Keep primary and backup synced with git
5. **Mobile Optimized** - Test on mobile after changes

## Remaining Work

1. **Birth To 3 Quote** - Sam's quote is placeholder text (line 121-124)

## For Full Details

See: `RESTART-PROMPT-SAM-BEARD.md` for complete documentation including:
- All 22 Advisory Council members
- Video IDs and URLs
- Mobile optimization details
- Git history
- Sample prompts for continuing work
