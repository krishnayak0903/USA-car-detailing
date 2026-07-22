# USA Car Detailing

Premium automotive detailing landing page built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 19** — UI library
- **Vite 7** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first CSS (uses `@tailwindcss/vite` plugin, no config file needed)
- **Framer Motion** — Scroll animations & 3D hero element
- **Lucide React** — Icons
- **TypeScript** — Type safety

## Project Structure

```
usa-car-detailing/
├── public/
│   ├── favicon.svg
│   └── images/              # Before/after car images
├── src/
│   ├── components/          # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── before-after.tsx
│   │   ├── services.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── pricing.tsx
│   │   ├── testimonials.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── lib/
│   │   └── utils.ts         # cn() utility
│   ├── pages/
│   │   └── home.tsx         # Main page assembly
│   ├── App.tsx
│   ├── index.css            # Tailwind + CSS variables
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — no additional configuration needed
4. Click **Deploy**

## Customization

- **Colors** — Edit CSS variables in `src/index.css` (`:root` block)
- **Content** — Update text directly in each component file in `src/components/`
- **Images** — Replace files in `public/images/` with real before/after photos (keep the same filenames, or update paths in `src/components/before-after.tsx`)
- **Pricing** — Edit the `plans` array in `src/components/pricing.tsx`
- **Contact info** — Edit address, phone, and hours in `src/components/contact.tsx`
