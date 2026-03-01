# Scroll-Driven Hero Section Animation

Assignment implementation using Next.js, React, Tailwind CSS, and GSAP.

## Submission Links
- Live webpage: _to be added after first GitHub Pages deployment_
- GitHub repository: _to be added after repository publish_

## Features Implemented
- Full-screen hero section (above the fold)
- Letter-spaced headline: `WELCOME ITZFIZZ`
- Impact metrics cards with staggered load animation
- Scroll-linked car motion (left edge to right edge)
- Smooth intro animation using GSAP timeline
- Transform-based motion for performance

## Tech Stack
- Next.js
- React
- Tailwind CSS
- GSAP (`ScrollTrigger`)

## Local Development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## GitHub Pages Deployment
Deployment is automated via GitHub Actions workflow:
- `.github/workflows/deploy-pages.yml`

On every push to `master`, the app is built as static output and deployed to GitHub Pages.
