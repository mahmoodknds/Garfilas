import { brand } from "@/config/brand";

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label={brand.name}>
      <div className="logo">
        <div className="logo-main">{brand.name}</div>
        <div className="logo-sub-reference">
          <i />
          Italian Lasagna
          <i />
        </div>
      </div>
    </div>
  );
}
