/**
 * Design Canvas Vault — Clean-URL Paginated Catalog & Full-Screen Viewer (TypeScript)
 */

import type { VaultItem, CatalogPayload } from "../types/vault.d.ts";

const ITEMS_PER_PAGE = 24;

let catalog: CatalogPayload = {
  version: "1.0.0",
  generatedAt: "",
  counts: { blocks: 0, demos: 0, pages: 0, total: 0 },
  blocks: [],
  demos: [],
  pages: [],
};

let allItems: VaultItem[] = [];
let filteredItems: VaultItem[] = [];
let activeCategory: string = "all";
let currentPage: number = 1;
let activeTemplate: VaultItem | null = null;
let lastCatalogUrl: string = "";

// DOM Elements — Catalog
const catalogView = document.getElementById("catalogView");
const brandResetBtn = document.getElementById("brandResetBtn");
const btnCopyCli = document.getElementById("btnCopyCli");
const catalogSearchInput = document.getElementById(
  "catalogSearchInput",
) as HTMLInputElement | null;
const filterBar = document.getElementById("filterBar");
const resultsCounter = document.getElementById("resultsCounter");
const topMiniPager = document.getElementById("topMiniPager");
const templatesGrid = document.getElementById("templatesGrid");
const paginationBar = document.getElementById("paginationBar");
const gridToolbarAnchor = document.getElementById("gridToolbarAnchor");

// DOM Elements — Fullscreen Viewer & Floating Dock
const fullscreenViewer = document.getElementById("fullscreenViewer");
const fullscreenIframe = document.getElementById(
  "fullscreenIframe",
) as HTMLIFrameElement | null;
const btnDockBack = document.getElementById("btnDockBack");
const dockTemplateId = document.getElementById("dockTemplateId");
const dockColorPicker = document.getElementById(
  "dockColorPicker",
) as HTMLInputElement | null;
const dockColorHex = document.getElementById("dockColorHex");
const btnDockInspectCode = document.getElementById("btnDockInspectCode");
const btnDockCopyPrompt = document.getElementById("btnDockCopyPrompt");

// DOM Elements — Code Modal
const codeModalBackdrop = document.getElementById("codeModalBackdrop");
const codeModalTitle = document.getElementById("codeModalTitle");
const codeModalId = document.getElementById("codeModalId");
const btnCloseCodeModal = document.getElementById("btnCloseCodeModal");
const modalCssCode = document.getElementById("modalCssCode");
const modalHtmlCode = document.getElementById("modalHtmlCode");
const btnModalCopyCss = document.getElementById("btnModalCopyCss");
const btnModalCopyHtml = document.getElementById("btnModalCopyHtml");

// Toast
const vaultToast = document.getElementById("vaultToast");
const toastText = document.getElementById("toastText");

function showToast(message: string): void {
  if (!toastText || !vaultToast) return;
  toastText.textContent = message;
  vaultToast.classList.add("visible");
  setTimeout(() => vaultToast.classList.remove("visible"), 2200);
}

const BASE_PATH: string = window.location.pathname.startsWith(
  "/design-canvas-vault",
)
  ? "/design-canvas-vault"
  : "";

function resolvePreviewUrl(item: VaultItem): string {
  if (item.previewUrl && window.location.hostname.includes("github.io")) {
    return item.previewUrl;
  }
  const p = item.preview;
  if (!p) return `${BASE_PATH}/sources/previews/intro/hero-1.jpg`;
  const clean = p.startsWith("/") ? p.slice(1) : p;
  return `${BASE_PATH}/${clean}`;
}

function resolveRawHtmlUrl(item: VaultItem): string {
  const f =
    item.file ||
    item.htmlPath ||
    item.cssPath ||
    "sources/blocks/block-hero-10.html";
  const clean = f.startsWith("/") ? f.slice(1) : f;
  return `${BASE_PATH}/${clean}?embed=1`;
}

function getCleanTemplateUrl(item: VaultItem): string {
  return `${BASE_PATH}/${item.id}`;
}

function extractRouteSlugFromPath(): string | null {
  let rel = window.location.pathname;
  if (BASE_PATH && rel.startsWith(BASE_PATH)) {
    rel = rel.slice(BASE_PATH.length);
  }
  rel = rel.replace(/^\/+|\/+$/g, "");
  if (
    !rel ||
    rel === "index.html" ||
    rel === "studio" ||
    rel === "studio/index.html"
  ) {
    return null;
  }
  if (rel.endsWith(".html")) {
    return (
      rel
        .split("/")
        .pop()
        ?.replace(/\.html$/, "") || null
    );
  }
  return rel;
}

