# 06 — Animation & Motion Design Systems

> **Source Distillation**: *Animation in Design Systems* by Val Head (Adobe) & *Designing Interface Animation* (referencing IBM Carbon, Google Material, Adobe Spectrum, Microsoft Fluent, and Salesforce Lightning motion systems).
> **Scope**: Universal, stack-agnostic motion tokens, cubic-bezier easing architecture, choreography, and hardware-accelerated performance.

---

## 1. The Role of Motion in a Design System

Animation is a first-class design pillar alongside typography, color, and spacing. When motion is omitted from a design system, teams fall into one of two failure modes:
1. **Inconsistent Chaos**: Every engineer invents arbitrary durations and easing curves (`transition: all 0.5s ease`), resulting in a disjointed product feel.
2. **Static Rigidity**: Motion is skipped entirely because nobody has time to design and tune curves from scratch for every component.

A complete Motion System provides **smart, tokenized defaults** tied to a clear brand point of view so engineers can implement purposeful, cohesive animations in seconds.

---

## 2. Productive vs. Expressive Motion (The Dual-Context Model)

Following the industry-standard model pioneered by IBM Carbon and Val Head, categorize every interface animation into one of two distinct contexts:

| Dimension | **Productive Motion** | **Expressive Motion** |
|---|---|---|
| **Primary Goal** | Efficiency, responsiveness, spatial orientation, low cognitive load. | Brand personality, storytelling, celebration, high visual impact. |
| **Where to Use** | Dropdowns, tooltips, tab switches, table sorting, form validation, hover states, inline accordions. | Onboarding flows, marketing hero reveals, empty-state illustrations, major milestone celebrations, full-page transitions. |
| **Duration Range** | **`70ms – 240ms`** (fast, subtle, invisible). | **`250ms – 600ms`** (deliberate, noticeable, choreographed). |
| **Easing Style** | Crisp, high-efficiency deceleration with zero bounce or overshoot. | Dramatic acceleration/deceleration or subtle spring overshoot (`cubic-bezier(0.34, 1.56, 0.64, 1)`). |

---

## 3. Motion Building Blocks: Duration Tokens

Duration must scale proportionally with **distance traveled**, **element size**, and **complexity of the transition**:
- Small, simple state changes (color, opacity, icon swap) require the shortest durations.
- Large-area movements (drawers, modals, full-screen panels) require longer durations so the eye can track the motion without jarring visual jumps.
- **Viewport Scaling**: An element traversing a `1440px` desktop monitor covers more physical distance than on a `375px` mobile screen; keep full-container transitions slightly faster on mobile (`~200ms–250ms`) and slightly longer on large desktop viewports (`~250ms–350ms`).

### Universal Duration Token Scale

```css
:root {
  /* Micro-interactions: hover states, focus rings, button press, checkboxes */
  --duration-instant: 70ms;
  --duration-fast:    120ms;

  /* Standard UI: tooltips, dropdown menus, tabs, toasts, small modals */
  --duration-normal:  180ms;
  --duration-moderate: 240ms;

  /* Large Layout & Choreography: side drawers, accordions, page transitions */
  --duration-slow:    320ms;
  --duration-slower:  450ms;
}
```

> **Rule of Thumb**: UI functional animations should almost never exceed **`400ms`** (the Doherty Threshold). If a utility menu or modal takes `600ms` to open, users perceive the application as sluggish rather than smooth.

---

## 4. Motion Building Blocks: Custom Easing Curves

