# Visual Identity, Information Architecture & UX Writing Guidelines

> **Sources**:
> 1. *Design Graphique & Identité Visuelle* (Alice Intro Design — Chromatic Theory, Vox-ATypI Typography, Gaze Direction & Text/Image Ratios)
> 2. *How to Design a Website* (Champion Web — Information Architecture, Conversion Funnels, Wireframing & Technical SEO)
> 3. *Web Design & Accompagnement Textuel IHM* (M2PLS — Ergonomics, UX Copywriting, Zero-Click Architecture & Neuro-Accessibility)

---

## PART I: VISUAL IDENTITY, COLOR PSYCHOLOGY & TYPOGRAPHIC LAWS

### 1.1 The 5 Foundational Questions Before Designing
Before choosing a single color or font, explicitly answer:
1. **What is the core message?**
2. **Who is the specific target persona?** (e.g., *"Families with children aged 2-5 seeking non-toxic wooden toys"*, NEVER *"Anyone buying toys"*).
3. **What is the primary functional objective?** (Lead capture, direct e-commerce purchase, authority building, technical documentation).
4. **What is the emotional atmosphere?**
5. **What are the brand's non-negotiable values?**

### 1.2 Chromatic Spatiality & Color Psychology
Colors are not flat — they occupy perceived depth on the Z-axis:
- **Warm Colors (Red, Orange, Yellow)**: Optically **advance** toward the viewer's eye. Use sparingly for urgent focal points, badges, and primary CTAs.
- **Cool Colors (Blue, Indigo, Slate, Green)**: Optically **recede** into the background. Ideal for calm structural surfaces, deep backgrounds, and trust-building containers.

#### Complete Psychological Color Matrix:
| Color | Positive Connotations & Industry Fit | Negative / Risk Connotations |
|---|---|---|
| **White** | Purity, clarity, luxury, medical precision, spatial silence | Coldness, sterility if unanchored |
| **Black** | Elegance, luxury, mystery, authority, high-end editorial | Mourning, heaviness if overused without contrast |
| **Red** | Passion, urgency, power, courage, immediate action, food | Danger, error, debt, aggression |
| **Blue** | Trust, peace, security, loyalty, justice, banking, SaaS | Coldness, corporate distance |
| **Yellow** | Light, warmth, optimism, youth, energy, warning | Anxiety, visual fatigue if used as large background |
| **Green** | Growth, nature, health, wealth, rest, confirmation | Inexperience if overly neon |
| **Orange** | Enthusiasm, creativity, affordability, kinetic energy | Cheapness if poorly desaturated |
| **Violet** | Spirituality, knowledge, magic, royalty, AI/Web3 | Melancholy, artificiality |
| **Brown / Earth** | Solidity, earth, craftsmanship, comfort, organic heritage | Stagnation if lacking contrast |

### 1.3 The 5-Color Swatch Rule & Avoiding Pure Black on Pure White
- A balanced visual identity uses a **5-color core swatch** (1 Primary, 1 Secondary, 1 Accent, 1 Light Neutral, 1 Dark Neutral).
- **Optical Glare Rule**: On light-mode interfaces, **avoid pure `#000000` text on pure `#FFFFFF` backgrounds**. The 21:1 extreme contrast causes halation and eye fatigue during long reading. Use deep charcoal/slate (`#111827` or `#1a1a1a`) on a soft off-white surface (`#f8fafc` or `#fdfbf7`).

### 1.4 Vox-ATypI Typeface Classification & Selection
Choose typefaces based on historical and structural classification:
1. **Humanes & Garaldes (Old-Style Serifs — Garamond, Caslon, Minion)**: Literary warmth, academic authority, long-form book readability.
2. **Réales (Transitional Serifs — Baskerville, Times)**: Classic journalism, institutional credibility, legal/government.
3. **Didones (Modern High-Contrast Serifs — Bodoni, Didot, Playfair Display)**: High fashion, luxury cosmetics, editorial headlines (never use for small body text).
4. **Mécanes (Slab Serifs — Rockwell, Roboto Slab)**: Industrial strength, engineering, bold craftsmanship.
5. **Linéales (Sans-Serifs — Geist, Inter, Helvetica, Futura)**: Universal digital clarity, modern UI controls, clean geometric or humanist interfaces.
6. **Incises (Glyphic — Optima)**: Subtle chiseled elegance for memorials, cosmetics, and luxury signage.
7. **Scriptes & Manuaires (Handwritten)**: Personal touch, artisan signatures (strictly limited to micro-accents; never set in all-caps).

