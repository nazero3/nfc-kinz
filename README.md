# Kinz NFC Card (React)

React component for the Kinz NFC gift-card landing page. Preview standalone here, then copy one folder into **kinz-ed** (React front + Laravel back).

## Quick start (this repo)

```bash
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173).

```bash
npm run build    # production build check
npm run preview  # serve the build
```

## What to copy into kinz-ed

Copy **one folder** — everything is self-contained:

```text
src/components/NfcCard/
  NfcCard.jsx
  NfcCard.css
  index.js
  assets/
    hero-web.jpg
    kinz-logo-nfc.png
    kinz-brochure.pdf
```

Into kinz-ed (adjust path to match that repo):

```text
resources/js/Components/NfcCard/   # or src/components/NfcCard/
```

No import path changes needed.

## Wire a route in kinz-ed

### React Router (SPA)

```jsx
import { NfcCard } from './components/NfcCard'

// inside your <Routes>
<Route path="/card" element={<NfcCard />} />
```

Suggested NFC URL: `https://kinz-ed.com/card`

### Inertia.js (Laravel + React)

```jsx
// Pages/Nfc/Card.jsx
import { NfcCard } from '@/components/NfcCard'

export default function Card() {
  return <NfcCard />
}
```

```php
// routes/web.php
Route::get('/card', fn () => Inertia::render('Nfc/Card'))->name('nfc.card');
```

Hide the main site chrome (nav/footer) on this page if your layout wraps every Inertia page — render `NfcCard` without the default layout, or use a blank layout.

## Font (Cairo)

The component expects **Cairo**. If kinz-ed already loads it, do nothing. Otherwise add once in the app shell or `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

## Props (optional overrides)

```jsx
<NfcCard
  websiteUrl="https://kinz-ed.com"
  whatsappUrl="https://wa.me/963983888184?text=..."
  instagramUrl="https://www.instagram.com/kinz.platform"
  brochureUrl="/storage/brochures/kinz.pdf"  // e.g. Laravel public disk
/>
```

Styles are scoped under `.nfc-kinz` so they should not clash with the rest of kinz-ed.

## NFC programming

1. Deploy `/card` on kinz-ed.
2. Write that URL onto the NFC tag (NFC Tools, etc.).
3. Lock the tag if you do not want it rewritten.

## Brand colors

| Token | Hex |
|-------|-----|
| Navy | `#1A2656` |
| Deep navy | `#0B1024` |
| Gold | `#FBB03B` |
| WhatsApp | `#25D366` |

## Legacy static files

`assets/brochure.html` is an optional printable brochure (not part of the React app). Root `images/` and old `styles.css` can be removed after you confirm the React build looks correct.