Never rely on generic CSS keywords (`linear`, `ease`, `ease-in`, `ease-out`) for structural motion. Establish **3 core custom cubic-bezier curves** (inspired by Robert Penner's easing equations) to build recognizable **Motion Equity**:

### 4.1 Ease-Out (Entrances & User-Initiated Responses) — *Default Curve*
Objects enter the screen at high velocity and decelerate smoothly to a rest—mimicking physical friction. Because it starts fast, the interface feels immediately responsive to user clicks.
- **Use for**: Opening modals, dropdowns, drawers, toast notifications, hover elevations, and revealing new content.
- **Tokens**:
  - Productive Ease-Out: `cubic-bezier(0.16, 1, 0.3, 1)` *(Expo Out)* or `cubic-bezier(0.22, 1, 0.36, 1)` *(Quint Out)*
  - Standard UI Ease-Out: `cubic-bezier(0.0, 0.0, 0.2, 1)`

### 4.2 Ease-In (Exits & Dismissals)
Objects accelerate from rest and leave the viewport at peak speed. Because the user is dismissing the element, it gets out of the way cleanly without lingering.
- **Use for**: Closing modals, dismissing toasts, collapsing menus, and sliding panels off-screen.
- **Duration Pairing**: Exit animations should always be **`20%–30%` faster** than their corresponding entrance animation (e.g., `220ms` entrance $\rightarrow$ `150ms` exit).
- **Tokens**:
  - Productive Ease-In: `cubic-bezier(0.4, 0.0, 1, 1)` or `cubic-bezier(0.55, 0.055, 0.675, 0.19)`

### 4.3 Ease-In-Out (Point-to-Point On-Screen Movement)
Objects accelerate smoothly from rest and decelerate smoothly into their new position on screen.
- **Use for**: Elements that start visible and end visible in a new location—sliding tab indicators, layout reflows, carousel slides, and expanding cards.
- **Tokens**:
  - Productive Ease-In-Out: `cubic-bezier(0.4, 0.0, 0.2, 1)`
  - Expressive Ease-In-Out: `cubic-bezier(0.65, 0, 0.35, 1)`

### 4.4 Spring / Overshoot Curve (Expressive Emphasis Only)
Adds a slight follow-through bounce to convey warmth, playfulness, or celebratory confirmation.
- **Use for**: Badge pop-ins, success checkmarks, drag-and-drop snap release, or playful consumer brands.
- **Token**: `cubic-bezier(0.34, 1.56, 0.64, 1)`

```css
:root {
  --ease-out-default:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-exit:        cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out-move:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 5. Choreography & Sequencing Principles

When multiple elements or properties animate simultaneously, apply strict choreography rules so the user's eye is guided along a single coherent focal path:

1. **Entrances Inform Exits (Spatial Mental Map)**:
   - Maintain spatial consistency. If a bottom sheet enters by sliding up from the bottom edge, it must exit by sliding back down toward the bottom edge—reinforcing the mental model of where off-screen objects "live."
2. **Overlapping Action (Staggered Reveals)**:
   - Never wait for Item 1 in a list or card grid to finish its `240ms` entrance before starting Item 2. Overlap their animations with a tight stagger delay of **`30ms–50ms`** per item (`animation-delay: calc(var(--index) * 40ms)`).
   - **Cap Total Stagger Duration**: The entire group reveal must complete within **`400ms–500ms`** total. If a list has 20 items, cap the stagger after the first 6–8 visible items so the bottom of the page doesn't take 2 seconds to appear.
3. **Clean Sequencing During View Transitions**:
   - When transitioning between two complex views inside the same container, fade out exiting elements slightly faster (`100ms–120ms`) before or just as entering elements fade and slide in (`180ms–240ms`), preventing muddied mid-transition overlap.
4. **Motion Paths**:
   - **Grid-Aligned Straight Paths**: Convey precision, speed, and technical efficiency (ideal for enterprise SaaS, financial dashboards, and developer tools).
   - **Curved / Arched Paths**: Convey organic warmth and physical naturalism (used when morphing a floating card into a full-screen view).

---

## 6. Hardware Acceleration & Accessibility (Mandatory Engineering Rules)

1. **Animate Compositor-Only Properties (`60fps / 120fps`)**:
   - Restrict CSS and JS animations strictly to **`transform`** (`translate3d`, `scale`, `rotate`) and **`opacity`**.
   - **Never animate layout or paint properties** (`width`, `height`, `top`, `left`, `margin`, `padding`, `box-shadow` directly on large elements) as they trigger expensive main-thread layout recalculations and frame drops.
   - To animate an elevated shadow on hover, pre-render the shadow on an `:after` pseudo-element and animate only its `opacity`.
2. **Never Use `transition: all`**:
   - Explicitly declare the exact properties being transitioned (`transition: transform var(--duration-normal) var(--ease-out-default), opacity var(--duration-normal) var(--ease-out-default)`).
3. **Respect `prefers-reduced-motion` (WCAG 2.3.3)**:
   - Vestibular disorders cause physical motion sickness when exposed to parallax scrolling, zooming scales, and large spatial translations.
   - Never strip all visual feedback for reduced-motion users; instead, **replace spatial movement (`translate`, `scale`) with gentle cross-fades (`opacity`)** or instant state swaps:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 120ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Conducting a Motion Audit

When introducing motion governance into an existing application:
1. **Inventory**: Record every existing transition across the product (hover states, modals, page loads, notifications).
2. **Group by Purpose**: Consolidate all recorded animations into 4–5 purpose-driven buckets (*Micro-interactions, Entrances, Exits, Point-to-Point Layout Shifts, Attention/Status*).
3. **Consolidate & Tokenize**: Replace arbitrary one-off durations and default CSS easing curves with the standardized Duration and Easing tokens defined above.
