import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

const MENU_URL =
  "https://snappfood.ir/restaurant/menu/%D9%84%D8%A7%D8%B2%D8%A7%D9%86%DB%8C%D8%A7_%DA%AF%D8%A7%D8%B1%D9%81%DB%8C%D9%84%D8%A7%D8%B2-r-dq71rx/?from_list=1&GAParams=";

export default function HeroCTA() {
  return (
    <div className="hero-cta">
      <a
        href={MENU_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={brand.navigation.menu}
      >
        <GlowButton>{brand.navigation.menu}</GlowButton>
      </a>
    </div>
  );
}
