/**
 * Asset Usage Examples
 * 
 * This file demonstrates how to use the modularized asset structure
 * in your React components.
 */

import { images } from '@/assets';
import { logos, heroImages, featureImages } from '@/assets/images';
import { preloadImages } from '@/assets/utils';
import { useEffect } from 'react';

// Example 1: Basic usage with main assets import
export function BasicAssetExample() {
  return (
    <div>
      <img src={images.logos.primary} alt="Logo" />
      <img src={images.hero.main} alt="Hero" />
    </div>
  );
}

// Example 2: Using specific category imports
export function CategoryImportExample() {
  return (
    <div>
      <img src={logos.primary} alt="Primary Logo" width={100} height={100} />
      <img src={logos.withBackground} alt="Logo with Background" width={100} height={100} />
      <img src={heroImages.main} alt="Hero Image" />
      <img src={featureImages.ai} alt="AI Feature" />
    </div>
  );
}

// Example 3: Using assets with preloading for better performance
export function PreloadExample() {
  useEffect(() => {
    // Preload critical images
    preloadImages([
      images.logos.primary,
      images.hero.main,
      images.features.ai,
    ]).catch(console.error);
  }, []);

  return (
    <div>
      <img src={images.logos.primary} alt="Logo" />
    </div>
  );
}

// Example 4: Using assets in a component with conditional rendering
export function ConditionalAssetExample({ useBackground = false }: { useBackground?: boolean }) {
  const logoSrc = useBackground 
    ? images.logos.withBackground 
    : images.logos.primary;

  return (
    <div>
      <img src={logoSrc} alt="Logo" />
    </div>
  );
}

// Example 5: Using assets with Next.js Image component (if using Next.js)
// For Vite/React, you can use regular img tags or a custom Image component
export function ImageComponentExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* Logo variations */}
      <div className="flex gap-4">
        <img 
          src={logos.primary} 
          alt="Primary Logo" 
          className="w-32 h-32 object-contain"
        />
        <img 
          src={logos.primaryPng} 
          alt="Primary Logo PNG" 
          className="w-32 h-32 object-contain"
        />
        <img 
          src={logos.withBackground} 
          alt="Logo with Background" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Hero image */}
      <img 
        src={heroImages.main} 
        alt="Hero" 
        className="w-full h-auto"
      />

      {/* Feature images */}
      <div className="grid grid-cols-2 gap-4">
        <img src={featureImages.ai} alt="AI Feature" className="w-full h-auto" />
        <img src={featureImages.cloud} alt="Cloud Feature" className="w-full h-auto" />
        <img src={featureImages.security} alt="Security Feature" className="w-full h-auto" />
        <img src={featureImages.analytics} alt="Analytics Feature" className="w-full h-auto" />
      </div>
    </div>
  );
}

// Example 6: Using assets in CSS (background images)
export function CSSBackgroundExample() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImages.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '400px',
      }}
    >
      <h1>Hero Section</h1>
    </div>
  );
}

