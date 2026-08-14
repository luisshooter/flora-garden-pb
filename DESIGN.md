# Design

<!-- impeccable:design-schema 1 -->

## Direction

Brief-pinned replica of the user's own Lovable preview (`qQqxM3ozGjB4mRIvezrnChEgZkPz5KjH`) — real Flora Garden (Pato Branco, PR) content and photography substituted for the preview's São Paulo/placeholder data. No concept-seed roll: the world was fixed by the brief.

## Palette

oklch tokens copied from the reference preview, re-declared as CSS variables in `app/globals.css`:

- `--background` / `--cream` `oklch(98.3% 0.008 90)` — warm off-white ground
- `--foreground` / `--ink` `oklch(22% 0.015 140)` — near-black warm green-grey
- `--primary` / `--sage` `oklch(38% 0.055 145)` — deep sage green, carries every CTA and link
- `--secondary` `oklch(94% 0.018 110)` — pale sage-cream, alternates section backgrounds
- `--accent` `oklch(78% 0.06 130)` — light sage, decorative use
- `--gold` `oklch(64% 0.09 75)` — reserved accent, not yet used on a live element
- `--border` `oklch(90% 0.015 110)`

Color strategy: **Restrained** — neutral cream ground plus one committed sage accent, matching the reference's quiet, boutique-florist register.

## Type

- Display: **Cormorant Garamond** (400/500/600, italic available) via `next/font/google`, `--font-display` — headings, the "as palavras" italic emphasis in the hero.
- Body/nav: **Jost** (300–600) via `next/font/google`, `--font-body` — paragraph copy and uppercase tracked-out nav/eyebrow labels.

## Components

- **Arch cards** (`.arch-card`): `border-radius: 999px 999px 1.5rem 1.5rem`, clamps to a dome on the top corners. Used on the three service photos.
- **Pill buttons**: `rounded-full`, solid sage for primary/WhatsApp actions, outlined foreground/25 border for secondary actions.
- **Reveal** (`components/reveal.tsx`): framer-motion `whileInView` fade-up-from-24px, `once: true`, staggered via a `delay` prop — the site-wide scroll-reveal grammar, replacing the reference's `animate-fade-up` Tailwind utility with an equivalent motion primitive already used in sibling Pine projects.
- **Leaf decorations** (`components/leaf-icon.tsx` + `.leaf-float`/`.leaf-float-delay` keyframes): two low-opacity SVG leaves drifting in the hero, matching the reference's floating-leaf accents.
- **Floating WhatsApp button**: fixed bottom-right, `whatsapp-pulse` glow animation, same pattern as sibling Pine sites.
- **Header**: fixed, transparent over the hero image, fades in a `--card` background + hairline shadow past 60px of scroll (framer-motion `useScroll`/`useMotionValueEvent`).

## Content substitutions from the reference

| Reference (placeholder) | This build (real) |
|---|---|
| São Paulo address, fake phone | Av. Tupi, 4417 — Cristo Rei, Pato Branco - PR · (46) 99115-7030 |
| "Desde 2009" + invented stats (15+ anos, 2.400 arranjos, 180 jardins) | Real Instagram numbers: 2.369 seguidores, 121 posts, 6 dias/semana aberto |
| "4,9 de 5" Google rating + 3 invented named testimonials | Honest note ("ainda não tem avaliações no Google") + 3 real Instagram comments, attributed by handle |
| Stock photography (bouquet flatlay, garden path, monstera shelf) | Real photos captured from `@flora_garden_pb`'s own Instagram (screenshots saved to `public/images/`) |
| Fixed placeholder hours | Real hours from Google Places API: Mon–Fri 8:30–18:30, Sat 8:30–14:00, Sun closed |

## Known gaps / replacement list

- No dedicated outdoor-landscaping photo was available in the sampled Instagram posts — the "Paisagismo" card reuses an interior plant-styling shot. Swap in a real garden/landscaping photo when the client provides one.
- Google Business listing has zero reviews — the "Avaliar no Google" CTA was deliberately dropped until real reviews exist; revisit once the client starts collecting them.
- Mobile viewport was verified by code (Tailwind responsive classes) but not visually screenshotted — this session's browser-automation tool did not honor a resized viewport. Recommend a manual phone check before shipping.
