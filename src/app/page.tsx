import HeroSection from "./components/Home/HeroSection";
import Header from "./components/Shared/Header";

export default function Home() {
  return (
    <div
      className="sticky top-0 z-50 shadow-md"
      style={{
        backgroundImage: "url('/assest/backgroundImage/backgroundOne.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <HeroSection />
    </div>
  );
}
