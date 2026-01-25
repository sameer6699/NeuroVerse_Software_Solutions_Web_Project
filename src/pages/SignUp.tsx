import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock, ArrowRight, Loader2, ArrowLeft, Hash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { images } from "@/assets";
import { toast } from "sonner";

/**
 * Sign Up Page Component for NeuroVerse Careers
 * 
 * Beautiful two-column sign up page with:
 * - Left: Registration form with first name, last name, email, OTP, and password
 * - Right: Inspirational tagline and branding
 */
export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  // Send OTP to email
  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSendingOtp(true);
    
    // Simulate OTP sending process
    setTimeout(() => {
      setIsSendingOtp(false);
      setIsOtpSent(true);
      toast.success("OTP sent to your email! Please check your inbox.");
    }, 1500);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!firstName || !lastName || !email || !otp || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Validate password strength
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // Validate OTP
    if (!isOtpSent) {
      toast.error("Please verify your email with OTP first");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully! Redirecting to login...");
      // Navigate to login page after successful registration
      setTimeout(() => {
        navigate("/careers/login");
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Logo and Back Button - Top Left Corner */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 z-20 flex items-center gap-2 sm:gap-3">
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate("/careers/login")}
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

      {/* Left Column - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-3 sm:space-y-3.5 my-4"
        >
          {/* Header */}
          <div className="space-y-1 pt-12 sm:pt-8 md:pt-10">
            <div>
              <h1 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-0.5">
                Create Your Account
              </h1>
              <p className="text-xs text-gray-600">
                Join NeuroVerse and start building your career profile today
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSignUp} className="space-y-3">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-2 gap-3">
              {/* First Name Field */}
              <div className="space-y-1">
                <Label htmlFor="firstName" className="text-xs font-medium text-gray-700">
                  First Name
                </Label>
                <div className="relative">
                  <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Last Name Field */}
              <div className="space-y-1">
                <Label htmlFor="lastName" className="text-xs font-medium text-gray-700">
                  Last Name
                </Label>
                <div className="relative">
                  <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-medium text-gray-700">
                Email Address
              </Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    required
                    disabled={isLoading || isOtpSent}
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSendOtp}
                  disabled={isSendingOtp || isOtpSent || isLoading}
                  className="h-9 px-3 text-xs font-semibold whitespace-nowrap border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all"
                >
                  {isSendingOtp ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : isOtpSent ? (
                    "Sent ?"
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              </div>
            </div>

            {/* OTP Field */}
            <div className="space-y-1">
              <Label htmlFor="otp" className="text-xs font-medium text-gray-700">
                OTP Code
              </Label>
              <div className="relative">
                <Hash className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  required
                  disabled={isLoading || !isOtpSent}
                />
              </div>
              {!isOtpSent && (
                <p className="text-xs text-gray-500">
                  Click "Send OTP" to receive verification code
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <Label htmlFor="password" className="text-xs font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-xs font-medium text-gray-700">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-8 h-9 text-sm border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </>
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center pt-1">
            <p className="text-xs text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                onClick={() => navigate("/careers/login")}
              >
                Sign in here
              </button>
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
                Start your journey with us
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
              <p className="text-base lg:text-lg xl:text-xl text-blue-100 leading-relaxed">
                Join thousands of professionals building their careers at NeuroVerse
              </p>
              <p className="text-sm lg:text-base text-blue-200 leading-relaxed">
                Create your profile in minutes and unlock access to exclusive opportunities, connect with industry leaders, and take the next step in your professional journey.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2.5 lg:space-y-3 pt-2 lg:pt-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                  Build a comprehensive professional profile
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                  Get matched with your dream opportunities
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                  Join a community of innovators and leaders
                </p>
              </div>
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
