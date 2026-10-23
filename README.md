# Design Canvas Vault

> **The ultimate repository of 1,245 Canvas templates, 79 business demo design systems, visual Lookbook, local Studio GUI, and universal AI Agent Skill.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Templates](https://img.shields.io/badge/Templates-1%2C245_Indexed-emerald.svg)](#)
[![Business Demos](https://img.shields.io/badge/Business_Demos-79_Niches-orange.svg)](#)
[![Universal Skill](https://img.shields.io/badge/AI_Agent-Skill_Compatible-purple.svg)](#)
[![Live Studio](https://img.shields.io/badge/Live_Studio-kor7mid.github.io%2Fdesign--canvas--vault-111111?style=flat&logo=githubpages&logoColor=white)](https://kor7mid.github.io/design-canvas-vault/)

---

## 🌐 Live Interactive Studio & Online Lookbook

Preview, filter, and inspect all 1,245 templates and 79 business design systems directly in your browser without installing anything:

👉 **[Launch Live Studio — https://kor7mid.github.io/design-canvas-vault/](https://kor7mid.github.io/design-canvas-vault/)**

- **Split Studio**: Real-time live rendering across Desktop (100%), Tablet (768px), and Mobile (375px) viewports with live accent color customization.
- **Lookbook Gallery**: Visual browsing with 16:10 preview thumbnails and instant category filtering.
- **Page Composer**: Interactive full-page stack builder with real-time assembled preview and one-click code generation.

---

## Universal Skill Installation

To install this skill globally for your AI coding agent (Cursor, Claude Code, Windsurf, Zed, etc.):

```bash
npx skills add kor7mid/design-canvas-vault -g
```

Once installed, the AI agent has instant access to interactive Lookbook mode, industry-specific recommendations, and multi-stack code conversion.

---

## Launch Vault Studio GUI

Preview all 1,245 templates in real time, customize design tokens, compose full-page stacks, and inspect clean code in a minimalist dark interface:

```bash
git clone https://github.com/kor7mid/design-canvas-vault.git
cd design-canvas-vault

# Start Studio on http://localhost:3333
npm start
```

### Studio Highlights:

- **Leaderboard Explorer**: Full searchable database with keyboard shortcuts (`/` to search, `Esc` to close).
- **Responsive Viewport**: Live rendering with Desktop (100%), Tablet (768px), and Mobile (375px) presets.
- **Design Token Inspector**: Live color preview and automatic Tailwind config generation.
- **Page Stack Builder**: Stack multiple blocks (Hero + Cards + Pricing + Footer) to generate a complete page blueprint.
- **Code Extraction**: One-click copy for clean HTML/CSS and AI prompts.

---

## Internal CLI Tools

The repository includes a fast Node.js CLI tool (`scripts/vault-cli.js`) to inspect, extract, and convert templates without context window bloat:

```bash
# Search 1,245 templates by keyword, category, or industry
node scripts/vault-cli.js search "pricing"
node scripts/vault-cli.js search "fintech" --json

# Inspect DOM structure and design tokens of any template
node scripts/vault-cli.js inspect block-content-pricing-5

# Extract clean, purified HTML/CSS
node scripts/vault-cli.js extract block-content-pricing-5
node scripts/vault-cli.js extract block-hero-10 --html-only

# Generate Design System tokens (Tailwind, CSS :root, React Native / Expo)
node scripts/vault-cli.js tokens demo-finance --format tailwind
node scripts/vault-cli.js tokens demo-saas --format rn
node scripts/vault-cli.js tokens demo-medical --format css

# Validate catalog integrity
node scripts/vault-cli.js doctor
```

---

## 79 Business Niche Design Systems

Each industry vertical includes a complete visual identity (primary/secondary palette, Google Fonts, and CSS tokens):

| Industry              | Demo ID            | Primary Color | Secondary Color | Typography                    |
| --------------------- | ------------------ | ------------- | --------------- | ----------------------------- |
| **Fintech / Finance** | `demo-finance`     | `#264653`     | `#E9C46A`       | DM Serif Text / Manrope       |
| **SaaS Modern**       | `demo-saas`        | `#0b44a7`     | `#ffbd00`       | Hoss Round / Sans-serif       |
| **Medical & Health**  | `demo-medical`     | `#0088cc`     | `#2C3E50`       | Poppins / Sans-serif          |
| **Real Estate**       | `demo-real-estate` | `#1ABC9C`     | `#333333`       | Lato / Sans-serif             |
| **Restaurant / Food** | `demo-restaurant`  | `#d35400`     | `#2C3E50`       | Playfair Display / Sans-serif |
| **Gym & Fitness**     | `demo-gym`         | `#e74c3c`     | `#111111`       | Montserrat / Sans-serif       |
| **Law Firm / Legal**  | `demo-law-firm`    | `#1d2a44`     | `#c5a880`       | Merriweather / Sans-serif     |

_Browse all 79 industries in [`catalog/01-demos-dna.md`](catalog/01-demos-dna.md)._

---

## Catalogs & Gallery

- [`catalog/01-demos-dna.md`](catalog/01-demos-dna.md): 79 Business Demos & DNA tokens
- [`catalog/02-blocks-catalog.md`](catalog/02-blocks-catalog.md): 243 UI Blocks categorized
- [`catalog/03-pages-layouts.md`](catalog/03-pages-layouts.md): 782 Application & Marketing Pages
- [`catalog/04-custom-templates.md`](catalog/04-custom-templates.md): Community contributions
- [`catalog/05-presets-recipes.md`](catalog/05-presets-recipes.md): Pre-assembled full page blueprints
- [`GALLERY.md`](GALLERY.md): Visual lookbook with thumbnails and prompts

---

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines on submitting new templates and presets.

---

## License

Distributed under the MIT License. See `LICENSE` for details.
