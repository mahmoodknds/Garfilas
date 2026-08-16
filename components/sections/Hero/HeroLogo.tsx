const LOGO_SRC = "/assets/brand/garfilas-reference-logo-neon.svg";

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
