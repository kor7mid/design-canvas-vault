# 07 — Atomic Design & 3-Tier Token Architecture

> **Source**: Brad Frost (*Atomic Design*) — Component Hierarchy, Token Governance & System Resilience.

---

## 1. The 5 Concurrent Stages of Atomic Design
`[ Atoms ] ──► [ Molecules ] ──► [ Organisms ] ──► [ Templates ] ──► [ Pages ]`
1. **Atoms**: Indivisible primitives (`<label>`, `<input>`, `<button>`, `<h1>`, `<svg>` icons, avatars, badges, tokens). **Mandatory Rule**: Atoms must have **zero external margin (`margin: 0`)**; spacing is controlled exclusively by parent Molecules/Organisms (`gap`).
2. **Molecules**: Cohesive groups of 2+ Atoms fulfilling a single responsibility (*Search Form* = Label + Input + Button; *Stat Metric* = Eyebrow + Value + Trend Pill).
3. **Organisms**: Self-contained interface regions composed of Molecules/Atoms (*Global Header*, *Hero Section*, *Pricing Matrix*, *Bento Feature Grid*, *Data Table Toolbar*, *Footer*).
4. **Templates**: Page-level structural skeletons defining grid spans, character length limits, and responsive breakpoints without hardcoded marketing prose.
5. **Pages**: Templates populated with **real representative & worst-case content** (120-char headlines, 0-item Empty States, 500-item Pagination) to stress-test underlying Organisms.

---

## 2. Three-Tier Design Token Architecture
Never hardcode raw hex/px values inside Organisms; separate tokens into three strict layers:
1. **Primitive (Global) Tokens**: Context-agnostic raw scale values (`--color-slate-900: #0f172a; --space-4: 16px;`).
2. **Semantic (Alias) Tokens**: Role-based intent that adapts automatically across Light/Dark/High-Contrast modes (`--surface-primary: var(--color-slate-900); --text-primary: #f8fafc; --border-hairline: rgba(255,255,255,0.08);`).
3. **Component Tokens**: Scoped overrides (`--btn-primary-bg: var(--accent-interactive); --card-radius: 16px;`).

---

## 3. Pattern Governance (Preventing "Special Snowflake Syndrome")
Follow the **Component Escalation Path**: (1) Use an existing Atom/Molecule/Organism as-is $\rightarrow$ (2) Configure via official props/variants (`size="sm"`, `variant="ghost"`) $\rightarrow$ (3) Upgrade the shared system component rather than copy-pasting one-off forks.
