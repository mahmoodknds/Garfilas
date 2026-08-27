export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(62vw,39rem);margin-top:-.64rem;gap:clamp(1.55rem,3.2vw,2rem)}
        .hero-product-line{display:block;flex:1 1 0;height:1px;min-width:4.5rem;max-width:7.6rem;background:linear-gradient(90deg,rgba(255,112,8,0),rgba(255,138,17,.68) 12%,#ffb83c 40%,#ffe7a0 50%,#ffb83c 60%,rgba(255,138,17,.68) 88%,rgba(255,112,8,0));box-shadow:0 0 .45px rgba(255,241,191,.98),0 0 1.8px rgba(255,198,91,.88),0 0 4.5px rgba(255,128,8,.52),0 0 9px rgba(255,83,0,.18);opacity:.96}
        .hero-product-name{flex:0 0 auto;margin:0;font-family:var(--font-cormorant-garamond),serif;font-size:clamp(1.55rem,3.55vw,2.20rem);font-weight:300;line-height:.88;letter-spacing:.72em;text-indent:.72em;text-transform:uppercase;white-space:nowrap;transform:none;transform-origin:center;background:linear-gradient(180deg,#ffe9ad 0%,#ffc55a 32%,#ff9e20 72%,#ff7b08 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:.08px rgba(255,226,153,.9);filter:brightness(1.16) saturate(1.12);text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;text-shadow:0 0 .22px rgba(255,244,202,.98),0 0 .85px rgba(255,214,119,.96),0 0 2.4px rgba(255,154,36,.72),0 0 5px rgba(255,102,0,.46),0 0 10px rgba(255,71,0,.16)}
        .hero-italy-flag{position:relative;width:clamp(3rem,8vw,4.8rem);height:2.5px;margin:.56rem auto 0;display:flex;overflow:hidden;isolation:isolate;clip-path:polygon(0 50%,14% 0,86% 0,100% 50%,86% 100%,14% 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);box-shadow:0 0 .7px rgba(255,236,188,.65),0 0 3px rgba(255,122,0,.28);opacity:.94}
        .hero-italy-flag span{height:100%;flex:1 1 33.333%;display:block}
        .hero-italy-green{background:#009246}.hero-italy-white{background:#f5f0df}.hero-italy-red{background:#ce2b37}
        .hero-slogan{margin-top:clamp(.72rem,2.5vw,.98rem);color:#f4a43c;font-family:"Brush Script MT","Segoe Script","URW Chancery L","Apple Chancery",cursive;font-size:clamp(.8rem,3.35vw,1.04rem);font-weight:400;font-style:normal;line-height:1.02;letter-spacing:-.015em;text-align:center;white-space:nowrap;text-shadow:0 0 .45px #ffe8b4,0 0 1.8px rgba(255,193,93,.72),0 0 5px rgba(255,122,0,.22)}
        @media(max-width:699px){.hero-product-lockup{width:min(76vw,25rem);margin-top:-.70rem;gap:clamp(1rem,3.8vw,1.35rem)}.hero-product-line{min-width:2.2rem;max-width:4.5rem}.hero-product-name{font-size:clamp(1.08rem,5.2vw,1.48rem);letter-spacing:.62em;text-indent:.62em}.hero-italy-flag{width:clamp(2.8rem,10vw,3.45rem);height:2.35px;margin-top:.5rem}.hero-slogan{margin-top:.72rem;font-size:clamp(.7rem,3.15vw,.86rem)}}
        @media(min-width:700px){.hero-product-lockup{width:min(62vw,39rem);margin-top:-.78rem;gap:clamp(1.55rem,3.2vw,2rem)}.hero-product-line{min-width:4.5rem;max-width:7.6rem}.hero-product-name{font-size:clamp(1.85rem,3.45vw,2.2rem);letter-spacing:.72em;text-indent:.72em}.hero-italy-flag{width:5rem;height:2.5px;margin-top:.58rem}.hero-slogan{margin-top:.9rem;font-size:.96rem}}
      `}</style>

      <div className="hero-logo hero-logo-entrance" aria-hidden="true">
        <img className="hero-logo-artwork animate-neon-fault" src="/assets/brand/garfilas-reference-logo.svg" alt="" draggable={false} style={{display:"block",width:"min(76vw, 29rem)",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:"none"}} />
      </div>

      <div className="hero-product-lockup" aria-hidden="true">
        <span className="hero-product-line hero-product-line-left" />
        <span className="hero-product-name">LASAGNA</span>
        <span className="hero-product-line hero-product-line-right" />
      </div>

      <div className="hero-italy-flag" aria-label="Italian flag">
        <span className="hero-italy-green" />
        <span className="hero-italy-white" />
        <span className="hero-italy-red" />
      </div>

      <div className="hero-slogan" aria-hidden="true">Layers of Love, Taste of Italy</div>
      <span className="sr-only">Garfilas Italian Lasagna. Layers of Love, Taste of Italy.</span>
    </div>
  );
}
