import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroCTA() {
  return (
    <>
      <style>{`
        /* Placement test: physically move the existing initial particle field to Garfield's ring zone. */
        .hero-ring-heat{display:none!important}
        .hero-dust-far,.hero-dust-mid,.hero-dust-near,.hero-dust-front,.hero-sparks{
          inset:auto!important;
          left:50%!important;
          top:28%!important;
          width:min(94vw,46rem)!important;
          height:min(56vh,34rem)!important;
          translate:-50% -50%;
          border-radius:50%;
          -webkit-mask-image:none!important;
          mask-image:none!important;
          overflow:visible!important;
        }
        @media(max-width:699px){
          .hero-dust-far,.hero-dust-mid,.hero-dust-near,.hero-dust-front,.hero-sparks{
            top:27.5%!important;
            width:96vw!important;
            height:52vh!important;
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
