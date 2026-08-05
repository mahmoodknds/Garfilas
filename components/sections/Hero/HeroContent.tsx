import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero min-h-screen px-4 pb-32 pt-6 text-center sm:px-6 sm:pt-8"
    >
      <div className="hero-shell mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col items-center justify-center">
        <div className="hero-reference-art animate-fade-up" aria-hidden="true">
          <img
            src="/assets/hero/garfilas-reference-hero.svg"
            alt=""
            width={1024}
            height={1024}
          />
        </div>

        <div className="hero-cta animate-fade-up-delay-3">
          <a href="#menu" aria-label={brand.navigation.menu}>
            <GlowButton id="hero-title">{brand.navigation.menu}</GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
}
