export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(86vw,25rem);margin-top:-.62rem;gap:clamp(.55rem,2.4vw,.85rem)}
        .hero-product-line{display:block;flex:1 1 auto;height:1px;min-width:2.8rem;max-width:6.2rem;background:#ff7a00;box-shadow:0 0 .5px #fff8d3,0 0 2px #ff9a23,0 0 6px rgba(255,122,0,.78),0 0 12px rgba(255,82,0,.3);opacity:.96}
        .hero-product-name{flex:0 0 auto;margin:0;color:#ff7a00;font-family:"Bodoni 72","Didot","Bodoni MT","Times New Roman",serif;font-size:clamp(.9rem,3.8vw,1.28rem);font-weight:400;line-height:.95;letter-spacing:.16em;text-indent:.16em;text-transform:uppercase;white-space:nowrap;transform:scaleX(.9);transform-origin:center;text-shadow:0 0 .45px #fff8d3,0 0 1.1px #ffda89,0 0 2.2px #ff9a23,0 0 4px rgba(255,122,0,.82),0 0 8px rgba(255,102,0,.52),0 0 15px rgba(255,82,0,.25)}
        @media(max-width:699px){.hero-product-lockup{width:min(92vw,23rem);margin-top:-.72rem;gap:.48rem}.hero-product-line{min-width:2.2rem;max-width:5rem}.hero-product-name{font-size:clamp(.82rem,4.25vw,1.16rem);letter-spacing:.13em;text-indent:.13em;transform:scaleX(.9)}}
        @media(min-width:700px){.hero-product-lockup{width:min(68vw,28rem);margin-top:-.82rem;gap:.9rem}.hero-product-line{min-width:5rem;max-width:8rem}.hero-product-name{font-size:1.45rem;letter-spacing:.18em;text-indent:.18em}}
      `}</style>

      <div className="hero-logo hero-logo-entrance" aria-hidden="true">
        <img
          className="hero-logo-artwork animate-neon-fault"
          src="/assets/brand/garfilas-reference-logo.svg"
          alt=""
          draggable={false}
          style={{
            display: "block",
            width: "min(76vw, 29rem)",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            filter: "none",
          }}
        />
      </div>

      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line hero-product-line-left" />
        <span className="hero-product-name">LASAGNA</span>
        <span className="hero-product-line hero-product-line-right" />
      </div>

      <span className="sr-only">Garfilas Italian Lasagna</span>
    </div>
  );
}
