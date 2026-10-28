#!/usr/bin/env node

/**
 * vault-cli.ts — Design Canvas Vault Command Line Interface (TypeScript)
 *
 * Commands:
 *   studio [--port 3333]
 *   search <query> [--json]
 *   inspect <id>
 *   extract <id> [--html-only] [--style-only]
 *   tokens <demo-id> [--format tailwind|css|rn]
 *   doctor
 *   sync
 */

import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import type {
  VaultItem,
  CatalogPayload,
  StudioState,
  TokenFormat,
  ExtractOptions,
} from "../types/vault.d.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR: string = path.resolve(__dirname, "..");
const REGISTRY_PATH: string = path.join(ROOT_DIR, "registry", "catalog.json");
const STATE_PATH: string = path.join(ROOT_DIR, ".vault-state.json");

function loadCatalog(): CatalogPayload {
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error("❌ Registry not found. Run `npm run build` first.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8")) as CatalogPayload;
}

function loadState(): StudioState {
  if (!fs.existsSync(STATE_PATH)) {
    const initialState: StudioState = {
      activeTemplate: "block-hero-10",
      activeCategory: "hero",
      pageStack: [],
      theme: {
        mode: "dark",
        primaryColor: "#0b44a7",
        secondaryColor: "#ffbd00",
        fontBody: "Geist",
        fontPrimary: "Playfair Display",
      },
      targetStack: "universal",
      lastUpdated: new Date().toISOString(),
    };
    fs.writeFileSync(STATE_PATH, JSON.stringify(initialState, null, 2), "utf8");
    return initialState;
  }
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8")) as StudioState;
  } catch {
    return {
      activeTemplate: "block-hero-10",
      activeCategory: "all",
      pageStack: [],
      theme: { mode: "dark", primaryColor: "#0b44a7" },
    };
  }
}

function saveState(state: StudioState): void {
  state.lastUpdated = new Date().toISOString();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf8");
}

// -------------------------------------------------------------
// COMMAND: search
// -------------------------------------------------------------
function cmdSearch(query?: string, isJson: boolean = false): void {
  if (!query) {
    console.log("Usage: vault search <keyword|industry|category|color>");
    return;
  }
  const catalog = loadCatalog();
  const q = query.toLowerCase().trim();
  const results: VaultItem[] = [];

  for (const b of catalog.blocks) {
    const matchScore =
      (b.id.toLowerCase().includes(q) ? 4 : 0) +
      (b.name.toLowerCase().includes(q) ? 3 : 0) +
      ((b.category || "").toLowerCase().includes(q) ? 2 : 0) +
      ((b.tags || []).some((t: string) => t.toLowerCase().includes(q)) ? 2 : 0);
    if (matchScore > 0) {
      results.push({ ...b, type: "block", score: matchScore });
    }
  }

  for (const d of catalog.demos) {
    const matchScore =
      (d.id.toLowerCase().includes(q) ? 4 : 0) +
      ((d.name || d.title || "").toLowerCase().includes(q) ? 3 : 0) +
      ((d.niche || "").toLowerCase().includes(q) ? 3 : 0) +
      ((d.tags || []).some((t: string) => t.toLowerCase().includes(q)) ? 2 : 0);
    if (matchScore > 0) {
      results.push({ ...d, type: "demo", score: matchScore });
    }
  }

  for (const p of catalog.pages) {
    const matchScore =
      (p.id.toLowerCase().includes(q) ? 4 : 0) +
      (p.name.toLowerCase().includes(q) ? 3 : 0) +
      ((p.tags || []).some((t: string) => t.toLowerCase().includes(q)) ? 2 : 0);
    if (matchScore > 0) {
      results.push({ ...p, type: "page", score: matchScore });
    }
  }

  results.sort((a, b) => (b.score || 0) - (a.score || 0));
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
    if (r.primaryColor) {
      console.log(
        `   Color: \x1b[33m${r.primaryColor}\x1b[0m | Font: ${r.primaryFont || r.bodyFont}`,
      );
    }
    if (r.preview) console.log(`   Preview: ${r.preview}`);
    console.log(`   Tags: ${(r.tags || []).join(", ")}`);
    console.log("");
  }
}

