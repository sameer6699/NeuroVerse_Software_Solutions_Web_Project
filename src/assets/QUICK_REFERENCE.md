# Asset Quick Reference

Quick reference guide for using assets in the NeuroVerse project.

## 🎯 Quick Import

```typescript
import { images } from '@/assets';
```

## 📸 Available Image Categories

### Logos
```typescript
images.logos.primary          // SVG logo
images.logos.primaryPng       // PNG logo
images.logos.withBackground   // Logo with background (SVG)
images.logos.withBackgroundPng // Logo with background (PNG)
```

### Hero Images
```typescript
images.hero.main       // Main hero image
images.hero.background // Hero background
images.hero.pattern    // Hero pattern
```

### Feature Images
```typescript
images.features.ai         // AI feature image
images.features.cloud      // Cloud feature image
images.features.security   // Security feature image
images.features.analytics  // Analytics feature image
```

### Other Categories
```typescript
images.testimonials.placeholder
images.team.placeholder
images.partners.placeholder
images.projects.placeholder
```

## 💻 Code Snippets

### Basic Image
```typescript
import { images } from '@/assets';
<img src={images.logos.primary} alt="Logo" />
```

### Background Image
```typescript
import { images } from '@/assets';
<div style={{ backgroundImage: `url(${images.hero.background})` }} />
```

### Preload Images
```typescript
import { images, preloadImages } from '@/assets';
useEffect(() => {
  preloadImages([images.logos.primary, images.hero.main]);
}, []);
```

### Conditional Logo
```typescript
import { images } from '@/assets';
const logoSrc = darkMode ? images.logos.withBackground : images.logos.primary;
```

## 📁 Folder Structure

```
src/assets/
├── images/
│   ├── logos/       → Logo files
│   ├── hero/        → Hero images
│   ├── features/    → Feature images
│   ├── testimonials/ → Testimonial images
│   ├── team/        → Team photos
│   ├── partners/    → Partner logos
│   └── projects/    → Project images
├── icons/           → Custom icons
└── fonts/           → Custom fonts
```

## 🔗 Related Files

- `src/assets/index.ts` - Main export file
- `src/assets/images/index.ts` - Image exports
- `src/assets/utils.ts` - Utility functions
- `src/assets/README.md` - Full documentation
- `src/assets/USAGE_GUIDE.md` - Detailed usage guide