### 1.5 The 5 Non-Negotiable Typography Rules
1. **Never stretch or compress a font manually**: Never apply non-uniform scaling (`transform: scaleX(0.8)`). Choose a true Condensed or Extended typeface family instead.
2. **Never exceed 3 font families**: Maximum 1 Heading font + 1 Body font + 1 Monospace font (for code/metrics).
3. **Verify Diacritics & International Accents**: Always verify that the typeface includes complete glyphs (`é, è, ê, à, ù, ç, œ, ß, ñ`) so multilingual content never falls back to a mismatched system font.
4. **Ban Hyphenation on Critical Tokens**:
   - Never hyphenate proper nouns, brand names, or people's names.
   - Never hyphenate numbers, prices, or dates.
   - Never break a word across an apostrophe or across two separate columns.
5. **International Ortho-Typography (French vs. English Punctuation)**:
   - **Single punctuation (`, . …`)**: No space before, 1 space after (both EN and FR).
   - **Double punctuation (`: ; ? !`)**:
     - *English*: No space before, 1 space after (`Hello!`).
     - *French*: Mandatory non-breaking thin space (`&nbsp;` / `\u00A0`) before, 1 space after (`Bonjour\u00A0!`).
   - **Capital Letters**: Always keep accents on uppercase letters (`ÉCOLE`, `À PROPOS`, `ÉTATS-UNIS`) to prevent ambiguity.

### 1.6 Gaze Direction & The 3 Text-to-Image Ratios
- **The Law of Human Gaze**: The human brain is hardwired to follow faces and eye contact.
  - If a hero photo features a person looking to the right, place your headline and Primary CTA on the **right** so the model's eyes lead the user's gaze directly to the conversion button!
  - If the model looks off the outer edge of the screen, the user's attention is pulled away from your content.
- **The 3 Text-to-Image Balance Ratios**:
  1. **Image Dominates Text (80/20)**: *Emotion & sensitivity first, reflection second.* Ideal for luxury, travel, real estate, fashion, and dining.
  2. **Equal Partnership (50/50)**: *Balanced emotion and rational proof.* Ideal for SaaS landing pages, consumer hardware, and product showcases.
  3. **Text Dominates Image (80/20)**: *Rational analysis and authority first.* Ideal for fintech, legal, medical records, and developer documentation.

---

## PART II: INFORMATION ARCHITECTURE (IA), WIREFRAMING & CONVERSION

### 2.1 The 0.05-Second First Impression & The 2-Second Load Rule
- **0.05 Seconds (50ms)**: The time it takes a visitor to form an emotional judgment about your brand's credibility based purely on visual hierarchy and layout cleanliness.
- **2 Seconds**: The maximum time an average user waits for a page to render before abandonment spikes. Never sacrifice load performance for heavy unoptimized media.

### 2.2 Wireframing Discipline: Foundation Before Paint
A wireframe is the architectural blueprint of an interface.
- **What a Wireframe MUST contain**: Information hierarchy, content zones, navigation connections (*"From the home page, which exact set of pages can I reach?"*), and primary CTA placement.
- **What a Wireframe MUST NOT contain**: No photos, no brand colors, no decorative fonts, no long paragraphs of prose.

