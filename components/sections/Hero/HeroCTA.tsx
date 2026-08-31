import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";
import HeroParticleEngine from "./HeroParticleEngine";

export default function HeroCTA() {
  return (
    <>
      <HeroParticleEngine />
      <div className="hero-cta">
        <a href="#menu" aria-label={brand.navigation.menu}>
          <GlowButton>{brand.navigation.menu}</GlowButton>
        </a>
      </div>
    </>
  );
}
