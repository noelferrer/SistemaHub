# SistemaHub — Workspace Guide

> If you're new here, start with this file. Everything has a place.

---

## Folder Map

| Folder | What's inside |
|--------|--------------|
| `website/` | The full Next.js website — self-contained. Copy this folder to any machine and it runs. |
| `brand/` | Logo files, brand colors, typography, brand guidelines |
| `documents/` | Company profile, pitch deck, proposal & invoice templates |
| `ops/` | Deployment guide, email setup, hosting configs |

Inside `website/`:

| Folder | What's inside |
|--------|--------------|
| `website/app/` | Next.js app shell — layout, globals, pages |
| `website/modules/` | Site sections — Hero, About, Services, Products, Contact, ThemeSwitcher, Legal |
| `website/components/` | Shared UI — Navbar, Footer |
| `website/public/` | Static assets — logo SVGs |

---

## Quick Links

- **Need the logo?** → `brand/logo/option-b/`
- **Brand guidelines?** → `brand/brand-guidelines.md` or `brand/guidelines.html`
- **Send a proposal?** → `documents/templates/proposal-template.md`
- **Introduce the company?** → `documents/company-profile.md`
- **Set up email?** → `ops/email-setup.md`
- **Deploy the website?** → `ops/deployment.md`
- **Edit the website?** → `website/modules/` (each section is self-contained)
- **Run the website locally?** → `cd website && npm install && npm run dev`

---

## Status

| Asset | Status |
|-------|--------|
| Brand identity | Done — Option B logo, Plum palette |
| Website | Live at [sistemahub.com](https://sistemahub.com) |
| Terms of Service | Live at [sistemahub.com/terms](https://sistemahub.com/terms) |
| Privacy Policy | Live at [sistemahub.com/privacy](https://sistemahub.com/privacy) |
| Company profile | Ready |
| Proposal template | Ready — fill in per project |
| Company email (sistemahub1@gmail.com) | See `ops/email-setup.md` |

---

## Tech Stack (Website)

| Layer | Tool |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion 11 |
| Process Manager | PM2 |
| Reverse Proxy | Nginx |
| SSL | Certbot (Let's Encrypt) |
| Hosting | VPS — 187.77.131.194 |
| Repo | github.com/noelferrer/SistemaHub |

---

## Questions?

Check `CLAUDE.md` for full project context and architecture decisions.
