/**
 * Design System Constants
 * 
 * This file contains standardized values for spacing, typography, colors, and other design tokens
 * to ensure consistency across the application.
 */

// Company Information
export const COMPANY = {
  name: "NeuroVerse",
  fullName: "NeuroVerse Software Solutions",
  email: {
    info: "info@neuroversesoftwaresolutions.com",
    contact: "contact@neuroverse.ai",
  },
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Innovation Drive",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/neuroverse",
    facebook: "https://www.facebook.com/neuroverse",
    twitter: "https://www.twitter.com/neuroverse",
    instagram: "https://www.instagram.com/neuroverse",
    youtube: "https://www.youtube.com/@neuroverse",
  },
} as const;

// Typography Scale
export const TYPOGRAPHY = {
  heading: {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
    h4: "text-xl md:text-2xl lg:text-3xl",
    h5: "text-lg md:text-xl lg:text-2xl",
    h6: "text-base md:text-lg lg:text-xl",
  },
  body: {
    large: "text-lg md:text-xl",
    base: "text-base md:text-lg",
    small: "text-sm md:text-base",
    xs: "text-xs md:text-sm",
  },
  weight: {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
  },
} as const;

// Spacing Scale (in Tailwind units: 1 = 0.25rem = 4px)
export const SPACING = {
  section: {
    py: "py-12 md:py-16 lg:py-20",
    px: "px-4 sm:px-6 lg:px-8",
  },
  card: {
    p: "p-6 md:p-8 lg:p-10",
    gap: "gap-6 md:gap-8",
  },
  grid: {
    gap: "gap-6 md:gap-8 lg:gap-12",
  },
  button: {
    px: "px-6",
    py: "py-3",
    gap: "gap-2",
  },
} as const;

// Border Radius
export const RADIUS = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  "2xl": "rounded-3xl",
  full: "rounded-full",
} as const;

// Shadows
export const SHADOWS = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  hover: {
    md: "hover:shadow-md",
    lg: "hover:shadow-lg",
    xl: "hover:shadow-xl",
    "2xl": "hover:shadow-2xl",
  },
} as const;

// Colors (using CSS variables from design system)
export const COLORS = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  muted: "text-muted-foreground",
  background: "bg-background",
  foreground: "text-foreground",
  border: "border-border",
} as const;

// Button Variants
export const BUTTON = {
  size: {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-6 text-base",
    lg: "h-12 px-8 text-lg",
  },
  variant: {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  },
} as const;

// Animation Durations
export const ANIMATION = {
  fast: "duration-200",
  normal: "duration-300",
  slow: "duration-500",
  transition: "transition-all duration-300",
} as const;

// Accessibility
export const A11Y = {
  focus: "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  srOnly: "sr-only",
  skipLink: "skip-link",
} as const;

