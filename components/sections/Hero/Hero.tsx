import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-main-composition">
          <div className="hero-mascot" aria-label="Garfilas hero artwork">
            <div className="hero-mascot-frame">
              <img
                src="/assets/hero/garfilas-hero-final.webp"
                alt="Garfilas mascot enjoying handmade lasagna"
                width={1536}
                height={1024}
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="hero-copy">
            <HeroLogo />
          </div>

          <HeroCTA />

          <div className="hero-scroll-cue" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
