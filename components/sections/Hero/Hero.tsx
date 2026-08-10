import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-reference-art" aria-hidden="true">
          <img
            src="/assets/hero/garfilas-reference-hero-preview.jpg"
            alt=""
            width={1024}
            height={1024}
            fetchPriority="high"
          />
        </div>

        <h1 id="hero-title" className="sr-only">
          Garfilas premium Italian lasagna
        </h1>

        <HeroCTA />
      </div>
    </section>
  );
}
