import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-ring" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-reference-art">
        <img
          src="/assets/hero/garfilas-reference-hero-preview.jpg"
          alt="Garfilas Lasagna"
        />
      </div>

      <div className="hero-cta" id="hero-title">
        <Button>مشاهده منو</Button>
      </div>
    </section>
  );
}
