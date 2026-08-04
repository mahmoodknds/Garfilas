export default function Logo() {
  return (
    <div className="logo" aria-label="Garfilas Lasagna">
      <img
        className="logo-svg"
        src="/assets/brand/garfilas-reference-logo.svg"
        alt="Garfilas Lasagna"
        width={1000}
        height={260}
      />
      <span className="logo-tagline">Layers of Love, Taste of Italy</span>
      <img
        className="logo-flag"
        src="/assets/brand/italy-flag.svg"
        alt=""
        aria-hidden="true"
        width={180}
        height={48}
      />
    </div>
  );
}
