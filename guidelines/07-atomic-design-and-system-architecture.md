# 07 — Atomic Design & Design System Architecture

> **Source Distillation**: *Atomic Design* by Brad Frost.
> **Scope**: Universal component hierarchy, 3-tier design token architecture, content-first prototyping, and design system governance across any frontend stack.

---

## 1. Create Systems, Not Pages

The "Page" is a 4,000-year-old print metaphor that breaks down when applied to fluid, multi-device digital interfaces.
- **Effort Is Driven by Components, Not Page Count**: A 30,000-page university website may consist of only 3 content types and 15 reusable organisms, whereas a single "homepage" packed with custom interactive widgets can take months to engineer.
- **Modular Assembly**: Tear down monolithic views into an interdependent, hierarchical kit of reusable parts. Design simultaneously at both the macro (page/template) level and the micro (atomic) level.

---

## 2. The 5 Stages of Atomic Design (Brad Frost)

Atomic Design is a mental model—not a rigid linear waterfall—composed of five hierarchical stages that work concurrently:

```
[ Atoms ] ──► [ Molecules ] ──► [ Organisms ] ──► [ Templates ] ──► [ Pages ]
```

### Stage 1: Atoms
The smallest foundational building blocks of an interface that cannot be broken down further without losing functional meaning.
- **Examples**: `<label>`, `<input>`, `<button>`, `<h1>–<h6>`, `<svg>` icons, avatars, status badges, and design tokens (color swatches, typographic scales, spacing units).
- **Engineering Rule**: Atoms must have **zero external margin** (`margin: 0`). Spacing between atoms is always controlled by the parent Molecule or Organism (`gap`), ensuring atoms remain portable in any context.

### Stage 2: Molecules
Simple, cohesive groups of two or more Atoms bonded together to perform a single, focused UI function.
- **Principle**: *"Do one thing and do it well"* (Single Responsibility Principle).
- **Examples**:
  - **Search Form Molecule**: Label atom + Text Input atom + Submit Button atom.
  - **Form Field Molecule**: Label atom + Input atom + Helper/Error Message atom.
  - **Stat Metric Molecule**: Eyebrow Label atom + Large Numeric Value atom + Trend Badge atom.
  - **Nav Item Molecule**: Icon atom + Link Text atom + Notification Counter atom.

### Stage 3: Organisms
Relatively complex, self-contained UI sections composed of groups of Molecules and/or Atoms that form a distinct region of an interface.
- **Examples**:
  - **Global Header Organism**: Brand Logo atom + Primary Navigation molecule + Search Form molecule + User Profile Menu molecule.
  - **Product Card Grid Organism**: Section Header molecule + responsive grid of Product Card molecules.
  - **Pricing Table Organism**, **Checkout Summary Sidebar**, **Data Table with Filter Toolbar**, **Site Footer**.
- **Vault Mapping**: In `design-canvas-vault`, the `block-*` templates (`block-hero-*`, `block-nav-*`, `block-pricing-*`, `block-footer-*`) are battle-tested **Organisms** ready for assembly.

### Stage 4: Templates
Page-level structural skeletons that arrange Organisms into a layout grid and define the **content structure** (character lengths, image aspect ratios, responsive grid columns) without relying on final page-specific marketing copy.
- **Purpose**: Articulates the underlying spatial architecture and responsive breakpoints of a view class (e.g., *Dashboard Overview Template*, *Article Detail Template*, *E-Commerce Category Template*).

### Stage 5: Pages
Specific instances of Templates populated with **real, representative production content** (real headlines, real dynamic data, real photography).
- **Why Pages Are Essential to Test the System**:
  - Tests the resilience of Atoms, Molecules, and Organisms against edge cases: a 120-character German article title, a user with 0 items (Empty State), a user with 500 items (Pagination/Overflow), or a broken image asset.
  - If real content breaks a Template, you refine the underlying Organism or Molecule so the entire system becomes more resilient.

---

## 3. Three-Tier Design Token Architecture

To maintain a single source of truth across themes (Light / Dark / High-Contrast) and platforms without hardcoding values inside components, structure design tokens in three strict tiers:

| Tier | Role | Naming Pattern | Example |
|---|---|---|---|
| **1. Primitive (Global) Tokens** | Raw palette and scale values; context-agnostic. Never used directly inside Organisms. | `--color-{hue}-{shade}` / `--space-{step}` | `--color-slate-900: #0f172a;`<br>`--color-blue-600: #2563eb;`<br>`--space-4: 16px;` |
| **2. Semantic (Alias) Tokens** | Intent and role in the UI; switches automatically between Light and Dark modes. | `--surface-*`, `--text-*`, `--border-*`, `--accent-*` | `--surface-primary: var(--color-slate-900);`<br>`--text-primary: #f8fafc;`<br>`--accent-interactive: var(--color-blue-600);` |
| **3. Component Tokens** | Scoped overrides for complex Atoms/Molecules when needed. | `--{component}-{property}-{state}` | `--btn-primary-bg: var(--accent-interactive);`<br>`--card-padding: var(--space-6);` |

---

## 4. The Atomic Workflow: Interface Inventory & Pattern Governance

### 4.1 Conducting an Interface Inventory
Before refactoring or building a design system for an existing product, conduct an **Interface Inventory**:
1. Screenshot every distinct button, heading style, form input, card, navigation bar, and modal across the product.
2. Group them side-by-side by category. Exposing 14 slightly different button styles or 9 inconsistent shades of gray builds immediate stakeholder alignment for systematic consolidation.

### 4.2 Avoiding "Special Snowflake Syndrome"
When adding or modifying a pattern in a codebase, follow the **Component Decision Escalation Path**:
1. **Use As-Is**: Does an existing Atom, Molecule, or Organism already solve this UX problem? Use it without modification.
2. **Configure via Props / Variants**: Can an existing component solve the problem via an official variant (`size="sm"`, `variant="subtle"`)?
3. **Extend Systematically**: If a new capability is genuinely needed, upgrade the shared Molecule/Organism so the entire product benefits—never fork a copy-pasted one-off component for a single page.

### 4.3 Qualities of an Effective Pattern Library
- **Contextual Documentation**: Never display a component in a vacuum; document *where* it is used, *when* to use it vs. an alternative, and what content constraints (max characters, image ratios) apply.
- **Shared Cross-Discipline Vocabulary**: Designers, engineers, and product managers must use the exact same names for components and tokens (`StatCard`, `--surface-elevated`) in design tools, code, and specifications.
