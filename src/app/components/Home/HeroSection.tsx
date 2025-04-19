"use client";

import { useEffect, useState } from "react";

const HeroSection = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideOnScroll(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: "url('/assest/image/placeholder.png')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto] px-16 py-16">
        {/* Top - Registration Info */}
        <div className="pt-8">
          <p className="text-sm text-white/70">Start Registration:</p>
          <p className="text-2xl font-semibold text-white">25 March 2025</p>
        </div>

        {/* Center - Headline */}
        <div className="flex items-end">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-[600px] lg:mt-0 -mt-20">
            JOIN ULTIMATE <br />
            ONLINE CONFERENCE EXPERIENCE
          </h1>
        </div>

        {/* Bottom Right - CTA Button */}
        <div className="relative">
          <div className="absolute lg:bottom-0 lg:right-12 right-32 -bottom-14">
            <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-6 py-3 rounded transition">
              GET TICKET
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute inset-0">
        <div className="relative text-white p-10">
          <div
            className={`fixed -right-135 top-4/5 -rotate-90 origin-bottom-left text-gray-400 text-sm bg-gradient-to-b from-[#0E0812] to-[#181818] px-12 py-2 transition-opacity duration-500 ${
              hideOnScroll ? "opacity-0" : "opacity-100"
            }`}
          >
            Social: FB . IN . TW. DR{" "}
            <span className="mx-2 text-[#7546FF] text-2xl">|</span>{" "}
            +1-416-8241228{" "}
            <span className="mx-2 text-[#7546FF] text-2xl">|</span>{" "}
            Info@daevnt.org.world
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
