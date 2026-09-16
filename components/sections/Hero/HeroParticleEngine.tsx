"use client";
import { useEffect } from "react";

type Ember={el:HTMLSpanElement;animation:Animation;ring:boolean;duration:number;spark:boolean};
type Release={x:number;y:number;dx:number;dy:number;size:number;alpha:number;start:number;duration:number};
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

  ring.style.zIndex="6";
  ring.style.pointerEvents="none";
  mascot.style.zIndex="5";
  mascot.style.pointerEvents="none";

  const releaseCanvas=document.createElement("canvas");
  Object.assign(releaseCanvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"});
  layer.appendChild(releaseCanvas);
  const ctx=releaseCanvas.getContext("2d");
  const releases:Release[]=[];
  const resizeCanvas=()=>{
   const dpr=Math.min(2,window.devicePixelRatio||1);
   releaseCanvas.width=Math.max(1,Math.round(hero.clientWidth*dpr));
   releaseCanvas.height=Math.max(1,Math.round(hero.clientHeight*dpr));
   ctx?.setTransform(dpr,0,0,dpr,0,0);
  };
  resizeCanvas();
  const ro=new ResizeObserver(resizeCanvas);
  ro.observe(hero);

  const embers:Ember[]=[];
  const TARGET_RING_PARTICLES=132;
  const MAX_PARTICLES=680;
  const BREATH_MS=6000;
  let stopped=false;
  let raf=0;
  let ambientClock=rand(90,150);
  let sparkClock=rand(1200,1600);
  let breathClock=BREATH_MS;
  let ringIndex=0;

  const removeEmber=(ember:Ember)=>{
   ember.animation.cancel();
   ember.el.remove();
   const i=embers.indexOf(ember);
   if(i>=0)embers.splice(i,1);
  };

  const make=(x:number,y:number,angle:number,isRing=false,spark=false,initialPhase=0,onFinish?:()=>void)=>{
   if(embers.length>=MAX_PARTICLES)return;
   const size=spark?rand(3.0,5.8):sizeProfile(isRing);
   const el=document.createElement("span");
   el.className=spark?"hero-live-ember hero-live-spark":"hero-live-ember";
   Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:spark?"radial-gradient(circle,rgba(255,252,220,1) 0%,rgba(255,191,70,.98) 34%,rgba(255,91,8,.78) 62%,rgba(255,50,0,0) 100%)":"radial-gradient(circle,rgba(255,231,174,1) 0%,rgba(255,139,24,.9) 40%,rgba(255,61,4,0) 100%)",boxShadow:spark?`0 0 ${Math.max(10,size*5)}px rgba(255,210,90,.9),0 0 ${Math.max(20,size*7)}px rgba(255,95,8,.45)`:`0 0 ${Math.max(6,size*3.2)}px rgba(255,116,15,.52),0 0 ${Math.max(10,size*5.2)}px rgba(255,58,3,.24)`,contain:"layout style paint"});
   const distance=spark?rand(38,76):initialPhase>0&&isRing?rand(48,118):isRing?rand(48,155):rand(35,135);
   const dx=Math.cos(angle)*distance;
   const dy=Math.sin(angle)*distance;
   const driftX=rand(-3,3),driftY=rand(-3,3);
   const duration=spark?rand(7000,10500):isRing?rand(10000,16000):rand(11000,17000);
   const alpha=spark?rand(.78,.96):rand(.46,.92);
   const scaleEnd=spark?rand(.22,.38):rand(.30,.55);
   const animation=el.animate([
    {transform:"translate3d(0,0,0) scale(.45)",opacity:0},
    {transform:`translate3d(${dx*.08}px,${dy*.08}px,0) scale(${spark?1.02:1})`,opacity:0},
    {transform:`translate3d(${dx*.10}px,${dy*.10}px,0) scale(${spark?1.08:1})`,opacity:alpha,offset:spark?.12:.12},
    {transform:`translate3d(${dx*.38+driftX*.18}px,${dy*.38+driftY*.16}px,0) scale(${spark?.92:.80})`,opacity:spark?alpha*.92:alpha*.74,offset:spark?.38:.52},
    {transform:`translate3d(${dx*.70+driftX*.45}px,${dy*.70+driftY*.60}px,0) scale(${Math.max(scaleEnd,spark?.54:.38)})`,opacity:spark?alpha*.58:alpha*.34,offset:spark?.68:.82},
    {transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.975},
    {transform:`translate3d(${dx+driftX*1.05}px,${dy+driftY}px,0) scale(.08)`,opacity:0}
   ],{duration,easing:spark?"cubic-bezier(.28,.58,.38,1)":"linear",fill:"both",iterations:1});
   layer.appendChild(el);
   const ember:Ember={el,animation,ring:isRing,duration,spark};
   embers.push(ember);
   if(initialPhase>0)animation.currentTime=Math.min(initialPhase,duration-1);
   animation.onfinish=()=>{
    if(stopped)return;
    el.remove();
    const i=embers.indexOf(ember);
    if(i>=0)embers.splice(i,1);
    onFinish?.();
   };
  };

  const ringPoint=(spark=false,initialPhase=0,onFinish?:()=>void)=>{
   const rr=ring.getBoundingClientRect(),hr=hero.getBoundingClientRect();
   const angle=(ringIndex++%TARGET_RING_PARTICLES)*(Math.PI*2/TARGET_RING_PARTICLES)+rand(-.018,.018);
   const radius=Math.min(rr.width,rr.height)*.515;
   make(rr.left+rr.width/2+Math.cos(angle)*radius-hr.left,rr.top+rr.height/2+Math.sin(angle)*radius-hr.top,angle+rand(-.08,.08),true,spark,initialPhase,onFinish);
  };

  const maintainRingOne=()=>{if(!stopped)ringPoint(false,0,maintainRingOne)};
  for(let i=0;i<TARGET_RING_PARTICLES;i++)ringPoint(false,rand(0,12000),maintainRingOne);

  const sparkBurst=()=>{
   const count=Math.floor(rand(10,15));
   const start=ringIndex;
   for(let i=0;i<count;i++){
    ringIndex=start+i*(TARGET_RING_PARTICLES/count);
    ringPoint(true);
   }
  };

  const seedAmbient=()=>{
   const w=hero.clientWidth,h=hero.clientHeight;
   for(let i=0;i<120;i++){
    const x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);
    if(y>h*.60&&Math.random()<.64)continue;
    make(x,y,rand(-Math.PI*.10,Math.PI*.10),false,false,rand(0,12000));
   }
  };

  const createReleaseRing=()=>{
   if(stopped)return;
   const rr=ring.getBoundingClientRect(),hr=hero.getBoundingClientRect();
   const radius=Math.min(rr.width,rr.height)*.515;
   const now=performance.now();
   for(let i=0;i<TARGET_RING_PARTICLES;i++){
    const angle=(i/TARGET_RING_PARTICLES)*Math.PI*2+rand(-.012,.012);
    const x=rr.left+rr.width/2+Math.cos(angle)*radius-hr.left;
    const y=rr.top+rr.height/2+Math.sin(angle)*radius-hr.top;
    const size=sizeProfile(true)*.72;
    releases.push({x,y,dx:Math.cos(angle)*rand(58,96),dy:Math.sin(angle)*rand(58,96),size,alpha:rand(.40,.68),start:now+rand(0,220),duration:rand(2400,3100)});
   }

   embers.filter(e=>e.ring).forEach(removeEmber);
   ringIndex=0;
   for(let i=0;i<TARGET_RING_PARTICLES;i++)ringPoint(false,rand(500,900),maintainRingOne);
  };

  seedAmbient();
  sparkBurst();

  let last=performance.now();
  const tick=(now:number)=>{
   if(stopped)return;
   const dt=Math.min(64,Math.max(0,now-last));
   last=now;
   ambientClock-=dt;
   sparkClock-=dt;
   breathClock-=dt;

   if(ctx){
    ctx.clearRect(0,0,hero.clientWidth,hero.clientHeight);
    for(let i=releases.length-1;i>=0;i--){
     const p=releases[i];
     const t=(now-p.start)/p.duration;
     if(t<0)continue;
     if(t>=1){releases.splice(i,1);continue;}
     const ease=1-Math.pow(1-t,2.15);
     const x=p.x+p.dx*ease;
     const y=p.y+p.dy*ease;
     const alpha=p.alpha*(1-t)*(1-t);
     const radius=p.size*(1-.72*t);
     ctx.beginPath();
     ctx.fillStyle=`rgba(255,145,32,${alpha})`;
     ctx.shadowColor="rgba(255,91,0,.62)";
     ctx.shadowBlur=Math.max(3,radius*2.5);
     ctx.arc(x,y,Math.max(.35,radius),0,Math.PI*2);
     ctx.fill();
    }
    ctx.shadowBlur=0;
   }

   if(breathClock<=0){
    createReleaseRing();
    breathClock=BREATH_MS;
   }
   if(sparkClock<=0){
    sparkBurst();
    sparkClock=rand(2100,2800);
   }
   if(ambientClock<=0){
    let made=0;
    for(let a=0;a<10&&made<2;a++){
     const w=hero.clientWidth,h=hero.clientHeight,x=rand(w*.08,w*.92),y=rand(h*.08,h*.78);
     if(y>h*.60&&Math.random()<.64)continue;
     make(x,y,rand(-Math.PI*.10,Math.PI*.10),false);
     made++;
    }
    ambientClock=rand(150,260);
   }
   raf=requestAnimationFrame(tick);
  };
  raf=requestAnimationFrame(tick);

  return()=>{
   stopped=true;
   cancelAnimationFrame(raf);
   ro.disconnect();
   for(const e of embers)e.animation.cancel();
   layer.remove();
  };
 },[]);
 return null;
}
