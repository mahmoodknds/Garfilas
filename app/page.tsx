import BottomNavigation from "@/components/sections/BottomNavigation/BottomNavigation";
import Hero from "@/components/sections/Hero/Hero";
import MenuSection from "@/components/sections/Menu/MenuSection";

export default function Home() {
  return (
    <>
      <main id="hero">
        <Hero />
        <MenuSection />
      </main>
      <BottomNavigation />
    </>
  );
}
