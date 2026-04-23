# Phan Tiến Huy — Portfolio

Personal portfolio website built with **React + TypeScript + Tailwind CSS**.

Live at: [github.com/Xofaivn/porfolio](https://github.com/Xofaivn/porfolio)

## Features

- Dark / Light mode
- English / Vietnamese (i18n)
- Smooth-scroll sidebar navigation
- Sections: Personal, Info (Social, GPA, Awards, Certs), Projects, Tech Stacks, Contact
- Framer Motion animations throughout
- Fully responsive

## Tech Stack

| Layer | Tech |
|-------|------|
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4, Framer Motion |
| Icons | lucide-react |
| Build | Vite 8 |

## Getting Started

```bash
cd portfolio-react
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the dist/ build
```

## Customization

All personal content is in one file — no need to touch components:

- **`portfolio-react/src/content/siteData.ts`** — profile info, social links, projects, tech stacks, education, awards
- **`portfolio-react/src/hooks/useI18n.ts`** — EN/VI UI strings (nav labels, section headings, button text)

## Project Structure

```
portfolio-react/src/
├── content/siteData.ts     # all portfolio data
├── sections/               # full-page sections (assembled in App.tsx)
├── components/             # reusable UI primitives
├── hooks/                  # useI18n, useThemeMode, useLanguageMode, useScrollToSection
└── context/                # ThemeContext, LanguageContext
```

## License

MIT
