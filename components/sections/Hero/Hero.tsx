import Image from "next/image";
import HeroCTA from "./HeroCTA";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">Garfilas Italian Lasagna</h1>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-mascot" aria-label="Garfilas hero artwork">
          <div className="hero-mascot-frame">
            <Image
              src="/assets/hero/garfilas-hero-final.webp"
              alt="Garfilas mascot enjoying handmade lasagna"
              width={1536}
              height={1024}
              sizes="(max-width: 477px) 63vw, 18.8rem"
              priority
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
    </section>
  );
}
