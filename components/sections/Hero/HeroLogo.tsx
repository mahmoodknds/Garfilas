export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(86vw,25rem);margin-top:-.62rem;gap:clamp(.55rem,2.4vw,.85rem)}
        .hero-product-line{display:block;flex:1 1 auto;height:1px;min-width:2.8rem;max-width:6.2rem;background:#ff7a00;box-shadow:0 0 .5px #fff8d3,0 0 2px #ff9a23,0 0 6px rgba(255,122,0,.78),0 0 12px rgba(255,82,0,.3);opacity:.96}
        .hero-product-name{flex:0 0 auto;margin:0;color:#ff7a00;font-family:"Bodoni 72","Didot","Bodoni MT",Georgia,serif;font-size:clamp(.9rem,3.8vw,1.28rem);font-weight:400;line-height:.95;letter-spacing:.16em;text-indent:.16em;text-transform:uppercase;white-space:nowrap;transform:scaleX(.9);transform-origin:center;text-shadow:0 0 .45px #fff8d3,0 0 1.1px #ffda89,0 0 2.2px #ff9a23,0 0 4px rgba(255,122,0,.82),0 0 8px rgba(255,102,0,.52),0 0 15px rgba(255,82,0,.25)}
        .hero-slogan{margin-top:clamp(.72rem,2.5vw,1rem);color:#f0a13a;font-family:"Brush Script MT","Segoe Script","URW Chancery L","Apple Chancery",cursive;font-size:clamp(.78rem,3.25vw,1.02rem);font-weight:400;font-style:normal;line-height:1.05;letter-spacing:0;text-align:center;white-space:nowrap;text-shadow:0 0 .35px #ffe8b5,0 0 1.5px rgba(255,180,75,.5),0 0 5px rgba(255,122,0,.18)}
        @media(max-width:699px){.hero-product-lockup{width:min(92vw,23rem);margin-top:-.72rem;gap:.48rem}.hero-product-line{min-width:2.2rem;max-width:5rem}.hero-product-name{font-size:clamp(.82rem,4.25vw,1.16rem);letter-spacing:.13em;text-indent:.13em;transform:scaleX(.9)}.hero-slogan{margin-top:.72rem;font-size:clamp(.68rem,3vw,.82rem)}}
        @media(min-width:700px){.hero-product-lockup{width:min(68vw,28rem);margin-top:-.82rem;gap:.9rem}.hero-product-line{min-width:5rem;max-width:8rem}.hero-product-name{font-size:1.45rem;letter-spacing:.18em;text-indent:.18em}.hero-slogan{margin-top:.9rem;font-size:.92rem}}
      `}</style>

      <div className="hero-logo hero-logo-entrance" aria-hidden="true">
        <img className="hero-logo-artwork animate-neon-fault" src="/assets/brand/garfilas-reference-logo.svg" alt="" draggable={false} style={{display:"block",width:"min(76vw, 29rem)",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"none"}} />
      </div>

      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line hero-product-line-left" />
        <span className="hero-product-name">LASAGNA</span>
        <span className="hero-product-line hero-product-line-right" />
      </div>

      <div className="hero-slogan" aria-hidden="true">Layers of Love, Taste of Italy</div>
      <span className="sr-only">Garfilas Italian Lasagna. Layers of Love, Taste of Italy.</span>
    </div>
  );
}
