# 08 — Modern UI Design Patterns & Generative AI UX

> **Source Distillation**: *User Experience Design Patterns* by Alberto Monge Roffarello (HCI 2025/2026) and *Building the Future of UX in a World of Generative AI* by Matthew Scharpnick & Anthony Monahan (BCG X).
> **Scope**: Classical & mobile interaction design patterns, plus emerging UX architecture for Generative AI, Co-Pilots, and Autonomous Agents.

---

## 1. The Hierarchy of Design Knowledge (HCI Framework)

In Human–Computer Interaction (HCI), design knowledge operates across four distinct levels of abstraction:

1. **Theories** *(High-Level & Abstract)*: Universal explanatory frameworks (e.g., *Cognitive Load Theory*, *Information Foraging Theory*, *Fitts's Law*).
2. **Principles** *(Mid-Level Strategies)*: Broad rules used to analyze and compare design alternatives (e.g., *Progressive Disclosure*, *Consistency*, *Error Prevention*).
3. **Design Patterns** *(Tested Structural Solutions)*: As defined by architect Christopher Alexander: *"Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice."*
4. **Guidelines** *(Low-Level Operational Rules)*: Concrete, measurable specifications for execution (e.g., `min-height: 44px`, `4.5:1` contrast ratio).

Every UI Design Pattern balances **conflicting forces** (e.g., users need rich filtering power, *but* mobile viewports have limited horizontal space) and consists of five elements: **Name**, **Context**, **Problem Statement**, **Solution Statement**, and **Visual/Structural Examples**.

---

## 2. Core Web & Mobile UI Design Patterns

Never force users to learn new interaction conventions for standard navigation and data tasks. Select the right proven pattern for the context:

| Pattern | Context & Problem | Structural Solution & Guardrails |
|---|---|---|
| **Cards** | Displaying heterogeneous collections of items (articles, products, templates) that need to reflow across viewports. | Group 3–4 maximum data points per card (Visual Thumbnail + Title + 1 Metadata row + Primary Action). Make the entire card clickable via a stretched link or clean action footer. |
| **Accordion** | Long pages with distinct topical sections (FAQs, settings panels, mobile filters) where users only need 1–2 sections at a time. | Use clear chevron/plus state indicators; allow multiple panels open simultaneously unless vertical space is strictly constrained. Never hide primary sequential reading inside accordions. |
| **Tabs (App Bar / Inline)** | Switching between `2–5` peer views at the same hierarchy level within the same context. | Keep labels to `1–2` words; never wrap tabs onto multiple rows. Preserve scroll or filter state when switching tabs. |
| **Breadcrumbs** | Deep hierarchical sites (`3+` levels: e-commerce categories, documentation, file systems). | Place above the primary page `<h1>`; use `>` or `/` separators; style the current page item as non-clickable muted text. Never use breadcrumbs as a replacement for primary navigation. |
| **Dropdown / Mega Menu** | Exposing secondary navigation categories on desktop without cluttering the top header. | Trigger on explicit click or hover with a **safe diagonal cursor triangle** (`150ms` hover intent delay) so the menu doesn't snap shut while moving toward a sub-item. |
| **Navigation Drawer / Bottom Bar (Mobile)** | Mobile viewports where horizontal header links do not fit. | Expose the top `3–5` core destinations in a persistent **Bottom Tab Bar** (thumb zone); relegate secondary/account links to a slide-out Navigation Drawer (`Hamburger` / `More` menu). |
| **Pagination vs. "Load More"** | Browsing large catalogs (`24+` items). | Use **Numbered Pagination** for utility catalogs, dashboards, and search results (preserves URL shareability, footer access, and spatial memory). Use **"Load More" buttons** for media galleries. Avoid unpaginated Infinite Scroll outside pure social feeds. |

---

## 3. Generative AI & Agentic UX Patterns (BCG X & Microsoft HAX Framework)

Unlike deterministic interfaces where clicking Button $A$ always produces View $B$, Generative AI interfaces are **probabilistic, open-ended, and uniquely personalized**. Designing for LLMs, multimodal generators, and autonomous agents requires a dedicated set of UX patterns:

### 3.1 Eliminate the "Blank Canvas Problem" (Prompt Scaffolding)
Users frequently struggle before an empty text input (`"Ask anything..."`) because the system's capabilities and optimal prompting syntax are invisible.
- **Structured Starter Prompts**: Display `3–4` clickable, domain-specific starter prompt chips above or inside the empty state so users can experience value in 1 click.
- **Contextual Prompt Builders & Slash Commands**: Provide inline autocomplete (`/summarize`, `/extract`, `@file`), parameter pills (Tone, Format, Length), and template mad-libs instead of forcing users to write complex raw prompts from scratch.

### 3.2 Hybrid Conversational + Traditional UI ("Generative UI")
Pure text chat is an inefficient medium for structured manipulation (e.g., filtering flight times, tuning color palettes, comparing 15 rows of metrics).
- **Inline Interactive Widgets**: Embed traditional deterministic UI controls—sliders, date pickers, sortable tables, interactive cards, and confirmation modals—directly inside or alongside the generative stream.
- **Direct Canvas Manipulation**: Pair conversational prompts with direct visual manipulation (e.g., clicking a specific region of a generated layout or image to refine only that component rather than regenerating the entire artifact).

### 3.3 Earning Trust Through Traceability & Citations
Because foundation models can hallucinate or misattribute facts, high-stakes and enterprise interfaces must design for **verifiable trust**:
- **Inline Source Citations & Hover Previews**: Attach numbered citation badges (`[1]`, `[2]`) to factual claims. Hovering or clicking a badge should open an **inline source preview card** or split-pane document viewer highlighted at the exact passage—without navigating the user away from their active workspace.
- **Calibrated Confidence & Uncertainty**: Clearly distinguish between verified deterministic data (database lookups, code execution results) and probabilistic model synthesis.

### 3.4 Visualizing Autonomous Agent Pathways & Human-in-the-Loop Control
As AI evolves from single-turn chatbots into multi-step autonomous agents that invoke APIs, query databases, and mutate files:
- **Transparent Execution Traces**: Visualize the agent's step-by-step pathway using compact, collapsible status accordions (*"1. Searched catalog $\rightarrow$ 2. Filtered 4 matches $\rightarrow$ 3. Generated component"*).
- **Interruptibility & Approval Gates (Desirable Friction)**:
  - Always provide a prominent **Stop / Pause** action during generation or execution.
  - Before an agent performs an external or destructive action (sending an email, executing a payment, overwriting production state), surface a structured **Review & Approve Card** where the user can inspect, edit parameters, or cancel the action.

### 3.5 Real-Time Streaming & Feedback Loops
- **Smooth Token Streaming**: Render streaming output with stable container heights and smooth scroll-anchoring (never force-scroll the viewport if the user has manually scrolled up to read earlier output).
- **Low-Friction Calibration Controls**: Provide 1-click refinement actions (`Regenerate`, `Shorter`, `More Technical`, `Copy`, and 👍/👎 feedback hooks) directly beneath generated artifacts to close the personalization loop.
