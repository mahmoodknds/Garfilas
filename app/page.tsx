import BottomNavigation from "@/components/sections/BottomNavigation/BottomNavigation";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Hero from "@/components/sections/Hero/Hero";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <main id="hero">
      <Hero />
      <FeaturedProducts />
      <Story />
      <BottomNavigation />
    </main>
  );
}
