# Sam Beard Website - Claude Instructions

## Project Overview

**Sam Beard / GIFT Connect Website**
- Early childhood education advocacy site
- AI-powered parenting tools
- Black/Gold/White glassmorphic design

## Quick Start

```bash
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1
npm run dev
```

## Project Locations

### Primary Location:
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
| Tailwind CSS | 3.4 | Glassmorphic design |
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
2. AI Tools - 3 tool cards (Parenting Assistant, Song Generator, Story Generator)
3. Music & Edutainment - 2 YouTube videos + Rupert Hitzig quote
4. Think Big! Yes We Can! - YouTube video
5. Get Started - Six Loving Habits + Legacy of Literacy images
6. Advisory Council - 6 council member images

### Birth To 3 (`/birth-to-3`)
1. Hero - Sam Beard photo + quote
2. America in Crisis - 2 Help America images
3. Key Facts - Brain development stats
4. CTA - Explore Our Tools

### Contact
- External link to gift-connect.org/contact-us/

## Key Files

```
samb-website1/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home page (all sections)
│   ├── birth-to-3/page.tsx  # Birth To 3 page
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
│   ├── six-loving-habits.webp
│   ├── legacy-of-literacy.webp
│   ├── advisory-council-1-6.webp
│   └── help-america-1-2.webp
└── RESTART-PROMPT-SAM-BEARD.md  # Ultimate restart prompt
```

## Deployment Workflow

```bash
# 1. Navigate to project
cd /Users/brettlechtenberg/Documents/agent-girl/samb-website1

# 2. Make changes and test
npm run dev

# 3. Build and verify
npm run build

# 4. Commit and push
git add -A
git commit -m "Your message"
git push origin main

# 5. Deploy to Vercel
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
4. **Two Folders** - Keep primary and backup synced

## Core Principles

### Be Concise & Direct
- Answer directly without unnecessary preamble
- Match response length to question complexity

### Research & Analysis
- Verify facts before stating them
- Ask clarifying questions rather than assuming

### Problem-Solving
1. Understand the full context before answering
2. Break down complex questions into manageable parts
3. Provide practical, actionable solutions
