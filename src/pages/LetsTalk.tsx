
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";

const LetsTalk: React.FC = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "Let's Talk | INNOVISUAL";
    
    // Position the form below the navbar after the page loads
    const positionForm = () => {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.paddingTop = `${navbarHeight + (isMobile ? 16 : 32)}px`;
      }
    };
    
    positionForm();
    window.addEventListener('resize', positionForm);
    
    return () => {
      window.removeEventListener('resize', positionForm);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className={`font-bold mb-8 animate-fade-in ${isMobile ? 'text-5xl' : 'text-3xl md:text-4xl'}`}>LET'S TALK</h2>
          <p className="text-lg font-medium mb-2 animate-fade-in italic text-innovisual-muted" style={{ animationDelay: "100ms" }}>Samen innoveren.</p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-innovisual-muted mb-8 animate-fade-in text-lg" style={{ animationDelay: "200ms" }}>
              3D-visualisatie verkoopt jouw gerechten, nog vóór de eerste hap.
              Wil je weten hoe? Neem contact op en ontdek de impact van INNOVISUAL.
            </p>
          </div>
        </div>
        
        <ContactForm />
      </main>
    </div>
  );
};

export default LetsTalk;
