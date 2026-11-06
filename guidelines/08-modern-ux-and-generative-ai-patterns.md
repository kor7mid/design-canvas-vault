# 08 — Modern UI Design Patterns & Generative AI / Agentic UX

> **Sources**: Alberto Monge Roffarello (*UX Design Patterns*, HCI 2025/2026) & Matthew Scharpnick / Anthony Monahan (*Generative AI UX*, BCG X / Microsoft HAX).

---

## 1. Core Web & Mobile Interaction Design Patterns
1. **Cards**: Cap at `3–4` data points per card (Visual + Title + 1 Metadata line + Action). Make the entire card clickable via stretched link or explicit action footer.
2. **Accordions**: Use for FAQs, settings, and mobile filters; never hide primary sequential reading inside accordions.
3. **Tabs**: Switch between `2–5` peer views at the same hierarchy level; keep labels to `1–2` words on a single row and preserve scroll/filter state across switches.
4. **Breadcrumbs**: Place above `H1` for `3+` level hierarchies (`/` or `›` separators, current page non-clickable muted). Never replace primary nav with breadcrumbs.
5. **Mega-Menu / Dropdowns**: Use a **safe diagonal cursor triangle** (`150ms` hover intent delay) so moving diagonally from trigger to submenu never snaps the menu shut.
6. **Mobile Bottom Tab Bar vs. Drawer**: Expose the top `3–5` core destinations in a persistent **Bottom Tab Bar** (thumb zone); relegate secondary settings to a slide-out Drawer.
7. **Numbered Pagination vs. "Load More"**: Use **Numbered Pagination** for dashboards, search, and B2B catalogs (preserves URL shareability, footer reachability, and spatial memory). Use **"Load More"** for media galleries; avoid unpaginated infinite scroll outside social feeds.

---

## 2. Generative AI, Co-Pilot & Autonomous Agent UX Patterns
1. **Eliminate the "Blank Canvas Problem" (Prompt Scaffolding)**:
   - Never confront users with an empty `"Ask anything..."` box alone. Display `3–4` clickable domain-specific starter prompt pills and inline slash-command/parameter tokens (`/summarize`, `@file`, Tone/Format pills).
2. **Hybrid Conversational + Deterministic UI ("Generative UI")**:
   - Pure text chat is inefficient for multi-parameter tuning. Embed deterministic interactive widgets (range sliders, sortable tables, date pickers, selection cards) directly inline inside the generative stream, paired with direct canvas click-to-refine manipulation.
3. **Verifiable Trust, Traceability & Citations**:
   - Attach inline citation badges (`[1]`, `[2]`) to factual outputs; hovering/clicking opens an inline source preview card highlighted at the exact passage without leaving the workspace. Visually distinguish deterministic database lookups from probabilistic synthesis.
4. **Autonomous Agent Execution Traces & Approval Gates**:
   - Render step-by-step agent actions in compact collapsible status accordions (*"1. Searched catalog $\rightarrow$ 2. Filtered 4 matches $\rightarrow$ 3. Built component"*).
   - Provide a persistent **Stop / Pause** trigger and surface a mandatory **Review & Approve Card** before any external or destructive mutation.
5. **Smooth Streaming & Calibration Loops**:
   - Maintain stable container heights during token streaming, never hijack scroll if the user scrolled up manually, and place 1-click calibration chips (`Shorter`, `More Technical`, `Copy`) beneath artifacts.
