---
name: design-canvas-vault
description: Complete design engineering bible, all 9 master UI/UX & motion guidelines, Apple fluid interfaces, High-Agency & Vanguard UI architecture, and all 200 empirical industry website audits (001 to 200).
---

# Design Canvas Vault — Complete Design Engineering Guidelines & 200 Website Audits

## PART I — COMPLETE DESIGN ENGINEERING GUIDELINES (01 TO 09)

# 01 — Refactoring UI: Hierarchy, Spacing, Typography, Color, Depth & Components

> **Source**: Adam Wathan & Steve Schoger (*Refactoring UI*) — Complete Stack-Agnostic Engineering Rules.

## 1. Starting From Scratch
- **Start with a Feature, Not a Shell**: Never start by coding the outer navbar/sidebar shell. Build the core functional unit first (e.g., search form, invoice row, issue card); wrap navigation around it once ergonomic.
- **Detail Comes Later**: Wireframe in low fidelity first. Color and shadows cannot fix broken layout hierarchy.
- **Design in Grayscale First**: Build the entire view in monochrome first to force reliance on **spacing, contrast, weight, and scale**. Add color only to reinforce established hierarchy.
- **Work in Narrow Cycles**: Implement the smallest useful version in code, validate with real data, and iterate.
- **Be a Pessimist (Stress-Test Content)**: Never design only for ideal 1-line strings. Handle 42-char names, 4-line wrapped titles, broken images, 0-row empty states, 1,000-row pagination, and multi-sentence error messages via truncation, wrapping, or expanding containers.
- **Choose a Personality via 4 Levers**:
  1. *Typography*: Geometric Sans (Geist, Plus Jakarta Sans) = modern/clean; Monospace (JetBrains Mono, Geist Mono) = technical/data; High-contrast Serif (Playfair, Instrument Serif, Portrait) = editorial/luxury; Rounded Sans = friendly/consumer.
  2. *Color*: Blue = trust/banking; Gold/Espresso = luxury/heritage; Emerald = growth/finance.
  3. *Border Radius*: `0px` = brutalist/industrial/luxury; `4px–8px` = technical SaaS/dev; `12px–24px` = tactile modern; `9999px` (pill) = accessible/consumer.
  4. *Voice*: Formal vs. concise direct action.
- **Systematize Everything**: Never pick arbitrary on-the-fly values (`19px`, `15px`). Lock every decision to predefined scales.

## 2. Hierarchy Is Everything
- **Weight & Contrast Over Size Alone**: Do not inflate font sizes to create hierarchy. Use `font-weight` (`500–700`) and color contrast; a `14px` bold high-contrast label beats a `20px` low-contrast title.
- **The 3-Tier Text Contrast System**:
  ```css
  /* Light Mode */
  --text-primary:   #0f172a; /* Headings, active values, primary data */
  --text-secondary: #475569; /* Labels, subheadings, nav links */
  --text-tertiary:  #94a3b8; /* Timestamps, helper text, placeholders */
  /* Dark Mode */
  --text-primary:   #f8fafc;
  --text-secondary: #94a3b8;
  --text-tertiary:  #64748b;
  ```
- **Never Put Gray Text on Colored Backgrounds**: Standard `#888` looks muddy on colored surfaces. Tint secondary text using the **exact background hue** (e.g., `#93c5fd` or `rgba(255,255,255,0.75)` on `#0b44a7` navy).
- **Emphasize by De-Emphasizing Competing Noise**: When a focal element fails to pop, soften surrounding elements (dim inactive links to 60% opacity, replace heavy borders with subtle background shifts) instead of making the focal element louder.
- **Eliminate Naive `Label: Value` Pairs**:
  - Infer from format (`john@domain.com` needs no `"Email:"` prefix).
  - Merge label into value (*"12 left in stock"* instead of *"In Stock: 12"*).
  - Use status dots (`● Completed` instead of *"Status: Completed"*).
  - When labels are required (dashboards/specs): set label as muted micro-metadata (`11px–12px`, `font-weight: 600`, `uppercase`, `letter-spacing: 0.06em`, `var(--text-secondary)`) and value as large high-contrast text.
- **Decouple Semantic HTML from Visual Scale**: Use `<h1>`–`<h3>` for accessibility/SEO, not forced font size.
- **Action Hierarchy (Primary, Secondary, Tertiary, Destructive)**:
  1. *Primary (1 per view)*: High-contrast solid fill.
  2. *Secondary*: Subtle surface fill or `1px` outlined border.
  3. *Tertiary*: Ghost/text-only.
  4. *Destructive (Delete/Revoke)*: Style as a quiet secondary/ghost button in the main view; reserve bold crimson red strictly for the confirmation modal trigger.

## 3. Layout & Spacing
- **Start with Too Much Whitespace**: Begin with generous macro-spacing (`py-24` to `py-32`, `gap-12`) and tighten only if needed.
- **Strict Geometric Spacing Scale**:
  `4px` (icon-to-label) | `8px` (compact tags/buttons) | `12px` (input/list vertical pad) | `16px` (card pad/grid gap) | `24px` (form group/card gap) | `32px` (module separation) | `48px` (tablet section) | `64px` (desktop section) | `96px–128px` (hero/footer macro separation).
- **Don't Stretch Components to Fill the Screen**: Give forms/cards intrinsic `max-width` (`420px` for auth forms, `65ch` for prose, `1280px–1400px` for dashboards) rather than stretching across 4K monitors.
- **Independent Breakpoint Scaling**: Do not scale all elements proportionally. Keep buttons `36px–44px` tall across viewports while scaling `H1` from `64px` desktop to `32px` mobile.

## 4. Designing Text & Typography
- **10-Step Modular Type Scale**:
  `12px` (badges/footnotes) | `14px` (labels/table cells/UI controls) | `16px` (body/inputs) | `18px` (lead copy/card titles) | `20px` (subheaders) | `24px` (modal/card headers) | `30px` (`H2`) | `36px` (`H1` app) | `48px` (hero display) | `60px+` (marketing punch).
- **Use `rem` or `px`, Never Nested `em`**: Avoid recursive `em` compounding bugs. Use `clamp(2rem, 5vw, 4rem)` with `rem` spacing so layouts respect Dynamic Type.
- **Line Length Law**: Constrain reading columns strictly to **`45ch–75ch` (`max-w-[65ch]`)**.
- **Baseline Alignment for Mixed Sizes**: Always align price/metric lockups (`$49` + `/ mo`) with `align-items: baseline`, never `center`.
- **Inverse Proportional Line-Height (Leading)**:
  - Large Headlines (`24px–64px+`): Tight (`line-height: 1.0` to `1.15`).
  - Body Copy (`14px–18px`): Relaxed (`line-height: 1.5` to `1.65`).
  - Badges / Buttons: Single-line (`line-height: 1.0`).
- **Size-Specific Letter-Spacing (Tracking) & Optical Sizing**:
  - Display Headings (`24px+`): Tighten tracking (`-0.02em` to `-0.04em`) and enable `font-optical-sizing: auto`.
  - Uppercase Eyebrows / Headers: Expand tracking (`0.08em` to `0.15em`).
  - Body Copy (`16px`): Keep near `0`.
- **Alignment Law**: Left-align prose (`>3` lines centered is unreadable). Strictly **right-align numeric, currency, date, and percentage columns** (`text-align: right; font-variant-numeric: tabular-nums`) with matching right-aligned table headers.

## 5. Working With Color
- **Think in HSL / OKLCH**: Use Hue, Saturation, and Lightness (or perceptually uniform `oklch(L C H)` / `lab()`) to build 8–10 shade ramps per color (`50` to `950`).
- **Hue-Shifting Physics**:
  - When **lightening** a color, shift Hue toward warm **Yellow**.
  - When **darkening** a color, shift Hue toward cool **Blue/Indigo**.
- **Never Use Dead Neutral Grays (`s: 0%`)**: Tint grays with `2%–5%` warm yellow/stone (editorial/hospitality/luxury) or `4%–8%` cool blue/slate (SaaS/fintech/devtools).
- **The "Flip" Technique for Accessible Badges**: Instead of white text on a loud saturated fill, pair a soft tinted background (`bg-emerald-500/10` or `#ecfdf5`) with dark/rich hue text (`#065f46` light / `#34d399` dark) and a `1px` subtle border. Always pair color with an icon or text label for color-blind accessibility.

## 6. Creating Depth, Elevation & Translucent Materials
- **Overhead Light Simulation**:
  - *Raised Surfaces (Cards, Buttons, Modals)*: Catch light on the top edge (`border-t border-white/15` or `box-shadow: inset 0 1px 0 rgba(255,255,255,0.12)`) and cast a shadow below.
  - *Recessed Wells (Inputs, Toggles, Code Blocks)*: Use a subtle top inner shadow (`box-shadow: inset 0 2px 4px rgba(0,0,0,0.08)`).
- **5-Level Dual-Shadow Elevation System** (1 crisp direct shadow + 1 diffused ambient shadow):
  ```css
  --shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
  --shadow-md:  0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.05);
  --shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.05);
  --shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.05);
  --shadow-2xl: 0 25px 50px -12px rgba(0,0,0,0.25);
  ```
- **Dark Mode Elevation Rule**: Shadows disappear on black. **Closer to the viewer = Lighter surface** (`#08090a` canvas $\rightarrow$ `#101114` card $\rightarrow$ `#181a1f` dropdown $\rightarrow$ `#22252b` tooltip) outlined with `1px solid rgba(255,255,255,0.08)`.
- **Apple Translucent Materials (`backdrop-filter`)**:
  - Use `backdrop-filter: blur(20px) saturate(180%)` with semi-transparent fills (`rgba(255,255,255,0.65)` light / `rgba(9,9,11,0.75)` dark) and a bright top edge for floating navbars, sheets, and toolbars.
  - **Never stack a light translucent surface directly onto another translucent surface**.
  - Respect `@media (prefers-reduced-transparency: reduce)` (fallback to solid background) and `@media (prefers-contrast: more)`.

## 7. Working With Images & Finishing Touches
- **Text Over Images (4 Proven Tactics)**: (1) Full dark scrim (`rgba(0,0,0,0.55)`), (2) Directional gradient scrim (`linear-gradient(to top, rgba(0,0,0,0.85), transparent)`), (3) Grayscale + `mix-blend-mode: multiply` over brand color, or (4) Subtle `text-shadow: 0 2px 4px rgba(0,0,0,0.6)`.
- **Prevent Image Bleed**: Apply `box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08)` (or `rgba(255,255,255,0.1)`) so white avatars/logos never bleed into white backgrounds.
- **Respect Intended Asset Scale**: Never upscale 16px icons (enclose them in a `40px–48px` tinted circular/squircle badge instead). Never shrink a full 1920px dashboard screenshot into a tiny card; crop a focused region at 100% scale. Lock user images with fixed aspect ratios and `object-fit: cover`.
- **Replace Cage Borders**: Replace noisy `1px solid gray` dividers with surface tint steps, soft shadows, or `24px–32px` whitespace. Add `3px–4px` accent top/left borders (`border-t-4`) for pricing highlights or active sidebar states.
- **Supercharge Defaults**: Replace default bullets with custom SVG checkmarks, radio inputs with clickable **Selection Cards**, and blank tables with **First-Class Empty States** (icon + headline + benefit copy + primary creation CTA).

## 8. Component-by-Component Implementation Playbook
1. **Forms & Inputs**:
   - Static label directly above input (`margin-bottom: 6px; font-size: 12px; font-weight: 600`) — never use disappearing floating labels.
   - Standard input: `height: 40px; padding: 8px 12px; font-size: 14px; border-radius: 6px–8px`, custom focus ring (`box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.2)`).
   - **Nested Input-Button**: Wrap search/newsletter input and submit button inside a single bordered flex shell (`padding: 4px; border-radius: 10px`) with the button flush on the right (`border-radius: 6px`).
   - **Toggle Switch vs. Checkbox**: Use a Switch *only* for instant live settings (no Save button); use Checkboxes inside submitted forms.
2. **Data Tables**:
   - Omit vertical borders; use `14px 16px` cell padding (`36px–44px` height for dense tables), subtle row hover (`rgba(128,128,128,0.04)`), tracked uppercase headers (`11px; letter-spacing: 0.06em`), left-aligned text, right-aligned `tabular-nums` numbers, and centered status pills.
3. **Buttons**: Horizontal padding = `2×` vertical padding (`6px 12px` sm, `8px 16px` base, `12px 24px` lg). Depress on `:active` (`scale(0.98)`). Disabled state: `opacity: 0.4; pointer-events: none`.
4. **Modals**: Scrim `rgba(0,0,0,0.6)` + `blur(4px)`, positioned slightly above vertical center (`translateY(-8%)`), with 3 mandatory escape hatches (`✕` button, `Escape` key, backdrop click).
5. **Dropdowns**: Group items with `1px` dividers, `10px` uppercase section headers, and isolate destructive actions (`Log out`, `Delete`) at the bottom with red hover styling.

---

# 02 — Usability & Ergonomics Engineering: Don't Make Me Think

