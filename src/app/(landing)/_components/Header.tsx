"use client";

import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { navigationLinks } from "../utils/data";
import AnimatedLogo from "./AnimatedLogo";

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onSectionClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Left Side */}
        <div className="flex-shrink-0">
          <AnimatedLogo size="md" onClick={() => onSectionClick("search")} />
        </div>

        {/* Navigation Menu - Center */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 p-1">
            {navigationLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "text-white/70 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300 text-sm font-medium",
                  activeSection === link.id && "text-white bg-white/15 shadow-sm"
                )}
                onClick={() => onSectionClick(link.id)}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* Get Started Button - Right Side */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white/70 hover:text-white hover:bg-white/10 rounded-full"
            onClick={() => {/* Add mobile menu toggle logic */}}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          {/* Get Started Button */}
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2 rounded-full border border-blue-500/20 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            onClick={() => onSectionClick("pricing")}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default */}
      <div className="md:hidden hidden bg-black/90 backdrop-blur-md border-t border-white/5">
        <div className="container mx-auto px-6 py-4 space-y-2">
          {navigationLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white/70 hover:text-white hover:bg-white/10 rounded-lg",
                activeSection === link.id && "text-white bg-white/15"
              )}
              onClick={() => onSectionClick(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
