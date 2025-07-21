"use client";

import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { navigationLinks } from "../utils/data";

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onSectionClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg tracking-tight">LogMind</span>

        <div className="flex items-center gap-4">
          {navigationLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className={cn(
                "text-white/70 hover:text-white hover:bg-white/5 rounded-full",
                activeSection === link.id && "text-white bg-white/5"
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
