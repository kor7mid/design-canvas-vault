# 🧠 Playbook & Ruleset — Design System d'Élite (Basé sur 200 Sites Audités)

> **Rôle du document** : Ce fichier fait office de **règles impératives pour l'IA** (Playbook / Guidelines Skill). Il traduit l'audit empirique des 200 sites de référence en directives de code front-end, CSS et design engineering non-négociables.

---

## 🛑 0. Directives Impératives (Ce que l'IA doit REFUSER de faire)

1. **Bannir les dégradés multicolores criards** (ex: violet fluo vers rose bonbon pour le texte ou les fonds).
2. **Bannir les illustrations vectorielles "Corporate Memphis"** (petits bonshommes plats, mains disproportionnées).
3. **Bannir le noir pur absolu (`#000000`)** pour les arrière-plans larges : utiliser exclusivement des fonds texturés à sous-couche chromatique.
4. **Bannir les cartes sans bordure** sur fond sombre : tout bloc d'information doit avoir une micro-bordure délimitant son volume.
5. **Bannir les marges étouffées** : interdiction d'utiliser des paddings verticaux inférieurs à 80px (`py-20`) entre les grandes sections d'une page.

---

## 🎨 1. Palette Chromatique & Tokens de Surface

### A. Règle des Arrière-Plans (Dark & Light)
- **Dark Mode Standard (68% des sites)** :
  - Fond de base : `bg-zinc-950` (`#09090b`) ou `bg-[#08080a]`.
  - Sous-couche lumineuse : Dégradé radial flouté (`radial-gradient(ellipse at top, rgba(120,119,198,0.15), transparent 70%)`).
  - Cartes et conteneurs : `bg-zinc-900/40 backdrop-blur-md` avec bordure `border border-white/10`.
- **Light Mode Éditorial / Fintech (32% des sites)** :
  - Fond de base : Blanc chaud `#ffffff` ou ivoire feutré `#fbfbfa`.
  - Cartes et conteneurs : `bg-white` avec ombre ultra-douce `shadow-[0_4px_20px_rgba(0,0,0,0.04)]` et bordure `border border-zinc-200/80`.

### B. Micro-Bordures Lumineuses (Inner & Outer Borders)
```css
/* Règle d'or de la bordure haut de gamme pour conteneur */
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.4);
```

---

## 🔤 2. Typographie & Hiérarchie Strictes

### A. Règles d'Association Typographique
1. **Titres Techniques & SaaS** : Utiliser *Geist*, *Inter* ou *Plus Jakarta Sans*.
   - **Règle absolue sur les titres (`h1`, `h2`)** : Lettrage resserré obligatoire : `tracking-tight` (`-0.02em`) à `tracking-tighter` (`-0.035em`).
2. **Accents Éditoriaux (Luxe / IA / Pensée)** : Introduire *Instrument Serif* ou *Newsreader* en italique sur le mot-clé principal du titre.
3. **Méta-données & Snippets** : Utiliser *Geist Mono* ou *JetBrains Mono* en taille réduite (`text-xs font-mono uppercase tracking-widest text-zinc-500`).

### B. Matrice de Contraste du Texte
- **Titre principal** : `text-zinc-100` (`#f4f4f5`) sur fond sombre / `text-zinc-900` sur fond clair.
- **Sous-titres & Descriptions** : `text-zinc-400` (`#a1a1aa`) — ne jamais utiliser de gris trop sombre qui nuirait à l'accessibilité.
- **Longueur maximale de lecture** : `max-w-2xl` (65 à 75 caractères par ligne).

---

## 🧩 3. Architecture des Composants Fondamentaux

### A. L'En-tête Flottante (Floating Pill Navbar)
- **Position** : `fixed top-4 left-1/2 -translate-x-1/2 z-50`.
- **Largeur** : Contrainte (`w-[92%] max-w-5xl`).
- **Surface** : `bg-zinc-950/70 backdrop-blur-lg border border-white/10 rounded-full px-5 py-2.5`.
- **Alignement** : Logo monochrome à gauche, liens de navigation centrés en `text-xs text-zinc-400 hover:text-white transition-colors`, double CTA compact à droite.

### B. La Section Hero d'Autorité
1. **Top Badge** : `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 mb-6`.
2. **Grand Titre** : Taille imposante `text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]`.
3. **Double Call-To-Action** :
   - Bouton primaire : Fond blanc solide sur fond noir (`bg-white text-zinc-950 font-medium px-5 py-2.5 rounded-xl hover:bg-zinc-200 transition-all`).
   - Bouton secondaire : Transparent avec bordure fine (`bg-transparent text-zinc-300 border border-white/10 px-5 py-2.5 rounded-xl hover:bg-white/5 transition-all`).
4. **Interface Showcase** : Présentation du produit encapsulée dans un cadre biseauté avec ombre portée douce et bordure éclairée par le haut.

### C. La Grille Bento Asymétrique
- **Grille de base** : `grid grid-cols-1 md:grid-cols-3 gap-4`.
- **Rythme** : Combiner une carte dominante sur deux colonnes (`md:col-span-2`) intégrant une visualisation réelle ou un composant dynamique, et une carte compacte (`md:col-span-1`) avec indicateur chiffré ou métrique forte.

---

## ⚡ 4. Animations & Micro-Interactions Front-End

### A. Courbes d'Accélération (Easing)
- Ne jamais utiliser le timing `linear` par défaut du navigateur.
- Utiliser la courbe standard de l'industrie : `cubic-bezier(0.16, 1, 0.3, 1)` (démarrage franc et amorti ultra-doux).
- Durées recommandées : `duration-150` pour les clics, `duration-200` à `duration-300` pour les survols.

### B. Micro-États au Survol (Hover Interactions)
- **Cartes** : Légère illumination de la bordure (`hover:border-white/20`) et translation quasi-invisible vers le haut (`hover:-translate-y-0.5`).
- **Boutons** : Augmentation subtile de la lueur externe ou décalage de contraste.
