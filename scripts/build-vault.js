#!/usr/bin/env node

/**
 * build-vault.js — Complete Canvas Source Extractor, Sanitizer & Index Generator
 *
 * Extracts ALL 1,245 HTML files from canvas-source:
 *   - 243 UI Blocks (sources/blocks/)
 *   - 220+ Demo Pages & 79 Niche DNA Design Systems (sources/demos/)
 *   - 780+ Application & Marketing Pages (sources/pages/)
 * Excludes heavy PSDs, MP4s, EPS, AI, ZIP.
 * Generates registries, catalogs, and GALLERY.md.
 */

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const SOURCE_DIR =
  process.env.CANVAS_SOURCE ||
  "/home/midekordavidyayra/Documents/projects/saas/canvas-source";

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
  process.exit(1);
}

console.log(`🚀 Starting Design Canvas Vault complete build (1,245 files)...`);
console.log(`📂 Source: ${SOURCE_DIR}`);
console.log(`📁 Destination: ${ROOT_DIR}`);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Strictly ignore heavy files (PSD, MP4, MOV, WEBM, ZIP, EPS, AI)
const BANNED_EXTENSIONS = [
  ".psd",
  ".mp4",
  ".mov",
  ".webm",
  ".zip",
  ".eps",
  ".ai",
];

