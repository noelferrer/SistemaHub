# Deployment Guide

The SistemaHub website is self-hosted on a VPS using PM2, Nginx, and Certbot.

---

## Stack

| Tool | Role |
|------|------|
| Next.js | App framework |
| PM2 | Process manager — keeps the app alive, restarts on crash |
| Nginx | Reverse proxy — routes traffic from port 80/443 to Next.js |
| Certbot | SSL certificate via Let's Encrypt |

---

## First-Time Server Setup

### 1. Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Install PM2

```bash
npm install -g pm2
```

### 3. Install Nginx

```bash
sudo apt install nginx
```

### 4. Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx
```

---

## Deploying the Website

The website code lives in the `website/` folder. All `npm` commands must be run from there.

```bash
# 1. Pull latest code (run from repo root)
cd ~/sistemahub
git pull origin main

# 2. Enter the website folder
cd website

# 3. Install dependencies
npm install

# 4. Build the app
npm run build

# 5. Restart with PM2 (normal deploys — already registered)
pm2 restart sistemahub

# If re-registering from scratch (e.g. after PM2 reset):
# Nginx routes sistemahub.com → port 3002. Must set PORT=3002.
PORT=3002 pm2 start npm --name "sistemahub" --cwd "/var/www/sistemahub/website" -- start
pm2 save
```

> **Port note:** Nginx proxies `sistemahub.com` to `127.0.0.1:3002`. Always start with `PORT=3002` — Next.js defaults to 3000 and will 502 without it.

---

## Nginx Config

Location: `/etc/nginx/sites-available/sistemahub`

```nginx
server {
    server_name sistemahub.com www.sistemahub.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # SSL config added automatically by Certbot
}
```

Enable the config:
```bash
sudo ln -s /etc/nginx/sites-available/sistemahub /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## SSL Certificate

```bash
sudo certbot --nginx -d sistemahub.com -d www.sistemahub.com
```

Certbot will auto-renew. Verify with:
```bash
sudo certbot renew --dry-run
```

---

## PM2 — Useful Commands

```bash
pm2 list                  # See running processes
pm2 logs sistemahub       # View logs
pm2 restart sistemahub    # Restart the app
pm2 stop sistemahub       # Stop the app
pm2 startup               # Auto-start PM2 on server reboot
pm2 save                  # Save current process list
```

---

## Checklist — Go Live

- [ ] Domain DNS pointing to VPS IP
- [ ] Node.js and PM2 installed on server
- [ ] Nginx installed and configured
- [ ] App builds without errors (`npm run build`)
- [ ] PM2 running the app (`pm2 list`)
- [ ] SSL certificate issued by Certbot
- [ ] Site loads at https://sistemahub.com
- [ ] PM2 startup configured (`pm2 startup && pm2 save`)