function readUrlState(): void {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const page = parseInt(params.get("page") || "1", 10);
  const q = params.get("q");

  if (cat) {
    activeCategory = cat;
    filterBar?.querySelectorAll(".filter-pill").forEach((p) => {
      p.classList.toggle("active", (p as HTMLElement).dataset.cat === cat);
    });
  }
  if (q && catalogSearchInput) {
    catalogSearchInput.value = q;
  }
  if (!isNaN(page) && page >= 1) {
    currentPage = page;
  }
}

function buildCatalogUrl(): string {
  const params = new URLSearchParams();
  if (activeCategory !== "all") params.set("cat", activeCategory);
  const q = catalogSearchInput ? catalogSearchInput.value.trim() : "";
  if (q) params.set("q", q);
  if (currentPage > 1) params.set("page", String(currentPage));

  const qs = params.toString();
  const rootPath = `${BASE_PATH}/`;
  return `${rootPath}${qs ? `?${qs}` : ""}`;
}

function syncCatalogUrlState(): void {
  if (activeTemplate) return;
  const newUrl = buildCatalogUrl();
  lastCatalogUrl = newUrl;
  window.history.replaceState({ view: "catalog" }, "", newUrl);
}

async function openTemplateFullscreen(
  item: VaultItem,
  pushHistory: boolean = true,
): Promise<void> {
  activeTemplate = item;
  if (!lastCatalogUrl) lastCatalogUrl = buildCatalogUrl();

  const cleanUrl = getCleanTemplateUrl(item);
  if (pushHistory) {
    window.history.pushState({ view: "template", id: item.id }, "", cleanUrl);
  } else {
    window.history.replaceState(
      { view: "template", id: item.id },
      "",
      cleanUrl,
    );
  }

  document.title = `${item.name} (${item.id}) — Design Canvas Vault`;
  document.body.style.overflow = "hidden";

  if (fullscreenViewer) fullscreenViewer.style.display = "block";
  if (fullscreenIframe) fullscreenIframe.src = resolveRawHtmlUrl(item);
  if (dockTemplateId) dockTemplateId.textContent = item.id;

  const primary = item.primaryColor || "#ECA92D";
  const secondary = item.secondaryColor || "#2C3E50";
  if (dockColorPicker) dockColorPicker.value = primary;
  if (dockColorHex) dockColorHex.textContent = primary.toUpperCase();

  if (codeModalTitle) codeModalTitle.textContent = item.name;
  if (codeModalId) codeModalId.textContent = item.id;
  if (modalCssCode) {
    modalCssCode.textContent = `:root {
  --cnvs-themecolor: ${primary};
  --color-primary: ${primary};
  --color-secondary: ${secondary};
  --font-body: '${item.bodyFont || "system-ui"}', sans-serif;
  --font-heading: '${item.primaryFont || "system-ui"}', serif;
}`;
  }

  if (modalHtmlCode) {
    try {
      const res = await fetch(resolveRawHtmlUrl(item));
      const rawHtml = await res.text();
      const wrapperMatch = rawHtml.match(
        /<div id="wrapper"[^>]*>([\s\S]*?)<\/div>/i,
      );
      modalHtmlCode.textContent = wrapperMatch
        ? wrapperMatch[1].trim()
        : rawHtml.trim();
    } catch {
      modalHtmlCode.textContent = `<!-- Run CLI: npm run extract -- ${item.id} -->`;
    }
  }
}

function closeFullscreenViewer(pushHistory: boolean = true): void {
  activeTemplate = null;
  if (fullscreenViewer) fullscreenViewer.style.display = "none";
  if (codeModalBackdrop) codeModalBackdrop.style.display = "none";
  if (fullscreenIframe) fullscreenIframe.src = "about:blank";
  document.body.style.overflow = "";
  document.title = "Design Canvas Vault — 1,245 Templates & 79 Design Systems";

  const targetUrl = lastCatalogUrl || buildCatalogUrl();
  if (pushHistory) {
    window.history.pushState({ view: "catalog" }, "", targetUrl);
  }
}