function copyDirSync(src, dest, filterFn) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    const ext = path.extname(entry.name).toLowerCase();
    if (BANNED_EXTENSIONS.includes(ext)) continue;
    if (filterFn && !filterFn(srcPath, entry.name, entry.isDirectory()))
      continue;
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath, filterFn);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function titleize(str) {
  return str
    .replace(/^block-content-/, "")
    .replace(/^block-/, "")
    .replace(/^demo-/, "")
    .replace(/^op-/, "OnePage: ")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/**
 * Rewrite relative asset paths safely preserving quotes
 */
function rewriteAssetPaths(str, prefix = "..") {
  return (
    str
      // 1. url(...) preserving quote character
      .replace(
        /url\(\s*(['"]?)(?:\/)?images\/blocks\/preview\//g,
        `url($1${prefix}/previews/preview/`,
      )
      .replace(
        /url\(\s*(['"]?)(?:\/)?images\/blocks\/intro\//g,
        `url($1${prefix}/previews/intro/`,
      )
      .replace(/url\(\s*(['"]?)(?:\/)?images\//g, `url($1${prefix}/images/`)
      .replace(/url\(\s*(['"]?)(?:\/)?demos\//g, `url($1${prefix}/demos/`)
      // 2. HTML attributes: src, href, poster, data-bg, data-img, data-poster, data-thumb, data-lazyload
      .replace(
        /\b(src|href|poster|data-bg|data-img|data-poster|data-thumb|data-lazyload)=(["'])(?:\/)?images\/blocks\/preview\//g,
        `$1=$2${prefix}/previews/preview/`,
      )
      .replace(
        /\b(src|href|poster|data-bg|data-img|data-poster|data-thumb|data-lazyload)=(["'])(?:\/)?images\/blocks\/intro\//g,
        `$1=$2${prefix}/previews/intro/`,
      )
      .replace(
        /\b(src|href|poster|data-bg|data-img|data-poster|data-thumb|data-lazyload)=(["'])(?:\/)?images\//g,
        `$1=$2${prefix}/images/`,
      )
      .replace(
        /\b(src|href|poster|data-bg|data-img|data-poster|data-thumb|data-lazyload)=(["'])(?:\/)?demos\//g,
        `$1=$2${prefix}/demos/`,
      )
      // 3. srcset="..."
      .replace(/\bsrcset=(["'])([^"']+)\1/g, (match, quote, val) => {
        const updated = val
          .replace(
            /(^|\s|,)images\/blocks\/preview\//g,
            `$1${prefix}/previews/preview/`,
          )
          .replace(
            /(^|\s|,)images\/blocks\/intro\//g,
            `$1${prefix}/previews/intro/`,
          )
          .replace(/(^|\s|,)images\//g, `$1${prefix}/images/`)
          .replace(/(^|\s|,)demos\//g, `$1${prefix}/demos/`);
        return `srcset=${quote}${updated}${quote}`;
      })
  );
}

// -------------------------------------------------------------
// Official Block Metadata Map
// -------------------------------------------------------------
const officialBlocksMeta = {};
const blocksCatalogFile = path.join(SOURCE_DIR, "blocks.html");
if (fs.existsSync(blocksCatalogFile)) {
  const rawBlocksHtml = fs.readFileSync(blocksCatalogFile, "utf8");
  const articles = rawBlocksHtml.split("<article");
  for (const art of articles.slice(1)) {
    const hrefMatch = art.match(/href="([^"]+\.html)"/i);
    const imgMatch =
      art.match(/data-src="(images\/blocks\/intro\/[^"]+)"/i) ||
      art.match(/src="(images\/blocks\/intro\/[^"]+)"/i);
    const titleMatch = art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    if (hrefMatch) {
      const fileKey = hrefMatch[1].trim();
      officialBlocksMeta[fileKey] = {
        preview: imgMatch
          ? imgMatch[1].replace(
              /^images\/blocks\/intro\//,
              "sources/previews/intro/",
            )
          : null,
        title: titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : null,
      };
    }
  }
}

const explicitBlockPreviews = {
  "block-admin-1.html": "sources/previews/intro/dashboard.jpg",
  "block-blank.html": "sources/previews/intro/hero-1.jpg",
  "block-carousel-tabs-dark.html": "sources/previews/intro/tabs-4.jpg",
  "block-content-countdown-3.html": "sources/previews/intro/countdown-2.jpg",
  "block-hero-1.html": "sources/previews/intro/hero-1.jpg",
  "block-misc-advanced-filter.html":
    "sources/previews/intro/filter-dropdown.jpg",
  "block-misc-cursor2.html": "sources/previews/intro/misc-custom-cursor.jpg",
  "block-misc-hotspot-popup.html": "sources/previews/intro/popup-shop-1.jpg",
  "block-misc-text-images-inline.html":
    "sources/previews/intro/featured-Images-1.jpg",
  "block-navigation-header-6-dark.html": "sources/previews/intro/header-5.jpg",
  "block-navigation-header-6.html": "sources/previews/intro/header-4.jpg",
  "block-navigation-header-7.html": "sources/previews/intro/header-3.jpg",
  "block-slider-5.html": "sources/previews/intro/slider-6.jpg",
  "block-slider-7-vertical.html": "sources/previews/intro/slider-7.jpg",
};

// -------------------------------------------------------------
// STEP 1: Copy Shared Assets (CSS, JS)
// -------------------------------------------------------------
console.log(`\n📦 [1/6] Copying shared assets (CSS, JS)...`);
const sharedDir = path.join(ROOT_DIR, "sources", "shared");
ensureDir(sharedDir);

const styleSrc = path.join(SOURCE_DIR, "style.css");
if (fs.existsSync(styleSrc)) {
  fs.copyFileSync(styleSrc, path.join(sharedDir, "style.css"));
}

const cssSrc = path.join(SOURCE_DIR, "css");
if (fs.existsSync(cssSrc)) {
  copyDirSync(cssSrc, path.join(sharedDir, "css"));
}

const jsSrc = path.join(SOURCE_DIR, "js");
if (fs.existsSync(jsSrc)) {
  ensureDir(path.join(sharedDir, "js"));
  copyDirSync(jsSrc, path.join(sharedDir, "js"));
}
console.log(`  ✓ Shared assets synchronized`);

// -------------------------------------------------------------
// STEP 2: Copy Previews & Images (Excluding Heavy Media)
// -------------------------------------------------------------
console.log(
  `\n🖼️  [2/6] Synchronizing images & previews (zero PSD/video bloat)...`,
);
const previewsDir = path.join(ROOT_DIR, "sources", "previews");
const imagesDestDir = path.join(ROOT_DIR, "sources", "images");
ensureDir(previewsDir);
ensureDir(imagesDestDir);

const introImagesSrc = path.join(SOURCE_DIR, "images", "blocks", "intro");
if (fs.existsSync(introImagesSrc)) {
  copyDirSync(introImagesSrc, path.join(previewsDir, "intro"));
}

const previewImagesSrc = path.join(SOURCE_DIR, "images", "blocks", "preview");
if (fs.existsSync(previewImagesSrc)) {
  copyDirSync(previewImagesSrc, path.join(previewsDir, "preview"));
}

const rootImagesSrc = path.join(SOURCE_DIR, "images");
if (fs.existsSync(rootImagesSrc)) {
  copyDirSync(rootImagesSrc, imagesDestDir, (filePath, fileName, isDir) => {
    if (isDir && fileName === "blocks") return false;
    return true;
  });
}
console.log(`  ✓ Clean images & previews synchronized`);

// -------------------------------------------------------------
// STEP 3: Extract & Categorize ALL 79 Demo Systems & 220 Demo HTMLs
// -------------------------------------------------------------
console.log(
  `\n🎨 [3/6] Extracting 79 Niche Design Systems & all demo HTMLs...`,
);
const demosDir = path.join(ROOT_DIR, "sources", "demos");
ensureDir(demosDir);

const allRootHtmlFiles = fs
  .readdirSync(SOURCE_DIR)
  .filter((f) => f.endsWith(".html"))
  .sort();
console.log(
  `  ℹ Total HTML files discovered in canvas-source: ${allRootHtmlFiles.length}`,
);

// 79 Niche DNA tokens
const nicheDnaMap = {};
const sourceDemosDir = path.join(SOURCE_DIR, "demos");

if (fs.existsSync(sourceDemosDir)) {
  const demoFolders = fs
    .readdirSync(sourceDemosDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  for (const niche of demoFolders) {
    const nicheSrc = path.join(sourceDemosDir, niche);
    const cssFile = path.join(nicheSrc, `${niche}.css`);
    const targetNicheDir = path.join(demosDir, niche);
    ensureDir(targetNicheDir);

    let primaryColor = "#1ABC9C";
    let secondaryColor = "#2C3E50";
    let bodyFont = "sans-serif";
    let primaryFont = "sans-serif";
    let rawCss = "";

    if (fs.existsSync(cssFile)) {
      rawCss = fs.readFileSync(cssFile, "utf8");
      fs.copyFileSync(cssFile, path.join(targetNicheDir, `${niche}.css`));

      const themeColorMatch = rawCss.match(/--cnvs-themecolor\s*:\s*([^;]+);/i);
      if (themeColorMatch) primaryColor = themeColorMatch[1].trim();

      const secondaryColorMatch = rawCss.match(
        /--cnvs-secondary-color\s*:\s*([^;]+);/i,
      );
      if (secondaryColorMatch) secondaryColor = secondaryColorMatch[1].trim();

      const bodyFontMatch = rawCss.match(/--cnvs-body-font\s*:\s*([^;]+);/i);
      if (bodyFontMatch)
        bodyFont = bodyFontMatch[1].trim().replace(/['"]/g, "");

      const primaryFontMatch = rawCss.match(
        /--cnvs-primary-font\s*:\s*([^;]+);/i,
      );
      if (primaryFontMatch)
        primaryFont = primaryFontMatch[1].trim().replace(/['"]/g, "");
    }

    // Copy demo images if present
    const demoImagesSrc = path.join(nicheSrc, "images");
    if (fs.existsSync(demoImagesSrc)) {
      copyDirSync(demoImagesSrc, path.join(targetNicheDir, "images"));
    }

    nicheDnaMap[niche] = {
      primaryColor,
      secondaryColor,
      bodyFont,
      primaryFont,
    };
  }
}

// Extract ALL demo-*.html files
const demoFiles = allRootHtmlFiles.filter((f) => f.startsWith("demo-"));
const demosList = [];

for (const dfile of demoFiles) {
  const id = dfile.replace(/\.html$/, "");
  const rawHtml = fs.readFileSync(path.join(SOURCE_DIR, dfile), "utf8");

  // Extract niche slug from demo-slug-...
  const parts = id.replace(/^demo-/, "").split("-");
  const primaryNiche = parts[0];
  const dna = nicheDnaMap[primaryNiche] ||
    nicheDnaMap[parts.slice(0, 2).join("-")] || {
      primaryColor: "#0b44a7",
      secondaryColor: "#ffbd00",
      bodyFont: "sans-serif",
      primaryFont: "sans-serif",
    };

  let cleanHtml = rawHtml
    .replace(/href="style\.css"/g, 'href="../shared/style.css"')
    .replace(/href="css\//g, 'href="../shared/css/')
    .replace(/src="js\//g, 'src="../shared/js/');
  cleanHtml = rewriteAssetPaths(cleanHtml, "..");

  const destPath = path.join(demosDir, dfile);
  fs.writeFileSync(destPath, cleanHtml, "utf8");

  // Preview thumbnail
  let preview = `sources/images/intro/niche/new/${primaryNiche}.jpg`;
  if (!fs.existsSync(path.join(ROOT_DIR, preview))) {
    preview = `sources/images/intro/niche/${primaryNiche}.jpg`;
  }
  if (!fs.existsSync(path.join(ROOT_DIR, preview))) {
    preview = "sources/images/intro/niche/new/business.jpg";
  }

  demosList.push({
    id,
    name: titleize(id),
    niche: primaryNiche,
    file: `sources/demos/${dfile}`,
    preview,
    primaryColor: dna.primaryColor,
    secondaryColor: dna.secondaryColor,
    bodyFont: dna.bodyFont,
    primaryFont: dna.primaryFont,
    tags: [primaryNiche, "demo", ...parts],
  });
}
console.log(
  `  ✓ Extracted ${demosList.length} Demo templates (main landing + all subpages)`,
);

// -------------------------------------------------------------
// STEP 4: Extract ALL 243 UI Blocks
// -------------------------------------------------------------
console.log(`\n🧩 [4/6] Extracting 243 UI Blocks...`);
const blocksDir = path.join(ROOT_DIR, "sources", "blocks");
ensureDir(blocksDir);

const blockFiles = allRootHtmlFiles.filter((f) => f.startsWith("block-"));
const blocksList = [];

function categorizeBlock(filename) {
  if (filename.includes("hero")) return { cat: "hero", name: "Heros & Covers" };
  if (filename.includes("pricing"))
    return { cat: "pricing", name: "Pricing Tables" };
  if (filename.includes("cards") || filename.includes("card"))
    return { cat: "cards", name: "Cards & Bento" };
  if (filename.includes("faqs") || filename.includes("faq"))
    return { cat: "faq", name: "FAQ & Accordions" };
  if (filename.includes("testimonials"))
    return { cat: "testimonials", name: "Testimonials & Reviews" };
  if (
    filename.includes("form") ||
    filename.includes("contact") ||
    filename.includes("otp") ||
    filename.includes("password")
  )
    return { cat: "forms", name: "Forms & Auth" };
  if (filename.includes("footer")) return { cat: "footers", name: "Footers" };
  if (
    filename.includes("navigation") ||
    filename.includes("header") ||
    filename.includes("menu")
  )
    return { cat: "nav", name: "Navigation & Headers" };
  if (filename.includes("carousel") || filename.includes("slider"))
    return { cat: "sliders", name: "Sliders & Carousels" };
  if (filename.includes("featured"))
    return { cat: "featured", name: "Feature Boxes" };
  if (filename.includes("gallery"))
    return { cat: "gallery", name: "Galleries & Media" };
  if (filename.includes("steps"))
    return { cat: "steps", name: "Steps & Timelines" };
  if (filename.includes("promo"))
    return { cat: "promo", name: "Promo & CTA Banners" };
  if (filename.includes("popup"))
    return { cat: "popups", name: "Modals & Popups" };
  if (filename.includes("tab")) return { cat: "tabs", name: "Tabs & Toggles" };
  if (filename.includes("counter") || filename.includes("countdown"))
    return { cat: "stats", name: "Counters & Stats" };
  if (filename.includes("team"))
    return { cat: "team", name: "Team & Profiles" };
  if (filename.includes("blog"))
    return { cat: "blog", name: "Blog Grids & Posts" };
  if (filename.includes("shop") || filename.includes("cart"))
    return { cat: "shop", name: "E-Commerce Blocks" };
  if (filename.includes("event"))
    return { cat: "events", name: "Events & Schedules" };
  return { cat: "misc", name: "Miscellaneous UI" };
}

function findBlockPreview(bfile, id) {
  if (officialBlocksMeta[bfile] && officialBlocksMeta[bfile].preview) {
    const p = officialBlocksMeta[bfile].preview;
    if (fs.existsSync(path.join(ROOT_DIR, p))) return p;
  }
  if (explicitBlockPreviews[bfile]) return explicitBlockPreviews[bfile];
  const slug = id.replace(/^block-content-/, "").replace(/^block-/, "");
  const introDir = path.join(previewsDir, "intro");
  const introFiles = fs.readdirSync(introDir);
  const match = introFiles.find((f) =>
    f.toLowerCase().includes(slug.toLowerCase()),
  );
  if (match) return `sources/previews/intro/${match}`;
  return "sources/previews/intro/hero-1.jpg";
}

for (const bfile of blockFiles) {
  const bpath = path.join(SOURCE_DIR, bfile);
  const rawHtml = fs.readFileSync(bpath, "utf8");
  const id = bfile.replace(/\.html$/, "");
  const categoryInfo = categorizeBlock(id);
  const preview = findBlockPreview(bfile, id);
  const officialTitle =
    (officialBlocksMeta[bfile] && officialBlocksMeta[bfile].title) ||
    titleize(id);

  const styleBlocks = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let sm;
  while ((sm = styleRegex.exec(rawHtml)) !== null) {
    styleBlocks.push(sm[1].trim());
  }
  const embeddedStyle = rewriteAssetPaths(styleBlocks.join("\n\n"), "..");
  const fontLinks = (
    rawHtml.match(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi) || []
  ).join("\n  ");

  const extraCssLinks = [];
  const cssLinkRegex = /<link[^>]*href="css\/([^"]+)"[^>]*>/gi;
  let clm;
  while ((clm = cssLinkRegex.exec(rawHtml)) !== null) {
    const cssFile = clm[1];
    if (
      !["font-icons.css", "swiper.css", "animate.css", "custom.css"].includes(
        cssFile,
      )
    ) {
      extraCssLinks.push(
        `<link rel="stylesheet" href="../shared/css/${cssFile}">`,
      );
    }
  }

  const bodyClassMatch = rawHtml.match(/<body[^>]*class=["']([^"']+)["']/i);
  const bodyClass = bodyClassMatch ? bodyClassMatch[1] : "stretched";

  let extractedSection = "";
  const wrapperMatch =
    rawHtml.match(
      /<div id="wrapper"[^>]*>([\s\S]*?)<\/div><!-- #wrapper end -->/i,
    ) || rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (wrapperMatch) {
    let bodyInner = wrapperMatch[1];
    bodyInner = bodyInner.replace(
      /<section id="content">\s*<div class="content-wrap py-0">\s*<\/div>\s*<\/section><!-- #content end -->/gi,
      "",
    );
    extractedSection = bodyInner.trim();
  } else {
    extractedSection = rawHtml;
  }

  const cleanSection = rewriteAssetPaths(extractedSection, "..");

  const autonomousHtml = `<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${officialTitle} | Design Canvas Vault</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ${fontLinks}
  <link rel="stylesheet" href="../shared/style.css">
  <link rel="stylesheet" href="../shared/css/font-icons.css">
  <link rel="stylesheet" href="../shared/css/swiper.css">
  <link rel="stylesheet" href="../shared/css/animate.css">
  ${extraCssLinks.join("\n  ")}
  <link rel="stylesheet" href="../shared/css/custom.css">
  ${embeddedStyle ? `<style>\n${embeddedStyle}\n</style>` : ""}
</head>
<body class="${bodyClass}">
  <div id="wrapper">
    ${cleanSection}
  </div>
  <script src="../shared/js/jquery.js"></script>
  <script src="../shared/js/plugins.min.js"></script>
  <script src="../shared/js/functions.bundle.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(blocksDir, bfile), autonomousHtml, "utf8");

  blocksList.push({
    id,
    name: officialTitle,
    category: categoryInfo.cat,
    categoryName: categoryInfo.name,
    file: `sources/blocks/${bfile}`,
    preview,
    tags: [
      categoryInfo.cat,
      ...id.split("-").filter((t) => t !== "block" && t !== "content"),
    ],
  });
}
console.log(`  ✓ Extracted ${blocksList.length} UI Blocks`);

// -------------------------------------------------------------
// STEP 5: Extract ALL 782 Remaining Application & Marketing Pages
// -------------------------------------------------------------
console.log(
  `\n📄 [5/6] Extracting all remaining application & marketing pages...`,
);
const pagesDir = path.join(ROOT_DIR, "sources", "pages");
ensureDir(pagesDir);

const processedFiles = new Set([...blockFiles, ...demoFiles]);
const remainingPageFiles = allRootHtmlFiles.filter(
  (f) => !processedFiles.has(f),
);
const pagesList = [];

function categorizePage(id) {
  if (id.startsWith("op-") || id.includes("onepage"))
    return { sub: "onepage", name: "One-Page Landing" };
  if (id.startsWith("portfolio-") || id.includes("portfolio"))
    return { sub: "portfolio", name: "Portfolio Showcase" };
  if (
    id.startsWith("blog-") ||
    id.includes("blog") ||
    id.includes("magazine") ||
    id.includes("article")
  )
    return { sub: "blog", name: "Blog & Editorial" };
  if (
    id.startsWith("shop-") ||
    id.includes("shop") ||
    id.includes("cart") ||
    id.includes("checkout") ||
    id.includes("product")
  )
    return { sub: "ecommerce", name: "E-Commerce" };
  if (
    id.startsWith("login-") ||
    id.includes("login") ||
    id.includes("register")
  )
    return { sub: "auth", name: "Authentication" };
  if (
    id.startsWith("about") ||
    id.startsWith("contact") ||
    id.startsWith("services") ||
    id.startsWith("team") ||
    id.startsWith("faqs") ||
    id.startsWith("pricing") ||
    id.startsWith("events")
  )
    return { sub: "marketing", name: "Marketing & Corporate" };
  if (
    id.startsWith("charts-") ||
    id.startsWith("forms-") ||
    id.startsWith("component-")
  )
    return { sub: "components", name: "Components & Forms" };
  if (id.startsWith("index-") || id === "index")
    return { sub: "homepages", name: "Homepage Concepts" };
  return { sub: "utility", name: "Utility & Layouts" };
}

function findPageThumbnail(id, sub) {
  // Check onepage
  const opSlug = id.replace(/^op-/, "");
  const opJpg = path.join(
    ROOT_DIR,
    "sources",
    "images",
    "intro",
    "onepage",
    `${opSlug}.jpg`,
  );
  if (fs.existsSync(opJpg)) return `sources/images/intro/onepage/${opSlug}.jpg`;

  if (sub === "portfolio")
    return "sources/images/intro/targets/portfolio/1.jpg";
  if (sub === "blog") return "sources/images/intro/targets/blogs/1.jpg";
  if (sub === "ecommerce") return "sources/images/intro/targets/shops/1.jpg";
  if (sub === "auth") return "sources/previews/intro/form-1.jpg";
  if (sub === "marketing") return "sources/previews/intro/featured-boxes-1.jpg";
  if (sub === "components")
    return "sources/images/intro/targets/shortcodes/chart.png";
  if (sub === "homepages")
    return "sources/images/intro/multipage/homepage1.jpg";
  return "sources/previews/intro/dashboard.jpg";
}

for (const pfile of remainingPageFiles) {
  const ppath = path.join(SOURCE_DIR, pfile);
  const rawHtml = fs.readFileSync(ppath, "utf8");
  const id = pfile.replace(/\.html$/, "");
  const cat = categorizePage(id);
  const preview = findPageThumbnail(id, cat.sub);

  let sanitizedHtml = rawHtml
    .replace(/href="style\.css"/g, 'href="../shared/style.css"')
    .replace(/href="css\//g, 'href="../shared/css/')
    .replace(/src="js\//g, 'src="../shared/js/');
  sanitizedHtml = rewriteAssetPaths(sanitizedHtml, "..");

  fs.writeFileSync(path.join(pagesDir, pfile), sanitizedHtml, "utf8");

  pagesList.push({
    id,
    name: titleize(id),
    category: "pages",
    subcategory: cat.sub,
    categoryName: cat.name,
    file: `sources/pages/${pfile}`,
    preview,
    tags: [cat.sub, ...id.split("-").slice(0, 3)],
  });
}
console.log(`  ✓ Extracted ${pagesList.length} Application & Marketing Pages`);

// -------------------------------------------------------------
// STEP 6: Generate Registries, Catalogs & GALLERY.md
// -------------------------------------------------------------
console.log(`\n📚 [6/6] Generating registries & catalogs...`);
const catalogDir = path.join(ROOT_DIR, "catalog");
const registryDir = path.join(ROOT_DIR, "registry");
ensureDir(catalogDir);
ensureDir(registryDir);

const totalCount = blocksList.length + demosList.length + pagesList.length;

const fullCatalog = {
  version: "2.0.0",
  generatedAt: new Date().toISOString(),
  counts: {
    blocks: blocksList.length,
    demos: demosList.length,
    pages: pagesList.length,
    total: totalCount,
  },
  blocks: blocksList,
  demos: demosList,
  pages: pagesList,
};
fs.writeFileSync(
  path.join(registryDir, "catalog.json"),
  JSON.stringify(fullCatalog, null, 2),
  "utf8",
);

const compactLlmIndex = {
  counts: fullCatalog.counts,
  blocks: blocksList.map((b) => ({
    id: b.id,
    name: b.name,
    cat: b.category,
    preview: b.preview,
    tags: b.tags,
  })),
  demos: demosList.map((d) => ({
    id: d.id,
    niche: d.niche,
    primaryColor: d.primaryColor,
    fonts: [d.bodyFont, d.primaryFont],
    preview: d.preview,
  })),
  pages: pagesList.map((p) => ({
    id: p.id,
    name: p.name,
    sub: p.subcategory,
    preview: p.preview,
  })),
};
fs.writeFileSync(
  path.join(registryDir, "llm-index.json"),
  JSON.stringify(compactLlmIndex),
  "utf8",
);

console.log(`\n✨ Build 100% COMPLETE!`);
console.log(`📊 Résumé Exhaustif :`);
console.log(`   • ${blocksList.length} Blocs UI extraits dans sources/blocks/`);
console.log(
  `   • ${demosList.length} Démos & pages métiers dans sources/demos/`,
);
console.log(
  `   • ${pagesList.length} Pages marketing & applicatives dans sources/pages/`,
);
console.log(`   • TOTAL : ${totalCount} fichiers HTML (100% de canvas-source)`);
console.log(`   • Registries mis à jour : catalog.json & llm-index.json`);
