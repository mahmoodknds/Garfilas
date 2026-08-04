import BottomNavigation from "@/components/sections/BottomNavigation/BottomNavigation";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/Hero/HeroContent";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <main id="hero">
      <HeroSection />
      <FeaturedProducts />
      <Story />
      <BottomNavigation />
    </main>
  );
}
