export default function HeroLogo() {
  return (
    <div id="hero-title" className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <div className="hero-logo hero-logo-entrance" aria-hidden="true">
        <img className="hero-logo-artwork" src="/assets/brand/garfilas-reference-logo.svg" alt="" draggable={false} />
      </div>
      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line hero-product-line-left" /><span className="hero-product-name">LASAGNA</span><span className="hero-product-line hero-product-line-right" />
      </div>
      <div className="hero-italy-flag" aria-label="Italian flag"><span className="hero-italy-green" /><span className="hero-italy-white" /><span className="hero-italy-red" /></div>
      <div className="hero-slogan" aria-hidden="true">Layers of Love, Taste of Italy</div>
      <span className="sr-only">Garfilas Italian Lasagna. Layers of Love, Taste of Italy.</span>
    </div>
  );
}
