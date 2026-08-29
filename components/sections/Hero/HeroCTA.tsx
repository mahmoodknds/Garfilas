import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroCTA() {
  return (
    <div className="hero-cta">
      <a href="#menu" aria-label={brand.navigation.menu}>
        <GlowButton>{brand.navigation.menu}</GlowButton>
      </a>
    </div>
  );
}
