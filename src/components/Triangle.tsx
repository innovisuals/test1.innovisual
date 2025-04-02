
import React, { RefObject } from "react";

interface TriangleProps {
  targetRef: RefObject<HTMLDivElement>;
}

const Triangle: React.FC<TriangleProps> = ({ targetRef }) => {
  const scrollToTarget = () => {
    if (targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <button 
      onClick={scrollToTarget}
      className="block w-[30px] h-[25px] mx-auto animate-fade-in hover:scale-110 transition-transform"
      style={{ animationDelay: "800ms" }}
      aria-label="Scroll down"
    >
      <div className="triangle-black"></div>
    </button>
  );
};

export default Triangle;
