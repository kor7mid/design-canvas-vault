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
   | Option | ID              | Name                  | Preview                                                                                      |
   | ------ | --------------- | --------------------- | -------------------------------------------------------------------------------------------- |
   | 1      | `block-hero-10` | Hero Vacation Minimal | ![hero-10](https://kor7mid.github.io/design-canvas-vault/sources/previews/intro/hero-10.jpg) |
   | 2      | `block-hero-18` | Hero SaaS Terminal    | ![hero-18](https://kor7mid.github.io/design-canvas-vault/sources/previews/intro/hero-18.jpg) |
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

## Context-First & Multi-Stack Conversion

> **Project Context Mandate**: Always inspect the user's existing project files (`package.json`, stylesheets, components) FIRST. Respect the project's native styling architecture (Vanilla CSS, CSS Variables, SCSS, CSS Modules, Bootstrap/Canvas, Styled-Components, Vue Scoped CSS, React Native `StyleSheet`, or Tailwind). **Never force Tailwind CSS or any specific framework unless the project already uses it or the user explicitly asks for it.**

### 1. Vanilla HTML5 / Modern CSS / SCSS / CSS Modules

- Export design tokens as native CSS Custom Properties (`:root { --color-primary: ...; }`) via `node scripts/vault-cli.js tokens <demo> --format css`.
- Use modern CSS Grid (`display: grid; grid-template-columns: repeat(12, 1fr)`), Flexbox, and semantic HTML5 landmarks.

### 2. Next.js / React / Vue / Svelte (Tailwind or CSS Modules)

- Adapt Canvas structures to the project's component architecture.
- If the project uses Tailwind, export tokens via `node scripts/vault-cli.js tokens <demo> --format tailwind`.
- Strictly follow existing project conventions for state, props, and typing (JS/JSDoc or TypeScript).

### 3. React Native / Expo

- Convert elements to `View`, `Text`, `Pressable`, `ScrollView`, or `FlashList`.
- Export tokens via `node scripts/vault-cli.js tokens <demo> --format rn`:
  ```tsx
  import { theme } from "./theme";
  ```
- Replace CSS transitions with `react-native-reanimated`.

### 4. Dark Luxury Theme Guidelines

- Main surface: `#000000` or `#090d16`.
- Elevated cards: `#0a0a0a` or `rgba(22, 30, 49, 0.7)` with `1px solid rgba(255, 255, 255, 0.08)`.
- Text hierarchy: Primary `#ededed` / `#f8fafc`, Secondary `#888888` / `#94a3b8`.
- Contrast: WCAG AA compliant.

---

## Master Design Engineering Knowledge Base (`guidelines/`)

Whenever generating, refactoring, or auditing an interface, apply the stack-agnostic rules from the 4 design engineering manuals located in `guidelines/`:

1. **`guidelines/01-refactoring-ui.md`** (_Refactoring UI_ — Adam Wathan & Steve Schoger):
   - **3-Tier Text Contrast**: Primary (`#0f172a` / `#f8fafc`), Secondary (`#475569` / `#94a3b8`), Tertiary (`#94a3b8` / `#64748b`).
   - **De-emphasize to Emphasize**: Soften competing elements rather than inflating font sizes.
   - **Eliminate Naive `Label: Value` Formats**: Merge context into values (_"12 left in stock"_).
   - **Baseline Alignment**: Align mixed font sizes (`$49 / mo`) by `align-items: baseline`, never `align-items: center`.
   - **Numeric Right-Alignment**: Strictly right-align numbers, prices, and percentages in tables (`text-align: right`).
   - **Hue-Shifting & Tinted Grays**: Shift hues toward yellow when lightening and toward blue/indigo when darkening; never use dead neutral gray.
   - **Dual-Shadow Elevation & Inner Image Borders**: Combine crisp 1px edge definition with diffused ambient shadows; prevent white image bleed with `box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08)`.

2. **`guidelines/02-dont-make-me-think.md`** (_Don't Make Me Think_ — Steve Krug):
   - **Zero Cognitive Friction**: Every screen must be self-evident. Omit 50% of words, eliminate "Happy Talk" and form instructions.
   - **Billboard Design for Scanners**: Leverage conventions, create clear visual zones, ensure unmistakable clickability affordances, and keep headings closer to the paragraph they introduce (`margin-top: 32px; margin-bottom: 8px`).
   - **The Trunk Test & Information Scent**: Every page needs a prominent `H1` that matches the exact wording of the link clicked; strip global navigation during checkouts/multi-step forms.
   - **Mobile & Touch Ergonomics**: Enforce minimum `44px × 44px` touch targets, zero hover dependencies (`No cursor = no hover = no clue`), and proper HTML5 `inputmode` keyboards.

3. **`guidelines/03-universal-layout-principles.md`** (_100 Universal Layout Principles_ — Beth Tondreau):
   - **Grid Families**: Match content to Single-Column (manuscripts), Two-Column (asymmetrical 2:1 golden ratio), Three-Column (editorial hang lines), 12-Column (Khoi Vinh's universal multiple of 3 & 4), or Modular Bento Matrices.
   - **Swiss Grid & Baseline Lock**: Lock all typography and spacing onto a continuous 4px/8px vertical baseline rhythm; use hairline rules as structural containers.
   - **Controlled Surprise & Silhouettes**: Establish strict grid order for 80% of the layout, then introduce intentional interruptions (pull quotes, overlapping Z-axis layers, or cutout silhouettes breaking boxy frames).

4. **`guidelines/04-visual-identity-ia-and-ux-writing.md`** (_Visual Identity, IA & IHM Ergonomics_):
   - **Chromatic Spatiality & Gaze Direction**: Warm colors advance, cool colors recede; avoid pure `#000` on `#FFF` glare; orient human photography gaze directly toward the Primary CTA.
   - **Ortho-Typography & i18n**: Never stretch fonts, max 3 font families, never hyphenate proper nouns or numbers, respect French vs. English double-punctuation spacing (`&nbsp;:`).
   - **IA Structures & Zero-Click Rule**: Choose Tree, Persona-Selection, or Funnel IA; expose core interactive value on the hero with zero preliminary clicks; never animate logos/headers (prevents Banner Blindness); strictly ban >3Hz flashing (WCAG 2.3.1 neuro-safety).

---

## "Save to Vault" Command

When the user asks:

> _"Save this component to my vault"_

1. Create a clean file in `sources/custom/custom-<name>.html`.
2. Add an entry to `catalog/04-custom-templates.md`.
3. Run `npm run sync` to update all indexes and registries.