> **Source**: Steve Krug (*Don't Make Me Think, Revisited*) — Cognitive Zero-Friction, Scanning, Wayfinding & Goodwill Preservation.

## 1. Krug's Three Laws of Usability
1. **First Law — "Don't Make Me Think!"**: Every screen must be self-evident (or at worst instantly self-explanatory). Eliminate every "cognitive question mark" (*"Can I click this? Where am I? What does this jargon mean?"*).
2. **Second Law — Mindless Clicks Over Puzzling Clicks**: The 3-click rule is a myth; 5 unambiguous, effortless clicks with strong **Information Scent** cause far less drop-off than 2 hesitant, puzzling clicks.
3. **Third Law — Omit Needless Words**: Cut 50% of words on every view, then cut 50% of what remains.
   - **Ban "Happy Talk"**: Delete self-congratulatory welcome paragraphs.
   - **Ban Form Instructions**: Make labels, placeholders, and input masks so self-evident that explanatory paragraphs are unnecessary.

## 2. How Users Actually Use Interfaces
- **Users Scan, They Don't Read**: Users glance past screens like billboards at 100 km/h, fixating only on task-matching keywords, headings, and high-affordance buttons.
- **Users "Satisfice" (Herbert Simon)**: Users never evaluate all options to find the optimal path; they click the **first reasonable option** that matches their intent. Make the primary conversion path unmistakably prominent.
- **Users Muddle Through**: Users ignore manuals and conceptual models; rely on familiar conventions and explicit visual affordances.

## 3. Billboard Design 101: Designing for Scanners
1. **Leverage Conventions**: Place logo top-left (linking to Home), primary nav top/left, search with magnifier in header, account/cart top-right. Only break a convention when proven superior.
2. **Mirror Logical Hierarchy Visually**: Related items share a container; nested items sit visually indented inside their parent zone; importance scales with contrast, weight, and whitespace.
3. **Unmistakable Clickability Affordances**: Never style static headings in the same color as links. Ban "Mystery Meat Navigation" (never require hovering to discover if an element is interactive).
4. **The Proximity Law of Headings**: A heading MUST always sit closer to the paragraph it introduces than to the paragraph preceding it (`margin-top: 32px; margin-bottom: 8px`).
5. **Embedded Micro-Assistance**: Keep inline help **Brief**, **Timely** (directly beside the field), and **Unavoidable**.

## 4. Navigation, Information Scent & The Trunk Test
- **The 5 Roles of Navigation**: Reveals current location (*"Where am I?"*), available scope, site mental model, safety anchor (Home), and wayfinding.
- **Persistent Header Suite & The Checkout Exception**:
  - Maintain consistent Site ID, Primary Sections (`4–7` pillars), Utilities, Search, and Page `H1` across all standard views.
  - **Checkout / Multi-Step Onboarding Exception**: Strip global navigation links during payment and registration flows; keep only the Logo, a `"Back to Cart"` link, and a **Step Progress Indicator** (`Step 2 of 3`) to prevent abandonment.
- **Information Scent Law**: The destination page `H1` MUST match the exact wording of the link/button clicked (clicking *"Start Free Trial"* must land on `H1: "Start Your Free Trial"`).
- **The "You Are Here" Indicator & Folder Tabs**: Highlight the active nav item via color, weight, or pill/underline so the active view reads as connected to the foreground plane.
- **The Trunk Test (5-Second Diagnostic)**: On any random interior view, a user must identify within 5 seconds without scrolling: (1) Site ID, (2) Page Name (`H1`), (3) Major Sections, (4) Local Options, (5) "You Are Here" marker/breadcrumbs, and (6) Search.

## 5. Homepage Anatomy & The Reservoir of Goodwill
- **5 Questions Answered in 5 Seconds**: *What is this? What do they have? What can I do here? Why choose this over alternatives? Where do I start?*
- **The Essential Tagline**: `6–8` words max next to/below the hero title, specific and benefit-driven (never vague corporate mottos). Protect the Hero from "Tragedy of the Commons" multi-department banner clutter.
- **Preserving the Reservoir of Goodwill**:
  - *What Drains It*: Hiding pricing/shipping fees behind sales walls, punishing users for spaces/dashes in inputs, asking for unnecessary fields (phone number for a PDF), firing newsletter popups on page load, or breaking the browser `Back` button.
  - *What Fills It*: Upfront transparent pricing, auto-formatting inputs, preserving entered form state across validation errors, and 1-click Undo/escape hatches.

## 6. Mobile Ergonomics & High-Leverage Accessibility
- **Touch Target Minimum**: Enforce **`44px × 44px`** minimum hit areas (`min-width: 44px; min-height: 44px`) on all interactive controls.
- **Zero Hover Dependencies**: Touchscreens have no hover state (`No cursor = no hover = no clue`). Never hide essential actions or disclosures exclusively inside `:hover`.
- **HTML5 Mobile Keyboards**: Always set `type="email"`, `type="tel"`, or `inputmode="numeric"` (for OTP/PIN/credit cards).
- **4 High-Leverage Accessibility Rules**: (1) Fix structural usability confusion first, (2) Meaningful `alt` text (`alt=""` on decorative assets), (3) True semantic `<button>`, `<a>`, `<h1>–<h3>`, and `<label for="id">`, (4) Full keyboard `Tab` focus rings (`focus-visible:ring-2`).

---

# 03 — Universal Layout Principles & Swiss Grid Systems

> **Source**: Beth Tondreau (*Layout Essentials: 100 Design Principles for Using Grids*) & Swiss International Typographic Style (Müller-Brockmann, Gerstner, Vignelli, Khoi Vinh).

## 1. Content Dictates the Grid (The 6 Grid Families)
Never force content into a random template; select the grid family from content structure:
1. **Single-Column (Manuscript)**: Linear reading (essays, docs, legal). Requires calibrated leading and wide luxury margins (`max-width: 65ch` / `680px`). *Beatrice Warde's Crystal Goblet*: layout should be an invisible vessel revealing content.
2. **Two-Column Grid**:
   - *Symmetrical (50/50)*: Direct comparisons, split-screen heroes (copy left, interactive widget right).
   - *Asymmetrical Golden Ratio (62/38 or 2:1)*: Primary narrative/form (`2/3`) paired with contextual sidebar/sticky summary (`1/3`), separated by a `1px` hairline rule when dense.
3. **Three-Column Editorial Grid**: Running copy, pull quotes, and cards.
   - **The "Hang Line" Technique**: Drop column starting heights down to a shared horizontal hang line, giving top headlines open breathing space. Vary image aspect ratios across spans.
4. **Multi-Column & Khoi Vinh's Law of 12**: Build master grids in **12 columns** (cleanly divisible by `1, 2, 3, 4, 6, 12`), subdividing into `8+4`, `6+6`, `4+4+4`, or `3×4`.
5. **Modular & Bento Matrices**: Vertical columns intersected by horizontal rows.
   - **The Empty Module Law**: Every module does NOT need to be filled; strategic empty cells create architectural tension and rest zones. Combine tall vertical, wide rectangular, and square cells.
6. **Hierarchical / Banded Strata**: Horizontal full-width conversion bands (`Navbar -> Hero -> Monochrome Logo Ticker -> Bento Breakdown -> Metric Proof -> Pricing -> Footer`).

## 2. Typographic & Chromatic Structure Within the Grid
- **Single-Typeface Exhaustion**: Before adding a 2nd/3rd font family, exhaust hierarchy within 1 versatile family using Roman, *Italic*, **Semibold/Bold**, and tracked `ALL-CAPS` (`0.1em`).
- **Pull Quotes & Syncopation**: Break pull quotes across column gutters as visual soundbites. Use staggered starting heights or `90deg` vertical headers (`writing-mode: vertical-rl`) as structural pillars.
- **Avoid "Grid Cages" (Ellen Lupton & Stephen Few)**: Never box every table cell in heavy borders; use sparse horizontal hairlines and proportional data bars/arrows (`↑ 14.2%`).
- **Color as Structural Container**:
  - Color blocks define modules without borders.
  - **Let the Image Carry the Color**: Around vibrant photography, keep all UI chrome and typography strictly monochrome so the image commands focus.

## 3. The Swiss Graphic Grid & Baseline Lock
1. **The "Program" Concept (Karl Gerstner)**: Define a strict mathematical rule-set (ratios, gutters, type scales, alignment anchors) so endless layout variations remain 100% unified.
2. **Continuous 4px / 8px Baseline Rhythm**: Lock every font size, `line-height`, padding, and margin to integer multiples of `4px` or `8px` so adjacent columns align horizontally across the viewport.
3. **Hairline Rules as Spatial Framing**: Use `1px` horizontal and vertical rules to bind related metadata and anchor section headers (modeled on Herbert Bayer's tabular systems).
4. **Extreme Scale & Weight Contrast**: Pair unadorned neo-grotesques at massive scale (`60px–72px`, weight `400–500`) against microscopic tracked captions (`11px–12px`, weight `600`).

## 4. Z-Axis Depth, Silhouettes & Controlled Grid Interruptions
- **5-Plane Z-Index Architecture**:
  `Z-0` Background (surface/dot-grid/ambient mesh) $\rightarrow$ `Z-10` Structural (cards/rules) $\rightarrow$ `Z-20` Overlapping (badges/negative-margin breakout cards `-mt-8`) $\rightarrow$ `Z-30` Interactive (sticky nav/dropdowns) $\rightarrow$ `Z-50` Modal/Scrim.
- **Cutout Silhouettes Break Boxy Grids**: Overlap background-removed hardware or human silhouettes across card boundaries to shatter rigid rectangular monotony.
- **Controlled Surprise (80/20 Rule)**: Enforce strict grid order across 80% of the layout, then introduce **1 intentional grid interruption** (full-bleed pull quote, out-of-margin breakout card, or diagonal tension) to signal a transition, highlight a centerpiece, or break scanning fatigue.
- **Law of Referential Proximity**: Place every diagram, code block, or product visual immediately adjacent to the paragraph that references it. Design sidebars, footnotes, and mega-footers with the exact same typographic discipline as the Hero.

---

# 04 — Visual Identity, Ortho-Typography, IA & IHM Ergonomics

> **Sources**: *Design Graphique & Identité Visuelle* (Vox-ATypI, Chromatic Spatiality), *Information Architecture* (Champion Web), & *Ergonomie IHM / Neuro-Accessibility* (M2PLS).

## 1. Chromatic Spatiality, Color Psychology & Anti-Halation
- **Z-Axis Chromatic Depth**:
  - **Warm Colors (Red, Orange, Yellow)**: Optically **advance** toward the eye; reserve for urgent focal points, alerts, and primary CTAs.
  - **Cool Colors (Blue, Indigo, Slate, Green)**: Optically **recede**; use for calm structural surfaces and deep backgrounds.
- **Industry Connotation Matrix**:
  - *White*: Purity, medical precision, gallery silence (risk: sterility if unanchored).
  - *Black*: Authority, luxury, editorial gravitas.
  - *Red*: Urgency, passion, energy, food, athletic telemetry (risk: danger/debt).
  - *Blue*: Banking trust, SaaS security, institutional stability.
  - *Green*: Wealth, growth, health, confirmation.
  - *Orange*: Kinetic energy, industrial precision (`#ff5000`).
  - *Brown / Warm Stone*: Craftsmanship, architectural permanence, organic heritage.
- **5-Color Core Swatch & Anti-Halation Glare Rule**: Build palettes around `1 Primary + 1 Secondary + 1 Accent + 1 Light Neutral + 1 Dark Neutral`. Avoid pure `#000000` ink on pure `#FFFFFF` paper (`21:1` halation glare fatigues the retina); use deep charcoal (`#111827` / `#141413`) on warm/cool off-white (`#f8fafc` / `#faf9f5`).

## 2. Vox-ATypI Type Classification & Ortho-Typography Laws
- **Vox-ATypI Classification**:
  1. *Humanes & Garaldes* (Garamond, Caslon): Literary warmth, long-form books.
  2. *Réales* (Baskerville, Times, Imperial): Institutional journalism, legal.
  3. *Didones* (Bodoni, Didot, Playfair): High fashion, luxury display (never for small body copy).
  4. *Mécanes* (Slab Serifs): Industrial engineering.
  5. *Linéales* (Geist, Inter, Suisse, Scto Grotesk): Universal UI clarity.
  6. *Incises* (Optima): Chiseled luxury/cosmetics.
- **5 Non-Negotiable Ortho-Typography Rules**:
  1. **Never stretch/squish fonts manually** (`scaleX`); use true Condensed/Extended cuts.
  2. **Max 3 Font Families**: `1 Display + 1 Body + 1 Monospace`.
  3. **Verify Diacritics**: Ensure complete multilingual glyph support (`é, è, ê, à, ç, œ, ß, ñ`) to prevent fallback font ransom-note glitches.
  4. **Strict Hyphenation Bans**: Never hyphenate proper nouns, brand names, numbers, prices, or dates; never break across columns.
  5. **International Punctuation (EN vs. FR)**:
     - *Single (`, . …`)*: No space before, 1 space after.
     - *Double (`: ; ? !`)*: English = no space before (`Hello!`); French = mandatory non-breaking thin space before (`Bonjour\u00A0!`, `10\u00A0000\u00A0€`). Always keep accents on French capitals (`À PROPOS`, `ÉCOLE`).

## 3. Gaze Direction, Text/Image Ratios & Information Architecture (IA)
- **The Law of Human Gaze**: Users instinctively follow eye contact. If a hero subject looks right, place the headline and Primary CTA on the **right** so their gaze directs the user to convert. Never orient subjects looking off the outer viewport edge.
- **The 3 Text-to-Image Ratios**:
  - `80% Image / 20% Text`: Emotion first (Luxury, Travel, Fashion, Architecture, Hospitality).
  - `50% Image / 50% Text`: Balanced proof (SaaS, Consumer Hardware, D2C).
  - `80% Text / 20% Image`: Rational authority first (Fintech Ledgers, Legal, Medical, Dev Docs).
- **The 4 Pillars of IA**: *Organization* (topic/task/persona), *Labeling* (customer vocabulary, zero internal company jargon), *Navigation* (`7–10` top-level rubrics max), and *Search*.
- **The 3 Canonical Website IA Structures**:
  1. **Tree (Hierarchical)**: `Home -> Category -> Sub-page` (E-commerce, Multi-service).
  2. **Persona Routing**: Immediate segmentation on Hero (*For Individuals* vs. *For Enterprise*, *Patients* vs. *Doctors*).
  3. **Linear Funnel**: Sequential narrative (`Hook -> Problem -> Solution -> Proof -> Pricing -> Checkout`) with minimal side exits.
- **Semantic URLs & Sticky TOC**: Match URL slugs to `H1` (`/free-quote`, never `/page-2`). Add a sticky anchor Table of Contents (`#section`) on long-form pages (`1,500+` words).

## 4. IHM Ergonomics, Banner Blindness & Neuro-Safety
- **UX Microcopy Laws**: Start action triggers with imperative verbs (*"Calculate My Rate"*); spell out acronyms on first use; never create a `<ul>` bullet list with only 1 item; enforce consistent `Sentence case` or `Title Case` globally.
- **The "Zero-Click" Hero Rule**: Expose core interactive utility (search bar, prompt input, rate calculator, live code sandbox) directly on the Hero with **zero preliminary navigation clicks**. Ban introductory "Splash / Click to Enter" tunnel pages.
- **Preventing Banner Blindness**: **NEVER continuously animate the brand logo or top header**. Users subconsciously filter out moving top-of-page graphics as third-party banner ads.
- **Ban Watermarks Under Prose**: Even a `10%` opacity watermark behind body text slows reading speed by `30%+`. Always place `<figcaption>` captions beneath proof images (scanners read captions before paragraphs).
- **WCAG 2.3.1 Neuro-Safety**: Strictly ban any element that flashes, strobes, or blinks more than **3 times per second** (`>3Hz`) to prevent photosensitive seizures.

---

# 05 — Laws of UX, Cognitive Load & Ethical Choice Architecture

> **Sources**: Jon Yablonski (*Laws of UX*), Sweller & Paas (*Cognitive Load Theory*), CNIL (*Desirable Friction & Dark Patterns*), & Apple WWDC (*8 Principles of Great Design*).

## 1. The 10 Core Laws of UX & Behavioral Principles
1. **Jakob's Law**: Users spend most of their time on other products; preserve familiar spatial and control conventions so mental energy goes to the task, not learning the UI.
2. **Fitts's Law**: $\text{ID} = \log_2(2D / W)$. Keep interactive targets at least `44×44px` on touch (`32×32px` desktop), pad small `16px` icon hitboxes, enforce `16px–24px` dead-space between constructive (`Save`) and destructive (`Delete`) actions, place frequent mobile actions in the bottom thumb zone, and leverage infinite desktop viewport corners/edges.
3. **Hick's Law**: $\text{RT} = a + b \log_2(n)$. Minimize simultaneous choices at conversion points (1 Primary CTA + max 1–2 secondary options); highlight 1 "Recommended" tier in pricing matrices; use progressive disclosure for complex settings.
4. **Miller's Law & Chunking**: Working memory holds `4` active visual chunks (`7 ± 2` max). Group navigation and card rows into `3–4` items max; auto-chunk long strings (`4444 4444 4444 4444`, `+1 (555) 234-5678`, `123-456`).
5. **Postel's Law (Robustness Principle)**: Be liberal in what you accept from humans, conservative in what you emit. Accept phone numbers/cards with or without spaces/dashes, auto-trim whitespace (`trim()`), and populate all 6 OTP boxes when a 6-digit code is pasted into the first box.
6. **Peak–End Rule (Kahneman)**: Users judge an experience by its emotional **Peak** and its **End**. Elevate the core value moment with crisp micro-feedback; end workflows with reassuring receipts/summaries; turn negative peaks (404s, network drops) into recovery wins via `localStorage` draft preservation.
7. **Aesthetic–Usability Effect**: High visual polish builds immediate trust and patience, but can mask structural flaws during user testing—always measure task completion independently of aesthetic praise.
8. **Von Restorff Effect (Isolation)**: Isolate the Primary CTA or key metric via contrast, scale, and whitespace. Restrict high-chroma accents to **`10%` of the viewport** so isolation remains effective.
9. **Tesler's Law (Conservation of Complexity)**: Absorb reducible complexity in engineering (infer city/state from ZIP code, auto-detect Visa/Mastercard/Amex from BIN digits, set smart defaults for 80% of users).
10. **The Doherty Threshold (`< 400ms`)**:
    - `0–100ms`: Instantaneous physical manipulation (`pointerdown`, toggles).
    - `100–400ms`: Uninterrupted flow zone (smooth state transitions `150ms–240ms`, zero spinner needed).
    - `400ms–1,000ms`: Display layout-matched **Skeleton Screen** immediately.
    - `1s–10s`: Optimistic UI update or determinate progress bar with status text.
    - `> 10s`: Background execution with step/percentage progress and completion toast.
- **Supplementary Laws**: *Law of Prägnanz* (prefer simple stable geometry), *Serial Position Effect* (place primary `Home` first and `Profile`/`CTA` last in bars), *Zeigarnik Effect* (use ethical step progress rings `Step 2 of 4`), *Pareto 80/20* (dedicate prime viewport to the core 20% of features).

## 2. Cognitive Load Theory (Sweller & Paas)
$$\text{Total Cognitive Load} = \text{Intrinsic Load} + \text{Extraneous Load} + \text{Germane Load}$$
1. **Intrinsic Load (Domain Task Complexity)**: Segment multi-parameter tasks into sequential steps (`1 concept group per view`).
2. **Extraneous Load (UI Noise — Drive to Zero)**:
   - **Ban the Split-Attention Effect**: Place labels, units, and validation errors directly adjacent to the data element—never force users to cross-reference distant legends.
   - **Ban the Redundancy Effect**: Never repeat identical prose alongside redundant decorative explanations.
3. **Germane Load (Mental Schema Building — Maximize)**: Free up working memory via clean typography and consistent patterns so users achieve deep flow.

## 3. Ethical Choice Architecture & Desirable Friction (CNIL & Apple Principles)
- **7 Strictly Banned Deceptive ("Dark") Patterns**:
  1. *Visual Misdirection*: Styling "Accept All" as a bright button while hiding "Reject All" as low-contrast text.
  2. *Preselection*: Pre-checking optional add-ons or marketing opt-ins.
  3. *Roach Motel*: 1-click signup paired with multi-screen/phone-call cancellation.
  4. *Nagging*: Repeated popups lacking a permanent "No / Dismiss" choice.
  5. *Sneaking*: Injecting hidden fees at final checkout.
  6. *Confirmshaming*: Guilt-inducing opt-out copy (*"No thanks, I hate saving money"*).
  7. *Attention-Capture Traps*: Unpaginated infinite scroll without stopping cues in utility apps.
- **Desirable Friction (Awakening System 2 Reflection)**:
  - Introduce conscious confirmation friction strictly for **irreversible destructive actions** (deleting production resources, revoking keys, transferring funds).
  - Present privacy/consent choices (`Accept` vs. `Refuse`) with **equal visual weight and size** on the first layer.
- **Apple's 8 Principles of Great Design (WWDC 2026)**:
  1. *Purpose* (decide what *not* to build), 2. *Agency* (keep users in control with easy Undo), 3. *Responsibility* (privacy, safety, clear AI disclaimers), 4. *Familiarity* (honor mental models & physics), 5. *Flexibility* (adapt to touch vs. pointer & accessibility), 6. *Simplicity — not minimalism* (never bury essential context just to look empty), 7. *Craft* (uncompromising typographic & alignment rigor), 8. *Delight* (the organic result of getting the first seven right).

---

# 06 — Motion Design Systems & Apple Fluid Interfaces

> **Sources**: Val Head (*Animation in Design Systems*), IBM Carbon Motion, & Apple WWDC (*Designing Fluid Interfaces*, 2018–2026).

## 1. Productive vs. Expressive Motion & Duration Scale
Categorize every animation into one of two contexts:
- **Productive Motion (`70ms–240ms`, zero bounce)**: Dropdowns, tabs, tooltips, sorting, hover states, inline validation. Fast, crisp, low cognitive load.
- **Expressive Motion (`250ms–600ms`, choreographed)**: Hero reveals, onboarding flows, empty-state celebrations, full-view transitions.
- **Viewport Scaling**: Keep full-container movements slightly faster on mobile (`200ms–250ms`) than on wide desktop monitors (`250ms–350ms`). Never exceed `400ms` for utility menus.

```css
:root {
  --duration-instant:  70ms;  /* Button press, active toggle */
  --duration-fast:     120ms; /* Hover states, focus rings */
  --duration-normal:   180ms; /* Tooltips, dropdowns, tabs */
  --duration-moderate: 240ms; /* Small modals, toasts */
  --duration-slow:     320ms; /* Side drawers, accordions */
  --duration-slower:   450ms; /* Page choreography */
}
```

## 2. Custom Cubic-Bezier Curves & Choreography
Never use `transition: all` or generic `linear` / `ease`.
1. **Ease-Out (Entrances & User-Initiated Responses — Default)**: Enters at high velocity and decelerates with physical friction (`--ease-out-default: cubic-bezier(0.16, 1, 0.3, 1)` or Apple sheet `cubic-bezier(0.32, 0.72, 0, 1)`).
2. **Ease-In (Exits & Dismissals)**: Accelerates out of the viewport (`--ease-in-exit: cubic-bezier(0.4, 0, 1, 1)`). Always set exit duration **`20%–30%` faster** than entrance (`220ms` in $\rightarrow$ `150ms` out).
3. **Ease-In-Out (On-Screen Point-to-Point Reflow)**: Sliding tab indicators, layout shifts (`--ease-in-out-move: cubic-bezier(0.4, 0, 0.2, 1)`).
4. **Expressive Overshoot**: Badge pop-ins, checkmarks (`--ease-spring-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Choreography Rules**:
  - *Spatial Consistency*: Enter and exit along the exact same vector (a sheet sliding up from bottom must dismiss down to bottom). Anchor popovers/menus to their trigger (`transform-origin`).
  - *Overlapping Stagger*: Overlap list/grid item entrances by **`30ms–50ms`** (`animation-delay: calc(var(--index) * 40ms)`), capping total group reveal at **`< 500ms`**.

## 3. Apple Fluid Interfaces: Springs, 1:1 Tracking & Momentum Projection
> **Core Principle**: An interface feels alive when feedback fires on `pointerdown`, motion starts from the live on-screen presentation value, inherits release velocity, projects momentum forward, and can be grabbed and reversed mid-flight.

1. **Instant `pointerdown` Response & 1:1 Direct Manipulation**:
   - Depress buttons on `pointerdown` (`transform: scale(0.97); transition: transform 100ms ease-out`), never waiting for `click` release.
   - Use `el.setPointerCapture(e.pointerId)` on `pointerdown` and preserve `grabOffset = e.clientY - el.getBoundingClientRect().top` so dragged elements never snap their center to the pointer. Require `~10px` movement hysteresis before locking drag direction.
2. **Interruptibility & Presentation-Value Continuity**:
   - Never lock out input during a transition.
   - On interruption, read the live on-screen transform value—never jump to logical start/end states.
   - Blend velocity across direction reversals using springs (avoid CSS `@keyframes` on gesture-driven UI). Decompose 2D motion into independent X and Y springs.
3. **Designer-Friendly Spring Parameters (`Damping` & `Response`)**:
   - **`Damping: 1.0`, `Response: 0.3s–0.4s` (Critically Damped Default)**: Zero bounce, smooth settle (`{ type: 'spring', bounce: 0, duration: 0.4 }`). Use for **90% of UI**.
   - **`Damping: 0.8`, `Response: 0.3s–0.4s` (Momentum Bounce)**: Slight overshoot (`{ type: 'spring', bounce: 0.2, duration: 0.35 }`). Use **ONLY** when the user's gesture carried physical momentum (flick, throw, sheet release).
4. **Velocity Handoff, Momentum Projection & Rubber-Banding**:
   - *Velocity Handoff*: Pass pointer release velocity (`px/s`) into the spring (`relativeVelocity = gestureVelocity / (target - current)` when normalized).
   - *Exponential Momentum Projection*: Snap to the target nearest the *projected resting endpoint*, not the release point:
     ```js
     // decelerationRate ≈ 0.998 (normal scroll) | 0.99 (snappy sheet/carousel)
     function project(initialVelocity, decelerationRate = 0.998) {
       return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
     }
     const target = nearestSnapPoint(currentPosition + project(releaseVelocity));
     ```
   - *Progressive Boundary Rubber-Banding*: Never hard-stop at an edge:
     ```js
     function rubberband(overshoot, dimension, constant = 0.55) {
       return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
     }
     ```
5. **Multimodal Harmony**: Fire visual, audio, and haptic feedback on the **exact same frame** only for meaningful commits/snaps.

## 4. Compositor Performance (`60fps / 120fps`) & Vestibular Accessibility
- **Animate Compositor-Only Properties**: Restrict animations strictly to **`transform`** (`translate3d`, `scale`, `rotate`) and **`opacity`**. Never animate `width`, `height`, `top`, `left`, `margin`, or `box-shadow` directly (to animate a hover shadow, pre-render it on an `::after` pseudo-element and transition its `opacity`).
- **Respect `prefers-reduced-motion: reduce` (WCAG 2.3.3)**: Replace spatial slides/springs/parallax with gentle opacity cross-fades (`120ms–200ms`).

---

# 07 — Atomic Design & 3-Tier Token Architecture

> **Source**: Brad Frost (*Atomic Design*) — Component Hierarchy, Token Governance & System Resilience.

## 1. The 5 Concurrent Stages of Atomic Design
`[ Atoms ] ──► [ Molecules ] ──► [ Organisms ] ──► [ Templates ] ──► [ Pages ]`
1. **Atoms**: Indivisible primitives (`<label>`, `<input>`, `<button>`, `<h1>`, `<svg>` icons, avatars, badges, tokens). **Mandatory Rule**: Atoms must have **zero external margin (`margin: 0`)**; spacing is controlled exclusively by parent Molecules/Organisms (`gap`).
2. **Molecules**: Cohesive groups of 2+ Atoms fulfilling a single responsibility (*Search Form* = Label + Input + Button; *Stat Metric* = Eyebrow + Value + Trend Pill).
3. **Organisms**: Self-contained interface regions composed of Molecules/Atoms (*Global Header*, *Hero Section*, *Pricing Matrix*, *Bento Feature Grid*, *Data Table Toolbar*, *Footer*).
4. **Templates**: Page-level structural skeletons defining grid spans, character length limits, and responsive breakpoints without hardcoded marketing prose.
5. **Pages**: Templates populated with **real representative & worst-case content** (120-char headlines, 0-item Empty States, 500-item Pagination) to stress-test underlying Organisms.

## 2. Three-Tier Design Token Architecture
Never hardcode raw hex/px values inside Organisms; separate tokens into three strict layers:
1. **Primitive (Global) Tokens**: Context-agnostic raw scale values (`--color-slate-900: #0f172a; --space-4: 16px;`).
2. **Semantic (Alias) Tokens**: Role-based intent that adapts automatically across Light/Dark/High-Contrast modes (`--surface-primary: var(--color-slate-900); --text-primary: #f8fafc; --border-hairline: rgba(255,255,255,0.08);`).
3. **Component Tokens**: Scoped overrides (`--btn-primary-bg: var(--accent-interactive); --card-radius: 16px;`).

## 3. Pattern Governance (Preventing "Special Snowflake Syndrome")
Follow the **Component Escalation Path**: (1) Use an existing Atom/Molecule/Organism as-is $\rightarrow$ (2) Configure via official props/variants (`size="sm"`, `variant="ghost"`) $\rightarrow$ (3) Upgrade the shared system component rather than copy-pasting one-off forks.

---

# 08 — Modern UI Design Patterns & Generative AI / Agentic UX

> **Sources**: Alberto Monge Roffarello (*UX Design Patterns*, HCI 2025/2026) & Matthew Scharpnick / Anthony Monahan (*Generative AI UX*, BCG X / Microsoft HAX).

## 1. Core Web & Mobile Interaction Design Patterns
1. **Cards**: Cap at `3–4` data points per card (Visual + Title + 1 Metadata line + Action). Make the entire card clickable via stretched link or explicit action footer.
2. **Accordions**: Use for FAQs, settings, and mobile filters; never hide primary sequential reading inside accordions.
3. **Tabs**: Switch between `2–5` peer views at the same hierarchy level; keep labels to `1–2` words on a single row and preserve scroll/filter state across switches.
4. **Breadcrumbs**: Place above `H1` for `3+` level hierarchies (`/` or `›` separators, current page non-clickable muted). Never replace primary nav with breadcrumbs.
5. **Mega-Menu / Dropdowns**: Use a **safe diagonal cursor triangle** (`150ms` hover intent delay) so moving diagonally from trigger to submenu never snaps the menu shut.
6. **Mobile Bottom Tab Bar vs. Drawer**: Expose the top `3–5` core destinations in a persistent **Bottom Tab Bar** (thumb zone); relegate secondary settings to a slide-out Drawer.
7. **Numbered Pagination vs. "Load More"**: Use **Numbered Pagination** for dashboards, search, and B2B catalogs (preserves URL shareability, footer reachability, and spatial memory). Use **"Load More"** for media galleries; avoid unpaginated infinite scroll outside social feeds.

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

---

# 09 — Playbook Anti-Slop, Vanguard Architecture & Synthèse des 200 Sites

> **Rôle du document** : Manuel prescriptif unifiant **l'audit empirique des 200 sites de référence**, le **High-Agency Frontend Skill** (`design-taste-frontend`) et l'architecture **Vanguard UI & Motion Choreographer** (`high-end-visual-design`).

## 1. Cadrans de Calibration & Moteur de Variance Créative

### A. Cadrans Globaux par Défaut (`8, 6, 4`)
Sauf demande explicite de l'utilisateur, piloter toute génération avec :
- **`DESIGN_VARIANCE: 8`** *(1 = Symétrie, 10 = Asymétrie éditoriale)* : Bannir les Heros centrés dès que `> 4`. Forcer les grilles fractionnaires (`2fr 1fr 1fr`), Split-Screen ou Bento asymétrique.
- **`MOTION_INTENSITY: 6`** *(1 = Statique, 10 = Cinématique)* : Transitions physiques (`cubic-bezier(0.16, 1, 0.3, 1)` ou `cubic-bezier(0.32, 0.72, 0, 1)`), ressorts (`damping: 1.0, response: 0.4`), boutons magnétiques via `useMotionValue` / `useTransform` (jamais de `useState` continu).
- **`VISUAL_DENSITY: 4`** *(1 = Galerie d'art, 10 = Cockpit de pilotage)* : Macro-respiration (`py-24` à `py-40`). Si **`VISUAL_DENSITY > 7` (Cockpit Mode)** : bannir les boîtes de cartes génériques, utiliser exclusivement des filets `1px` (`border-t`, `divide-y`), l'espace négatif et `font-mono` (`tabular-nums`) sur tous les chiffres.

### B. Moteur de Variance Créative (Sélectionner 1 Vibe + 1 Layout par projet)
1. **Archétypes d'Ambiance & Texture (Choisir 1)** :
   - *Ethereal Glass (SaaS / IA / DevTools)* : Noir carbone profond (`#050505` / `#08090a`), orbes radiaux subtils en arrière-plan, surfaces sombres avec bordures `border-white/10`, typographie Grotesk géométrique (`Geist`, `Plus Jakarta Sans`, `Satoshi`).
   - *Editorial Luxury (Lifestyle / Immobilier / Agence / Recherche)* : Crème chaud (`#FDFBF7` / `#faf9f5`), sauge feutré ou espresso profond. Titres massifs en Serif variable à fort contraste (`PP Editorial New`, `Instrument Serif`, `Newsreader`). Grain filmique CSS fixe (`opacity-[0.03]`).
   - *Soft Structuralism (Consumer / Santé / Fintech / Portfolio)* : Fonds gris argenté (`#f4f4f2`) ou blanc pur (`#ffffff`), typographie Grotesk audacieuse (`Clash Display`, `Cabinet Grotesk`), composants flottants avec ombres ambiantes ultra-diffuses multi-couches.
2. **Archétypes de Mise en Page (Choisir 1 + Repli Mobile Strict `< 768px`)** :
   - *The Asymmetrical Bento* : Grille CSS de tailles variées (`col-span-8 row-span-2` combiné à des cartes `col-span-4` empilées). Repli mobile : pile 1 colonne (`grid-cols-1 gap-6`).
   - *The Z-Axis Cascade* : Cartes superposées avec profondeurs variées et micro-rotation (`-2deg` ou `3deg`). Repli mobile : supprimer toutes les rotations et marges négatives sous `768px`.
   - *The Editorial Split* : Typographie monumentale sur la moitié gauche (`w-1/2`) et cartes interactives décalées à droite. Repli mobile : pile verticale pleine largeur (`w-full px-4 py-8`).

## 2. Micro-Esthétique Haptique & Architecture des Composants
- **Architecture "Double-Bezel" (Doppelrand / Rayons Concentriques)** :
  - *Coque Externe (Outer Shell)* : `bg-black/5` ou `bg-white/5`, `ring-1 ring-black/5` ou `border border-white/10`, padding `p-1.5` ou `p-2`, grand rayon externe `rounded-[2rem]`.
  - *Cœur Interne (Inner Core)* : Surface propre, biseau lumineux supérieur `shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`, et **rayon mathématiquement concentrique** (`rounded-[calc(2rem-0.375rem)]`, soit $R_{\text{inner}} = R_{\text{outer}} - \text{padding}$).
- **Boutons "Button-in-Button" & Tension Cinétique** : Pilule (`rounded-full px-6 py-3`), clic `active:scale-[0.98]`, flèche (`↗` ou `→`) encapsulée dans son propre cercle (`w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center`) qui se décale en diagonale au survol (`group-hover:translate-x-1 group-hover:-translate-y-[1px] scale-105`).
- **Rythme Spatial & Eyebrow Tags** : Macro-whitespace `py-24` à `py-40` ; Eyebrow tags `rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10`.

## 3. Chorégraphie du Mouvement (Fluid Dynamics)
1. **Navigation "Fluid Island" & Morphing Hamburger** : Pilule flottante (`mt-6 mx-auto w-max rounded-full backdrop-blur-xl border border-white/10`), barres du hamburger pivotant en `'X'` (`rotate-45` et `-rotate-45`), ouverture modale (`backdrop-blur-3xl bg-black/80`) avec révélation par masque ascendant décalé (`translate-y-12 opacity-0` $\rightarrow$ `translate-y-0 opacity-100`).
2. **Interpolation d'Entrée au Scroll** : Utiliser `IntersectionObserver` ou `whileInView` (`translate-y-16 blur-md opacity-0` $\rightarrow$ `translate-y-0 blur-0 opacity-100` sur `700ms–800ms` avec `cubic-bezier(0.32, 0.72, 0, 1)`). **Interdiction absolue de `window.addEventListener('scroll')`**.

## 4. Directives "Absolute Zero" (Bannissement des Clichés IA) & Garde-Fous GPU
1. **THE LILA BAN** : Interdiction formelle des dégradés violet/bleu néon IA et des lueurs de boutons violettes. Maximum 1 couleur d'accent (< 80% saturation).
2. **Polices & Hiérarchie** : **Zéro police Serif sur les Dashboards logiciels**. Graisses variables intermédiaires (`450`, `510`), lettrage négatif sur les titres (`tracking-tighter`), largeur de corps limitée à `max-w-[65ch]`.
3. **Politique Anti-Emoji & Icônes Fines** : **Zéro emoji** dans le code, les boutons ou les badges. Utiliser des icônes vectorielles à trait fin et constant (`@phosphor-icons/react`, `@radix-ui/react-icons`, `strokeWidth` `1.5`).
4. **Fin de l'effet "Jane Doe / Acme"** : Bannir *"John Doe"*, *"Acme"*, *"SmartFlow"*, les chiffres ronds artificiels (`99.99%`, `50%` $\rightarrow$ utiliser `47.2%`, `14 820,50 €`, `142ms`), le jargon creux (*"Elevate, Seamless, Unleash, Next-Gen"*) et les URLs Unsplash aléatoires.
5. **Garde-Fous Techniques** : Vérifier `package.json` et lock Tailwind v3 vs v4 (`@tailwindcss/postcss`), isoler les feuilles interactives avec `'use client'` en RSC, utiliser `min-h-[100dvh]` (jamais `h-screen`), restreindre `backdrop-blur` aux calques fixes/sticky et le grain à `fixed inset-0 pointer-events-none z-50`, et générer les 4 états UI (**Skeleton**, **Empty**, **Error**, **Active Press**).

---

## PART II — COMPLETE EMPIRICAL AUDITS OF THE 200 INDUSTRY-REFERENCE WEBSITES (001 TO 200)

# Catégorie 1 : SaaS, DevTools & Infrastructure (Sites 001 à 035)

## Architecture & Invariants Factorisés du Secteur (35 Sites)
- **Surfaces Dark Mode (28/35 sites)** : Fonds carbone teintés (`#08090a`, `#09090b`, `#0d1318`, `#13111c`, `oklch(0.19 0.0025 157.5)`) évitant le *smearing* OLED ; élévation des cartes de `+3%` à `+6%` (`rgba(255,255,255,0.03)` ou `#101113`) avec hairlines `1px solid rgba(255,255,255,0.08)` (`0.12` focus) ; texte primaire `#ededed` / `#f7f8f8` (zéro halation), secondaire `#8a8f98` / `#a1a1aa`.
- **Loi Typographique SaaS** : Rejet du `700` lourd sur les `H1` (`52px–82px`) au profit de graisses légères ou variables intermédiaires (`300` Roobert/Saans, `325` Mackinac, `400` Geist/Inter/Domaine/Arizona Flare, `440` Mona Sans, `500` Manrope/Sora/Satoshi/Suisse, `510` Linear, `660` GitLab Sans) avec leading `1.0–1.1` et tracking `-1.2px` à `-3.84px`. Prix, remises, raccourcis (`⌘K`) et télémétrie toujours en `monospace` (`tabular-nums`).
- **Patterns Pricing & Agent-First (Standard 2026)** : Toggle `Monthly | Annual (-17% à -25%)`, alignement baseline `$XX / mo`, et intégration native des agents IA dès le Hero et `/pricing` : pilules `[Copy setup prompt]` (Cursor/Claude/Zed/v0), barres `[Copy as Markdown | Ask ChatGPT | Ask Claude]`, catalogues SQL machine-readable (`pricing.md`), et compteurs de trafic agent live.

## Référentiel Technique Site par Site (`001` à `035`)
- **001 Linear** : Bg `#08090a`, Cards `rgba(255,255,255,0.03–0.06)`, Border `rgba(255,255,255,0.08)` (dividers `0.05`), Text `#f7f8f8` / `#8a8f98`, Signals (`#f5a623` in-progress, `#46a758` `+22`, `#e5484d` `-10`, `#5e6ad2` agent) | Font `"Inter Variable"` `H1 64px/64px (1:1) fw 510 ls -1.408px`, UI metadata `12–13px lh 16px fw 450/500` | CTA `"Sign up"` bone `#e5e5e6` text `#08090a` pill `9999px h 32px pad 0 12px 13px fw 510` + 5-stop shadow | Header `h 73px blur(20px)`, nav centrée `13px gap 24px`, séparateur vertical `rgba(255,255,255,0.15)` | UI Hero window (`radius 12px`, shadow `0 24px 64px rgba(0,0,0,0.6)`), sidebar `w 240px` (item actif `bg 0.06 radius 6px`), activity thread `1px` avec avatars `18px`.
- **002 Vercel** : Bg `#000`, Cards `#0a0a0a` (+4% lum), Border `rgba(255,255,255,0.12)` & `#1f1f1f`, Text `#ededed` (93% lum) / `#888` / dimmed context `#707581` dans les sous-titres, Halo radial `rgba(255,255,255,0.15)` | Font `GeistSans` `H1 64px/64px (1:1) fw 400 ls -3.84px (-6%)`, `H2 48px fw 400 ls -2.4px` | Dialectique de rayons : Hero CTAs en pilules `9999px h 40px pad 0 16px 16px fw 500` (`Deploy now` `#ededed` + `Talk to sales` `#0a0a0a bdr #1f1f1f`) vs Navbar utility `Get a Demo` en rectangle `radius 6px 14px fw 450`.
- **003 Stripe** : Light `#fff` + diagonal mesh (`#ffc371, #e535ab, #635bff`), Dark Enterprise/Pricing `#0a2540` (deep navy), Indigo `#635bff`, Link `#00D66F`, Cyan `#00d4ff`, Text `#0a2540 / #425466 / #50617a` | Font `sohne-var` (Klim Söhne) `H1 64px lh 1.08` avec `background-clip: text` limité à 2–3 mots clés + note exposant `11px` | Mega-Menu 4 colonnes (`Payments, Revenue, Money Management, Embedded Finance`), items `16px fw 300 -> hover #635bff`, descriptions `14px` indentées sans icône, `Escape` focus ring `0 0 0 2px #635bff` | Feature cards `#fff radius 16px` (`shadow 0 15px 35px rgba(50,50,93,0.1)`, bouton expand `32×32px radius 8px`), vrais terminaux POS/Klarna/Link | `/pricing` en 2 cartes larges split 50/50 : `Standard` (Light, `"2.9% + 30¢"` `32px bold`) vs `Custom` (Dark `#0a2540`, CTA `#00d4ff`).
- **004 GitHub** : Primer Light `#fff` (grille `rgba(0,0,0,0.04)`), Inset `#f6f8fa`, Border `#d0d7de`, Text `#1f2328 / #656d76`, Green `#08872b / #1f883d`, Accents Copilot (`#0969da, #8250df, #bf3989, #d4a72c`) | Font `"Mona Sans VF"` `H1 56px/61.6px fw 440`, `H2 40px fw 440`, code `13px radius 4px` | Standard Primer **`radius 6px`** partout | Mega-Menu `Products ▾` 3 zones (2 cartes isométriques gauche + `BUILD & SHIP` icônes encadrées `32px radius 6px` + `SECURE`) | Hero Copilot avec stepper interactif 5 étapes (`Review -> Direct -> Check -> Approve -> Shipped` + Pause `[||]`) et split terminal `bun test` / PR | `/pricing` : 3 colonnes (`Free $0, Team $4, Enterprise $21 RECOMMENDED` + callout bleu `rgba(56,139,253,0.1)`).
- **005 Supabase** : Palette 100% **OKLCH angle unique `157.5°`** : Bg `oklch(0.19 0.0025 157.5)` (`#171917`), Cards `oklch(0.22 0.003 157.5)`, Border `oklch(0.95 0.0015 157.5 / 0.08)`, Text `#f0f2f0 / #9da39d`, Emerald `oklch(0.76 0.18 157.5)` (`#3ecf8e`) | Font `Manrope` `H1 56px fw 500` bicolore (`#f0f2f0` + `#3ecf8e`) + `Inter 15–16px` | Mega-Menu avec liens comparatifs directs (`vs Firebase, vs Heroku, vs Auth0`) | Bento `gap 24px radius 12px` (globe 3D `$ supabase functions deploy` + curseurs live) | `/pricing` : Barre IA **`[Copy as Markdown] [Ask ChatGPT] [Ask Claude]`**, bouton Pro `#3ecf8e radius 9.7px`.
- **006 Raycast** : Bg `#07080a` + grain, Cards `#101113`, Crimson `#ff6363 / #e53935`, Text `#fff / #a1a1a1` | Font `Inter` `H1 64px fw 600 ls -1.2px lh 1.05`, input palette `20px` | Header en capsule flottante `radius 16px bg rgba(16,17,19,0.75) blur(16px)`, CTA `Download` `#e6e6e6 radius 8px pad 6px 12px` | `/pricing` : **Segmented control interne (`Pro | Plus | Max`) logé dans la carte Pro** recalculant prix (`$8`) et crédits IA en direct.
- **007 Resend** : Bg `#000`, Cards `#0a0a0a`, Text `#f0f0f0 / #a1a1a1`, Amber `#f59e0b` | Titres en Serif haute couture **`Domaine Display` (Klim)** `76.8px/76.8px (1:1) fw 400 ls -0.768px` contrastant avec un Rubik's cube 3D noir mat | Mega-Menu `radius 20px blur(24px)` (3 col texte + 2 cartes radar/3D), ruban de 13 tuiles SDK (`radius 12px`) | `/pricing` : Slider de volume (`3k` à `3M+` emails/mo) pilotant 4 cartes, boutons `radius 16px` double hairline.
- **008 Railway** : Bg prune nocturne `#13111c` + ciel étoilé illustré, Cards `#1a1726`, Purple `#8250dc`, Text `#fff / #a39fb2` | Titres en **`IBM Plex Serif`** `56px/70px (lh 1.25) fw 500 ls -1.4px` | Canvas Hero à grille radiale et services reliés par câbles de Bézier (`Web, Postgres, Redis`) | `/pricing` : Bannière horizontale pleine largeur `Free` + cartes `Hobby ($5 min usage)` / `Pro ($20 min usage)` avec graphes CPU/RAM en paliers.
- **009 PlanetScale** : Bg `#000–#111`, Border `#262626`, Text `#e1e1e1`, Hazard Orange `#f35815`, Yellow `#facc15` | **100% `ui-monospace` (`SFMono-Regular`) et `border-radius: 0px` sur tout le site** ; titres précédés d'une barre `border-left: 2px solid #ff5c00; pad-left 12px` | `/pricing` : Encadré wireframe exposant `pricing.md` et une connexion SQL directe pour que les agents IA requêtent les tarifs des clusters en SQL.
- **010 Tailwind CSS** : Bg `#0b1120` avec hachures 45° et lignes de cote d'architecte, Cards `lab(27.11 -0.95 -12.32)`, Sky `#38bdf8`, Annotations `#64748b` | Font `Inter` `H1 60px/60px (1:1) fw 400 ls -3px` | **Méta-annotations en `monospace` affichant littéralement les classes CSS du composant au-dessus des titres** (`text-6xl text-white tracking-tighter`) | Split-pane Hero (code HTML `#f43f5e/#38bdf8` + rendu vinyle live), CTA `radius 32px bg #1e293b`.
- **011 Cloudflare** : Bg `#141414` encadrant un **panneau Hero monolithique orange `#fa6400` à `border-radius: 24px`**, Text `#fff / #f0e3de` | Font **`STK Bureau Sans`** `H1 56px lh 1.1 fw 500 ls -1.4px` | Clic sur `Products ↕` ouvre une modale plein écran filtrée par pilules en grille 4 colonnes wireframe ; **CTA d'urgence `[!] Under attack?` directement dans la top-bar**.
- **012 Postman** : Orange `#e0531f`, Hero radial `#1c100b -> #0a0a0a`, Pricing light `#fff` (`#212121`) | Font **`gtStandard` (Grilli Type)** `55px fw 700 ls 0.6px` avec swap machine à écrire (`"API context_"`) | Pilule CLI (`npm ▾ | $ npm install -g postman-cli [📋]`) + prompt **`INSTALL FOR YOUR AGENTS AND START WITH postman init [📋]`** + 3 badges OS | `/pricing` : Ligne `AI credits / month` en métrique primaire, boutons compacts `radius 5px pad 4px 12px 14px fw 600`.
- **013 Docker** : Maritime Blue `#2560ff`, Light `#f9fafb` (`#2c333f`), Hero dark `#0b0f19` | Font **`Repro`** `H1 48px fw 500 ls -0.6px` | Positionnement *"Trust Docker for the Agents You Don't"* | `/pricing` : Contrôles `radius 4px 12px` ; la carte recommandée **`Docker Team` est entièrement inversée en bleu saturé `#2560ff`** (texte et bouton blancs).
- **014 Sentry** : Midnight Purple `#180f2d` avec grain stipple et coups de pinceau analogiques, Neon Pink `#ff3366`, Lime `#84cc16`, cartes `/pricing` blanches `#fff radius 8px` (`#362d59`) | Font **`Rubik`** `56px fw 700` avec mots inclinés `rotate(-3deg)` | **Switch `"Marketing Mode [ON/OFF]"`** en haut à droite remplaçant le marketing par la vérité brute + callout `"Sentry MCP"`.
- **015 Datadog** : Regal Purple `#632ca6`, Light `#fff`, Hero Lilac `#f0ebf8` (`oklch(0.94 0.03 300)`) | Font **`nationalweb` (Klim National)** `H1 52px fw 700 lh 1.15`, nav uppercase | Mega-menu 50+ produits (incluant `Agent & AI Observability : MCP Server, Bits AI`) et topologie hexagonale | `/pricing` : **Sidebar verticale par ligne de produit (`AI, Infra, APM, Logs`)** mettant à jour la matrice centrale 3 colonnes avec l'unité exacte (`$15/host` vs `/GB`), boutons `radius 4px`.
- **016 HashiCorp** : Cosmic gradient `#0d0b21 -> #161338`, Action `#1563ff`, couleurs par produit (Terraform `#844fba`, Vault `#ffc107`, Consul `#e03c5b`, Nomad `#00bc7e`) | Font **`__hashicorpSans`** à échelle colossale **`H1 82px/96px fw 600`**, boutons `radius 5px pad 11px 19px` | Dock flottant de routage par intention en bas à droite (*"What would you like to solve with Vault / Terraform?"*).
- **017 Prisma** : Papier parchemin chaud **`#faf8f5`**, cartes `#fff` (`shadow 0 4px 20px rgba(0,0,0,0.05)`), Text `#3a3b3c`, CTA `#151515` | Font **`Sora`** `H1 52px fw 500 lh 1.06` | Console `console.prisma.io` (`Connect GitHub` vs `Deploy with your agent : $ npx prisma deploy`) | `/pricing` : Carte `Starter ($10)` entourée d'une **bordure hairline `1px` en dégradé tricolore (`#ea580c -> #facc15 -> #06b6d4`)**.
- **018 Clerk** : Electric Indigo `#6c47ff`, Home light `#fff`, Pricing/Console dark `#131316` (cartes `#18181b`) | Font **`suisse` (Suisse Int'l)** `H1 64px/71.68px fw 700 ls -2.24px` + `geistNumbers` | Pilule Hero **`[Copy prompt]`** (Cursor, v0, VS Code, Zed) + vrai composant `<SignIn />` live avec micro-badge **`Last used`** sur OAuth Google | `/pricing` : Boutons `radius 6px 13px`, toggle `Monthly | Annual` encastré dans l'en-tête de la carte Pro + pilier `"Agent Authentication"`.
- **019 Mintlify** : Deep Evergreen `#060907` (`lab(2.42 -0.16 -0.47)`), Cards `#121413`, Mint `#0cce6b` + courbes wireframe bioluminescentes | Titres en **`arizonaFlare` (ABC Dinamo — empattements évasés)** `H1 56px fw 400 ls -0.8px` | Badge Hero temps réel **`Agent traffic 77.8308% >`**, Mega-Menu 4 colonnes intégrant `MCP server` et `/pricing` (`Starter $0, Pro $450/mo`, boutons `radius 4px`).
- **020 GitLab** : Fox Orange `#e24329` + Violet `#7759c2`, Hero dark `#110d1a`, Pricing light `#fff` (`#171321`, bordure `2px solid #e24329`) | Font **`GitLab Sans`** `H1 64px lh 1.1 fw 660 ls -1.92px` | `/pricing` : **Onglets de topologie d'hébergement au-dessus de la grille (`GitLab.com SaaS | Self Managed | Dedicated`)** et **double CTA côte à côte** dans la carte Premium (`Buy Premium` plein `#171321` + `Try for free` outline, `radius 4px`).
- **021 Pulumi** : Bascule stratégique Homepage claire `#fff` $\rightarrow$ Pricing/Docs prune sombre **`#1f1b21`** avec courbes topographiques, Violet `#5a30c5` (`radius 6px 14px`) | Font `Inter` `H1 56px fw 600 ls -1.8px` + onglets de code polyglottes (`TS, Python, Go, C#`).
- **022 Grafana** : Fond perle `#f4f4f6` sous une **aurore matinale horizontale (`#fed7aa, #e9d5ff, #bae6fd`)**, Flame `#f97316`, Cobalt `#1f6feb` | Font **`Poppins`** `H1 52px fw 600 ls -1.2px` | Barre flottante sous le CTA **`✨ Ask AI | "How do I get started with Grafana?" →`**, cartes `/pricing` `#fff radius 16px`.
- **023 Neon** : Bg `#000` avec traînées lumineuses architecturales, Cards `#0a0a0a`, Emerald `#00e599`, Cyan `#00d4ff` | Font `Inter` `H1 52px lh 1.1 fw 400 ls -2.08px`, termes soulignés en `1px dotted` | `/pricing` : **Sélecteur déroulant de profil de charge encastré dans les cartes (`Based on: [Intermittent load, 1 GB ▾] -> $15/mo` vs `[High load, 100 GB ▾] -> $701/mo`)**, pilules `9999px pad 0 28px`.
- **024 Render** : Bg `#0d0d0d` avec **grille échiquier `1px solid rgba(255,255,255,0.05)`** sur laquelle s'alignent tous les conteneurs, Cards `#121214` | Font **`Roobert` (Displaay)** `H1 60.55px lh 1.05` en **`font-weight: 300` (Light)** `ls -1.28px` | **`border-radius: 2px` strict** partout ; carte `Enterprise` inversée en gris clair `#e4e4e7`.
- **025 Retool** : Bg `#151515`, Cards `#1b1b1b`, couleur primaire **Warm Mastic `#e9ebdf`** (crème os chaud pour le texte et les pilules `9999px 13px`) | Font **`saansFont` (Displaay Saans)** `H1 55.6px lh 1.1 fw 300 ls -1.11px` | Hero Prompt-to-App interactif avec tag `@PostgreSQL` pointillé | `/pricing` : Bifurcation explicite **`$X/mo per builder ⓘ` vs `$Y/mo per internal user ⓘ`**.
- **026 Fly.io** : Fond conte illustré **lavande pastel `#e0e7ff -> #e0f2fe`**, Hot Purple `#7c3aed`, Ink `rgba(40,25,80,0.75)` | Duo **`Mackinac` (P22 Serif)** `60px fw 325` (ligne 2 italique soulignée au feutre `3px`) + **`Bricolage Grotesque`** `16px` | Double CTA (`Deploy your app >` + **`[📋] Onboard your agent`**) et calculateur à la seconde (`radius 8px`).
- **027 Axiom** : Bg `#060606` traversé de faisceaux laser diagonaux dorés, Cards `#0f0f10`, Flame Orange `#da5c2b` (`radius 6px 13px pad 0 8px`), Text `#fafafa` | Font `Geist` `H1 56px fw 500 ls -1.2px` | Mockup Query Builder live + copywriting anti-commercial sur `/pricing` (*"Add-ons unlock in the Console, not on a sales call"*).
- **028 Turso** : Bg océanique **`#0d1318`**, Cards `#11181e` (`border rgba(79,248,210,0.25)`), **Neon Turquoise `#4ff8d2`** (CTA pill `9999px text #000` WCAG AAA) | Font `Inter` `H1 60px lh 1.05 fw 800 (ExtraBold) ls -1.5px` | Positionnement "1 base SQLite (`user-${userId}`) par agent IA", `/pricing` en 5 colonnes (`Free 100 DBs, Developer $4.99 Unlimited DBs...`).
- **029 Trigger.dev** : Bg `#121317`, Cards `#18191e`, **Acid Lime `#a3e635`** | Duo **`Satoshi-Variable`** `H1 56px fw 600` + `Geist` | Double CTA (`Start building` `#a3e635` + **`[✨] Copy setup prompt [📋]`**), onglets incluant **`⏳ Human in the loop`**, carte Hobby bordée `1px solid #a3e635`.
- **030 Inngest** : Bg `#0c0a09` + grain filmique analogique lourd, Cards `#141211`, Vermilion `#ff4d4d` | Font **`Whyte Inktrap` (ABC Dinamo)** `58px fw 400` avec `"UNBREAKABLE."` en **lettrage contour creux (`-webkit-text-stroke: 1px #fff; color: transparent`)** + `CircularXX` `17px` | Arbre `await step.run(...)` avec badges `COMPLETED | 1.2S` (`#10b981`) ; carte Pro remplie d'une texture vermillon `#ff4d4d`.
- **031 Liveblocks** : Bg `#000`, Cards `#0a0a0a`, Font **`suisse` (Suisse Int'l)** `H1 64px fw 500` | **Vrai curseur multijoueur animé (`Chris` `#a3e635`) se déplaçant dans le mot `"multiplayer"` du `H1`**, bouton `"Install with AI ▾"`, et compteur WebSocket temps réel **`● 6 👥`** épinglé en bas de la page.
- **032 Upstash** : Bg `#09090b`, Cards `#101613` (`border rgba(0,229,153,0.15)`), **texte teinté menthol `#ecfdf5`** (2% vert), Font **`Inter Tight`** `H1 64px fw 600` en dégradé vertical `#00e599 -> #eab308` | Bannière Remote MCP Server + bouton **`Set up your agent ▾`**, `/pricing` à switcher multi-bases (`Redis | Vector | QStash | Workflow | Box | Blob`).
- **033 Knock** : Bg `#fff`, Coral `#ff573a`, graphe arborescent génératif (`#b45309, #9d174d`), Text `#111827` | **Chaque bouton du site porte son raccourci clavier physique en badge keycap (`Log in [L]`, `Sign up [S]`, `Book a demo [D]`, cookies `[O] / [A]`)** | `/pricing` (`radius 4px`) facturé uniquement sur les profils actifs notifiés (*"not for dormant profiles"*).
- **034 Dub.co** : Bg clair **`#fafafa` à grille carrée `1px solid rgba(0,0,0,0.04)`**, Cards `#fff` (`border #e5e7eb`), Text `#0a0a0a`, piliers (`#8b5cf6` Affiliate, `#10b981` Analytics, `#f97316` Links) | Font **`Satoshi`** `H1 56px fw 500` | `/pricing` : Switcher `Dub Partners | Dub Links` et toggle annuel explicite **`Yearly [10% discount + 12x usage upfront]`** (`radius 8px`).
- **035 Loops.so** : Bg terre d'ombre `#191918`, Cards `#20201e`, Text `#fff / #eeeaec`, flanqué à droite d'un **ruban vertical rétro 1970s 3 bandes (`#fbbf24, #f97316, #dc2626`)** | Font **`Newsreader` (Production Type Serif)** `H1 56px fw 500 ls -0.8px` | `/pricing` sans frais par siège ni par envoi, piloté par un slider continu de contacts (`1k $0 -> 5k $49/mo`), pilules `999px`.

---

# Catégorie 2 : Productivité, Collaboration & Workspace (Sites 036 à 065)

## Architecture & Invariants Factorisés du Secteur (30 Sites)
- **Surfaces & Chaleur Papeterie** : 75% des outils de productivité utilisent des fonds **papier chaud / albâtre** (`#f9f7f2` Slite, `#faf8f5` Granola, `#f6f5f4` Notion Calendar, `#fcfaf7` Superhuman, `#fdf4e7` Coda) ou des grilles de points infinis (`12px` dot-matrix sur `#fafafc` Miro) avec une encre carbone adoucie (`#030302`, `#141413`, `#191918`, `#292929`, `#333840` ou `display-p3` aubergine `#220a33`).
- **Ombres Sub-Pixel & Coques Double-Bezel** : Remplacement des bordures CSS `1px solid` épaisses par des **anneaux d'ombre internes/externes sub-pixel** (`0 0 0 1px rgba(0,0,0,0.06)` Amie, `0 0 0 1.5px inset #292827` Coda, `0.5px` Campsite, ou biseau plastique 5 couches Canva/Sketch) et des coques **Double-Bezel** (`outer 28px` + `padding 4px` $\rightarrow$ `inner 24px` Sketch).
- **Typographie Expressive & Pricing Collaboratif** : Mariage de Serifs éditoriaux (`Exposure VAR`, `Untitled Serif`, `Quadrant`, `Tiempos`, `Reckless`, `Gamuth Display`) ou de Grotesques d'auteur (`Roobert PRO`, `Mark Pro`, `Garnett`, `Aeonik Pro`, `TWK Lausanne 300` à `102px`, `Agrandir`, `Graphik`, `Haas Grotesk`) avec des contrôles interactifs de taille d'équipe (`Seat slider 1..200+`, `Team size input`) et la gratuité explicite des lecteurs (*"Viewers are always free"*).

## Référentiel Technique Site par Site (`036` à `065`)
- **036 Notion** : Bg `#fff`, Blue `#0075de`, Pastels (`#e8f3fc` ice, `#fef2f2` salmon, `#fefce8` butter, `#fdecd8` peach), Ink `rgba(0,0,0,0.95) / #6b7280` | Font **`NotionInter`** `H1 64px fw 700 lh 1.05 ls -2.125px` intégrant une **pilule de verbe cyclique (`agents [🟠 Create / Plan / Track] together` sur `#fdecd8 radius 9999px`)** | Mega-Menu `Product ▾` en 3 tuiles pastel illustrées à l'encre noire par Roman Muradov | `/pricing` : `Free $0, Business $20 (Recommended), Enterprise`, boutons `radius 8px 16px fw 500 pad 4px 14px`.
- **037 Figma** : Bg `#fff`, Surface `#f9fafb` (`bdr #e5e7eb`), Spectre (`#f24e1e, #ff7262, #a259ff, #1abcfe, #0acf83`) | Font **`figmaSans` Variable** : `H1 72px/79.2px fw 400 ls -1.08px` et **boutons principaux en graisse ultra-légère `font-weight: 330` à `18px pad 12px 22px`** | Mockup Hero avec fenêtre plugin `chart-generator` dotée de vrais sliders (`Width, Height, Ring thickness, Corner radius`) + bandeau `/pricing` des 10 surfaces (`Design, Make, Draw, Dev Mode, FigJam, Slides, Motion, Specs, Sites, Buzz`).
- **038 Framer** : Bg `#000`, Cards `#0a0a0a`, Halo `#0055ff / #38bdf8`, Text `#fff / #a1a1aa` | Font **`"GT Walsheim Medium"` (Grilli Type)** `H1 54px/54px (1:1) fw 500 ls -2.16px (-4%)` | Lien Hero `"New: Framer MCP →"` et `/pricing` (`Free $0 [500 AI credits + ✓ MCP server], Basic $10 [1,000 credits ▾], Pro $30 [3,000 credits ▾]` avec dropdown de crédits encastré dans la carte).
- **039 Arc Browser** : Bg obsidienne `#0b0b0b`, Text `#fff / rgba(255,255,255,0.85)` contraint à **`max-width: 65ch`**, icône 3D tubulaire gonflable (`#2563eb + #fb7185` à contour sticker blanc) | Titres en **`"Exposure VAR"` (205TF)** `76px fw 600 ls -2.432px lh 1.05` + corps en **`Marlin`** `19px lh 1.6`, narration centrée à grand espace (`pad 120px 24px`) sans widgets parasites.
- **040 Loom** : Bg `#fff`, Atlassian Cobalt `#1868db`, Ice `#e9f2ff`, Text `#292a2e`, bordure `#22c55e` sur `Business + AI` | Font **`"Charlie Display"`** `H1 54.3px fw 700 lh 1.15` + `"Charlie Text" 16px` | Double CTA (`Get Loom for free` `#1868db` + `⤓ Install Chrome Extension` `#e9f2ff` en pilules `9999px`) | `/pricing` : **Input interactif `Team size: [ 100 ] users`** recalculant 4 cartes `radius 24px`.
- **041 Miro** : Bg `#fafafc` couvert d'une **grille infinie de points `12px` (`#e5e7eb`)**, Canary `#ffd02f`, Cobalt `#3859ff`, Ink `#1c1c1e` | Font **`roobertPROLocal` (Displaay)** `H1 56px fw 500 lh 1.1 ls -1.68px` | Top-bar avec curseurs collaboratifs animés (`[Miro AI ▷]` rose + `[Andrey ▷]` cyan) | `/pricing` : Carte `Business` coiffée d'un capuchon `#3859ff`, bordure `2px solid #3859ff` et bouton `radius 8px 18px fw 600`.
- **042 Pitch** : Home indigo `#1e0e4f / #280f62` (slides 3D parallaxe), Pricing lavande `#f5f3ff`, Accents **Lime `#c8f560`** & Lilac `#c4b5fd` | Font **`"Mark Pro Bold"` (FontFont)** à **`88px` (home) / `64px` (pricing) `fw 700 ls -1.5px lh 1.05`** | Bannière `"Pitch's MCP & API"` | `/pricing` : Conteneur blanc `radius 20px` `"How Many Seats Do You Need?"` avec slider violet `1..200+` sièges (bulle lime `1 Seat`) et 4 cartes à capuchons colorés (`FREE, PLUS #c4b5fd, TEAM #4f46e5, BUSINESS`).
- **043 Superhuman** : Hero split-screen 50/50 (gauche `#181528`, droite rétroéclairage magenta-violet), Amethyst `#714cb6`, Pricing sur fond **albâtre chaud `#fcfaf7`** | Font **`"Super Sans VF"`** `H1 56px fw 400 ls -0.64px` | Mockup Inbox (`Important 8 | Calendar 18 | Team 15`) + modale `Auto Draft to Karl` (`#38bdf8 radius 12px`), `/pricing` (`Starter $25, Business $33 [15% off for teams of 5+, radius 8px], Enterprise`).
- **044 Slite** : Bg papier lin **`#f9f7f2`**, Cards `#fff radius 16px`, Ink `#3f434a`, Terracotta `#f0643b` | Font **`Garnett` (Colophon)** `H1 56px fw 500 lh 1.1` avec `"Verified knowledge"` entouré d'une **ellipse tracée à la craie beige `#d6cfbe`** + `UniversalSans 16px` | Badges `✔ Verified`, carte Pro à capuchon `#f0643b` (`RECOMMENDED`) et pilule `#3f434a radius 999px`.
- **045 Craft** : Bg `#fff` avec **collages de vrai papier déchiré** (`#f6f3ec, rgb(175,214,240), rgb(112,168,124), rgb(228,168,62)`), Ink carbone chaud `#030302`, Border `rgba(3,3,2,0.08)` | Duo **`UntitledSerifFont`** (`H1 62px/62px (1:1) fw 400 ls -0.02em`, `H2 44px` mêlant romain et *italique*) + `UntitledSansFont` | Header dock flottant `radius 26px blur(4px)`, cartes `radius 24px` à ombre 4 couches (`0 50px 40px rgba(0,0,0,0.01)...`).
- **046 Campsite** : Bg `#0a0a0a`, Secondary `#171717`, Elevated `#1e1e1e`, Action `#313131`, **hairlines Retina `border-[0.5px]` (`rgba(255,255,255,0.08–0.12)`)**, Ink `#f5f5f5`, Orange `#f9572d` | Font `Inter` `H1 49.04px/49.04px (1:1) fw 600`, feed in-app `13–14px fw 500` | CTA sobre `"Open app"` en `#313131` (`pill 9999px h 32px pad 0 10px`), fenêtre macOS 3 colonnes flanquée sur les bords de deux textures de peinture à l'huile.
- **047 Notion Calendar / Cron** : Bg `#fff`, Backplates **`#f6f5f4` (`bdr 2px solid #f6f5f4 radius 12px`)**, Ink `#191918 / #787774`, Pastels d'événements | Font `NotionInter` : **Accroche Hero de 2 mots `"It’s time."` (`64px/64px 1:1 fw 700 ls -0.02em`)**, boutons signature **`radius 8px h 36px pad 4px 14px`** (`bg #191918`) et illustrations line-art pastel.
- **048 Amie** : Bg `#fafafa / #fff`, Ink `#000 / #5c5c5c`, Electric Cyan `#11a8ff`, Green `#01ca45`, Amber `#fe6600` | Font `Inter` `H1 56–60px lh 1.05 fw 700 ls -0.03em` ; sur `/pricing`, **deux phrases `60px fw 700` de même taille en contraste 100% `#000` vs 40% `#9e9e9e`** (*"Which plan is right for you? Use our 7 day free trial."*) | Cartes `radius 16px` et boutons `radius 12px` délimités par une **ombre sub-pixel 3 couches (`0 0 0 1px rgba(0,0,0,0.06), 0 1px 1px -0.5px rgba(0,0,0,0.06), 0 3px 3px -1.5px rgba(0,0,0,0.06)`)**, switch `#01ca45` relié au badge `-20%` par une flèche SVG manuscrite.
- **049 Granola** : Bg `#fff` / crème `#faf8f5` / section logos `#292929` marquée de **croix suisses `+` aux intersections de grille**, Ink `#292929`, **Action Earthy Olive `#5b6f00`** (texte `rgb(252,252,248)`), Chartreuse `rgb(222,240,110)` | Duo **`quadrant` Serif** (`H1 73.56px` avec **leading négatif `68.41px` ratio `0.93`**, `fw 400`) + **`melange` (NaN Mélange)** (`16px` avec boutons en graisse **`font-weight: 430`**, `pill 9999px pad 9px 24px`) | `/pricing` : 3 cartes `radius 8px bdr rgb(213,213,210)` (`$0, $14, $35`).
- **050 Reflect** : Bg violet cosmique **`#030014`** avec poussière d'étoiles et halo radial sous la fenêtre (`rgba(142,68,243,0.35)`), Text `#fff / #f4f0ff / #aaa3c4` | Font **`AeonikPro` (CoType)** `H1 44–64px lh 1.18 fw 500` | Boutons `radius 8px pad 8px 16px blur(8px)` construits par **superposition de pseudo-éléments `::before` (`rgba(60,8,126,0.32)`) et `::after` (`0.42`)**, buste 3D de Socrate et grille cybernétique 3D.
- **051 Coda / Superhuman Docs** : Bg `#fff` alternant avec parchemin ocre **`#fdf4e7`** et lavande **`#f7f5ff`**, Ink `#141413`, Violet `#714cb6`, Orange `#eb5722` | Font **`Calibre-R` (Klim)** & `"Super Sans VF"` `H1 72px/72px (1:1) fw 700` (exposant dans la démo les tokens `H1 60px, H2 50px, H3 40px, H4 24px`) | Boutons et cartes (`radius 8px`) délimités sans `border` par une **ombre interne `box-shadow: rgb(41, 40, 39) 0px 0px 0px 1.5px inset`**.
- **052 Airtable** : Bg `#fff`, Drawers `#f8fafc`, Ink `#333840`, Dark CTA `#181d26`, Blue `#2d7ff9` | Font **`Haas` (Neue Haas Grotesk)** `H1 40–56px lh 1.2 fw 400` + `"Inter Display"` | Le bouton sombre `#181d26` (`radius 12px pad 16px 24px 16px fw 500`) projette une **ombre 4-stops contenant un reflet bleu électrique (`0 0 1px rgba(0,0,0,0.32), 0 0 2px rgba(0,0,0,0.08), 0 1px 3px rgba(45,127,249,0.28), inset 0 0 0 0.5px rgba(0,0,0,0.06)`)** | Widget vocal flottant `"Riley AI Assistant"`.
- **053 Asana** : Bg `#fff`, Ink `#0d0e10`, CTA `#0d0d0d` (`radius 100px pad 12px 32px`), **dégradé symétrique 3-stops sur `"human-agent"` (`#ff453e 0% -> #f481f4 50% -> #ff453e 100%`)** | Font **`"TWK Lausanne"` (Nouvelle Noire)** : **`H1` monumental à `102px`, `line-height: 91.8px` (`0.9`), `font-weight: 300` (Light)** | Graphe vectoriel rose reliant humains et agents (`Penny`) autour du `H1` + agent vidéo temps réel **`"Leslie AI"`** sur `/pricing` (`radius 20px`).
- **054 Monday.com** : Bg `#fff`, Ink `#000`, Electric Indigo `#6161ff` (pilule active `#d9d7ff`), Done Green `#00ca72`, colonnes de statut haute-chroma (`#e2445c, #0073ea, #e86eb2, #fdab3d`) | Font `Poppins` `H1 56px/56px (1:1) fw 400`, CTA `#6161ff radius 160px 13px fw 300` | Pilules d'auto-segmentation métier au-dessus du CTA (`Marketing, Operations, IT, Product`) et avatars 3D pop-art (`Rob, Assets Generator`).
- **055 Basecamp** : Palette **100% OKLCH** : Bg pétrole `oklch(0.1891 0.0191 235.5)`, Cards `oklch(0.2714 0.023 230.3)`, Ink `oklch(0.9197 0.0059 239.83)`, Action Blue `oklch(0.5957 0.2005 256.64)` (`#0082f0`), Green `#2ecc71` | Font **`Graphik` (Commercial Type)** `H1 35.87px/39.45px fw 800`, **`border-radius: 0px` strict sur tous les boutons** (`13px fw 500`) | Lettre longue signée en vecteur blanc par `Jason Fried` + compteur live `178,535 people working right now` et forfait fixe sans prix par siège.
- **056 Height** : Référence héritage : Tableur projet `12–13px` ultra-dense Sans + Monospace, focus ring clavier `2px solid #2563eb` sur chaque cellule et hairlines `1px solid rgba(255,255,255,0.06)`.
- **057 Descript** : Bg Hero **Velvet Bordeaux `#390a1a`**, Subpages blush `#fff7fa`, Ink `#fff8f4`, Coral CTA `#f73b3b` (`radius 12px pad 16px 32px`), Mulberry `#772a4d` | **Système à 3 polices** : **`gamuthDisplay` Serif** (`H1 88px fw 400`) + **`booton` Sans** (UI/boutons) + **`brett` Monospace pixel** (tags `MOST POPULAR`) | Header en îlot blanc flottant `radius 16px`, timeline script+vidéo `"Underlord"` et copy plein d'esprit (*"Enterprise teams use Descript. Is that good enough for you?"*).
- **058 CapCut Web** : Bg `#fff` sous une aurore diffuse 4 couleurs, Ink `#090c14`, **CTA Radioactive Cyan `linear-gradient(0deg, #01e0f8, #02e0f8)`** (`text #0c1016, squircle radius 16px pad 14px 28px 18px fw 500`) | Font `Inter` `H1 64px/70.4px fw 600` + dock de conversion cyan flottant en bas de l'écran.
- **059 Canva** : Aurore continue `#6320ee -> #00c4cc -> #fff`, Ink `#0f1015`, texte sur gradient `rgba(255,255,255,0.898)` | Font **`"Canva Sans"`** `H1 56–64px fw 600` | Bouton blanc `"Start designing"` (`radius 8px h 48px`) sculpté par un **biseau plastique à 5 stops (`inset 0 24px 24px -18px rgba(255,255,255,0.08), inset 0 1px 0.5px rgba(255,255,255,0.25), inset 0 -1px 0.5px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.14), 0 3px 4px rgba(0,0,0,0.07)`)**, Bento Magic Studio `radius 28px` avec curseurs collaboratifs (`Mahadi`).
- **060 Whimsical** : Encre et boutons en **Aubergine `color(display-p3 0.1333 0.0392 0.2)` (`#220a33`)** projetant une **ombre portée teintée prune (`0 12px 16px -4px rgba(37,8,53,0.2)`)** (`radius 12px`) | Duo **`Agrandir` (Pangram Pangram)** `H1 64px fw 700` + `Manrope 16px fw 700` | Toute la scène Hero est enfermée dans un **macro-conteneur photographique de dunes à `border-radius: 40px`** ; `/pricing` Bento `radius 28px` (*"Viewers are always free"*).
- **061 Butter** : Référence héritage : Jaune beurre `#FFD15C / #FFF4D2`, néo-brutalisme à bordures `2px solid #000` et ombres dures décalées `4px 4px 0px #000`.
- **062 Routine** : Bg `#fff`, Ink `#171b1f`, Sunrise Coral `#f96359` (wash `#fbeef6`), Font `Inter` `H1 46px/59.8px (lh 1.3) fw 400`, sous-titre intégrant des glyphes inline (`☑ tasks, 👥 meetings, ⛁ projects, 🗎 notes, 🪄 AI`) | **Chanfrein signature `border-radius: 7px`** sur tous les boutons (`14px fw 500`), compteur `Integrations 192` (`radius 4px 11px`), et `/pricing` scindé en `INDIVIDUALS | TEAMS` à bordures pointillées.
- **063 Cronycle** : Référence héritage : Tableaux de curation par clusters de cartes (date, auteur, temps de lecture, pilules de tags) et mode lecteur épuré.
- **064 Milanote** : Bg Hero **gris-bleu acier `#303b4b`** (carton à dessin d'architecte), Subsections `#fff`, **Tangerine CTA `#f4511c`** (`radius 6px pad 10px 16px 16px fw 700`), Secondary `#46505f` | Titres en **`Tiempos` (Klim Tiempos Headline)** `H1 64px/85.3px (lh 1.33) fw 600` + moodboard libre et lithographie 404 Tolkien.
- **065 Sketch** : Aurore perle `#fdf2f7 -> #fff`, Ink `#212123`, Mac Dark `#151515` | Titres en **`Reckless` (Displaay Serif)** `H1 76px/76px (1:1) fw 500` + `SF Pro Display` | **Bouton Hero Double-Bezel** : coque externe en dégradé `linear-gradient(104deg, #fc7a9b, #b47eee)` (`radius 28px pad 4px`) + bouton interne `#151515` (`radius 24px pad 12px 24px`) à 4 ombres internes (`inset 0 1px 4px rgba(255,255,255,0.5)...`) | Mockup macOS natif (`Smooth Corners: 22`) et `/pricing` multi-devises (`€11 / €22, radius 20px`).

---

# Catégorie 3 : Fintech, Banques & Finance B2B (Sites 066 à 095)

## Architecture & Invariants Factorisés du Secteur (30 Sites)
- **Clarté Fiduciaire & Couleurs Souveraines** : 75% des Fintech B2B privilégient des fonds clairs lumineux (`#fff`, `#f8f9fa`, `#f9f9f8`) ou des verts/bleus souverains profonds (`#003d3d` Pennylane, `#003b39` N26, `#082719` Chime, `#163300` Wise, `#201547` Deel, `#230b59` Wealthfront, `#281350` Pilot, `#4a0039` Rippling) associés à **1 seul accent haute-tension** (`lab(92.14 -20.49 84.77)` `#d8f831` Ramp, `#9fe870` Wise, `#ccff00` Robinhood, `#00e013` Cash App, `#00f872` Pennylane, `#ff3d00` Brex, `#ffa8cd` Klarna, `#0052ff` Coinbase, `#265cff` Watershed).
- **Typographie de Banque Privée vs. Grotesque Suisse** : Usage massif de Serifs de prestige (*Arcadia Display*, *Martina Plantijn*, *SangBleu Versailles*, *Boogy Brut*, *GT Alpina Italic*) en contraste avec des Grotesques suisses/propriétaires (*TWK Lausanne*, *Söhne*, *Messina Sans*, *Basel Grotesk*, *Euclid Circular B*, *Coinbase Display*, *Wise Sans*, *Cash Sans*, *Klarna Title*) en `font-weight: 300–500` à `64px–110px` (leading `0.87` à `1.1`) et chiffres obligatoirement en `tabular-nums` / `monospace` (`IBM Plex Mono`, `Space Mono`).
- **Preuve Matérielle & Transparence Réglementaire** : Photographie macro de **vraies cartes bancaires en métal anodisé/transparent** (Brex, N26, Robinhood, Chime), calculateurs de frais en direct (Wise), compteurs d'opérations temps réel (Ramp), gravures guillochées de billets de banque (Plaid), et sceaux réglementaires (`FDIC`, `FSCS`, `Plateforme Agréée Facturation Électronique`).

## Référentiel Technique Site par Site (`066` à `095`)
- **066 Ramp** : Palette **CIE Lab** : Bg `#fff` à **grille de micro-croix `+ + + +`**, Ink `lab(2.83 0.36 0.96)` (`#070707`), Dark `lab(8.86 0.51 0.18)` (`#161616`), **Acid Lime CTA `lab(92.14 -20.49 84.77)` (`#d8f831`)** (`radius 8px h 48px 16px fw 400`, header `radius 6px`) | Font **`Lausanne` (TWK Lausanne)** `H1 64px/64px (1:1) fw 400` + ticker `11px uppercase monospace` | Compteur live **`"AGENTS AT WORK TODAY: 10,751,349"`** + `/pricing` en 3 paliers IA (`Free AI-assisted, Plus $15 AI-powered [bdr 2px solid #d8f831], Enterprise AI-tailored`, `radius 12px`).
- **067 Mercury** : Hero photo paysage montagneux à l'aube (bureau en bois), Subpages `#fff`, Ink `#ededf3 / #141418`, **Sapphire `#5266eb`** (`radius 32px h 48px fw 420`) + bouton secondaire en verre dépoli `rgba(175,178,206,0.2) blur(20px) bdr rgba(175,178,206,0.36) radius 40px` | Duo propriétaire **`arcadiaDisplay` Serif** (`H1 43.64–56px lh 48px fw 480`) + **`arcadia` Sans** (`fw 420`) | Dashboard dark slate (`$5,216,471.18`) et `/pricing` Bento (`$0, $29.90, $299`).
- **068 Brex** : Bg `#fff`, Cards `#f7f8fa`, Ink `#15191e`, **International Orange `#ff3d00`** (`radius 10px h 40px 14px` dans barre d'input email Hero) | Font `Inter Display` `H1 72px/72px (1:1) fw 600` | Stage 3D photographique de la **carte Brex en métal noir sur socle de musée** marquée de repères oranges `x x x x` à côté du wallet iPhone (`$22,058.42`).
- **069 Wise** : **Canvas Hero 100% Lime `#9fe870`**, **Ink & Button Deep Forest Green `#163300`** (`#102c02` dark card), Calculator `#fff radius 24px` | Font **`"Wise Sans"`** (encoches monétaires) : `H1 91.09px` avec **leading négatif `79.52px` (`0.87`), `fw 800`, `#163300`** | Inversion des pilules `9999px` (`#163300 text #9fe870` sur fond lime vs `#9fe870 text #163300` dans le convertisseur blanc affichant `1,194.69 EUR` en `40px bold`, frais `3.81 GBP` et économie `45.65 GBP`).
- **070 Revolut** : Hero ciel d'azur en plein jour, Subsections `#fff` (`#191c1f`), CTA Charcoal `#1f1f1f` (`pill 9999px pad 10px 24px 16px fw 500`) | Font **`"Aeonik Pro"`** `H1 83.67px/83.67px (1:1) fw 500` | **Cadre iPhone filaire transparent `1px solid rgba(255,255,255,0.4)`** superposé directement sur le portrait photographique avec soldes (`£6,012 / €3,126`) et sceau `fscs PROTECTED`.
- **071 Monzo** : Bg `#fff`, **Hot Coral `#ff4f40`**, Petrol Ink & Pills `#091723` (`radius 500px`), switcher `👤 Personal ▾ | 💼 Business` | Font **`MonzoSansDisplay`** `H1 48.83–60px lh 1.2 fw 800` | Toute la scène Hero (marché aux fruits en plein air + carte Hot Coral) est enfermée dans un **macro-conteneur à `border-radius: 64px`**.
- **072 Square** : Hero cinéma documentaire de commerces de quartier et terminaux Square Register, Subsections `#fff`, **Klein Cobalt Blue `#006aff`** | Duo **`"Square Sans Display VF"`** (`H1 64px fw 400`) + **`"Cash Sans"`** sur les pilules tactiles POS (`radius 10000px 18px fw 500 pad 10px 20px`) et barre d'action collante en bas de l'écran.
- **073 Robinhood** : Bg `#000` à **matrice de points blancs (`. . . .`)**, **Radioactive Chartreuse `#ccff00`** (CTA `radius 36px h 48px pad 0 32px text #110e08 13px`), Bullish `#00c805`, Bearish `#ff5000` | Contraste entre le Serif Renaissance XVIe siècle **`"Martina Plantijn"` (Klim)** à **`110px/110px (1:1) fw 400`** et **`"Capsule Sans Text"`** + graphiques chandeliers obliques.
- **074 Coinbase** : Bg `#fff`, Ink `#0a0b0d`, **Ultramarine `#0052ff`**, Secondary `#eef0f3` | Font **`CoinbaseDisplay` (Monotype)** `H1 64px/64px (1:1) fw 400` + `CoinbaseSans` | Système de pilules unifié à **`border-radius: 56px, height: 48px`**, input email avec **placeholder Easter Egg `satoshi@nakamoto.com`** et fenêtre multi-actifs (`Crypto, Stocks, Derivatives, Predictions`).
- **075 Cash App** : **Canvas Hero Radio-Green `#00e013`**, Ink `#000`, boutons uniquement en `#fff` ou `#000` (`radius 100px pad 12px 17px`, texte minimaliste **`11.9–12px fw 400`**) | Font **`"Cash Sans"`** `H1 47.68px` avec **leading négatif `45.29px` (`0.95`), `fw 400`** | Composition en **triptyque asymétrique 3 colonnes** (Gauche `H1` | Centre iPhone `$reesehills $789.13` | Droite copy + CTA).
- **076 Klarna** : Bg `#fff`, **Klarna Bubblegum Pink `#ffa8cd`** (CTA `pill 99999px pad 15px 20px`), **Deep Violet-Black Ink `#0b051d`** (`rgb(11,5,29)`), Hero photo streetwear dans un **macro-cadre `border-radius: 40px`** | Font **`"Klarna Title"` (Studio Frith & 205TF — grotesque ultra-condensé de magazine de mode)** `H1 64–72px lh 62px (<1.0) fw 700`.
- **077 Plaid** : Hero gradient `#07578c -> #0e94d8` tapissé de **courbes guillochées de billet de banque et d'une gravure en taille-douce de Benjamin Franklin ($100)** en bichromie cyan/magenta | Font **`"Plaid Sans"` + `Cern`** `H1 70px/78.4px fw 500` rempli d'un **dégradé radial directionnel (`radial-gradient(circle at 0% 0%, #86ef5a 0.86%, #10d0b7 38%, #fff 70%)`)** | Header en îlot blanc `9999px` et bouton noir `#000 radius 100px` cerclé d'un **anneau hairline prismatique (Lime $\rightarrow$ Magenta)**.
- **078 Qonto** : Alternance `#fff` et carbone `#050505`, Font **`QontoSans`** : `H1` en **triade de 3×2 mots** (*"Business account. Finance management. Company creation."*, `72px/80px fw 700`), boutons `radius 8px pad 12px 16px`, et `/pricing` (`Self-employed | Business teams` : `Basic €9, Smart €19 [lavis lavande doux], Premium €39`, `radius 16px`).
- **079 Pennylane** : Bg `#fff`, **Primary Ink & Container Duck Teal `#003d3d`**, **Primary Action Neon Mint `#00f872`** (`text #003d3d, radius 6px pad 12px 20px 14px fw 700` WCAG AAA) | Font **`Manrope`** `H1 52px/59.8px fw 600 #003d3d` | Top-bar tri-partition (`Indépendants et TPE | PME et ETI | Cabinet expertise comptable`) et bannière `#003d3d radius 28px` avec insigne officiel `Plateforme Agréée Facturation Électronique`.
- **080 Alan** : Bg bleu poudre `#e8f2fc -> #f0f6fd`, Ink `#282830`, **Periwinkle Blue `#5c59f3`**, nuages 3D pâte à modeler pastel et mascotte marmotte en peluche | Font **`AlanSans`** `H1 64px/70px fw 500` commençant par une **minuscule** (*"le standard de l'Assurance Prévention"*), boutons galets **`border-radius: 20px h 48px pad 0 28px`**.
- **081 Stripe Press** : Bg bibliothèque **Espresso Velvet `#201819`** (`#111827` détail), Text `#fff / #d1d5db`, Serif transitionnel Baskerville/Plantin `18px lh 1.65` | **Pile verticale de livres 3D interactive (`1211×658px` Three.js)** avec normal-maps de toile reliée et dorure Kintsugi, rotation 3D isométrique au clic et **échelle de 22 graduations** sur la marge gauche.
- **082 Carta** : Bg `#fff / #f9f9f8 / #141414`, Ink & Buttons `#1a1a1a` | Alliance entre **`sangBleuVersailles` Serif (Swiss Typefaces)** (`H1 48–64px lh 1.2 fw 400`) et **`"IBM Plex Mono"` uppercase (`14px ls 0.7px`) sur tous les boutons rectangulaires `border-radius: 4px h 44px`** + module co-brandé **`carta / ✻ Claude`**.
- **083 Gusto** : Hero vague goyave-corail, Subsections `#faf8f7` (`#222`), **Primary Button Deep Forest Teal `#0f6469`** (`radius 12px pad 12px 24px`) | Duo **`"Boogy Brut"` Serif (Bureau Brut)** à **`97.14px/102px (lh 1.05) fw 400`** + **`Matter` (Displaay)** `16px fw 500`.
- **084 Deel** : Bg `#fff`, **Carte Hero Imperial Night Violet `#201547` (`radius 12px`)** en split 50/50 avec photo lifestyle surmontée de badges (`PAYROLL COMPLETE: $360,450, +150 Currencies, O-1A Visa APPROVED` `#22c55e`) | Font **`BagossCondensedFont` (Displaay)** `H1 42px/44.1px fw 500` + `BagossStandardVF` | **5 chips de sélection d'intention cliquables (`radius 8px bdr rgba(255,255,255,0.2)`)** dans le Hero + CTA blanc `pill 200px h 48px`.
- **085 Rippling** : **Canvas Hero Amaranth Mulberry `#4a0039`**, Subsections `#fff` (`#111`), **Primary Action Amber Gold `#ffa81d`** (`text #000, border-radius: 4px pad 16px 24px 14.68px fw 500`) | Font **`Basel Grotesk` (Optimo)** `H1 44.18–56px lh 1.1 fw 500` | Tablette tenue en main unifiant RH, Finance et IT (`1,582 MacBooks`).
- **086 Remote** : **Dégradé mathématique `linear-gradient(#500087 0%, #b919ff min(32.7%, 100% - 503px), #aefcff min(75%, 100% - 187px))`**, Ink `#14191e`, mot `remote` géant (`>800px` en cyan glacé `#aefcff`) en texture de fond | Font **`Rotina` + `Geist`** `H1 50.29–64px (1:1) fw 700`, boutons `radius 6px` et accès explicite **`"via MCP, CLI, or API"`**.
- **087 Pilot** : **Canvas Hero Night Violet `#281350`**, Subsections `#f0f8ff`, Action `#4f46e5` | Duo **`"Euclid Circular B"` (Swiss Typefaces)** (`H1 56px/64.4px fw 600` en question rhétorique : *"If you're buried in bookkeeping, who's leading the company?"*) + **`"Space Mono"` (Colophon) uppercase sur tous les boutons pilules (`14.7px ls 0.5px radius 46px pad 14px 20px`)** | Fenêtre hybride `"50% people, 50% software"` (`Bridget, your CFO`).
- **088 Affirm** : Canvas Hero **Midnight Indigo `#13131f`**, Commerce `#fff` (`#0c0c14`) | Font **`"Axiforma for Affirm"`** `H1 80px/88px (lh 1.1)` en **`font-weight: 300` (Light)** | **Rayon capsule universel `border-radius: 96px`** sur le dock header flottant, les barres et les boutons (`14px fw 400`), avec carrousel 3D d'objets de luxe.
- **089 Chime** : **Canvas Hero Deep Pine `#082719`**, **Spearmint CTA `#1ec677`** (`text #0d4029, radius 6px pad 8px 20px`), Font **`chimeDisplayWide`** (grotesque étendu) `H1 80px/80px (1:1) fw 500` | Mockup iPhone (`$200 SpotMe, FICO 720`) et accordéon vertical par contraste d'opacité (`100%` actif vs `20%` inactif).
- **090 Wealthfront** : **Canvas Hero Royal Midnight Indigo `#230b59`**, Ink `#f0f0f2`, Action `#4d41e6` (`radius 6px pad 12px 24px`) | **Fusion bi-typographique dans le `H1`** : **`"4.45% APY"` en `72px Calibre Bold` (Klim)** suivi de ***"Better than a bank"* en `59px GT Alpina Italic` (Grilli Type)** + projection patrimoniale `$1.3M at 65`.
- **091 N26** : Hero photo nature ensoleillée, **Prussian Teal `#003b39`** (CTA et encre), **Warm Sand Wash `rgba(198,178,159,0.25)`** (bouton `Log in`), pilules `radius 24px h 48px`, carte Mastercard transparente à antenne cuivre NFC visible | Font **`N26-Extended`** `H1 56px/64px fw 400`.
- **092 Swan** : Bg `#fff / #f9fafb`, **Monochrome Graphite `#212121`** (texte et boutons `radius 6px pad 18px 24px 16px fw 400`) | Font **`"Inter Tight"`** `H1 48–56px lh 1.1 fw 500` + démonstrateur BaaS en marque blanche **`❖ YourBrand`**.
- **093 Airbase** : Hero marine `#112733`, Subsections `#fff` (`#111827`), Grass Green CTA `#4daa57` (`border-radius: 4px pad 11px 16px 15px fw 600`), co-branding M&A `airbase by paylocity` (`#ff5722 + #f25c05`), `Inter` `H1 48px fw 700`.
- **094 Stripe Sigma** : Bg `#fff` à guides de colonnes verticaux pointillés et tranche oblique irisée, Ink `#0a2540`, **Sigma Amethyst `#9966ff`** | Font **`sohne-var` (Klim)** `H1 60–64px fw 700` et boutons en **graisse variable `font-weight: 425`** à **`border-radius: 16.5px`** et **padding vertical asymétrique (`padding: 3px 12px 6px 16px`)** compensant la hauteur de capitale | Studio SQL live + `Run ⌘ + ↵`.
- **095 Watershed** : Bg `#fff` texturé de **trames demi-teintes (halftone) topographiques cyan**, Ink `#242633`, **Ultramarine `#265cff`**, Forest `#1b5e3a` | Font **`messinaSans` (Luzi Type)** `H1 72px/72px (1:1) fw 500` + `IBM Plex Mono` | **Chanfrein scientifique `border-radius: 2px`** sur tous les boutons (`pad 10px 36px 10px 16px`) et métrique client live (`15k tons CO2 ↘`).

---

# Catégorie 4 : Intelligence Artificielle & Modèles (Sites 096 à 115)

## Architecture & Invariants Factorisés du Secteur (20 Sites)
- **Le Grand Schisme Esthétique de l'IA (Papier Vélin vs. Obsidienne Sobre)** : Tous les vrais laboratoires IA rejettent les dégradés néon violet/bleu clichés au profit de deux pôles radicaux :
  1. *Le Salon Humaniste & Institutionnel (Papier Vélin / Pierre / Poudre)* : `#faf9f5` (Anthropic), `#fafaf9` (Harvey), `#f9f8f7` (ElevenLabs), `#c5e7ff` (Jasper), `#fff` + bois/grès (Cohere), avec encre d'imprimerie chaude (`#141413`, `#0f0e0d`, `#00063d`).
  2. *L'Obsidienne de Laboratoire / Terminal* : `#000` (OpenAI, Midjourney, Replicate, Runway, Scale), `#0a0907` (Cursor), `#101012` (Poe), `#121212` (Mistral), `#15171b` (Perplexity).
- **Retenue Conversationnelle (`26px–28px`) vs. Monumentalité Souveraine (`88px–96px`)** :
  - Les moteurs d'interface directe (OpenAI `28px`, Perplexity `26px fw 350`, Cursor `26px`, Poe `20px`) utilisent un **`H1` modeste** et placent **l'omnibox de prompt réelle directement au centre du Hero** (Zéro-Clic).
  - Les plateformes souveraines/entreprises (Mistral `96px`, Cohere `96px`, Jasper `88px`, Copy.ai `88px`, Harvey `72px`) utilisent des Serifs littéraires (*Anthropic Serif*, *CohereText*, *Feature*, *Harvey Serif*) ou des Grotesques suisses (*Waldenburg 300*, *ABC Normal*, *Aeonik*, *Unica77*, *Suisse Int'l*).

## Référentiel Technique Site par Site (`096` à `115`)
- **096 OpenAI** : Bg `#000` (vidéo orbite terrestre), Cards `#121212`, Border `rgba(255,255,255,0.15)`, Text `#fff / rgba(255,255,255,0.6)` | Font **`"OpenAI Sans"`** : **`H1` conversationnel retenu à `28px/34px fw 600`** (*"What can I help with?"*), input dynamique `32–48px fw 400`, CTA `"Try ChatGPT ↗"` (`bg #fff text #000 radius 40px h 40px pad 0 20px 14px fw 500`), pilules de catégories (`bdr rgba(255,255,255,0.2) radius 9999px h 32px`) et vraie boîte d'input jouable au centre du Hero.
- **097 Anthropic** : **Canvas Papier Vélin `#faf9f5`**, Cards `#f5f4ee`, **Printer's Ink `#141413`**, **Terracotta Claude `#cc785c`**, accents collage (`#6b7a52, #e05638, #82b4d2, #1f487e`) | **Bascule bi-typographique au milieu du même paragraphe `H1` (`37.34px/48.54px`)** : Phrase 1 en **`anthropicSans` Bold `600`** suivie dans le même bloc par la Phrase 2 en **`anthropicSerif` Regular `400`** | Mot-symbole **`ANTHROP\C`** (antislash `\`), pilules de nav `bdr rgba(20,20,19,0.15) radius 9999px`, CTA `bg rgba(20,20,19,0.06) radius 12px pad 12px 24px 14px fw 500`, et mosaïque de gravures biologiques/gaussiennes.
- **098 Perplexity** : Bg `color(srgb 0.082 0.090 0.106)` (`#15171b`), Omnibox `#100e12` (`radius 16px bdr rgba(219,222,227,0.14)`), Ink `#dbdee3`, **Intelligence Teal `#20808d`** | Font **`pplxSans`** : **`H1 26px/39px` en graisse ultra-légère `font-weight: 350`** (*"What do you want to know?"*) | Omnibox avec placeholder **`"Type @ for connectors"`**, toggle agent autonome **`Computer`**, sélecteur `Model ▾`, 2 cartes Bento (`Search anything` + `Computer NEW`) et rail gauche rétractable.
- **099 Midjourney** : Void `#000` avec **grille CRT courbée `oklch(0.25 0.08 240)`** déformée par gravité WebGL au curseur ; **Logo en pur ASCII art `|M|i|d|j|o|u|r|n|e|y|`** ; manifeste en **`"JetBrains Mono"`** `16px lh 1.8 #dbdee3` + `"DM Sans"` | **Pod de 4 pilules translucides OKLab (`radius 9999px pad 8px 20px`)** : `Sign up` `oklab(0.378 -0.075 0.014 / 0.2)` text `oklch(0.979 0.021 166)` (Green), `Log in` `oklab(0.421 0.050 0.080 / 0.2)` text `oklch(0.987 0.026 102)` (Amber), `Documentation` `oklab(0.408 0.096 0.076 / 0.2)` (Coral), `Explore` `oklab(0.410 0.156 0.028 / 0.2)` text `oklch(0.969 0.015 12)` (Magenta).
- **100 Cursor** : Bg carbone chaud **`#0a0907`**, Cards `#26241e`, Border `1px solid oklab(0.9438 0.001 0.0003 / 0.025)`, Ink `#edecec`, Diffs (`+3` `#22c55e`, `-1` `#ef4444`, `∞ Agent`) | Font **`CursorGothic`** : **`H1` sobre à `26px/32.5px (lh 1.25) fw 400`** | CTA avec détection automatique de l'OS (`"Download for Linux ⤓"`, `bg #edecec text #14120b pill 9999px pad 12.5px 21.6px 12.8px 16px`) et fenêtre IDE montrant simultanément `READY FOR REVIEW 5`, `"Thought 6s..."`, les diffs multi-fichiers et le rendu live `http://localhost:3000`.
- **101 Mistral AI** : Bg `#121212`, Ink `#fafaf4`, **blocs en escalier pixelisés (`#ffb300 -> #ff6600 -> #ff3d00 + #265cff`)** et **illustrations 8-bit pixel art** (chat, grues, cheminées, châteaux) | Font **`ALTMistral`** `H1 96px fw 500` (*"Mistral ⚑ is #1 in Sovereign AI."*), tag au nom autodérisoire **`"Le Chonk: Built for Coders"`** (`radius 8px`) et graphe vectoriel de souveraineté (`radius 4px`).
- **102 Hugging Face** : Bg **`#0b0f19`**, Glass cards `oklab(0.21 -0.003 -0.034 / 0.6) radius 25px`, couleurs par framework (PyTorch `#ee4c2c`, TF `#ff6f00`, JAX `#7238b2`, Transformers `#f59e0b`) | Font **`"Source Sans Pro"`** `H1 48px/48px (1:1) fw 700` + `"JetBrains Mono"` | CTA `bdr oklch(0.446 0.03 256.802) pill 9999px h 44px` et console Hero exposant un **slider de taille de modèle (`< 1B` à `> 500B`)** + runtimes (`vLLM, llama.cpp, Ollama, MLX`).
- **103 Replicate** : Bg `#000` sous une **trame sérigraphique Pop-Art de points demi-teintes (halftone)** en dégradé (`#d926a9 -> orange -> jaune`), Terminal `#121212` | Font **`basier-square` (atipo)** `H1 72–80px lh 1.0 fw 700` | **Boutons à angles droits `border-radius: 0px`** (`"⚡ Get started for free"` `bg #fff text #000 pad 12px 16px 18px`), recherche `Ctrl+K`, et sandbox d'invocation API en 1 ligne (`Node | Python | HTTP`).
- **104 ElevenLabs** : Bg `#fff / #f9f8f7`, Ink & Pills `#000` (`radius 9999px h 36px pad 0 14px 14px fw 500`) | Titres en **`Waldenburg` (Optimo)** `H1 48–56px lh 52px` en **`font-weight: 300` (Light)** | Dock segmenté en 3 silos accompagné de sculptures acoustiques 3D mates minérales (`🟠 ElevenCreative` or sablé, `🌐 ElevenAgents` émeraude, `⚪ ElevenAPI` platine).
- **105 Runway** : Hero `#000`, Subsections `#fff` (`#0c0c0c`), Hero CTA `#f7f7f7` (`text #0c0c0c radius 8px pad 8px 12px 16px fw 600`), Header `#262626 radius 6px` | Font **`abcNormal` (ABC Dinamo)** `H1 51.92px/57.12px (lh 1.1) fw 400` | Écran vidéo `radius 20px` (étincelles physiques de soudure en 4K ralenti) et triade `Creative | Dev | Robotics`.
- **106 Scale AI** : Hero photo drone d'une tour radar télécom sur forêt sombre, Stage `#000`, **Military Spruce Green `#143626`** (`radius 6px`) | Font **`aeonik` (CoType)** `H1 64px/67.2px (lh 1.05) fw 400` avec copywriting factuel (*"Most AI deployments in enterprise and government fail"*) et plans holographiques de **nuages de points LIDAR 3D** (plateformes offshore, ports militaires).
- **107 Cohere** : Bg `#fff`, Ink `#212121`, CTA `#17171c` (`pill 9999px h 40px pad 0 16px`), monogramme (`#345e45 + #eb5e55`), **textures photographiques de bois de cèdre, grès et toile tissée** encadrant les cartes | Duo **`CohereText` Serif (Pentagram & Colophon)** (`H1` `"Your AI.\nYour rules."` à **`96px/96px (1:1) fw 400`**) + **`"Unica77 Cohere Web"` (Lineto LL Unica77)**.
- **108 Stability AI** : Hero photo éditoriale mode dans une serre nocturne, **Electric Lavender `#a381ff`** (`text #1e1e1e`), Font **`Figtree`** `H1 64–72px lh 1.05 fw 700` | Double pilule `radius 300px pad 11px 22px` (`Learn more` plein `#a381ff` + `Start creating` outline `2px solid #a381ff`) et circuits vectoriels pointillés reliant la vidéo aux nœuds audio (`Soundscape, Isolate SFX`).
- **109 Poe** : Bg **`#101012`** (+6% au-dessus de `#000`), Text `#fcfcfc`, `H1` manifeste compact à **`20px/26px fw 700`**, surmonté d'un **ticker horizontal infini à double rangée** de centaines de modèles live (`Grok-4.7, Claude-Opus-5.5, GPT-6-Astra, Gemini-4-Argon, Kimi-K3.1-Pro`) et pilules SSO blanches (`w 320px h 44px radius 9999px`).
- **110 Phind** : Référence héritage : Terminal développeur `#0f1115` sans marketing, blocs de code inline (`TS, Rust, Python, Go`) et cadrage de contexte GitHub/Docs.
- **111 Character.ai** : Bg `#131315`, Ink `#f4f4f5`, mot-symbole entre parenthèses **`(character.ai)`**, grand cadre vidéo anime en boucle à **`border-radius: 32px`** sur lequel flotte à gauche une **feuille d'authentification en verre dépoli (`rgba(28,28,32,0.85) blur`, `H1 32–36px "Get access to 10M+ Characters"`, boutons SSO `radius 12px h 48px`)**.
- **112 Jasper** : **Canvas Hero Bleu Poudre `#c5e7ff`**, Subsections `#fff`, **Deep Naval Ink & Buttons `#00063d`** (`rgb(0,6,61)`), Vermillon `#ff402b` | Titres en **`Feature` (Commercial Type — Serif éditorial Madison Avenue à gouttes)** `H1 88px/96.8px (lh 1.1) fw 400 #00063d` + bouton `"Get a Demo"` à **angles droits `border-radius: 0px`** (`pad 12px 24px 16px fw 600`).
- **113 Copy.ai** : Bg `#fff` à grille de points et tracés de circuits imprimés violets `#280071`, Ink `#171717`, Action Indigo `#6933e6` (`radius 6px pad 10px 20px`), tags `radius 4px` (`SALES, OPERATIONS, MARKETING`) | Font **`"ABC Normal"` (ABC Dinamo)** `H1 88px/88px (1:1) fw 600` (*"The First AI-Native GTM Platform — not dozens of copilots"*).
- **114 Typeface** : Bg `#fff`, Banners `#111013`, Ink `#171717`, **Brand Crimson `#fd243e`** (réservé aux déclencheurs et verbes clés) | Font **`Suisseintl` (Suisse Int'l)** `H1 38px/46px fw 500` | Contraste entre **boutons arrondis `border-radius: 6px`** (`bg #fd243e pad 8px 30px`) et **inputs de formulaire à angles vifs `border-radius: 0px`** (`h 40px bdr 1px solid rgba(17,16,19,0.2)` en grille 2 colonnes).
- **115 Harvey** : Bg `#fff / #fafaf9`, **Legal Printer's Ink `#0f0e0d`** (`rgb(15,14,13)`), textures de grès autour du cockpit sombre (`49.5% Product usage`) | Duo **`HarveySerifFont` (Serif néoclassique de Cour Suprême)** `H1 72px/75.6px (lh 1.05) fw 400 #0f0e0d` + **`HarveySansFont`** sur boutons sobres à **chanfrein `border-radius: 4px`** (`h 36px pad 0 12px 14px fw 500`).

---

# Catégorie 5 : Hardware, Électronique, Tech & Luxe D2C (Sites 116 à 140)

## Architecture & Invariants Factorisés du Secteur (25 Sites)
- **La Loi de la Courbure Matérielle (`0px` Brutaliste vs. `980px` Capsule)** : Le `border-radius` reflète l'usinage physique de l'objet :
  - *Angles Droits `0px` (12/25 sites)* : Tôle emboutie, aluminium anodisé, boîtiers de synthétiseurs, film Polaroid ou couture radicale (Teenage Engineering, Rimowa, Aesop, Polaroid, Arc'teryx, Polestar, Keychron, Vitra, Balenciaga, Acne Studios, Glossier, Gymshark).
  - *Chanfrein Automobile / Industriel `4px–5px`* : Nothing, Tesla, Dyson, Herman Miller (`5px` avec bordure `4px`).
  - *Capsules Usinées (`24px–980px`)* : Apple (`980px` canonique), Sonos (`80px` avec bordure `2px solid #000`), Bang & Olufsen (`40px` avec bordure `2px`), Leica (`24px` avec point rouge `🔴` intégré), Framework/Analogue/Allbirds (`9999px`), On Running (`40px`), Breville (`48px`).
- **Photographie Macro de Spécimen & Compteurs Typographiques** : Éclairage studio révélant le grain de l'aluminium microbillé (Apple, Rimowa, B&O), les pistes PCB sous polycarbonate transparent (Nothing) ou les molettes moletées (Leica) ; compteurs de panier entre crochets en monospace (`[ 0 ]` Analogue, `[ 00 ]` Acne Studios, `[0]` Polaroid/Arc'teryx, `BAG (0)` Glossier).

## Référentiel Technique Site par Site (`116` à `140`)
- **116 Apple** : Hero `#000` (reflets spéculaires sur aluminium Space Black), Subsections `#fff` (`#1d1d1f`), **Action Blue `#0071e3`**, **Outline Highlight `#2997ff`**, tagline lettre par lettre (`PRO #f5a623, LED #fff, XDR #00d4ff`) | Font **`"SF Pro Display"`** `H1 56–64px fw 600` et **échelle de bouton native iOS/macOS à `17px fw 400`** | **Constante signature `border-radius: 980px`** (`pad 11px 21px`) en duo (`Learn more` plein `#0071e3` + `Buy` outline `1px solid #2997ff`) et top-bar fixe `h 44px blur(20px)`.
- **117 Nothing** : Void `#000` et Light `rgb(245,245,245)` tous deux **gravés d'une grille de points et croix de coordonnées (`. . . .`)**, Ink `#040404`, Accents matériel (`rgb(255,59,48)` Red dot, `rgb(255,204,0)` yellow, `rgb(255,87,34)` CMF orange) | **Dialectique typographique** : **`NType82-Regular` (Serif 1980s)** `H1 48px/48px (1:1) fw 400` + **`NDot57` (`7×5` pixel dot-matrix monospace `16px uppercase`)** + `Geist Variable` | CTA `"DISCOVER >"` (`bg #fff text #040404 radius 4px pad 12px 16px 14px uppercase ls 0.05em`), header en cartouche aluminium brossé (`= | NOTHING (R) | 👜`) et photo macro dévoilant circuits cuivre et LEDs Glyph.
- **118 Teenage Engineering** : Bg `#fff`, Stages `#f5f5f5`, Ink `#000`, Safety Orange `#ff5000`, LED `#ff0033` | Font **`te-20`** (néo-grotesque Braun) : **Loi d'égalité typographique universelle à `16px/24px fw 300 (Light)`** sur tout le catalogue + kanjis japonais verticaux | **`border-radius: 0px` absolu**, zéro ombre, ajout au panier réduit à un simple signe **`+`**, header en **6 cellules carrées à glyphes vectoriels sur-mesure** (hélice 4 pales, cabas plat, loupe-radar, mascotte `to`) et compteur `143 products`.
- **119 Tesla** : Hero photo route du désert en plein jour, Light ink `#171a20`, **Action Cobalt `#3e6ae1`** | Font **`"Universal Sans Display"` (Family Type)** `H1 56px/56px (1:1) fw 500` | Duo de boutons rectangulaires **`border-radius: 4px, width: 260px, height: 40px, 14px fw 500`** (`Order Now` `#3e6ae1` + `Learn More` `#fff text rgb(57,60,65)`) et console fixe en bas de l'écran : **`💬 Ask a Question` (`"What's Pet Mode?"`) + `🛞 Schedule a Drive Today`**.
- **120 Sonos** : Hero vidéo déjeuner familial ensoleillé, Subsections `#fff` | Font **`aktiv-grotesk` (Dalton Maag)** : `H1` `"Love the sound.\nFeel the system."` à **`96px/115.2px (lh 1.2) fw 500`** | Bouton Hero `"Shop new arrivals"` : **pilule blanche `#fff` (`radius 80px h 54px pad 16px 48px 18px fw 500`) cerclée d'une bordure noire franche `border: 2px solid #000`**.
- **121 Bang & Olufsen** : Hero salon bois/marbre ambré (enceinte Beosound 2), **texte Hero en Champagne Silk `#fcfbee` (`rgb(252,250,238)`)**, Subsections `#fff` (`#000`) | Font **`BeoSupreme`** : **`H1` calme et discret à `24–36px/36px fw 400`** (*"Form. Function. Feeling."*) | Pilules `radius 40px h 44px pad 8px 32px` encadrées d'un contour **`2px solid #fff`** (ou `#000` sur fond clair) et tiroir latéral gauche `w 320px` (`Est. 1925`).
- **122 Rimowa** : Bg `#fff` et **cyclorama aluminium brossé `#f4f4f2`**, Ink `#111 / #767676`, Borders `1px solid #e5e5e5` (rainures parallèles), swatches anodisés `135deg (#e2e4e6 -> #c8ccd0 -> #eef0f2)` | Font **`"Rimowa Grotesk", "Favorit"`** `H1 44–56px lh 1.08 fw 400–500` + télémétrie aéronautique (`35 L / 4.3 KG` en `11–12px uppercase ls 0.12em tabular-nums`) | **Boutons à angles droits `border-radius: 0px`** (`bg #111 text #fff h 48px pad 0 32px 12px uppercase ls 0.1em`) et comparaison d'échelle orthographique 3/4 au survol (`Cabin vs Trunk`).
- **123 Aesop** : Hero chambre noire `#252525`, **Canvas principal Papier Parchemin Écru `#fffef9`** (`rgb(255,254,249)` — zéro `#fff` froid), Ink `#333`, Borders `1px solid rgba(51,51,51,0.2)`, **`border-radius: 0px` absolu** | Titres en **`Zapf-Humanist` (Zapf Humanist 601 / Optima de Hermann Zapf)** `H2 31px/41.23px fw 400 #333` + corps/boutons en **`SuisseIntl`** (`14px pad 16px 32px bdr 1px solid #fff`) | Mot-symbole **`Aēsop.`** (macron + point) et signet `🔖` sur flacons ambrés.
- **124 Dyson** : Hero **olive volcanique `#3b3f2f`** (finitions Prune & Cuivre), Subsections `#fff` (`#333`), **CTA Prototype Acid Green `#79b928`** (`text #000 radius 4px h ~66px pad 20px 24px 18px fw 500`) | Font **`DysonFutura`** `H2 32px/40px` en **`font-weight: 300` (Light)**, vues éclatées de cyclones transparents et widget turbine en bas à droite.
- **125 Leica Camera** : Bg `#fff` encadrant un macro noir absolu du boîtier Leica Q3 43, Ink `#222222`, **Leica Red `#e2001a`** | Font **`Outfit`** `H1 68px/81.6px (lh 1.2) fw 400 (Regular) #222` | Le CTA pilule blanche `"See the camera"` (`bg #fff text #222 radius 24px h 48px pad 10px 64px gap 40px 20px fw 600`) **intègre physiquement le point rouge optique Leica `🔴` sur le côté droit de la pilule**.
- **126 Polaroid** : Hero sombre émulsion, Subsections `#fff`, Ink `#151515`, **Spectre historique 5 couleurs 1972 (`#ee3124, #f47216, #ffce00, #438927, #009ee0`)** | Titres en **`REAL_HEADER_OFFC_DEMIBOLD`** `H1 40px/40px (1:1) fw 600` et **tous les boutons en `COMMIT_MONO` monospace (`12px fw 400 ls 0.5px`)** | **`border-radius: 0px` strict** (`h 40.3px pad 13px 15px`), panier `[0]` et cadres produits au ratio Polaroid `1:1` à menton blanc large.
- **127 Arc'teryx** : Hero indigo alpin `#101828`, Subsections `#fff` (`#000`), **`border-radius: 0px` strict** | Duo **`elan-itc-pro` (ITC Elan d'Albert-Jan Pool — empattements ciselés dans la pierre)** `H1 32px/32px (1:1) fw 400 uppercase` + **`helvetica-now-display`** `16px` | Boutons dalles `0px` (`transparent bdr 1px solid rgba(255,255,255,0.7) h 44px pad 4px 24px`), top-bar circularité (`OUTLET | RESALE | TRADE-IN`), label **`Veilance`** et panier `[0]`.
- **128 Polestar** : Hero `#000` fendu d'un faisceau blanc diagonal, Subsections `#fff` à grille `1px solid rgba(0,0,0,0.1)`, **unique couleur : Or Suédois** (étriers Brembo/ceintures), **`border-radius: 0px` strict** | Font **`Polestar Unica` (Lineto LL Unica77)** `H1 32–48px lh 1.15 fw 400` | Boutons `0px h 48px` délimités par **`box-shadow: rgb(255,255,255) 0px 0px 0px 1px inset`** et grille 2×2 de véhicules en pure élévation latérale orthographique sur fond blanc.
- **129 Framework** : Hero `#080808`, Subsections `#fff` avec cartes lilas pastel `rgb(180,160,225) radius 16px`, **Circuit Orange `#ff7447`** | Font **`Graphik` (Commercial Type)** `H1 60px/75px fw 600` bicolore (`#fff` + `#ff7447`) | Pilules conviviaux **`border-radius: 9999px h 42px`** (`Configure now` `#ff7447 text #000`), cartes d'extension modulaires et support Linux mis en avant.
- **130 Analogue** : **Canvas Studio Bone Gray `#ececec`**, Ink `#000 / #666` | Font **`circularXx` (Lineto Circular XX)** `H1 45–60px lh 50px fw 500` avec **tracking ultra-serré `-2.25px`**, pilule `#000 text #fff radius 9999px h 35px pad 10px 40px 15px` | **Navigation structurée en 3 colonnes verticales de paires** (`Store/Products | Editions/Developer | Support/Announcements`) et compteur de panier entre crochets **`[ 0 ]`**.
- **131 Keychron** : Catalog `#fff`, Hero `#121212`, Ink `#2a2b2a`, Keycap Red `rgb(220,60,50)`, **`border-radius: 0px`** sur les tuiles et le bouton outline (`pad 12px 26px`) | Font **`"DM Sans"`** `H2 38.5px/50px fw 700`, matrice 4 colonnes (*Custom CNC | Magnetic Hall Effect 0.1mm | Low Profile | Switches*) et configurateur de firmware WebHID **`Launcher`** dans la navbar.
- **132 Herman Miller** : Bg `#fff`, Top ribbon `#f9f5f2`, Ink `#252525`, Studio Red `#e1462c` | Font **`Meta` (FF Meta d'Erik Spiekermann)** `H1 60px fw 700 #252525` | Bouton `"Learn more"` combinant **`border-radius: 5px` et une bordure épaisse `4px solid #252525`** (`h 48px pad 0 32px 16px fw 700`), bascule `Shop for home | Workplace` et onglet de recherche clinique **`Knowledge`**.
- **133 Vitra** : Bg `#fff`, Ink `#000`, Font **`vitraFuturaV2`** `H1 50px/50px (1:1) fw 400` | Le CTA `"More details"` est un **lien texte pris en sandwich entre deux filets horizontaux `1px solid`** (`h 30px lh 30px 16px`), et le header (`vitra.`) intègre le musée **`Vitra Campus`** au cœur de la navigation.
- **134 Balenciaga** : **Monochrome binaire strict `#fff / #000`** (zéro couleur, zéro avis étoilé, zéro prix barré, natures mortes dans la neige), tuiles `0px` | Font **`BB-CondBold`** (`22px uppercase ls 1.1px` Hero ; `13–14px uppercase` sous tuiles) + `BB-Regular` (`12px ls 0.36px` sur bouton `"SHOP NOW"` `bg #fff text #000 radius 4px h 38px`) et barre pleine largeur **`⌕ WHAT ARE YOU LOOKING FOR?`**.
- **135 Acne Studios** : Bg `#fff / #f3f0eb`, Ink `#000`, Acne Pink `#f7dbdb`, liens bleu électrique `rgb(0,24,168)`, **`border-radius: 0px` partout**, Font `"Helvetica Now Text" 11–12px uppercase` | **Le mot-symbole `"Acne Studios"` (`140px–160px` pleine largeur) reste épinglé en sticky** au-dessus de la grille 50/50 sans gouttière ; panier à deux chiffres **`[ 00 ]`**.
- **136 Allbirds** : **Canvas Avoine / Laine écrue `#f3f1ed`**, Cards `#fff`, Ink `#212121`, teintes terre (`#526c7e, #45413e, #876764, #728174`) | Font **`Geograph` (Klim)** `H1 24–32px fw 400 ls 0.6px`, pilules `9999px h 32px 12px uppercase`, header pilule flottante `radius 12px` et **annotations à la craie blanche dessinées à la main** sur les photos `radius 20px`.
- **137 Glossier** : Bg `#fff`, Ink `#000`, **Glossier Pink `#f7dbdb`**, Cobalt Flag `#0000ff` (`NEW`), **`border-radius: 0px`** | Font **`Apercu` (Colophon)** `H2 20px/28px fw 400`, lien **`GIFT GUIDE` tracé au marqueur manuscrit** dans la navbar (`BAG (0)`), et boutons `"Shop now"` (`bg #e8e8e8 radius 0px pad 8px 16px`) entourés d'un **contour pointillé animé (`marching-ants`)**.
- **138 On Running** : Bg `#fff`, Hero noyer sombre, Ink `#000`, Font propriétaire **`On`** (`H1 30–48px fw 700 ls -0.3px`, pile verticale `"Running / Marathon / Trail running / Lifestyle"` en `36–44px fw 700 lh 1.1`), pilules blanches `radius 40px h 48px`, et **déclencheur d'assistant à 4 branches coiffé de l'exposant `AI`** dans le header.
- **139 Gymshark** : Hero salle de fonte `#0d1012` (`rgb(13,16,18)`), Catalog `#fff`, **`border-radius: 0px` strict** sur tous les boutons (`pad 16px 24px h ~52px`) | Duo **`"Plaak Gymshark"` (grotesque ultra-condensé de Damien Gautier)** (`"VENGEANCE"`, `20–48px fw 500`) + **`"SN Skandia"`** `14px` (*"Heavy cotton. Physique-maximising fits. Imposing presence."*).
- **140 Breville** : Hero expresso sombre et acier brossé 304, Catalog `#fff`, Ink `#313638`, **Royal Plum `#2c0e37`** | Titres en **`"Archer SSm"` (Slab Serif à gouttes de Hoefler & Co.)** `H1 56px/80px (lh 1.4) fw 400`, pilule `#f5f5f5 radius 48px h 48px`, pédagogie *"4 Keys Formula"* et **3 cartes de quiz interactifs (`radius 8px`)** dès l'accueil.

---

# Catégorie 6 : Agences Créatives, Studios & Design Portfolios (Sites 141 à 160)

## Architecture & Invariants Factorisés du Secteur (20 Sites)
- **Échelles Typographiques Extrêmes & Duos Serif/Grotesque** : Les studios de premier rang jouent soit la **monumentalité architecturale** (`284.8px` Huge, `120px` Dogstudio, `100px+` AKQA/Instrument, `88px fw 240` MetaLab, `72px` Collins), soit la **retenue éditoriale radicale** (`18px` Fantasy, `22px` Balenciaga/B-Reel, `28px` BASIC/DEPT), en mariant des Serifs ciselés (*Portrait*, *Jannon*, *PP Eiko 240*, *Garamond Pro*, *Season Serif*, *LocomotiveNew*, *Morian*, *GT Sectra*, *Saol Display*) à des Grotesques suisses (*Scto Grotesk A*, *Optimo Plain*, *Basis Grotesque 350*, *Instrument Sans*, *Fort*, *Matter*, *Neue Montreal*).
- **Subversion de la Navigation Classique & Physique WebGL (Lenis / Hydra)** : Remplacement de la navbar collée en haut par : (1) la séparation par virgules littéraires (`Work, Info, News, Aeon` Studio Freight / Locomotive), (2) l'ancrage aux 4 coins de l'écran (Studio Freight), (3) le dock de prompt IA en bas de l'écran (`Show me recent AI projects...` AKQA), (4) le filtre en phrase naturelle *"Mad-Libs"* (`We design [Discipline ∨] for [Sector ∨]` Pentagram) épinglé en bas au scroll, ou (5) la barre démarrant en bas avant de s'épingler en haut (Stink Studios). Usage de moteurs maison (Lenis, Locomotive Scroll, Hydra) avec aberration chromatique RVB, caustiques GLSL et synthèse Web Audio.

## Référentiel Technique Site par Site (`141` à `160`)
- **141 BASIC/DEPT®** : **Canvas Pierre mouchetée `#f4f4f4`** (bruit organique), **Mineral Umber Ink `#252422`** (`rgb(37,36,34)`), filets `1px solid #252422` pleine largeur | Font **`SctoGroteskA` (Schick Toikka)** `H2 28–36px lh 1.35 fw 400 #252422` | Pilule ultra-compacte `"SEE THE WORK"` (`transparent bdr 1px solid #252422 radius 16px h 32px pad 2px 30px 0px 12px fw 700 uppercase`), disque suiveur de curseur **`WATCH REEL`** (`140×140px #fff`, `BASIC/DEPT® 2010–∞`), et initiales géantes **`B/D®` (`>200px`)** débordant en bas à droite.
- **142 Pentagram** : Gallery `#fff` et essais partenaires `#1a1a1a` (`#ccc`), mot-symbole en Didone/Bodoni (`Pentagram 19px fw 500`) et toute l'UI/essais en **`Plain` (François Rappo / Optimo)** `16–18px lh 1.5` | **Filtre conversationnel "Mad-Libs" (`We design [ Discipline ∨ ] for [ Sector ∨ ]`, `rgba(255,255,255,0.85) blur(12px) radius 4px h 44px`) qui s'ancre au bas du viewport** pendant le scroll, précédé d'essais réflexifs des 24 associés.
- **143 Collins** : **Canvas Albâtre d'archive `#faf9f6`**, **Deep Espresso Roast Ink `#140700`** (`rgb(20,7,0)`), filets `rgba(20,7,0,0.12)`, cartes `radius 24px` | Duo **`"COLLINS Portrait Text Web"` (Berton Hasebe / Commercial Type — Serif Renaissance à empattements triangulaires)** (`H1` `"Rewrite your worth."` à **`72px/72px (1:1) fw 400 ls -1.44px #140700`**) + **`"COLLINS Graphik Web"`** (`28–32px`), CTA `#140700 radius 96px h 45px`, lignes de programmes aphoristiques (*"Don't Become the Best. Become the Only."*) et 8 couronnes de laurier.
- **144 Active Theory** : Void `#051014` animé par le moteur WebGL propriétaire **Hydra**, verre holographique `rgba(10,25,30,0.65)` avec dispersion prismatique RVB (`#00e5ff / #e040fb`), monospace uppercase projeté sur plans 3D le long d'une spline | **Pilule audio en haut à droite (`WORK ──── CONTACT`, `9999px`) dont le trait central oscille avec le synthétiseur Web Audio**, et barre de prompt **`ASK ME ANYTHING...`**.
- **145 Studio Freight** : Gallery `#fff`, Ink `#000`, blason gravé cheval de Troie `F`, **`border-radius: 0px` absolu**, créateurs de **Lenis** (`@studio-freight/lenis`) | Duo **`jjannon-regular` (Jean Jannon XVIIe siècle par François Rappo / Commercial Type)** `H1 40px fw 400` + **`publico-text-mono-roman` (Commercial Type)** `14px` | Zéro boîte de bouton : liens **séparés par de vraies virgules (`• Home | Work, Info, News, Aeon | Contact`)** et répartis aux **4 coins de la fenêtre**.
- **146 Koto** : Hero `#000` à shader optique fluide (cuivre $\rightarrow$ bleu cryogénique), **Koto Canary Yellow `#ffeb00`**, Font sur-mesure **`gtKotoheim` (Grilli Type)** `H1 48–64px lh 1.1 fw 400` | Déclencheurs en majuscules entre crochets **`[ VIEW ALL PROJECTS ]`**, horloge `UTC+0` (`LA, NYC, LDN, BER, SYD`) et **endpoint sémantique pour agents IA dans le footer (`koto.unusual.page/?your-question-here`)**.
- **147 MetaLab** : Space void **`#07060f`** éclairé par une étoile 3D WebGL en chrome liquide | **Contraste typographique extrême** : `H1` `"We make\ninterfaces"` en **`"PP Eiko"` (Pangram Pangram) à `88px/1.0` avec graisse variable ultra-fine `font-weight: 240`** + UI en **`"Basis Grotesque Pro"` (Colophon) à graisse `font-weight: 350`** (`16px ls -0.16px`) | Rail vertical gauche de pilules dépolies (`rgba(186,186,186,0.2) blur(16px) radius 50px h 32px` : `Robinhood, Midjourney, Uber, Suno...`) qui **re-sculpte et recolore la scène 3D en temps réel** au clic.
- **148 Work & Co** : Bg `#fff`, Ink `#000`, **Vermilion Red `#db2223`**, **`border-radius: 0px`** | Tension entre **`HelveticaNowDisplay` (`56px/56px 1:1 fw 500 ls -1.12px #000`)** et **`adobe-garamond-pro` (`20px/30px fw 400 ls -0.2px`)** | **Barre rouge permanente de `3px` tout en haut du viewport**, badge carré rouge `WORK & CO`, et CTAs traités comme de purs liens soulignés en Garamond rouge `#db2223` (`Learn more.`).
- **149 Instrument** : Bg `#fff / #fbfaf8`, Ink `#070708`, pilules `#ebebeb radius 9999px pad 8px 18px 14px uppercase`, cadres médias `radius 32px` et cartes `24px`, créateurs de la police **`Instrument-Sans`** | Top-bar symétrique en 3 îlots (`WORK, SERVICES, ABOUT` | annonce centrale | `CAREERS, LATEST, CONTACT`) surmontant le **mot-symbole `INSTRUMENT` étiré sur 100% de la largeur de l'écran** qui se réduit au scroll.
- **150 Fantasy** : Void `#000` tracé de **cercles de compas vectoriels et mires CAD millimétrées**, Surfaces `#222` (`Menu radius 8px h 44px`, containers `radius 20px`), prisme 3D Play au centre, logo `FΛNTΛSY` à lambda inversé et accroche sobre **`"Lead by Design"` en `18px fw 400`** en bas à gauche (`H2 40–48px fw 500`).
- **151 Stink Studios** : Bg `#000`, Ink `#fff`, `0px` sur cadres | Le **mot-symbole géant `STINK STUDIOS` sert de masque pochoir** à travers lequel tournent les films | Navigation en **`Helvetica 23px font-weight: 300 (Light) ls -0.46px`** avec bascule Yin-Yang `☯` qui **démarre en bas de l'écran à l'arrivée avant de s'épingler en haut au scroll**.
- **152 B-Reel** : Archive `#fff`, Hero ciel `#80c4e8` avec lettres gonflables chromées 3D, Font **`"Work Sans"`** `20–24px fw 500` | Glyphes Unicode dans le texte (`"B-REEL is an ☂ for on-going ventures"`), bouton pilule **`☻ GET IN TOUCH ☻`** (`bdr 1px solid #000 pill 9999px h 40px 22px fw 500`) et liens `✦ feelslike.studio ✦`, `● shiftstate.io ●`.
- **153 AKQA** : Gallery `#fff`, Ink `#000`, viewports `0px` | **Chapitres alternés en pleine largeur (`>90px`)** entre **`seasonSerif`** (*"IMAGINE WHAT'S NEXT"*) et **`seasonSans`** (*"MAKE WHAT MATTERS"*) | **Suppression totale du header supérieur** : toute la navigation est remplacée par un **dock de prompt IA flottant en bas au centre (`| Show me recent AI projects... ═`, `rgba(30,30,30,0.75) blur(20px) pill 9999px h 48px`)**.
- **154 Resn** : Darkroom `#0a0a0a` + grain, `0px`, Font **`Fort-Book / Medium / Bold` (Jeremy Mickel / Village)** + `WorkSans-Light` | **Zéro navbar, zéro bouton classique** : l'utilisateur presse et étire au curseur le **"Resn Drop"** (cristal 3D noir à dispersion chromatique RVB `#00ffff / #ff0055` et synthèse sonore) pour faire éclater l'interface.
- **155 Huge** : Hero `#000` (bougie en cire sculptée en `H` qui fond) $\rightarrow$ `#fff` au scroll, **Hot Magenta `#ff0073`** | Font **`matter` (Displaay)** : **`H1` `"Hello."` à `284.8px`, `line-height: 250.6px` (`0.88`), `fw 600`, `letter-spacing: -19.9px`** ; `H2 80–120px fw 700` avec `"users."` en `#ff0073` | Pilule `"Let's talk"` (`rgb(40,40,40) 9999px h 44px`) et **copywriting détectant le jour/heure du visiteur** (*"Working on a Saturday? Respect."*).
- **156 Locomotive** : Bascule binaire `#000 / #fff`, `0px`, créateurs de `locomotive-scroll` | Contraste entre **`LocomotiveNew` (Didone ultra-condensée sur-mesure `48–64px lh 1.0`)** et `HelveticaNowDisplay`, textes découpés en tranches horizontales qui glissent au survol, nav séparée par des virgules (`Work, Agency, Careers, Store`) et bague de champion 3D en or/diamants (7× Awwwards Agency of the Year).
- **157 Media.Monks** : Hero `#000` $\rightarrow$ **Plâtre écru `#eae8e4`** | **Trinité typographique** : `H1 61px/70px` combinant **`Morian Trial` Serif (VJ-Type)** (ligne 1) et `Helvetica Now` (ligne 2) + `H2` en **`"Helvetica Now Extended"` `font-weight: 800` (Ultra-étendu)** + annotations `"Scroll ↓"` en **`Caveat` cursive** | **CTA couplé Pilule + Cercle** : pilule os `Let's connect` (`h 48px radius 9999px`) accolée à un cercle blanc détaché (`48×48px radius 50%`) contenant `→`.
- **158 Dogstudio** : Forêt crépusculaire `#0f1423` sous rayons de lune volumétriques, Ember `#ff5533` | Titres en **`"GT Sectra Display"` (Grilli Type — Serif taillé au scalpel)** : totem vertical de 4 lignes **`"We\nMake\nGood\nShit"` à `80–120px` avec `line-height: 0.9`** + `Gilroy / Heebo` | Au centre, un **loup mythologique 3D temps réel** (fourrure, clignement des yeux) suit le regard du curseur.
- **159 Unseen Studio** : **Canvas Rose Plâtre Méditerranéen `#f4ebe8`** inspiré de De Chirico, avec escaliers de marbre immergés sous des **caustiques d'eau GLSL temps réel** | `H1 ~64px` combinant **`Saol Display Italic` (Schick Toikka)** (*"Creating the"*) et **`Neue Montreal` (Pangram Pangram)** (*"unexpected"*), pilule blanche `"View our work ↘"` (`9999px h 40px`) flottant sur l'escalier immergé + égaliseur `ılı`.
- **160 OFF.Brand** : Void `#000`, Ink `#fff / #a0a0a0`, **Canary Yellow `#ffe800`** (`Subscribe radius 8px h 38px text #363737`), mot-symbole **`OFF.Brand` en Serif Gothique Blackletter punk** jaune acide, et essais présentés comme des **pochettes de vinyles carrées jaunes et noires**.

---

# Catégorie 7 : Médias, Édition, Culture & Curation (Sites 161 à 180)

## Architecture & Invariants Factorisés du Secteur (20 Sites)
- **Architecture Broadsheet & Filets `1px Solid`** : Grilles multi-colonnes asymétriques séparées par des **filets continus `1px solid #e2e2e2`** (NYTimes, The Atlantic, Brand New), rubans de départements pris entre une **double règle horizontale `1px`** (NYTimes, Monocle, Architectural Digest, Typewolf), et domination de **`border-radius: 0px`** dans la presse d'autorité (Wired, Monocle, Pitchfork, Kinfolk, Typewolf, Brand New, Vogue, Architectural Digest, Wallpaper*).
- **Trinités Typographiques Journalisme (Display + Lecture + Monospace)** : Chaque média associe **3 familles complémentaires** :
  1. *Titrage identitaire* : Serifs historiques (*NYT Cheltenham*, *Plantin*, *Kinfolk-Serif*, *Atlantic Serif*, *Noe Text*, *Bradford*, *Domaine*, *FB Didot*, *Adobe Garamond*, *Palatino*) ou Grotesques de combat (*PolySans + Manuka 900*, *WiredDisplay*, *BW Haas Grotesk*, *Walfork*, *Alaska*, *Centra No. 2*, *Gooper*).
  2. *Corps de lecture longue* : Calibré à `1.4–1.6` de `line-height` (*Imperial*, *BreveText*, *Meret Pro*, *Tiempos Text*).
  3. *Métadonnées, Bylines & Scores en Monospace* : *polySansMono* (Verge), *Apercu Mono* (Wired), *Fragment Mono* (scores Pitchfork `8.4`), *Logic Monospace* (signatures d'auteurs The Atlantic `ANNE APPLEBAUM`), *Departure Mono* (Godly), *Monorama* (Brand New), *Atlas Typewriter* (The Pudding `#226`).

## Référentiel Technique Site par Site (`161` à `180`)
- **161 The Verge** : Bg `#111`, Ink `#fff`, **Electric Teal `#20e6b9`** (`SUBSCRIBE` button `text #000 radius 4px h 32px pad 0 14px 12px fw 700`), duotones `#d400ff / #ffe600` | Trio **`polySans` & `polySansMono` (Gradient Type)** (`H1 36–48px fw 700 lh 1.15`, tags `+ TECH, + AI` en `11px uppercase #20e6b9`) + **`manuka` `900` (Klim)** + **`fkRomanStandard`** | Navigation séparée par des **barres obliques de code (`The Verge / Tech / Reviews / Science / AI / Policy`)**, flux social temps réel **Storystream** (`LATEST / FOLLOWING` `pill 9999px`) et tiroir de discussion `w 440px`.
- **162 The New York Times** : Newsprint `#fff`, **Archival Ink `#121212`**, Live `#da0000`, Slate `#567b95`, **filets verticaux continus `1px solid #e2e2e2`**, CTA `radius 3px h 38px 13px fw 700` | Suite **`nyt-cheltenham` & `nyt-cheltenham-cond` (Matthew Carter)** (`H2 26–34px lh 1.15 fw 700`) + **`nyt-franklin`** (taxonomie et bylines `ANNA MERLAN` uppercase) + **`nyt-imperial`** | Masthead Fraktur 1851 avec point final `.`, ruban de départements entre **double filet horizontal `1px`**, et grille 3 colonnes (Colonnes 1–2 enquêtes | Colonne 3 *Opinion* + `4 MIN READ | 💬 450`).
- **163 Wired** : Bg `#fff` cadré de `#000`, **néons saturés (`#ffff00, #ff007f, #ff6b00, #00dcff`)**, **`border-radius: 0px` partout** | Quatuor **`WiredDisplay` & `WiredDisplaySlab`** (`H1 64px` avec **leading négatif `59.5px` ratio `0.93`**, `fw 400`) + **`LabGrotesque 900`** + **`Apercu` (Colophon)** (taxonomie hacker `11px uppercase ls 1.5px` : **`KERNEL PANIC, SECRET AGENTS, POWER PLAY`**) + **`BreveText`** | Logo modulaire 1993 **`W I R E D`** en boîtes alternées noires/blanches et drapeaux `#000` (`TODAY'S PICKS`).
- **164 Monocle** : Paper `#fff`, Ink `#000 / #6e6e6e`, **Marigold Yellow `#ffc500`** (`SUBSCRIBE` button `text #000 radius 0px h 38px pad 0 24px 13px fw 700`), **`border-radius: 0px` strict** | Titres en **`Plantin` (Monotype — Serif XVIe siècle)** `H2 32–40px lh 1.15 fw 400` + `Helvetica Neue` | Masthead `M O N O C L E` flanqué d'illustrations de Satoshi Hashimoto (*"Currently being edited in London"*), ruban entre double filet `1px` (`AFFAIRS | BUSINESS | CULTURE | DESIGN...`) et studio **Monocle 24 Radio** intégré.
- **165 Bloomberg** : News `#fff`, Top Terminal Bar `#000`, **Terminal CRT Amber `#ffb300`**, Live `#e02424`, Font **`BWHaasGroteskWeb` (Neue Haas Grotesk par Christian Schwartz / Commercial Type)** `H2 28–36px lh 1.15 fw 700` | **Double top-bar** : barre noire pro (`🖥 Bloomberg Anywhere Remote Login [#ffb300]`) au-dessus de la barre média (`● Live TV`, `Subscribe` `#fff radius 4px h 32px`), dépêches minute par minute (`22 min` en `12px bold`) et boîtes grises `"Related"` (`#f8f8f8 radius 4px`) sous chaque titre.
- **166 Pitchfork** : Articles `#fff`, Header `#1a1a1a`, Ink `#000`, **Pitchfork Red `#ff3535`** (`SUBSCRIBE` `radius 0px h 32px 12px fw 700`), **`border-radius: 0px`** | Quatuor **`Walfork` (GT Walsheim sur-mesure)** (`H3 16–24px lh 1.2 fw 600`) + **`FeatureFlatDisplay` (Commercial Type)** (`26px italic fw 700` *Sunday Classic*) + **`PTSerif`** + **`FragmentMono` (Pangram Pangram)** pour les notes décimales (`8.4`) et genres (`ROCK, EXPERIMENTAL`), avec **emblème à double cercle concentrique `2px solid #000` enfermant le score `(10)`**.
- **167 Kinfolk** : Papier `#fff`, Ink `#000 / #787878`, **zéro couleur d'UI, `border-radius: 0px`** | **Suite propriétaire à 3 tailles optiques : `Kinfolk-Serif-Display`, `Kinfolk-Serif-Deck`, `Kinfolk-Serif-Text`** (`H2` `"ISSUE 61\nTHE PLAY ISSUE"` `39.3px/40.9px 1:1 ls -0.39px`) + `Kinfolk-Sans`, masthead `K I N F O L K` (`ls ~6px`), **70% de l'écran Hero laissé en pur espace blanc vide**, et actions réduites à **`Buy  |  Read`** (`14px ls 0.5px`).
- **168 The Atlantic** : Paper `#fff`, Ink `#000 / #666`, **Atlantic Crimson `#d92323`** (`Subscribe radius 4px h 36px`), filets `1px solid #e5e5e5` | Trio **`Atlantic Serif` & `AGaramondPro`** (`H2 18–32px lh 1.44`) + **`"Logic Monospace"` (Commercial Type — machine à écrire utilisée exclusivement pour toutes les signatures d'auteurs en capitales : `ANNE APPLEBAUM`, `13px fw 500 ls 0.5px`)** + `Graphik` | Le **monogramme Didone géant `'A'` rouge `#d92323` (`h ~60px`) traverse la ligne de base du header** (`h 88px`).
- **169 Dwell** : Bg `#fff`, Ink `#2d2d2d`, **Sea Teal `#008080`**, **pilule Menthe Douce `#e0f2f1`** (`text #008080 pill 9999px h 36px`), et **bannière supérieure Mauve Terracotta Poudré `#c98ca7`** | Duo **`"Noe Text"` (Schick Toikka — empattements triangulaires)** `H2 38px/41.8px (lh 1.1) fw 700` + **`Theinhardt` (François Rappo / Optimo)** `16px`.
- **170 It's Nice That** : Stories `#fff`, **Ruban d'écosystème Biscuit Chaud `#f9f1e4`** (4 colonnes : *insights | ONES TO WATCH | NICER TUESDAYS | IF YOU COULD*), **Electric Violet `#6c5ce7`** (titres `32–42px` et Search), Marigold `#fcc200` | Trio **`Bradford` (Lineto)** + **`GT-Planar` (Grilli Type)** + **`LabilVariable` (Kometa)** | **Dock de navigation flottant en bas au centre** (`radius 9999px shadow 0 8px 30px rgba(0,0,0,0.12)` : tampon `(NICE)` + rubriques + pilule violette `⌕ Search #6c5ce7`).
- **171 Awwwards** : **Canvas Gris Brume `#eeeeee`** faisant ressortir les cartes `#fff`, Ink `#222`, Font **`"Inter Tight"`** `H1 72–96px uppercase lh 1.0 fw 700 ls -1.5px` | Score décimal (`Score 7.25 of 10` : *Design 40%, Usability 30%, Creativity 20%, Content 10%*), recherche `#e2e2e2 radius 6px`, et **dock inférieur segmenté en verre obsidienne (`rgba(30,30,30,0.85) blur(16px)` : `w. | Nominees | Courses | Collections | Directory | Market | [Visit Sotd. #fff radius 12px]`)**.
- **172 Siteinspire** : Bg `#fff`, Ink `lab(8.30 0.61 -2.16)` (`#151718`), **emblème réduit à un disque rouge pur `#ee3232`**, captures encadrées dans un **passe-partout gris `#f5f5f5` à `border-radius: 8px`** | Font **`fontSctoGroteskA` (Schick Toikka)** `H1 24px/32px fw 400`, nuage typographique de tags (`18–20px`) sur 4 axes (*Styles, Types, Subjects, Platforms*) et double attribution (`Site` by `Studio`).
- **173 Godly** : Bg `#fff`, **Ink `oklch(0.15 0 0)` (`#1f1f1f`)**, Muted `oklch(0 0 0 / 0.267)`, badge `new #ff007f`, cartes vidéo `radius 12px` à **lecture WebM/MP4 instantanée au survol** + badge `↗` (`32×32px`) | Duo **`Inter`** `13px` + **`Departure Mono` (Helena Zhang — monospace pixel 1990s)** | **Workspace en 3 colonnes** : Gauche (Navigation fixe + `27,095 members`) | Centre (Masonry vidéo 2 col) | Droite (Job board design live).
- **174 Typewolf** : **Canvas Parchemin Lilas Poudré `#eae2e2`**, **Deep Wine Aubergine Ink `#654a4e`** (`rgb(101,74,78)`), cadres `#fff` à **`border-radius: 0px`** | Masthead **`Typewolf` (`80–100px` en `DomaineDisplayNarrow` blanc `#fff` avec ombre gravée en relief dans le papier `#eae2e2`)**, tagline en `DomaineText 20px #654a4e`, nav centrée entre filets `1px` en **`Dia` `font-weight: 900` uppercase** (`14px #654a4e`), et détail systématique des polices (`"FONTS — Swear, DM Mono"`).
- **175 Brand New** : Bg `#fff`, Ink `#0c0c0c`, **Crimson `#fa2837`** (dates et badges `Reviewed | Noted | Spotted | Linked`), **`border-radius: 0px` strict** | Trio **`Alaska` (Gradient Type — condensé angulaire)** (`24px fw 400/700`) + **`ABCSocial` (ABC Dinamo)** + **`monoramaregular` monospace** | Atome fondamental : le **conteneur comparatif binaire 50/50 `BEFORE / AFTER`** suivi des sondages lecteurs.
- **176 Fast Company** : Bg `#fff`, Darkroom `#1a1a1a`, Ink `#000`, **CTA `"SUBSCRIBE"` en Lavande Pervenche Pastel `#cbd1f9`** (`text #000 radius 3px h 44px 13px fw 700 uppercase ls 1.4px`) | Masthead Didone `FASTCOMPANY`, titres en **`centra` (Centra No. 2 de Lucas Sharp / Sharp Type)** `28–36px lh 1.15 fw 700` + corps en **`meretPro` (Type-Together)** + pilules `Latest Topics` (`9999px bdr rgba(0,0,0,0.2)`).
- **177 Vogue** : **Monochrome binaire strict `#fff / #000`**, **`border-radius: 0px` absolu** | Trinité Haute Couture : Masthead `V O G U E` en **`FBDidotS` (Font Bureau Didot de David Berlow)** + sur-titres (`11px uppercase ls 1.5px`) et bouton `"SUBSCRIBE NOW"` (`bg #000 text #fff radius 0px h 42px 13px fw 600`) en **`VogueAvantGarde` (Herb Lubalin)** + essais en **`AdobeGaramondPro`**, avec couverture papier du mois dans le header.
- **178 Architectural Digest** : Marble `#fff`, **Charcoal Ink `#2b2b2b`**, **`border-radius: 0px` sur les blocs** contrasté par un **ruban horizontal de hublots circulaires (`border-radius: 50%, border: 2px solid #000`)** prévisualisant les villas | Masthead centré sur la **ligature historique `AD`** (`h ~54px`), titres en **`AdobeGaramondPro`** (`17–32px`, leading serré `1.18`, `#2b2b2b`) + `CrimsonText` + `Lato` uppercase.
- **179 Wallpaper*** : Bg `#fff`, Ink `#333`, **`border-radius: 0px` partout**, et **barre horizontale inversée `#222222`** sous le header pour le flux `TRENDING` | Titres en **`Palatino` (Hermann Zapf)** `H2 32px/32px (1:1) fw 600 #333` + `EB Garamond` + `Helvetica Neue` portant **l'astérisque structurel `*`** (`WallpaperSTORE*, Wallpaper* Travel Guides`), bouton `"SIGN ME UP"` (`bg #fff bdr 1px solid #000 radius 0px h 48px`).
- **180 The Pudding** : Bg `#181818`, Ink `#fff`, couleurs de données pop (`#e000d0, #f5b82e, #eb8c32, rgb(245,240,210)`) | Trinité **`"Gooper SemiCondensed"` (Very Cool Studio — Serif 1970s rebondi)** pour les titres en minuscules (`24–28px fw 700` : *"english vocab lists"*) + **`"Atlas Grotesk"` & `"Atlas Typewriter"` (Commercial Type — cartographie/axes et numérotation séquentielle `#226`)** + **`"Tiempos Text"` (Klim)** | Les boutons du header (`ABOUT, SUBSCRIBE, MORE`) sont des **autocollants vinyles découpés (die-cut stickers)** à bordure blanche irrégulière.

---

# Catégorie 8 : Hospitalité, Voyage, Santé & Services Modernes (Sites 181 à 200)

## Architecture & Invariants Factorisés du Secteur (20 Sites)
- **Surfaces Minérales & Chaleur Biophilique** : En hospitalité et santé, le blanc clinique `#fff` est remplacé par la **pierre travertin, le lin écru et la porcelaine chaude** : `#f3eee7` (Aman), `#faf8f5 / #f0eeeb` (Soho House), `#f9f5ed` (Sonder), `#f3ede5` (Oura), `#f9f7f5` (Headspace), `#f5f5f2` (Brilliant), associés à des encres basalte/marine adoucies (`#313131` Aman, `#14213d` Sonder, `#1a3e6f` Calm, `#1f1f1f` Hims, `#4b4b4b` Duolingo).
- **Capsules de Recherche Flottantes & Grammaire Géométrique** :
  - *En Voyage* : La barre de recherche multi-segments suspendue en pilule (`Where | When | Who` Airbnb `radius 9999px` ; `Search Destination | Check-in | Guests` Design Hotels `radius 36px` encastrée dans le header).
  - *En Streaming & Sport* : Fonds carbone acoustiques/athlétiques (`#0a0a0c` Whoop/Peloton, `#121212` Spotify, `#111` SoundCloud) avec **1 seul signal haute-énergie** (`#1ed760` Spotify, `#ff5500` SoundCloud, `#fc5200` Strava, `#df1c26` Peloton, `#4a53ff` Whoop, `#eb1950` MasterClass) et différenciation sémantique par la forme (Spotify : `radius 8px` = Albums vs `radius 50%` = Artistes humains).

## Référentiel Technique Site par Site (`181` à `200`)
- **181 Airbnb** : Bg `#fff`, Ink `#222`, **Rausch Coral Pink `#ff385c`**, Listing cards `radius 12px` (`★ 4.92`), Font **`"Airbnb Cereal VF"` (Dalton Maag)** `H2 22px/26px fw 700` | **Pilule flottante à 3 segments (`Where | When | Who`, `radius 9999px bdr rgba(0,0,0,0.08) shadow 0 8px 24px rgba(0,0,0,0.08)`)** + bouton circulaire `#ff385c` (`36×36px`), icônes 3D illustrées, badge dépoli **`Guest favorite`** (`rgba(255,255,255,0.9) blur(8px)`) et pilule **`🏷 Prices include all fees`**.
- **182 Design Hotels** : Hero `#000` (film Kyoto sous la pluie), Catalog `#fff` (`#262626`), cartes à **`border-radius: 0px`** | Duo **`Suisse Further / Regular / Semibold` (Swiss Typefaces)** `H1 38–48px lh 1.15 fw 400` + **`Plantin MT Pro` (Monotype)** | **Capsule de réservation (`⌕ Search Destination | Check-in | Guests | [Search #262626]`, `bg rgba(255,255,255,0.95) radius 36px`) suspendue directement au centre de la top-bar** + ruban d'icônes filaires `1px`.
- **183 Aman Resorts** : **Canvas Pierre Travertin / Grès `#f3eee7`** (`rgb(243,238,231)` — bannissement total de `#fff`), **Warm Basalt Ink & Buttons `#313131`**, Bronze `#666`, **`border-radius: 0px` absolu** | Duo **`Lyon Display Web` (Kai Bernau / Commercial Type)** `H2 32–44px fw 400 #313131` + **`WhitneySSm` (Hoefler & Co.)** (`11px uppercase ls 1.8px`), monogramme sacré **`Ā M Λ N`** (macron + chevron inversé) et bouton `"Reserve"` (`bg #313131 text #f3eee7 radius 0px h 38px pad 10px 15px`).
- **184 Soho House** : Top ribbon `#faf8f5`, Hero film 35mm (salons velours aux chandelles), Ink `#121212`, Font **`Cardo` (David Perry — gravure vénitienne 1495 d'Alde Manuce)** `H1 40–56px lh 1.15 fw 400` + **`HK Grotesk`** `14px fw 700` | Bouton `"Apply for membership"` en **pilule pierre `#f0eeeb` (`text #121212 radius 40px h 44px pad 0 24px`)** et monogramme en **grille 3×3 de 9 carrés** (les 9 fenêtres du 40 Greek Street, 1995).
- **185 Sonder** : **Canvas Lin Européen `#f9f5ed`**, **Oxford Midnight Navy Ink & CTA `#14213d`** (`radius 8px h 48px text #fbf8f2`), **Caramel Ochre `#b47341`** | Font **`Prata` (Didone de Cyreal)** `H1 49px lh 1.15 fw 400` bicolore (`#14213d` + fin de phrase en ocre `#b47341` *"after a great night's sleep."*) + `Inter` + `jetbrains mono`, split-screen 50/50 et onglets soulignés de `#b47341`.
- **186 The Standard Hotels** : Hero noir cinématique, **Standard Red `#ea2328`**, **`border-radius: 0px`** sur menus | **Le logo `"the standard"` est renversé à 180° la tête en bas** dans un rectangle `#ea2328` | Colonne verticale de 12 villes en **`TradeGothicBoldCondTwenty` (Linotype)** `32–48px uppercase lh 1.05 fw 700` + `GT Zirkon`, et **disque rouge circulaire flottant `"Book\nNow"` (`72×72px radius 50% bg #ea2328`)** en bas à droite.
- **187 Whoop** : Hero `#0a0a0c` (macro du bracelet SuperKnit sous la sueur), Features `#f5f6f8`, **Electric Ultramarine `#4a53ff`** (`JOIN NOW` `pill 9999px h 48px pad 0 32px 14px fw 700`), anneaux biométriques (Recovery `#00e676`, Strain `#4a53ff`, Sleep `#21d0dc`) | Font **`proxima-nova`** `H1 56–72px lh 1.05` en **`font-weight: 300` (Light)** + `Readex Pro` + `din-2014` et badge `✔ HSA/FSA eligible`.
- **188 Oura** : **Canvas Porcelaine / Drap de lin chaud `#f3ede5`**, Ink `#141414`, **Lapis Blue CTA `#2a72de`** (`pill 9999px h 48px 16px fw 700`) | Duo **`"Editorial New"` (Pangram Pangram)** `H1 64–80px lh 1.05` en **`font-weight: 300` (Light)** + **`AkkuratLL` (Lineto)** `16px`, mot-symbole `ŌURA` à macron, et bouton panier circulaire filaire (`48×48px radius 50% bdr rgba(0,0,0,0.15)`) rappelant l'anneau en titane.
- **189 Hims & Hers** : Bg `#fff`, Ink `rgba(0,0,0,0.88)` (`#1f1f1f`), **blocs pastels dédramatisants par pathologie (`#c9f268` chartreuse GLP-1, `rgb(220,240,230)` sauge cheveux, `rgb(250,215,195)` pêche peau, `rgb(230,225,245)` lavande mental)** avec cartes `radius 20px pad 24px` | Duo **`CareSans`** (`H1 57px/57px 1:1` en **graisse intermédiaire `font-weight: 410`**) + **`IvarSoft` (Letters from Sweden)**.
- **190 Calm** : Photo du lac Moraine fondant dans `#fff`, **Deep Twilight Navy Ink `#1a3e6f`** | Font **`Figtree` (Erik Kennedy)** : `H1 49.5px` avec **`line-height: 74.25px` (ratio d'espacement respiratoire `1.5`), `fw 700`, `#1a3e6f`**, et bouton `"Try Calm for Free"` (`radius 100px h 56px pad 14px 28px`) en **dégradé crépusculaire `linear-gradient(180deg, #2477aa 0%, #6461e0 100%)`**.
- **191 Equinox** : Hero noir clair-obscur (bois de sauna ambré), Header `#000 h 76px` avec mot-symbole très espacé **`E Q U I N O X` (`ls 4px`)**, **`border-radius: 0px` strict** | Font **`"Equinox Sans"`** `H2 64px/64px (1:1) fw 600 ls -1.28px` et bouton dalle `"VISIT A CLUB"` (`bg #fff text #000 radius 0px h 56px pad 0 32px 14px fw 700 uppercase ls 1.2px`).
- **192 Headspace** : Bg `#fff`, Cards `#f9f7f5 radius 24px`, Ink `#222`, **triade chromatique optimiste : Top Ribbon Jaune `#ffd100` + Logo Disque Orange `#f47d20` + Bouton Pilule Bleu Royal `#0061ef`** (`radius 32px h 48px`) | Font **`"Headspace Apercu"` (Colophon)** `H1 48–56px lh 1.15 fw 700` + `Apercu Pro Mono` et split Hero 50/50 (Méditation vs Téléthérapie remboursée).
- **193 Duolingo** : Bg `#fff`, **Soft Graphite Ink `#4b4b4b`**, **Parrot Green `#58cc02`**, Sky `#1cb0f6`, Gold `#ffc800`, Red `#ff4b4b` | Font **`duolingo-sans` ("Feather Bold" de Johnson Banks)** `H1 32px fw 700 #4b4b4b`, `H2 "free. fun. effective." 44–48px #58cc02` | **Bouton poussoir d'arcade 3D `"GET STARTED"`** (`bg #58cc02 radius 12–16px h 48px`) doté d'une **lèvre inférieure `border-bottom: 4px solid #58a700`** qui s'enfonce au clic (`translateY(2px); border-bottom-width: 2px`), et ruban inférieur unifiant Langues + `♜ CHESS` + `➕ MATH`.
- **194 MasterClass** : Void `#000`, Cards `#1a1a1a` (`radius 16px` portraits / `8px` options), **Crimson `#eb1950`** (`radius 8px h 44px`) | Titres en **`"Sohne Schmal"` (Klim — grotesque ultra-condensé IMAX)** : `H1 80px` avec **leading négatif `68px` (`0.85`), `fw 500 uppercase`** + `Ivar Display Condensed`, et **questionnaire d'onboarding de 4 checkboxes `#1a1a1a` (`h 52px radius 8px`) logé directement dans le Hero**.
- **195 Maven** : **Hero Oxford Midnight Blue `#0b1021`**, Catalog `#fff`, Ink `#f7fbff` | Duo **`fontBureauSerif`** (`H1 56–64px lh 1.15 fw 500` avec rotation de compétences encadrées en filaire `[ Executive Presence ]`) + **`fontGraphik` (Commercial Type)**, et **3 grands onglets de format dans le Hero (`radius 16px pad 20px 24px` : `Cohort-based courses | 1-day workshops | Free Lightning Lessons`)**.
- **196 Brilliant** : **Canvas Craie `#f5f5f2`** à grille isométrique, Cards `#fff radius 16px`, **Emerald `#22c55e`**, Gold `#f5b91e` | Duo **`"CoFo Robert"` (Contrast Foundry — hybride géométrique calligraphique)** `H1 54px/59.4px fw 500 ls -1.0px` + `CoFo Brilliant` + `KaTeX`, header en pilule blanche suspendue (`9999px h 64px`), double pilule d'audience (`56px h 52px` : `Learner #22c55e` vs `Parent/Teacher #fff`) et vrais puzzles interactifs (`sin(x)`) dès l'accueil.
- **197 Spotify** : Bg **`#121212`**, Rail `#1f1f1f`, Hover `#242424`, **Neon Green `#1ed760`** (réservé au Play), CTA `"Log in"` (`#fff text #000 pill 9999px h 48px hover scale(1.04)`) | Font variable **`SpotifyMixUITitle` & `SpotifyMixUI` (ABC Dinamo, 2024)** (`24px / 16px fw 700`) et **grammaire géométrique stricte** (`border-radius: 8px` = Albums/Playlists vs `border-radius: 50%` = Artistes humains).
- **198 SoundCloud** : Underground `#111`, **Safety Orange `#ff5500`**, recherche `rgba(255,255,255,0.1) radius 9999px` | Font **`Söhne` (Klim) Black `font-weight: 900`** `H1 56–72px uppercase lh 1.0`, et onde sonore (`waveform`) servant simultanément de barre de scrub et de fil de commentaires horodatés à la milliseconde.
- **199 Strava** : Bg `#fff`, Ink `#000 / #666`, **Strava Safety Orange `#fc5200`**, Font propriétaire **`Boathouse`** `H1 44–52px lh 1.15 fw 700` | Pile de 3 boutons d'inscription directe dans le Hero (`Google | Apple | Email #fc5200`, tous à **`border-radius: 4px, height: 48px`**) et tracés GPS oranges sur les photos d'athlètes.
- **200 Peloton** : Hero `#0a0a0c` (acier carbone et course), Lineup `#fff` (`#181a1d`), **Peloton Crimson `#df1c26`**, cartes matériel `radius 16px` | Duo **`brandon-grotesque` (HVD Fonts — Art Déco 1920s)** `H1 40–56px lh 1.15 fw 700` + `Inter`, et double CTA pilule blanche (`"Shop Tread Flex / Vision"`, `bg #fff text #181a1d radius 28px h 48px pad 0 22px 16px fw 500`).
