# Scroll-Driven Hero Section Animation

Assignment implementation using Next.js, React, Tailwind CSS, and GSAP.

## Submission Links
- Live webpage: https://nidak7.github.io/next-hero/
- GitHub repository: https://github.com/nidak7/next-hero

## Originality Note
This project was implemented from scratch in this repository using the assignment requirements and visual inspiration from the provided reference link. Layout structure, styling choices, animation timing, and code organization are custom to this submission.

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
