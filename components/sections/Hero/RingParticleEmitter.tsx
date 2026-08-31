"use client";
import { useLayoutEffect } from "react";

type Kind="ambient"|"ring";
type Ember={el:HTMLSpanElement;animation:Animation;maxLife:number};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
const sizeProfile=()=>{const r=Math.random();if(r<.055)return rand(1.3,1.9);if(r<.26)return rand(2.2,3.2);if(r<.52)return rand(3.2,4.5);if(r<.78)return rand(4.5,5.9);if(r<.95)return rand(5.9,7.3);return rand(7.6,10)};

export default function RingParticleEmitter(){
 useLayoutEffect(()=>{
  const scene=document.querySelector<HTMLElement>(".hero-depth-scene"),ring=document.querySelector<HTMLElement>(".hero-ring-heat");if(!scene||!ring)return;
  const layer=document.createElement("div");layer.className="hero-ring-particle-emitter";scene.appendChild(layer);
  const embers:Ember[]=[],maxParticles=900;let spawnTimer=0,raf=0,stopped=false;
  const createAnimation=(el:HTMLSpanElement,kind:Kind,x:number,y:number,angle:number,size:number,depth:number,initial:boolean,releaseHold:number)=>{
   const maxLife=kind==="ambient"?rand(15000,22000):rand(13000,19000),distance=kind==="ambient"?rand(24,90):rand(30,125),outward=kind==="ambient"?rand(.28,.68):rand(.32,.72),drift=rand(4,12),down=rand(2,8),sway=rand(6,17),phase=rand(0,Math.PI*2),speed=rand(.32,.52),dx=Math.cos(angle)*distance*outward,dy=Math.sin(angle)*distance*outward+down,frames=[] as Keyframe[];
   const hold=initial&&kind==="ring"?releaseHold:0,holdRatio=hold/(maxLife/speed+hold),baseAlpha=rand(.68,.94);
   for(let i=0;i<=12;i++){const raw=i/12,t=holdRatio>0&&raw<holdRatio?0:(raw-holdRatio)/Math.max(.0001,1-holdRatio),eased=1-Math.pow(1-t,1.45),sx=Math.sin(phase+t*Math.PI*rand(.8,1.5))*sway*(1-t*.25),sy=Math.cos(phase*.73+t*Math.PI)*drift*(1-t*.2),opacity=raw<holdRatio?(baseAlpha*.88):(t<.06?Math.max(baseAlpha,t/.06):t>.9?(1-t)/.1:1),scale=.82+(1-t)*.34;frames.push({transform:`translate3d(${x+dx*eased+sx}px,${y+dy*eased+sy}px,0) scale(${scale})`,opacity:(opacity*depth).toFixed(3),offset:raw});}
   const duration=maxLife/speed+hold,animation=el.animate(frames,{duration,delay:0,easing:"linear",fill:"both"});
   if(kind==="ambient")animation.currentTime=rand(duration*.08,duration*.72);
   animation.onfinish=()=>{if(stopped)return;el.remove();const i=embers.findIndex(p=>p.el===el);if(i>=0)embers.splice(i,1)};return {animation,maxLife};
  };
  const makeParticle=(kind:Kind,x:number,y:number,angle:number,initial=false,releaseHold=0)=>{if(embers.length>=maxParticles)return;const size=sizeProfile(),depth=rand(.34,1),el=document.createElement("span");el.className="hero-ring-particle";el.style.width=`${size}px`;el.style.height=`${size}px`;el.style.left="0";el.style.top="0";el.style.opacity="0";el.style.setProperty("--particle-depth",depth.toFixed(2));el.style.setProperty("--particle-kind",kind);layer.appendChild(el);const {animation,maxLife}=createAnimation(el,kind,x,y,angle,size,depth,initial,releaseHold);embers.push({el,animation,maxLife});};
  const sr=scene.getBoundingClientRect();
  for(let i=300;i--;)makeParticle("ambient",rand(18,sr.width-18),rand(18,sr.height-18),rand(0,Math.PI*2));
  const seedRing=()=>{const r=ring.getBoundingClientRect(),s=scene.getBoundingClientRect(),a=rand(0,Math.PI*2),rad=Math.min(r.width,r.height)*rand(.488,.502);makeParticle("ring",r.left-s.left+r.width/2+Math.cos(a)*rad,r.top-s.top+r.height/2+Math.sin(a)*rad,a,true,rand(250,1800));};
  for(let i=648;i--;)seedRing();
  const tick=()=>{if(stopped)return;spawnTimer-=16;if(spawnTimer<=0){const count=Math.random()<.5?1:2;for(let i=0;i<count;i++)seedRing();spawnTimer=rand(95,150)}raf=requestAnimationFrame(tick)};
  raf=requestAnimationFrame(tick);return()=>{stopped=true;cancelAnimationFrame(raf);for(const p of embers)p.animation.cancel();layer.remove()};
 },[]);return null;
}
