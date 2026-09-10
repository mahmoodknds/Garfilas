"use client";
import { useLayoutEffect } from "react";

type Ember={el:HTMLSpanElement;animation:Animation;ring:boolean;duration:number;spark:boolean};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
function sizeProfile(ring:boolean){const r=Math.random();if(r<.03)return rand(1.4,2.1);if(r<.17)return rand(2.3,3.4);if(r<.42)return rand(3.4,4.8);if(r<.67)return rand(4.8,6.2);if(r<.92)return rand(6.2,7.8);if(r<.985)return rand(8,10.5);return ring?rand(10.5,13):rand(9,11)}

export default function HeroParticleEngine(){
 useLayoutEffect(()=>{
  const hero=document.querySelector<HTMLElement>(".hero");
  const ring=document.querySelector<HTMLElement>(".hero-orbit-one");
  const mascot=document.querySelector<HTMLElement>(".hero-mascot");
  if(!hero||!ring||!mascot)return;

  const layer=document.createElement("div");
  layer.className="hero-live-embers";
  Object.assign(layer.style,{position:"absolute",inset:"0",overflow:"visible",pointerEvents:"none",zIndex:"3"});
  hero.appendChild(layer);

  const embers:Ember[]=[];
  const TARGET_RING_PARTICLES=132;
  const MAX_PARTICLES=680;
  let stopped=false;
  let raf=0;
  let ambientClock=rand(90,150);
  let sparkClock=rand(1200,1600);
  let sparkSide:"left"|"right"="right";
  let ringIndex=0;

  const make=(x:number,y:number,angle:number,isRing=false,spark=false,initialPhase=0,onFinish?:()=>void)=>{
   if(embers.length>=MAX_PARTICLES)return;
   const size=spark?rand(3.2,7.2):sizeProfile(isRing);
   const el=document.createElement("span");
   el.className=spark?"hero-live-ember hero-live-spark":"hero-live-ember";
   Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:spark?"radial-gradient(circle,rgba(255,252,220,1) 0%,rgba(255,191,70,.98) 34%,rgba(255,91,8,.78) 62%,rgba(255,50,0,0) 100%)":"radial-gradient(circle,rgba(255,231,174,1) 0%,rgba(255,139,24,.9) 40%,rgba(255,61,4,0) 100%)",boxShadow:spark?`0 0 ${Math.max(12,size*5.5)}px rgba(255,210,90,.95),0 0 ${Math.max(24,size*8)}px rgba(255,95,8,.55)`:`0 0 ${Math.max(6,size*3.2)}px rgba(255,116,15,.52),0 0 ${Math.max(10,size*5.2)}px rgba(255,58,3,.24)`,contain:"layout style paint"});
   const distance=spark?rand(40,88):isRing?rand(48,155):rand(35,135);
   const dx=Math.cos(angle)*distance;
   const dy=Math.sin(angle)*distance+(spark?rand(8,24):isRing?rand(10,36):rand(14,46));
   const driftX=rand(-3,3),driftY=rand(-4,16);
   const duration=spark?rand(9000,13000):isRing?rand(10000,16000):rand(11000,17000);
   const alpha=spark?rand(.84,1):rand(.46,.92);
   const scaleEnd=spark?rand(.22,.38):rand(.30,.55);
   const animation=el.animate([
    {transform:"translate3d(0,0,0) scale(.45)",opacity:0},
    {transform:`translate3d(${dx*.08}px,${dy*.08}px,0) scale(${spark?1.04:1})`,opacity:0},
    {transform:`translate3d(${dx*.10}px,${dy*.10}px,0) scale(${spark?1.12:1})`,opacity:alpha,offset:spark?.12:.12},
    {transform:`translate3d(${dx*.38+driftX*.18}px,${dy*.38+driftY*.16}px,0) scale(${spark?.92:.80})`,opacity:spark?alpha*.92:alpha*.74,offset:spark?.38:.52},
    {transform:`translate3d(${dx*.70+driftX*.45}px,${dy*.70+driftY*.60}px,0) scale(${Math.max(scaleEnd,spark?.54:.38)})`,opacity:spark?alpha*.58:alpha*.34,offset:spark?.68:.82},
    {transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.975},
    {transform:`translate3d(${dx+driftX*1.05}px,${dy+driftY+rand(4,10)}px,0) scale(.08)`,opacity:0}
   ],{duration,easing:spark?"cubic-bezier(.28,.58,.38,1)":"linear",fill:"both",iterations:1});
   layer.appendChild(el);
   const ember:Ember={el,animation,ring:isRing,duration,spark};
   embers.push(ember);
   if(initialPhase>0)animation.currentTime=Math.min(initialPhase,duration-1);
   animation.onfinish=()=>{if(stopped)return;el.remove();const i=embers.indexOf(ember);if(i>=0)embers.splice(i,1);onFinish?.();};
  };

  const ringPoint=(spark=false,forcedSide?:"left"|"right",initialPhase=0,onFinish?:()=>void)=>{
   const rr=ring.getBoundingClientRect(),hr=hero.getBoundingClientRect();
   let angle=(ringIndex++%TARGET_RING_PARTICLES)*(Math.PI*2/TARGET_RING_PARTICLES)+rand(-.018,.018);
   if(forcedSide){const left=angle>Math.PI/2&&angle<Math.PI*1.5;if((forcedSide==="left")!==left)angle+=Math.PI;}
   const radius=Math.min(rr.width,rr.height)*.515;
   make(rr.left+rr.width/2+Math.cos(angle)*radius-hr.left,rr.top+rr.height/2+Math.sin(angle)*radius-hr.top,angle+rand(-.12,.12),true,spark,initialPhase,onFinish);
  };

  const maintainRingOne=()=>{if(!stopped)ringPoint(false,undefined,0,maintainRingOne)};
  for(let i=0;i<TARGET_RING_PARTICLES;i++)ringPoint(false,undefined,rand(0,12000),maintainRingOne);

  const sparkBurst=()=>{const count=Math.floor(rand(20,31));for(let i=0;i<count;i++){const side=sparkSide;ringPoint(true,side);sparkSide=side==="right"?"left":"right";}};
  const seedAmbient=()=>{const w=hero.clientWidth,h=hero.clientHeight;for(let i=0;i<120;i++){const x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);if(y>h*.60&&Math.random()<.64)continue;make(x,y,rand(-Math.PI*.10,Math.PI*.10),false,false,rand(0,12000));}};
  seedAmbient();
  sparkBurst();

  let last=performance.now();
  const tick=(now:number)=>{
   if(stopped)return;
   const dt=Math.min(64,Math.max(0,now-last));last=now;
   ambientClock-=dt;sparkClock-=dt;
   if(sparkClock<=0){sparkBurst();sparkClock=rand(1900,2500);}
   if(ambientClock<=0){let made=0;for(let a=0;a<10&&made<2;a++){const w=hero.clientWidth,h=hero.clientHeight,x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);if(y>h*.60&&Math.random()<.64)continue;make(x,y,rand(-Math.PI*.10,Math.PI*.10),false);made++;}ambientClock=rand(150,260);}
   raf=requestAnimationFrame(tick);
  };
  raf=requestAnimationFrame(tick);

  return()=>{stopped=true;cancelAnimationFrame(raf);for(const e of embers)e.animation.cancel();layer.remove();};
 },[]);
 return null;
}
