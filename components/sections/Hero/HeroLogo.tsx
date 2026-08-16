const LOGO_SRC = "/assets/brand/garfilas-reference-logo.svg";

const logoStyle = {
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  width: "min(72vw, 27rem)",
  height: "auto",
  aspectRatio: "283.5 / 56.7",
  transform: "translate(-50%, -50%)",
  zIndex: 6,
  display: "block",
  objectFit: "contain" as const,
  opacity: 1,
  filter:
    "brightness(0) saturate(100%) invert(76%) sepia(73%) saturate(1200%) hue-rotate(350deg) brightness(105%) contrast(105%) drop-shadow(0 0 1px rgba(255,250,232,1)) drop-shadow(0 0 3px rgba(255,218,125,.98)) drop-shadow(0 0 7px rgba(255,144,24,.96)) drop-shadow(0 0 14px rgba(255,82,0,.88)) drop-shadow(0 0 28px rgba(255,40,0,.58)) drop-shadow(0 0 48px rgba(255,25,0,.28))",
};

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="Garfilas">
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
