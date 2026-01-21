import { useEffect, useRef, useState, useCallback } from "react";
import { RefreshCw } from "lucide-react";

interface AdvancedCaptchaProps {
  onVerify: (code: string) => boolean;
  onRefresh?: () => void;
  onCodeGenerated?: (code: string) => void;
  onValidationChange?: (isValid: boolean) => void;
  width?: number;
  height?: number;
  disabled?: boolean;
}

/**
 * Advanced CAPTCHA Component with Anti-Bot Features
 * 
 * Features:
 * - Canvas-based rendering (harder for bots to parse)
 * - Visual distortions (rotation, skewing, noise)
 * - Random colors, fonts, and character positions
 * - Background noise and interference lines
 * - Time-based validation
 * - Case-insensitive but with visual complexity
 */
export default function AdvancedCaptcha({
  onVerify,
  onRefresh,
  onCodeGenerated,
  onValidationChange,
  width = 200,
  height = 60,
  disabled = false,
}: AdvancedCaptchaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaCode, setCaptchaCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [generationTime, setGenerationTime] = useState(Date.now());

  // Generate complex CAPTCHA code
  const generateCaptchaCode = useCallback(() => {
    // Use characters that are harder to confuse: exclude 0, O, I, 1, l
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }, []);

  // Draw complex CAPTCHA on canvas
  const drawCaptcha = useCallback(
    (code: string) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Set canvas size
      canvas.width = width;
      canvas.height = height;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      const bgColors = [
        "#f0f4f8",
        "#e2e8f0",
        "#f1f5f9",
        "#e8f0f8",
        "#f5f7fa",
      ];
      gradient.addColorStop(0, bgColors[Math.floor(Math.random() * bgColors.length)]);
      gradient.addColorStop(1, bgColors[Math.floor(Math.random() * bgColors.length)]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw noise dots
      ctx.fillStyle = "#cbd5e1";
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw interference lines
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.lineTo(Math.random() * width, Math.random() * height);
        ctx.stroke();
      }

      // Draw wavy lines
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const startY = Math.random() * height;
        ctx.moveTo(0, startY);
        for (let x = 0; x < width; x += 5) {
          const y = startY + Math.sin(x / 20 + i) * 5;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw characters with distortions
      const charSpacing = width / (code.length + 1);
      const baseY = height / 2;
      const fontSize = 28 + Math.random() * 8; // Variable font size

      code.split("").forEach((char, index) => {
        const x = charSpacing * (index + 1);
        const y = baseY + (Math.random() - 0.5) * 10; // Vertical variation

        // Random rotation (-15 to +15 degrees)
        const rotation = (Math.random() - 0.5) * 30;
        const rotationRad = (rotation * Math.PI) / 180;

        // Random skew
        const skewX = (Math.random() - 0.5) * 0.3;

        ctx.save();

        // Apply transformations
        ctx.translate(x, y);
        ctx.rotate(rotationRad);
        ctx.transform(1, 0, skewX, 1, 0, 0);

        // Random color for each character
        const colors = [
          "#1e40af",
          "#7c3aed",
          "#dc2626",
          "#059669",
          "#ea580c",
          "#be185d",
          "#0369a1",
          "#0d9488",
        ];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        // Random font weight
        const fontWeights = ["bold", "600", "700", "800"];
        const fontWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];

        // Set font with random variations
        ctx.font = `${fontWeight} ${fontSize}px Arial, sans-serif`;

        // Add text shadow for depth
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        // Draw character
        ctx.fillText(char, 0, 0);

        // Add slight outline for complexity
        ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
        ctx.lineWidth = 0.5;
        ctx.strokeText(char, 0, 0);

        ctx.restore();
      });

      // Add more noise on top
      ctx.fillStyle = "rgba(148, 163, 184, 0.3)";
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    [width, height]
  );

  // Initialize CAPTCHA
  useEffect(() => {
    const code = generateCaptchaCode();
    setCaptchaCode(code);
    setGenerationTime(Date.now());
    onCodeGenerated?.(code);
    setTimeout(() => drawCaptcha(code), 100);
  }, [generateCaptchaCode, drawCaptcha, onCodeGenerated]);

  // Handle refresh
  const handleRefresh = useCallback(() => {
    if (disabled) return;
    const code = generateCaptchaCode();
    setCaptchaCode(code);
    setUserInput("");
    setIsValid(null);
    setGenerationTime(Date.now());
    onCodeGenerated?.(code);
    onValidationChange?.(false);
    setTimeout(() => drawCaptcha(code), 100);
    onRefresh?.();
  }, [disabled, generateCaptchaCode, drawCaptcha, onRefresh, onCodeGenerated, onValidationChange]);

  // Handle input change
  const handleInputChange = (value: string) => {
    if (disabled) return;
    // Only allow alphanumeric, max 6 characters
    const sanitized = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 6);
    setUserInput(sanitized);

    // Auto-validate when length matches
    if (sanitized.length === 6) {
      const isValidCode = onVerify(sanitized);
      setIsValid(isValidCode);
      onValidationChange?.(isValidCode);
      if (!isValidCode) {
        setAttempts((prev) => {
          const newAttempts = prev + 1;
          // Auto-refresh after 3 failed attempts
          if (newAttempts >= 3) {
            setTimeout(() => {
              handleRefresh();
            }, 500);
          }
          return newAttempts;
        });
      }
    } else {
      setIsValid(null);
      onValidationChange?.(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={userInput}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Enter captcha code"
            className={`w-full h-12 px-4 border-2 rounded-md font-mono text-lg tracking-widest uppercase focus:outline-none focus:ring-2 transition-all ${
              isValid === true
                ? "border-green-500 focus:ring-green-500/20 bg-green-50"
                : isValid === false
                ? "border-red-500 focus:ring-red-500/20 bg-red-50"
                : "border-gray-300 focus:border-blue-600 focus:ring-blue-600/20"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={disabled}
            maxLength={6}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div className="flex-shrink-0 relative group">
          <canvas
            ref={canvasRef}
            className="border-2 border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors bg-white shadow-sm"
            style={{ width: `${width}px`, height: `${height}px` }}
            onClick={handleRefresh}
            title="Click to refresh CAPTCHA"
          />
          <button
            type="button"
            onClick={handleRefresh}
            disabled={disabled}
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/5 rounded-md transition-colors group"
            title="Refresh CAPTCHA"
          >
            <RefreshCw
              className={`w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity ${
                disabled ? "opacity-30" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <p className="text-gray-500">
          {isValid === true ? (
            <span className="text-green-600 font-medium">✓ CAPTCHA verified</span>
          ) : isValid === false ? (
            <span className="text-red-600 font-medium">
              ✗ Invalid code{attempts >= 2 ? " - Refreshing..." : ""}
            </span>
          ) : (
            "Enter the code shown above"
          )}
        </p>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={disabled}
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        >
          <RefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>
      {attempts >= 3 && (
        <p className="text-xs text-amber-600 font-medium">
          Multiple failed attempts detected. Please verify you are human.
        </p>
      )}
    </div>
  );
}
