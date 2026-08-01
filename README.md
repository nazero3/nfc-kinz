# Kinz NFC Intro Card

Digital introduction page for Kinz NFC gift cards. Tap the card → this page opens on the phone.

## What’s included

| File | Purpose |
|------|---------|
| `index.html` | Mobile-first NFC landing page |
| `styles.css` | Brand styles (Kinz palette) |
| `assets/kinz-brochure.pdf` | Downloadable brochure |
| `assets/brochure.html` | Printable HTML brochure (optional) |
| `images/` | Logo + hero image |

## Brand colors (from kinz-ed.com)

- Navy `#1A2656`
- Deep navy `#0B1024`
- Gold `#FBB03B`
- WhatsApp `#25D366`

WhatsApp: [wa.me/963983888184](https://wa.me/963983888184)

## Preview locally

```bash
cd nfc-kinz
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy

Host the folder on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a subpath on kinz-ed.com).

Suggested URL for NFC write: `https://kinz-ed.com/card` or `https://card.kinz-ed.com`

## Program the NFC card

1. Install an NFC writer app (e.g. **NFC Tools** on Android/iOS).
2. Write a **URL** record pointing to your deployed page.
3. Lock the tag if you don’t want it rewritten (optional).

When someone taps the card, their phone opens the intro page automatically.

## Replace the brochure

Drop your own PDF at `assets/kinz-brochure.pdf` (same filename) to update the download button.
