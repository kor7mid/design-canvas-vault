# Usability & Ergonomics Engineering Bible: Don't Make Me Think

> **Author**: Steve Krug (World-Renowned Usability Consultant)  
> **Source**: _Don't Make Me Think, Revisited: A Common Sense Approach to Web & Mobile Usability_ (3rd Edition)  
> **Core Objective**: Zero cognitive friction, intuitive information architecture, mindless scanning, and user goodwill preservation.

---

## 1. KRUG'S THREE LAWS OF USABILITY

### 1.1 The First Law of Usability: "Don't Make Me Think!"

- **The Core Axiom**: When a user looks at any screen, it should be **self-evident, obvious, and self-explanatory**.
- **The Concept of Cognitive Question Marks**: Every second a user spends wondering:
  - _"Can I click this?"_
  - _"Where am I?"_
  - _"Where did that link go?"_
  - _"What does this jargon mean?"_
  - _"Why did they put that there?"_
    adds to their mental cognitive load. Each question mark chips away at their patience, confidence, and cognitive energy.
- **The Ultimate Test**: If an element requires more than a fraction of a second to decipher its purpose, refactor it immediately until it is self-evident. If self-evident is impossible due to complexity, it must at least be instantly self-explanatory.

### 1.2 The Second Law of Usability: Mindless Clicks Over Few Puzzling Clicks

- **The Myth**: _"Everything must be accessible within 3 clicks."_
- **The Reality**: The number of clicks does not matter. Users do not mind making 5 or 6 clicks, provided **each click is mindless, obvious, and unambiguous**.
- **The Law**: 3 puzzling, hesitation-filled clicks create vastly more friction and drop-off than 5 effortless, confident clicks with clear scent-trails.

### 1.3 The Third Law of Usability: Omit Needless Words

- **The Rule**: Get rid of half the words on each page. Then get rid of half of what is left.
- **Eliminate "Happy Talk"**:
  - _Banned_: _"Welcome to the Acme Portal! We are dedicated to providing the premier service experience..."_ — Users never read introductory pleasantries; it is pure visual clutter. Cut straight to the value proposition.
- **Eliminate Instructions**:
  - If a form requires a paragraph of instructions explaining how to fill it out, the form is broken. Make the fields, labels, placeholders, and formatting constraints so self-evident that instructions are unnecessary.

---

## 2. HOW USERS REALLY USE WEBSITES & APPS

### Fact #1: Users Don't Read — They Scan

- Developers and copywriters imagine users reading pages top-to-bottom like literature.
- **Reality**: Users glance at screens like drivers speeding past billboards at 100 km/h. They scan for keywords, recognizable logos, high-contrast headings, and prominent buttons that match their immediate intent.

### Fact #2: Users Don't Optimize — They "Satisfice"

- Users do not weigh all available options to find the mathematically optimal path (_optimizing_).
- Users take the **first reasonable, plausible-looking option** they see (_satisficing_, coined by Nobel laureate Herbert Simon).
- **Design Impact**: Make the primary path and obvious next step immediately visible in the primary visual hierarchy. Do not bury primary actions among 8 secondary choices.

### Fact #3: Users Don't Figure Out How Things Work — They Muddle Through

- Most users never read manuals, tooltips, or FAQs. They find a sequence of clicks that happens to work, and they stick with it forever, even if it is inefficient.
- **Design Impact**: Never assume users understand your clever conceptual model. Rely on established conventions and obvious affordances.

---

## 3. BILLBOARD DESIGN 101: DESIGNING FOR SCANNING

To design interfaces for scanners who are in a hurry, apply these 5 rules:

### 3.1 Take Advantage of Conventions

- **The Golden Rule**: Innovate when you have a genuinely better idea, but leverage conventions when you don't.
- Do not reinvent standard UI patterns just to look "original":
  - Shopping cart icon belongs in the top-right corner.
  - Search input belongs in the header with a magnifying glass.
  - Clicking the logo in the top-left returns to the home page.
  - Links are underlined or distinctly colored.
  - Primary button is solid and prominent on the right/bottom of forms.
- Conventions work because users bring mental models from hundreds of other apps. Respecting conventions makes an interface instantly familiar on second zero.

### 3.2 Create Strong Visual Hierarchies

A clear visual hierarchy mirrors the conceptual reality of the page:

1. **The more important something is, the more prominent it must be**:
   - Larger size, heavier weight, higher contrast, more whitespace.
2. **Things that are related logically must be related visually**:
   - Group related controls inside the same card enclosure or under a shared header.
