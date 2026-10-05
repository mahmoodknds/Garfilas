import BottomNavigation from "@/components/sections/BottomNavigation/BottomNavigation";
import Hero from "@/components/sections/Hero/Hero";
import MenuProductCard from "@/components/sections/Menu/MenuProductCard";
import "@/components/sections/Menu/menu.css";

export default function Home() {
  return (
    <main id="hero">
      <Hero />
      <section className="menu-showcase" id="menu" aria-labelledby="menu-title">
        <div className="menu-showcase__inner">
          <p className="menu-showcase__label">GARFILAS · MENU</p>
          <h1 className="menu-showcase__title" id="menu-title">Our Signature</h1>
          <MenuProductCard />
        </div>
      </section>
      <BottomNavigation />
    </main>
  );
}
