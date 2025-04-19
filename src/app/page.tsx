import ConferenceIntro from "./components/Home/ConferenceIntro";
import FaqSection from "./components/Home/FaqSection";
import FutureEvents from "./components/Home/FutureEvents";
import HeroSection from "./components/Home/HeroSection";
import MarqueeUi from "./components/Home/MarqueeUi";
import PricingSection from "./components/Home/PricingSection";
import RecentBlog from "./components/Home/RecentBlog";
import Footer from "./components/Shared/Footer";
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
        <ConferenceIntro />
        <FaqSection />
        <PricingSection />
        <RecentBlog />
        <Footer />
      </div>
    </div>
  );
}
