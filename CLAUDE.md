# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a software developer, supporting English/Vietnamese i18n and dark/light mode. The actual app lives in `portfolio-react/` — the root-level `src/`, `index.html`, and `package.json` are an unused Vite scaffold.

## Commands

All commands run from `portfolio-react/`:

```bash
npm run dev       # Dev server with HMR (Vite)
npm run build     # tsc + vite build (outputs to dist/)
npm run preview   # Serve production build locally
```

## Architecture

### Data Flow

All portfolio content is centralized in `src/content/siteData.ts` — projects, social links, skills, education, awards. Sections import from there directly. Translations (EN/VI strings) live in `src/hooks/useI18n.ts`.

Global state is provided by two contexts:
- `ThemeContext` / `useThemeMode` — dark/light mode (Tailwind class-based)
- `LanguageContext` / `useLanguageMode` — EN/VI toggle

### Component Layers

- **`src/sections/`** — full-page sections (`PersonalSection`, `InfoSection`, `ProjectsSection`, `StacksSection`, `ContactSection`), assembled in order inside `App.tsx`
- **`src/components/`** — reusable UI primitives (`GlassCard`, `Button`, `ProjectCard`, `BokehBackground`, `TopNavbar`, `Sidebar`)
- **`src/hooks/`** — thin wrappers around contexts (`useThemeMode`, `useLanguageMode`) plus `useI18n` for translation strings and `useScrollToSection` for smooth scroll

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed for v4 — config is in `portfolio-react/tailwind.config.js` for custom colors). Dark mode uses the `class` strategy. Custom color palette: primary teal (`#00352F`), secondary (`#004d44`). Framer Motion handles entrance animations on most sections.

### TypeScript

Strict mode is on (`"strict": true`, `noUnusedLocals`, `noUnusedParameters`). Build will fail on unused variables.
