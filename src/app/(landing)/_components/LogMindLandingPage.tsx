"use client";

import { useState, useRef, useEffect } from "react";
import { TracingBeam } from "../../../components/TracingBeam";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SearchResults from "./SearchResults";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import DeveloperAPI from "./DeveloperAPI";
import Footer from "./Footer";
import BackgroundElements from "./BackgroundElements";

export default function LogMindLandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeSection, setActiveSection] = useState("search");
  const [showResults, setShowResults] = useState(false);
  const [selectedLog, setSelectedLog] = useState<string | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);
  const searchSectionRef = useRef<HTMLElement>(null);
  const howSectionRef = useRef<HTMLElement>(null);
  const pricingSectionRef = useRef<HTMLElement>(null);
  const businessSectionRef = useRef<HTMLElement>(null);

  // Handle search submission
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
      // Scroll to results after a small delay to allow for animation
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Handle escape key to close search results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowResults(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to section when menu item is clicked
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    const sectionMap = {
      search: searchSectionRef,
      how: howSectionRef,
      pricing: pricingSectionRef,
      business: businessSectionRef,
    };

    const sectionRef = sectionMap[sectionId as keyof typeof sectionMap];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll events for active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = [
        { id: "search", ref: searchSectionRef },
        { id: "how", ref: howSectionRef },
        { id: "pricing", ref: pricingSectionRef },
        { id: "business", ref: businessSectionRef },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background elements */}
      <BackgroundElements />

      {/* Main content */}
      <div className="relative z-10 container ">
        {/* Header */}
        <Header 
          activeSection={activeSection} 
          onSectionClick={scrollToSection} 
        />

        {/* Main content area with TracingBeam */}
        <TracingBeam className="pt-24 pb-16">
          {/* Hero section with search */}
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchFocused={searchFocused}
            setSearchFocused={setSearchFocused}
            onSearch={handleSearch}
            sectionRef={searchSectionRef as React.RefObject<HTMLElement>}
          />

          {/* Search results */}
          {/* <SearchResults
            showResults={showResults}
            searchQuery={searchQuery}
            selectedLog={selectedLog}
            setSelectedLog={setSelectedLog}
            onClose={() => setShowResults(false)}
            resultsRef={resultsRef as React.RefObject<HTMLDivElement>}
          /> */}

          {/* How it works section */}
          <HowItWorks 
            sectionRef={howSectionRef as React.RefObject<HTMLElement>}
            onSectionClick={scrollToSection}
          />

          {/* Pricing section */}
          <Pricing sectionRef={pricingSectionRef as React.RefObject<HTMLElement>} />

          {/* Developer API section */}
          <DeveloperAPI sectionRef={businessSectionRef as React.RefObject<HTMLElement>} />
        </TracingBeam>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
