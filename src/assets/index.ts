/**
 * Assets Module - Main Export
 * 
 * This is the main entry point for all project assets.
 * Import assets from this file for a clean, organized import structure.
 * 
 * Usage Examples:
 * 
 *   // Import specific asset categories
 *   import { images, icons } from '@/assets';
 *   
 *   // Use in components
 *   <img src={images.logos.primary} alt="Logo" />
 *   <img src={images.hero.main} alt="Hero" />
 * 
 *   // Or import specific assets
 *   import { logos, heroImages } from '@/assets/images';
 */

// Re-export all image assets
export * from './images';

// Re-export all icon assets
export * from './icons';

// Re-export types
export * from './types';

// Main asset object for convenience
import { images } from './images';
import { icons } from './icons';

export const assets = {
  images,
  icons,
} as const;

