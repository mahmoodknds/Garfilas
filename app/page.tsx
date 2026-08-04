import BottomNavigation from "@/components/sections/BottomNavigation/BottomNavigation";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/Hero/HeroContent";

export default function Home() {
  return (
    <main id="hero">
      <HeroSection />
      <FeaturedProducts />
      <BottomNavigation />
    </main>
  );
}
