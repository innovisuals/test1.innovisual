
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BenefitCard from "@/components/BenefitCard";
import { TrendingUp, Star, Rocket, Megaphone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ImpactDoorInnovatie: React.FC = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "Impact Door Innovatie | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className={`section-container ${isMobile ? 'pt-16' : 'pt-32'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {isMobile ? (
            // Mobile layout - text first, image second
            <>
              <div className="flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">Impact Door Innovatie</h2>
                  
                  <p className="text-lg text-innovisual-muted animate-fade-in" style={{ animationDelay: "100ms" }}>
                    INNOVISUAL tilt de gastervaring naar een hoger niveau met geavanceerde 3D-visualisaties. 
                    Dit resulteert in een unieke klantervaring en verhoogde conversie.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BenefitCard
                    icon={<TrendingUp />}
                    title="Resultaat"
                    description="Een aantrekkelijke presentatie stimuleert het bestelgedrag en verhoogt de gemiddelde besteding."
                    animationDelay={100}
                  />
                  
                  <BenefitCard
                    icon={<Star />}
                    title="Wow-effect"
                    description="De interactieve 3D-weergave transformeert dineren in een bijzondere ervaring en laat een blijvende indruk achter."
                    animationDelay={200}
                  />
                  
                  <BenefitCard
                    icon={<Rocket />}
                    title="Innovatie"
                    description="Onderscheid je van de concurrentie met geavanceerde technologie en sterke visuele impact."
                    animationDelay={300}
                  />
                  
                  <BenefitCard
                    icon={<Megaphone />}
                    title="Marketing"
                    description="Gebruik 3D-modellen om seizoensgerechten en specials extra onder de aandacht te brengen."
                    animationDelay={400}
                  />
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="rounded-lg overflow-hidden shadow-xl h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4baed6d1-bb94-430b-ba4c-1783a4ac101d.png" 
                    alt="Klant ervaring met INNOVISUAL" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </>
          ) : (
            // Desktop layout - original layout
            <>
              <div className="animate-fade-in order-last lg:order-first" style={{ animationDelay: "100ms" }}>
                <div className="rounded-lg overflow-hidden shadow-xl h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4baed6d1-bb94-430b-ba4c-1783a4ac101d.png" 
                    alt="Klant ervaring met INNOVISUAL" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">Impact Door Innovatie</h2>
                  
                  <p className="text-lg text-innovisual-muted animate-fade-in" style={{ animationDelay: "100ms" }}>
                    INNOVISUAL tilt de gastervaring naar een hoger niveau met geavanceerde 3D-visualisaties. 
                    Dit resulteert in een unieke klantervaring en verhoogde conversie.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BenefitCard
                    icon={<TrendingUp />}
                    title="Resultaat"
                    description="Een aantrekkelijke presentatie stimuleert het bestelgedrag en verhoogt de gemiddelde besteding."
                    animationDelay={100}
                  />
                  
                  <BenefitCard
                    icon={<Star />}
                    title="Wow-effect"
                    description="De interactieve 3D-weergave transformeert dineren in een bijzondere ervaring en laat een blijvende indruk achter."
                    animationDelay={200}
                  />
                  
                  <BenefitCard
                    icon={<Rocket />}
                    title="Innovatie"
                    description="Onderscheid je van de concurrentie met geavanceerde technologie en sterke visuele impact."
                    animationDelay={300}
                  />
                  
                  <BenefitCard
                    icon={<Megaphone />}
                    title="Marketing"
                    description="Gebruik 3D-modellen om seizoensgerechten en specials extra onder de aandacht te brengen."
                    animationDelay={400}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ImpactDoorInnovatie;
