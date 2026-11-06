# 09 — Playbook Anti-Slop, Vanguard Architecture & Synthèse des 200 Sites

> **Rôle du document** : Manuel prescriptif unifiant **l'audit empirique des 200 sites de référence** (`notes-sites/01..08-*.md`), le **High-Agency Frontend Skill** (`design-taste-frontend`) et l'architecture **Vanguard UI & Motion Choreographer** (`high-end-visual-design`).

---

## 1. Cadrans de Calibration & Moteur de Variance Créative

### A. Cadrans Globaux par Défaut (`8, 6, 4`)
Sauf demande explicite de l'utilisateur, piloter toute génération avec :
- **`DESIGN_VARIANCE: 8`** *(1 = Symétrie, 10 = Asymétrie éditoriale)* : Bannir les Heros centrés dès que `> 4`. Forcer les grilles fractionnaires (`2fr 1fr 1fr`), Split-Screen ou Bento asymétrique.
- **`MOTION_INTENSITY: 6`** *(1 = Statique, 10 = Cinématique)* : Transitions physiques (`cubic-bezier(0.16, 1, 0.3, 1)` ou `cubic-bezier(0.32, 0.72, 0, 1)`), ressorts (`damping: 1.0, response: 0.4`), boutons magnétiques via `useMotionValue` / `useTransform` (jamais de `useState` continu).
- **`VISUAL_DENSITY: 4`** *(1 = Galerie d'art, 10 = Cockpit de pilotage)* : Macro-respiration (`py-24` à `py-40`). Si **`VISUAL_DENSITY > 7` (Cockpit Mode)** : bannir les boîtes de cartes génériques, utiliser exclusivement des filets `1px` (`border-t`, `divide-y`), l'espace négatif et `font-mono` (`tabular-nums`) sur tous les chiffres.

### B. Moteur de Variance Créative (Sélectionner 1 Vibe + 1 Layout par projet)

#### 1. Archétypes d'Ambiance & Texture (Choisir 1)
1. **Ethereal Glass (SaaS / IA / DevTools)** : Noir carbone profond (`#050505` / `#08090a`), orbes radiaux subtils en arrière-plan, surfaces sombres avec bordures `border-white/10`, typographie Grotesk géométrique (`Geist`, `Plus Jakarta Sans`, `Satoshi`).
2. **Editorial Luxury (Lifestyle / Immobilier / Agence / Recherche)** : Crème chaud (`#FDFBF7` / `#faf9f5`), sauge feutré ou espresso profond. Titres massifs en Serif variable à fort contraste (`PP Editorial New`, `Instrument Serif`, `Newsreader`). Grain filmique CSS fixe (`opacity-[0.03]`).
3. **Soft Structuralism (Consumer / Santé / Fintech / Portfolio)** : Fonds gris argenté (`#f4f4f2`) ou blanc pur (`#ffffff`), typographie Grotesk audacieuse (`Clash Display`, `Cabinet Grotesk`), composants flottants avec ombres ambiantes ultra-diffuses multi-couches.

#### 2. Archétypes de Mise en Page (Choisir 1 + Repli Mobile Strict `< 768px`)
1. **The Asymmetrical Bento** : Grille CSS de tailles variées (`col-span-8 row-span-2` combiné à des cartes `col-span-4` empilées).
   - *Repli Mobile* : Retombe en pile 1 colonne (`grid-cols-1 gap-6`), tous les `col-span` remis à `col-span-1`.
2. **The Z-Axis Cascade** : Cartes superposées avec profondeurs variées et micro-rotation (`-2deg` ou `3deg`) pour briser la grille numérique.
   - *Repli Mobile* : Supprimer toutes les rotations et marges négatives sous `768px` pour éviter les conflits de cibles tactiles.
3. **The Editorial Split** : Typographie monumentale sur la moitié gauche (`w-1/2`) et cartes interactives décalées ou pilules défilantes à droite.
   - *Repli Mobile* : Pile verticale pleine largeur (`w-full px-4 py-8`), bloc typographique en haut et flux interactif en dessous.

---

## 2. Micro-Esthétique Haptique & Architecture des Composants

### A. Architecture "Double-Bezel" (Doppelrand / Rayons Concentriques)
Ne jamais poser une carte, une image ou un conteneur majeur à plat. Simuler un châssis usiné (plaque de verre encastrée dans un plateau d'aluminium) :
- **Coque Externe (Outer Shell)** : Conteneur parent avec fond subtil (`bg-black/5` ou `bg-white/5`), micro-bordure externe (`ring-1 ring-black/5` ou `border border-white/10`), padding d'encastrement (`p-1.5` ou `p-2`), et grand rayon externe (`rounded-[2rem]`).
- **Cœur Interne (Inner Core)** : Conteneur enfant avec sa propre surface, son biseau lumineux supérieur (`shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`), et un **rayon mathématiquement concentrique** (`rounded-[calc(2rem-0.375rem)]`, soit $R_{\text{inner}} = R_{\text{outer}} - \text{padding}$).

### B. Boutons "Button-in-Button" & Tension Cinétique
- **Structure** : Boutons principaux en pilule (`rounded-full px-6 py-3`) ou squircle précis (`rounded-xl`), avec dépression physique au clic (`active:scale-[0.98]`).
- **Icône Encapsulée (Trailing Icon Wrapper)** : Une flèche (`↗` ou `→`) ne doit jamais flotter nue à côté du texte. L'encapsuler dans son propre cercle (`w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center`) calé contre le bord droit du bouton.
- **Physique au Survol (`group-hover`)** : Au survol du bouton, le cercle interne se décale en diagonale (`group-hover:translate-x-1 group-hover:-translate-y-[1px] scale-105`), créant une tension cinétique interne.

### C. Rythme Spatial & Eyebrow Tags
- **Macro-Whitespace** : Utiliser `py-24` à `py-40` entre les sections majeures.
- **Eyebrow Tags** : Faire précéder les `H1`/`H2` d'un micro-badge pilule (`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10`).

---

## 3. Chorégraphie du Mouvement (Fluid Dynamics)

1. **Navigation "Fluid Island" & Morphing Hamburger** :
   - **État fermé** : Barre de navigation en pilule de verre flottante détachée du bord supérieur (`mt-6 mx-auto w-max rounded-full backdrop-blur-xl border border-white/10`).
   - **Morphing de l'icône** : Au clic mobile/menu, les barres du hamburger pivotent et translatent de manière fluide pour former un `'X'` parfait (`rotate-45` et `-rotate-45` en position absolue).
   - **Expansion Modale & Révélation Décalée** : Ouverture en overlay plein écran (`backdrop-blur-3xl bg-black/80` ou `bg-white/80`) où chaque lien apparaît par masque ascendant (`translate-y-12 opacity-0` $\rightarrow$ `translate-y-0 opacity-100`) avec cascade (`delay-100`, `delay-150`, `delay-200`).
2. **Interpolation d'Entrée au Scroll** :
   - Aucun bloc ne doit apparaître de façon sèche. Utiliser `IntersectionObserver` ou `whileInView` (Framer Motion) pour exécuter une entrée lourde et fluide (`translate-y-16 blur-md opacity-0` $\rightarrow$ `translate-y-0 blur-0 opacity-100` sur `700ms–800ms` avec `cubic-bezier(0.32, 0.72, 0, 1)`).
   - **Interdiction absolue de `window.addEventListener('scroll')`** pour éviter les reflows continus sur le thread principal.

---

## 4. Directives "Absolute Zero" (Bannissement des Clichés IA)

### A. Visuel, Typographie & Icônes
1. **THE LILA BAN** : Interdiction formelle des dégradés violet/bleu néon IA et des lueurs de boutons violettes. Maximum 1 couleur d'accent (< 80% saturation).
2. **Polices & Hiérarchie** : Privilégier `Geist`, `Plus Jakarta Sans`, `Satoshi`, `Cabinet Grotesk`, `Clash Display`, `PP Editorial New`, `Instrument Serif`. **Zéro police Serif sur les Dashboards logiciels**. Graisses variables intermédiaires (`450`, `510`), lettrage négatif sur les titres (`tracking-tighter`), largeur de corps limitée à `max-w-[65ch]`.
3. **Politique Anti-Emoji & Icônes Fines** : **Zéro emoji** dans le code, les boutons ou les badges. Utiliser des icônes vectorielles à trait fin et constant (`@phosphor-icons/react` Light/Regular, `@radix-ui/react-icons`, Remix Line, `strokeWidth` `1.5`).

### B. Contenu, Données & Copywriting (Fin de l'effet "Jane Doe / Acme")
1. **Zéro Nom ou Marque Générique** : Bannir *"John Doe"*, *"Jane Doe"*, *"Sarah Chan"*, *"Acme"*, *"Nexus"*, *"SmartFlow"*.
2. **Données Organiques Crédibles** : Bannir `99.99%`, `50%`, `1234567`. Utiliser des chiffres organiques réalistes (`47.2%`, `14 820,50 €`, `+1 (312) 847-1928`, `142ms`).
3. **Zéro Jargon Marketing IA** : Bannir *"Elevate"*, *"Seamless"*, *"Unleash"*, *"Next-Gen"*, *"Revolutionize"*. Utiliser des verbes d'action précis et techniques.
4. **Zéro Lien Unsplash Cassé** : Utiliser les previews CDN du Vault (`https://kor7mid.github.io/design-canvas-vault/...`), `https://picsum.photos/seed/{slug}/800/600` ou des composants UI/SVG natifs.

---

## 5. Synthèse Statistique des 200 Sites Audités (`notes-sites/`)

| Fichier Sectoriel (`notes-sites/`) | Sites | Part | ADN Technique Réel |
|---|---|---|---|
| **`01-saas-devtools-infrastructure.md`** | `001–035` | **17.5%** | Carbone `#08090a`, bordures `rgba(255,255,255,0.08)`, Geist/Inter `510`, Bento & code live. |
| **`02-productivity-collaboration-workspace.md`** | `036–065` | **15.0%** | Surfaces tactiles, raccourcis `kbd`, Double-Bezel cards, transitions `150ms`. |
| **`03-fintech-banking-b2b-finance.md`** | `066–095` | **15.0%** | Blanc `#ffffff` / pierre `#f6f5f2`, `tabular-nums` alignés à droite, cartes 3D biseautées. |
| **`04-ai-models-research-labs.md`** | `096–115` | **10.0%** | Papier chaud `#faf9f5` (Anthropic) ou OLED noir, mix Serif éditorial + Monospace. |
| **`05-hardware-luxury-d2c.md`** | `116–140` | **12.5%** | Macro industrielle, rayon `980px` (Apple) ou `0px` (Rimowa/Balenciaga), télémétrie uppercase. |
| **`06-creative-agencies-studios.md`** | `141–160` | **10.0%** | Grilles suisses radicales, typographie `clamp()`, Editorial Split & Z-Axis Cascade. |
| **`07-media-editorial-culture.md`** | `161–180` | **10.0%** | Multi-colonnes éditoriales, filets `1px solid`, Serif haute couture (*Cheltenham*, *Caslon*). |
| **`08-hospitality-health-modern-services.md`** | `181–200` | **10.0%** | Tons terre/sauge, photographie humaine orientée vers le CTA, boutons pilules `48px`. |

---

## 6. Garde-Fous d'Architecture, Performance GPU & Checklist Pré-Livraison

1. **Vérification `package.json` & Lock Tailwind** : Toujours inspecter `package.json` avant d'importer un package tiers. Respecter la syntaxe Tailwind v3 vs v4 (`@tailwindcss/postcss`).
2. **Isolation RSC (`'use client'`)** : Dans Next.js, isoler les animations/interactions dans des composants feuilles `'use client'` ; garder les layouts parents en Server Components.
3. **Stabilité Viewport Mobile (`min-h-[100dvh]`)** : Ne jamais utiliser `h-screen` sur un Hero plein écran ; toujours utiliser `min-h-[100dvh]`.
4. **Discipline GPU (`transform`, `opacity`, `backdrop-blur`, Grain)** :
   - Animer exclusivement `transform` et `opacity`.
   - Appliquer `backdrop-blur` **uniquement** sur les éléments fixes/sticky (navbars, overlays), jamais sur de grands conteneurs en défilement.
   - Appliquer le filtre de grain/bruit uniquement sur un pseudo-élément fixe (`fixed inset-0 pointer-events-none z-50`).
5. **Cycle Complet des 4 États UI** : Toujours implémenter **Loading** (Skeletons sur-mesure), **Empty State** (illustré + CTA), **Error State** (inline sous l'input) et **Active Press** (`active:scale-[0.98]`).
