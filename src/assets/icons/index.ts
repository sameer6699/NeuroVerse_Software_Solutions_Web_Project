/**
 * Icon Assets Index
 * 
 * Centralized export file for all custom icon assets.
 * Note: This project uses lucide-react for most icons, but custom SVG icons
 * can be stored here if needed.
 * 
 * Usage:
 *   import { customIcons } from '@/assets/icons';
 *   <img src={customIcons.customIcon} alt="Custom Icon" />
 */

// Custom icon assets (if you have custom SVG icons)
export const customIcons = {
  // Add your custom icons here
  // example: customIcon: new URL('./custom-icon.svg', import.meta.url).href,
} as const;

// Export all icons
export const icons = {
  custom: customIcons,
} as const;

