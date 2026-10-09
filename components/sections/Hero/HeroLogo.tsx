import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup">
      <div className="hero-logo" aria-hidden="true">
        <Image className="hero-logo-artwork" src="/assets/brand/garfilas-reference-logo.png" alt="" width={2172} height={724} sizes="(max-width: 505px) 76vw, 24rem" priority draggable={false} />
      </div>
      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line" /><span className="hero-product-name">LASAGNA</span><span className="hero-product-line" />
      </div>
      <div className="hero-italy-flag" aria-label="Italian flag"><span className="hero-italy-green" /><span className="hero-italy-white" /><span className="hero-italy-red" /></div>
      <div className="hero-slogan" aria-hidden="true">Layers of Love, Taste of Italy</div>
      <span className="sr-only">Garfilas Italian Lasagna. Layers of Love, Taste of Italy.</span>
    </div>
  );
}