async function init(): Promise<void> {
  try {
    let res = await fetch("/api/catalog").catch(() => null);
    if (!res || !res.ok) {
      res = await fetch(`${BASE_PATH}/registry/catalog.json`).catch(() => null);
    }
    if (!res || !res.ok) {
      res = await fetch("../registry/catalog.json");
    }
    catalog = (await res.json()) as CatalogPayload;

    const blocks: VaultItem[] = (catalog.blocks || []).map((b) => ({
      ...b,
      type: "block",
    }));
    const demos: VaultItem[] = (catalog.demos || []).map((d) => ({
      ...d,
      type: "demo",
      category: d.niche,
    }));
    const pages: VaultItem[] = (catalog.pages || []).map((p) => ({
      ...p,
      type: "page",
      category: p.subcategory,
    }));

    allItems = [...blocks, ...demos, ...pages];
    readUrlState();

    const initialSlug = extractRouteSlugFromPath();
    applyFilters(false);

    if (initialSlug) {
      const matched = allItems.find((it) => it.id === initialSlug);
      if (matched) {
        await openTemplateFullscreen(matched, false);
      }
    }
  } catch (err) {
    console.error("Failed to load catalog:", err);
  }
}

function applyFilters(resetPage: boolean = true): void {
  const q = catalogSearchInput
    ? catalogSearchInput.value.toLowerCase().trim()
    : "";
  if (resetPage) currentPage = 1;

  filteredItems = allItems.filter((item) => {
    let matchesCat = true;
    if (activeCategory === "blocks") matchesCat = item.type === "block";
    else if (activeCategory === "demos") matchesCat = item.type === "demo";
    else if (activeCategory === "pages") matchesCat = item.type === "page";
    else if (activeCategory === "hero") matchesCat = item.id.includes("hero");
    else if (activeCategory === "pricing")
      matchesCat = item.id.includes("pricing");
    else if (activeCategory === "cards") matchesCat = item.id.includes("card");
    else if (activeCategory === "forms")
      matchesCat = item.id.includes("form") || item.id.includes("login");
    else if (activeCategory === "onepage")
      matchesCat = item.id.startsWith("op-") || item.id.includes("onepage");
    else if (activeCategory === "ecommerce")
      matchesCat = item.id.includes("shop") || item.id.includes("cart");

    if (!matchesCat) return false;
    if (!q) return true;

    const name = (item.name || item.id || "").toLowerCase();
    const id = item.id.toLowerCase();
    const tags = (item.tags || []).join(" ").toLowerCase();
    return name.includes(q) || id.includes(q) || tags.includes(q);
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / ITEMS_PER_PAGE),
  );
  if (currentPage > totalPages) currentPage = totalPages;

  syncCatalogUrlState();
  renderCatalogGrid();
}

function goToPage(page: number, scroll: boolean = true): void {
  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / ITEMS_PER_PAGE),
  );
  const target = Math.max(1, Math.min(totalPages, page));
  if (target === currentPage) return;
  currentPage = target;
  syncCatalogUrlState();
  renderCatalogGrid();
  if (scroll && gridToolbarAnchor) {
    gridToolbarAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function buildPageList(current: number, total: number): Array<number | string> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: Array<number | string> = [1];
  if (current > 3) pages.push("…");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) pages.push("…");
  pages.push(total);
  return pages;
}

