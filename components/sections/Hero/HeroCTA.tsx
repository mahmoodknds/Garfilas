import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroCTA() {
  return (
    <>
      <style>{`
        /* Test only: keep the pre-existing particle field concentrated around the real Garfield ring. */
        .hero-ring-heat{display:none!important}
        .hero-dust-far,.hero-dust-mid,.hero-dust-near,.hero-dust-front,.hero-sparks{
          -webkit-mask-image:radial-gradient(ellipse 31% 25% at 50% 28%,transparent 0 42%,#000 54% 88%,transparent 100%)!important;
          mask-image:radial-gradient(ellipse 31% 25% at 50% 28%,transparent 0 42%,#000 54% 88%,transparent 100%)!important;
          -webkit-mask-repeat:no-repeat!important;
          mask-repeat:no-repeat!important;
        }
        @media(max-width:699px){
          .hero-dust-far,.hero-dust-mid,.hero-dust-near,.hero-dust-front,.hero-sparks{
            -webkit-mask-image:radial-gradient(ellipse 38% 23% at 50% 27%,transparent 0 40%,#000 53% 90%,transparent 100%)!important;
            mask-image:radial-gradient(ellipse 38% 23% at 50% 27%,transparent 0 40%,#000 53% 90%,transparent 100%)!important;
          }
        }
      `}</style>
      <div className="hero-cta">
        <a href="#menu" aria-label={brand.navigation.menu}>
          <GlowButton>{brand.navigation.menu}</GlowButton>
        </a>
      </div>
    </>
  );
}
