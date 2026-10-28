# 05 — Laws of UX, Cognitive Load & Ethical Choice Architecture

> **Source Distillation**: *Laws of UX: Using Psychology to Design Better Products & Services (2nd Ed.)* by Jon Yablonski, *Cognitive Load Theory in Digital Interfaces* (Sweller / Paas / Letizia), and *The Shape of Choices: Personal Data, Design & Desirable Friction* (CNIL Cahiers IP n°6).
> **Scope**: Universal, stack-agnostic behavioral and cognitive psychology laws for user interfaces.

---

## 1. The 10 Core Laws of UX (Jon Yablonski)

### 1.1 Jakob's Law
> *"Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know."* — Jakob Nielsen

- **Leverage Existing Mental Models**: Do not reinvent standard UI controls (navigation bars, shopping carts, form inputs, search bars, modal close buttons). When users don't have to learn how the interface itself works, they can focus immediately on their task.
- **Mental Model Discordance**: Radical redesigns often fail when they break familiar spatial and behavioral conventions all at once. If you must introduce a major layout change, allow users to transition gradually or preserve familiar structural anchors.
- **Form Follows Familiarity**: Place global navigation at the top or left, primary search in the top header, and account/cart utilities in the top-right corner (`LTR` layouts).

### 1.2 Fitts's Law
> *"The time to acquire a target is a function of the distance to and size of the target."* — Paul Fitts (1954)

$$\text{Index of Difficulty (ID)} = \log_2\left(\frac{2D}{W}\right)$$
*(Where $D$ = distance to target center, $W$ = width/size of the target along the axis of motion).*

- **Touch & Pointer Target Sizing**:
  - **Minimum interactive target**: `44px × 44px` (iOS HIG) to `48px × 48px` (WCAG / Material) on touch devices, and at least `32px × 32px` on desktop pointer interfaces.
  - **Expand the Hit Area**: If an icon is visually `16px × 16px`, pad its clickable container (`padding: 12px` or `min-width: 44px; min-height: 44px`) so the user clicks the box, not just the vector paths.
- **Safe Zones Between Destructive & Constructive Targets**: Enforce at least `8px–12px` of dead space between adjacent interactive targets—and at least `16px–24px` between a primary action (`Save`) and a destructive action (`Delete`).
- **Thumb Zone Optimization (Mobile)**: Place primary frequent actions in the bottom third of mobile viewports (within natural single-thumb reach) and keep destructive or rare actions in the top corners.
- **Infinite Edges (Desktop)**: Screen corners and viewport edges have an "infinite" target depth because the cursor stops at the screen boundary—ideal for top-level menus and scrollbars.

### 1.3 Hick's Law (Hick–Hyman Law)
> *"The time it takes to make a decision increases with the number and complexity of choices."*

$$\text{Reaction Time (RT)} = a + b \log_2(n)$$
*(Where $n$ = number of equally probable alternatives).*

- **Minimize Simultaneous Choices**: When decision time is critical (checkout, onboarding, emergency actions, primary CTAs), reduce visible options to 1 primary action and at most 1–2 secondary alternatives.
- **Progressive Onboarding & Disclosure**: Break complex multi-parameter workflows into sequential steps rather than exposing 30 settings on a single screen.
- **Highlight Recommended Options**: In pricing tables or configuration matrices (3–4 tiers maximum), visually highlight a single "Recommended" option to anchor decision-making and prevent analysis paralysis.
- **Caution**: Do not oversimplify to the point of hiding essential context—if options are hidden too deeply across vague submenus, cognitive search cost exceeds the savings from fewer visible items.

### 1.4 Miller's Law & Chunking
> *"The average person can only keep $7 \pm 2$ items in their working memory (and closer to **4 chunks** in active visual short-term memory)."* — George A. Miller (1956) / Nelson Cowan (2001)

- **Never Use "The Magical Number 7" to Justify Arbitrary Limits**: Miller's Law is not a rule forbidding 8 items in a navbar; it is a mandate for **Chunking** (grouping related information into visually distinct clusters).
- **Practical Chunking Rules**:
  - Group navigation links into categories of `3–5` items each, separated by whitespace (`16px–24px`) or subtle dividers.
  - Format long strings into readable chunks automatically: credit cards (`4444 4444 4444 4444`), phone numbers (`+1 (555) 234-5678`), and verification codes (`123-456`).
  - Limit feature cards per row to `3` or `4` maximum on desktop so users can scan a single row in one ocular fixation.

### 1.5 Postel's Law (The Robustness Principle)
> *"Be conservative in what you do, be liberal in what you accept from others."* — Jon Postel

- **Empathetic Input Handling**: Accept human input in any reasonable format and normalize it in software—never punish the user for formatting spaces, dashes, or capitalization:
  - Accept phone numbers with or without spaces, parentheses, or hyphens (`(555) 123-4567`, `555.123.4567`, `5551234567`), and format them cleanly via input masking.
  - Trim leading and trailing whitespace automatically on emails, usernames, and search queries (`String.prototype.trim()`).
  - Support paste operations in OTP/PIN fields (pasting `654321` into the first digit box should populate all 6 boxes automatically).
