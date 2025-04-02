
import React, { useState, useEffect, RefObject } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  vanCreatieRef?: RefObject<HTMLDivElement>;
  impactRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
}

const Navigation: React.FC<NavigationProps> = ({
  vanCreatieRef,
  impactRef,
  contactRef
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Handle scroll effect for the navigation bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      if (contactRef && contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection("lets-talk");
      } else if (impactRef && impactRef.current && scrollPosition >= impactRef.current.offsetTop) {
        setActiveSection("impact-door-innovatie");
      } else if (vanCreatieRef && vanCreatieRef.current && scrollPosition >= vanCreatieRef.current.offsetTop) {
        setActiveSection("van-creatie-tot-beleving");
      } else {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contactRef, impactRef, vanCreatieRef]);

  const scrollToSection = (ref: RefObject<HTMLDivElement> | undefined) => {
    if (ref && ref.current) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      
      if (ref === contactRef) {
        // For contact section, position it right below the navbar
        window.scrollTo({
          top: ref.current.offsetTop - navbarHeight,
          behavior: "smooth"
        });
      } else {
        // For other sections, use a consistent offset
        window.scrollTo({
          top: ref.current.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8", scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5")}>
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <div className="flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection(vanCreatieRef)} 
            className={cn(
              "navigation-link animate-fade-in text-xs", 
              activeSection === "van-creatie-tot-beleving" && "active"
            )} 
            style={{
              animationDelay: "100ms"
            }}
          >
            VAN CREATIE TOT BELEVING
          </button>
          
          <span className="text-innovisual-muted">|</span>
          
          <button 
            onClick={() => scrollToSection(impactRef)} 
            className={cn(
              "navigation-link animate-fade-in text-xs", 
              activeSection === "impact-door-innovatie" && "active"
            )} 
            style={{
              animationDelay: "200ms"
            }}
          >
            IMPACT DOOR INNOVATIE
          </button>
          
          <button 
            onClick={() => scrollToSection(contactRef)} 
            className={cn(
              "bg-[#5c899d] text-white px-4 py-2 rounded-md text-sm font-semibold transition-all animate-fade-in hover:bg-[#4a7081]"
            )} 
            style={{
              animationDelay: "300ms"
            }}
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;