import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, ArrowRight, Loader2, Shield, ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { images } from "@/assets";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

interface AuthProps {
  redirectAfterAuth?: string;
}

/**
 * Internal Login Page for NeuroVerse CRM Portal
 * 
 * Two-column layout with:
 * - Left: Employee ID, Password, and Captcha login form
 * - Right: Company tagline about internal CRM portal
 */
export default function Auth({ redirectAfterAuth = "/" }: AuthProps) {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  // Get reCAPTCHA site key from environment variable
  // REQUIRED: Set VITE_RECAPTCHA_SITE_KEY in your .env.local file
  // Get your site key from: https://www.google.com/recaptcha/admin
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  
  // Validate that reCAPTCHA site key is configured
  if (!RECAPTCHA_SITE_KEY) {
    console.error("reCAPTCHA Site Key is missing! Please set VITE_RECAPTCHA_SITE_KEY in your .env.local file");
  }

  // reCAPTCHA verification handler
  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  // Handle reCAPTCHA expiration
  const handleRecaptchaExpired = () => {
    setIsCaptchaValid(false);
    toast.error("reCAPTCHA expired. Please verify again.");
  };

  // Reset reCAPTCHA
  const resetRecaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setIsCaptchaValid(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!employeeId || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate reCAPTCHA configuration
    if (!RECAPTCHA_SITE_KEY) {
      toast.error("reCAPTCHA is not configured. Please contact the administrator.");
      return;
    }

    // Validate reCAPTCHA
    if (!isCaptchaValid) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful! Redirecting to CRM portal...");
      // Navigate to dashboard or home after successful login
      setTimeout(() => {
        navigate(redirectAfterAuth);
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Back Button and Logo - Top Left Corner */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 z-20 flex items-center gap-2 sm:gap-3">
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg group"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all duration-300" />
        </button>
        
        {/* Logo */}
        <img
          src={images.logos.navbar}
          alt="NeuroVerse Logo"
          className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
        />
      </div>

      {/* Left Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-3 sm:space-y-3.5"
        >
          {/* Header */}
          <div className="space-y-1 pt-12 sm:pt-8 md:pt-10">
            <div>
              <h1 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-0.5">
                Employee Login
              </h1>
              <p className="text-xs text-gray-600">
                Access your NeuroVerse employee portal account
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-3">
            {/* Employee ID Field */}
            <div className="space-y-1">
              <Label htmlFor="employeeId" className="text-xs font-medium text-gray-700">
                Employee ID
              </Label>
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                  id="employeeId"
                  type="text"
                  placeholder="Enter your Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="password" className="text-xs font-medium text-gray-700">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors whitespace-nowrap"
                  onClick={() => toast.info("Password reset feature coming soon")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* reCAPTCHA Field */}
            <div className="space-y-1">
              <Label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                <Shield className="h-3 w-3 text-gray-500" />
                Security Verification
              </Label>
              {!RECAPTCHA_SITE_KEY ? (
                <div className="p-2 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-xs text-red-800 font-medium mb-0.5">
                    reCAPTCHA Configuration Error
                  </p>
                  <p className="text-xs text-red-600">
                    Please configure VITE_RECAPTCHA_SITE_KEY in your .env.local file.
                    Get your site key from{" "}
                    <a
                      href="https://www.google.com/recaptcha/admin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-red-800"
                    >
                      Google reCAPTCHA Admin Console
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-start overflow-x-auto -mx-1">
                    <div className="transform origin-left scale-[0.7] sm:scale-75 md:scale-[0.82]">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        theme="light"
                      />
                    </div>
                  </div>
                  {!isCaptchaValid && (
                    <p className="text-xs text-gray-500">
                      Please verify that you're not a robot
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In to Employee Portal
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </>
              )}
            </Button>
          </form>

          {/* Security Notice */}
          <div className="pt-1 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              This is a secure portal for NeuroVerse employees only. Unauthorized access is prohibited.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Branding and Tagline */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex flex-col justify-center items-start p-8 lg:p-10 xl:p-16 h-full w-full"
        >
          <div className="space-y-5 lg:space-y-6 w-full max-w-xl">
            {/* Main Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-white leading-tight mb-3">
                NeuroVerse Employee Portal
              </h2>
              <div className="h-1 w-16 lg:w-20 bg-blue-400 rounded-full"></div>
            </motion.div>

            {/* Sub Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-base lg:text-lg xl:text-xl text-blue-100 leading-relaxed font-semibold">
                Your Gateway to Internal Excellence
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2.5 lg:space-y-3 pt-2 lg:pt-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                  Streamlined project management and collaboration
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                  Real-time access to company resources and tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                  Secure and centralized employee workspace
                </p>
              </div>
            </motion.div>

            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-4 lg:pt-5 flex items-center gap-2"
            >
              <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-blue-300 flex-shrink-0" />
              <span className="text-xs text-blue-200 font-medium">
                Secure • Encrypted • Internal Use Only
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
