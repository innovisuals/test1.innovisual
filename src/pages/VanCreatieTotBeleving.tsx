
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const VanCreatieTotBeleving: React.FC = () => {
  useEffect(() => {
    document.title = "Van Creatie tot Beleving | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F6EF] to-white relative">
      {/* Subtielere gradient overlay aan de bovenkant */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      
      <Navigation />
      
      <main className="section-container items-center pt-32 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in text-left text-[#5c899d]">Van Creatie tot Beleving</h2>
            
            <div className="space-y-8 mt-4">
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <p className="text-xl font-medium mb-2">Breng gerechten tot leven met INNOVISUAL.</p>
                <p className="text-innovisual-muted mb-6">
                  Laat gasten gerechten beleven zoals nooit tevoren met hoogwaardige 3D-visualisaties 
                  die impact maken en conversie verhogen.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="text-innovisual-muted">
                  Wij verzorgen het volledige proces: van 3D-scans tot de interactieve presentatie. 
                  U hoeft enkel het gerecht klaar te zetten.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div>
                  <img 
                    src="/lovable-uploads/771e7fd6-dc43-40bb-a552-1e216f399625.png" 
                    alt="INNOVISUAL 3D visualization process" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in order-first lg:order-last" style={{ animationDelay: "200ms" }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/51dec0e0-3112-4ca3-a234-8cc031986dd5.png" 
                alt="Pancakes with syrup being poured" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VanCreatieTotBeleving;