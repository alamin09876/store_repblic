import FutureEvents from "./components/Home/FutureEvents";
import HeroSection from "./components/Home/HeroSection";
import MarqueeUi from "./components/Home/MarqueeUi";
import Header from "./components/Shared/Header";

export default function Home() {
  return (
    <div>
      <div
        className=" top-0 z-50 shadow-md"
        style={{
          backgroundImage: "url('/assest/backgroundImage/backgroundOne.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <HeroSection />
      </div>
      <div>
        <MarqueeUi />
        <FutureEvents />
      </div>
    </div>
  );
}
