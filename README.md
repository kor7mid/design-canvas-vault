# Design Canvas Vault

> **The ultimate repository of 1,245 Canvas templates, 79 business demo design systems, 8 Design Engineering Bibles, visual Lookbook, interactive Web Studio, and Universal AI Agent Skill.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Templates](https://img.shields.io/badge/Templates-1%2C245_Indexed-emerald.svg)](https://kor7mid.github.io/design-canvas-vault/)
[![Business Demos](https://img.shields.io/badge/Business_Demos-79_Niches-orange.svg)](https://kor7mid.github.io/design-canvas-vault/?cat=demos)
[![Universal Skill](https://img.shields.io/badge/AI_Agent-Universal_Skill-purple.svg)](#universal-skill-installation)
[![Live Web Studio](https://img.shields.io/badge/Live_Web_Studio-kor7mid.github.io%2Fdesign--canvas--vault-111111?style=flat&logo=githubpages&logoColor=white)](https://kor7mid.github.io/design-canvas-vault/)

---

## 🌐 Official Live Web Studio & Online Lookbook

Browse, search, filter, and open all **1,245 templates** and **79 business design systems** directly in your browser without installing anything:

👉 **Official Website: [https://kor7mid.github.io/design-canvas-vault/](https://kor7mid.github.io/design-canvas-vault/)**

- **Spacious Paginated Catalog**: Filter across 243 UI Blocks, 220 Business Demos, and 782 Application Pages (`24 items/page`, keyboard navigation `←` / `→` and `/` to search).
- **Full-Screen Live Preview**: Click any card to open the real standalone template page with a floating theme color customizer and one-click prompt copy.
- **Global CDN**: Hosts all template preview thumbnails and demo assets at `https://kor7mid.github.io/design-canvas-vault/sources/...`.

---

## ⚡ Universal Skill Installation

Install this skill globally for your AI coding agent (Cursor, Claude Code, Windsurf, VS Code, Copilot, Zed, etc.):

```bash
npx skills add kor7mid/design-canvas-vault -g
```

Once installed, your AI agent gains instant access to:

1. **Interactive Lookbook Mode**: Renders live preview thumbnails directly in the chat before writing code.
2. **79 Industry Design Systems**: Automatically applies authentic color palettes and typography pairings for any business vertical.
3. **8 Design Engineering Bibles (`guidelines/`)**: Enforces battle-tested rules from _Refactoring UI_, _Don't Make Me Think_, _100 Universal Layout Principles_, _Laws of UX_, _Animation in Design Systems_, _Atomic Design_, and _Generative AI UX_.
4. **Context-First & Stack-Agnostic Generation**: Adapts templates to your project's existing stack (Vanilla CSS, SCSS, CSS Modules, Bootstrap, React, Next.js, Vue, Svelte, or React Native).

---

## 🚀 Run Vault Studio Locally

```bash
git clone https://github.com/kor7mid/design-canvas-vault.git
cd design-canvas-vault

# Start Studio on http://localhost:3333
npm start
```

- **Clean Semantic URLs**:
  - Catalog Home: `http://localhost:3333/`
  - Any Template Live Page: `http://localhost:3333/demo-academic`, `http://localhost:3333/block-hero-10`

---

## 🛠️ Internal TypeScript CLI (`scripts/vault-cli.ts`)

Query, inspect, and extract surgical code without saturating LLM context windows:

```bash
# Search 1,245 templates by keyword, category, or industry
npm run search -- "pricing"
npm run search -- "finance" --json

# Inspect DOM structure, CSS classes, fonts, and colors of any template
npm run inspect -- block-content-pricing-5

# Extract clean, purified HTML/CSS markup
npm run extract -- block-content-pricing-5
npm run extract -- block-hero-10 --html-only

# Export Design System tokens (CSS :root variables, Tailwind, or React Native)
npm run tokens -- demo-finance --format css
npm run tokens -- demo-finance --format tailwind
npm run tokens -- demo-saas --format rn

# Validate repository integrity across all 1,245 templates
npm run doctor
```

---

## 📚 Master Design Engineering Guidelines (`guidelines/`)

- [`guidelines/01-refactoring-ui.md`](guidelines/01-refactoring-ui.md): Complete _Refactoring UI_ engineering manual (3-tier contrast, baseline alignment, hue-shifting, dual-shadow elevation, component micro-tactics).
- [`guidelines/02-dont-make-me-think.md`](guidelines/02-dont-make-me-think.md): Steve Krug's usability laws (zero cognitive friction, billboard scanning, Trunk Test, information scent, 44×44px touch targets).
- [`guidelines/03-universal-layout-principles.md`](guidelines/03-universal-layout-principles.md): Beth Tondreau's 100 layout & Swiss grid rules (12-column math, baseline lock, hang lines, z-axis layering).
- [`guidelines/04-visual-identity-ia-and-ux-writing.md`](guidelines/04-visual-identity-ia-and-ux-writing.md): Color psychology, Vox-ATypI typography, international ortho-typography, IA funnels, and WCAG neuro-safety.
- [`guidelines/05-laws-of-ux-and-cognitive-psychology.md`](guidelines/05-laws-of-ux-and-cognitive-psychology.md): Jon Yablonski's 10 Laws of UX, Sweller's Cognitive Load Theory, and CNIL Ethical Choice Architecture & Desirable Friction.
- [`guidelines/06-animation-and-motion-design-systems.md`](guidelines/06-animation-and-motion-design-systems.md): Val Head's motion systems (Productive vs. Expressive motion, duration tokens, custom cubic-bezier curves, choreography, and `prefers-reduced-motion`).
- [`guidelines/07-atomic-design-and-system-architecture.md`](guidelines/07-atomic-design-and-system-architecture.md): Brad Frost's Atomic Design methodology (Atoms $\rightarrow$ Pages) and 3-tier Primitive/Semantic/Component token architecture.
- [`guidelines/08-modern-ux-and-generative-ai-patterns.md`](guidelines/08-modern-ux-and-generative-ai-patterns.md): Classical Web/Mobile UI design patterns and BCG X Generative AI / Autonomous Agent UX patterns.

---

## 🎨 79 Business Niche Design Systems

| Industry                 | Demo ID            | Primary Color | Secondary Color | Typography                    | Live Preview                                                                |
| ------------------------ | ------------------ | ------------- | --------------- | ----------------------------- | --------------------------------------------------------------------------- |
| **Academic & Research**  | `demo-academic`    | `#ECA92D`     | `#2C3E50`       | Larken / Acumin Pro           | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-academic)    |
| **Fintech & Finance**    | `demo-finance`     | `#264653`     | `#E9C46A`       | DM Serif Text / Manrope       | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-finance)     |
| **SaaS Modern**          | `demo-saas`        | `#0b44a7`     | `#ffbd00`       | Hoss Round / Sans-serif       | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-saas)        |
| **Medical & Healthcare** | `demo-medical`     | `#0088cc`     | `#2C3E50`       | Poppins / Sans-serif          | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-medical)     |
| **Real Estate**          | `demo-real-estate` | `#1ABC9C`     | `#333333`       | Lato / Sans-serif             | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-real-estate) |
| **Restaurant & Dining**  | `demo-restaurant`  | `#d35400`     | `#2C3E50`       | Playfair Display / Sans-serif | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-restaurant)  |
| **Law Firm & Legal**     | `demo-law-firm`    | `#1d2a44`     | `#c5a880`       | Merriweather / Sans-serif     | [Live Demo](https://kor7mid.github.io/design-canvas-vault/demo-law-firm)    |

_Browse all 79 industries in [`catalog/01-demos-dna.md`](catalog/01-demos-dna.md) and [`GALLERY.md`](GALLERY.md)._

---

## 📄 License

Distributed under the MIT License.
