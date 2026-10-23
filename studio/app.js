/**
 * Canvas Vault Studio — Bespoke Frontend Architecture
 *
 * @typedef {Object} VaultItem
 * @property {string} id
 * @property {string} name
 * @property {'block' | 'demo' | 'page'} type
 * @property {string} [niche]
 * @property {string} [category]
 * @property {string} [subcategory]
 * @property {string} [file]
 * @property {string} [htmlPath]
 * @property {string} [cssPath]
 * @property {string} [preview]
 * @property {string} [primaryColor]
 * @property {string} [secondaryColor]
 * @property {string} [bodyFont]
 * @property {string} [primaryFont]
 * @property {string[]} [tags]
 */

/**
 * @typedef {Object} CatalogPayload
 * @property {VaultItem[]} blocks
 * @property {VaultItem[]} demos
 * @property {VaultItem[]} pages
 */

/** @type {CatalogPayload} */
let catalog = { blocks: [], demos: [], pages: [] };

/** @type {VaultItem[]} */
let allItems = [];

/** @type {VaultItem[]} */
let filteredItems = [];

let activeCategory = "all";

/** @type {VaultItem | null} */
let activeItem = null;

/** @type {VaultItem[]} */
let currentStack = [];

// DOM Elements
const searchInput = /** @type {HTMLInputElement} */ (
  document.getElementById("searchInput")
);
const categoryRail = /** @type {HTMLElement} */ (
  document.getElementById("categoryRail")
);
const sidebarCardsList = /** @type {HTMLElement} */ (
  document.getElementById("sidebarCardsList")
);
const lookbookGrid = /** @type {HTMLElement} */ (
  document.getElementById("lookbookGrid")
);
const liveIframe = /** @type {HTMLIFrameElement} */ (
  document.getElementById("liveIframe")
);
const canvasFrame = /** @type {HTMLElement} */ (
  document.getElementById("canvasFrame")
);
const activeIdPill = /** @type {HTMLElement} */ (
  document.getElementById("activeIdPill")
);
const activeNameLabel = /** @type {HTMLElement} */ (
  document.getElementById("activeNameLabel")
);
const accentColorPicker = /** @type {HTMLInputElement} */ (
  document.getElementById("accentColorPicker")
);
const btnAddToStack = /** @type {HTMLButtonElement} */ (
  document.getElementById("btnAddToStack")
);
const btnCopyPrompt = /** @type {HTMLButtonElement} */ (
  document.getElementById("btnCopyPrompt")
);
const btnCopyInstall = /** @type {HTMLElement} */ (
  document.getElementById("btnCopyInstall")
);
const headerStackCount = /** @type {HTMLElement} */ (
  document.getElementById("headerStackCount")
);

// View Switcher Panels
const viewPanels = {
  split: document.getElementById("viewSplit"),
  gallery: document.getElementById("viewGallery"),
  composer: document.getElementById("viewComposer"),
};

// Composer Elements
const composerStackList = /** @type {HTMLElement} */ (
  document.getElementById("composerStackList")
);
const composerIframe = /** @type {HTMLIFrameElement} */ (
  document.getElementById("composerIframe")
);
const btnClearStack = /** @type {HTMLButtonElement} */ (
  document.getElementById("btnClearStack")
);
const btnExportPage = /** @type {HTMLButtonElement} */ (
  document.getElementById("btnExportPage")
);

// Toast
const vaultToast = /** @type {HTMLElement} */ (
  document.getElementById("vaultToast")
);
const toastText = /** @type {HTMLElement} */ (
  document.getElementById("toastText")
);

/**
 * @param {string} message
 */
function showToast(message) {
  if (!toastText || !vaultToast) return;
  toastText.textContent = message;
  vaultToast.classList.add("visible");
  setTimeout(() => vaultToast.classList.remove("visible"), 2200);
}

// Initialize Studio
async function init() {
  try {
    const res = await fetch("/api/catalog");
    catalog = await res.json();

    const blocks = (catalog.blocks || []).map((b) => ({
      ...b,
      type: /** @type {const} */ ("block"),
    }));
    const demos = (catalog.demos || []).map((d) => ({
      ...d,
      type: /** @type {const} */ ("demo"),
      category: d.niche,
    }));
    const pages = (catalog.pages || []).map((p) => ({
      ...p,
      type: /** @type {const} */ ("page"),
      category: p.subcategory,
    }));

    allItems = [...blocks, ...demos, ...pages];
    filteredItems = [...allItems];

    renderSidebarCards();
    renderGalleryGrid();

    // Select initial item
    const initial = blocks.find((b) => b.id === "block-hero-10") || blocks[0];
    if (initial) selectItem(initial);
  } catch (err) {
    console.error("Failed to load catalog:", err);
  }
}