// -------------------------------------------------------------
// COMMAND: inspect
// -------------------------------------------------------------
function cmdInspect(id?: string): void {
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

  const relFile = item.file || item.htmlPath || item.cssPath || "";
  const filePath = path.join(ROOT_DIR, relFile);

  console.log(`\n🔬 Anatomy of \x1b[36m${item.id}\x1b[0m:`);
  console.log(`──────────────────────────────────────────`);
  console.log(`• Name: ${item.name || item.title}`);
  console.log(`• Category: ${item.category || item.niche || "N/A"}`);
  console.log(`• File: ${relFile}`);
  if (item.preview) console.log(`• Preview: ${item.preview}`);
  if (item.primaryColor) {
    console.log(`• Colors: ${item.primaryColor} / ${item.secondaryColor}`);
  }
  if (item.fonts && item.fonts.length > 0) {
    console.log(`• Fonts: ${item.fonts.join(", ")}`);
  }

  if (relFile && fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
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
    const summary: Record<string, number> = {};
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

    const classMatches = content.match(/class=["']([^"']+)["']/g) || [];
    const classes = new Set<string>();
    for (const cm of classMatches) {
      cm.replace(/class=["']/, "")
        .replace(/["']$/, "")
        .split(/\s+/)
        .forEach((c: string) => {
          if (c && !c.startsWith("col-") && !c.startsWith("row")) {
            classes.add(c);
          }
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
function cmdExtract(id?: string, options: ExtractOptions = {}): void {
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

  const relFile = item.file || item.htmlPath || item.cssPath || "";
  const filePath = path.join(ROOT_DIR, relFile);
  if (!relFile || !fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");

  let styleBlock = "";
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (styleMatch) styleBlock = styleMatch[1].trim();

  let htmlBlock = "";
  const wrapperMatch =
    content.match(/<div id="wrapper"[^>]*>([\s\S]*?)<\/div>/i) ||
    content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (wrapperMatch) {
    htmlBlock = wrapperMatch[1]
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .trim();
  } else {
    htmlBlock = content;
  }

  if (options.styleOnly) {
    console.log(styleBlock || "/* No inline custom styles */");
    return;
  }

  if (options.htmlOnly) {
    console.log(htmlBlock);
    return;
  }

  if (styleBlock) {
    console.log(`<!-- Dedicated CSS -->\n<style>\n${styleBlock}\n</style>\n`);
  }
  console.log(`<!-- Purified HTML Markup -->\n${htmlBlock}`);
}

// -------------------------------------------------------------
// COMMAND: tokens
// -------------------------------------------------------------
function cmdTokens(demoId?: string, format: TokenFormat = "tailwind"): void {
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
    console.error(`❌ Demo "${demoId}" not found.`);
    return;
  }

  const primary = demo.primaryColor || "#1ABC9C";
  const secondary = demo.secondaryColor || "#2C3E50";
  const bodyFont = demo.bodyFont || "sans-serif";
  const primaryFont = demo.primaryFont || "sans-serif";
  const demoTitle = demo.name || demo.title || demoId;

  if (format === "css") {
    console.log(`/* Design Tokens for ${demoTitle} */
:root {
  --color-primary: ${primary};
  --color-secondary: ${secondary};
  --font-body: '${bodyFont}', sans-serif;
  --font-heading: '${primaryFont}', serif;
}`);
    return;
  }

  if (format === "rn" || format === "react-native") {
    console.log(`// React Native / Expo Theme for ${demoTitle}
export const theme = {
  colors: {
    primary: '${primary}',
    secondary: '${secondary}',
    background: '#0a0a0a',
    surface: '#121212',
    text: '#ededed',
    textMuted: '#888888',
    border: 'rgba(255, 255, 255, 0.1)'
  },
  fonts: {
    body: '${bodyFont}',
    heading: '${primaryFont}'
  }
};`);
    return;
  }

  console.log(`// tailwind.config.js — Theme extension for ${demoTitle}
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
function cmdDoctor(): void {
  console.log(`\n🩺 Running Vault Doctor integrity checks...\n`);
  const catalog = loadCatalog();
  let errors = 0;
  let warnings = 0;

  console.log(`• UI Blocks (${catalog.blocks.length}):`);
  for (const b of catalog.blocks) {
    if (b.file) {
      const fp = path.join(ROOT_DIR, b.file);
      if (!fs.existsSync(fp)) {
        console.error(`  ❌ Missing source file for ${b.id}: ${b.file}`);
        errors++;
      }
    }
    if (b.preview && !fs.existsSync(path.join(ROOT_DIR, b.preview))) {
      warnings++;
    }
  }
  console.log(`  ✓ ${catalog.blocks.length} blocks verified.`);

  console.log(`• Business Demos (${catalog.demos.length}):`);
  for (const d of catalog.demos) {
    const targetFile = d.file || d.htmlPath || d.cssPath || null;
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
    if (p.file) {
      const fp = path.join(ROOT_DIR, p.file);
      if (!fs.existsSync(fp)) {
        console.error(`  ❌ Missing source file for ${p.id}: ${p.file}`);
        errors++;
      }
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
function cmdStudio(port: number = 3333): void {
  const mimeTypes: Record<string, string> = {
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
    const parsedUrl = new URL(req.url || "/", `http://localhost:${port}`);
    let pathname = parsedUrl.pathname;

    if (pathname === "/api/catalog") {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(fs.readFileSync(REGISTRY_PATH, "utf8"));
      return;
    }

    if (pathname === "/api/state" && req.method === "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify(loadState()));
      return;
    }

    if (pathname === "/api/state" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          const newState = JSON.parse(body) as StudioState;
          saveState(newState);
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          });
          res.end(JSON.stringify({ success: true, state: newState }));
        } catch (err) {
          const message =
            err instanceof Error ? err.message : "Invalid payload";
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: message }));
        }
      });
      return;
    }

    // 1. Redirect any non-embedded .html URL to clean extensionless URL
    if (pathname === "/studio/index.html" || pathname === "/index.html") {
      res.writeHead(301, { Location: `/${parsedUrl.search}` });
      res.end();
      return;
    }

    const isEmbedded = parsedUrl.searchParams.get("embed") === "1";

    if (pathname.endsWith(".html") && !isEmbedded) {
      const cleanSlug = path.basename(pathname, ".html");
      res.writeHead(301, { Location: `/${cleanSlug}` });
      res.end();
      return;
    }

    if (pathname === "/") {
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
      // Check if it is a clean template slug (e.g., /demo-academic, /block-hero-10)
      const slug = pathname.replace(/^\/+/, "");
      const slugCandidates: Array<string> = [
        path.join(ROOT_DIR, "sources", "demos", `${slug}.html`),
        path.join(ROOT_DIR, "sources", "blocks", `${slug}.html`),
        path.join(ROOT_DIR, "sources", "pages", `${slug}.html`),
      ];
      const matchedTemplate = slugCandidates.some(
        (f) => fs.existsSync(f) && fs.statSync(f).isFile(),
      );
      if (matchedTemplate) {
        // Serve the Studio SPA shell which renders the template fullscreen at the clean /<slug> URL
        pathname = "/studio/index.html";
      } else {
        const inStudio = path.join(ROOT_DIR, "studio", pathname);
        if (fs.existsSync(inStudio)) {
          pathname = `/studio${pathname}`;
        }
      }
    }

    let absPath = path.join(ROOT_DIR, pathname);

    const CANVAS_SOURCE_DIR =
      process.env.CANVAS_SOURCE ||
      "/home/midekordavidyayra/Documents/projects/saas/canvas-source";

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
        const sourceCandidate = path.join(
          CANVAS_SOURCE_DIR,
          "images",
          "blocks",
          "preview",
          sub,
        );
        if (fs.existsSync(candidate)) absPath = candidate;
        else if (fs.existsSync(sourceCandidate)) absPath = sourceCandidate;
      } else if (pathname.includes("/images/blocks/intro/")) {
        const sub = pathname.split("/images/blocks/intro/")[1];
        const candidate = path.join(
          ROOT_DIR,
          "sources",
          "previews",
          "intro",
          sub,
        );
        const sourceCandidate = path.join(
          CANVAS_SOURCE_DIR,
          "images",
          "blocks",
          "intro",
          sub,
        );
        if (fs.existsSync(candidate)) absPath = candidate;
        else if (fs.existsSync(sourceCandidate)) absPath = sourceCandidate;
      } else if (pathname.includes("/demos/")) {
        const sub = pathname.split("/demos/")[1];
        const candidate = path.join(ROOT_DIR, "sources", "demos", sub);
        const sourceCandidate = path.join(CANVAS_SOURCE_DIR, "demos", sub);
        if (fs.existsSync(candidate)) absPath = candidate;
        else if (fs.existsSync(sourceCandidate)) absPath = sourceCandidate;
      } else if (pathname.includes("/images/")) {
        const sub = pathname.split("/images/")[1];
        const candidate = path.join(ROOT_DIR, "sources", "images", sub);
        const sourceCandidate = path.join(CANVAS_SOURCE_DIR, "images", sub);
        if (fs.existsSync(candidate)) absPath = candidate;
        else if (fs.existsSync(sourceCandidate)) absPath = sourceCandidate;
      } else if (pathname.includes("/css/") || pathname.includes("/js/")) {
        const sub = pathname.startsWith("/sources/shared/")
          ? pathname.replace("/sources/shared/", "")
          : pathname.replace(/^\/sources\/[^/]+\//, "");
        const candidate = path.join(ROOT_DIR, "sources", "shared", sub);
        const sourceCandidate = path.join(CANVAS_SOURCE_DIR, sub);
        if (fs.existsSync(candidate)) absPath = candidate;
        else if (fs.existsSync(sourceCandidate)) absPath = sourceCandidate;
      }

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
      const headers: Record<string, string> = {
        "Content-Type": mime,
        "Access-Control-Allow-Origin": "*",
      };
      if (pathname.startsWith("/studio/") || ext === ".html") {
        headers["Cache-Control"] = "no-store, no-cache, must-revalidate";
      }

      res.writeHead(200, headers);
      fs.createReadStream(absPath).pipe(res);
    } else {
      const ext = path.extname(pathname).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"].includes(ext)) {
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
<head><meta charset="utf-8"><title>Internal Link Target</title></head>
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
      `\n🎨 \x1b[32mDesign Canvas Vault Studio running at http://localhost:${port}\x1b[0m`,
    );
    console.log(
      `• Visual Interface: http://localhost:${port}/studio/index.html`,
    );
    console.log(`• Catalog API:      http://localhost:${port}/api/catalog`);
    console.log(`\nPress Ctrl+C to stop the server.\n`);
  });
}

