import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";
import HeroLogo from "./HeroLogo";

export default function HeroContent() {
  return (
    <div className="hero-content text-center">
      <HeroLogo />

      <div className="hero-kicker">Italian Lasagna Experience</div>

      <h1 id="hero-title" className="hero-title">
        {brand.name}
      </h1>

      <p className="hero-subtitle">
        Premium handmade lasagna with an Italian soul.
      </p>

      <div className="hero-cta animate-fade-up-delay-3">
        <a href="#menu" aria-label={brand.navigation.menu}>
          <GlowButton>{brand.navigation.menu}</GlowButton>
        </a>
      </div>
    </div>
  );
}
