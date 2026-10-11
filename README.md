# Dazzling Diva

Dazzling Diva is a responsive fashion storefront frontend for showcasing women's clothing and accessories. The current homepage brings together a promotional hero, shopping categories, new arrivals, and featured product sections, with shared navigation and footer components.

> This repository currently contains a storefront UI prototype. Product data is hard-coded, product imagery is loaded from external image URLs, and there is no commerce backend, checkout flow, or persistent cart yet.

## Features

- Responsive homepage with a promotional hero and product/category sections.
- Category cards for Sharee, Three Piece, Two Piece, Hijab, and Royal Abaya.
- New-arrival and featured product cards with sample product information.
- Shared navigation with a mobile menu and storefront-style footer.
- Server-side rendering through React Router.

## Tech stack

- **React 19** and **TypeScript** for the UI.
- **React Router 7** for routing, server rendering, and the production server.
- **Vite 8** for local development and production builds.
- **Tailwind CSS 4** with its Vite plugin for styling.
- **Lucide React** and **React Icons** for icon libraries.
- **Node.js 20** as the runtime; a multi-stage **Docker** build is included.

## Requirements

- Node.js 20 or later.
- npm (the project includes `package-lock.json`).

## Getting started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the React Router development server. |
| `npm run typecheck` | Generate React Router route types and run TypeScript checks. |
| `npm run build` | Create the production build in `build/`. |
| `npm run start` | Serve the production build. Run `npm run build` first. |

## Production

Build and serve the app with Node.js:

```bash
npm run build
npm run start
```

Or build and run the included Docker image from the repository root:

```bash
docker build -t dazzling-diva .
docker run --rm -p 3000:3000 dazzling-diva
```

## Project structure

```text
app/
  mainLayout/       Shared navigation, page layout, and footer
  routes/           Homepage and storefront section components
  app.css           Global styles and Tailwind CSS import
  root.tsx          HTML document, metadata, and app error boundary
  routes.ts         React Router route configuration
public/             Static public assets
Dockerfile          Multi-stage production container build
```

The configured route is the homepage (`/`). Several navigation and category links are presentation placeholders and do not yet have matching routes. The current product and category lists live in the route components; no database, API, authentication, payment, or order-management integration is configured.

## Notes for contributors

- Update the sample product and category data in `app/routes/` when changing the storefront content.
- Replace the placeholder navigation destinations and footer details with verified store routes and contact information before launch.
- Keep `package-lock.json` in sync when dependencies change.
