/**
 * Image Assets Index
 * 
 * Centralized export file for all image assets.
 * Import images from this file for better organization and type safety.
 * 
 * Usage:
 *   import { logos, heroImages } from '@/assets/images';
 *   <img src={logos.primary} alt="Logo" />
 */

// Logo images
export const logos = {
  primary: new URL('./logos/logo.svg', import.meta.url).href,
  primaryPng: new URL('./logos/logo.png', import.meta.url).href,
  withBackground: new URL('./logos/logo_bg.svg', import.meta.url).href,
  withBackgroundPng: new URL('./logos/logo_bg.png', import.meta.url).href,
  main: new URL('./logos/Main-logo-NV.png', import.meta.url).href,
} as const;

// Hero section images
export const heroImages = {
  main: new URL('./hero/hero-main.jpg', import.meta.url).href,
  background: new URL('./hero/hero-bg.jpg', import.meta.url).href,
  pattern: new URL('./hero/hero-pattern.svg', import.meta.url).href,
} as const;

// Feature images
export const featureImages = {
  ai: new URL('./features/ai-feature.jpg', import.meta.url).href,
  cloud: new URL('./features/cloud-feature.jpg', import.meta.url).href,
  security: new URL('./features/security-feature.jpg', import.meta.url).href,
  analytics: new URL('./features/analytics-feature.jpg', import.meta.url).href,
} as const;

// Testimonial images
export const testimonialImages = {
  placeholder: new URL('./testimonials/testimonial-placeholder.jpg', import.meta.url).href,
} as const;

// Team member images
export const teamImages = {
  placeholder: new URL('./team/team-placeholder.jpg', import.meta.url).href,
} as const;

// Partner/Client logos
export const partnerLogos = {
  placeholder: new URL('./partners/partner-placeholder.png', import.meta.url).href,
} as const;

// Project images
export const projectImages = {
  placeholder: new URL('./projects/project-placeholder.jpg', import.meta.url).href,
} as const;

// Export all images as a single object for convenience
export const images = {
  logos,
  hero: heroImages,
  features: featureImages,
  testimonials: testimonialImages,
  team: teamImages,
  partners: partnerLogos,
  projects: projectImages,
} as const;

// Type exports for TypeScript support
export type LogoImage = typeof logos[keyof typeof logos];
export type HeroImage = typeof heroImages[keyof typeof heroImages];
export type FeatureImage = typeof featureImages[keyof typeof featureImages];

