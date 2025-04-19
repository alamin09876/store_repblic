const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: "url('/assest/image/placeholder.png')",
      }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto] px-16 py-16">
        {/* Top - Registration Info */}
        <div className="pt-8">
          <p className="text-sm text-white/70">Start Registration:</p>
          <p className="text-2xl font-semibold text-white">25 March 2025</p>
        </div>

        {/* Center - Headline pushed lower */}
        <div className="flex items-end">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white max-w-[600px] ">
            JOIN ULTIMATE <br />
            ONLINE CONFERENCE EXPERIENCE
          </h1>
        </div>

        {/* Bottom Right - CTA Button */}
        <div className="relative">
          <div className="absolute bottom-0 right-12">
            <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-6 py-3 rounded transition">
              GET TICKET
            </button>
          </div>
        </div>
      </div>

      {/* Side Image with Rotated Text */}
      <div className="hidden lg:block lg:col-span-1 absolute inset-0">
        <div>
          <div className="relative text-white p-10">
            <div className="fixed -right-100 top-3/4 -rotate-90 origin-bottom-left text-gray-400 text-sm">
              Social: FB . IN . TW. DR{" "}
              <span className="mx-2 text-[#7546FF]">|</span> +1-416-8241228{" "}
              <span className="mx-2 text-[#7546FF]">|</span>{" "}
              Info@daevnt.org.world
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
