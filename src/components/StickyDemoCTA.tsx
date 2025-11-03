import { Button } from "@/components/ui/button";
import { Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function StickyDemoCTA() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button when user scrolls down more than 300px
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      // Use Lenis smooth scroll to top with slower, more gradual animation
      lenis.scrollTo(0, {
        duration: 2.5, // Increased from 1.5 to 2.5 for slower scroll
        easing: (t: number) => {
          // More gradual easing for smoother, slower scroll
          return t * (2 - t); // Ease-in-out cubic for smoother motion
        },
        offset: 0,
      });
    } else {
      // Fallback to custom smooth scroll with slower animation
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const startTime = performance.now();
      const duration = 2500; // 2.5 seconds for slower scroll

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition * (1 - easedProgress));

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end sticky-cta-5k">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white h-14 w-14"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request Callback Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={() => navigate("/contact")}
          size="lg"
          className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white h-14 px-6"
        >
          <Phone className="mr-2 h-5 w-5" />
          Request Callback
        </Button>
      </motion.div>
    </div>
  );
}
