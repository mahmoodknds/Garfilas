const LOGO_SRC = "/assets/brand/garfilas-reference-logo.svg";

const logoStyle = {
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  width: "min(72vw, 27rem)",
  height: "auto",
  aspectRatio: "283.5 / 56.7",
  transform: "translate(-50%, -50%)",
  zIndex: 4,
  display: "block",
  objectFit: "contain" as const,
  filter:
    "brightness(0) saturate(100%) invert(73%) sepia(92%) saturate(1218%) hue-rotate(346deg) brightness(104%) contrast(103%) drop-shadow(0 0 1px rgba(255,248,224,.98)) drop-shadow(0 0 4px rgba(255,204,93,.96)) drop-shadow(0 0 9px rgba(255,112,0,.88)) drop-shadow(0 0 18px rgba(255,55,0,.58))",
};

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
      <span className="hero-logo-fire hero-logo-fire-back" aria-hidden="true" />
      <span className="hero-logo-fire hero-logo-fire-wide" aria-hidden="true" />
      <span className="hero-logo-fire hero-logo-fire-neon" aria-hidden="true" />
      <img
        className="hero-logo-reference-edge"
        src={LOGO_SRC}
        alt="Garfilas Italian Lasagna"
        width={283.5}
        height={56.7}
        style={logoStyle}
        fetchPriority="high"
        draggable={false}
      />
    </div>
  );
}
