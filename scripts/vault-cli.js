#!/usr/bin/env node

/**
 * vault-cli.js — Design Canvas Vault Command Line Interface
 *
 * Commands:
 *   studio [--port 3333]
 *   search <query> [--json]
 *   inspect <id>
 *   extract <id> [--html-only] [--style-only]
 *   tokens <demo-id> [--format tailwind|css|rn]
 *   doctor
 *   sync
 *   contribute
 *   add <file> --title "..." --cat "..."
 */

const fs = require("fs");
const path = require("path");
const http = require("http");

const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_PATH = path.join(ROOT_DIR, "registry", "catalog.json");
const LLM_INDEX_PATH = path.join(ROOT_DIR, "registry", "llm-index.json");
const STATE_PATH = path.join(ROOT_DIR, ".vault-state.json");

// Helper: load catalog
function loadCatalog() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error("❌ Registry not found. Run `npm run build` first.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"));
}

// Helper: load or init state
function loadState() {
  if (!fs.existsSync(STATE_PATH)) {
    const initialState = {
      activeTemplate: "block-hero-10",
      activeCategory: "hero",
      pageStack: [],
      theme: {
        mode: "dark",
        primaryColor: "#0b44a7",
        secondaryColor: "#ffbd00",
        fontBody: "Inter",
        fontPrimary: "Playfair Display",
      },
      targetStack: "tailwind-next",
      lastUpdated: new Date().toISOString(),
    };
    fs.writeFileSync(STATE_PATH, JSON.stringify(initialState, null, 2), "utf8");
    return initialState;
  }
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch (e) {
    return {};
  }
}

function saveState(state) {
  state.lastUpdated = new Date().toISOString();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf8");
}

// -------------------------------------------------------------
// COMMAND: search
// -------------------------------------------------------------
function cmdSearch(query, isJson = false) {
  if (!query) {
    console.log("Usage: vault search <terme|secteur|catégorie|couleur>");
    return;
  }
  const catalog = loadCatalog();
  const q = query.toLowerCase().trim();

  const results = [];

  // Search in blocks
  for (const b of catalog.blocks) {
    const matchScore =
      (b.id.toLowerCase().includes(q) ? 4 : 0) +
      (b.name.toLowerCase().includes(q) ? 3 : 0) +
      (b.category.toLowerCase().includes(q) ? 2 : 0) +
      (b.tags.some((t) => t.toLowerCase().includes(q)) ? 2 : 0);
    if (matchScore > 0) {
      results.push({ ...b, type: "block", score: matchScore });
    }
  }

  // Search in demos
  for (const d of catalog.demos) {
    const matchScore =
      (d.id.toLowerCase().includes(q) ? 4 : 0) +
      ((d.name || d.title || "").toLowerCase().includes(q) ? 3 : 0) +
      ((d.niche || "").toLowerCase().includes(q) ? 3 : 0) +
      (d.tags && d.tags.some((t) => t.toLowerCase().includes(q)) ? 2 : 0);
    if (matchScore > 0) {
      results.push({ ...d, type: "demo", score: matchScore });
    }
  }

  // Search in pages
  for (const p of catalog.pages) {
    const matchScore =
      (p.id.toLowerCase().includes(q) ? 4 : 0) +
      (p.name.toLowerCase().includes(q) ? 3 : 0) +
      (p.tags.some((t) => t.toLowerCase().includes(q)) ? 2 : 0);
    if (matchScore > 0) {
      results.push({ ...p, type: "page", score: matchScore });
    }
  }

  results.sort((a, b) => b.score - a.score);
  const topResults = results.slice(0, 15);

  if (isJson) {
    console.log(JSON.stringify(topResults, null, 2));
    return;
  }

  console.log(
    `\n🔍 Results for "${query}" (${results.length} found, showing top ${topResults.length}):\n`,
  );
  for (const r of topResults) {
    const typeLabel =
      r.type === "demo"
        ? "🎨 DEMO"
        : r.type === "page"
          ? "📄 PAGE"
          : "🧩 BLOCK";
    console.log(`[${typeLabel}] \x1b[36m${r.id}\x1b[0m — ${r.name || r.title}`);
    if (r.primaryColor)
      console.log(
        `   Color: \x1b[33m${r.primaryColor}\x1b[0m | Font: ${r.primaryFont || r.bodyFont}`,
      );
    if (r.preview) console.log(`   Preview: ${r.preview}`);
    console.log(`   Tags: ${(r.tags || []).join(", ")}`);
    console.log("");
  }
}

