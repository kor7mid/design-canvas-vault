# 01 — Refactoring UI: Hierarchy, Spacing, Typography, Color, Depth & Components

> **Source**: Adam Wathan & Steve Schoger (*Refactoring UI*) — Complete Stack-Agnostic Engineering Rules.

---

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

---

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

---

## 3. Layout & Spacing
- **Start with Too Much Whitespace**: Begin with generous macro-spacing (`py-24` to `py-32`, `gap-12`) and tighten only if needed.
- **Strict Geometric Spacing Scale**:
  `4px` (icon-to-label) | `8px` (compact tags/buttons) | `12px` (input/list vertical pad) | `16px` (card pad/grid gap) | `24px` (form group/card gap) | `32px` (module separation) | `48px` (tablet section) | `64px` (desktop section) | `96px–128px` (hero/footer macro separation).
- **Don't Stretch Components to Fill the Screen**: Give forms/cards intrinsic `max-width` (`420px` for auth forms, `65ch` for prose, `1280px–1400px` for dashboards) rather than stretching across 4K monitors.
- **Independent Breakpoint Scaling**: Do not scale all elements proportionally. Keep buttons `36px–44px` tall across viewports while scaling `H1` from `64px` desktop to `32px` mobile.

---

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

---

## 5. Working With Color
- **Think in HSL / OKLCH**: Use Hue, Saturation, and Lightness (or perceptually uniform `oklch(L C H)` / `lab()`) to build 8–10 shade ramps per color (`50` to `950`).
- **Hue-Shifting Physics**:
  - When **lightening** a color, shift Hue toward warm **Yellow**.
  - When **darkening** a color, shift Hue toward cool **Blue/Indigo**.
- **Never Use Dead Neutral Grays (`s: 0%`)**: Tint grays with `2%–5%` warm yellow/stone (editorial/hospitality/luxury) or `4%–8%` cool blue/slate (SaaS/fintech/devtools).
- **The "Flip" Technique for Accessible Badges**: Instead of white text on a loud saturated fill, pair a soft tinted background (`bg-emerald-500/10` or `#ecfdf5`) with dark/rich hue text (`#065f46` light / `#34d399` dark) and a `1px` subtle border. Always pair color with an icon or text label for color-blind accessibility.

---

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

---

## 7. Working With Images & Finishing Touches
- **Text Over Images (4 Proven Tactics)**: (1) Full dark scrim (`rgba(0,0,0,0.55)`), (2) Directional gradient scrim (`linear-gradient(to top, rgba(0,0,0,0.85), transparent)`), (3) Grayscale + `mix-blend-mode: multiply` over brand color, or (4) Subtle `text-shadow: 0 2px 4px rgba(0,0,0,0.6)`.
- **Prevent Image Bleed**: Apply `box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08)` (or `rgba(255,255,255,0.1)`) so white avatars/logos never bleed into white backgrounds.
- **Respect Intended Asset Scale**: Never upscale 16px icons (enclose them in a `40px–48px` tinted circular/squircle badge instead). Never shrink a full 1920px dashboard screenshot into a tiny card; crop a focused region at 100% scale. Lock user images with fixed aspect ratios and `object-fit: cover`.
- **Replace Cage Borders**: Replace noisy `1px solid gray` dividers with surface tint steps, soft shadows, or `24px–32px` whitespace. Add `3px–4px` accent top/left borders (`border-t-4`) for pricing highlights or active sidebar states.
- **Supercharge Defaults**: Replace default bullets with custom SVG checkmarks, radio inputs with clickable **Selection Cards**, and blank tables with **First-Class Empty States** (icon + headline + benefit copy + primary creation CTA).

---

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
