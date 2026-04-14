# SistemaHub — Project Context

## What Is This

SistemaHub is the main marketing and portfolio website. It serves as the company's public face — introducing the company, showcasing services, and presenting products/webapps to potential clients.

### Products Showcased

- **TaoLink HRIS** — HR information system webapp
- **Landlord HQ** — Property/landlord management webapp
- More products to be added as they are built

### Goals

- Help potential clients understand who SistemaHub is and what they do
- Market the company's webapps and services
- Act as a central hub for all SistemaHub projects

---

## Tech Stack

| Layer           | Tool                    |
| --------------- | ----------------------- |
| Framework       | Next.js (App Router)    |
| Styling         | Tailwind CSS            |
| Components      | shadcn/ui               |
| Animations      | Framer Motion           |
| Process Manager | PM2                     |
| Reverse Proxy   | Nginx                   |
| SSL             | Certbot (Let's Encrypt) |
| Hosting         | VPS (self-hosted)       |

---

## Workspace Layout

The repo root holds company-wide assets; the website itself is self-contained in `website/`:

- `website/` — The full Next.js website. Portable: copy this folder anywhere and it runs.
- `brand/` — Logo files, brand guidelines, colors, typography
- `documents/` — Company profile, pitch deck, proposals, invoice templates
- `ops/` — Deployment & infrastructure docs

## Website Architecture

Inside `website/`, following the global modular architecture standard (see `~/.claude/CLAUDE.md`):

- `website/app/` — Next.js app shell, layout, global config
- `website/base/` — Providers and shared base setup
- `website/modules/` — Each section of the site is a self-contained module:
  - `hero/` — Landing/hero section
  - `about/` — Company introduction
  - `services/` — Services offered
  - `products/` — Showcase of webapps (TaoLink, Landlord HQ, etc.)
  - `contact/` — Contact form or CTA
  - `theme-switcher/` — Theme switcher
  - `legal/` — Legal page layout (for terms & privacy)
- `website/components/` — Shared UI (Navbar, Footer)
- `website/public/` — Static assets (images, icons)

Each module is independently editable and can be disabled without affecting others.

---

## Deployment

Self-hosted on VPS. Full instructions in `ops/deployment.md`. Summary:

```bash
cd ~/sistemahub && git pull
cd website && npm install && npm run build
pm2 restart sistemahub
```

Stack: PM2 (process manager) · Nginx (reverse proxy) · Certbot (SSL).

---

## Project Memory

Use `.memory` in the project root for ongoing notes, decisions, and progress.

---

## Status

Live at [sistemahub.com](https://sistemahub.com) — Next.js 15, Tailwind v3, Framer Motion 11.
