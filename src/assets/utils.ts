/**
 * Asset Utility Functions
 * 
 * Helper functions for working with assets in the application.
 */

import type { AssetCategory } from './types';

/**
 * Get asset path by category and name
 * @param category - Asset category (logos, hero, features, etc.)
 * @param name - Asset name
 * @returns Asset path or undefined if not found
 */
export function getAssetPath(category: AssetCategory, name: string): string | undefined {
  try {
    // Dynamic import based on category
    const assetMap: Record<AssetCategory, Record<string, string>> = {
      logos: {},
      hero: {},
      features: {},
      testimonials: {},
      team: {},
      partners: {},
      projects: {},
      icons: {},
      fonts: {},
    };

    // This is a placeholder - in a real implementation, you'd map your assets
    return assetMap[category]?.[name];
  } catch (error) {
    console.error(`Failed to get asset path for ${category}/${name}:`, error);
    return undefined;
  }
}

/**
 * Preload an image asset
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Preload multiple image assets
 * @param sources - Array of image source URLs
 * @returns Promise that resolves when all images are loaded
 */
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Get optimized image URL (useful for CDN or image optimization services)
 * @param src - Original image source
 * @param width - Desired width
 * @param height - Desired height
 * @param quality - Image quality (0-100)
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  height?: number,
  quality: number = 80
): string {
  // This is a placeholder - implement based on your image optimization service
  // Example: Cloudinary, Imgix, etc.
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  
  return `${src}?${params.toString()}`;
}

/**
 * Check if an image exists
 * @param src - Image source URL
 * @returns Promise that resolves to true if image exists
 */
export function imageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