3. **Things that are nested logically must be nested visually**:
   - Indent or containerize subsections to show they belong to a parent topic.

### 3.3 Break Pages into Clearly Defined Areas

- A user should be able to squint at a page and instantly recognize its structural anatomy:
  - This is navigation.
  - This is the main content.
  - This is filtering/sidebar.
  - This is related actions.
- Use subtle background tinting, distinct card surfaces, or clean divider lines to separate distinct zones.

### 3.4 Make It Obvious What's Clickable (Affordance)

- In the real world, a physical switch or button affords pressing because of its shape and elevation.
- On screens, elements must scream their clickability:
  - **Buttons**: Must look like buttons (distinct background, padding, rounded corners, subtle shadow, or icon). Never leave a clickable text link looking identical to static body text.
  - **Links**: Use distinct coloration, underlines on hover, or clear chevron indicators (`→`).
  - **Avoid "Mystery Meat Navigation"**: Never require a user to hover their mouse over an element just to discover if it is interactive.

### 3.5 Eliminate Visual Noise

Visual noise comes in three forms:

1. **Busy-ness**: Too many competing icons, badges, borders, animations, and saturated colors shouting simultaneously.
2. **Background Clutter**: Irrelevant textures, harsh grids, or complex background images that reduce text contrast.
3. **Gratuitous Animation**: Moving banners, pulsing icons, and constant auto-scrolling carousels that distract from task completion.

### 3.6 Format Text to Support Scanning

- **Use plenty of headings**: Well-written headings act as an informal outline of the page.
- **The Proximity Law of Headings**: A heading MUST always be closer to the paragraph that follows it than to the paragraph that precedes it (`margin-top: 2rem; margin-bottom: 0.5rem`). If a heading floats equidistant between two paragraphs, scanners cannot tell which block it belongs to.
- **Keep paragraphs short**: Long walls of text intimidate scanners and get skipped entirely.
- **Use bulleted lists**: Anything that can be listed (3 or more items) should be formatted as a bulleted list with clear vertical spacing.
- **Highlight key terms sparingly**: Bold the most important phrases so a scanner's eye catches the core takeaway in 2 seconds.
- **Never use the same color for links and non-clickable headings**: If your links are blue, never make your static `H2` or `H3` headings the exact same shade of blue, or users will try clicking your headings.

### 3.7 Embedded Guidance ("Some Assistance May Be Required")

When a form or interface requires a complex choice, do not write a manual. Provide inline micro-assistance that obeys three rules:

1. **Brief**: Offer the smallest amount of information that will help the user right now.
2. **Timely**: Place it directly next to the exact field or button where the decision happens.
3. **Unavoidable**: Format it so the user's eye naturally sees it before making a mistake.

---

## 4. STREET SIGNS & BREADCRUMBS: THE SCIENCE OF NAVIGATION

Web navigation is not just a feature — it is the digital equivalent of physical street signs and compass orientation.

### 4.1 The Unbearable Lightness of Browsing & The 5 Roles of Navigation

Unlike physical spaces, the Web has no sense of scale, no sense of direction (left/right/up/down), and no sense of physical location. Navigation compensates for this by fulfilling 5 essential roles:

1. It gives the user a **sense of place** (_"Where am I?"_).
2. It reveals **what is available** on the site (_"What else can I find here?"_).
3. It explains **how to use the site** (shows the core mental model).
4. It provides **an anchor of safety** (the user knows they can always jump back to Home).
5. It acts as a **wayfinding device** (_"How do I get to X?"_).

### 4.2 Persistent Universal Navigation & The Checkout Exception

Every page on a website must consistently provide the 5-part Header Suite:

1. **Site ID / Logo**: Top-left, acts as the global Home button.
2. **Sections (Primary Nav)**: The 4 to 7 main conceptual pillars of the application.
3. **Utilities**: Secondary global functions (Sign In, Account Settings, Language, Cart).
4. **Search Box**: Persistent, visible input with placeholder and search icon.
5. **Page Name**: A prominent, unambiguous `H1` that confirms what page the user is currently looking at.

**The Exception (Forms, Checkouts & Registration)**:

- During multi-step checkouts, payment flows, or onboarding forms, **strip away persistent global navigation**.
- Keep only the **Site ID / Logo**, a simple _"Back to Cart"_ link, and a **Step Progress Indicator** (`Step 2 of 3`). Removing global links prevents users from accidentally wandering off mid-transaction.

### 4.3 Page Names & The "Scent of Information" ("Why I Love to Drive in L.A.")

