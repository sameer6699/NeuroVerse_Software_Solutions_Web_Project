import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Global Layout Component
 * 
 * This component wraps all routes and provides consistent Navbar and Footer
 * across all pages in the application.
 * 
 * The Outlet component from react-router renders the matched route component.
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Navbar - appears on all pages */}
      <Navbar />
      
      {/* Main content area - renders the current route */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Global Footer - appears on all pages */}
      <Footer />
    </div>
  );
}

