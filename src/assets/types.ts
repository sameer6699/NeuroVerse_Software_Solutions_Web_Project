/**
 * Asset Type Definitions
 * 
 * This file contains TypeScript type definitions for all asset imports
 * to ensure type safety and better IDE autocomplete support.
 */

// Image asset types
export type ImageAsset = string;

// Icon asset types
export type IconAsset = string;

// Font asset types
export type FontAsset = string;

// Asset categories
export type AssetCategory = 
  | 'logos'
  | 'hero'
  | 'features'
  | 'testimonials'
  | 'team'
  | 'partners'
  | 'projects'
  | 'icons'
  | 'fonts';

// Asset metadata interface
export interface AssetMetadata {
  name: string;
  path: string;
  category: AssetCategory;
  alt?: string;
  description?: string;
}