### 2.3 The 4 Pillars of Information Architecture (IA)
Every scalable digital product relies on four interconnected IA systems:
1. **Organization System**: How information is categorized (by topic, by chronology, by audience persona, or by task).
2. **Labeling System**: Using clear, user-centric terminology across categories (e.g., deciding whether "Red Socks" belong under *Winter Collection*, *Men's Apparel*, or *Sale*).
3. **Navigation System**: Global, local, and contextual menus (limiting top-level categories to a maximum of 7 to 10 rubrics).
4. **Search System**: Indexing, filtering, and instant query resolution for large catalogs.

### 2.4 The 3 Canonical Website IA Structures
1. **The Tree Structure (Hierarchical)**: The homepage acts as the trunk, branching into independent top-level category pages (`Home -> Services / About / Pricing / Contact`), each with sub-branches. Best for multi-service businesses and e-commerce.
2. **The User-Selection Structure (Persona Routing)**: The homepage immediately segments visitors by who they are (e.g., *For Patients* / *For Doctors* / *For Clinics*, or *For Individuals* / *For Enterprise*), routing each persona into a tailored sub-tree.
3. **The Funnel Structure (Linear Conversion)**: Designed to guide the visitor through a sequential narrative journey (`Hero Hook -> Problem -> Solution -> Social Proof -> Pricing -> Checkout`) with minimal side exits.

### 2.5 The Water Bucket Conversion Metaphor
- **Water Flow Rate** = Marketing traffic driven to the site.
- **The Bucket** = The Website UX/UI.
- **Bucket Size / Integrity** = Conversion Rate ($\frac{\text{Converted Users}}{\text{Total Visitors}} \times 100$).
- **The Rule**: Pouring more traffic into a leaky bucket (broken navigation, unclear CTAs, slow load times) wastes 100% of marketing effort. Fix the bucket's conversion architecture first.

### 2.6 Technical SEO, Semantic URLs & Anchor Tables of Contents
1. **URL-to-Title Alignment**: Never leave template default URLs (`/page-2`, `/about-old`) when the page title is *"Get a Free Quote"*. Ensure URL slugs match the `H1` semantically (`/free-quote`, `/contact-us`).
2. **In-Page Anchor Links (`#section`)**: On long-form pages (1,500+ words, documentation, comprehensive guides), always provide a sticky or top **Table of Contents** using anchor links. This allows scanners to jump directly to their answer and earns rich "jump-to" sitelinks in search engines.

---

## PART III: IHM ERGONOMICS, UX WRITING & NEURO-ACCESSIBILITY

### 3.1 UX Writing & Microcopy Laws
1. **Zero Internal Jargon**: Write in the vocabulary of the customer, never the internal terminology of the company's database or org chart.
2. **Ban Single-Item Bullet Lists**: A bulleted list (`<ul>`) must contain **at least 2 items**. A list with 1 bullet point is a structural error.
3. **Use the Imperative Mood for Actions**: Action buttons and links must begin with clear, active verbs (*"Download the Guide"*, *"Book an Appointment"*, *"Calculate My Rate"*).
4. **Expand Acronyms on First Occurrence**: Always spell out abbreviations the first time they appear on a screen (`SLA (Service Level Agreement)`).
5. **Case Consistency**: Choose either `Title Case` or `Sentence case` for navigation and buttons, and enforce it with 100% consistency across the entire application.

### 3.2 IHM Navigation Rules
1. **The "Zero-Click" Technique**: Expose the core interactive value (e.g., the mortgage calculator, the flight search bar, the template filter) directly on the homepage hero so the user can begin interacting with **zero preliminary navigation clicks**.
2. **Ban "Tunnel / Splash" Pages**: Never force users through an introductory "Welcome / Click Here to Enter Site" splash screen before reaching the actual homepage.
3. **Never Duplicate Browser Native Controls**: Never clutter the UI with custom buttons for *"Bookmark this page"*, *"Set as Homepage"*, or *"Print"* unless printing generates a specialized report.

### 3.3 Image & Animation Ergonomics (Preventing Banner Blindness)
1. **NEVER Animate Core Identity Elements (Logo, H1 Title, Tagline)**:
   - Continuous animation or flashing on a logo or header triggers subconscious **"Banner Blindness"** — users' brains automatically classify moving top-of-page graphics as third-party banner ads and filter them out!
2. **Ban Watermark Backgrounds Under Text**: Never place a low-opacity image or logo watermark directly behind body paragraphs. Even at 10% opacity, watermarks disrupt letterform recognition and slow reading speed by 30%+.
3. **Add Explicit Captions**: When an image conveys technical or contextual proof, attach a concise caption directly underneath it (`<figcaption>`). Scanners read image captions more often than body paragraphs.

### 3.4 The 4 WCAG Accessibility Pillars (Including Neuro-Safety)
Every interface must accommodate all 4 categories of human disability:
1. **Visual Impairments**: High contrast (`4.5:1+`), scalable `rem` typography, non-color-dependent status indicators, and descriptive `alt` text.
2. **Auditory Impairments**: Closed captions, subtitles, and written transcripts for all video or audio content.
3. **Motor / Physical Impairments**: Large click/tap targets (`44px × 44px`), generous spacing between destructive and constructive buttons, and full keyboard `Tab` operability.
4. **Cognitive & Neurological Impairments**:
   - Predictable, consistent navigation landmarks across every screen.
   - **Strict Seizure Prevention Rule (WCAG 2.3.1)**: Never include any element that flashes, strobes, or blinks more than **3 times per second**, as high-frequency visual flicker can trigger photosensitive epileptic seizures.
