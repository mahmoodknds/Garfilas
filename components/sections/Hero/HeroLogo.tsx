export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <div className="hero-logo" aria-hidden="true">
        <img
          className="hero-logo-artwork"
          src="/assets/brand/garfilas-reference-logo.svg"
          alt=""
          draggable={false}
        />
      </div>

      <div className="hero-product-name" aria-hidden="true">
        LASAGNA
      </div>

      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
