# Company Email Setup

**Primary email:** sistemahub1@gmail.com
**Domain:** sistemahub.com

---

## Recommended Setup: Google Workspace

Google Workspace gives you `@sistemahub.com` email addresses with Gmail, Google Drive, Docs, Calendar, and Meet — all under the company domain.

### Steps

1. **Register the domain** at a registrar (Namecheap, GoDaddy, Cloudflare, etc.) if not already done
2. **Sign up for Google Workspace** at workspace.google.com
   - Choose the starter plan (currently ~$6/user/month)
3. **Verify domain ownership** — Google will give you a TXT record to add to your DNS
4. **Set up MX records** — Point your domain's mail to Google's servers
   - Google provides the exact MX records during setup
5. **Create the mailbox:** `sistemahub1@gmail.com`
6. **Optionally add aliases** (e.g., `support@sistemahub.com` → forwards to hello)

### DNS Records Needed (Google Workspace)

| Type | Name | Value | Priority |
|------|------|-------|----------|
| MX | @ | `ASPMX.L.GOOGLE.COM` | 1 |
| MX | @ | `ALT1.ASPMX.L.GOOGLE.COM` | 5 |
| MX | @ | `ALT2.ASPMX.L.GOOGLE.COM` | 5 |
| MX | @ | `ALT3.ASPMX.L.GOOGLE.COM` | 10 |
| MX | @ | `ALT4.ASPMX.L.GOOGLE.COM` | 10 |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | — |

---

## Alternative: Zoho Mail (Free tier available)

Zoho Mail offers a free plan for up to 5 users at 5GB/user — good for getting started without cost.

1. Go to zoho.com/mail
2. Sign up with your domain
3. Add the required MX and TXT records to your DNS
4. Create `sistemahub1@gmail.com`

---

## Email Signature Template

```
[Your Name]
[Your Role]
SistemaHub
sistemahub1@gmail.com | sistemahub.com
```

---

## Status

- [ ] Domain registered
- [ ] Email provider chosen (Google Workspace / Zoho)
- [ ] DNS records configured
- [ ] sistemahub1@gmail.com active
- [ ] Email signature set up
