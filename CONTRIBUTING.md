# Contributing Guide — Design Canvas Vault

Thank you for contributing to **Design Canvas Vault**! This guide outlines how to submit new templates and page recipes.

---

## Method 1: Via Vault Studio GUI

1. Start Studio:
   ```bash
   npm start
   ```
2. Open `http://localhost:3333` and click **"+ Add Template"**.
3. Fill in the title, category, your `@github` handle, and paste your HTML/CSS code.
4. Click **"Save to Vault"**. The template is added to `sources/custom/` and indexed automatically.

---

## Method 2: Via Command Line

1. Add your template file to `sources/custom/<template-name>.html`.
2. Run the integrity validator:
   ```bash
   npm run doctor
   ```
3. Synchronize catalogs and AI registries:
   ```bash
   npm run sync
   ```
4. Open a Pull Request on `https://github.com/kor7mid/design-canvas-vault`.

---

## Quality Checklist

- **Self-contained**: Must not depend on external scripts or styles not available in `sources/shared/`.
- **Responsive**: Clean rendering on mobile (375px), tablet (768px), and desktop (1440px).
- **Accessible**: Semantic markup (`header`, `main`, `section`, `nav`) with compliant color contrast.
- **Attribution**: Include your GitHub handle in the header comments to be featured in `catalog/04-custom-templates.md`.
