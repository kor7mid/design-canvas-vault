---
name: design-canvas-vault
description: "1,245 curated Canvas templates, 79 business demo design systems, visual lookbook with thumbnails in chat, CLI extraction, Studio GUI, and high-fidelity multi-stack conversion."
---

# Design Canvas Vault — AI Agent Skill

This skill grants full access to the curated library of **1,245 Canvas templates**, **79 business demo design systems**, and design tokens, with interactive **Lookbook Mode** directly inside the chat and surgical CLI extraction tools.

> **Path Resolution**: Paths in this skill resolve relative to `<directory>` (`~/.agents/skills/design-canvas-vault` or the repository root).
> You can run `node <directory>/scripts/vault-cli.js <command>` from any workspace.

---

## Core Directives & Rules

1. **Zero Memory Bloat (Lazy-Loading Architecture)**: NEVER load all 1,245 files into context. Consult the lightweight catalogs (`catalog/*.md`), query the compact index (`registry/llm-index.json`), or run `node <directory>/scripts/vault-cli.js search <query>` / `inspect <id>`.
2. **Interactive Lookbook Mode (In-Chat Thumbnails)**: Before generating interface code, present **3 to 4 relevant template options** and render their actual preview images directly in the chat:
   ```markdown
   | Option | ID              | Name                  | Preview                                        |
   | ------ | --------------- | --------------------- | ---------------------------------------------- |
   | 1      | `block-hero-10` | Hero Vacation Minimal | ![hero-10](sources/previews/intro/hero-10.jpg) |
   | 2      | `block-hero-18` | Hero SaaS Terminal    | ![hero-18](sources/previews/intro/hero-18.jpg) |
   ```
   The user visually reviews and selects their preferred template.
3. **Industry Context (79 Business Niches)**: When a specific vertical is requested (Fintech, Medical, SaaS, Real Estate, Restaurant, Legal, Gym, etc.), cross-reference `catalog/01-demos-dna.md` to extract the exact palette (`--cnvs-themecolor`), typography (Google Fonts), and component styling for that industry.
4. **Surgical Mix & Match**: Combine structural blocks (e.g., `block-hero-18` + `block-content-cards-switch` + `block-content-pricing-5`) and skin them with the visual DNA of any business demo (e.g., `demo-finance` or `demo-saas`).

---

## Internal CLI Tools (`scripts/vault-cli.js`)

Execute these commands to inspect, search, and extract code without context window bloat:

```bash
# 1. Instant search across 1,245 templates by keyword, category, or industry
node scripts/vault-cli.js search "pricing"
node scripts/vault-cli.js search "fintech" --json

# 2. Inspect template anatomy (DOM skeleton, CSS classes, CSS variables, fonts, colors)
node scripts/vault-cli.js inspect block-content-pricing-5

# 3. Surgical code extraction (purified HTML/CSS without demo wrapper headers/footers)
node scripts/vault-cli.js extract block-content-pricing-5
node scripts/vault-cli.js extract block-hero-10 --html-only

# 4. Generate Design System Tokens (Tailwind, CSS :root, React Native / Expo)
node scripts/vault-cli.js tokens demo-finance --format tailwind
node scripts/vault-cli.js tokens demo-saas --format rn
node scripts/vault-cli.js tokens demo-medical --format css

# 5. Launch local Vault Studio GUI
npm start # or node scripts/vault-cli.js studio
```

---

## High-Fidelity Multi-Stack Conversion

When translating Canvas templates to the user's stack:

### 1. Next.js / React + Tailwind CSS + shadcn/ui

- Convert Bootstrap/Canvas grid classes (`col-md-6`, `row`, `container`) to responsive Tailwind CSS (`grid grid-cols-1 md:grid-cols-2 gap-8`, `max-w-7xl mx-auto px-6`).
- Export demo design tokens into `tailwind.config.js` using `node scripts/vault-cli.js tokens <demo>`.
- Replace buttons, forms, and dialogs with accessible `shadcn/ui` primitives.
- Strictly type all components with TypeScript interfaces.

### 2. React Native / Expo

- Convert elements to `View`, `Text`, `TouchableOpacity`, `ScrollView`, or `FlashList`.
- Apply design tokens via StyleSheet or NativeWind:
  ```tsx
  import { theme } from "./theme";
  ```
- Replace CSS animations with `react-native-reanimated`.

### 3. Dark Luxury Theme Guidelines

- Main surface: `#000000` or `#090d16`.
- Elevated cards: `#0a0a0a` or `rgba(22, 30, 49, 0.7)` with `1px solid rgba(255, 255, 255, 0.08)`.
- Text hierarchy: Primary `#ededed` / `#f8fafc`, Secondary `#888888` / `#94a3b8`.
- Contrast: WCAG AA compliant.

---

## "Save to Vault" Command

When the user asks:

> _"Save this component to my vault"_

1. Create a clean file in `sources/custom/custom-<name>.html`.
2. Add an entry to `catalog/04-custom-templates.md`.
3. Run `npm run sync` to update all indexes and registries.