// Filter Logic
function filterTemplates() {
  const q = searchInput ? searchInput.value.toLowerCase().trim() : "";

  filteredItems = allItems.filter((item) => {
    let matchesCat = true;
    if (activeCategory === "blocks") matchesCat = item.type === "block";
    else if (activeCategory === "demos") matchesCat = item.type === "demo";
    else if (activeCategory === "pages") matchesCat = item.type === "page";
    else if (activeCategory === "hero") matchesCat = item.id.includes("hero");
    else if (activeCategory === "pricing")
      matchesCat = item.id.includes("pricing");
    else if (activeCategory === "cards") matchesCat = item.id.includes("card");

    if (!matchesCat) return false;

    if (!q) return true;
    const name = (item.name || item.id || "").toLowerCase();
    const id = item.id.toLowerCase();
    const tags = (item.tags || []).join(" ").toLowerCase();
    return name.includes(q) || id.includes(q) || tags.includes(q);
  });

  renderSidebarCards();
  renderGalleryGrid();
}

// Render Sidebar Hardware Cards
function renderSidebarCards() {
  if (!sidebarCardsList) return;
  sidebarCardsList.innerHTML = "";

  const slice = filteredItems.slice(0, 80);
  if (slice.length === 0) {
    sidebarCardsList.innerHTML =
      '<div style="padding: 30px; text-align: center; color: var(--text-dim); font-size: 13px;">No templates found.</div>';
    return;
  }

  slice.forEach((item) => {
    const card = document.createElement("div");
    card.className = `vault-card ${activeItem && activeItem.id === item.id ? "active" : ""}`;

    const previewSrc = item.preview
      ? `/${item.preview}`
      : "/sources/previews/intro/hero-1.jpg";

    card.innerHTML = `
      <img class="card-media" src="${previewSrc}" alt="${item.name}" loading="lazy">
      <div class="card-content">
        <div class="card-title">${item.name}</div>
        <div class="card-id">${item.id}</div>
        <div class="card-footer">
          <span class="card-category-tag">${item.category || item.type}</span>
          ${item.primaryColor ? `<span style="color:${item.primaryColor};">● ${item.primaryColor}</span>` : ""}
        </div>
      </div>
    `;

    card.addEventListener("click", () => selectItem(item));
    sidebarCardsList.appendChild(card);
  });
}

const gallerySearchInput = /** @type {HTMLInputElement | null} */ (
  document.getElementById("gallerySearchInput")
);
const galleryCategoryRail = /** @type {HTMLElement | null} */ (
  document.getElementById("galleryCategoryRail")
);
let galleryActiveCategory = "all";