// -------------------------------------------------------------
// COMMAND: inspect
// -------------------------------------------------------------
function cmdInspect(id) {
  if (!id) {
    console.log("Usage: vault inspect <template-id>");
    return;
  }
  const catalog = loadCatalog();
  const item =
    catalog.blocks.find((b) => b.id === id) ||
    catalog.demos.find((d) => d.id === id) ||
    catalog.pages.find((p) => p.id === id);

  if (!item) {
    console.error(`❌ Template "${id}" not found in vault.`);
    return;
  }

  const filePath = path.join(
    ROOT_DIR,
    item.file || item.htmlPath || item.cssPath,
  );
  console.log(`\n🔬 Anatomy of \x1b[36m${item.id}\x1b[0m:`);
  console.log(`──────────────────────────────────────────`);
  console.log(`• Name: ${item.name || item.title}`);
  console.log(`• Category: ${item.category || item.niche || "N/A"}`);
  console.log(`• File: ${item.file || item.htmlPath || item.cssPath}`);
  if (item.preview) console.log(`• Preview: ${item.preview}`);
  if (item.primaryColor)
    console.log(`• Colors: ${item.primaryColor} / ${item.secondaryColor}`);
  if (item.fonts) console.log(`• Fonts: ${item.fonts.join(", ")}`);

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");

    // DOM Summary
    const tags = [
      "section",
      "header",
      "nav",
      "div",
      "form",
      "button",
      "a",
      "h1",
      "h2",
      "h3",
      "table",
      "ul",
    ];
    const summary = {};
    for (const tag of tags) {
      const count = (content.match(new RegExp(`<${tag}[\\s>]`, "gi")) || [])
        .length;
      if (count > 0) summary[tag] = count;
    }
    console.log(
      `• DOM Structure: ${Object.entries(summary)
        .map(([k, v]) => `${k}(${v})`)
        .join(", ")}`,
    );

    // CSS Classes summary
    const classMatches = content.match(/class=["']([^"']+)["']/g) || [];
    const classes = new Set();
    for (const cm of classMatches) {
      cm.replace(/class=["']/, "")
        .replace(/["']$/, "")
        .split(/\s+/)
        .forEach((c) => {
          if (c && !c.startsWith("col-") && !c.startsWith("row"))
            classes.add(c);
        });
    }
    console.log(
      `• Key CSS Classes (${classes.size}): ${Array.from(classes).slice(0, 10).join(", ")}...`,
    );
  }
  console.log("");
}

// -------------------------------------------------------------
// COMMAND: extract
// -------------------------------------------------------------
function cmdExtract(id, options = {}) {
  if (!id) {
    console.log(
      "Usage: vault extract <template-id> [--html-only] [--style-only]",
    );
    return;
  }
  const catalog = loadCatalog();
  const item =
    catalog.blocks.find((b) => b.id === id) ||
    catalog.pages.find((p) => p.id === id) ||
    catalog.demos.find((d) => d.id === id);

  if (!item) {
    console.error(`❌ Template "${id}" not found.`);
    return;
  }

  const filePath = path.join(
    ROOT_DIR,
    item.file || item.htmlPath || item.cssPath,
  );
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");

  // Extract <style> block
  let styleBlock = "";
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (styleMatch) styleBlock = styleMatch[1].trim();

  // Extract core content (wrapper content or body)
  let htmlBlock = "";
  const wrapperMatch =
    content.match(/<div id="wrapper">([\s\S]*?)<\/div>/i) ||
    content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (wrapperMatch) {
    htmlBlock = wrapperMatch[1]
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .trim();
  } else {
    htmlBlock = content;
  }

  if (options.styleOnly) {
    console.log(styleBlock || "/* Aucun style inline spécifique */");
    return;
  }

  if (options.htmlOnly) {
    console.log(htmlBlock);
    return;
  }

  if (styleBlock) {
    console.log(`<!-- CSS Dédié -->\n<style>\n${styleBlock}\n</style>\n`);
  }
  console.log(`<!-- HTML Structure Purifiée -->\n${htmlBlock}`);
}

// -------------------------------------------------------------
// COMMAND: tokens
// -------------------------------------------------------------
function cmdTokens(demoId, format = "tailwind") {
  if (!demoId) {
    console.log("Usage: vault tokens <demo-id> [--format tailwind|css|rn]");
    return;
  }
  const cleanId = demoId.startsWith("demo-") ? demoId : `demo-${demoId}`;
  const catalog = loadCatalog();
  const demo = catalog.demos.find(
    (d) => d.id === cleanId || d.niche === demoId,
  );

  if (!demo) {
    console.error(`❌ Démo "${demoId}" introuvable.`);
    return;
  }

  const primary = demo.primaryColor || "#1ABC9C";
  const secondary = demo.secondaryColor || "#2C3E50";
  const bodyFont = demo.bodyFont || "sans-serif";
  const primaryFont = demo.primaryFont || "sans-serif";

  if (format === "css") {
    console.log(`/* Design Tokens pour ${demo.title} */
:root {
  --color-primary: ${primary};
  --color-secondary: ${secondary};
  --font-body: '${bodyFont}', sans-serif;
  --font-heading: '${primaryFont}', serif;
}`);
    return;
  }

  if (format === "rn" || format === "react-native") {
    console.log(`// Theme React Native / Expo pour ${demo.title}
export const theme = {
  colors: {
    primary: '${primary}',
    secondary: '${secondary}',
    background: '#0d1117',
    surface: '#161b22',
    text: '#ffffff',
    textMuted: '#8b949e',
    border: 'rgba(255, 255, 255, 0.1)'
  },
  fonts: {
    body: '${bodyFont}',
    heading: '${primaryFont}'
  }
};`);
    return;
  }

  // Tailwind (default)
  console.log(`// tailwind.config.js — Extension de thème pour ${demo.title}
module.exports = {
  theme: {
    extend: {
      colors: {
        vault: {
          primary: '${primary}',
          secondary: '${secondary}'
        }
      },
      fontFamily: {
        body: ['"${bodyFont}"', 'sans-serif'],
        heading: ['"${primaryFont}"', 'serif']
      }
    }
  }
};`);
}

// -------------------------------------------------------------
// COMMAND: doctor
// -------------------------------------------------------------
function cmdDoctor() {
  console.log(`\n🩺 Running Vault Doctor integrity checks...\n`);
  const catalog = loadCatalog();
  let errors = 0;
  let warnings = 0;

  console.log(`• UI Blocks (${catalog.blocks.length}):`);
  for (const b of catalog.blocks) {
    const fp = path.join(ROOT_DIR, b.file);
    if (!fs.existsSync(fp)) {
      console.error(`  ❌ Missing source file for ${b.id}: ${b.file}`);
      errors++;
    }
    if (b.preview && !fs.existsSync(path.join(ROOT_DIR, b.preview))) {
      warnings++;
    }
  }
  console.log(`  ✓ ${catalog.blocks.length} blocks verified.`);

  console.log(`• Business Demos (${catalog.demos.length}):`);
  for (const d of catalog.demos) {
    const targetFile = d.file || d.htmlPath || (d.cssPath ? d.cssPath : null);
    if (targetFile) {
      const p = path.join(ROOT_DIR, targetFile);
      if (!fs.existsSync(p)) {
        console.error(`  ❌ Missing file for ${d.id}: ${targetFile}`);
        errors++;
      }
    }
  }
  console.log(`  ✓ ${catalog.demos.length} demos verified.`);

  console.log(`• Application & Marketing Pages (${catalog.pages.length}):`);
  for (const p of catalog.pages) {
    const fp = path.join(ROOT_DIR, p.file);
    if (!fs.existsSync(fp)) {
      console.error(`  ❌ Missing source file for ${p.id}: ${p.file}`);
      errors++;
    }
  }
  console.log(`  ✓ ${catalog.pages.length} pages verified.`);

  console.log(`\n──────────────────────────────────────────`);
  if (errors === 0) {
    console.log(
      `\x1b[32m✨ Perfect integrity: 0 errors, ${warnings} minor preview warnings.\x1b[0m\n`,
    );
  } else {
    console.log(`\x1b[31m❌ ${errors} errors detected.\x1b[0m\n`);
  }
}

// -------------------------------------------------------------
// COMMAND: studio (Local HTTP Server & REST API)
// -------------------------------------------------------------
function cmdStudio(port = 3333) {
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".ttf": "font/ttf",
  };

  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://localhost:${port}`);
    let pathname = parsedUrl.pathname;

    // API: GET /api/catalog
    if (pathname === "/api/catalog") {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(fs.readFileSync(REGISTRY_PATH, "utf8"));
      return;
    }

    // API: GET /api/state
    if (pathname === "/api/state" && req.method === "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify(loadState()));
      return;
    }

    // API: POST /api/state
    if (pathname === "/api/state" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          const newState = JSON.parse(body);
          saveState(newState);
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          });
          res.end(JSON.stringify({ success: true, state: newState }));
        } catch (e) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: e.message }));
        }
      });
      return;
    }

    // API: POST /api/save-template (Add custom template)
    if (pathname === "/api/save-template" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          const data = JSON.parse(body);
          const slug = (data.title || "custom-template")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-");
          const id = `custom-${slug}-${Date.now().toString().slice(-4)}`;
          const customDir = path.join(ROOT_DIR, "sources", "custom");
          if (!fs.existsSync(customDir))
            fs.mkdirSync(customDir, { recursive: true });

          const filePath = path.join(customDir, `${id}.html`);
          const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${data.title} | Design Canvas Vault</title>
  <link rel="stylesheet" href="../shared/style.css">
  <link rel="stylesheet" href="../shared/css/font-icons.css">
  ${data.style ? `<style>${data.style}</style>` : ""}
</head>
<body class="stretched">
  <div id="wrapper">
    ${data.html || ""}
  </div>
</body>
</html>`;
          fs.writeFileSync(filePath, fullHtml, "utf8");

          // Update catalog/04-custom-templates.md
          const customMdPath = path.join(
            ROOT_DIR,
            "catalog",
            "04-custom-templates.md",
          );
          const row = `| \`${id}\` | ${data.title} | ${data.category || "custom"} | ${data.author || "@community"} | \`${(data.tags || []).join(", ")}\` | ${new Date().toLocaleDateString("fr-FR")} |\n`;
          fs.appendFileSync(customMdPath, row, "utf8");

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: true,
              id,
              path: `sources/custom/${id}.html`,
            }),
          );
        } catch (e) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: e.message }));
        }
      });
      return;
    }

    // Static Files: Default to studio/
    if (pathname === "/" || pathname === "/index.html") {
      pathname = "/studio/index.html";
    } else if (
      pathname.startsWith("/studio/") ||
      pathname.startsWith("/sources/")
    ) {
      // Keep as is
    } else if (
      pathname.startsWith("/shared/") ||
      pathname.startsWith("/demos/")
    ) {
      pathname = `/sources${pathname}`;
    } else {
      const inStudio = path.join(ROOT_DIR, "studio", pathname);
      if (fs.existsSync(inStudio)) {
        pathname = `/studio${pathname}`;
      }
    }

    let absPath = path.join(ROOT_DIR, pathname);

    // Smart Asset Resolution if not directly found
    if (!fs.existsSync(absPath) || !fs.statSync(absPath).isFile()) {
      if (pathname.includes("/images/blocks/preview/")) {
        const sub = pathname.split("/images/blocks/preview/")[1];
        const candidate = path.join(
          ROOT_DIR,
          "sources",
          "previews",
          "preview",
          sub,
        );
        if (fs.existsSync(candidate)) absPath = candidate;
      } else if (pathname.includes("/images/blocks/intro/")) {
        const sub = pathname.split("/images/blocks/intro/")[1];
        const candidate = path.join(
          ROOT_DIR,
          "sources",
          "previews",
          "intro",
          sub,
        );
        if (fs.existsSync(candidate)) absPath = candidate;
      } else if (pathname.includes("/demos/")) {
        const sub = pathname.split("/demos/")[1];
        const candidate = path.join(ROOT_DIR, "sources", "demos", sub);
        if (fs.existsSync(candidate)) absPath = candidate;
      } else if (pathname.includes("/images/")) {
        const sub = pathname.split("/images/")[1];
        const candidate = path.join(ROOT_DIR, "sources", "images", sub);
        if (fs.existsSync(candidate)) absPath = candidate;
      } else if (pathname.includes("/css/") || pathname.includes("/js/")) {
        const sub = pathname.startsWith("/sources/shared/")
          ? pathname.replace("/sources/shared/", "")
          : pathname.replace(/^\/sources\/[^\/]+\//, "");
        const candidate = path.join(ROOT_DIR, "sources", "shared", sub);
        if (fs.existsSync(candidate)) absPath = candidate;
      }

      // Cross-directory resolution for HTML templates
      if (
        (!fs.existsSync(absPath) || !fs.statSync(absPath).isFile()) &&
        pathname.endsWith(".html")
      ) {
        const baseFilename = path.basename(pathname);
        const candidates = [
          path.join(ROOT_DIR, "sources", "pages", baseFilename),
          path.join(ROOT_DIR, "sources", "blocks", baseFilename),
          path.join(ROOT_DIR, "sources", "demos", baseFilename),
        ];
        for (const cand of candidates) {
          if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
            absPath = cand;
            break;
          }
        }
      }
    }

    if (fs.existsSync(absPath) && fs.statSync(absPath).isFile()) {
      const ext = path.extname(absPath).toLowerCase();
      const mime = mimeTypes[ext] || "application/octet-stream";
      const headers = {
        "Content-Type": mime,
        "Access-Control-Allow-Origin": "*",
      };
      if (pathname.startsWith("/studio/")) {
        headers["Cache-Control"] = "no-store, no-cache, must-revalidate";
      }
      res.writeHead(200, headers);
      fs.createReadStream(absPath).pipe(res);
    } else {
      const ext = path.extname(pathname).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"].includes(ext)) {
        // Return a sleek SVG placeholder instead of a broken image
        const label = path.basename(pathname, ext);
        const svgPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#grad)" rx="12" />
          <circle cx="300" cy="180" r="36" fill="#334155" />
          <path d="M288 185 L296 172 L312 192 L304 185" stroke="#94a3b8" stroke-width="3" fill="none" stroke-linecap="round" />
          <text x="300" y="245" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle" font-weight="600">${label}</text>
          <text x="300" y="270" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Design Canvas Vault</text>
        </svg>`;
        res.writeHead(200, {
          "Content-Type": "image/svg+xml",
          "Access-Control-Allow-Origin": "*",
        });
        res.end(svgPlaceholder);
        return;
      }
      if (ext === ".html") {
        const clean404 = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Not Found</title></head>
<body style="background:#000000;color:#888888;font-family:-apple-system,BlinkMacSystemFont,sans-serif;text-align:center;padding:120px 20px;">
  <div style="max-width:400px;margin:0 auto;background:#0d0d0d;border:1px solid #222;border-radius:10px;padding:30px;">
    <h3 style="color:#ededed;font-size:15px;margin-bottom:8px;">Internal Link Target</h3>
    <p style="font-size:12px;color:#666666;margin-bottom:16px;">The requested template link (${pathname}) is a demo placeholder.</p>
    <button onclick="window.history.back()" style="background:#ededed;color:#000;border:none;padding:6px 14px;border-radius:4px;font-size:12px;font-weight:600;cursor:pointer;">← Return to Preview</button>
  </div>
</body>
</html>`;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(clean404);
        return;
      }
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(`404 Not Found: ${pathname}`);
    }
  });

  server.listen(port, () => {
    console.log(
      `\n🎨 \x1b[32mDesign Canvas Vault Studio démarré sur http://localhost:${port}\x1b[0m`,
    );
    console.log(
      `• Interface Visuelle : http://localhost:${port}/studio/index.html`,
    );
    console.log(`• API Catalog : http://localhost:${port}/api/catalog`);
    console.log(`• État synchronisé : ${STATE_PATH}`);
    console.log(`\nAppuyez sur Ctrl+C pour arrêter le serveur.\n`);
  });
}

