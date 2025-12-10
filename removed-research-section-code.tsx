/**
 * REMOVED SECTION CODE - Research and Insights Section
 * 
 * This file contains the detailed code for the "Research and insights Section"
 * that was removed from the Data Analytics & AI Solutions page.
 * 
 * Location: Previously located between lines 558-664 in DataAnalyticsAISolutions.tsx
 * 
 * Description: A banner section with an image on the left (with AI network overlay)
 * and a blue text box on the right containing "Data Analytics & AI innovation research"
 * by "NeuroVerse Research Institute"
 */

import { motion } from "framer-motion";
import { images } from "@/assets";

/**
 * Research and insights Section Component
 * 
 * This section displays:
 * - Left: Image with AI network diagram overlay effect
 * - Right: Blue gradient box with text about "Data Analytics & AI innovation research"
 */
export function ResearchAndInsightsSection() {
  return (
    <section className="relative bg-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto max-w-5k-content">
        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group"
        >
          {/* Left Side - Image with AI Network Effect */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-black overflow-hidden group-hover:scale-105 transition-transform duration-700">
            {/* Base image with reduced opacity */}
            <img
              src={images.banners.cloudDataCenter}
              alt="Data Analytics research"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            />
            {/* Abstract AI network overlay effect */}
            <div className="absolute inset-0">
              {/* Glowing blue lines and dots pattern */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                {/* Network lines */}
                <defs>
                  <linearGradient id="lineGradientBlueAI" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="50%" stopColor="rgba(37, 99, 235, 0.8)" />
                    <stop offset="100%" stopColor="rgba(96, 165, 250, 0.4)" />
                  </linearGradient>
                </defs>
                {/* Connecting lines */}
                <line x1="50" y1="80" x2="150" y2="120" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                <line x1="150" y1="120" x2="250" y2="100" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                <line x1="100" y1="200" x2="200" y2="180" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="180" x2="300" y2="220" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                <line x1="80" y1="250" x2="180" y2="280" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                <line x1="220" y1="150" x2="320" y2="200" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                <line x1="120" y1="300" x2="250" y2="320" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                {/* Network nodes (dots) */}
                <circle cx="50" cy="80" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="150" cy="120" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="250" cy="100" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="100" cy="200" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="200" cy="180" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="300" cy="220" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="80" cy="250" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="180" cy="280" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="220" cy="150" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="320" cy="200" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="120" cy="300" r="3" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="250" cy="320" r="3" fill="rgba(255, 255, 255, 0.9)" />
              </svg>
              {/* Additional glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10"></div>
            </div>
          </div>

          {/* Right Side - Blue Box */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group-hover:from-blue-800 group-hover:via-blue-700 group-hover:to-blue-800 transition-all duration-500">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
            </div>
            
            {/* Top Text */}
            <div className="relative z-10">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-white/80 mb-4 md:mb-6 font-medium"
              >
                — NeuroVerse Research Institute
              </motion.p>
              
              {/* Title */}
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight group-hover:text-blue-100 transition-colors duration-300"
              >
                Data Analytics & AI innovation research
              </motion.h3>
            </div>

            {/* Bottom Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wider relative z-10"
            >
              NEUROVERSE RESEARCH INSTITUTE
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * DETAILED CODE BREAKDOWN:
 * 
 * 1. SECTION STRUCTURE:
 *    - Main container: <section> with white background and padding
 *    - Inner container: max-width wrapper for responsive design
 *    - Content card: Grid layout (1 column on mobile, 2 columns on desktop)
 * 
 * 2. LEFT SIDE - IMAGE WITH AI NETWORK OVERLAY:
 *    - Base image: cloudDataCenter image with reduced opacity (40%)
 *    - SVG overlay: Network diagram with blue gradient lines and white nodes
 *    - Hover effect: Image scales to 105% and opacity increases to 50%
 *    - Glow effect: Blue gradient overlay for additional visual depth
 * 
 * 3. RIGHT SIDE - BLUE TEXT BOX:
 *    - Background: Blue gradient (from-blue-900 via-blue-800 to-blue-900)
 *    - Animated patterns: Blurred circular gradients that scale on hover
 *    - Text content:
 *      - Top: "— NeuroVerse Research Institute" (smaller, white/80 opacity)
 *      - Middle: "Data Analytics & AI innovation research" (large, bold heading)
 *      - Bottom: "NEUROVERSE RESEARCH INSTITUTE" (uppercase, smaller)
 *    - Hover effects: Background gradient shifts, text color changes
 * 
 * 4. ANIMATIONS:
 *    - Framer Motion animations for fade-in and slide effects
 *    - Staggered delays for text elements (0.2s, 0.3s, 0.4s)
 *    - Smooth transitions on hover for all interactive elements
 * 
 * 5. RESPONSIVE DESIGN:
 *    - Mobile: Single column layout, smaller text sizes
 *    - Tablet (md): Two columns, medium text sizes
 *    - Desktop (lg): Larger text and spacing
 * 
 * 6. STYLING DETAILS:
 *    - Rounded corners: rounded-xl
 *    - Shadow: shadow-2xl with enhanced hover shadow
 *    - Transitions: 500ms duration for smooth effects
 *    - Z-index layering: Proper stacking for overlays
 */
