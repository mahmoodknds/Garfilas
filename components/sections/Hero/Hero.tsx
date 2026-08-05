import HeroCTA from "./HeroCTA";
import HeroContent from "./HeroContent";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-ring" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-reference-art" aria-hidden="true">
          <img
            src="/assets/hero/garfilas-reference-hero-preview.jpg"
            alt=""
            width={1024}
            height={1024}
          />
        </div>

        <div className="hero-content" id="hero-title">
          <HeroLogo />
          <HeroContent />
        </div>

        <HeroCTA />
      </div>
    </section>
  );
}