- **Predictable, Conservative Output**: While accepting flexible input, emit strictly structured, predictable UI states, clear validation messages, and accessible semantic markup.

### 1.6 The Peak–End Rule
> *"People judge an experience largely based on how they felt at its peak (most intense point) and at its end, rather than the total sum or average of every moment of the experience."* — Daniel Kahneman

- **Design the Emotional Peak**: Identify the core "moment of value" (e.g., publishing a project, completing a transfer, generating a design) and elevate it with crisp micro-interactions, celebratory clarity, and zero friction.
- **Polish the Ending (Confirmation & Offboarding)**: Never end a workflow with a raw database ID or a dead-end screen. Provide a reassuring summary, clear next steps, downloadable receipts, or an immediate preview of the result.
- **Turn Error Peaks into Recovery Wins**: The most intense negative peaks are 404 pages, failed payments, or lost network connections. Preserve user input automatically (`localStorage` draft recovery), explain the failure in plain human language without blame, and provide a 1-click recovery path.

### 1.7 Aesthetic–Usability Effect
> *"Users often perceive aesthetically pleasing design as design that's more usable."* — Kurosu & Kashimura (1995)

- **Visual Polish Builds Trust & Tolerance**: A harmonious layout, disciplined typography, and refined color palette create an immediate positive emotional response, making users more patient with minor workflow hurdles.
- **Warning During Usability Testing**: High visual polish can mask structural usability flaws during user testing—participants may rate a broken flow highly simply because it "looks professional." Always evaluate task completion rates independently of aesthetic praise.

### 1.8 Von Restorff Effect (Isolation Effect)
> *"When multiple similar objects are present, the one that differs from the rest is most likely to be remembered."* — Hedwig von Restorff (1933)

- **Isolate Critical Elements**: Make the primary Call-to-Action (CTA), active navigation state, or key metric visually distinct through contrast in color, scale, weight, or surrounding whitespace.
- **Restraint Is Mandatory**: If everything is highlighted with badges, neon gradients, and pulsing dots, nothing stands out. Reserve high-chroma accent colors strictly for primary interactive focal points (`10%` of the viewport).
- **Never Rely on Color Alone**: Pair color isolation with a secondary visual cue (weight, icon, border, scale, or label badge) so users with color-vision deficiencies perceive the isolation effortlessly.

### 1.9 Tesler's Law (Law of Conservation of Complexity)
> *"Every application has an inherent amount of irreducible complexity. The only question is: who will have to deal with it—the user, or the developer/designer?"* — Larry Tesler

- **Absorb Complexity in Engineering**: Spend extra engineering effort to eliminate user toil:
  - Infer city and state from a postal/ZIP code automatically.
  - Detect credit card brand (`Visa`, `Mastercard`, `Amex`) automatically from the first digits (BIN) instead of adding a "Card Type" dropdown.
  - Provide smart, context-aware defaults so 80% of users never need to open advanced configuration panels.
- **Guard Against Over-Simplification**: Once inherent domain complexity is reached (e.g., professional CAD, financial trading, IDE controls), removing controls further makes the interface cryptic and harder to use. Use progressive disclosure instead of deleting power-user capabilities.

### 1.10 The Doherty Threshold
> *"Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other."* — Doherty & Thadani (1982)

| System Response Time | User Perception & Required UI Pattern |
|---|---|
| **`0 – 100ms`** | **Instantaneous**. Feels like direct physical manipulation (hover states, button press feedback, toggle switches). |
| **`100 – 400ms`** | **Doherty Flow Zone**. User remains in uninterrupted cognitive flow. No loading spinner needed; use smooth state transitions (`150ms–250ms`). |
| **`400ms – 1,000ms`** | **Noticeable pause**. Display a subtle non-blocking progress indicator or **Skeleton Screen** immediately to preserve layout stability. |
| **`1s – 10s`** | **Attention drift risk**. Use animated skeleton placeholders, optimistic UI updates, or determinate progress bars with clear status text. |
| **`> 10s`** | **Context switch**. Provide a percentage/step progress bar, estimated time remaining, and allow the task to run in the background with a notification upon completion. |

---

## 2. Supplementary Behavioral Laws (Letizia Synthesis)

- **Law of Prägnanz (Simplicity)**: The human brain interprets ambiguous or complex visual arrangements in the simplest, most stable form possible. Prefer clean geometric grids and symmetrical/balanced containers over chaotic overlapping shapes.
- **Serial Position Effect (Primacy & Recency)**: Users best recall the **first** and **last** items in a series. Place the most important navigation items (e.g., `Home` / `Dashboard` first; `Profile` / `Primary CTA` last) at the ends of horizontal bars and mobile bottom tab bars.
- **Zeigarnik Effect**: People remember uncompleted or interrupted tasks better than completed ones. Use clear progress indicators (`Step 2 of 4`, profile completion checklists, visual progress rings) ethically to motivate onboarding and learning completion—never after an explicit dismissal.
- **Pareto Principle (80/20 Rule)**: Roughly 80% of user value comes from 20% of features. Dedicate prime viewport real estate and visual hierarchy to that core 20%, and tuck the remaining 80% into secondary menus or command palettes.

