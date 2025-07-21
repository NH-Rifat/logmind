"use client";

import { useRef } from "react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";
import AnimeSphereAnimation from "../../../components/AnimeSphereAnimation";
import AnimatedPlaceholder from "./AnimatedPlaceholder";
import { popularSearches, placeholderTexts } from "../utils/data";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchFocused: boolean;
  setSearchFocused: (focused: boolean) => void;
  onSearch: (e?: React.FormEvent) => void;
  sectionRef: React.RefObject<HTMLElement>;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  searchFocused,
  setSearchFocused,
  onSearch,
  sectionRef,
}: HeroSectionProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = (searchTerm: string) => {
    setSearchQuery(searchTerm);
    onSearch();
  };

  return (
    <section
      ref={sectionRef}
      id="search"
      className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative"
    >
      <div className="absolute inset-0 -z-10">
        <AnimeSphereAnimation />
      </div>
      
      <div
        className={cn(
          "max-w-4xl w-full transition-all duration-500 ease-out",
          searchFocused ? "scale-105" : "scale-100"
        )}
      >
        <h1
          className={cn(
            "text-5xl md:text-7xl font-bold mb-6 text-center transition-all duration-500",
            searchFocused
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          )}
        >
          Search Logs Faster Analyze Smarter
        </h1>

        <p
          className={cn(
            "text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto transition-all duration-500",
            searchFocused
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          )}
        >
          Centralize, search, and analyze your application logs with AI-powered insights and real-time monitoring
        </p>

        <form
          onSubmit={onSearch}
          className={cn(
            "relative transition-all duration-500",
            searchFocused ? "scale-110" : "scale-100"
          )}
        >
          <div className="relative group">
            <div
              className={cn(
                "absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 to-blue-500/0 rounded-full opacity-0 transition-all duration-300",
                searchFocused
                  ? "from-blue-500/20 to-blue-500/20 opacity-100 blur-sm"
                  : ""
              )}
            ></div>

            <div className="relative">
              <Input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder={
                  searchFocused ? "" : "Search logs, errors, or system events"
                }
                className="h-16 pl-16 pr-32 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder:text-white/50 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              />

              {searchFocused && searchQuery === "" && (
                <div className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none">
                  <AnimatedPlaceholder texts={placeholderTexts} />
                </div>
              )}

              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />

              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  AI
                </span>
                <div className="text-sm text-white/50 border-r border-white/10 pr-4 pl-2">
                  API
                </div>
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {searchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 z-10">
              <div className="text-sm text-white/50 mb-3 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                <span>Popular searches</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {popularSearches.slice(0, 4).map((search, index) => (
                  <button
                    key={index}
                    type="button"
                    className="text-left p-2 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2 group"
                    onClick={() => handleSearchClick(search.name)}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                    <span>{search.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </form>

        <div
          className={cn(
            "flex flex-wrap justify-center gap-4 mt-8 transition-all duration-500",
            searchFocused
              ? "opacity-0 translate-y-10"
              : "opacity-100 translate-y-0"
          )}
        >
          {popularSearches.map((search, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors"
              onClick={() => handleSearchClick(search.name)}
            >
              {search.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        className={cn(
          " pt-5 flex justify-center gap-3 smd:gap-16 transition-all duration-500",
          searchFocused
            ? "opacity-0 translate-y-10"
            : "opacity-100 translate-y-0"
        )}
      >
        <div className="text-center">
          <div className="text-3xl font-bold">10M+</div>
          <div className="text-white/50 text-sm">Logs Processed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">99.9%</div>
          <div className="text-white/50 text-sm">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">&lt;100ms</div>
          <div className="text-white/50 text-sm">Search Speed</div>
        </div>
      </div>
    </section>
  );
}
