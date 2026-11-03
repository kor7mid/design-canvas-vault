# Catégorie 1 : SaaS, DevTools & Infrastructure (Sites 001 à 035)

> **Référentiel Factorisé (Zéro Perte)** : Contient l'intégralité des tokens visuels, typographies, courbures de boutons, headers, composants et *Anti-Generic Insights* des 35 sites de ce secteur.

---

## 001 — Linear (`https://linear.app`)

> **Sector**: SaaS / Issue Tracking & Product Development  
> **Aesthetic Mood**: High-Craft Dark Luxury Minimalist / Swiss Precision  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(8, 9, 10)` (`#08090a`) — *Never pure `#000000`*. A warm, carbon slate deep black that prevents OLED smearing and reduces ocular fatigue.
- **Surface Elevation Cards**: `rgba(255, 255, 255, 0.03)` to `rgba(255, 255, 255, 0.06)` on top of the dark root.
- **Hairline Borders**: `1px solid rgba(255, 255, 255, 0.08)` for container boundaries and `rgba(255, 255, 255, 0.05)` for internal divider rows.
- **Primary Text**: `rgb(247, 248, 248)` (`#f7f8f8`) — slightly softened off-white, zero white glare.
- **Secondary / Muted Text**: `rgb(138, 143, 152)` (`#8a8f98`) — cool desaturated slate.
- **Accent Signals**:
  - Yellow State / In Progress: `rgb(245, 166, 35)`
  - Green / Additions: `rgb(70, 167, 88)` (`+22`)
  - Red / Deletions: `rgb(229, 72, 77)` (`-10`)
  - Subtle Violet / Agent: `rgb(94, 106, 210)`


### 2. Typographie

- **Font Family**: `"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Hero Title (`H1`)**:
  - `font-size: 64px`
  - `line-height: 64px` (Strict 1:1 tight leading)
  - `font-weight: 510` (*Variable font intermediate weight — neither regular 400 nor heavy bold 700! This is a core secret of high-end SaaS*).
  - `letter-spacing: -1.408px` (Negative tracking resserre les glyphes proportionnellement à la grande taille).
- **Body & Subtitles**:
  - `font-size: 16px` to `18px`, `line-height: 1.5`, `color: rgb(138, 143, 152)`.
- **In-App Metadata**:
  - `font-size: 12px` to `13px`, `line-height: 16px`, `font-weight: 450` / `500`.


### 3. Boutons & CTA

- **Primary CTA ("Sign up")**:
  - Background: `rgb(229, 229, 230)` (`#e5e5e6`) — *Light off-white bone tone, not blinding `#ffffff`*.
  - Text Color: `rgb(8, 9, 10)` (Dark canvas contrast).
  - Shape: `border-radius: 9999px` (Pill button).
  - Height & Padding: `height: 32px`, `padding: 0 12px` (Ultra-compact, non-bulky, developer-friendly).
  - Font: `font-size: 13px`, `font-weight: 510`.
  - Elevation: Layered 5-stop ambient shadow:
    `rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px`.
- **Secondary Ghost Buttons & Nav Links**:
  - Background: `transparent`.
  - Text Color: `rgb(138, 143, 152)` hover to `rgb(247, 248, 248)`.
  - Font: `font-size: 13px`, `font-weight: 450`.


### 4. Header & Navigation

- **Header Height**: `73px` total height, floating layout.
- **Glassmorphism Backdrop**: `backdrop-filter: blur(20px)` with `background: rgba(0, 0, 0, 0)`.
- **Bottom Separator**: `1px solid rgba(255, 255, 255, 0.08)`.
- **Navigation Layout**:
  - Logo on left (`Linear` logotype with 45° diagonal slice icon).
  - Center nav: `Product`, `Resources`, `Customers`, `Pricing`, `Now`, `Contact` (`gap: 24px`, muted text `13px`).
  - Right utilities: `Log in` (link) + vertical divider rule (`rgba(255, 255, 255, 0.15)`) + `Sign up` (pill button).


### 5. Composants Signature (In-App UI Window Mockup (The Hero Anchor))

- **Framing**: Inset window container with rounded corners (`border-radius: 12px`), border `1px solid rgba(255, 255, 255, 0.1)`, dark shadow `0 24px 64px rgba(0, 0, 0, 0.6)`.
- **Sidebar**:
  - Width `240px`, background `rgba(255, 255, 255, 0.02)`.
  - Selected item pill: `background: rgba(255, 255, 255, 0.06)`, `border-radius: 6px`, `padding: 6px 10px`.
- **Activity Stream**:
  - Small circular avatars (`18px × 18px`).
  - Vertical connecting thread: `width: 1px`, `background: rgba(255, 255, 255, 0.08)`.
  - Code inline badges: `padding: 2px 6px`, `background: rgba(255, 255, 255, 0.08)`, `border-radius: 4px`, `font-family: monospace`.


### 6. Anti-Generic Insights

1. **Intermediate Font Weights (`510`, `450`)**: AI templates always default to `font-weight: 400` or `font-weight: 700`. High-end tools use variable font weights around 500 for crisp legibility on dark surfaces without text boldness ballooning.
2. **Compact 13px Navigation**: AI templates default to huge 16px/18px nav links. Linear uses 13px/14px, communicating tool speed, density, and professional efficiency.
3. **No Pure Grays**: All gray borders and text have a subtle cool/slate bias that harmonizes with dark themes.
4. **Restraint in Gradients**: Zero gaudy multi-color saturated gradients in the background; the UI speaks through contrast, typography, and micro-borders.

---

## 002 — Vercel (`https://vercel.com`)

> **Sector**: Cloud Platform / Frontend Infrastructure / AI Deployment  
> **Aesthetic Mood**: Strict Monochromatic Swiss Minimalist / Developer Luxury  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(0, 0, 0)` (`#000000`) — True pure black backdrop used as an infinite void.
- **Primary Text**: `rgb(237, 237, 237)` (`#ededed`) — *Off-white 93% luminance*, deliberately avoiding 100% `#ffffff` to eliminate harsh edge glare on OLED displays.
- **Surface Elevation Containers**: `rgb(10, 10, 10)` (`#0a0a0a`) — Extremely deep charcoal elevation creating a tonal step of only 4% brightness above the root canvas.
- **Hairline Borders**: `1px solid rgba(255, 255, 255, 0.12)` for active cards; `1px solid rgb(31, 31, 31)` (`#1f1f1f`) for subtle structural divisions.
- **Muted Hierarchy**: `rgb(136, 136, 136)` (`#888888`) for descriptions and feature category eyebrows.
- **Ambient Glow**: Pure monochromatic white-to-transparent radial falloffs (`radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)`) behind key geometric anchors.


### 2. Typographie