1. **Every page needs a name**: Just as Los Angeles has giant street signs at every intersection, every screen needs a clear `H1`.
2. **The name must frame the unique content**: It must sit at the top of the primary content area, not buried below banners.
3. **The name MUST match what the user clicked**: This is the law of **Information Scent**. If a user clicks a button labeled _"Start Free Trial"_, the destination page `H1` must say _"Start Your Free Trial"_ — NOT _"Enterprise Subscription Plans"_. Mismatched wording makes users think they took a wrong turn.

### 4.4 The "You Are Here" Indicator & Why Tabs Work

- The current active section in navigation must be visually undeniable (distinct highlight color, bold weight, or underline bar).
- **Why Tabs Are an Elite UI Pattern**:
  1. They are self-evident (everyone understands physical folder tabs).
  2. They are hard to miss.
  3. They create a **physical visual illusion** that the active tab has moved to the foreground plane, physically connected to the content area below it.

### 4.4 Breadcrumbs Architecture

- For sites with deep hierarchies (e-commerce, docs, multi-tenant SaaS):
  - Place breadcrumbs at the very top of the content area, above the page title.
  - Use subtle separators (`/` or `›`).
  - Make ancestor links clickable; make the current page item non-clickable, bold, and un-underlined.
  - Keep breadcrumbs small (`text-xs` / `text-sm`) so they do not compete with the `H1`.

### 4.5 The Trunk Test: The Ultimate Usability Diagnostic

Imagine you are blindfolded, shoved into a car trunk, driven around, and dumped onto a random interior page of a website. Within 5 seconds, without scrolling, you must be able to correctly answer:

1. **What site is this?** (Site ID / Logo in the top-left).
2. **What page am I on?** (Clear, unambiguous Page Name).
3. **What are the major sections of this site?** (Primary navigation bar).
4. **What are my options at this level?** (Local / contextual navigation).
5. **Where am I in the grand scheme of things?** ("You Are Here" indicator or breadcrumbs).
6. **How can I search?** (Visible search box).

If any of these 6 questions takes more than 5 seconds to answer, the navigation architecture fails.

---

## 5. THE BIG BANG THEORY: HOMEPAGE ANATOMY

The Homepage has the hardest job of any screen. Unlike interior pages where the user arrived with specific intent, a homepage visitor might have zero prior knowledge.

### The 5 Questions the Homepage Must Answer in 5 Seconds

1. **What is this?** (What product or service is this?).
2. **What do they have here?** (What can I find or accomplish?).
3. **What can I do here?** (What is the immediate next step / CTA?).
4. **Why should I be here (and not somewhere else)?** (What makes it unique?).
5. **Where do I start?** (Clear entry points: _"Here is where to search"_, _"Here is where to browse"_, _"Here is where to sign up"_).

### The Essential Tagline

- Place a clear, concise tagline directly next to or below the logo/hero title.
- **Good Tagline Attributes**:
  - 6 to 8 words maximum.
  - Specific, lively, and descriptive (_"Personalized meal plans delivered weekly"_).
  - Never confuse a tagline with a corporate motto (_"Excellence in global solutions"_ tells the user nothing).

### Protecting the Homepage from "The Tragedy of the Commons"

- **Why Golden Geese Make Tempting Targets**: Because the homepage gets the most traffic, every department wants a promotional banner on it.
- Adding 8 competing promotional boxes destroys visual hierarchy and blinds users ("banner blindness"). Ruthlessly guard homepage real estate and limit hero focus to a single primary message.

---

## 6. USABILITY AS COMMON COURTESY: THE RESERVOIR OF GOODWILL

Every user arrives at your interface with a mental **Reservoir of Goodwill**.

- When the reservoir is full, users are forgiving of minor bugs or slow load times.
- Each friction point, puzzle, or dark pattern drains the reservoir.
- When the reservoir hits empty, the user leaves and never returns.

### What Drains the Reservoir of Goodwill:

1. **Hiding information users desperately want**: Hiding pricing behind a _"Contact Sales"_ wall, hiding shipping costs until the final payment step, hiding contact info.
2. **Punishing the user for not formatting data your way**: Requiring credit cards without spaces, forcing phone numbers into exact `(XXX) XXX-XXXX` formats instead of parsing input automatically.
3. **Asking for unnecessary information**: Demanding a phone number or company size just to download a PDF or sign up for a newsletter.
4. **Shoveling marketing popups before value is delivered**: Triggering a modal asking for a review or email 3 seconds after landing on the site.
5. **Breaking the browser Back button**: Forcing redirects or state losses that prevent users from going back safely.

