# Zemax Digital — Luxury Portfolio Website

Ein modernes Next.js/TypeScript Portfolio für **Zemax Digital** mit Luxury Branding, CSS Modules, responsiven Sektionen und sanften Animationen.

## Start in VS Code

```bash
npm install
npm run dev
```

Danach öffnen:

```bash
http://localhost:3000
```

## Projektstruktur

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    BrandLogo/
    ButtonLink/
    Cta/
    Footer/
    Hero/
    Navbar/
    PortfolioGrid/
    Process/
    Reveal/
    SectionHeader/
    Services/
    StatsBar/
    Testimonials/
  lib/
    content.ts
  types/
    content.ts
public/
  zemax-luxury-logo.svg
  favicon.svg
```

## Anpassen

- Texte, Services, Projekte und Testimonials: `src/lib/content.ts`
- Farben/Design-Tokens: `src/app/globals.css`
- Logo-Komponente: `src/components/BrandLogo/BrandLogo.tsx`
- Logo-SVG-Datei: `public/zemax-luxury-logo.svg`

## Features

- Next.js App Router
- TypeScript
- CSS Modules pro Komponente
- Luxury Branding mit Gold/Obsidian-Look
- Animierte Hero-Gradienten, Reveal-Animationen, Hover-Effekte
- Responsive Layouts für Desktop, Tablet und Mobile
