# 05 — Laws of UX, Cognitive Load & Ethical Choice Architecture

> **Sources**: Jon Yablonski (*Laws of UX*), Sweller & Paas (*Cognitive Load Theory*), CNIL (*Desirable Friction & Dark Patterns*), & Apple WWDC (*8 Principles of Great Design*).

---

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

---

## 2. Cognitive Load Theory (Sweller & Paas)
$$\text{Total Cognitive Load} = \text{Intrinsic Load} + \text{Extraneous Load} + \text{Germane Load}$$
1. **Intrinsic Load (Domain Task Complexity)**: Segment multi-parameter tasks into sequential steps (`1 concept group per view`).
2. **Extraneous Load (UI Noise — Drive to Zero)**:
   - **Ban the Split-Attention Effect**: Place labels, units, and validation errors directly adjacent to the data element—never force users to cross-reference distant legends.
   - **Ban the Redundancy Effect**: Never repeat identical prose alongside redundant decorative explanations.
3. **Germane Load (Mental Schema Building — Maximize)**: Free up working memory via clean typography and consistent patterns so users achieve deep flow.

---

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
