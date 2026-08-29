import GlowButton from "@/components/ui/GlowButton";
import { brand } from "@/config/brand";

export default function HeroCTA() {
  return (
    <>
      <style>{`
        /* Foreground isolation: particle animations must never composite with Hero UI. */
        .hero-depth-scene,
        .hero-orbit,
        .hero-glow { isolation: isolate; }
        .hero-depth-scene { z-index: 0 !important; }
        .hero-glow-main { z-index: 1 !important; }
        .hero-orbit-one { z-index: 2 !important; }
        .hero-shell {
          position: relative !important;
          z-index: 100 !important;
          isolation: isolate !important;
          transform: none !important;
          filter: none !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: none;
        }
        .hero-shell > .hero-mascot,
        .hero-shell > .hero-copy,
        .hero-shell > .hero-cta,
        .hero-shell > .hero-scroll-cue {
          isolation: isolate;
          pointer-events: auto;
          opacity: 1;
          visibility: visible;
        }
        .hero-shell > .hero-mascot { z-index: 101 !important; }
        .hero-shell > .hero-copy { z-index: 102 !important; }
        .hero-shell > .hero-cta { z-index: 103 !important; }
        .hero-shell > .hero-scroll-cue { z-index: 104 !important; }
        .hero-cta,
        .hero-cta > a,
        .hero-cta .group {
          opacity: 1 !important;
          visibility: visible !important;
        }
        .hero-cta > a { position: relative; z-index: 1; }
        .hero-scroll-cue { pointer-events: none; }
      `}</style>
      <div className="hero-cta">
        <a href="#menu" aria-label={brand.navigation.menu}>
          <GlowButton>{brand.navigation.menu}</GlowButton>
        </a>
      </div>
    </>
  );
}
