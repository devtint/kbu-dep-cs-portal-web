# KBU CS Department Portal Web

The public web portal for the KBU Faculty of Science Computer Science community.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run lint` — run ESLint
- `npm run format` — format the project files
- `npm run format:check` — verify formatting without changing files
- `npm run typecheck` — run the TypeScript checker
- `npm run build` — create a production build
- `npm run start` — serve the production build

## Content editing

V1 content is local and typed. Edit `src/content/site-data.ts` to update announcements, events, resources, and department highlights. Replace temporary contact details and visual assets there or in the relevant components when official KBU materials are available.

## Team workflow

The default branch is `main`. Use this flow:

```text
feature/* → dev → main
```

- `main` — stable, production-ready code
- `dev` — shared integration branch
- `feature/*` — individual developer work

Create feature branches from `dev`, for example `feature/events-page` or `fix/mobile-navigation`:

```bash
git switch dev
git pull origin dev
git switch -c feature/events-page
```

Open a pull request from `feature/*` into `dev`. After testing and review, open a pull request from `dev` into `main`. Protect both branches and require pull-request review. Before requesting review, run `npm run lint`, `npm run typecheck`, and `npm run build`.

## Pre-commit checks

After `npm install`, Husky enables the pre-commit hook. Each commit formats staged files and runs ESLint on staged JavaScript and TypeScript files.

## V1 boundaries

This release is a public, static-content foundation. Authentication, dashboards, databases, CMS integration, and backend APIs are intentionally reserved for a later phase.
