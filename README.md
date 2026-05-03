# Emife1 Portfolio

A deploy-ready portfolio website for Victoria Emife, built with Next.js, TypeScript, and Tailwind CSS.

## Project status

This repository is ready to connect to Vercel through GitHub. Vercel should build with:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave default
- Production Branch: `main`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Content updates

Most portfolio content is stored in:

```text
src/lib/portfolio-data.ts
```

Update that file to change services, metrics, timeline entries, portfolio projects, testimonials, and contact links.

## Deployment

The simplest deployment path is GitHub plus Vercel auto-deploy:

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Select the `main` branch for production.
4. Vercel deploys automatically on every push to `main`.
