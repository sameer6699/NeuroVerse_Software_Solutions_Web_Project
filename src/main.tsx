import { Toaster } from "@/components/ui/sonner";
import { AppToolbar } from "../app-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import AuthPage from "@/pages/Auth.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Insights from "./pages/Insights.tsx";
import Industries from "./pages/Industries.tsx";
import Healthcare from "./pages/Healthcare.tsx";
import Finance from "./pages/Finance.tsx";
import RetailEcommerce from "./pages/RetailEcommerce.tsx";
import Manufacturing from "./pages/Manufacturing.tsx";
import Technology from "./pages/Technology.tsx";
import Services from "./pages/Services.tsx";
import CloudServicesInfrastructure from "./pages/CloudServicesInfrastructure.tsx";
import CustomerExperienceEngagement from "./pages/CustomerExperienceEngagement.tsx";
import Careers from "./pages/Careers.tsx";
import News from "./pages/News.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./types/global.d.ts";
import { LenisScroll } from "@/components/LenisScroll";
import Layout from "@/components/Layout";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <LenisScroll>
          <BrowserRouter>
            <RouteSyncer />
            <Routes>
              {/* Layout route - wraps all pages with Navbar and Footer */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/why-neuroverse" element={<Home />} />
                <Route path="/products" element={<Home />} />
                <Route path="/solutions" element={<Home />} />
                <Route path="/case-studies" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/capabilities" element={<Home />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/healthcare" element={<Healthcare />} />
                <Route path="/industries/finance" element={<Finance />} />
                <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
                <Route path="/industries/manufacturing" element={<Manufacturing />} />
                <Route path="/industries/technology" element={<Technology />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/cloud-services-infrastructure" element={<CloudServicesInfrastructure />} />
                <Route path="/services/customer-experience-engagement" element={<CustomerExperienceEngagement />} />
                <Route path="/blog" element={<Home />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              {/* Auth route - can be outside layout if needed, or keep it inside for consistency */}
              <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />}/>
            </Routes>
          </BrowserRouter>
        </LenisScroll>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);