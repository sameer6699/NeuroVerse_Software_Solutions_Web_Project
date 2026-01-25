import { Toaster } from "@/components/ui/sonner";
import { AppToolbar } from "../app-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import AuthPage from "@/pages/Auth.tsx";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import Home from "./pages/Home.tsx";
import Insights from "./pages/Insights.tsx";
import HotTopic from "./pages/HotTopic.tsx";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment.tsx";
import ResearchLibrary from "./pages/ResearchLibrary.tsx";
import Industries from "./pages/Industries.tsx";
import Healthcare from "./pages/Healthcare.tsx";
import Finance from "./pages/Finance.tsx";
import RetailEcommerce from "./pages/RetailEcommerce.tsx";
import Manufacturing from "./pages/Manufacturing.tsx";
import Technology from "./pages/Technology.tsx";
import Services from "./pages/Services.tsx";
import Products from "./pages/Products.tsx";
import SeedLink from "./pages/SeedLink.tsx";
import WelthWise from "./pages/WelthWise.tsx";
import CloudServicesInfrastructure from "./pages/CloudServicesInfrastructure.tsx";
import CustomerExperienceEngagement from "./pages/CustomerExperienceEngagement.tsx";
import CybersecurityRiskManagement from "./pages/CybersecurityRiskManagement.tsx";
import DataAnalyticsAISolutions from "./pages/DataAnalyticsAISolutions.tsx";
import EnterpriseResourcePlanning from "./pages/EnterpriseResourcePlanning.tsx";
import SmartManufacturingIndustry4 from "./pages/SmartManufacturingIndustry4.tsx";
import SoftwareDevelopmentEngineering from "./pages/SoftwareDevelopmentEngineering.tsx";
import Careers from "./pages/Careers.tsx";
import WhyJoinNeuroVerse from "./pages/WhyJoinNeuroVerse.tsx";
import LifeAtNeuroVerse from "./pages/LifeAtNeuroVerse.tsx";
import CareerPath from "./pages/CareerPath.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import News from "./pages/News.tsx";
import About from "./pages/About.tsx";
import OurStory from "./pages/OurStory.tsx";
import CompanyValues from "./pages/CompanyValues.tsx";
import OurCulture from "./pages/OurCulture.tsx";
import ManagementGovernance from "./pages/ManagementGovernance.tsx";
import PartnersAndAlliances from "./pages/PartnersAndAlliances.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./types/global.d.ts";
import { LenisScroll } from "@/components/LenisScroll";
import Layout from "@/components/Layout";

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
      <LenisScroll>
        <BrowserRouter>
          <RouteSyncer />
          <Routes>
            {/* Layout route - wraps all pages with Navbar and Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/why-neuroverse" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/SeedLink" element={<SeedLink />} />
              <Route path="/products/WelthWise" element={<WelthWise />} />
              <Route path="/solutions" element={<Home />} />
              <Route path="/case-studies" element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/WhyJoinNeuroVerse" element={<WhyJoinNeuroVerse />} />
              <Route path="/careers/lifeAtNeuroVerse" element={<LifeAtNeuroVerse />} />
              <Route path="/careers/career-path" element={<CareerPath />} />
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
              <Route path="/services/CyberSecurity-and-risk-management" element={<CybersecurityRiskManagement />} />
              <Route path="/services/data-analytics-ai-solutions" element={<DataAnalyticsAISolutions />} />
              <Route path="/services/enterprise-resource-planning" element={<EnterpriseResourcePlanning />} />
              <Route path="/services/smart-manufacturing-industry-4" element={<SmartManufacturingIndustry4 />} />
              <Route path="/services/software-development-engineering" element={<SoftwareDevelopmentEngineering />} />
              <Route path="/blog" element={<Home />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/hot-topic" element={<HotTopic />} />
              <Route path="/insights/research-and-development" element={<ResearchAndDevelopment />} />
              <Route path="/insights/research-library" element={<ResearchLibrary />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/our-story" element={<OurStory />} />
              <Route path="/about/company-value" element={<CompanyValues />} />
              <Route path="/about/our-culture" element={<OurCulture />} />
              <Route path="/about/management-governance" element={<ManagementGovernance />} />
              <Route path="/about/partner-and-alliance" element={<PartnersAndAlliances />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Auth routes - outside layout for cleaner login experience */}
            <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} />
            <Route path="/careers/login" element={<Login />} />
            <Route path="/careers/signup" element={<SignUp />} />
            <Route path="/careers/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </LenisScroll>
      <Toaster />
    </InstrumentationProvider>
  </StrictMode>,
);