# Assets Folder Structure

This folder contains all project-related assets organized in a modular structure for easy management and import.

## 📁 Folder Structure

```
src/assets/
├── images/              # All image assets
│   ├── logos/          # Logo variations
│   ├── hero/           # Hero section images
│   ├── features/       # Feature showcase images
│   ├── testimonials/   # Testimonial images
│   ├── team/           # Team member photos
│   ├── partners/       # Partner/client logos
│   └── projects/       # Project showcase images
├── icons/              # Custom icon assets (SVG)
├── fonts/              # Custom font files (if needed)
├── index.ts            # Main export file
├── types.ts            # TypeScript type definitions
├── utils.ts            # Asset utility functions
└── README.md           # This file
```

## 🚀 Usage

### Basic Import

```typescript
// Import from main assets module
import { images, icons } from '@/assets';

// Use in component
<img src={images.logos.primary} alt="Logo" />
```

### Specific Category Import

```typescript
// Import specific categories
import { logos, heroImages } from '@/assets/images';

// Use in component
<img src={logos.primary} alt="Logo" />
<img src={heroImages.main} alt="Hero" />
```

### Using Asset Utilities

```typescript
import { preloadImages, getOptimizedImageUrl } from '@/assets/utils';

// Preload images for better performance
await preloadImages([
  images.hero.main,
  images.features.ai
]);

// Get optimized image URL
const optimizedUrl = getOptimizedImageUrl(
  images.hero.main,
  1920,
  1080,
  85
);
```

## 📝 Adding New Assets

### Adding Images

1. Place your image file in the appropriate subfolder:
   - Logos → `images/logos/`
   - Hero images → `images/hero/`
   - Features → `images/features/`
   - etc.

2. Add the image to the appropriate export in `images/index.ts`:

```typescript
export const logos = {
  primary: new URL('./logos/logo.svg', import.meta.url).href,
  newLogo: new URL('./logos/new-logo.svg', import.meta.url).href, // Add here
} as const;
```

### Adding Icons

1. Place your SVG icon in `icons/`
2. Add it to `icons/index.ts`:

```typescript
export const customIcons = {
  myIcon: new URL('./my-icon.svg', import.meta.url).href,
} as const;
```

## 🎨 Best Practices

1. **Naming Convention**: Use kebab-case for file names (e.g., `hero-main.jpg`)
2. **Image Formats**: 
   - Use SVG for logos and icons
   - Use WebP or JPG for photos
   - Use PNG for images with transparency
3. **Optimization**: Optimize images before adding them to reduce bundle size
4. **Organization**: Keep assets organized by category in their respective folders
5. **Type Safety**: Always use the exported constants instead of hardcoded paths

## 📦 Asset Categories

- **logos**: Company logos and brand assets
- **hero**: Hero section and banner images
- **features**: Feature showcase and product images
- **testimonials**: Customer testimonial images
- **team**: Team member profile photos
- **partners**: Partner and client logos
- **projects**: Project showcase and portfolio images
- **icons**: Custom SVG icons (most icons use lucide-react)
- **fonts**: Custom font files (if needed)

## 🔧 Migration from Public Folder

If you have assets in the `public/` folder, you can:

1. Move them to the appropriate `src/assets/` subfolder
2. Update imports to use the new asset structure
3. Update references in components

Example migration:
```typescript
// Old way (public folder)
<img src="/logo.svg" alt="Logo" />

// New way (assets folder)
import { images } from '@/assets';
<img src={images.logos.primary} alt="Logo" />
```

## 📚 TypeScript Support

All assets are fully typed. You'll get:
- Autocomplete for asset names
- Type checking for asset paths
- Better IDE support

```typescript
import { images } from '@/assets';

// TypeScript knows all available assets
const logo = images.logos.primary; // ✅ Type safe
const invalid = images.logos.nonExistent; // ❌ Type error
```

