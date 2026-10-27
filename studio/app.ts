/**
 * Design Canvas Vault — Paginated Catalog & Full-Screen Page Launcher (TypeScript)
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

// DOM Elements
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
const vaultToast = document.getElementById("vaultToast");
const toastText = document.getElementById("toastText");

function showToast(message: string): void {
  if (!toastText || !vaultToast) return;
  toastText.textContent = message;
  vaultToast.classList.add("visible");
  setTimeout(() => vaultToast.classList.remove("visible"), 2200);
}

const BASE_PATH: string = window.location.pathname.includes(
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

function resolvePageUrl(item: VaultItem): string {
  if (window.location.hostname.includes("github.io")) {
    const f =
      item.file ||
      item.htmlPath ||
      item.cssPath ||
      "sources/blocks/block-hero-10.html";
    const clean = f.startsWith("/") ? f.slice(1) : f;
    return `${BASE_PATH}/${clean}`;
  }
  return `/${item.id}`;
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

function syncUrlState(): void {
  const params = new URLSearchParams();
  if (activeCategory !== "all") params.set("cat", activeCategory);
  const q = catalogSearchInput ? catalogSearchInput.value.trim() : "";
  if (q) params.set("q", q);
  if (currentPage > 1) params.set("page", String(currentPage));

  const qs = params.toString();
  const newUrl = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
  window.history.replaceState(null, "", newUrl);
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
    applyFilters(false);
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

  syncUrlState();
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
  syncUrlState();
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
  // Top Mini Pager
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

  // Bottom Full Numbered Pagination Bar
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
    const pageUrl = resolvePageUrl(item);
    const catLabel =
      item.category || item.subcategory || item.type || "template";

    card.innerHTML = `
      <a href="${pageUrl}" class="card-preview-link" title="Open ${item.name} full-screen">
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
          <a href="${pageUrl}" class="btn-open-page">Open Live Page →</a>
          <button type="button" class="btn-copy-prompt" data-id="${item.id}">Copy Prompt</button>
        </div>
      </div>
    `;

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