---

## 3. Cognitive Load Theory in UI Design (Sweller & Paas)

Human working memory has a strict, finite processing bandwidth. Total cognitive load is the sum of three distinct components:

$$\text{Total Cognitive Load} = \text{Intrinsic Load} + \text{Extraneous Load} + \text{Germane Load}$$

1. **Intrinsic Load** *(Task Complexity)*: The inherent mental effort required to understand the subject matter or complete the domain task itself.
   - *Design Strategy*: Cannot be eliminated, but can be **segmented**—break complex concepts or multi-stage forms into sequential, digestible steps (`1 concept or 1 task group per view`).
2. **Extraneous Load** *(UI Noise & Friction — Eliminate Ruthlessly)*: Wasted mental effort caused by confusing navigation, inconsistent visual hierarchy, decorative clutter, or poorly formatted information.
   - *Eliminate the Split-Attention Effect*: Never force users to hold information in short-term memory from one part of the screen (or a separate legend/modal) to interpret another part. Place labels, units, and error messages directly on or adjacent to the data element they describe.
   - *Eliminate the Redundancy Effect*: Do not present identical blocks of text alongside redundant decorative explanations that compete for visual attention.
3. **Germane Load** *(Productive Mental Model Building — Maximize)*: The productive cognitive bandwidth available for understanding the system, building mental schemas, and achieving deep flow.
   - *Design Strategy*: By driving **Extraneous Load** toward zero through clean typography (`55–75ch` line lengths), consistent patterns, and clear visual grouping, you free up working memory for **Germane Load**.

---

## 4. Ethical Choice Architecture, Nudges & Desirable Friction (CNIL Framework)

Interfaces are never neutral: every default setting, button color, and layout hierarchy is a **Choice Architecture** (Thaler & Sunstein) that guides human behavior by interacting with cognitive biases (*Anchoring, Framing, Loss Aversion, Hyperbolic Discounting, Default Bias, Overchoice*).

### 4.1 Deceptive Patterns ("Dark Patterns") to Ban Strictly
Based on Harry Brignull's taxonomy, CHI research (Gray et al., Mathur et al.), and CNIL regulatory audits, never implement:

1. **Interface Interference & Visual Misdirection**: Styling the "Accept All Data Sharing" button as a high-contrast primary button while hiding "Reject All" or "Manage Preferences" as low-contrast gray text or a buried secondary link.
2. **Preselection Against User Interest**: Pre-checking optional newsletter, telemetry, or paid add-on checkboxes by default (*Privacy by Default* requires explicit opt-in).
3. **Obstruction ("Roach Motel")**: Making subscription or account creation take 1 click while requiring 6 screens, hidden menus, or a phone call to cancel or delete an account.
4. **Nagging**: Repeatedly interrupting the user with modal prompts that offer "Yes" and "Remind Me Later" without a permanent "No / Dismiss" option.
5. **Sneaking & Forced Action**: Injecting hidden fees at the final checkout step, or forcing account creation/data sharing just to view basic public information.
6. **Confirmshaming**: Using guilt-inducing microcopy on opt-out links (e.g., *"No thanks, I hate saving money"*).
7. **Attention-Capture Damaging Patterns (ACDPs)**: Exploiting variable dopamine rewards via endless unpaginated feeds without stopping cues, casino pull-to-refresh loops, or disguised engagement notifications.

### 4.2 Designing "Desirable Friction" (Positive Friction)
While extraneous friction must be eliminated from routine tasks, **Seamlessness by Default** can become dangerous when users make irreversible, high-stakes, or privacy-sensitive decisions on autopilot (System 1 fast/automatic thinking).

Introduce **Desirable Friction** to awaken conscious reflection (System 2 slow/deliberate thinking) at critical moments:
- **Irreversible Destructive Actions**: Require explicit confirmation before deleting a project, revoking production API keys, or transferring funds (e.g., a clear modal stating the exact impact, or typing the resource name for permanent deletion).
- **Symmetrical Consent & Privacy Controls**: Present `Accept` and `Refuse` / `Customize` choices with **equal visual weight, size, and typographic hierarchy** on the same screen layer.
- **Granular, Layered Transparency**: Instead of dumping a 20-page legal wall of text (exploiting *Information Overload*), provide a scannable 3-bullet human summary with expandable progressive disclosure for full details.
- **Stopping Cues & Agency**: Prefer clear pagination or explicit "Load More" boundaries over infinite scroll in productivity and catalog interfaces so users maintain spatial awareness and a sense of control.
