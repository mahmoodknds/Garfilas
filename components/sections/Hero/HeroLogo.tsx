export default function HeroLogo() {
  return (
    <div className="hero-logo-lockup" aria-label="Garfilas Italian Lasagna">
      <style>{`
        .hero-product-lockup{display:flex;align-items:center;justify-content:center;width:min(60vw,36rem);margin-top:-.64rem;gap:clamp(1.02rem,2.35vw,1.45rem)}
        .hero-product-line{display:block;flex:1 1 0;height:1px;min-width:3.8rem;max-width:6.7rem;background:linear-gradient(90deg,rgba(255,111,8,0),rgba(255,129,15,.52) 16%,#f4a12b 40%,#ffd36f 50%,#f4a12b 60%,rgba(255,129,15,.52) 84%,rgba(255,111,8,0));box-shadow:0 0 .28px rgba(255,220,143,.82),0 0 1.25px rgba(255,177,58,.6),0 0 3px rgba(255,105,4,.28),0 0 6px rgba(255,71,0,.08);opacity:.88}
        .hero-product-name{flex:0 0 auto;margin:0;font-family:var(--font-cormorant-garamond),serif;font-size:clamp(.90rem,2.70vw,1.34rem);font-weight:300;line-height:.76;letter-spacing:.58em;text-indent:.58em;text-transform:uppercase;white-space:nowrap;transform:scaleX(.87);transform-origin:center;background:linear-gradient(180deg,#ffd06f 0%,#f5a32b 46%,#df7e13 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:0;filter:brightness(1.14) saturate(1.02);text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;text-shadow:0 0 .14px rgba(255,226,159,.92),0 0 .5px rgba(255,192,78,.72),0 0 1.5px rgba(255,139,19,.42),0 0 3.5px rgba(255,88,0,.2),0 0 6px rgba(255,68,0,.07)}
        .hero-italy-flag{position:relative;width:clamp(3rem,8vw,4.8rem);height:2.5px;margin:.56rem auto 0;display:flex;overflow:hidden;isolation:isolate;clip-path:polygon(0 50%,14% 0,86% 0,100% 50%,86% 100%,14% 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 88%,transparent 100%);box-shadow:0 0 .7px rgba(255,236,188,.65),0 0 3px rgba(255,122,0,.28);opacity:.94}
        .hero-italy-flag span{height:100%;flex:1 1 33.333%;display:block}
        .hero-italy-green{background:#009246}.hero-italy-white{background:#f5f0df}.hero-italy-red{background:#ce2b37}
        .hero-slogan{margin-top:clamp(.72rem,2.5vw,.98rem);color:#f4a43c;font-family:"Brush Script MT","Segoe Script","URW Chancery L","Apple Chancery",cursive;font-size:clamp(.8rem,3.35vw,1.04rem);font-weight:400;font-style:normal;line-height:1.02;letter-spacing:-.015em;text-align:center;white-space:nowrap;text-shadow:0 0 .45px #ffe8b4,0 0 1.8px rgba(255,193,93,.72),0 0 5px rgba(255,122,0,.22)}
        @media(max-width:699px){.hero-product-lockup{width:min(74vw,24rem);margin-top:-.70rem;gap:clamp(.72rem,2.8vw,.96rem)}.hero-product-line{min-width:2rem;max-width:3.9rem}.hero-product-name{font-size:clamp(.78rem,3.35vw,.98rem);letter-spacing:.55em;text-indent:.55em;transform:scaleX(.85)}.hero-italy-flag{width:clamp(2.8rem,10vw,3.45rem);height:2.35px;margin-top:.5rem}.hero-slogan{margin-top:.72rem;font-size:clamp(.7rem,3.15vw,.86rem)}}
        @media(min-width:700px){.hero-product-lockup{width:min(60vw,36rem);margin-top:-.78rem;gap:clamp(1.02rem,2.35vw,1.45rem)}.hero-product-line{min-width:3.8rem;max-width:6.7rem}.hero-product-name{font-size:clamp(.98rem,2.40vw,1.34rem);letter-spacing:.58em;text-indent:.58em;transform:scaleX(.87)}.hero-italy-flag{width:5rem;height:2.5px;margin-top:.58rem}.hero-slogan{margin-top:.9rem;font-size:.96rem}}
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
