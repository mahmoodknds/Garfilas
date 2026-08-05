import Button from "@/components/ui/Button";

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
          />
        </div>

        <div className="hero-content" id="hero-title">
          <div className="hero-kicker">Italian Lasagna Experience</div>
          <h1 className="hero-title">Garfilas</h1>
          <p className="hero-subtitle">
            Premium handmade lasagna with an Italian soul.
          </p>
        </div>
      </div>

      <div className="hero-cta">
        <Button>مشاهده منو</Button>
      </div>
    </section>
  );
}
