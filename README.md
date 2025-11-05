# Portfolio

A modern, fast personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It highlights projects, skills, and contact information with a clean design, smooth interactions, and good accessibility.

## Features

- Responsive layout with elegant typography (Bodoni Moda for headings, Inter for body)
- Sections: Hero, About, Projects, Tech Stack, Fun Facts, Contact, Footer
- Mobile-friendly navigation with an accessible sheet/drawer and overlay
- Smooth micro‑interactions (hover/scale) and reduced‑motion safeguards
- Code‑split below‑the‑fold sections for faster initial load
- Basic SEO meta tags (OG/Twitter), favicon, and canonical URL

## Tech Stack

- React 18 + TypeScript (Vite)
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Router (hash links within the single page)
- Utility libraries: lucide-react, zod, react-hook-form, date-fns

## Project Structure

Key files and folders:

- `src/pages/Index.tsx` – Main page composition
- `src/components/` – UI sections (Hero, About, Projects, TechStack, FunFacts, Contact, Navigation, Footer)
- `src/components/ui/` – shadcn/ui components
- `src/lib/utils.ts` – Utility helpers (e.g., class name merging)
- `index.html` – Entry HTML with fonts and meta tags
- `tailwind.config.ts` – Tailwind theme and font mapping
- `vite.config.ts` – Vite configuration

## Getting Started

1) Install dependencies
2) Start the dev server
3) Build for production (optional)

Commands (PowerShell):

```powershell
npm install
npm run dev
# open the URL shown in the terminal (e.g., http://localhost:5173 or similar)

# production build
npm run build
# preview the production build locally
npm run preview
```

## Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Production build
- `npm run build:dev` – Development-mode build
- `npm run preview` – Preview the production build
- `npm run lint` – Lint the codebase

## Customization

- Update content in section components under `src/components/`
- Adjust theme and fonts in `tailwind.config.ts` and `index.html`
- Replace images/assets in `public/`

## Notes

- Accessibility: Dialog/sheet components include proper titles and keyboard/overlay dismissal
- Performance: Noncritical sections are lazy‑loaded; keep images optimized

## License

This project is for personal portfolio use. You may use it as inspiration; please remove personal content and attribution specific to the original author when adapting.