- **Font Family**: `GeistSans, "GeistSans Fallback", sans-serif` (Vercel's custom geometric sans designed with Swiss neutrality and programming legibility).
- **Hero Title (`H1`)**:
  - `font-size: 64px`
  - `line-height: 64px` (Strict 1:1 tight leading)
  - `font-weight: 400` (*Regular weight! Never heavy bold. The sheer scale creates the hierarchy, preserving refined elegance*).
  - `letter-spacing: -3.84px` (*Extreme negative tracking of -6% font-size, interlocking geometric characters*).
- **Section Headers (`H2`)**:
  - `font-size: 48px`, `font-weight: 400`, `letter-spacing: -2.4px`, `line-height: 1.1`.
- **Text De-emphasis in Headings**: In sub-headlines, key words are highlighted in `#ededed` while surrounding context is dimmed to `#707581` to guide optical fixation.


### 3. Boutons & CTA

- **Primary Hero CTA ("Deploy now")**:
  - Background: `rgb(237, 237, 237)` (`#ededed`).
  - Text Color: `rgb(10, 10, 10)` (`#0a0a0a`).
  - Shape: `border-radius: 9999px` (Pill).
  - Height & Padding: `height: 40px`, `padding: 0 16px`.
  - Font: `font-size: 16px`, `font-weight: 500`.
  - Border: `none` / `0px`.
- **Secondary Hero Button ("Talk to sales")**:
  - Background: `rgb(10, 10, 10)` (Ton-sur-ton elevation).
  - Text Color: `rgb(237, 237, 237)`.
  - Shape: `border-radius: 9999px` (Pill).
  - Border: `1px solid rgb(31, 31, 31)`.
- **Navbar Utility Button ("Get a Demo")**:
  - Shape: `border-radius: 6px` (*Notice: navbar utility buttons use 6px rounded rectangles, whereas hero CTA actions use pill shapes!*).
  - Font: `font-size: 14px`, `font-weight: 450`.


### 4. Header & Navigation

- **Layout**: Fixed sticky top header, flush left-right padding `24px`.
- **Brand Mark**: Iconic equilateral triangle glyph (`18px` height).
- **Navigation Links**:
  - `Products ▾`, `Resources ▾`, `Enterprise`, `Pricing` (`font-size: 14px`, `color: #888888` hover `#ededed`).
- **Right Utilities**:
  - `Get a Demo` (6px bordered button) $\rightarrow$ `Log In` (ghost text) $\rightarrow$ `Sign Up` (compact white pill).


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Light/Regular Weight on Gigantic Headings (`font-weight: 400` at `64px`)**: Cheap AI templates almost invariably generate `font-weight: 700` or `800` for `H1`s, which looks loud and unpolished. Modern elite developer platforms use `400` or `500` with tight negative tracking (`-3.84px`).
2. **Monochromatic Discipline**: Zero saturated rainbow gradients. All depth is created using monochromatic contrast (pure black `rgb(0,0,0)`, charcoal `rgb(10,10,10)`, off-white `rgb(237,237,237)`, and 1px hairline borders).
3. **Shape Dialectic (Pills vs. 6px Rectangles)**: Primary page actions are pills (`9999px`), while structural utility buttons are softly rounded rectangles (`6px`). Mixing them purposefully establishes distinct cognitive tiers.

---

## 003 — Stripe (`https://stripe.com`)

> **Sector**: Global Financial Infrastructure, Payments & Billing  
> **Aesthetic Mood**: Vibrant Tech Luxury / Organic Animated Gradients / Precision Micro-Typography  


## 1. Visual Identity & Chromatic Architecture

- **Canvas Background**:
  - Primary Surface: `#ffffff` (Pure crisp white) transitioning into signature diagonal mesh gradients (warm peach `#ffc371`, saturated magenta `#e535ab`, and violet `#635bff`).
  - Dark Accent Surface (Enterprise & Pricing): `rgb(10, 37, 64)` (`#0a2540` — Stripe's signature deep navy blue, never pure black).
- **Primary Brand Accent**: `rgb(99, 91, 255)` (`#635bff` — Stripe Electric Indigo). Used for primary CTAs, active links, and arrow indicators.
- **Secondary Accent Signals**:
  - Link Payment Green: `#00D66F`
  - Custom Pricing Cyan: `rgb(0, 212, 255)` (`#00d4ff`)
  - Warning/Pending Yellow: `#ffd100` (Hertz card highlight)
- **Text Hierarchy**:
  - Primary Headlines: `rgb(10, 37, 64)` (`#0a2540`) — deep navy charcoal.
  - Secondary / Running Text: `rgb(66, 84, 102)` (`#425466`).
  - Muted Metadata / Captions: `rgb(80, 97, 122)` (`#50617a`).


## 2. Typography & Hierarchy (Söhne Font Family)

- **Font Family**: `sohne-var, "SF Pro Display", -apple-system, sans-serif` (Söhne by Klim Type Foundry).
- **Hero Title (`H1`)**:
  - `font-size: 64px` (on desktop), `line-height: 1.08`.
  - Gradient Text Spans: Uses `-webkit-background-clip: text; -webkit-text-fill-color: transparent` for `"your revenue"` and `"from your first transaction"` to emphasize the emotional benefit.
  - Headline Footnote Marker: `1` in superscript `11px` violet linked to the legal footnote at the bottom of the page.
- **Sub-headline & Body**:
  - `font-size: 18px` to `21px`, `line-height: 1.45`, `color: #425466`.


## 3. Mega-Menu Deep Architecture (The Gold Standard)

- **Layout Structure**: 4 distinct vertical category columns (`Payments`, `Revenue`, `Money Management`, `Embedded Finance`).
- **Category Header**:
  - `font-size: 12px`, `font-weight: 400`, `color: rgb(26, 44, 68)`, uppercase initial.
- **Product Item Molecule**:
  - **Title Link**: `font-size: 16px`, `font-weight: 300`, `color: rgb(80, 97, 122)` (on hover: transitions to `rgb(99, 91, 255)` with `150ms ease`).
  - **Micro-description**: `font-size: 14px`, `line-height: 19.6px`, `color: rgb(80, 97, 122)`, indented directly beneath the title without icons to maintain visual serenity.
- **Keyboard & Focus Handling**:
  - `Escape` key immediately closes the menu and returns clean focus ring to the trigger button (`box-shadow: 0 0 0 2px #635bff`).


## 4. Cards & Inset Components (Homepage Highlights)

### 4.1 Feature Grid Cards (Split-Interface Layout)
- **Container**: White elevated card on subtle gradient backdrop with rounded corners (`border-radius: 16px`), border `1px solid rgba(0, 0, 0, 0.04)`, soft elevation shadow `0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)`.
- **Top Right Control**: Inset `32px × 32px` square expand button with rounded corners `8px` (`rgba(99, 91, 255, 0.08)`).
- **Real-World Context**: Instead of abstract illustrations, Stripe embeds realistic UI components (POS mobile terminal dock with drop shadow, German checkout modal with `Klarna` and `Link`, and usage-based token consumption charts).

### 4.2 Customer Story Cards (The Hertz & AI Startup Grid)
- **Top Story (Hertz)**: Orthogonal aerial photography (road intersection with yellow cab) paired with 3 bold numbers (`160 countries`, `11K+ locations`, `Products used`).
- **Startup Showcase (Lovable, Gamma, Runway, Supabase)**:
  - 4 vertical cards (ratio 4:5, `border-radius: 8px`).
  - White company logo pinned in bottom-left corner directly over image.
  - Headline + Link `"Read X's story >"` in `rgb(99, 91, 255)`.


### 5. Composants Signature (Pricing Page Architecture (`/pricing`))

- **Card 1: Standard Plan (Light Theme)**:
  - Split 50/50 horizontal layout inside the card:
    - Left half: Plan title `"Standard"` (`24px` bold) + value prop description + `"Get started >"` pill button (`background: #635bff`, text `#ffffff`, `border-radius: 9999px`).
    - Right half: Enormous bold rate `"2.9% + 30¢"` (`32px` bold) + `"per successful transaction for domestic cards"`.
- **Card 2: Custom Plan (Inverted Dark Theme)**:
  - Background: `rgb(10, 37, 64)` (`#0a2540` — deep navy).
  - Left half: Title `"Custom"` + `"Contact sales >"` button in electric Cyan `#00d4ff` (`color: #0a2540`).
  - Right half: 4 feature rows (`IC+ pricing`, `Volume discounts`, `Multi-product discounts`, `Country-specific rates`) with hairline dividers `1px solid rgba(255, 255, 255, 0.1)`.


## 6. Footer Architecture

- **Grid**: Multi-column structure (`Products`, `Solutions`, `Developers`, `Resources`, `Support`).
- **Typographic Scale**: `font-size: 14px`, `color: rgb(80, 97, 122)`, line spacing `28px`.
- **Category Column Titles**: `14px`, `color: #0a2540`, `font-weight: 550`.
- **Bottom Bar**: Language/Country selector dropdown with globe icon, copyright, and privacy choices.


## 7. Anti-Generic Insights (Why this beats AI templates)

1. **Dual-Tone Pricing Split**: Instead of 3 identical vertical cards with standard bullet points, Stripe uses 2 wide asymmetrical cards (one white, one deep navy) with a horizontal 2-column internal split.
2. **Text-Clip Gradient Highlights**: Instead of coloring an entire title, Stripe applies gradient clipping to only 2 or 3 critical words (`"your revenue"`, `"from your first transaction"`), creating intentional emphasis without overwhelming the page.
3. **Hyper-Realistic Contextual UI Assets**: Zero cartoon 3D blobs or generic placeholder graphs. Every visual asset represents real code, real currencies ($, €, ¥), real payment methods (Klarna, Affirm, Apple Pay), and real POS hardware.

---

## 004 — GitHub (`https://github.com`)

> **Sector**: Developer Collaboration, Code Hosting, CI/CD & AI Coding Agents  
> **Aesthetic Mood**: Primer Design System / Clean Technical Utility / Expressive Interactive Demos  


## 1. Visual Identity & Chromatic Architecture (Primer Palette)

- **Canvas Background**:
  - Light Canvas: `#ffffff` (Pure white) with subtle graph grid patterns (`rgba(0, 0, 0, 0.04)`).
  - Surface Elevation: `rgb(246, 248, 250)` (`#f6f8fa` — Primer canvas inset).
- **Primary Text Color**: `rgb(31, 35, 40)` (`#1f2328` — Primer dark charcoal, softer than pure `#000000`).
- **Signature Green CTA**: `rgb(8, 135, 43)` (`#08872b` in marketing / `#1f883d` in app).
- **Hairline Borders**: `1px solid rgb(208, 215, 222)` (`#d0d7de`).
- **Secondary Gray Elements**: `rgb(101, 109, 118)` (`#656d76` for subtitles, captions, and secondary icons).
- **Multicolor Brand Accents (Copilot & Mona Universe)**:
  - Blue: `#0969da`
  - Violet: `#8250df`
  - Coral Pink: `#bf3989`
  - Goldenrod: `#d4a72c`


## 2. Typography & Hierarchy (Mona Sans Variable)

- **Font Family**: `"Mona Sans VF", MonaSansFallback, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Hero Title (`H1`)**:
  - `font-size: 56px` (on marketing home).
  - `line-height: 61.6px` (1.1 ratio).
  - `font-weight: 440` (*Intermediate weight variable font — crisp, humanistic, legible*).
- **Section Headers (`H2`)**:
  - `font-size: 40px`, `line-height: 1.15`, `font-weight: 440`.
- **Body & Explanations**:
  - `font-size: 16px` to `18px`, `line-height: 1.5`, `color: #656d76`.
- **Code & Command Snippets**:
  - `font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`.
  - `font-size: 13px`, `padding: 2px 6px`, `background: #f6f8fa`, `border-radius: 4px`.


## 3. Mega-Menu Deep Architecture (`Products ▾`)

- **Trigger**: `<button class="HeaderMenu-link">Products</button>` with down chevron.
- **Internal 3-Region Layout**:
  1. **Left Featured Cards**: 2 full-width cards featuring isometric UI previews on subtle olive/gray grid backgrounds:
     - `GitHub` (*Repository hosting, code review, and collaboration*).
     - `Copilot` (*AI coding agent for tasks, projects and automated work*).
  2. **Center Column (`BUILD & SHIP`)**:
     - `Actions` (*CI/CD and automation*)
     - `Code Quality` (*Quality analysis, fixes, and enforcement*)
     - `Codespaces` (*Cloud development environments*)
     - Each entry uses an icon inside a soft 32px rounded square (`border: 1px solid #d0d7de; border-radius: 6px`).
  3. **Right Column (`SECURE`)**:
     - `Code Security` (*Vulnerability detection and remediation*)
     - `Secret Protection` (*Secret scanning and leak prevention*)
  4. **Footer Link**: `"All Features >"` in dark bold text.


## 4. Interactive Hero & Copilot Workspace Demos

- **Agentic Workflow Stepper (Tabs)**:
  - Horizontal pill stepper bar: `Review changes` $\rightarrow$ `Direct the fix` $\rightarrow$ `Check the results` $\rightarrow$ `Approve and merge` $\rightarrow$ `See it shipped` + `[||]` Pause button.
- **Split-View Workspace Layout**:
  - Left pane: Copilot session activity stream with file mutation tags (`+1` green pill), terminal execution traces (`bun test ...`), and command prompt input box.
  - Right pane: GitHub PR review interface with sticky comment box and checkmark status pills (`✓ All checks have passed`).


### 5. Composants Signature (Pricing Table Deep Architecture (`/pricing`))

- **Top Callout**: `"Try the Copilot-powered platform"` with dual CTA buttons:
  - Primary: `"Start free for 30 days"` (`background: #08872b`, `border-radius: 6px`, `font-size: 14px`, `color: #ffffff`).
  - Secondary: `"Compare plans"` (`background: transparent`, `border: 1px solid #d0d7de`, `border-radius: 6px`).
- **3-Tier Plan Matrix (`Free`, `Team`, `Enterprise`)**:
  - `Enterprise` Card Highlight: Top green banner badge with uppercase label `"RECOMMENDED"`.
  - Price Units: `$0 USD`, `$4 USD per user / month`, `$21 USD per user / month`. Note that `USD` is styled in smaller muted gray typography (`14px`) aligned with the number baseline.
  - Notice Callout: Inset light blue notification callout beneath Enterprise button: `background: rgba(56, 139, 253, 0.1)`, icon `(i)`, text `"GitHub Enterprise now includes access to GitHub Copilot. Learn more"`.


### 6. Anti-Generic Insights

1. **Precision 6px Radius (The Primer Standard)**: While consumer AI templates use generic round 24px/9999px pills everywhere, technical developer tools (GitHub, Primer) use consistent, functional **6px corner radiuses** for all buttons, inputs, and cards.
2. **Intermediate Typography Weights (`440`, `550`)**: Using variable fonts like Mona Sans allows weights between Regular 400 and Semi-bold 600, giving technical headers a human, editorial feel without visual heaviness.
3. **Structured Interactive Steppers**: To explain complex AI capabilities (Copilot), GitHub does not use a single animated GIF or generic text list—it embeds an interactive 5-step stepper that allows users to click through each phase of an agentic workflow.

---

## 005 — Supabase (`https://supabase.com`)

> **Sector**: Backend-as-a-Service, Open-Source Database Infrastructure & Vector Storage  
> **Aesthetic Mood**: Cyber-Emerald Dark Architecture / Bento Matrix / OKLCH Chromatic Space  


## 1. Visual Identity & OKLCH Chromatic Space

- **Root Canvas Background**: `oklch(0.19 0.0025 157.5)` (`#171917` approx) — A deep charcoal surface with a microscopic warm-emerald hue tint (`157.5°`), creating seamless organic harmony with their brand green.
- **Brand Accent Green**: `oklch(0.76 0.18 157.5)` (`#3ecf8e` — Supabase Lightning Emerald).
- **Surface Elevation Cards**: `oklch(0.22 0.003 157.5)` with hairline border `1px solid oklch(0.95 0.0015 157.5 / 0.08)`.
- **Primary Text**: `oklch(0.95 0.0028 157.5)` (`#f0f2f0` approx off-white).
- **Secondary / Muted Text**: `oklch(0.7 0.003 157.5)` (`#9da39d` cool muted sage).


## 2. Typography & Hierarchy (Manrope + Inter)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Manrope, "Manrope Fallback", sans-serif`.
  - `font-size: 56px` (marketing hero) / `34px` (pricing).
  - `font-weight: 500` (*Medium weight — not heavy bold; maintains geometric airiness*).
  - Two-tone styling: Line 1 in off-white (`"Build in a weekend"`), Line 2 in vibrant emerald green (`"Scale to millions"`).
- **Body & Controls**:
  - `font-family: Inter, "Inter Fallback", sans-serif`.
  - `font-size: 15px` to `16px`, `line-height: 1.5`.


## 3. Mega-Menu Deep Architecture (`Product ▾`)

- **Structure**:
  - **Left 2 Columns**:
    - `FEATURES`: Database, Authentication, Storage, Edge Functions, Compute (`PRIVATE ALPHA` badge), Realtime.
    - `MODULES`: Vector, Cron, Queues, Features.
    - Each feature uses an outlined monochrome glyph inside a rounded square container.
  - **Right Sidebar (Conversion & Social Proof)**:
    - `CUSTOMER STORIES >` with live client logo preview (Lingo.dev).
    - `COMPARE SUPABASE`: Direct comparison landing pages (`Supabase vs Firebase`, `Supabase vs Heroku Postgres`, `Supabase vs Auth0`).


## 4. Bento Grid Infrastructure Cards

- **Grid Sizing**: 2×2 or 3-column asymmetric layout with `gap: 24px`.
- **Container Styling**: `border-radius: 12px`, background `oklch(0.22 ...)` with subtle inner glow.
- **Embedded Interactive Elements**:
  - Edge Functions card features a 3D wireframe vector globe with a pinned terminal chip: `$ supabase functions deploy`.
  - Realtime card features grid lines and floating cursor badges representing active multi-user collaboration.


### 5. Composants Signature (Pricing Page Innovation (`/pricing`))

- **AI-Era Interoperability Bar**:
  Directly beneath the header, Supabase provides 3 utility actions:
  - `[📋] Copy as Markdown` (instantly copies the complete pricing matrix as pure MD to paste into documentation or LLM context).
  - `[🤖] Ask ChatGPT` (deep-links to ChatGPT with a pre-formatted prompt asking which plan fits the user's workload).
  - `[✳️] Ask Claude` (deep-links to Claude for personalized architectural guidance).
- **Tier Cards**:
  - `FREE`: Clean outline card with ghost green button (`border: 1px solid #3ecf8e`).
  - `PRO`: Badge `"Most Popular"` in soft pill capsule; filled vibrant emerald button `"Get Started"` (`border-radius: 9.7px`, `font-size: 15px`, `font-weight: 500`).
  - Baseline aligned prices: `$0 / month` and `$25 / month` with fine print explicitly detailing included projects.


### 6. Anti-Generic Insights

1. **OKLCH Color Harmony**: Instead of picking arbitrary RGB hex codes, Supabase anchors all background, card, and text colors to the same hue angle (`157.5°`), making the entire dark theme subtly harmonized with the emerald green brand color.
2. **AI Action Chips (`Copy as Markdown`, `Ask Claude`)**: Forward-thinking developer tools recognize that developers consult LLMs when evaluating infrastructure pricing; providing direct export chips eliminates friction.
3. **Comparative Nav Pathways**: Embedding direct competitor comparisons (`vs Firebase`, `vs Auth0`) directly in the global navigation menu dramatically shortens the evaluation cycle for technical decision-makers.

---

## 006 — Raycast (`https://raycast.com`)

> **Sector**: Mac/Windows Productivity Launcher, Command Palette & Developer Utilities  
> **Aesthetic Mood**: Crimson Dark Cyberpunk / Tactile Segmented Controls / Apple Native Polish  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(7, 8, 10)` (`#07080a`) — Extremely deep carbon void with subtle grain/noise texture.
- **Brand Crimson Red**: `rgb(255, 99, 99)` / `#ff6363` highlight on deep crimson textures (`#e53935`).
- **Surface Elevation Cards**: `rgb(16, 17, 19)` (`#101113`) with hairline border `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Secondary / Muted Text**: `rgb(161, 161, 161)` (`#a1a1a1`).
- **Monospace Accent**: Used for numeric prices, discount badges, and keybindings (`font-family: monospace`).


### 2. Typographie

- **Font Family**: `Inter, "Inter Fallback", -apple-system, sans-serif`.
- **Hero Title (`H1`)**:
  - `font-size: 64px`, `font-weight: 600`, `letter-spacing: -1.2px`, `line-height: 1.05`.
- **Command Palette Input**:
  - `font-size: 20px`, `font-weight: 400`, `color: #ffffff`.


## 3. Floating Capsule Header

- **Container**: Floating capsule centered at top:
  - `border-radius: 16px`, `background: rgba(16, 17, 19, 0.75)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255, 255, 255, 0.08)`.
- **Navigation Links**:
  - `Store`, `Pro`, `AI`, `iOS`, `Windows`, `Teams`, `Enterprise`, `Blog`, `Pricing` (`font-size: 14px`, `color: #a1a1a1` hover `#ffffff`).
- **Action Button**:
  - `Download`: White bone button (`#e6e6e6`), `border-radius: 8px`, `padding: 6px 12px`, with native Apple logo.


## 4. Pricing Page Architecture (`/pricing`)

- **Billing Frequency Switcher**:
  - Segmented control capsule: `Monthly` vs `Yearly -20%` (discount badge in compact white capsule with dark text).
- **In-Card Segmented Controls (Sub-Tiers)**:
  - In `Raycast Pro`, a segmented control allows switching between `Pro`, `Plus`, and `Max` inside the card itself, dynamically updating price and AI credit counts without reloading the page.
- **Price Typographic Lockup**:
  - Large `$8` (`font-size: 48px`, bold) paired with monospace subline: `~~$120~~ $96 billed annually`.
- **Button Styling**:
  - `"Start Free Trial"`: Off-white background `rgb(230, 230, 230)`, dark gray text `rgb(47, 48, 49)`, `border-radius: 8px`, `height: 36px`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Sub-Tier Segmented Controls**: Instead of creating 6 confusing pricing columns, Raycast creates 3 primary columns and embeds a tactile segmented pill control (`Pro | Plus | Max`) inside the Pro card to let users configure their plan without clutter.
2. **Tactile 8px Radius**: Consistently applies `8px` corner radiuses to buttons and `16px` to cards, giving software the tactile feel of a high-end native macOS desktop application.
3. **Monospace for Financial & Keybinding Numbers**: All discount badges and keybind shortcuts (`⌘K`, `20%`) use monospace typography, signaling technical rigor.

---

## 007 — Resend (`https://resend.com`)

> **Sector**: Developer Email Infrastructure, Transactional & Marketing Deliverability  
> **Aesthetic Mood**: Dark Luxury Editorial / Klim Domaine Serif / Interactive Slider Pricing  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(0, 0, 0)` (`#000000`) — True deep black infinite background.
- **Primary Text**: `rgb(240, 240, 240)` (`#f0f0f0` — 94% off-white).
- **Secondary / Body Text**: `rgb(161, 161, 161)` (`#a1a1a1`).
- **Warm Golden Highlight**: `#f59e0b` / Amber Gold gradient used for high-impact time words (`"Integrate this morning"`).
- **Surface Elevation Cards**: `rgb(10, 10, 10)` with hairline borders `1px solid rgba(255, 255, 255, 0.08)`.


## 2. Typography & Hierarchy (The Klim Domaine Serif Pairing)

- **Headlines (`H1`, `H2`)**:
  - `font-family: domaine, "Domaine Display", Georgia, serif` (Klim Type Foundry).
  - `font-size: 76.8px` (massive scale).
  - `font-weight: 400` (*Regular serif — graceful high-contrast stroke terminals, evoking high-end editorial magazines*).
  - `line-height: 76.8px` (Strict 1:1 leading).
  - `letter-spacing: -0.768px`.
- **Sub-headlines & In-App UI**:
  - `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
  - `font-size: 18px`, `line-height: 1.5`, `color: #a1a1a1`.


## 3. Mega-Menu Deep Architecture (`Features ▾`)

- **Shape & Elevation**:
  - `border-radius: 20px`, `background: rgba(15, 15, 15, 0.95)`, `backdrop-filter: blur(24px)`, `border: 1px solid rgba(255, 255, 255, 0.1)`.
- **Content Partition**:
  - 3 text columns on left: `Email API`, `Broadcasts`, `Dedicated IPs`, etc.
  - 2 graphic teaser cards on right: `Transactional emails` (3D coordinate matrix) and `Marketing emails` (concentric radar waves).


## 4. Multi-Language SDK Switcher

- **Tab Strip**: Horizontal row of 13 language tiles (`Node.js`, `Serverless`, `Ruby`, `Python`, `PHP`, `CLI`, `Go`, `Rust`, `Java`, `Elixir`, `.NET`, `REST`, `SMTP`).
- **Tile Styling**: Square containers with rounded corners (`border-radius: 12px`), dark surface with `1px solid rgba(255, 255, 255, 0.1)`, active tile highlighted with a white hairline border.


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **Interactive Volume Slider**:
  - A horizontal slider allows dragging from `3,000` to `3,000,000+` emails/month, dynamically shifting the recommended plan cards (`Free`, `Pro`, `Scale`, `Custom`).
- **Card Lockup**:
  - 4 cards side-by-side with large price lockups (`$0 / mo`, `$20 / mo`, `$90 / mo`, `Enterprise`).
  - Button CTA: `border-radius: 16px`, subtle translucent pill with double hairline border.


### 6. Anti-Generic Insights

1. **High-Fashion Editorial Serif for DevTools**: While standard AI templates use generic Inter/Roboto sans-serif for developer products, Resend pairs a technical dark canvas with an ultra-luxurious serif (`Domaine Display` by Klim), instantly establishing brand distinction.
2. **Interactive Volume Slider over Cluttered Tables**: Instead of forcing users to read a 40-row comparison table, Resend centers the decision on an interactive volume slider that dynamically personalizes the price.
3. **Hyper-Tactile 3D Assets**: Resend pairs its minimal typography with photorealistic matte-black physical objects (Rubik's cube, embossed app icons) rather than flat SVG illustrations.

---

## 008 — Railway (`https://railway.app`)

> **Sector**: Cloud Hosting, PaaS Infrastructure & Infrastructure-as-Code  
> **Aesthetic Mood**: Nocturnal Deep Plum / Ghibli-Style Dreamy Canvas / IBM Plex Serif  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(19, 17, 28)` (`#13111c`) — A unique, deep aubergine/midnight-plum dark void. Never generic `#000` or `#111`.
- **Primary Brand Purple**: `rgb(130, 80, 220)` / `#8250dc` for primary CTA accents and status badges.
- **Surface Elevation Cards**: `rgb(26, 23, 38)` (`#1a1726`) with hairline border `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Secondary / Body Text**: `rgb(163, 159, 178)` (`#a39fb2` warm lavender-gray).
- **Background Texture**: Illustrated hand-drawn night sky with stars and dreamy pastel-edged clouds.


## 2. Typography & Hierarchy (IBM Plex Serif)

- **Headlines (`H1`, `H2`)**:
  - `font-family: "IBM Plex Serif", serif, Georgia`.
  - `font-size: 56px`, `line-height: 70px` (1.25 leading ratio).
  - `font-weight: 500` (*Medium serif — humanistic, calming, deliberate contrast to chaotic terminal jargon*).
  - `letter-spacing: -1.4px`.
- **Subtitles & Controls**:
  - `font-family: Inter, sans-serif`.
  - `font-size: 18px`, `line-height: 1.5`, `color: #a39fb2`.


## 3. Mega-Menu Deep Architecture (`Product ▾`)

- **Shape & Container**:
  - `border-radius: 16px`, deep plum dark backdrop with subtle border.
- **2-Pane Structure**:
  - Left Featured Pane: `Features` card with isometric 3D wireframe illustration of connected container cubes.
  - Right Actions Pane: 3 stacked rows:
    - `Agents` (*Deploy with AI coding agents*)
    - `Templates` (*Run your favorite apps on Railway*)
    - `Changelog` (*See the latest features and releases*)


## 4. Interactive Infrastructure Canvas

- **Interactive Service Topology**:
  - Embedded canvas mockup with subtle dot-matrix grid (`background-image: radial-gradient(...)`).
  - Circular status dots, connecting bezier cables, and service tiles (`Web`, `Postgres`, `Redis`).


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **Banner Hero Card (`Free`)**:
  - A full-width horizontal container for the Free tier (`$0 per month`), separating the entry-level trial from production tiers.
  - Clear checkmarks: `Start with a 30-day free trial with $5 credits, then $1 per month`, `0.5 GB volume`, `Community support`.
  - CTA Button: `"Deploy a new project"` (`background: purple gradient`, `border-radius: 8px`) + reassure subcopy `"No credit card required"`.
- **Tier Cards (`Hobby`, `Pro`, `Enterprise`)**:
  - Explicit terminology: `"minimum usage"` rather than confusing per-seat charges (`$5 minimum usage`, `$20 minimum usage`).
  - Pro card visually elevated with warmer aubergine highlight background.


### 6. Anti-Generic Insights

1. **Emotional Palette (Nocturnal Plum vs. Corporate Blue)**: By choosing a deep plum-black (`#13111c`) instead of predictable dark slate or harsh pure black, Railway projects calm, peace, and serenity (`"Ship software peacefully"`).
2. **IBM Plex Serif Authority**: Using a literary, well-proportioned serif font for a cloud deployment platform makes it feel mature, trustworthy, and human.
3. **Usage-Based Transparency**: Directly visualizes CPU and RAM consumption curves with step-function graphs on the pricing page, explaining usage-based billing visually.

---

## 009 — PlanetScale (`https://planetscale.com`)

> **Sector**: Serverless MySQL/Postgres Database Infrastructure & Vitess Sharding  
> **Aesthetic Mood**: Technical Monospace Brutalism / High-Contrast Terminal / Agent-First SQL  


### 1. Palette & Surfaces

- **Root Canvas Background**: `#000000` to `#111111` (Deep terminal black).
- **Primary Brand Orange**: `rgb(243, 88, 21)` (`#f35815` — High-visibility industrial hazard orange).
- **Yellow Announcement Banner**: `#facc15` (Warning yellow) with black bold text and high-contrast pill button.
- **Hairline Wireframe Borders**: `1px solid #262626` / `1px solid rgba(255, 255, 255, 0.1)`.
- **Text Color**: `rgb(225, 225, 225)` (`#e1e1e1`) off-white terminal output.
- **Link Blue**: `#38bdf8` / Sky Blue inline anchors.


## 2. Typography & Hierarchy (100% Monospace)

- **Global Font Family**:
  - `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`.
  - Zero sans-serif across the entire marketing site—pure terminal typography.
- **Heading Marker**:
  - Headings are preceded by a vertical orange accent bar (`border-left: 2px solid #ff5c00; padding-left: 12px`).
- **Body & Explanations**:
  - `font-size: 15px`, `line-height: 1.6`, monospace letter-spacing.


## 3. Strict Brutalist Navigation & Buttons

- **Corner Radiuses**:
  - `border-radius: 0px` across all buttons, dropdown menus, and client table cells (*Zero rounding — true engineering brutalism*).
- **Buttons**:
  - `Get in touch`: Filled industrial orange `#f35815`, white text, `border-radius: 0px`, `padding: 0 8px`, `height: 36px`.
  - `View sandbox`: Transparent background with crisp orange wire border `1px solid #f35815`.
- **Dropdown Menu (`Platform ▾`)**:
  - Monospace text menu, black background, rectangular border `1px solid #ff5c00` with zero rounded corners.


## 4. Agent-First SQL Pricing (`/pricing`)

- **Interactive SQL Pricing Callout**:
  - A prominent blue wireframe box stating:
    `"You and your agent can query Vitess, Neki, and Postgres cluster pricing using SQL. Instructions and an agent-friendly version of the available catalog are in pricing.md. ▶ Connect to pricing database"`.
  - Exposes machine-readable endpoints and SQL queries directly on the marketing landing page, designed explicitly for AI agents and developer scripts.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Radical Monospace Identity**: While 99% of SaaS templates use generic sans-serif (Inter, Poppins), PlanetScale adopts 100% monospace typography, immediately projecting high-performance database engineering.
2. **0px Corner Radius**: Banning all rounded corners creates a sharp, uncompromising terminal aesthetic that stands out in an ocean of soft-rounded AI designs.
3. **Agent-Readable Pricing (`pricing.md`)**: A pioneering design pattern for 2026—acknowledging that AI coding agents evaluate cloud infrastructure, and providing explicit Markdown files and database connections for machine consumption.

---

## 010 — Tailwind CSS (`https://tailwindcss.com`)

> **Sector**: Utility-First CSS Framework, Frontend Tooling & Design Systems  
> **Aesthetic Mood**: Technical Blueprint / Architectural Crosshatch / Lab Color Space  


### 1. Palette & Surfaces

- **Root Canvas Background**: `#0b1120` (Deep midnight slate blue, signature Tailwind palette).
- **Brand Cyan Accent**: `#38bdf8` (`text-sky-400` / `#0284c7`).
- **Blueprint Crosshatch Texture**: Subtle diagonal 45° crosshatch patterns and geometric dimension lines framing the hero viewport.
- **Surface Elevation Cards**: `lab(27.11 -0.95 -12.32)` (Slate dark card) with hairline borders `1px solid rgba(255, 255, 255, 0.1)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Blueprint Annotations**: `rgb(100, 116, 139)` (`#64748b` monospace annotations directly above headings).


## 2. Typography & Hierarchy (Inter Display)

- **Headlines (`H1`, `H2`)**:
  - `font-family: inter, "inter Fallback", system-ui, sans-serif`.
  - `font-size: 60px`, `line-height: 60px` (Strict 1:1 leading).
  - `font-weight: 400` (*Regular weight! Consistent with Vercel and Linear: modern elite tools let large size and tight tracking carry the hierarchy, avoiding heavy bold*).
  - `letter-spacing: -3px` (`tracking-tighter` — -5% letter spacing).
- **Blueprint Eyebrow Micro-Labels**:
  - `font-family: monospace`.
  - Displays literal utility classes directly above components (`text-6xl text-white tracking-tighter text-balance`), reinforcing the product's value prop in the design itself.


## 3. Interactive Split-Pane Editor (The Hero Anchor)

- **Left Pane (Syntax Highlighted Code)**:
  - macOS window header with 3 circular gray buttons (`rgb(71, 85, 105)`).
  - Line numbers in muted gray.
  - HTML tags in pink `#f43f5e`, utility classes in sky blue `#38bdf8`, text content in white.
- **Right Pane (Live Render Canvas)**:
  - Album cover vinyl sleeve card ("Class Warfare") that updates dynamically with zero layout latency, illustrating the direct tactile connection between code and UI.


### 4. Header & Navigation

- **Left Section**: Tailwind wave mark in vibrant sky blue + compact version pill (`v4.3 ▾`).
- **Center / Right Navigation**:
  - `Docs`, `Play`, `Blog`, `Showcase`, `Partners`, `Plus` (highlighted in dashed border pill).
  - `Quick search` input pill with internal shortcut badge `Ctrl K` / `⌘K`.
- **CTA Button**:
  - `"Get started"`: `border-radius: 32px` (pill), `font-size: 14px`, `font-weight: 600`, dark slate surface `background: #1e293b`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Meta-Design Blueprint Annotations**: Instead of generic marketing subtitles, Tailwind labels its own headers with literal utility class names in monospace font (`text-6xl text-white tracking-tighter`), merging product documentation into marketing design.
2. **Regular Weight at 60px**: AI templates default to heavy 700/800 bold fonts for heroes. Tailwind proves that a clean, sharp regular `font-weight: 400` with negative tracking looks infinitely more professional.
3. **Architectural Grid Dimension Lines**: Decorative borders mimic physical architectural blueprints (crosshatches, tick marks, dashed lines), communicating engineering precision without relying on cheesy generic 3D illustrations.

---

## 011 — Cloudflare (`https://cloudflare.com`)

> **Sector**: Global CDN, Edge Computing, DDoS Mitigation & Cybersecurity  
> **Aesthetic Mood**: High-Impact Signal Orange / Curved Megaboard / STK Bureau Sans  


### 1. Palette & Surfaces

- **Brand Signal Orange**: `#fa6400` / `#f38020` (Cloudflare Iconic Orange). Used as an immense tactile curved billboard hero container rather than just a small accent dot.
- **Root Background**: `#141414` (Deep charcoal matte surface framing the orange card).
- **Primary Text on Orange**: `#ffffff` (Pure crisp white with subtle dot matrix halo).
- **Primary Text on Dark**: `rgb(240, 227, 222)` (`#f0e3de` soft sand off-white).
- **Panic Red Signal**: `rgb(239, 68, 68)` for DDoS urgency states.


## 2. Typography & Hierarchy (STK Bureau Sans)

- **Headlines (`H1`, `H2`)**:
  - `font-family: "STK Bureau Sans", sans-serif`.
  - `font-size: 56px`, `line-height: 1.1`, `font-weight: 500`.
  - `letter-spacing: -1.4px` (Tight negative tracking).
- **Subtitles**:
  - `font-size: 18px`, `line-height: 1.5`, centered under title.


## 3. Full-Screen Nav Modal Transition (`Products ↕`)

- **Full-Screen Catalog Transition**:
  - Instead of a tiny floating dropdown, clicking `Products ↕` smoothly slides open an expansive full-viewport catalog categorized with a segmented pill bar:
    `All Products` (active orange) | `Compute` | `Storage` | `AI` | `Media` | `Security` | `Network` | `SASE / Zero Trust`.
- **Card Matrix**:
  - 4-column wireframe card layout with thin hairline borders `1px solid rgba(255, 255, 255, 0.1)`.


## 4. Emergency UX Architecture ("Under Attack?")

- **Dedicated Crisis CTA**:
  - Positioned directly in the top navigation: `[!] Under attack?`.
  - Solves the critical user journey where a company's site is actively down under a DDoS attack and needs 1-click mitigation without wading through sales marketing jargon.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Massive Monolithic Color Billboard**: Rather than timidly using a 2px orange border or a 100px circle gradient, Cloudflare wraps the entire top half of the screen in a massive curved orange container (`border-radius: 24px`), creating instant high-impact memorability.
2. **Context-Driven Emergency Utility**: AI templates blindly follow standard `Home / Features / Pricing / Sign In` menus. Cloudflare designs for real user stress by elevating `Under attack?` into the top header.
3. **STK Bureau Sans Distinction**: Moving away from ubiquitous Inter, STK Bureau Sans brings architectural weight and industrial authority to cybersecurity copy.

---

## 012 — Postman (`https://postman.com`)

> **Sector**: API Lifecycle, Developer Collaboration, Testing & Agent Simulation  
> **Aesthetic Mood**: Grilli Type Swiss Precision / Hazard Orange Accents / Multi-Platform Desktop Focus  


### 1. Palette & Surfaces

- **Brand Signal Orange**: `rgb(224, 83, 31)` (`#e0531f` / `#ff6c37` — Postman Astronaut Orange).
- **Hero Backdrop**: Warm dark chocolate-to-black radial gradient (`#1c100b` fading to `#0a0a0a`), reflecting warm orange atmospheric light.
- **Surface Elevation Cards**: Light off-white cards on the pricing page (`#ffffff`) with subtle 1px border.
- **Primary Text**: `rgb(33, 33, 33)` (`#212121` dark charcoal) on light surfaces; `#ffffff` on dark surfaces.
- **Muted Text**: `rgb(107, 107, 107)`.


## 2. Typography & Hierarchy (GT Standard by Grilli Type)

- **Headlines (`H1`, `H2`)**:
  - `font-family: gtStandard, "gtStandard Fallback", system-ui, sans-serif` (Grilli Type Swiss Grotesk).
  - `font-size: 55px`, `font-weight: 700`, `letter-spacing: 0.6px`.
- **Animated Headline Sequence**:
  - Dynamic typewriter swap between `"API context"`, `"API security"`, and `"API simulations"` with a trailing terminal cursor `_`.


## 3. Developer Installation & Agent Prompts

- **Unified CLI Pill**:
  - Encapsulated pill container: `npm ▾` selector dropdown + code snippet `$ npm install -g postman-cli` + 1-click copy icon `[📋]`.
- **Agent Initialization Prompt**:
  - Pinned label: `INSTALL FOR YOUR AGENTS AND START WITH postman init [📋]`.
- **Cross-Platform OS Downloads**:
  - 3 adjacent circular badges with white hairline borders for `Windows`, `macOS`, and `Linux`.


## 4. Pricing Architecture (`/pricing`)

- **Frequency Toggle Pill**:
  - Capsule toggle: `Pay monthly` vs `Pay annually (Save up to 25%)` in green accent.
- **Card Matrix (`Free`, `Solo`, `Team`, `Enterprise`)**:
  - Plan cards feature an **AI credits allocation row** as a primary metric (`100 AI credits`, `400 AI credits / month`).
  - Button CTA: Compact rectangular button with slight rounding (`border-radius: 5px`, `font-size: 14px`, `font-weight: 600`, `padding: 4px 12px`).


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **GT Standard Grotesk Identity**: Rather than defaulting to Inter, Postman relies on Grilli Type's GT Standard, providing distinct Swiss geometric personality and tight glyph geometry.
2. **Compact 5px Radius**: Avoids the "bubbly" look of novice AI layouts by keeping button corners crisp at `5px` and padding tight (`4px 12px`), optimizing for information density.
3. **Agent Integration Highlights**: Elevates AI coding agents (`postman init`) directly into the hero above the fold alongside traditional human CLI installation commands.

---

## 013 — Docker (`https://docker.com`)

> **Sector**: Containerization, Container Runtimes & Agent Sandboxing Infrastructure  
> **Aesthetic Mood**: Royal Maritime Blue / Compact Functionalist / Inverted Full-Color Most Popular Card  


### 1. Palette & Surfaces

- **Brand Maritime Blue**: `rgb(37, 96, 255)` (`#2560ff` / `#1d63ed` — Iconic Docker Blue).
- **Root Light Background**: `rgb(249, 250, 251)` (`#f9fafb` soft zinc white).
- **Hero Dark Stage**: Deep carbon black `#0b0f19` framing 3D depth-of-field floating code symbols.
- **Primary Text**: `rgb(44, 51, 63)` (`#2c333f` slate navy) on light surfaces; `#ffffff` on dark.
- **Surface Elevation Borders**: `1px solid #e5e7eb` (`border-zinc-200`).


## 2. Typography & Hierarchy (Repro + Inter)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Repro, Helvetica, Arial, sans-serif` (Docker's geometric sans font).
  - `font-size: 48px`, `font-weight: 500`, `letter-spacing: -0.6px`.
- **Body & Subtitles**:
  - `font-family: Inter, Helvetica, sans-serif`.
  - `font-size: 16px`, `line-height: 1.5`.


## 3. Positioning Pivot: AI Agent Sandboxes

- **Hero Narrative Pivot**:
  - `"Trust Docker for the Agents You Don't — Docker securely contains autonomous agents so you can confidently build, ship, and run on trust."`
  - Re-contextualizes traditional OS containerization as security isolation layers for autonomous AI coding agents.


## 4. Pricing Architecture (`/pricing`)

- **Inverted Full-Color "Most Popular" Card**:
  - While plans 1, 2, and 4 use standard white backgrounds with gray borders, the **`Docker Team`** plan is rendered with a **full-surface vibrant royal blue background (`#2560ff`)**, white text, and a dark navy top banner (`"MOST POPULAR"`).
  - Button inside the highlighted card: Solid white with royal blue text (`border-radius: 4px`, `font-size: 12px`, `padding: 8px 12px`).
- **Compact 4px Border Radius**:
  - Buttons and input controls maintain a sharp, space-efficient `4px` corner radius.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Full-Saturation Feature Card Inversion**: Instead of putting a subtle 1px border around the recommended plan, Docker turns the entire card into a saturated brand blue block, maximizing visual contrast (Von Restorff Effect).
2. **Compact 12px/4px Controls**: Keeps button typography at `12px` and border-radius at `4px`, signaling tool density and space optimization for technical engineers.
3. **Enterprise Hardened Callout**: Direct banner integration for security-focused features (`"Docker Hardened Images, now accessible to everyone"`).

---

## 014 — Sentry (`https://sentry.io`)

> **Sector**: Error Tracking, Performance Monitoring, Session Replay & MCP Agent Observability  
> **Aesthetic Mood**: Irreverent Developer Gothic / Analog Texture / Rubik Rounded Grotesk  


### 1. Palette & Surfaces

- **Deep Midnight Purple**: `rgb(24, 15, 45)` (`#180f2d` / `#23173d`) — A warm, textured plum-violet canvas with analog stipple grain and brushstrokes.
- **Neon Pink Accent**: `#f43f5e` / `#ff3366` — Used for diagonal rotated emphasis words (`"Code breaks"`).
- **Secondary Lime Green**: `#84cc16` / `#22c55e` — Used for interactive tracing and AI reasoning badges.
- **Surface Elevation**: Crisp pure white `#ffffff` cards on the pricing grid to create maximum figure-ground contrast against the dark violet canvas.
- **Text Color**: `rgb(54, 45, 89)` (`#362d59` deep violet charcoal) on light; `#ffffff` on dark.


## 2. Typography & Hierarchy (Rubik Font Family)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Rubik, -apple-system, sans-serif`.
  - `font-size: 56px` (marketing hero) / `40px` (pricing).
  - `font-weight: 700`.
- **Playful Micro-Interactions**:
  - Tilted words (`transform: rotate(-3deg)`) in neon colors inside headlines to visually represent breaking code.


## 3. Personality & Tone Controls ("Marketing Mode")

- **The Bullshit Toggle ("Marketing Mode ON/OFF")**:
  - A persistent toggle switch in the top-right corner labeled `Marketing Mode [ON/OFF]`.
  - Flipping it swaps corporate marketing fluff into raw, unfiltered developer truths, embodying Sentry's irreverent brand voice.
- **Sentry MCP Callout**:
  - Pinned announcement: `"Sentry MCP: fix production issues right from your LLM →"`.


## 4. Pricing Architecture (`/pricing`)

- **Card Grid (`Developer`, `Team`, `Business`, `Enterprise`)**:
  - Clean white floating rectangular cards (`border-radius: 8px`) against a painted plum background.
  - Transparent pricing: `Free`, `$26/mo`, `$80/mo`, `Custom`.
  - Monthly vs. Annual toggle with subtle italic text: `"Save with annual"`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Rubik Font & Casual Confidence**: AI templates always pick sterile corporate fonts. Sentry uses Rubik with its subtly rounded stroke terminals, conveying warmth, irreverence, and engineering approachability.
2. **Intentional Graphic Imperfections**: Hand-drawn brushstrokes, diagonal text rotations, and comic-style retro sci-fi illustrations inject real humanity and craft into a deep technical tool.
3. **Product Truth over Hype**: Using copy like `"considered 'not bad' by millions of developers"` builds immediate trust with cynical engineers fatigued by generic AI buzzwords.

---

## 015 — Datadog (`https://datadoghq.com`)

> **Sector**: Cloud-Scale Observability, Infrastructure APM & AI Agent Monitoring  
> **Aesthetic Mood**: Klim National Grotesk / Enterprise Purple Accent / Modular Tabular Pricing  


### 1. Palette & Surfaces

- **Brand Regal Purple**: `rgb(99, 44, 166)` (`#632ca6` / `#774aa4` — Datadog Purple).
- **Canvas Background**:
  - Primary Surface: `#ffffff` crisp white.
  - Hero Lavender Tint: Soft lilac wash `#f0ebf8` (`oklch(0.94 0.03 300)`).
- **Primary Text**: `rgb(33, 37, 41)` (`#212529` dark charcoal).
- **Secondary Gray**: `rgb(108, 117, 125)` (`#6c757d`).
- **Data Visualization Accents**:
  - Hexagonal Node Green: `#10b981`
  - High Latency Alert Orange: `#f97316`
  - Critical Outage Red: `#ef4444`


## 2. Typography & Hierarchy (National by Klim Type Foundry)

- **Headlines & Menus**:
  - `font-family: nationalweb, Helvetica, Arial, sans-serif` (National Grotesk by Klim).
  - Navigation links styled in uppercase (`PRODUCT`, `CUSTOMERS`, `PRICING`, `SOLUTIONS`, `DOCS`).
- **Hero Title (`H1`)**:
  - `font-size: 52px` (desktop), `font-weight: 700`, dense line-height `1.15`.


## 3. Mega-Catalog Navigation (Enterprise Scale)

- **Taxonomy Depth**:
  - Spans over 50+ individual sub-products organized into major pillars:
    - `Infrastructure Monitoring` (Containers, Kubernetes, Serverless, GPU).
    - `Application Performance Monitoring (APM)` (Universal Service, Profiler, Tracing).
    - `Agent & AI Observability` (MCP Server, Bits AI, Agent Directory, Pup CLI).
    - `Security & Cloud SIEM`.
    - `Real User Monitoring & Product Analytics`.


## 4. Multi-Product Modular Pricing Architecture (`/pricing`)

- **Sidebar Selector Pattern**:
  - Vertical left sidebar listing every standalone product line (`AI`, `Infrastructure`, `APM`, `Logs`).
  - Selecting a category swaps the central 3-tier card matrix (`Basic`, `Pro`, `Enterprise`) to reflect unit metrics specific to that service (e.g. `$15 Per host / month` for infra, vs. volume per GB for logs).
- **Bimodal Button Hierarchy**:
  - `FREE TRIAL`: Filled purple button with `4px` radius.
  - `SEE THE PLATFORM`: Outline transparent button with video play icon `▶`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Modular Multi-Product Pricing Matrix**: For complex platforms with 15+ billable components, presenting a single 3-card pricing table is a failure mode. Datadog's sidebar-driven modular card switcher allows granular cost modeling per host.
2. **Klim National Brand Consistency**: Adopting National across marketing and in-app monitoring dashboards gives technical graphs and data tables an authoritative, clean Swiss aesthetic.
3. **Isometric Hexagonal Server Topology**: Visualizes infrastructure using hexagonal cluster maps rather than generic stock server racks.

---

## 016 — HashiCorp (`https://hashicorp.com`)

> **Sector**: Multi-Cloud Infrastructure Automation (Terraform, Vault, Consul, Nomad)  
> **Aesthetic Mood**: IBM Monolithic Architectural / Custom HashiCorp Sans / Constellation Vectors  


### 1. Palette & Surfaces

- **Root Canvas**: Deep cosmic blue-violet gradient (`#0d0b21` to `#161338`) representing distributed multi-cloud nodes.
- **Brand Electric Blue**: `#1563ff` / `#0052cc` for primary actions.
- **Product Accent Badges**:
  - Terraform: Purple `#844fba`
  - Vault: Gold `#ffc107`
  - Consul: Crimson `#e03c5b`
  - Nomad: Teal `#00bc7e`
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`) on dark surfaces; deep charcoal `rgb(59, 61, 69)` on light.


## 2. Typography & Hierarchy (HashiCorp Sans)

- **Headlines (`H1`, `H2`)**:
  - `font-family: __hashicorpSans, sans-serif` (Custom corporate geometric sans).
  - `font-size: 82px` (*Colossal enterprise display scale*).
  - `line-height: 96px`, `font-weight: 600`.
- **Subtitles**:
  - `font-size: 20px`, `line-height: 1.5`, `color: rgba(255, 255, 255, 0.8)`.


## 3. Persistent Guided Problem-Solver Widget

- **Floating Onboarding Dock**:
  - A persistent docked card in the right corner: `"What would you like to solve with Vault / Terraform?"`.
  - Replaces traditional generic contact forms with immediate self-selection paths:
    - `Find the right plan for my team`
    - `Try it for free`
    - `Consult a Vault expert`
    - `Get support`


## 4. Multi-Product Architecture

- **Product Suite Navigation**:
  - `Terraform` (Infrastructure-as-Code)
  - `Vault` (Secrets & Encryption Management)
  - `Consul` (Service Mesh & Networking)
  - `Nomad` (Workload Orchestration)
- **Buttons**:
  - `border-radius: 5px`, `font-size: 16px`, `padding: 11px 19px`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Colossal 82px Display Typography**: Demonstrates true enterprise authority through gigantic, well-proportioned geometric typography (`82px / 96px`).
2. **Interactive Guided Intent Cards**: Guides incoming enterprise traffic immediately based on problem/intent rather than forcing them to navigate through product marketing hierarchies.
3. **Product Suite Color Encoding**: Distinct color identities for each tool within a unified multi-cloud design language.

---

## 017 — Prisma (`https://prisma.io`)

> **Sector**: Next-Gen TypeScript ORM, Database Infrastructure & Agent Hosting  
> **Aesthetic Mood**: Warm Editorial Paper Texture / Sora Geometric Sans / Multicolored Gradient Hairline  


### 1. Palette & Surfaces

- **Paper Canvas Background**: Warm textured ivory/parchment surface (`#faf8f5` / `lab(100 0 0)` with ambient subtle gradients) creating an inviting physical magazine feel.
- **Brand Spectrum Gradient**: Diagonal tricolor stripe (Crimson `#ea580c` $\rightarrow$ Amber Yellow `#facc15` $\rightarrow$ Cyan Teal `#06b6d4`).
- **Surface Cards**: Pure white `#ffffff` cards elevated above the warm textured canvas with soft dual-layer drop shadows (`0 4px 20px rgba(0, 0, 0, 0.05)`).
- **Primary Text**: `rgb(58, 59, 60)` (`#3a3b3c` charcoal, avoiding harsh `#000` glare).
- **CTA Black**: `rgb(21, 21, 21)` (`#151515`).


## 2. Typography & Hierarchy (Sora + Inter)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Sora, "Sora Fallback", sans-serif`.
  - `font-size: 52px` (hero) / `41.7px` (pricing).
  - `font-weight: 500` (*Deliberate medium weight — spacious, friendly, modern*).
  - `line-height: 1.06`.
- **Body & Controls**:
  - `font-family: Inter, sans-serif`.
  - `font-size: 16px`, `line-height: 1.55`, `color: #4b5563`.


## 3. Product Positioning Pivot: Agent-First Infrastructure

- **Hero Value Proposition**:
  - `"Your TypeScript app, from prompt to production"`
  - `"Give your coding agent a type-safe ORM, managed Postgres, and app hosting that work together natively."`
  - Explicit bullet checks: `✓ A CLI and API your agent drives natively`, `✓ The ORM is free, always`.


## 4. Skeuomorphic Application Console Mockup

- **Console Frame (`console.prisma.io`)**:
  - macOS window chrome with top URL bar capsule.
  - 2 primary onboarding actions displayed inside the canvas:
    1. `Connect a GitHub repo` (standard manual developer path).
    2. `Deploy with your agent` (highlighting the terminal command `$ npx prisma deploy module.ts █`).


### 5. Composants Signature (Pricing Matrix Architecture (`/pricing`))

- **4-Tier Layout (`Free`, `Starter`, `Pro`, `Business`)**:
  - `Starter` Card: Highlighted as `"Most popular"` with a **multicolored gradient hairline border** (orange-to-teal) tracing the card perimeter.
  - Granular usage metrics: Request volume (`5M requests / month, then $1 per million`) + Memory compute (`$0.006 per GB-hour memory`).
  - Transparent pricing: `$0`, `$10/mo`, `$49/mo`, `$129/mo`.


### 6. Anti-Generic Insights

1. **Warm Ivory Paper Aesthetic**: In an industry flooded with identical cold blue/dark slate templates, Prisma's warm textured paper tone (`#faf8f5`) with ambient colorful edge gradients creates instant warmth and approachable craft.
2. **Sora Font Character**: Using Sora gives headings a distinct open, geometric personality that separates Prisma from standard Inter-based SaaS templates.
3. **Multicolored Gradient Hairline Border**: Applying a subtle gradient stroke (`1px solid transparent; border-image: linear-gradient(...)`) on the featured card guides the eye without relying on loud, distracting solid fills.

---

## 018 — Clerk (`https://clerk.com`)

> **Sector**: Complete User Authentication, Multi-Tenancy & Agent Access Layer  
> **Aesthetic Mood**: Swiss Typefaces Grotesk / Electric Indigo `#6c47ff` / Seamless Inset Components  


### 1. Palette & Surfaces

- **Brand Electric Indigo**: `rgb(108, 71, 255)` (`#6c47ff` — Clerk Violet).
- **Dual Surface Theming**:
  - Marketing Home: Clean, crisp, luminous white `#ffffff` canvas with subtle background glow.
  - Pricing & Console: Deep obsidian dark slate `rgb(19, 19, 22)` (`#131316`) with circuit board filigree.
- **Primary Text**: Pure white `#ffffff` on dark; `#111827` on light.
- **Surface Elevation Cards**: `rgb(24, 24, 27)` (`#18181b`) with hairline border `1px solid rgba(255, 255, 255, 0.08)`.


## 2. Typography & Hierarchy (Suisse Int'l by Swiss Typefaces)

- **Headlines (`H1`, `H2`)**:
  - `font-family: suisse, "suisse Fallback", sans-serif` (Suisse Int'l by Swiss Typefaces).
  - `font-size: 64px`, `font-weight: 700`, `line-height: 71.68px`, `letter-spacing: -2.24px`.
- **Numeric Figures**:
  - `font-family: geistNumbers, monospace` for tabular currency alignment.
- **Sub-Headlines**:
  - `font-size: 18px`, `line-height: 1.5`, `color: #6b7280`.


## 3. The "Copy Prompt" Component (AI-Native Hero Pill)

- **Integrated Prompt Pill**:
  - Hero features a compact horizontal capsule grouping 4 AI/IDE tool icons (Cursor, v0, VS Code, Zed) linked to a pill button: `[Copy prompt]`.
  - Enables developers to paste Clerk's exact setup prompt directly into AI coding agents with zero manual typing.


## 4. Interactive Live Auth Card Mockup

- **Authentic Sign-In Card**:
  - Embeds the literal Clerk `<SignIn />` React component directly in the hero.
  - Social Auth Button: `Continue with Google` with a contextual micro-pill badge: `Last used` (cognitive friction reduction).


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **Card Structure (`Hobby`, `Pro`, `Enterprise`)**:
  - `Hobby`: `Free` ("No credit card required"), vibrant electric violet button `Start building for free` (`background: #6c47ff`, `border-radius: 6px`, `font-size: 13px`, `padding: 0 12px`).
  - `Pro`: Embedded inline segmented toggle (`Monthly | Annual`) tucked directly inside the plan card header.
  - Granular MAU metric: `50,000 MRU included per app (Additional $0.02/mo each)`.


### 6. Anti-Generic Insights

1. **Suisse Int'l Authority**: Using Swiss Typefaces' Suisse Int'l provides razor-sharp modernist proportion and neutral legibility that instantly distinguishes the site from generic web fonts.
2. **Contextual Badge ("Last used")**: Embedding realistic micro-interactions (e.g. indicating which OAuth provider the user logged in with last) proves deep domain craft.
3. **Dedicated Agent Authentication Tier**: Pioneers `"Agent Authentication"` as a first-class product pillar alongside traditional user and enterprise SSO.

---

## 019 — Mintlify (`https://mintlify.com`)

> **Sector**: AI-Native Developer Documentation, MCP Servers & Knowledge Bases  
> **Aesthetic Mood**: Dinamo Arizona Flare / Bioluminescent Mint Wireframe / Agent-First Metrics  


### 1. Palette & Surfaces

- **Deep Evergreen Void**: `lab(2.42 -0.16 -0.47)` (`#060907` deep forest black with microscopic emerald tint).
- **Brand Mint Green**: `#0cce6b` / `#10b981` (Mintlify Neon Mint).
- **Bioluminescent Wireframe Curves**: Flowing 3D bezier spline lines glowing across the hero background.
- **Surface Elevation Cards**: `lab(8 0 0)` (`#121413`) with hairline border `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).


## 2. Typography & Hierarchy (Arizona Flare by ABC Dinamo)

- **Headlines (`H1`, `H2`)**:
  - `font-family: arizonaFlare, "arizonaFlare Fallback", serif` (Arizona Flare by ABC Dinamo).
  - `font-size: 56px` (marketing hero) / `44px` (pricing).
  - `font-weight: 400` (*Delicate flared serif terminals combining calligraphic warmth with digital razor precision*).
  - `letter-spacing: -0.8px`.
- **Body & Controls**:
  - `font-family: inter, sans-serif`.
  - `font-size: 16px`, `line-height: 1.55`, `color: #9ca3af`.


## 3. Real-Time Agent Metric Telemetry

- **Live Autonomous Agent Tracker Badge**:
  - Pinned hero capsule: `Agent traffic 77.8308% >`.
  - Real-time ticker streaming the proportion of documentation queries executed by autonomous AI agents (Claude, Cursor, Copilot) vs. human browsers.


## 4. Mega-Menu Deep Architecture (`Products ▾`)

- **4-Column Clean Layout**:
  - `Products`: `Docs`, `Base Beta` (*Agent-human workspace*).
  - `Automations`: `Automations`, `Agent` (*Autonomous agents for every task*), `Assistant`.
  - `Integrations`: `Connections`, `MCP server` (*Fully managed MCP servers*).
  - `Customer Feature Card`: Large orange card featuring Anthropic's brand icon and customer story link.


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **3 Core Tiers**:
  - `Starter`: `$0 / mo` (5 editor seats, custom domain, web editor).
  - `Pro`: `$450 / mo` (Unlimited editor seats, embedded `Agent`, `Assistant`, and segmented toggle `Monthly | Annual`).
  - `Enterprise`: `Contact us` (SSO, SCIM, RBAC, SLA).
- **Button Styling**:
  - `border-radius: 4px`, `font-size: 14px`, `font-weight: 500`, `padding: 8px 14px`.


### 6. Anti-Generic Insights

1. **ABC Dinamo Arizona Flare Personality**: Breaking away from generic tech fonts, Arizona Flare's subtle flared stroke ends give technical documentation a literary, crafted soul.
2. **First-Party Live Machine Telemetry**: Embedding live stats (`Agent traffic 77.8%`) into marketing copy proves product utility without empty buzzwords.
3. **Dedicated MCP Server Ecosystem**: Elevates Model Context Protocol (MCP) servers into the main product navigation, signaling vanguard developer alignment.

---

## 020 — GitLab (`https://about.gitlab.com`)

> **Sector**: Complete DevSecOps Platform, CI/CD & Agentic Orchestration  
> **Aesthetic Mood**: GitLab Sans 660 Precision / Tangerine-to-Violet Gradients / Hosting Mode Tabs  


### 1. Palette & Surfaces

- **Brand Tangerine Orange**: `#e24329` (GitLab Fox Orange) paired with Deep Violet `#7759c2`.
- **Canvas Colors**:
  - Marketing Hero: Dark carbon grid `#110d1a` with dot-matrix pattern and warm sunset edge gradients.
  - Pricing & Content Pages: Light crisp surface `#ffffff` with dark aubergine typography `rgb(23, 19, 33)`.
- **Primary Text**: `rgb(23, 19, 33)` (`#171321`).
- **Accent Highlight**: Saturated Orange hairline border `2px solid #e24329` around the most popular plan.


## 2. Typography & Hierarchy (GitLab Sans Variable)

- **Font Family**: `"GitLab Sans", sans-serif` (GitLab's custom variable grotesk).
- **Headlines (`H1`, `H2`)**:
  - `font-size: 64px`, `line-height: 1.1`.
  - `font-weight: 660` (*Precise intermediate variable weight — authoritative and dense*).
  - `letter-spacing: -1.92px`.
- **Body & Subtitles**:
  - `font-size: 18px`, `line-height: 1.5`, `color: #4b5563`.


## 3. Hosting Architecture Switcher (SaaS vs. Self-Hosted)

- **Top-Level Hosting Segmented Tabs**:
  - Distinct tab group preceding the pricing matrix:
    `GitLab.com` (SaaS active in solid black) | `Self Managed` (On-Prem / Kubernetes) | `Dedicated` (Single-Tenant Isolated Cloud).
  - Clarifies enterprise deployment topology before users evaluate plan features.


## 4. Dual-Action Pricing Card Buttons

- **Bimodal Primary CTA Pair**:
  - In the `Premium` ($29) card, rather than a single button, GitLab places two side-by-side action buttons:
    1. `Buy Premium`: Solid dark `#171321`, white text (`font-weight: 660`, `border-radius: 4px`).
    2. `Try for free`: White background with dark border (`1px solid #171321`).
  - Accommodates both ready-to-buy corporate procurement and technical evaluation simultaneously.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **GitLab Sans Variable Weight 660**: The custom `660` weight gives headings a substantial, monolithic presence without degrading into generic bold font blobiness.
2. **Pre-Pricing Deployment Tabs (`SaaS | Self-Managed | Dedicated`)**: Enterprise infrastructure buyers need to select their tenancy model first; designing tabs above the pricing table prevents pricing model confusion.
3. **Integrated Dual CTAs (`Buy` + `Free Trial`)**: Acknowledges that enterprise software adoption happens through two parallel funnels (direct purchase vs. self-serve evaluation).

---

## 021 — Pulumi (`https://pulumi.com`)

> **Sector**: Infrastructure as Code (IaC), Multi-Language Cloud Engineering & Agentic Deployment  
> **Aesthetic Mood**: Dual-Surface (Light Marketing / Dark Technical Pricing) / Deep Plum `#1f1b21` / Isometric Line Vectors  


### 1. Palette & Surfaces

- **Dual Canvas Mode**:
  - Homepage: Crisp light white `#ffffff` canvas with isometric violet wireframe diagrams.
  - Pricing & Documentation: Deep plum-charcoal surface `rgb(31, 27, 33)` (`#1f1b21`) with topographic contour lines.
- **Brand Violet**: `rgb(90, 48, 197)` (`#5a30c5`).
- **Accent Tricolor Points**: Yellow, red, and violet isometric cube dots.
- **Primary Text**: Dark encre `#0f172a` on light; `#fafafa` on dark.


## 2. Typography & Hierarchy (Inter Tight Tracking)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Inter, "Helvetica Neue", sans-serif`.
  - `font-size: 56px` (marketing hero) / `36px` (pricing).
  - `font-weight: 600`, `letter-spacing: -1.8px`.
  - Gradient Accent: First line highlighted with violet-to-indigo linear gradient text clip.


## 3. Pricing Architecture (`/pricing`)

- **Card Styling (`Free`, `Essentials`, `Enterprise`)**:
  - Dark container `rgb(31, 27, 33)` with thin hairline perimeter border `1px solid rgba(255, 255, 255, 0.1)`.
  - `Essentials`: `$40 / month` with baseline-aligned `/month` text (`14px`) and explicit resource allowance (`Includes 40 Credits, up to 500 managed resources`).
  - Button CTA: `Start with Essentials` (`background: #5a30c5`, `border-radius: 6px`, `font-size: 14px`, `padding: 0 16px`).


## 4. Anti-Generic Insights (Why this beats AI templates)

1. **Strategic Light-to-Dark Surface Switching**: Light friendly homepage for initial orientation, switching seamlessly to a low-glare dark palette on complex pricing and documentation pages.
2. **Topographic Vector Lines**: Architectural contour curves in the background give abstract cloud infrastructure tangible spatial depth.
3. **Multi-Language Code Tabs**: Provides identical infrastructure configurations across TypeScript, Python, Go, and C# side-by-side to respect polyglot engineering teams.

---

## 022 — Grafana (`https://grafana.com`)

> **Sector**: Open Source Metrics Visualization, Time-Series Dashboards & Observability  
> **Aesthetic Mood**: Northern Lights Sunrise Gradient / Poppins Geometric Sans / Embedded Ask-AI Bar  


### 1. Palette & Surfaces

- **Sunrise Aurora Mesh**: Soft ambient morning sky gradient fading horizontally across the hero:
  - Warm Peach: `#fed7aa`
  - Soft Lilac: `#e9d5ff`
  - Cyan Sky: `#bae6fd`
- **Brand Flame Orange**: `#f97316` (Grafana Labs flame logo).
- **Brand Cobalt Blue**: `#1f6feb` for primary interactive actions.
- **Root Light Background**: `rgb(244, 244, 246)` (`#f4f4f6` soft pearl gray).
- **Primary Text**: `rgb(0, 0, 0)` pure black on light surfaces.


## 2. Typography & Hierarchy (Poppins Geometric Sans)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Poppins, "Poppins Fallback", sans-serif`.
  - `font-size: 52px` (hero) / `48px` (pricing).
  - `font-weight: 600`, `letter-spacing: -1.2px`, `line-height: 1.15`.
- **Body & Subtitles**:
  - `font-family: Inter, sans-serif`.
  - `font-size: 16px`, `line-height: 1.5`, `color: #4b5563`.


## 3. The Embedded "Ask AI" Prompt Bar

- **Integrated Search / Agent Input**:
  - Floating pill search bar centered directly beneath the CTA:
    `✨ Ask AI` | `"How do I get started with Grafana?"` with an action arrow `→`.
  - Merges search, agent question answering, and documentation retrieval into a single natural-language input.


## 4. Pricing Architecture (`/pricing`)

- **3 Elevated Cards (`Free`, `Pro`, `Enterprise`)**:
  - `Free`: `$0 Always` (badge `Always free`).
  - `Pro`: `From $19 / month + usage` (badge `Self-serve`).
  - `Enterprise`: `Starts at $25,000 / year spend commit` (badge `Full service`).
- **Cards**: `border-radius: 16px`, pure white `#ffffff`, soft elevation shadow.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Aurora Horizon Warmth for Analytics**: Rather than defaulting to dark terminal screens or cold blue enterprise grids, Grafana welcomes users with an airy, optimistic sunrise gradient that humanizes dense technical data.
2. **Poppins Geometric Character**: Geometric rounded glyphs (e.g. perfectly circular counters in `o`, `e`, `p`) give the product an inviting, modern accessibility.
3. **Intent-Driven Dual CTAs**: Pairs explicit value markers (`The Free Forever plan ⓘ` above `Get started free` vs. `Plans to suit every scale ⓘ` above `Compare plans`).

---

## 023 — Neon (`https://neon.tech`)

> **Sector**: Serverless Postgres Infrastructure, Database Branching & Agent Storage  
> **Aesthetic Mood**: Cyber-Emerald Kinetic Motion / Inter Regular 400 Tracking / Interactive Spend Selectors  


### 1. Palette & Surfaces

- **Root Canvas Background**: Pure OLED Black `#000000`.
- **Brand Neon Emerald**: `#00e599` / `#00ffa3` (Neon Tech signature fluorescent green).
- **Secondary Cyan**: `#00d4ff` for database branching traces.
- **Surface Elevation Cards**: `rgb(10, 10, 10)` (`#0a0a0a`) with hairline borders `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Muted Text**: `rgb(163, 163, 163)` (`#a3a3a3`).


## 2. Typography & Hierarchy (Inter Regular with Negative Tracking)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Inter, ui-sans-serif, system-ui, sans-serif`.
  - `font-size: 52px`, `line-height: 1.1`.
  - `font-weight: 400` (*Consistent elite SaaS pattern: Regular 400 weight for huge headlines instead of bold 700*).
  - `letter-spacing: -2.08px` (-4% tracking).
- **Underline Styling**:
  - Technical terms (`Lakebase`) styled with a dotted hairline underline (`border-bottom: 1px dotted rgba(255, 255, 255, 0.4)`).


## 3. Interactive Pricing Architecture (`/pricing`)

- **"Typical Spend" Interactive Dropdown Pattern**:
  - Rather than showing a static abstract price, the `LAUNCH` and `SCALE` cards embed an inline dropdown selector:
    `Based on: [Intermittent load, 1 GB ▾]` $\rightarrow$ dynamically updates typical spend to `$15 /mo`.
    `Based on: [High load, 100 GB ▾]` $\rightarrow$ dynamically updates typical spend to `$701 /mo`.
  - Removes the guesswork from serverless compute units and storage pricing.
- **Button CTA**:
  - Pill button `border-radius: 9999px`, solid white on featured card (`font-size: 14px`, `padding: 0 28px`), dark outline on others.


## 4. Anti-Generic Insights (Why this beats AI templates)

1. **Realistic Scenario Dropdowns in Pricing**: Eliminates the fear of unpredictable cloud bills by letting developers select realistic workload profiles inside the pricing cards.
2. **Kinetic City Blur Backdrop**: Uses high-speed blurred light trails of modern night architecture rather than generic AI 3D floating shapes.
3. **Pill Buttons with Generous Horizontal Padding**: Uses `padding: 0 28px` on `14px` text, creating elongated, balanced pill geometry.

---

## 024 — Render (`https://render.com`)

> **Sector**: Zero-DevOps Cloud Hosting, Managed Databases & Background Workers  
> **Aesthetic Mood**: Displaay Roobert Light 300 / Checkerboard Matrix / Sharp 2px Radiuses  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(13, 13, 13)` (`#0d0d0d` pure matte carbon).
- **Architectural Checkerboard Mesh**: Structural square grid backdrop with lines `1px solid rgba(255, 255, 255, 0.05)`.
- **Text Gradient Accent**: Violet `#a855f7` to Mint Green `#6ee7b7`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Surface Elevation Cards**: `rgb(18, 18, 20)` with sharp hairline borders.


## 2. Typography & Hierarchy (Roobert Light 300)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Roobert, "Roobert Fallback", sans-serif` (Displaay Type Foundry).
  - `font-size: 60.55px`, `line-height: 1.05`.
  - `font-weight: 300` (*Light weight! One of the lightest headline weights in technical SaaS, creating supreme editorial elegance*).
  - `letter-spacing: -1.28px`.
- **Body & Controls**:
  - `font-family: ui-sans-serif, system-ui, sans-serif`.
  - `font-size: 16px`, `line-height: 1.5`, `color: #a1a1aa`.


## 3. Sharp 2px Border Radius Architecture

- **Uncompromising Precision Geometry**:
  - While consumer products use pills (`9999px`), Render strictly enforces **`border-radius: 2px`** across its navbar buttons, pricing cards, and interactive CTA boxes.
  - Button styling: Solid white `rgb(255, 255, 255)`, dark text `rgb(13, 13, 13)`, `height: 36px`, `padding: 0 12px`, `border-radius: 2px`.


## 4. Pricing Architecture (`/pricing`)

- **Grid Alignment on Architectural Matrix**:
  - 4 pricing tiers (`Hobby`, `Pro`, `Scale`, `Enterprise`) aligned directly onto the background square grid lines.
  - Transparent formula: `$0/mo + compute`, `$25/mo + compute`, `$499/mo + compute`.
  - `Enterprise` Card Inversion: Rendered with an inverted solid light gray background (`#e4e4e7`) with black typography, creating natural visual hierarchy without gaudy gradients.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Roobert Light 300 Weight**: Novice AI designs think bigger text must always be heavier (700 bold). Render uses 60px with `font-weight: 300`, proving that large scale + ultra-light weight creates unforgettable elegance.
2. **Checkerboard Wireframe Discipline**: Background is structured using architectural checkerboard lines that align directly with content containers, establishing visual order.
3. **Sharp 2px Radiuses**: Gives interfaces the feel of high-end mechanical instruments and terminal windows.

---

## 025 — Retool (`https://retool.com`)

> **Sector**: Internal Tools, Enterprise Workflow Automation & AI Agent Harness  
> **Aesthetic Mood**: Displaay Saans Light 300 / Warm Mastic `#e9ebdf` / Interactive Prompt Scaffold  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(21, 21, 21)` (`#151515` deep carbon graphite).
- **Brand Mastic Warm Tone**: `rgb(233, 235, 223)` (`#e9ebdf` warm bone mastic cream). Used for primary buttons and high-contrast text.
- **Electric Blue Accent**: `#3b82f6` for active input submit triggers.
- **Surface Elevation Cards**: `rgb(27, 27, 27)` with hairline borders `1px solid rgba(255, 255, 255, 0.08)`.


## 2. Typography & Hierarchy (Saans Light 300)

- **Headlines (`H1`, `H2`)**:
  - `font-family: saansFont, "saansFont Fallback", sans-serif` (Saans by Displaay).
  - `font-size: 55.6px`, `line-height: 1.1`.
  - `font-weight: 300` (*Consistent elite SaaS pattern: Light 300 weight carries expansive headlines with razor precision*).
  - `letter-spacing: -1.11px`.
- **Body & Subtitles**:
  - `font-family: ui-sans-serif, system-ui, sans-serif`.
  - `font-size: 16px`, `line-height: 1.55`.


## 3. The "Prompt-to-App" Interactive Hero Scaffold

- **Embedded Generator Input**:
  - Replaces traditional hero screenshots with an interactive prompt creation container:
    `"Create a vendor onboarding tracker that pulls vendor status from our @PostgreSQL database and flags incomplete submissions."`
  - Inline entity tags: `@PostgreSQL` styled with database icon and dotted hairline border.
  - Quick action chips below: `[Starter prompts ▾]`, `[Import code ▾]`, and `[Build with AI agents ▾]`.


## 4. Pricing Architecture (`/pricing`)

- **Builder vs. End-User Model**:
  - Explicit bifurcation:
    `$0 / mo per builder ⓘ` vs. `$0 / mo per internal user ⓘ`.
  - Solves the classic internal tool conundrum where viewers shouldn't cost the same as software engineers building the apps.
- **Buttons**:
  - Mastic pill button `border-radius: 9999px`, dark text `#151515`, `padding: 0 20px`, `font-size: 13px`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Warm Mastic Tone over Harsh White**: By pairing `#151515` with bone mastic `#e9ebdf` rather than stark `#ffffff`, Retool creates a sophisticated warm analog contrast.
2. **Displaay Saans Light Geometry**: Large 56px typography with `300` weight eliminates the visual clunkiness common to generic AI templates.
3. **Transparent License Separation (Builders vs Users)**: Clarifies multi-user seat licensing directly within the pricing cards to reduce enterprise procurement friction.

---

## 026 — Fly.io (`https://fly.io`)

> **Sector**: Global Application Platform, Micro-VMs (Firecracker) & Distributed AI Sandboxes  
> **Aesthetic Mood**: Storybook Lavender Pastel / P22 Mackinac Serif 325 / Bricolage Grotesque  


### 1. Palette & Surfaces

- **Root Canvas**: Dreamy sky lilac wash (`#e0e7ff` / `#ede9fe` pastel lavender) fading into light cyan `#e0f2fe`.
- **Brand Hot Purple**: `rgb(124, 58, 237)` (`#7c3aed` / `#6c47ff`).
- **Primary Text**: `rgba(40, 25, 80, 0.75)` (Deep eggplant ink).
- **Hand-Drawn Illustrations**: Storybook line art with playful characters (astronaut rabbits, balloons, micro-servers with legs).


## 2. Typography & Hierarchy (Mackinac + Bricolage Grotesque)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Mackinac, Georgia, serif` (P22 Mackinac).
  - `font-size: 60px`, `font-weight: 325` (*Light Renaissance serif*).
  - Mixed Styling: Second line rendered in cursive/italic with a felt-pen purple underline (`border-bottom: 3px solid rgba(124, 58, 237, 0.4)`).
- **Body & Controls**:
  - `font-family: "Bricolage Grotesque", sans-serif` (Quirky, humanistic display sans).
  - `font-size: 16px`, `line-height: 1.55`.


## 3. Dedicated Agent Onboarding Action

- **Dual CTA Architecture**:
  - Primary: `"Deploy your app >"` (pill button in solid purple `#7c3aed`).
  - Secondary: `"[📋] Onboard your agent"` (direct copyable CLI configuration for AI coding agents to launch Fly micro-VMs).


## 4. Pricing Architecture (`/pricing`)

- **Transparent Micro-VM Billing**:
  - Headline: `"Start for free, pay as you grow. Compute bills by the second, storage on what you provision."`
  - Direct cost estimation action: `[🧮] Calculate your cost`.
  - Button: `border-radius: 8px`, `font-size: 15.5px`, `padding: 0 20px`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Whimsical Storybook Artistry**: In an era where 99% of cloud infrastructure sites look like identical dark cyber grids, Fly.io uses pastel lilacs, Renaissance serifs (Mackinac), and hand-drawn storybook cartoons, standing out instantly.
2. **Bricolage Grotesque Personality**: Uses Bricolage Grotesque for interface text, giving UI controls quirky organic charm without losing technical clarity.
3. **Irreverent, Genuine Voice**: Microcopy treats users as intelligent peers rather than sales leads, building fierce developer loyalty.

---

## 027 — Axiom (`https://axiom.co`)

> **Sector**: Cloud-Scale Log Analytics, Petabyte Ingestion & High-Performance Event Storage  
> **Aesthetic Mood**: Laser Diagonal Streaks / Warm Flame Orange `#da5c2b` / Geist Medium 500  


### 1. Palette & Surfaces

- **Root Canvas**: `lab(2.48 0 0)` (`#060606` pure obsidian black).
- **Brand Flame Orange**: `rgb(218, 92, 43)` (`#da5c2b` / `#f97316` high-energy amber).
- **Laser Speed Accents**: Goldenrod diagonal light streaks slicing the hero from bottom-left to top-right.
- **Surface Elevation Cards**: `lab(6 0 0)` (`#0f0f10`) with sharp hairline borders `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `lab(98.26 0 0)` (`#fafafa` off-white).


## 2. Typography & Hierarchy (Geist Font Family)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Geist, "Geist Fallback", sans-serif`.
  - `font-size: 56px` (hero) / `48px` (pricing).
  - `font-weight: 500`, `letter-spacing: -1.2px`, `line-height: 1.1`.
- **Body & Controls**:
  - `font-size: 16px`, `line-height: 1.55`, `color: #9ca3af`.
- **Pricing Fine Print**:
  - `font-family: monospace` for transparent rate calculations (`$0 /month`, `$25 /month`).


## 3. Interactive In-Console Query Mockup

- **Live Query Builder Frame**:
  - Navigation tab bar: `Query | Stream | Dashboards | Monitors | Datasets`.
  - Tooling row: `[⚙️ Builder]` | `[</> Editor]` | `[🕒 Last 30 mins ▾]` | `[▷ Run]` in green accent.


## 4. Pricing Architecture (`/pricing`)

- **Developer-Friendly Transparent Pricing**:
  - Value headline: `"Pricing that scales with you, not against you."`
  - Direct contrast with legacy APM vendors: `"Add-ons unlock in the Console, not on a sales call."`
  - Two primary entry plans:
    - `Axiom Cloud`: `$25 / month` (Platform fee + usage, no commitment).
    - `Personal`: `$0 / month` (Permanent free tier, no credit card required).
- **Button Styling**:
  - `background: #da5c2b`, `border-radius: 6px`, `font-size: 13px`, `padding: 0 8px`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Laser Diagonal Visual Metaphor**: Diagonal light rays communicate petabyte-speed query execution without cheesy abstract stock graphs.
2. **Anti-Enterprise Sales Copy**: Explicitly calls out predatory sales patterns (`"not on a sales call"`), building instant affinity with engineers.
3. **Geist Sans 500 Precision**: High-precision geometric typography with tight -1.2px tracking and compact 13px control labels.

---

## 028 — Turso (`https://turso.tech`)

> **Sector**: Distributed Edge SQLite Databases, libSQL & Multi-Tenant Agent Storage  
> **Aesthetic Mood**: Deep Ocean Cyan `#0d1318` / Neon Turquoise `#4ff8d2` / Bold 800 Grotesk  


### 1. Palette & Surfaces

- **Deep Ocean Slate Canvas**: `rgb(13, 19, 24)` (`#0d1318` midnight marine dark).
- **Brand Neon Turquoise**: `rgb(79, 248, 210)` (`#4ff8d2` high-voltage menthol cyan).
- **Surface Elevation Cards**: `rgb(17, 24, 30)` with hairline borders `1px solid rgba(79, 248, 210, 0.25)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Contrast Text on Turquoise**: `rgb(0, 0, 0)` pure black.


## 2. Typography & Hierarchy (Inter ExtraBold 800)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Inter, sans-serif`.
  - `font-size: 60px`, `line-height: 1.05`.
  - `font-weight: 800` (*Deliberate punchy heavy grotesque weight — solid, industrial, commanding*).
  - `letter-spacing: -1.5px`.
- **Two-Tone Accent Lockup**:
  - Line 1 in pure white (`"Millions of Databases."`), Line 2 in radiant turquoise (`"One Architecture."`).


## 3. High-Contrast Pill Buttons

- **Primary Action (`Start for free now`)**:
  - `background: #4ff8d2` (Vibrant neon turquoise).
  - `color: #000000` (Pure black text creates WCAG AAA contrast against high-luminance turquoise).
  - `border-radius: 9999px` (Pill button).
  - `font-size: 16px`, `padding: 12px 24px`.


## 4. Code Component Mockup (`setup.ts`)

- **Interactive Code Window**:
  - Tab title `setup.ts` highlighted with a cyan indicator line.
  - Realistic JavaScript SDK demonstration:
    `const db = await turso.databases.create({ name: 'user-${userId}', group: 'production' });`.


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **5-Column Granular Matrix**:
  - Plans: `Free` ($0), `Developer` ($4.99/mo), `Scaler` ($24.92/mo), `Pro` ($416.58/mo), `Enterprise` (Custom).
  - Core Metric Differentiation: Databases count (`100` on Free vs. `Unlimited` on Developer+) and storage limits.
  - Monthly vs. Yearly frequency toggle with turquoise pill highlight on Yearly.


### 6. Anti-Generic Insights

1. **Oceanic Midnight Slate (`#0d1318`)**: Deep blue-green slate backdrop harmonizes with the turquoise accent color, preventing harsh contrast fatigue.
2. **Heavy 800 Impact for Database Scalability**: Using extra-bold weight (800) matches the messaging of industrial database power and multi-million scale.
3. **Database-per-Agent Model**: Specifically positions SQLite micro-databases as the native memory layer for autonomous AI agents.

---

## 029 — Trigger.dev (`https://trigger.dev`)

> **Sector**: Background Jobs, Agentic Orchestration, Long-Running AI Workflows  
> **Aesthetic Mood**: Acid Lime High-Voltage `#a3e635` / Satoshi Variable 600 / Geist UI  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(18, 19, 23)` (`#121317` deep carbon anthracite).
- **Brand Acid Lime**: `#a3e635` / `#bef264` (Electric lime green). Used as the high-contrast focal accent.
- **Surface Elevation Cards**: `rgb(24, 25, 30)` with hairline border `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Body & Secondary Text**: `rgb(215, 217, 221)` (`#d7d9dd` cool light gray).


## 2. Typography & Hierarchy (Satoshi Variable + Geist)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Satoshi-Variable, sans-serif` (Satoshi by Fontshare).
  - `font-size: 56px` (marketing hero) / `48px` (pricing).
  - `font-weight: 600`, `line-height: 1.1`.
- **Body & Code Snippets**:
  - `font-family: Geist, ui-sans-serif, sans-serif`.
  - `font-size: 16px`, `line-height: 1.55`.


## 3. "Copy Setup Prompt" Hero Component

- **AI-Era Quickstart**:
  - Primary Action: `"Start building now >"` (Solid lime green button with black text).
  - Secondary Action: `"[✨] Copy setup prompt [📋]"` (Dark outline pill with subtle violet glow).
  - Embeds the exact instructions needed to initialize Trigger.dev within Claude, Cursor, or Zed without manual documentation browsing.


## 4. Agentic Workflow Feature Strip

- **Horizontal Workflow Carousel Tabs**:
  - `🤖 AI agents` | `🪝 Webhooks` | `▶️ Media processing` | `✨ Media generation` | `⏳ Human in the loop` | `⚡ Streaming` | `🐍 Run Python`.
  - Demonstrates native support for long-running AI tasks, streaming token output, and asynchronous human approval gates.


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **4-Tier Matrix (`Free`, `Hobby`, `Pro`, `Enterprise`)**:
  - `Hobby` Card ($10/mo): Highlighted with an exact **acid lime hairline border (`1px solid #a3e635`)** and a matching lime button.
  - Granular Run Metric: `50 concurrent runs` + `$10/month per 50 additional`.
  - Explicit credit offsets: Every tier includes an exact equivalent credit pool ($5 credit on Free, $10 on Hobby, $50 on Pro).


### 6. Anti-Generic Insights

1. **Acid Lime High-Contrast Signature**: While typical templates use generic royal blue or purple, Trigger.dev uses electric acid lime (`#a3e635`), creating a distinct, unforgettable visual identity.
2. **Fontshare Satoshi Precision**: Satoshi provides subtle optical balance and distinct glyph cuts that look substantially fresher than standard Inter.
3. **Dedicated "Human in the Loop" Pattern**: Acknowledges the reality of AI agents failing or requiring human sign-off, positioning asynchronous human approval as a primary platform feature.

---

## 030 — Inngest (`https://inngest.com`)

> **Sector**: Event-Driven Durable Execution, Step Functions & Agent Orchestration  
> **Aesthetic Mood**: Dinamo Whyte Inktrap / Hollow Stroke Typography / Textured Vermilion `#ff4d4d`  


### 1. Palette & Surfaces

- **Root Canvas**: `rgb(12, 10, 9)` (`#0c0a09` raw umber charcoal with heavy analog noise grain).
- **Brand Signal Vermilion**: `#ff4d4d` / `#ea580c` (High-intensity coral red).
- **Surface Elevation Cards**: `rgb(20, 18, 17)` with hairline borders `1px solid rgba(255, 255, 255, 0.1)`.
- **Primary Text**: `rgb(246, 246, 246)` (`#f6f6f6`).
- **Telemetry State Badges**:
  - `COMPLETED | 1.2S`: Emerald `#10b981` pill.
  - `• RUNNING`: Pulsing orange `#f97316` pill.


## 2. Typography & Hierarchy (Whyte Inktrap by ABC Dinamo)

- **Headlines (`H1`, `H2`)**:
  - `font-family: "Whyte Inktrap", Inter, sans-serif` (ABC Dinamo).
  - `font-size: 58px`, `font-weight: 400`, `letter-spacing: -0.58px`.
  - All-Caps Display with Hollow Outlines:
    Line 1 & 2: `MAKE EVERY BACKEND` (solid white).
    Line 3: `UNBREAKABLE.` (hollow stroke: `-webkit-text-stroke: 1px #ffffff; color: transparent`).
- **Body & Subtitles**:
  - `font-family: CircularXX, Inter, sans-serif` (Lineto).
  - `font-size: 17px`, `line-height: 1.55`, `color: #d1d5db`.


## 3. Real-Time Step Execution Code Component

- **Step Execution Code Mockup**:
  - Highlights step-by-step durability: `await step.run("copy-images-to-s3", ...)` and `await step.run("save-image-manifest", ...)`.
  - Color-coded vertical tree lines link asynchronous steps together with live completion latency badges.


## 4. Pricing Architecture (`/pricing`)

- **Full-Color Textured "Popular" Card**:
  - While other cards are dark gray, the `Pro` card is filled with a **textured vermilion gradient surface (`#ff4d4d`)**, dark pill badge `POPULAR` pinned at the top, and black typography.
  - Transparent pricing: `Free` ($0/mo), `Pro`, `Business`, `Enterprise`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Whyte Inktrap with Hollow Letterforms**: Using hollow vector text strokes (`-webkit-text-stroke: 1px`) on "UNBREAKABLE" creates a physical, structural impression of resilience.
2. **Analog Dark Noise Grain**: Layering raw photographic film grain over `#0c0a09` gives the dark mode tangible depth, avoiding the sterile artificiality of flat digital black.
3. **Dual-Button Pair (`npm install` CLI pill + Solid CTA)**: Directly satisfies developers who want to inspect the package on npm before creating a cloud account.

---

## 031 — Liveblocks (`https://liveblocks.io`)

> **Sector**: Realtime Multiplayer Infrastructure, Collaborative Cursors & AI Presence  
> **Aesthetic Mood**: Swiss Typefaces Suisse Int'l / In-Headline Multiplayer Cursor / Precision 6px Radius  


### 1. Palette & Surfaces

- **Root Canvas Background**: Pure OLED Black `#000000`.
- **Collaborative Presence Cursors**:
  - Lime Green Cursor: `#a3e635` / `#bef264` (`Chris` avatar flag).
  - Cyan Presence: `#00d4ff`.
  - Violet Thread: `#8b5cf6`.
- **Surface Elevation Cards**: `rgb(10, 10, 10)` with hairline borders `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).


## 2. Typography & Hierarchy (Suisse Int'l)

- **Headlines (`H1`, `H2`)**:
  - `font-family: suisse, "suisse Fallback", sans-serif` (Suisse Int'l by Swiss Typefaces).
  - `font-size: 64px`, `font-weight: 500`, `line-height: 1.1`.
- **Hero Micro-Interaction Signature**:
  - An interactive multi-user collaborative cursor (`Chris`) is embedded directly inside the word `"multiplayer"` within the `H1`, with animated cursor movement demonstrating real-time CRDT presence.


## 3. Dedicated "Install with AI" Hero Trigger

- **Dual Action Button Pair**:
  - Primary: `"Get started for free"` (Solid white `#ffffff`, dark text `#000000`, `border-radius: 6px`, `font-size: 14px`).
  - Secondary: `"Install with AI ▾"` (Dropdown menu with starter prompts for Cursor, Claude, and Copilot).


## 4. Live Multi-User Presence Ticker

- **Real-Time On-Page Presence Badge**:
  - Pinned bottom-center counter: `● 6 👥` (actively tracks and displays real-time concurrent active users on the page, proving infrastructure performance in real-time).


### 5. Composants Signature (Pricing Architecture (`/pricing`))

- **4-Tier Layout (`Free`, `Pro`, `Team`, `Enterprise`)**:
  - Frequency Toggle: `Monthly` vs `Annual 2 months free` (pill capsule with mint green discount label).
  - Clear tiers: `Free` ($0), `Pro` ($25/mo billed annually), `Team` ($500/mo), `Enterprise` (Custom).
  - Value metric: Monthly Active Users (MAU) and concurrent WebSocket connections.


### 6. Anti-Generic Insights

1. **Embedded Product Demo in the `H1` Title**: Instead of placing a generic video below the fold, Liveblocks embeds live multiplayer cursors directly inside the letters of its headline.
2. **Suisse Int'l Modernism**: Consistent with Clerk, Suisse Int'l provides clean neutrality that makes technical collaboration tools feel sharp and reliable.
3. **Live Socket Presence Proof**: Displaying an active socket counter (`● 6 users online`) on the marketing homepage acts as immediate living social proof of the platform's reliability.

---

## 032 — Upstash (`https://upstash.com`)

> **Sector**: Serverless Redis, Kafka QStash, Vector Databases & Remote MCP Servers  
> **Aesthetic Mood**: Emerald-to-Gold Aurora Gradient / Inter Tight 600 / Multi-Product Modular Switcher  


### 1. Palette & Surfaces

- **Root Canvas**: `rgb(9, 9, 11)` (`#09090b` deep obsidian carbon).
- **Brand Emerald Accent**: `#00e599` / `#10b981` transitioning into Warm Gold `#eab308`.
- **Text Tint**: `rgb(236, 253, 245)` (`#ecfdf5` ultra-pale menthol white, eliminating sterile monochrome glare).
- **Surface Elevation Cards**: `rgb(16, 22, 19)` with hairline border `1px solid rgba(0, 229, 153, 0.15)`.


## 2. Typography & Hierarchy (Inter Tight)

- **Headlines (`H1`, `H2`)**:
  - `font-family: "Inter Tight", sans-serif`.
  - `font-size: 64px` (hero) / `48px` (pricing).
  - `font-weight: 600`, `line-height: 1.05`.
  - Signature Gradient Clip: Huge letters clipped with vertical linear gradient from Emerald `#00e599` to Sunlight Gold `#eab308`.
- **Body & Controls**:
  - `font-family: Inter, sans-serif`.
  - `font-size: 16px`, `line-height: 1.55`.


## 3. Remote MCP Server Native Integration

- **Header Telemetry Banner**:
  - Pinned announcement: `"New: Upstash has a remote MCP server — connect your coding agent to your account →"`.
- **"Set Up Your Agent" Button**:
  - Hero button featuring the logos of Cursor, Claude, and ChatGPT alongside the label `Set up your agent ▾`.


## 4. Multi-Database Pricing Architecture (`/pricing`)

- **Top-Level Horizontal Service Switcher**:
  - Segmented control pills: `Redis` (active) | `Vector` | `QStash` | `Workflow` | `Box` | `Blob`.
  - Each pill displays the authentic official color icon of that technology.
- **Per-Request vs. Fixed Switcher**:
  - Offers both pure Serverless Pay-as-you-go (`$0.2 per 100K commands`) and Fixed Storage tiers (`$10 / month for 250MB`) within the same table.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Emerald-to-Gold Aurora Title**: Shifting from green into gold creates organic warmth that softens dark-mode developer fatigue.
2. **Menthol-Tinted Text (`#ecfdf5`)**: Instead of dead gray or stark `#ffffff`, text is tinted with a 2% green hue, harmonizing with the brand palette.
3. **Remote MCP Server First-Class Pattern**: Prominently features the Model Context Protocol (MCP) as a primary onboarding path.

---

## 033 — Knock (`https://knock.app`)

> **Sector**: Multi-Channel Notification Infrastructure (In-App, Push, Email, SMS, Chat)  
> **Aesthetic Mood**: Light Canvas Generative Node Clusters / Coral Vermilion `#ff573a` / Physical Keyboard Shortcuts  


### 1. Palette & Surfaces

- **Root Canvas Background**: Crisp White `#ffffff` with subtle warm ivory tint.
- **Brand Signal Coral**: `rgb(255, 87, 58)` (`#ff573a` / `#f04438` vivid tomato coral).
- **Generative Cluster Network**: Delicate organic node network in terracotta and dusty mauve tones (`#b45309`, `#9d174d`) visualizing notification message fan-outs.
- **Surface Elevation Cards**: Pure white cards with soft hairline borders `1px solid #e5e7eb`.
- **Primary Text**: Dark Charcoal `#111827`.


## 2. Universal Keyboard Shortcut Badges (`[L]`, `[S]`, `[D]`)

- **Physical Key Navigation**:
  - Almost every primary action button displays its dedicated single-letter keyboard shortcut inside a rounded keycap badge:
    - `Log in [L]`
    - `Sign up [S]`
    - `Book a demo [D]`
    - Cookie dialog: `Opt out [O]` and `Accept [A]`
  - Enables instant power-user keyboard navigation throughout the marketing site without mouse interaction.


## 3. Dedicated Agent Message Orchestration

- **Hero Narrative**:
  - `"Agentic customer engagement to grow faster — Ship lifecycle and transactional messaging from your favorite agent. Start with a prompt, scale to millions."`
  - Inline link: `Start with your agent` with logos of Anthropic, OpenAI, Cursor.


## 4. Pricing Architecture (`/pricing`)

- **Active-User Only Billing Model**:
  - Core value proposition: `"Pay for what you actually use — Only pay for the users you message, not for dormant profiles."`
  - Eliminates the penalty of storing unmessaged subscribers in traditional notification stacks.
- **Plan Tiers**:
  - `Free`: `$0 / month` (`border-radius: 4px`, coral button).
  - `Starter (POPULAR)`: `$250 / month + additional usage`.
  - `Enterprise`: Dark button `Contact sales`.


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Integrated Keycap Badges on Buttons**: Displaying `[S]`, `[L]`, and `[D]` inside buttons establishes high engineering craft and power-user ergonomics.
2. **Generative Arborescent Graphic**: Instead of standard vector bell/chat bubbles, Knock uses a complex node tree resembling neural clusters or cosmic fan-outs to represent message distribution.
3. **Usage Alignment (Message-Active vs Dormant)**: Direct pricing differentiation targeting dormant user penalties common in legacy notification services.

---

## 034 — Dub.co (`https://dub.co`)

> **Sector**: Modern Link Management, Conversion Attribution & Affiliate Infrastructure  
> **Aesthetic Mood**: Clean Daylight Tiled Grid / Satoshi Medium 500 / High-Contrast Rounded Rectangles  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(250, 250, 250)` (`#fafafa` luminous light gray) overlaid with a subtle square grid (`1px solid rgba(0, 0, 0, 0.04)`).
- **Primary Brand Accents**:
  - Affiliate Violet: `#8b5cf6`
  - Conversion Green: `#10b981`
  - Short Links Orange: `#f97316`
- **Surface Elevation Cards**: Crisp pure white `#ffffff` cards with hairline border `1px solid #e5e7eb` and soft elevation shadow.
- **Primary Text**: `rgb(10, 10, 10)` (`#0a0a0a` deep ink black).


## 2. Typography & Hierarchy (Satoshi by Fontshare)

- **Headlines (`H1`, `H2`)**:
  - `font-family: satoshi, "satoshi Fallback", sans-serif`.
  - `font-size: 56px` (hero) / `48px` (pricing).
  - `font-weight: 500`, `line-height: 1.1`.
- **Body & Controls**:
  - `font-family: Inter, sans-serif`.
  - `font-size: 16px`, `line-height: 1.5`, `color: #4b5563`.


## 3. Product Sub-Pillar Capsule Selectors

- **Three-Pillar Feature Capsules**:
  - `Affiliate Programs` (violet icon)
  - `Conversion Analytics` (green icon)
  - `Short Links` (orange icon)
  - Clean floating pills with white backgrounds and hairline borders guiding user exploration.


## 4. Pricing Architecture (`/pricing`)

- **Bimodal Product Toggle**:
  - `Dub Partners` vs `Dub Links` (switches between affiliate program infrastructure and short-link management).
- **Annual Upfront Value Incentive**:
  - Frequency toggle pill displays explicit upfront incentives: `Yearly [10% discount + 12x usage upfront]`.
- **Cards (`Business`, `Advanced`, `Enterprise`)**:
  - `Advanced` Card Highlighted with a violet pill badge (`BEST VALUE`) and a solid black action button (`border-radius: 8px`).


### 5. Composants Signature (Anti-Generic Insights (Why this beats AI templates))

1. **Airy Daylight Tiled Grid**: While modern SaaS over-indexes on dark cyber grids, Dub proves that an airy light-mode architectural grid (`#fafafa`) feels supremely fast, fresh, and trustworthy.
2. **Satoshi Medium 500 Openness**: Generous optical spacing and open counterforms give Satoshi an accessible, highly professional character.
3. **Transparent Usage Multipliers in Frequency Toggle**: Explaining that annual payment grants 12x usage upfront immediately reframes the pricing conversation from "spending more" to "locking in capacity."

---

## 035 — Loops.so (`https://loops.so`)

> **Sector**: SaaS Email Marketing, Transactional Messaging & Automated Sequences  
> **Aesthetic Mood**: 1970s Sunset Tri-Stripe / Newsreader Serif 500 / Warm Umber `#191918`  


### 1. Palette & Surfaces

- **Root Canvas Background**: `rgb(25, 25, 24)` (`#191918` warm umber dark, avoiding cold tech black).
- **Retro 1970s Tri-Stripe Graphic**: Vertical 3-stripe signature banner flanking the right screen margin:
  - Honey Gold: `#fbbf24`
  - Sunset Orange: `#f97316`
  - Crimson Red: `#dc2626`
- **Surface Elevation Cards**: `rgb(32, 32, 30)` with hairline borders `1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Text**: `rgb(255, 255, 255)` (`#ffffff`).
- **Body & Subtitles**: `rgb(238, 238, 236)` (`#eeeaec` warm ivory white).


## 2. Typography & Hierarchy (Newsreader Serif)

- **Headlines (`H1`, `H2`)**:
  - `font-family: Newsreader, "Newsreader Placeholder", serif` (Production Type).
  - `font-size: 56px` (marketing hero) / `40px` (pricing).
  - `font-weight: 500`, `letter-spacing: -0.8px`, `line-height: 1.1`.
- **Body Text**:
  - `font-family: sans-serif`.
  - Underline emphasis: `marketing`, `product`, and `transactional` underlined with subtle hairlines.


## 3. Pricing Architecture (`/pricing`)

- **Anti-Per-Seat Pricing Manifesto**:
  - Sub-headline: `"One price for marketing, product, and transactional email. No seat fees, no per-send charges, and every feature on every plan."`
  - Rejects standard SaaS penalization models where adding team members or sending more emails inflates costs arbitrarily.
- **Continuous Sliding Contact Scale**:
  - Interactive amber/peach gradient slider spanning `1,000 contacts` ($0), `5,000 contacts` ($49/mo), to `1.5M+ contacts` (Custom).
- **Button Styling**:
  - Pill button `border-radius: 999px`, `font-size: 15px`, `padding: 0 20px`.


## 4. Anti-Generic Insights (Why this beats AI templates)

1. **1970s Sunset Stripe Identity**: The bold 3-color retro stripe border instantly roots Loops in warm human craft, making it completely unforgettable among cold SaaS competitors.
2. **Production Type Newsreader Warmth**: Newsreader gives transactional email copy a refined literary authority.
3. **No-Seat-Fee Transparency**: Features pricing transparency as an active design element, building immediate trust with modern multi-discipline startups.

---
