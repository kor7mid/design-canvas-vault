# 🏛️ Blueprint Complet & Plan d'Exécution — `design-canvas-vault`

> **Instructions pour l'Agent IA dans `/home/midekordavidyayra/Documents/projects/design-canvas-vault`** :
> Ce fichier contient la spécification complète validée par l'utilisateur.
> **Source brute à scanner** : `/home/midekordavidyayra/Documents/projects/saas/canvas-source`
> **Repo cible** : `/home/midekordavidyayra/Documents/projects/design-canvas-vault` (`https://github.com/kor7mid/design-canvas-vault`)

---

## 1. Identité & Commandes Officielles

- **Nom du Skill & Repo** : `design-canvas-vault`
- **GitHub Repository** : `kor7mid/design-canvas-vault` (Public)
- **Installation Universelle du Skill (par n'importe qui)** :
  ```bash
  npx skills add kor7mid/design-canvas-vault -g
  ```
- **Lancement de l'IHM Visuelle (Vault Studio)** :
  ```bash
  npm start
  # ou
  npx design-canvas-vault studio
  ```

---

## 2. Les 26 Fonctionnalités Validées (De A à Z)

### PILIER 1 : Recherche, Choix Visuel & Intelligence Contextuelle (L'IA)

1. **Zéro Surcharge Mémoire (Lazy-Loading Architecture)** :
   L'IA ne charge jamais les 850 fichiers d'un coup. Elle lit d'abord les index ultra-compacts (`catalog/*.md` ou `registry/llm-index.json`), puis utilise les outils CLI du repo pour extraire uniquement le bloc précis dont elle a besoin.
2. **Mode "Lookbook Interactif" avec Images dans le Chat** :
   Avant de coder, l'IA propose **3 à 4 templates** correspondant au besoin de l'utilisateur et **affiche leurs vraies captures d'écran (`![preview](sources/previews/...)`) directement dans le chat Zed**. L'utilisateur voit visuellement les modèles et choisit son numéro.
3. **Détection Automatique du Secteur & Recommandation Métier** :
   Quand l'utilisateur mentionne un secteur (ex: Fintech, Médical, Immobilier, Restaurant, SaaS, Agence, E-commerce, Salle de sport, Juridique), l'IA croise automatiquement avec les **75 niches métiers** du Vault pour proposer la direction artistique, les couleurs, les polices et les blocs dédiés à ce business.
4. **"Mix & Match" Chirurgical (Fusion de Templates)** :
   Possibilité de combiner la structure de plusieurs blocs (ex: `header-floating` + `hero-18` + `cards-switch` + `pricing-5`) et de leur appliquer l'ADN visuel (couleurs + polices) d'une démo métier (ex: `demo-saas-2` ou `demo-finance`).

---

### PILIER 2 : Outils CLI Internes pour l'IA & le Développeur (`scripts/vault-cli.js`)

Au lieu que l'IA lise des fichiers HTML bruts de 1200 lignes à la main, le repo embarque un outil CLI ultra-rapide (`node scripts/vault-cli.js <commande>`) :

5. **`vault search <query>` (Moteur de recherche instantané)** :
   Cherche par mot-clé, catégorie, secteur, couleur, layout ou effet motion parmi les 850+ templates et renvoie les meilleurs résultats avec ID, titre, catégorie, fichier source et image preview.
6. **`vault inspect <id>` (Scanner Anatomique d'un Template)** :
   Scanne n'importe quel template du Vault et renvoie instantanément son **anatomie pure** :
   - Arbre DOM simplifié (sections, grilles, cartes)
   - Classes CSS et variables (`--cnvs-*`) utilisées
   - Couleurs Hex et Polices Google Fonts détectées
   - Sous-sections disponibles.
7. **`vault extract <id> [--section hero|pricing|content|...]` (Lecteur Chirurgical)** :
   Extrait **uniquement** le code HTML/CSS purifié du composant demandé (en supprimant automatiquement les `<head>`, menus répétés de 400 lignes, footers génériques et scripts jQuery inutiles).
8. **`vault tokens <demo-id> [--format tailwind|css|rn]` (Extracteur de Design System)** :
   Scanne le fichier CSS d'une des 75 démos métiers (ex: `demos/finance/finance.css`) et génère automatiquement les tokens au format **Tailwind Config**, **Variables CSS `:root`**, ou **Theme JSON (React Native / Expo)**.

---

### PILIER 3 : IHM Visuelle Complète ("Vault Studio" — Explorer, Éditer, Empiler, Ajouter)

Interface graphique locale (`studio/` servie sur `http://localhost:3333`) :

9. **Explorateur Visuel Complet des 850+ Templates** :
   Recherche en temps réel, filtres par grande famille (_Blocs UI, 75 Démos Métiers, Pages Applicatives, One-Page, Custom_) et par sous-catégorie (_Heros, Pricing, Cards/Bento, Nav/Headers, Forms/Auth, Testimonials, FAQ, Sliders, Charts, Shop, Misc_).
10. **Prévisualiseur Live Multi-Écrans (Desktop / Tablette / Mobile)** :
    Rendu interactif en temps réel redimensionnable (1440px, 768px, 375px) avec inspection visuelle.
11. **Éditeur Visuel de Tokens & Thème en Direct (Live Theme Customizer)** :
    Modification en direct de la couleur d'accent (`--cnvs-themecolor`), du mode Clair / Dark Luxury, des polices, des rayons de bordure et des effets Motion (Border Beam, 3D Tilt, Spotlight).
12. **Éditeur de Code Live Intégré (HTML / CSS Split-View & Sauvegarde)** :
    Panneau pour inspecter et modifier le code HTML/CSS d'un template en direct, voir le rendu immédiatement, et cliquer sur **"Sauvegarder dans le Vault"** pour modifier ou créer une nouvelle variante.
13. **Constructeur de Pages ("Page Composer / Stack Builder")** :
    Permet d'empiler plusieurs blocs dans l'IHM (ex: `Header` + `Hero` + `Bento Grid` + `Pricing` + `FAQ` + `Footer`), de prévisualiser la page complète assemblée, et de l'envoyer en 1 clic à l'IA.
14. **Bouton "+ Ajouter un Template" dans l'IHM (Add Template Wizard)** :
    Formulaire visuel dans l'IHM où l'utilisateur colle du code (HTML, Tailwind, React/JSX) ou glisse un fichier, choisit le titre, la catégorie, les tags et son pseudo GitHub, prévisualise le rendu et clique sur **Enregistrer** -> crée le fichier dans `sources/custom/` et met à jour automatiquement les catalogues.
15. **Pont Temps-Réel IHM ↔ Agent IA (`.vault-state.json`)** :
    Synchronise en temps réel le composant sélectionné, la pile de page (Page Stack), le thème choisi et la stack cible (_Next.js/Tailwind_, _React Native/Expo_, _HTML/CSS_) avec l'agent IA dans l'éditeur.

---

### PILIER 4 : Transformation Design & Multi-Stack

16. **Traduction Multi-Stack Haute Fidélité** :
    Règles strictes de conversion vers **Next.js / React + Tailwind CSS + shadcn/ui**, **React Native / Expo (StyleSheet / NativeWind + Reanimated)**, **Vue / Nuxt / Svelte**, ou **HTML5 / CSS Moderne**.
17. **Convertisseur Automatique Light Mode ↔ Dark Luxury** :
    Matrice de conversion des surfaces et bordures pour passer n'importe quel bloc clair en Dark Mode haut de gamme (et inversement) sans casser les contrastes.
18. **Bibliothèque "Motion Recipes" (Framer Motion / Reanimated / GSAP / CSS)** :
    Traduction des effets spéciaux (`sticky-cards`, `expanding-cards`, `rotate-text`, `custom-cursor`, `parallax`, `flip-cards`, `ticker`) en animations modernes 60fps.
19. **Mode "Redesign My Existing Code" (Refonte sans casser la logique)** :
    Remplace le design d'un composant ou d'une page existante d'un projet par un modèle du Vault tout en conservant 100% des `props`, `states`, formulaires et appels API.
20. **Zéro "Lorem Ipsum" + États UI Réels (Skeleton, Empty, Error, Hover)** :
    Remplacement automatique du faux texte par du vrai copywriting métier + génération des états de chargement (`skeleton-loading`), vide, erreur et hover/focus.

---

### PILIER 5 : Fonctionnalités Communautaires & Open-Source (Croissance & Contributions GitHub)

21. **Wizard CLI de Contribution (`npm run contribute`)** :
    Commande interactive permettant à n'importe quel développeur d'ajouter un nouveau template en 30 secondes (nettoyage automatique, indexation et préparation de la Pull Request).
22. **Crédit Auteur Automatique (`author: "@github-username"`)** :
    Chaque template affiche le pseudo GitHub de son créateur dans l'IHM Studio et dans `GALLERY.md` ("Contributors Hall of Fame").
23. **Système de "Community Presets & Full-Page Recipes" (`presets/*.json` & `catalog/05-presets-recipes.md`)** :
    Recettes de pages complètes partageables (ex: _SaaS Dark Stripe_, _Fintech Trust_, _E-Commerce Minimal_, _Medical Care_, _Agency Portfolio_).
24. **Galerie Publique GitHub Auto-Générée (`GALLERY.md`)** :
    Lookbook visuel sur GitHub avec miniatures d'aperçu, palettes Hex des 75 démos, IDs et prompts prêts à copier.
25. **Validateur d'Intégrité (`npm run doctor`)** :
    Vérifie que chaque entrée du catalogue pointe vers un fichier source valide, que le code est purifié et que les index LLM restent légers.
26. **Commande IA "Save to Vault"** :
    Permet de dire à l'IA depuis n'importe quel projet : _"Sauvegarde ce composant dans mon `design-canvas-vault`"_, ce qui l'ajoute dans `sources/custom/` et lance `npm run sync`.

---

## 3. Architecture Exacte des Fichiers à Générer dans `design-canvas-vault`

```text
design-canvas-vault/
├── SKILL.md                          # Le Skill IA officiel (Frontmatter name: design-canvas-vault + Règles + CLI + Mode Lookbook)
├── README.md                         # Vitrine GitHub (npx skills add kor7mid/design-canvas-vault, Studio, CLI, Contribution)
├── GALLERY.md                        # Lookbook visuel GitHub complet (75 Démos + 230 Blocs + Pages avec miniatures)
├── CONTRIBUTING.md                   # Guide de contribution rapide en 1 commande
├── SKILL-BLUEPRINT.md                # Ce document de spécification
├── package.json                      # Package "design-canvas-vault" + bin CLI + scripts (start, build, search, inspect, extract, tokens, sync, contribute, doctor)
├── .gitignore                        # Ignore node_modules, .DS_Store, etc.
├── .vault-state.json                 # État temps-réel synchronisé entre l'IHM Vault Studio et l'Agent IA
│
├── scripts/
│   ├── build-vault.js                # Scanner complet qui lit /home/midekordavidyayra/Documents/projects/saas/canvas-source
│   │                                 # -> Purifie les HTML/CSS, copie les miniatures et génère catalog/ + registry/ + GALLERY.md
│   └── vault-cli.js                  # CLI complet : studio | search | inspect | extract | tokens | add | sync | contribute | doctor
│
├── studio/                           # IHM Visuelle Complète ("Design Canvas Vault Studio")
│   ├── index.html                    # Interface 4-en-1 : Explorateur (Blocs/Démos/Pages/Custom), Live Preview, Page Stack Composer, Code Editor & Add Template Modal
│   ├── app.js                        # Logique complète connectée au serveur local
│   └── style.css                     # Design Dark Luxury
│
├── catalog/                          # Index Markdown ultra-légers lus par l'IA en 1 seconde
│   ├── 01-demos-dna.md               # ADN extrait des 75 niches (Couleur primaire Hex, Polices Google Fonts, CSS path, Fichier HTML)
│   ├── 02-blocks-catalog.md          # Catalogue des 230+ blocs UI par catégorie (Heros, Pricing, Cards, Nav, Forms, FAQ, Sliders, Misc)
│   ├── 03-pages-layouts.md           # Catalogue des Pages (Auth/Login, Charts/DataTables, Shop/Cart, 60 One-Pages, Portfolios, Blogs)
│   ├── 04-custom-templates.md        # Catalogue des templates ajoutés via l'IHM ou la communauté
│   └── 05-presets-recipes.md         # Recettes de pages complètes pré-assemblées (Full-Page Blueprints)
│
├── registry/
│   ├── catalog.json                  # Base de données JSON complète (Blocs + 75 Démos + Pages + Custom + Tokens) pour l'IHM et le CLI
│   └── llm-index.json                # Index ultra-compact pour recherche rapide
│
└── sources/                          # Sources purifiées et autonomes incluses dans le repo
    ├── blocks/                       # Les 230+ blocs HTML purifiés (uniquement le cœur du design, sans header/footer de démo)
    ├── demos/                        # Les 75 démos : HTML purifié + feuilles CSS originales (saas.css, finance.css, etc.)
    ├── pages/                        # Pages clés purifiées (login, charts, shop, onepage, etc.)
    ├── custom/                       # Dossier pour les nouveaux templates ajoutés via l'IHM ou `npm run contribute`
    └── previews/                     # Miniatures d'aperçu copiées depuis canvas-source/images/blocks/preview/
```

---

## 4. Plan d'Exécution Immédiat (4 Étapes)

Dès l'ouverture de ce fichier dans `/home/midekordavidyayra/Documents/projects/design-canvas-vault`, exécuter dans l'ordre :

1. **Étape 1 (`package.json` + `scripts/build-vault.js`)** :
   - Scanner `/home/midekordavidyayra/Documents/projects/saas/canvas-source` (ou copier/lier les fichiers nécessaires).
   - Extraire et purifier :
     - Tous les **230+ blocs** (`block-*.html`) -> `sources/blocks/`
     - Toutes les **75 démos métiers** (`demo-*.html` + `demos/<niche>/<niche>.css` avec extraction automatique des `--cnvs-themecolor`, `--cnvs-body-font`, `--cnvs-primary-font`) -> `sources/demos/`
     - Les **Pages & Composants** (`login-*.html`, `charts-*.html`, `op-*.html`, `component-*.html`, `forms-*.html`, `header-*.html`, `footer-*.html`, `shop-*.html`) -> `sources/pages/`
     - Les miniatures d'aperçu (`images/blocks/preview/*`) -> `sources/previews/`
   - Générer automatiquement `catalog/01-demos-dna.md` à `05-presets-recipes.md`, `registry/catalog.json` et `GALLERY.md`.

2. **Étape 2 (`scripts/vault-cli.js`)** :
   - Implémenter toutes les commandes CLI : `search`, `inspect`, `extract`, `tokens`, `sync`, `contribute`, `doctor`, et `studio` (serveur HTTP local avec API REST pour sauvegarder/éditer/ajouter des templates depuis l'IHM).

3. **Étape 3 (`SKILL.md` + `README.md` + `CONTRIBUTING.md`)** :
   - Créer `SKILL.md` à la racine avec `name: design-canvas-vault` + workflow complet (Lookbook interactif avec images preview, utilisation de `vault-cli.js`, Mix & Match, traduction multi-stack).
   - Installer aussi le lien dans `~/.agents/skills/design-canvas-vault` pour qu'il soit actif immédiatement dans Zed.

4. **Étape 4 (`studio/index.html`, `studio/app.js`, `studio/style.css`)** :
   - Construire l'IHM **Design Canvas Vault Studio** avec :
     - Navigation dans les Blocs, les 75 Démos (avec affichage de leur palette et polices), les Pages et les Custom.
     - Prévisualisation live + Customizer de couleurs/mode sombre.
     - Onglet **Page Composer** (empiler plusieurs blocs pour créer une page entière).
     - Onglet **Live Code Editor** (modifier le code et sauvegarder).
     - Bouton **"+ Add Template"** (ajouter un nouveau template directement depuis l'IHM).
