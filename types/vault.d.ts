/**
 * Shared TypeScript Contracts & Interfaces for Design Canvas Vault
 */

export type VaultItemType = 'block' | 'demo' | 'page';
export type TokenFormat = 'tailwind' | 'css' | 'rn' | 'react-native';
export type ViewportDevice = 'desktop' | 'tablet' | 'mobile';
export type StudioViewMode = 'split' | 'gallery' | 'composer';
export type PresetRecipeKey = 'saas' | 'fintech' | 'medical';

export interface VaultItem {
  id: string;
  name: string;
  title?: string;
  type?: VaultItemType;
  niche?: string;
  category?: string;
  categoryName?: string;
  subcategory?: string;
  file?: string;
  htmlPath?: string | null;
  cssPath?: string;
  preview?: string | null;
  previewUrl?: string | null;
  primaryColor?: string;
  secondaryColor?: string;
  bodyFont?: string;
  primaryFont?: string;
  fonts?: string[];
  colors?: string[];
  tags?: string[];
  score?: number;
}

export interface CatalogCounts {
  blocks: number;
  demos: number;
  pages: number;
  total: number;
}

export interface CatalogPayload {
  version: string;
  cdnBaseUrl?: string;
  generatedAt: string;
  counts: CatalogCounts;
  blocks: VaultItem[];
  demos: VaultItem[];
  pages: VaultItem[];
}

export interface StudioThemeState {
  mode: 'dark' | 'light';
  primaryColor: string;
  secondaryColor?: string;
  fontBody?: string;
  fontPrimary?: string;
}

export interface StudioState {
  activeTemplate: string | null;
  activeCategory: string;
  pageStack: VaultItem[];
  theme: StudioThemeState;
  targetStack?: string;
  lastUpdated?: string;
}

export interface ExtractOptions {
  htmlOnly?: boolean;
  styleOnly?: boolean;
}