### What Fills the Reservoir of Goodwill:

1. **Make everything you do upfront and transparent**: Clear pricing, clear terms, immediate previews.
2. **Save the user steps whenever possible**: Auto-detect country, format credit cards as the user types, retain entered form data when a submission error occurs.
3. **Make error recovery effortless**: Point directly to the field with an error, explain what is wrong in plain human English, and keep all valid fields intact.
4. **Provide easy escape hatches and Undo capabilities**: Make it easy to cancel, go back, or undo accidental actions.

---

## 7. MOBILE USABILITY RULES

### 7.1 Screen Real Estate is Scarce, but Never Sacrifice Usability for Space

- Don't hide essential navigation inside cryptic, unlabeled iconography just to save 20 pixels.
- If an element needs to be explained, label it clearly.

### 7.2 Minimum 44px × 44px Touch Targets

- Fingers are fat and imprecise compared to mouse cursors.
- Every interactive element (buttons, hamburger menus, pagination arrows, dropdown items) must have a clickable/tappable hitbox of **at least 44px × 44px** (Apple Human Interface Guidelines & WCAG AAA).

### 7.3 Flat Design vs. Affordance on Mobile

- Flat design often strips away the 3D visual cues (subtle bevels, shadows, borders, gradients) that tell users an element is a clickable button.
- **Rule**: Never sacrifice clickability signifiers for minimalist aesthetics. Always provide unambiguous visual affordances (pill backgrounds, distinct borders, icons) so users never have to guess what is tappable.
- Hover states do not exist on touchscreens (`No cursor = no hover = no clue`). Never hide essential actions or tooltips behind hover triggers.
- Apps must be both **learnable** and **memorable**: avoid hidden multi-finger gestures or non-standard swipe actions that users will forget the next day.

### 7.4 Input-Type Optimization

- Always declare the correct HTML5 `type` and `inputmode` on mobile fields:
  - `<input type="email">`: Brings up the email keyboard with `@` and `.com`.
  - `<input type="tel">` or `<input inputmode="numeric">`: Brings up the numeric dial pad for phone numbers, OTP codes, and credit cards.

---

## 8. ENDING DESIGN ARGUMENTS & DISCOUNT USABILITY TESTING

### 8.1 The Myth of the Average User ("Farmers vs. Cowmen")

- Design teams waste hours arguing over personal opinions (_"Users hate dropdowns"_ vs _"Users love dropdowns"_).
- **Krug's Axiom**: **There is no Average User.** All web users are unique, and all web use is idiosyncratic.
- Good design is never about finding what "everybody likes" — it is about ensuring the design works cleanly in context for the specific task at hand.

### 8.2 Discount Usability Testing ("10 Cents a Day")

1. **Focus Groups Are NOT Usability Tests**: Focus groups gather opinions about what people _think_ they want; usability testing watches individuals actually _try to use_ the interface and reveals where they get stuck.
2. **Test Early and Often**: Testing **3 users once a month** is vastly more effective than testing 20 users at the end of the project.
3. **Triage (Fixing What Matters)**:
   - Focus ruthlessly on the severe problems that confuse everyone.
   - Ignore **"Kayak Problems"**: when a user momentarily clicks the wrong link, realizes it within 1 second, hits Back, and immediately succeeds. If recovery is instant and painless, it is not a priority bug.

---

## 9. PRACTICAL ACCESSIBILITY & RESISTING DARK PATTERNS

### 9.1 The 4 High-Leverage Accessibility Rules

1. **Fix the usability problems that confuse everyone first**: An interface that is confusing for sighted users is ten times more confusing for screen-reader users.
2. **Add descriptive `alt` attributes to all meaningful images**: Use `alt=""` for purely decorative graphics so screen readers skip them.
3. **Use true semantic HTML & explicit form labels**: Real `<button>`, `<a>`, `<h1>`–`<h3>` hierarchy, and `<label for="id">`.
4. **Ensure flawless keyboard navigation**: Every interactive element must be reachable via `Tab` with a clear `focus-visible:ring-2` indicator.

### 9.2 Resist the Dark Forces (Anti-Dark Patterns)

- Never implement manipulative UI patterns ("Dark Patterns"):
  - No pre-checked newsletter boxes or confusing double-negative opt-outs.
  - No disguised advertisements styled to look like primary navigation buttons.
  - No "Roach Motel" flows where signing up takes 1 click but canceling requires a phone call.
