import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero min-h-screen px-6 pb-32 pt-10 text-center"
    >
      <div className="hero-shell mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center">
        <div className="hero-reference-art animate-fade-up" aria-hidden="true">
          <img
            src="/assets/hero/garfilas-reference-hero-preview.jpg"
            alt=""
            width={1024}
            height={1024}
          />
        </div>

        <div className="animate-fade-up-delay-3 mt-2">
          <a href="#menu" aria-label={brand.navigation.menu}>
            <GlowButton id="hero-title">{brand.navigation.menu}</GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
}
