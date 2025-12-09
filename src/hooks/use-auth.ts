import { useEffect, useState } from "react";

// Simple frontend-only auth hook
// In a real application, you would integrate with your backend authentication service
export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id: string; email?: string; name?: string } | null>(null);

  useEffect(() => {
    // Check if user is authenticated (e.g., from localStorage)
    const authToken = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");
    
    if (authToken && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
    
    setIsLoading(false);
  }, []);

  const signIn = async (provider: string, formData?: FormData) => {
    // Frontend-only mock sign in
    // In a real application, this would call your backend API
    setIsLoading(true);
    
    try {
      if (provider === "anonymous") {
        const guestUser = { id: `guest-${Date.now()}`, name: "Guest" };
        localStorage.setItem("authToken", "guest-token");
        localStorage.setItem("userData", JSON.stringify(guestUser));
        setUser(guestUser);
        setIsAuthenticated(true);
      } else if (provider === "email-otp" && formData) {
        const email = formData.get("email") as string;
        const code = formData.get("code") as string;
        
        // Mock OTP verification - in production, this would verify with backend
        if (code && code.length === 6) {
          const userData = { id: `user-${Date.now()}`, email, name: email.split("@")[0] };
          localStorage.setItem("authToken", "mock-token");
          localStorage.setItem("userData", JSON.stringify(userData));
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          throw new Error("Invalid verification code");
        }
      }
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isLoading,
    isAuthenticated,
    user,
    signIn,
    signOut,
  };
}
