
import { useEffect, useState } from "react";

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoClass = [
    "z-50 transition-all duration-500 ease-in-out",
    isSticky && !isMobile ? "fixed top-4 left-4 w-24" : "",
    !isSticky && !isMobile
      ? "absolute top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2"
      : "",
    isMobile ? "opacity-100" + (isSticky ? " opacity-0" : "") : ""
  ].join(" ");

  return (
    <div className="bg-[#FFFCF0] text-[#111] font-sans scroll-smooth">
      {/* Sticky MP4-logo */}
      <div className={logoClass}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
          src="/logo-loop.mp4"
        />
      </div>

      {/* Scroll-pijltje */}
      {!isSticky && (
        <div
          onClick={() =>
            document
              .getElementById("vctb")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl text-[#5C899D] cursor-pointer animate-bounce z-20"
        >
          ↓
        </div>
      )}

      {/* Hero */}
      <div className="h-screen w-full relative flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl text-[#5C899D] font-bold mt-8">
          Welkom bij INNOVISUAL
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          Waar jouw gerechten tot leven komen in Augmented Reality.
        </p>
      </div>

      {/* VCTB */}
      <section id="vctb" className="min-h-screen py-20 px-6">
        <h2 className="text-2xl md:text-4xl text-[#5C899D] text-center mb-8">
          Van Creatie tot Beleving
        </h2>
        <div className="w-full h-96 bg-gray-200 rounded-lg mx-auto shadow-inner flex items-center justify-center">
          <p className="text-center text-xl text-gray-600">
            Hier komt straks je 3D-model of telefoon-placeholder
          </p>
        </div>
      </section>
    </div>
  );
}
