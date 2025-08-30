import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
    </div>
  );
}
