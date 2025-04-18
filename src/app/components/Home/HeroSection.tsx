const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-no-repeat bg-center bg-contain "
      style={{
        backgroundImage: "url('/assest/image/placeholder.png')",
      }}
    >
      <div className="absolute" />

      <div className="relative z-10 h-full flex flex-col justify-between px-16 py-16">
        <div className="pt-8">
          <p className="text-sm text-white/70">Start Registration:</p>
          <p className="text-2xl font-semibold text-white">25 March 2025</p>
        </div>

        {/* Bottom Left - Main Headline */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white max-w-[600px]">
            JOIN ULTIMATE <br />
            ONLINE CONFERENCE EXPERIENCE
          </h1>
        </div>

        {/* Bottom Right - CTA Button */}
        <div className="absolute bottom-10 right-10">
          <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-6 py-3 rounded transition">
            GET TICKET
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