// Render Lookbook Gallery Grid
function renderGalleryGrid() {
  if (!lookbookGrid) return;
  lookbookGrid.innerHTML = "";

  const q = gallerySearchInput
    ? gallerySearchInput.value.toLowerCase().trim()
    : "";

  const galleryItems = allItems.filter((item) => {
    let match = true;
    if (galleryActiveCategory === "hero") match = item.id.includes("hero");
    else if (galleryActiveCategory === "pricing")
      match = item.id.includes("pricing");
    else if (galleryActiveCategory === "cards")
      match = item.id.includes("card");
    else if (galleryActiveCategory === "demos") match = item.type === "demo";
    else if (galleryActiveCategory === "pages") match = item.type === "page";

    if (!match) return false;
    if (!q) return true;
    return (
      (item.name || item.id).toLowerCase().includes(q) ||
      (item.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  });

  const slice = galleryItems.slice(0, 120);

  if (slice.length === 0) {
    lookbookGrid.innerHTML =
      '<div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-dim); font-size: 13px;">No templates found matching your gallery filter.</div>';
    return;
  }

  slice.forEach((item) => {
    const card = document.createElement("div");
    card.className = "lookbook-card";
    const previewSrc = item.preview
      ? `/${item.preview}`
      : "/sources/previews/intro/hero-1.jpg";
    const catLabel = item.category || item.subcategory || item.type;

    card.innerHTML = `
      <div class="lookbook-media-wrap">
        <img class="lookbook-media-img" src="${previewSrc}" alt="${item.name}" loading="lazy">
        <span class="lookbook-card-badge">${catLabel}</span>
      </div>
      <div class="lookbook-card-body">
        <div class="lookbook-title">${item.name}</div>
        <div class="lookbook-id">${item.id}</div>
        <div class="lookbook-actions">
          <button class="btn-island-action btn-gallery-open" style="font-size: 11px; padding: 4px 8px;">Open Studio ↗</button>
          <button class="btn-island-action btn-gallery-stack" style="font-size: 11px; padding: 4px 8px;">+ Stack</button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      const target = /** @type {HTMLElement} */ (e.target);
      if (target.closest(".btn-gallery-stack")) {
        currentStack.push(item);
        if (headerStackCount)
          headerStackCount.textContent = String(currentStack.length);
        showToast(`Added [${item.id}] to Stack`);
        return;
      }
      selectItem(item);
      switchView("split");
    });

    lookbookGrid.appendChild(card);
  });
}

if (gallerySearchInput) {
  gallerySearchInput.addEventListener("input", renderGalleryGrid);
}

if (galleryCategoryRail) {
  galleryCategoryRail.addEventListener("click", (e) => {
    const target = /** @type {HTMLElement} */ (e.target);
    const chip = target.closest(".rail-chip");
    if (!chip) return;
    galleryCategoryRail
      .querySelectorAll(".rail-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    galleryActiveCategory =
      /** @type {HTMLElement} */ (chip).dataset.cat || "all";
    renderGalleryGrid();
  });
}

/**
 * Select Item in Studio
 * @param {VaultItem} item
 */
function selectItem(item) {
  activeItem = item;
  if (activeIdPill) activeIdPill.textContent = item.id;
  if (activeNameLabel) activeNameLabel.textContent = item.name;

  document
    .querySelectorAll(".vault-card")
    .forEach((c) => c.classList.remove("active"));

  const templateFile =
    item.file || item.htmlPath || (item.cssPath ? item.cssPath : null);
  if (templateFile && liveIframe) {
    liveIframe.src = `/${templateFile}`;
  }

  if (item.primaryColor && accentColorPicker) {
    accentColorPicker.value = item.primaryColor;
  }
}

// Intercept clicks on links inside the iframe so they navigate gracefully inside the Studio
if (liveIframe) {
  liveIframe.addEventListener("load", () => {
    try {
      const doc =
        liveIframe.contentDocument || liveIframe.contentWindow?.document;
      if (!doc) return;
      doc.addEventListener("click", (e) => {
        const target = /** @type {HTMLElement} */ (e.target);
        const link = target.closest("a");
        if (!link) return;
        const href = link.getAttribute("href");
        if (!href || href === "#" || href.startsWith("javascript:")) {
          e.preventDefault();
          return;
        }
        if (href.endsWith(".html") && !href.startsWith("http")) {
          e.preventDefault();
          const base = href.split("/").pop()?.replace(".html", "") || "";
          const found = allItems.find(
            (it) =>
              it.id === base ||
              it.id === `block-${base}` ||
              (it.file && it.file.endsWith(href)),
          );
          if (found) {
            selectItem(found);
            showToast(`Navigated to [${found.id}]`);
          } else {
            showToast(`Demo placeholder link: ${href}`);
          }
        }
      });
    } catch (err) {}
  });
}

// Live Color Injection
if (accentColorPicker) {
  accentColorPicker.addEventListener("input", (e) => {
    const color = /** @type {HTMLInputElement} */ (e.target).value;
    try {
      const doc =
        liveIframe.contentDocument || liveIframe.contentWindow?.document;
      if (doc) {
        doc.documentElement.style.setProperty("--cnvs-themecolor", color);
      }
    } catch (err) {}
  });
}

// Device Viewport Preset
document.querySelectorAll(".device-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".device-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const device = /** @type {HTMLElement} */ (btn).dataset.device;

    if (!canvasFrame) return;
    canvasFrame.classList.remove("tablet", "mobile");
    if (device === "tablet") canvasFrame.classList.add("tablet");
    if (device === "mobile") canvasFrame.classList.add("mobile");
  });
});

/**
 * Switch Main View
 * @param {string} viewKey
 */
function switchView(viewKey) {
  document.querySelectorAll(".island-btn").forEach((btn) => {
    const el = /** @type {HTMLElement} */ (btn);
    btn.classList.toggle("active", el.dataset.view === viewKey);
  });

  Object.entries(viewPanels).forEach(([key, panel]) => {
    if (panel) {
      panel.classList.toggle("active", key === viewKey);
    }
  });

  if (viewKey === "composer") {
    renderComposerStack();
  }
}

document.querySelectorAll(".island-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const el = /** @type {HTMLElement} */ (btn);
    if (el.dataset.view) switchView(el.dataset.view);
  });
});

// Category Rail Filter
if (categoryRail) {
  categoryRail.addEventListener("click", (e) => {
    const target = /** @type {HTMLElement} */ (e.target);
    const chip = target.closest(".rail-chip");
    if (!chip) return;
    document
      .querySelectorAll(".rail-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = /** @type {HTMLElement} */ (chip).dataset.cat || "all";
    filterTemplates();
  });
}

// Search input
if (searchInput) {
  searchInput.addEventListener("input", filterTemplates);
}

// Keyboard shortcut '/'
window.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput && searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// Stack Composer Logic
if (btnAddToStack) {
  btnAddToStack.addEventListener("click", () => {
    if (!activeItem) return;
    currentStack.push(activeItem);
    if (headerStackCount)
      headerStackCount.textContent = String(currentStack.length);
    showToast(`Added [${activeItem.id}] to Page Stack`);
  });
}

function renderComposerStack() {
  if (!composerStackList || !composerIframe) return;
  composerStackList.innerHTML = "";
  if (currentStack.length === 0) {
    composerStackList.innerHTML =
      '<div style="padding: 30px; text-align: center; color: var(--text-dim); font-size: 12px;">No components in stack yet.<br>Click "+ Add to Stack" in Split Studio.</div>';
    composerIframe.srcdoc =
      '<!DOCTYPE html><html><body style="background:#05070c;color:#64748b;font-family:sans-serif;text-align:center;padding:100px;"><h2>Page Stack Empty</h2><p>Add components from Split Studio or Lookbook.</p></body></html>';
    return;
  }

  currentStack.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "stack-item-card";
    el.innerHTML = `
      <div>
        <div style="font-size: 13px; font-weight: 600;">${index + 1}. ${item.name}</div>
        <div style="font-size: 11px; font-family: var(--font-mono); color: var(--text-dim);">${item.id}</div>
      </div>
      <button class="btn-island-action btn-remove-item" data-index="${index}" style="padding: 4px 8px; color: #ef4444;">✕</button>
    `;
    composerStackList.appendChild(el);
  });

  composerStackList.querySelectorAll(".btn-remove-item").forEach((b) => {
    b.addEventListener("click", (e) => {
      const idx = parseInt(
        /** @type {HTMLElement} */ (e.currentTarget).dataset.index || "0",
        10,
      );
      removeStackItem(idx);
    });
  });

  renderAssembledPage();
}

/**
 * @param {number} index
 */
function removeStackItem(index) {
  currentStack.splice(index, 1);
  if (headerStackCount)
    headerStackCount.textContent = String(currentStack.length);
  renderComposerStack();
}

/** @type {any} */ (window).removeStackItem = removeStackItem;

if (btnClearStack) {
  btnClearStack.addEventListener("click", () => {
    currentStack = [];
    if (headerStackCount) headerStackCount.textContent = "0";
    renderComposerStack();
    showToast("Page Stack cleared");
  });
}

async function renderAssembledPage() {
  if (!composerIframe) return;
  let combinedStyles = "";
  let combinedHtml = "";

  for (const item of currentStack) {
    const assembledFile = item.file || item.htmlPath;
    if (assembledFile) {
      try {
        const res = await fetch(`/${assembledFile}`);
        const text = await res.text();
        const styleMatch = text.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
        if (styleMatch)
          combinedStyles += `\n/* ${item.id} */\n` + styleMatch[1];
        const wrapperMatch = text.match(
          /<div id="wrapper"[^>]*>([\s\S]*?)<\/div>/i,
        );
        if (wrapperMatch) {
          combinedHtml +=
            `\n<!-- BLOCK: ${item.id} -->\n` +
            wrapperMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "");
        }
      } catch (err) {}
    }
  }

  composerIframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/sources/shared/style.css">
  <link rel="stylesheet" href="/sources/shared/css/font-icons.css">
  <link rel="stylesheet" href="/sources/shared/css/swiper.css">
  <link rel="stylesheet" href="/sources/shared/css/custom.css">
  <style>${combinedStyles}</style>
</head>
<body class="stretched">
  <div id="wrapper">${combinedHtml}</div>
  <script src="/sources/shared/js/jquery.js"></script>
  <script src="/sources/shared/js/plugins.min.js"></script>
  <script src="/sources/shared/js/functions.bundle.js"></script>
</body>
</html>`;
}

// Copy Action Handlers
if (btnCopyInstall) {
  btnCopyInstall.addEventListener("click", () => {
    navigator.clipboard.writeText(
      "npx skills add kor7mid/design-canvas-vault -g",
    );
    showToast("Copied: npx skills add kor7mid/design-canvas-vault -g");
  });
}

if (btnCopyPrompt) {
  btnCopyPrompt.addEventListener("click", () => {
    if (!activeItem) return;
    const prompt = `Use template "${activeItem.id}" (${activeItem.name}) from Design Canvas Vault.
Convert it to Next.js + Tailwind CSS with TypeScript.`;
    navigator.clipboard.writeText(prompt);
    showToast("Prompt copied to clipboard");
  });
}

if (btnExportPage) {
  btnExportPage.addEventListener("click", () => {
    if (currentStack.length === 0) return;
    const prompt = `Generate a full Next.js + Tailwind page by assembling these Canvas Vault templates:
${currentStack.map((s, i) => `${i + 1}. [${s.id}] ${s.name}`).join("\n")}

Ensure responsive layout, 60fps transitions, and typed props.`;
    navigator.clipboard.writeText(prompt);
    showToast("Full page blueprint copied for AI!");
  });
}

// Start
init();

export {};
