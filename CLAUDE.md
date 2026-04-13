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

## Architecture

Follows the global modular architecture standard (see `~/.claude/CLAUDE.md`):

- `base/` — Next.js app shell, layout, global config, providers
- `modules/` — Each section of the site is a self-contained module:
  - `modules/hero/` — Landing/hero section
  - `modules/about/` — Company introduction
  - `modules/services/` — Services offered
  - `modules/products/` — Showcase of webapps (TaoLink, Landlord HQ, etc.)
  - `modules/contact/` — Contact form or CTA
- `public/` — Static assets (images, icons, fonts)
- `components/` — Shared UI primitives used across modules

Each module is independently editable and can be disabled without affecting others.

---

## Deployment

Self-hosted on VPS:

1. `next build` — builds the production app
2. `next start` — starts the server
3. **PM2** — keeps the process alive and auto-restarts on crash
4. **Nginx** — reverse proxy, routes traffic to Next.js port
5. **Certbot** — manages SSL certificates (Let's Encrypt)

---

## Project Memory

Use `.memory` in the project root for ongoing notes, decisions, and progress.

---

## Status

Brand new — not yet scaffolded.
