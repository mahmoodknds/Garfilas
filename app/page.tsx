import BottomNavigation from "@/components/sections/BottomNavigation/BottomNavigation";
import Hero from "@/components/sections/Hero/Hero";
import MenuSection from "@/components/sections/Menu/MenuSection";
import { CartProvider } from "@/components/sections/Cart/CartProvider";
import CartSection from "@/components/sections/Cart/CartSection";

export default function Home() {
  return (
    <CartProvider>
      <main id="hero">
        <Hero />
        <MenuSection />
        <CartSection />
      </main>
      <BottomNavigation />
    </CartProvider>
  );
}
