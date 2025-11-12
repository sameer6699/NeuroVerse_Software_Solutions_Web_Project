import { useEffect } from "react";
import Lenis from "lenis";

export function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Expose lenis instance globally for programmatic scrolling
    (window as any).lenis = lenis;

    let rafId: number | undefined;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Function to scroll to hash element
    const scrollToHash = (hash: string) => {
      if (hash) {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          setTimeout(() => {
            lenis.scrollTo(element, {
              offset: -80,
              duration: 1.5,
            });
          }, 150);
        }
      }
    };

    // Handle anchor link clicks for smooth scrolling (backward compatibility)
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          scrollToHash(href);
        }
      }
    }

    // Handle hash changes on page load (backward compatibility)
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    // Handle hash changes from navigation (backward compatibility)
    function handleHashChange() {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
      }
    }

    // Listen for hash changes (backward compatibility)
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}