// -------------------------------------------------------------
// CLI ROUTER
// -------------------------------------------------------------
const args = process.argv.slice(2);
const command = args[0] || "help";

switch (command) {
  case "search": {
    cmdSearch(args[1], args.includes("--json"));
    break;
  }
  case "inspect": {
    cmdInspect(args[1]);
    break;
  }
  case "extract": {
    cmdExtract(args[1], {
      htmlOnly: args.includes("--html-only"),
      styleOnly: args.includes("--style-only"),
    });
    break;
  }
  case "tokens": {
    const formatIdx = args.indexOf("--format");
    const format = (
      formatIdx !== -1 ? args[formatIdx + 1] : "tailwind"
    ) as TokenFormat;
    cmdTokens(args[1], format);
    break;
  }
  case "doctor": {
    cmdDoctor();
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
Design Canvas Vault CLI (TypeScript)

Available commands:
  vault search <query> [--json]                 Search instantly across 1,245 templates
  vault inspect <id>                           Inspect DOM skeleton, classes, fonts, and colors
  vault extract <id> [--html-only] [--style]   Extract surgical, ready-to-use clean code
  vault tokens <demo-id> [--format tw|css|rn]  Export design tokens (Tailwind, CSS :root, React Native)
  vault doctor                                 Validate integrity across all files and catalogs
  vault studio [--port 3333]                   Start local interactive web studio
`);
    break;
  }
}
