# Asset Usage Guide

This guide provides detailed examples and best practices for using the modularized asset structure in your NeuroVerse project.

## 📚 Table of Contents

1. [Quick Start](#quick-start)
2. [Import Methods](#import-methods)
3. [Usage Examples](#usage-examples)
4. [Best Practices](#best-practices)
5. [Migration Guide](#migration-guide)
6. [Troubleshooting](#troubleshooting)

## 🚀 Quick Start

### Basic Usage

```typescript
import { images } from '@/assets';

function MyComponent() {
  return (
    <img src={images.logos.primary} alt="Logo" />
  );
}
```

### Specific Category Import

```typescript
import { logos } from '@/assets/images';

function MyComponent() {
  return (
    <img src={logos.primary} alt="Logo" />
  );
}
```

## 📦 Import Methods

### Method 1: Main Assets Import (Recommended)

```typescript
import { images, icons } from '@/assets';

// Access all assets
<img src={images.logos.primary} />
<img src={images.hero.main} />
```

### Method 2: Category-Specific Import

```typescript
import { logos, heroImages } from '@/assets/images';

// Direct access to specific categories
<img src={logos.primary} />
<img src={heroImages.main} />
```

### Method 3: Individual Asset Import

```typescript
import { logos } from '@/assets/images';

// Use specific logo
const logoSrc = logos.primary;
```

## 💡 Usage Examples

### Example 1: Logo in Navigation

```typescript
import { images } from '@/assets';

function Navbar() {
  return (
    <nav>
      <img 
        src={images.logos.primary} 
        alt="NeuroVerse Logo" 
        width={120}
        height={40}
      />
    </nav>
  );
}
```

### Example 2: Hero Section with Background

```typescript
import { images } from '@/assets';

function HeroSection() {
  return (
    <section 
      style={{
        backgroundImage: `url(${images.hero.background})`,
        backgroundSize: 'cover',
      }}
    >
      <h1>Welcome to NeuroVerse</h1>
    </section>
  );
}
```

### Example 3: Feature Cards

```typescript
import { featureImages } from '@/assets/images';

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="feature-card">
      <img 
        src={featureImages.ai} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <h3>{title}</h3>
    </div>
  );
}
```

### Example 4: Conditional Logo Rendering

```typescript
import { images } from '@/assets';

function Header({ darkMode }: { darkMode: boolean }) {
  const logoSrc = darkMode 
    ? images.logos.withBackground 
    : images.logos.primary;

  return (
    <header>
      <img src={logoSrc} alt="Logo" />
    </header>
  );
}
```

### Example 5: Preloading Critical Images

```typescript
import { images } from '@/assets';
import { preloadImages } from '@/assets/utils';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Preload critical images for better performance
    preloadImages([
      images.logos.primary,
      images.hero.main,
      images.features.ai,
    ]).catch(console.error);
  }, []);

  return <div>Your app content</div>;
}
```

### Example 6: Using with Next.js Image Component

```typescript
import Image from 'next/image';
import { images } from '@/assets';

function OptimizedImage() {
  return (
    <Image
      src={images.hero.main}
      alt="Hero"
      width={1920}
      height={1080}
      priority
    />
  );
}
```

### Example 7: Using in CSS Modules

```typescript
// styles.module.css
.hero {
  background-image: url('@/assets/images/hero/hero-bg.jpg');
}
```

Or with inline styles:

```typescript
import { images } from '@/assets';

function Component() {
  return (
    <div
      style={{
        backgroundImage: `url(${images.hero.background})`,
      }}
    />
  );
}
```

## ✅ Best Practices

### 1. Always Use Type-Safe Imports

✅ **Good:**
```typescript
import { images } from '@/assets';
<img src={images.logos.primary} />
```

❌ **Bad:**
```typescript
<img src="/logo.svg" />
```

### 2. Use Descriptive Alt Text

✅ **Good:**
```typescript
<img src={images.logos.primary} alt="NeuroVerse Software Solutions Logo" />
```

❌ **Bad:**
```typescript
<img src={images.logos.primary} alt="logo" />
```

### 3. Preload Critical Images

```typescript
useEffect(() => {
  preloadImages([
    images.logos.primary,
    images.hero.main,
  ]);
}, []);
```

### 4. Use Appropriate Image Formats

- **SVG** for logos and icons (scalable, small file size)
- **WebP** for photos (better compression)
- **PNG** for images with transparency
- **JPG** for photos without transparency

### 5. Optimize Images Before Adding

- Compress images using tools like:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/)

### 6. Organize by Category

Keep assets organized in their respective folders:
- Logos → `images/logos/`
- Hero images → `images/hero/`
- Features → `images/features/`
- etc.

## 🔄 Migration Guide

### Migrating from Public Folder

**Before:**
```typescript
<img src="/logo.svg" alt="Logo" />
```

**After:**
```typescript
import { images } from '@/assets';
<img src={images.logos.primary} alt="Logo" />
```

### Step-by-Step Migration

1. **Move assets** from `public/` to `src/assets/images/`
2. **Update imports** in components
3. **Test** that all images load correctly
4. **Remove** old references from `public/` folder

## 🐛 Troubleshooting

### Issue: Image Not Loading

**Solution:**
- Check that the file exists in the correct folder
- Verify the path in `images/index.ts` is correct
- Ensure the file extension matches

### Issue: TypeScript Error

**Solution:**
- Make sure you're importing from `@/assets` or `@/assets/images`
- Check that the asset is exported in the index file
- Restart your TypeScript server

### Issue: Build Error

**Solution:**
- Ensure all referenced images exist
- Check for typos in file names
- Verify Vite configuration for asset handling

## 📝 Adding New Assets

### Step 1: Add the File

Place your image in the appropriate folder:
```
src/assets/images/features/my-new-feature.jpg
```

### Step 2: Export in Index

Add to `src/assets/images/index.ts`:

```typescript
export const featureImages = {
  ai: new URL('./features/ai-feature.jpg', import.meta.url).href,
  myNewFeature: new URL('./features/my-new-feature.jpg', import.meta.url).href, // Add here
} as const;
```

### Step 3: Use in Component

```typescript
import { featureImages } from '@/assets/images';
<img src={featureImages.myNewFeature} alt="New Feature" />
```

## 🎯 Summary

- ✅ Use `import { images } from '@/assets'` for easy access
- ✅ Always use type-safe imports
- ✅ Preload critical images for better performance
- ✅ Keep assets organized by category
- ✅ Optimize images before adding them
- ✅ Use appropriate image formats

For more information, see the [README.md](./README.md) file.