function renderPaginationControls(totalPages: number): void {
  if (topMiniPager) {
    if (totalPages <= 1) {
      topMiniPager.innerHTML = "";
    } else {
      topMiniPager.innerHTML = `
        <span class="mini-page-indicator">Page ${currentPage} of ${totalPages}</span>
        <button type="button" class="page-btn" id="topPrevBtn" ${currentPage === 1 ? "disabled" : ""} title="Previous page">←</button>
        <button type="button" class="page-btn" id="topNextBtn" ${currentPage === totalPages ? "disabled" : ""} title="Next page">→</button>
      `;
      document
        .getElementById("topPrevBtn")
        ?.addEventListener("click", () => goToPage(currentPage - 1, false));
      document
        .getElementById("topNextBtn")
        ?.addEventListener("click", () => goToPage(currentPage + 1, false));
    }
  }

  if (!paginationBar) return;
  paginationBar.innerHTML = "";
  if (totalPages <= 1) {
    paginationBar.style.display = "none";
    return;
  }
  paginationBar.style.display = "flex";

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "page-btn page-btn-nav";
  prevBtn.disabled = currentPage === 1;
  prevBtn.textContent = "← Previous";
  prevBtn.addEventListener("click", () => goToPage(currentPage - 1, true));
  paginationBar.appendChild(prevBtn);

  const pageTokens = buildPageList(currentPage, totalPages);
  for (const token of pageTokens) {
    if (typeof token === "string") {
      const span = document.createElement("span");
      span.className = "page-ellipsis";
      span.textContent = token;
      paginationBar.appendChild(span);
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `page-btn ${token === currentPage ? "active" : ""}`;
      btn.textContent = String(token);
      btn.addEventListener("click", () => goToPage(token, true));
      paginationBar.appendChild(btn);
    }
  }

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "page-btn page-btn-nav";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.textContent = "Next →";
  nextBtn.addEventListener("click", () => goToPage(currentPage + 1, true));
  paginationBar.appendChild(nextBtn);
}

function renderCatalogGrid(): void {
  if (!templatesGrid) return;
  templatesGrid.innerHTML = "";

  const totalItems = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = Math.min(totalItems, startIdx + ITEMS_PER_PAGE);
  const slice = filteredItems.slice(startIdx, endIdx);

  if (resultsCounter) {
    if (totalItems === 0) {
      resultsCounter.textContent = "0 matching templates";
    } else {
      resultsCounter.textContent = `Showing ${startIdx + 1}–${endIdx} of ${totalItems.toLocaleString()} templates`;
    }
  }

  renderPaginationControls(totalPages);

  if (slice.length === 0) {
    templatesGrid.innerHTML = `
      <div class="catalog-empty-state">
        <h3 style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">No Matching Templates</h3>
        <p style="font-size: 13.5px; color: var(--text-tertiary);">Try clearing your search query or selecting another category pill above.</p>
      </div>
    `;
    return;
  }

  slice.forEach((item) => {
    const card = document.createElement("article");
    card.className = "template-card";

    const previewSrc = resolvePreviewUrl(item);
    const cleanUrl = getCleanTemplateUrl(item);
    const catLabel =
      item.category || item.subcategory || item.type || "template";

    card.innerHTML = `
      <a href="${cleanUrl}" class="card-preview-link" title="Open ${item.name} full-screen">
        <img class="card-preview-img" src="${previewSrc}" alt="${item.name}" loading="lazy">
        <span class="card-cat-badge">${catLabel}</span>
      </a>
      <div class="card-body">
        <div class="card-header-row">
          <h2 class="card-name">${item.name}</h2>
          ${item.primaryColor ? `<span class="card-color-chip"><span style="color:${item.primaryColor};">●</span>${item.primaryColor}</span>` : ""}
        </div>
        <div class="card-slug">${item.id}</div>
        <div class="card-actions-row">
          <a href="${cleanUrl}" class="btn-open-page">Open Live Page →</a>
          <button type="button" class="btn-copy-prompt" data-id="${item.id}">Copy Prompt</button>
        </div>
      </div>
    `;

    card.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        void openTemplateFullscreen(item, true);
      });
    });

    const copyBtn = card.querySelector(".btn-copy-prompt");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const prompt = `Use template "${item.id}" (${item.name}) from Design Canvas Vault.
Adapt its layout, visual hierarchy, and design tokens to match my project's existing styling stack and conventions.`;
        navigator.clipboard.writeText(prompt);
        showToast(`Copied prompt for [${item.id}]`);
      });
    }

    templatesGrid.appendChild(card);
  });
}

// Floating Dock Events
if (btnDockBack) {
  btnDockBack.addEventListener("click", () => {
    closeFullscreenViewer(true);
  });
}

if (dockColorPicker) {
  dockColorPicker.addEventListener("input", (e) => {
    const val = (e.target as HTMLInputElement).value;
    if (dockColorHex) dockColorHex.textContent = val.toUpperCase();
    try {
      const doc =
        fullscreenIframe?.contentDocument ||
        fullscreenIframe?.contentWindow?.document;
      if (doc) {
        doc.documentElement.style.setProperty("--cnvs-themecolor", val);
      }
    } catch {}
  });
}

