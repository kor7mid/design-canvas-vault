# 06 — Motion Design Systems & Apple Fluid Interfaces

> **Sources**: Val Head (*Animation in Design Systems*), IBM Carbon Motion, & Apple WWDC (*Designing Fluid Interfaces*, 2018–2026).

---

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

---

## 2. Custom Cubic-Bezier Curves & Choreography
Never use `transition: all` or generic `linear` / `ease`.
1. **Ease-Out (Entrances & User-Initiated Responses — Default)**: Enters at high velocity and decelerates with physical friction (`--ease-out-default: cubic-bezier(0.16, 1, 0.3, 1)` or Apple sheet `cubic-bezier(0.32, 0.72, 0, 1)`).
2. **Ease-In (Exits & Dismissals)**: Accelerates out of the viewport (`--ease-in-exit: cubic-bezier(0.4, 0, 1, 1)`). Always set exit duration **`20%–30%` faster** than entrance (`220ms` in $\rightarrow$ `150ms` out).
3. **Ease-In-Out (On-Screen Point-to-Point Reflow)**: Sliding tab indicators, layout shifts (`--ease-in-out-move: cubic-bezier(0.4, 0, 0.2, 1)`).
4. **Expressive Overshoot**: Badge pop-ins, checkmarks (`--ease-spring-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Choreography Rules**:
  - *Spatial Consistency*: Enter and exit along the exact same vector (a sheet sliding up from bottom must dismiss down to bottom). Anchor popovers/menus to their trigger (`transform-origin`).
  - *Overlapping Stagger*: Overlap list/grid item entrances by **`30ms–50ms`** (`animation-delay: calc(var(--index) * 40ms)`), capping total group reveal at **`< 500ms`**.

---

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

---

## 4. Compositor Performance (`60fps / 120fps`) & Vestibular Accessibility
- **Animate Compositor-Only Properties**: Restrict animations strictly to **`transform`** (`translate3d`, `scale`, `rotate`) and **`opacity`**. Never animate `width`, `height`, `top`, `left`, `margin`, or `box-shadow` directly (to animate a hover shadow, pre-render it on an `::after` pseudo-element and transition its `opacity`).
- **Respect `prefers-reduced-motion: reduce` (WCAG 2.3.3)**: Replace spatial slides/springs/parallax with gentle opacity cross-fades (`120ms–200ms`).
