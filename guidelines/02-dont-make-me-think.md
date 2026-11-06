# 02 — Usability & Ergonomics Engineering: Don't Make Me Think

> **Source**: Steve Krug (*Don't Make Me Think, Revisited*) — Cognitive Zero-Friction, Scanning, Wayfinding & Goodwill Preservation.

---

## 1. Krug's Three Laws of Usability
1. **First Law — "Don't Make Me Think!"**: Every screen must be self-evident (or at worst instantly self-explanatory). Eliminate every "cognitive question mark" (*"Can I click this? Where am I? What does this jargon mean?"*).
2. **Second Law — Mindless Clicks Over Puzzling Clicks**: The 3-click rule is a myth; 5 unambiguous, effortless clicks with strong **Information Scent** cause far less drop-off than 2 hesitant, puzzling clicks.
3. **Third Law — Omit Needless Words**: Cut 50% of words on every view, then cut 50% of what remains.
   - **Ban "Happy Talk"**: Delete self-congratulatory welcome paragraphs.
   - **Ban Form Instructions**: Make labels, placeholders, and input masks so self-evident that explanatory paragraphs are unnecessary.

---

## 2. How Users Actually Use Interfaces
- **Users Scan, They Don't Read**: Users glance past screens like billboards at 100 km/h, fixating only on task-matching keywords, headings, and high-affordance buttons.
- **Users "Satisfice" (Herbert Simon)**: Users never evaluate all options to find the optimal path; they click the **first reasonable option** that matches their intent. Make the primary conversion path unmistakably prominent.
- **Users Muddle Through**: Users ignore manuals and conceptual models; rely on familiar conventions and explicit visual affordances.

---

## 3. Billboard Design 101: Designing for Scanners
1. **Leverage Conventions**: Place logo top-left (linking to Home), primary nav top/left, search with magnifier in header, account/cart top-right. Only break a convention when proven superior.
2. **Mirror Logical Hierarchy Visually**: Related items share a container; nested items sit visually indented inside their parent zone; importance scales with contrast, weight, and whitespace.
3. **Unmistakable Clickability Affordances**: Never style static headings in the same color as links. Ban "Mystery Meat Navigation" (never require hovering to discover if an element is interactive).
4. **The Proximity Law of Headings**: A heading MUST always sit closer to the paragraph it introduces than to the paragraph preceding it (`margin-top: 32px; margin-bottom: 8px`).
5. **Embedded Micro-Assistance**: Keep inline help **Brief**, **Timely** (directly beside the field), and **Unavoidable**.

---

## 4. Navigation, Information Scent & The Trunk Test
- **The 5 Roles of Navigation**: Reveals current location (*"Where am I?"*), available scope, site mental model, safety anchor (Home), and wayfinding.
- **Persistent Header Suite & The Checkout Exception**:
  - Maintain consistent Site ID, Primary Sections (`4–7` pillars), Utilities, Search, and Page `H1` across all standard views.
  - **Checkout / Multi-Step Onboarding Exception**: Strip global navigation links during payment and registration flows; keep only the Logo, a `"Back to Cart"` link, and a **Step Progress Indicator** (`Step 2 of 3`) to prevent abandonment.
- **Information Scent Law**: The destination page `H1` MUST match the exact wording of the link/button clicked (clicking *"Start Free Trial"* must land on `H1: "Start Your Free Trial"`).
- **The "You Are Here" Indicator & Folder Tabs**: Highlight the active nav item via color, weight, or pill/underline so the active view reads as connected to the foreground plane.
- **The Trunk Test (5-Second Diagnostic)**: On any random interior view, a user must identify within 5 seconds without scrolling: (1) Site ID, (2) Page Name (`H1`), (3) Major Sections, (4) Local Options, (5) "You Are Here" marker/breadcrumbs, and (6) Search.

---

## 5. Homepage Anatomy & The Reservoir of Goodwill
- **5 Questions Answered in 5 Seconds**: *What is this? What do they have? What can I do here? Why choose this over alternatives? Where do I start?*
- **The Essential Tagline**: `6–8` words max next to/below the hero title, specific and benefit-driven (never vague corporate mottos). Protect the Hero from "Tragedy of the Commons" multi-department banner clutter.
- **Preserving the Reservoir of Goodwill**:
  - *What Drains It*: Hiding pricing/shipping fees behind sales walls, punishing users for spaces/dashes in inputs, asking for unnecessary fields (phone number for a PDF), firing newsletter popups on page load, or breaking the browser `Back` button.
  - *What Fills It*: Upfront transparent pricing, auto-formatting inputs, preserving entered form state across validation errors, and 1-click Undo/escape hatches.

---

## 6. Mobile Ergonomics & High-Leverage Accessibility
- **Touch Target Minimum**: Enforce **`44px × 44px`** minimum hit areas (`min-width: 44px; min-height: 44px`) on all interactive controls.
- **Zero Hover Dependencies**: Touchscreens have no hover state (`No cursor = no hover = no clue`). Never hide essential actions or disclosures exclusively inside `:hover`.
- **HTML5 Mobile Keyboards**: Always set `type="email"`, `type="tel"`, or `inputmode="numeric"` (for OTP/PIN/credit cards).
- **4 High-Leverage Accessibility Rules**: (1) Fix structural usability confusion first, (2) Meaningful `alt` text (`alt=""` on decorative assets), (3) True semantic `<button>`, `<a>`, `<h1>–<h3>`, and `<label for="id">`, (4) Full keyboard `Tab` focus rings (`focus-visible:ring-2`).
