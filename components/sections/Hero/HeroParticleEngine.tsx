"use client";
import { useEffect } from "react";

type Ember={el:HTMLSpanElement;animation:Animation;ring:boolean;duration:number;spark:boolean;released?:boolean};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
function sizeProfile(ring:boolean){const r=Math.random();if(r<.03)return rand(1.4,2.1);if(r<.17)return rand(2.3,3.4);if(r<.42)return rand(3.4,4.8);if(r<.67)return rand(4.8,6.2);if(r<.92)return rand(6.2,7.8);if(r<.985)return rand(8,10.5);return ring?rand(10.5,13):rand(9,11)}

export default function HeroParticleEngine(){
 useEffect(()=>{
  const hero=document.querySelector<HTMLElement>(".hero");
  const ring=document.querySelector<HTMLElement>(".hero-orbit-one");
  const mascot=document.querySelector<HTMLElement>(".hero-mascot");
  if(!hero||!ring||!mascot)return;

  const layer=document.createElement("div");
  layer.className="hero-live-embers";
  Object.assign(layer.style,{position:"absolute",inset:"0",overflow:"visible",pointerEvents:"none",zIndex:"3"});
  hero.appendChild(layer);
  const releaseCanvas=document.createElement("canvas");
  Object.assign(releaseCanvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"});
  layer.appendChild(releaseCanvas);
  const ctx=releaseCanvas.getContext("2d");
  type Release={x:number;y:number;dx:number;dy:number;size:number;alpha:number;start:number;duration:number};
  const releases:Release[]=[];
  const resizeCanvas=()=>{const dpr=Math.min(2,window.devicePixelRatio||1);releaseCanvas.width=Math.max(1,Math.round(hero.clientWidth*dpr));releaseCanvas.height=Math.max(1,Math.round(hero.clientHeight*dpr));ctx?.setTransform(dpr,0,0,dpr,0,0);};
  resizeCanvas();
  const ro=new ResizeObserver(resizeCanvas);ro.observe(hero);

  const embers:Ember[]=[];
  const TARGET_RING_PARTICLES=132;
  const MAX_PARTICLES=680;
  const MAX_TRANSIENT_PARTICLES=MAX_PARTICLES-TARGET_RING_PARTICLES;
  const BREATH_MS=6000;
  let ringCount=0;
  let transientCount=0;
  let stopped=false;
  let raf=0;
  let ambientClock=rand(90,150);
  let sparkClock=rand(1200,1600);
  let sparkSide:"left"|"right"="right";
  let ringIndex=0;
  let breathClock=BREATH_MS/2;
  let releaseTimers:number[]=[];

  const make=(x:number,y:number,angle:number,isRing=false,spark=false,initialPhase=0,onFinish?:()=>void,release=false)=>{
   if(isRing){if(ringCount>=TARGET_RING_PARTICLES)return;}else if(transientCount>=MAX_TRANSIENT_PARTICLES)return;
   const size=spark?rand(3.2,7.2):sizeProfile(isRing);
   const el=document.createElement("span");
   el.className=spark?"hero-live-ember hero-live-spark":"hero-live-ember";
   Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:spark?"radial-gradient(circle,rgba(255,252,220,1) 0%,rgba(255,191,70,.98) 34%,rgba(255,91,8,.78) 62%,rgba(255,50,0,0) 100%)":"radial-gradient(circle,rgba(255,231,174,1) 0%,rgba(255,139,24,.9) 40%,rgba(255,61,4,0) 100%)",boxShadow:spark?`0 0 ${Math.max(12,size*5.5)}px rgba(255,210,90,.95),0 0 ${Math.max(24,size*8)}px rgba(255,95,8,.55)`:`0 0 ${Math.max(6,size*3.2)}px rgba(255,116,15,.52),0 0 ${Math.max(10,size*5.2)}px rgba(255,58,3,.24)`,contain:"layout style paint"});
   const distance=spark?rand(40,88):release?rand(58,142):isRing?rand(48,155):rand(35,135);
   const dx=Math.cos(angle)*distance;
   const dy=Math.sin(angle)*distance+(spark?rand(8,24):isRing?rand(10,36):rand(14,46));
   const driftX=rand(-3,3),driftY=rand(-4,16);
   const duration=spark?rand(9000,13000):release?rand(2800,4200):isRing?rand(10000,16000):rand(11000,17000);
   const alpha=spark?rand(.84,1):release?rand(.62,.96):rand(.46,.92);
   const scaleEnd=spark?rand(.22,.38):release?rand(.20,.42):rand(.30,.55);
   const animation=el.animate([
    {transform:"translate3d(0,0,0) scale(.45)",opacity:0},
    {transform:`translate3d(${dx*.08}px,${dy*.08}px,0) scale(${spark?1.04:1})`,opacity:0},
    {transform:`translate3d(${dx*.10}px,${dy*.10}px,0) scale(${spark?1.12:1})`,opacity:alpha,offset:spark?.12:.12},
    {transform:`translate3d(${dx*.38+driftX*.18}px,${dy*.38+driftY*.16}px,0) scale(${spark?.92:.80})`,opacity:spark?alpha*.92:alpha*.74,offset:spark?.38:.52},
    {transform:`translate3d(${dx*.70+driftX*.45}px,${dy*.70+driftY*.60}px,0) scale(${Math.max(scaleEnd,spark?.54:.38)})`,opacity:spark?alpha*.58:alpha*.34,offset:spark?.68:.82},
    {transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.975},
    {transform:`translate3d(${dx+driftX*1.05}px,${dy+driftY+rand(4,10)}px,0) scale(.08)`,opacity:0}
   ],{duration,easing:spark?"cubic-bezier(.28,.58,.38,1)":release?"cubic-bezier(.16,.62,.28,1)":"linear",fill:"both",iterations:1});
   layer.appendChild(el);
   const ember:Ember={el,animation,ring:isRing,duration,spark};
   embers.push(ember);
   if(isRing)ringCount++;else transientCount++;
   if(initialPhase>0)animation.currentTime=Math.min(initialPhase,duration-1);
   animation.onfinish=()=>{if(stopped)return;el.remove();const i=embers.indexOf(ember);if(i>=0){embers.splice(i,1);if(isRing)ringCount=Math.max(0,ringCount-1);else transientCount=Math.max(0,transientCount-1);}onFinish?.();};
  };

  const ringPoint=(spark=false,forcedSide?:"left"|"right",initialPhase=0,onFinish?:()=>void)=>{
   const rr=ring.getBoundingClientRect(),hr=hero.getBoundingClientRect();
   let angle=(ringIndex++%TARGET_RING_PARTICLES)*(Math.PI*2/TARGET_RING_PARTICLES)+rand(-.018,.018);
   if(forcedSide){const left=angle>Math.PI/2&&angle<Math.PI*1.5;if((forcedSide==="left")!==left)angle+=Math.PI;}
   const radius=Math.min(rr.width,rr.height)*.515;
   make(rr.left+rr.width/2+Math.cos(angle)*radius-hr.left,rr.top+rr.height/2+Math.sin(angle)*radius-hr.top,angle+rand(-.12,.12),true,spark,initialPhase,onFinish);
  };

  const maintainRingOne=()=>{if(stopped)return;ringPoint(false,undefined,0,maintainRingOne);};
  for(let i=0;i<TARGET_RING_PARTICLES;i++)ringPoint(false,undefined,rand(0,12000),maintainRingOne);

  const sparkBurst=()=>{
   const count=Math.floor(rand(20,31));
   const rr=ring.getBoundingClientRect(),hr=hero.getBoundingClientRect();
   for(let i=0;i<count;i++){
    const side=sparkSide;sparkSide=side==="right"?"left":"right";
    let angle=side==="right"?rand(-Math.PI*.46,Math.PI*.46):rand(Math.PI*.54,Math.PI*1.46);
    const radius=Math.min(rr.width,rr.height)*.515;
    const x=rr.left+rr.width/2+Math.cos(angle)*radius-hr.left;
    const y=rr.top+rr.height/2+Math.sin(angle)*radius-hr.top;
    make(x,y,angle+rand(-.12,.12),false,true);
   }
  };
  const releaseOne=(ember:Ember)=>{
   if(stopped||transientCount>=MAX_TRANSIENT_PARTICLES)return;
   const hr=hero.getBoundingClientRect(),rr=ring.getBoundingClientRect(),rect=ember.el.getBoundingClientRect();
   const x=rect.left+rect.width/2-hr.left,y=rect.top+rect.height/2-hr.top;
   const cx=rr.left+rr.width/2-hr.left,cy=rr.top+rr.height/2-hr.top;
   const angle=Math.atan2(y-cy,x-cx)+rand(-.075,.075);
   const size=Math.max(1.5,Math.max(rect.width,rect.height));
   const alpha=Math.max(.16,Number.parseFloat(getComputedStyle(ember.el).opacity)||.7);
   const distance=rand(58,142);
   releases.push({x,y,dx:Math.cos(angle)*distance,dy:Math.sin(angle)*distance+rand(10,34),size,alpha,start:performance.now(),duration:rand(3000,4400)});
  };
  const releaseRingCycle=()=>{
   const current=embers.filter(e=>e.ring);
   current.forEach((ember,index)=>{
    const delay=Math.round(index*420/Math.max(1,current.length-1));
    releaseTimers.push(window.setTimeout(()=>releaseOne(ember),delay));
   });
  };

  const seedAmbient=()=>{const w=hero.clientWidth,h=hero.clientHeight;for(let i=0;i<120;i++){const x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);if(y>h*.60&&Math.random()<.64)continue;make(x,y,rand(-Math.PI*.10,Math.PI*.10),false,false,rand(0,12000));}};
  seedAmbient();
  sparkBurst();

  let last=performance.now();
  const tick=(now:number)=>{
   if(stopped)return;
   const dt=Math.min(64,Math.max(0,now-last));last=now;
   ambientClock-=dt;sparkClock-=dt;breathClock-=dt;
   if(ctx){ctx.clearRect(0,0,hero.clientWidth,hero.clientHeight);for(let i=releases.length-1;i>=0;i--){const p=releases[i],t=(now-p.start)/p.duration;if(t>=1){releases.splice(i,1);continue;}const ease=1-Math.pow(1-t,2.2),x=p.x+p.dx*ease,y=p.y+p.dy*ease,alpha=p.alpha*(1-t)*(1-t),radius=p.size*(1-.78*t);ctx.beginPath();ctx.fillStyle=`rgba(255,145,32,${alpha})`;ctx.shadowColor="rgba(255,91,0,.75)";ctx.shadowBlur=Math.max(3,radius*3);ctx.arc(x,y,Math.max(.35,radius),0,Math.PI*2);ctx.fill();}ctx.shadowBlur=0;}
   if(breathClock<=0){releaseRingCycle();breathClock=BREATH_MS;}
   if(sparkClock<=0){sparkBurst();sparkClock=rand(1900,2500);}
   if(ambientClock<=0){let made=0;for(let a=0;a<10&&made<2;a++){const w=hero.clientWidth,h=hero.clientHeight,x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);if(y>h*.60&&Math.random()<.64)continue;make(x,y,rand(-Math.PI*.10,Math.PI*.10),false);made++;}ambientClock=rand(150,260);}
   raf=requestAnimationFrame(tick);
  };
  raf=requestAnimationFrame(tick);

  return()=>{stopped=true;cancelAnimationFrame(raf);releaseTimers.forEach(id=>clearTimeout(id));ro.disconnect();for(const e of embers)e.animation.cancel();layer.remove();};
 },[]);
 return null;
}