if (btnDockInspectCode && codeModalBackdrop) {
  btnDockInspectCode.addEventListener("click", () => {
    codeModalBackdrop.style.display = "flex";
  });
}

if (btnCloseCodeModal && codeModalBackdrop) {
  btnCloseCodeModal.addEventListener("click", () => {
    codeModalBackdrop.style.display = "none";
  });
}

if (btnModalCopyCss && modalCssCode) {
  btnModalCopyCss.addEventListener("click", () => {
    navigator.clipboard.writeText(modalCssCode.textContent || "");
    showToast("CSS Tokens copied to clipboard");
  });
}

if (btnModalCopyHtml && modalHtmlCode) {
  btnModalCopyHtml.addEventListener("click", () => {
    navigator.clipboard.writeText(modalHtmlCode.textContent || "");
    showToast("Purified HTML copied to clipboard");
  });
}

if (btnDockCopyPrompt) {
  btnDockCopyPrompt.addEventListener("click", () => {
    if (!activeTemplate) return;
    const prompt = `Use template "${activeTemplate.id}" (${activeTemplate.name}) from Design Canvas Vault.
Adapt its layout, visual hierarchy, and design tokens to match my project's existing styling stack and conventions.`;
    navigator.clipboard.writeText(prompt);
    showToast(`Copied prompt for [${activeTemplate.id}]`);
  });
}

// Intercept links inside fullscreenIframe so internal demo links stay clean
if (fullscreenIframe) {
  fullscreenIframe.addEventListener("load", () => {
    try {
      const doc =
        fullscreenIframe.contentDocument ||
        fullscreenIframe.contentWindow?.document;
      if (!doc) return;
      doc.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a");
        if (!link) return;
        const href = link.getAttribute("href");
        if (
          !href ||
          href === "#" ||
          href.startsWith("#") ||
          href.startsWith("javascript:")
        ) {
          return;
        }
        if (href.endsWith(".html") && !href.startsWith("http")) {
          e.preventDefault();
          const base =
            href
              .split("/")
              .pop()
              ?.replace(/\.html$/, "") || "";
          const found = allItems.find(
            (it) => it.id === base || it.id === `block-${base}`,
          );
          if (found) {
            void openTemplateFullscreen(found, true);
          }
        }
      });
    } catch {}
  });
}

// Browser Back/Forward Popstate Handler
window.addEventListener("popstate", () => {
  const slug = extractRouteSlugFromPath();
  if (slug) {
    const found = allItems.find((it) => it.id === slug);
    if (found) {
      void openTemplateFullscreen(found, false);
      return;
    }
  }
  closeFullscreenViewer(false);
});

if (filterBar) {
  filterBar.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const pill = target.closest(".filter-pill") as HTMLElement | null;
    if (!pill) return;
    filterBar
      .querySelectorAll(".filter-pill")
      .forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    activeCategory = pill.dataset.cat || "all";
    applyFilters(true);
  });
}

if (catalogSearchInput) {
  catalogSearchInput.addEventListener("input", () => applyFilters(true));
}

if (brandResetBtn) {
  brandResetBtn.addEventListener("click", () => {
    if (catalogSearchInput) catalogSearchInput.value = "";
    activeCategory = "all";
    filterBar?.querySelectorAll(".filter-pill").forEach((p) => {
      p.classList.toggle("active", (p as HTMLElement).dataset.cat === "all");
    });
    applyFilters(true);
  });
}

if (btnCopyCli) {
  btnCopyCli.addEventListener("click", () => {
    navigator.clipboard.writeText(
      "npx skills add kor7mid/design-canvas-vault -g",
    );
    showToast("Copied: npx skills add kor7mid/design-canvas-vault -g");
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (codeModalBackdrop && codeModalBackdrop.style.display !== "none") {
      codeModalBackdrop.style.display = "none";
      return;
    }
    if (activeTemplate) {
      closeFullscreenViewer(true);
      return;
    }
  }
  if (activeTemplate) return;
  if (e.key === "/" && document.activeElement !== catalogSearchInput) {
    e.preventDefault();
    catalogSearchInput?.focus();
    return;
  }
  if (document.activeElement !== catalogSearchInput) {
    if (e.key === "ArrowRight") {
      goToPage(currentPage + 1, true);
    } else if (e.key === "ArrowLeft") {
      goToPage(currentPage - 1, true);
    }
  }
});

void init();

export {};
