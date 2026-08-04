import Logo from "@/components/layout/Logo";
import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero min-h-screen px-6 pb-32 pt-10 text-center"
    >
      <div className="hero-landmarks" aria-hidden="true">
        <img src="/assets/hero/italy-landmarks.svg" alt="" />
      </div>

      <div className="hero-ring" aria-hidden="true" />

      <div className="hero-shell mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center">
        <div className="hero-mascot animate-fade-up" aria-hidden="true">
          <img
            src="/assets/hero/garfilas-cat.svg"
            alt=""
            width={700}
            height={700}
          />
        </div>

        <div className="hero-logo animate-fade-up">
          <Logo />
        </div>

        <div aria-hidden="true" className="hero-glow animate-glow" />

        <p className="hero-kicker animate-fade-up-delay-1">
          Premium Italian Lasagna
        </p>

        <h1
          id="hero-title"
          className="hero-title animate-fade-up-delay-1 mt-4 max-w-3xl text-balance font-black tracking-tight"
        >
          لذتِ یک لازانیای متفاوت
        </h1>

        <p className="hero-subtitle animate-fade-up-delay-2 mt-5 max-w-xl text-pretty">
          {brand.slogan}
        </p>

        <div className="animate-fade-up-delay-3 mt-9">
          <a href="#menu" aria-label={brand.navigation.menu}>
            <GlowButton>{brand.navigation.menu}</GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
}
