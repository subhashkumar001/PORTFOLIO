# Personal Portfolio — "Engineer's Notebook"

An editorial, hand-designed personal portfolio tailored for a first-year B.Tech engineering student. Built with an "engineer's notebook" aesthetic: warm paper surface, ink-black typography, vermilion accent, technical rule lines, small monospace metadata, and asymmetric grids.

Designed with deliberate restraint—strictly no generic AI-card grids, no pastel gradients, no glassmorphism, no emojis, and no inflated claims.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with pure CSS variable design tokens (`src/styles/tokens.css`)
- **Typography**: Google Fonts with `font-display: swap`
  - Headings / Display: *Instrument Serif* (regular + italic)
  - Body: *Hanken Grotesk* (400, 500, 600)
  - Labels / Code / Metadata: *JetBrains Mono* (400, 500)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/) (lightweight scroll reveals with full `prefers-reduced-motion` compliance)

---

## File Structure

```text
portfolio/
├── public/
│   ├── favicon.svg          # Initial 'A' in Instrument Serif on vermilion square
│   ├── resume.pdf           # Resume document
│   └── images/              # Technical SVG schematics for hover previews
│       ├── project-1.svg
│       ├── project-2.svg
│       └── project-3.svg
├── src/
│   ├── components/
│   │   ├── About.jsx        # Asymmetric 3/8 grid with first-principles story & quick facts
│   │   ├── Contact.jsx      # Big 36px email link, 1-click copy, and bottom-border form
│   │   ├── Footer.jsx       # 3-column colophon + oversized cropped wordmark (~18vw)
│   │   ├── Hero.jsx         # 7/5 grid with masked reveal, status dot, and offset shadow frame
│   │   ├── Journey.jsx      # Vertical timeline with 1px rule & 10px square markers
│   │   ├── Navbar.jsx       # Sticky 72px header (hides on down-scroll, shows on up-scroll)
│   │   ├── NotFound.jsx     # Custom editorial 404 ledger page
│   │   ├── Projects.jsx     # Full-width numbered rows with cursor hover preview & takeaways
│   │   ├── Skills.jsx       # 3 text columns (Languages, Web, Tools) + Currently learning pills
│   │   └── ThemeToggle.jsx  # Sun/moon toggle with 2px accent ring
│   ├── data/
│   │   └── content.js       # SINGLE SOURCE OF TRUTH: All text, links, and projects
│   ├── styles/
│   │   └── tokens.css       # CSS custom properties for light and dark palettes
│   ├── App.jsx              # App layout, document title, and route handling
│   ├── index.css            # Base Tailwind layers, noise overlay, and typography utilities
│   └── main.jsx             # Entry point
├── index.html               # Semantic HTML, font preconnects, and Open Graph metadata
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview production build locally
```bash
npm run preview
```

---

## How to Edit Your Content (`src/data/content.js`)

All personal details, project descriptions, skills, and links reside in a single file: `src/data/content.js`. You do not need to touch component code to update your portfolio.

### 1. Owner Details
```javascript
owner: {
  fullName: "Aditya Sharma",          // Your full name
  firstName: "Aditya",                // Displayed in navbar logo & footer wordmark
  initial: "A",                       // Monogram fallback & favicon
  course: "B.Tech CSE, 1st year, IIT Delhi, New Delhi",
  branch: "Computer Science",
  college: "IIT Delhi",
  city: "New Delhi",
  email: "aditya@example.com",
  github: "https://github.com/aditya",
  linkedin: "https://linkedin.com/in/aditya",
  resumePdf: "/resume.pdf",           // Place your resume inside the /public folder
  photoUrl: null,                     // Set to image path (e.g. "/photo.jpg") or null for monogram
}
```

### 2. Hero & About
- `hero.tagline`: Change `prefix`, `italicWord`, and `suffix` to emphasize your primary focus.
- `about.paragraphs`: 2 short, honest paragraphs explaining why you chose engineering and what you're currently building.
- `about.quickFacts`: Key-value pairs for Location, Studying, and Interests.

### 3. Skills
- `skills.categories`: Three columns (`Languages`, `Web`, `Tools`). Simply add or remove string items.
- `skills.currentlyLearning`: Array of strings rendered as bordered monospace pills.

### 4. Projects (Selected Work)
Each project entry contains:
```javascript
{
  number: "01",
  title: "CLI Expense Ledger",
  description: "A terminal tool for tracking personal student expenses...",
  tech: ["C", "File I/O", "Make", "Valgrind"],
  github: "https://github.com/your-username/repo",
  live: null, // or "https://your-demo-url.com"
  learned: "Mastered struct serialization to disk and zero-memory-leak hygiene with Valgrind.",
  previewImg: "/images/project-1.svg"
}
```

### 5. Timeline (Journey)
Chronological entries with date (`YYYY / MM`), title, and concise description. The latest entry automatically receives the vermilion accent marker.

### 6. Contact Form Backend
The form in `src/components/Contact.jsx` submits via standard `fetch` to:
```javascript
formAction: "https://formspree.io/f/YOUR_FORMSPREE_ID"
```
To connect live emails:
1. Create a free form at [formspree.io](https://formspree.io).
2. Paste your form ID into `content.contact.formAction` inside `src/data/content.js`.

---

## Color System

| Token | Light Theme | Dark Theme | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#F4F1EA` | `#121110` | Warm paper page background |
| `--color-surface` | `#EBE6DB` | `#1B1A17` | Cards, tags, hover states |
| `--color-ink` | `#16140F` | `#EDE8DC` | Primary headings and text |
| `--color-secondary`| `#6B665B` | `#9A9486` | Secondary body text and labels |
| `--color-border` | `#CFC8B8` | `#2E2B25` | Thin 1px rules and frame strokes |
| `--color-accent` | `#E8431C` | `#FF6A3D` | Vermilion accent (<5% of screen) |
| `--color-status-dot`| `#1F7A4D` | `#3DBE7F` | Green dot for "open to opportunities" |

---

## Deployment

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Framework preset **Vite** will be detected automatically.
4. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'` if deploying to a project page.
2. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm install -D gh-pages && npm run deploy`.

