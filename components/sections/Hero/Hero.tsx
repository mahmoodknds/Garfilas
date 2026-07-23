import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="hero">

      <Logo />

      <div className="hero-content">

        <div className="hero-text">

          <h1>

            Perfectly Layered

            <br />

            Perfectly Baked

          </h1>

          <p>

            Authentic Italian Lasagna
            crafted with premium ingredients.

          </p>

          <Button>

            مشاهده منو

          </Button>

        </div>

        <div className="hero-image">

          <div className="glow"/>

          <img
            src="/hero-lasagna.png"
            alt="Lasagna"
          />

        </div>

      </div>

    </section>
  );
}