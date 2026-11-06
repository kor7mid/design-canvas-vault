# 04 — Visual Identity, Ortho-Typography, IA & IHM Ergonomics

> **Sources**: *Design Graphique & Identité Visuelle* (Vox-ATypI, Chromatic Spatiality), *Information Architecture* (Champion Web), & *Ergonomie IHM / Neuro-Accessibility* (M2PLS).

---

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

---

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

---

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

---

## 4. IHM Ergonomics, Banner Blindness & Neuro-Safety
- **UX Microcopy Laws**: Start action triggers with imperative verbs (*"Calculate My Rate"*); spell out acronyms on first use; never create a `<ul>` bullet list with only 1 item; enforce consistent `Sentence case` or `Title Case` globally.
- **The "Zero-Click" Hero Rule**: Expose core interactive utility (search bar, prompt input, rate calculator, live code sandbox) directly on the Hero with **zero preliminary navigation clicks**. Ban introductory "Splash / Click to Enter" tunnel pages.
- **Preventing Banner Blindness**: **NEVER continuously animate the brand logo or top header**. Users subconsciously filter out moving top-of-page graphics as third-party banner ads.
- **Ban Watermarks Under Prose**: Even a `10%` opacity watermark behind body text slows reading speed by `30%+`. Always place `<figcaption>` captions beneath proof images (scanners read captions before paragraphs).
- **WCAG 2.3.1 Neuro-Safety**: Strictly ban any element that flashes, strobes, or blinks more than **3 times per second** (`>3Hz`) to prevent photosensitive seizures.
