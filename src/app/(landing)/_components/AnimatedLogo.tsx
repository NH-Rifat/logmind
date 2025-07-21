"use client";

import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

interface AnimatedLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function AnimatedLogo({ className, size = "md", onClick }: AnimatedLogoProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("flex items-center gap-3 group cursor-pointer", className)} onClick={onClick}>
      {/* Animated Logo Icon */}
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer Ring */}
        <div className={cn(
          "absolute inset-0 rounded-full border-2 border-blue-500/30",
          isAnimating && "animate-pulse"
        )}>
          <div className={cn(
            "absolute inset-1 rounded-full border border-blue-400/50",
            isAnimating && "animate-spin"
          )}>
            {/* Inner Core */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg">
              {/* Pulsing Center */}
              <div className={cn(
                "absolute inset-1 rounded-full bg-white/20 backdrop-blur-sm",
                isAnimating ? "animate-ping" : "group-hover:animate-pulse"
              )}></div>
              
              {/* Search Icon in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "text-white transition-transform duration-300",
                    size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-6 h-6",
                    "group-hover:scale-110"
                  )}
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute -inset-4 opacity-100 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 bg-blue-400 rounded-full",
                "animate-ping"
              )}
              style={{
                left: `${20 + i * 10}%`,
                top: `${15 + (i % 2) * 70}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s"
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Animated Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={cn(
            "font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent transition-all duration-300",
            size === "sm" ? "text-base" : size === "md" ? "text-lg" : "text-2xl",
            "group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200"
          )}>
            Log
          </span>
          <span className={cn(
            "font-bold tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent transition-all duration-300",
            size === "sm" ? "text-base" : size === "md" ? "text-lg" : "text-2xl",
            "group-hover:from-blue-300 group-hover:via-blue-100 group-hover:to-blue-400"
          )}>
            Mind
          </span>
        </div>
        
        {/* Subtitle for larger sizes */}
        {size === "lg" && (
          <span className="text-xs text-blue-400/70 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Search • Analyze
          </span>
        )}
      </div>

      {/* Glowing Effect */}
      <div className={cn(
        "absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm",
        isAnimating && "opacity-100 animate-pulse"
      )}></div>
    </div>
  );
}
