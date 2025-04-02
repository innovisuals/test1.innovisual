
import React from "react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  animationDelay = 0
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md border border-innovisual-border transition-all duration-300",
        "hover:shadow-lg hover:translate-y-[-2px]",
        "animate-fade-in",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="text-3xl mb-4 text-innovisual-accent">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-innovisual-muted text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;