// -------------------------------------------------------------
// CLI ROUTER
// -------------------------------------------------------------
const args = process.argv.slice(2);
const command = args[0] || "help";

switch (command) {
  case "search": {
    const q = args[1];
    const isJson = args.includes("--json");
    cmdSearch(q, isJson);
    break;
  }
  case "inspect": {
    cmdInspect(args[1]);
    break;
  }
  case "extract": {
    const id = args[1];
    const htmlOnly = args.includes("--html-only");
    const styleOnly = args.includes("--style-only");
    cmdExtract(id, { htmlOnly, styleOnly });
    break;
  }
  case "tokens": {
    const demoId = args[1];
    const formatIdx = args.indexOf("--format");
    const format = formatIdx !== -1 ? args[formatIdx + 1] : "tailwind";
    cmdTokens(demoId, format);
    break;
  }
  case "doctor": {
    cmdDoctor();
    break;
  }
  case "sync": {
    console.log("🔄 Resynchronisation du Vault...");
    require("./build-vault.js");
    break;
  }
  case "studio": {
    const portIdx = args.indexOf("--port");
    const port = portIdx !== -1 ? parseInt(args[portIdx + 1], 10) : 3333;
    cmdStudio(port);
    break;
  }
  default: {
    console.log(`
Design Canvas Vault CLI

Available commands:
  vault search <query> [--json]                 Search instantly across 1,245 templates
  vault inspect <id>                           Inspect DOM skeleton, classes, fonts, and colors
  vault extract <id> [--html-only] [--style]   Extract surgical, ready-to-use clean code
  vault tokens <demo-id> [--format tw|css|rn]  Export design tokens (Tailwind, CSS :root, React Native)
  vault doctor                                 Validate integrity across all files and catalogs
  vault sync                                   Re-synchronize and generate all indexes
  vault studio [--port 3333]                   Start local interactive web studio
`);
    break;
  }
}
