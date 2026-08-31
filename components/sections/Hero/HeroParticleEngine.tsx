"use client";
import { useLayoutEffect } from "react";

type Ember={el:HTMLSpanElement;animation:Animation;ring:boolean};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
function sizeProfile(ring:boolean){const r=Math.random();if(r<.035)return rand(1.4,2.1);if(r<.20)return rand(2.3,3.4);if(r<.46)return rand(3.4,4.8);if(r<.70)return rand(4.8,6.2);if(r<.94)return rand(6.2,7.8);if(r<.985)return rand(8,10.5);return ring?rand(10.5,13):rand(9,11)}

export default function HeroParticleEngine(){useLayoutEffect(()=>{
 const scene=document.querySelector<HTMLElement>(".hero-depth-scene");
 const ring=document.querySelector<HTMLElement>(".hero-orbit-one");
 const layer=document.createElement("div");
 layer.className="hero-live-embers";
 Object.assign(layer.style,{position:"fixed",inset:"0",overflow:"visible",pointerEvents:"none",zIndex:"2",isolation:"isolate"});
 document.body.appendChild(layer);
 const heat=document.createElement("div");
 heat.className="hero-live-heat";
 Object.assign(heat.style,{position:"fixed",width:"0px",height:"0px",borderRadius:"50%",pointerEvents:"none",zIndex:"1",background:"radial-gradient(circle,rgba(255,128,20,.17) 0%,rgba(255,82,8,.09) 30%,rgba(255,55,0,.035) 54%,transparent 72%)",filter:"blur(3px)",transform:"translate(-50%,-50%)",opacity:"0"});
 document.body.appendChild(heat);
 const embers:Ember[]=[];let stopped=false,raf=0;
 const make=(x:number,y:number,angle:number,isRing=false,initial=false)=>{
  if(embers.length>=430)return;
  const size=sizeProfile(isRing),el=document.createElement("span");el.className="hero-live-ember";
  Object.assign(el.style,{position:"absolute",left:`${x}px`,top:`${y}px`,width:`${size}px`,height:`${size}px`,borderRadius:"50%",opacity:"0",background:"radial-gradient(circle,rgba(255,224,145,.98) 0%,rgba(255,145,34,.76) 45%,rgba(255,75,8,0) 100%)",boxShadow:`0 0 ${Math.max(4,size*2.6)}px rgba(255,126,22,.30)`,willChange:"transform,opacity"});
  const distance=isRing?rand(48,155):rand(35,135),dx=Math.cos(angle)*distance,dy=Math.sin(angle)*distance+(isRing?rand(8,32):rand(12,48)),driftX=rand(-38,38),driftY=rand(-8,30),duration=initial?rand(18000,28000):rand(14500,23000),alpha=rand(.34,.80),scaleEnd=rand(.32,.56);
  const animation=el.animate([{transform:"translate3d(0,0,0) scale(.72)",opacity:0},{transform:`translate3d(${dx*.18}px,${dy*.18}px,0) scale(1)`,opacity:alpha,offset:.12},{transform:`translate3d(${dx*.55+driftX*.32}px,${dy*.55+driftY*.25}px,0) scale(.78)`,opacity:alpha*.72,offset:.56},{transform:`translate3d(${dx+driftX}px,${dy+driftY}px,0) scale(${scaleEnd})`,opacity:0,offset:.94},{transform:`translate3d(${dx+driftX*1.15}px,${dy+driftY+rand(8,22)}px,0) scale(.18)`,opacity:0}],{duration,easing:"linear",fill:"both"});
  layer.appendChild(el);embers.push({el,animation,ring:isRing});animation.onfinish=()=>{el.remove();const i=embers.findIndex(p=>p.el===el);if(i>=0)embers.splice(i,1)};
 };
 const seedAmbient=()=>{const r=scene?.getBoundingClientRect()??{width:innerWidth,height:innerHeight};for(let i=0;i<150;i++){const x=rand(r.width*.10,r.width*.90),y=rand(r.height*.08,r.height*.78);if(y>r.height*.58&&Math.random()<.68)continue;make(x,y,rand(-Math.PI*.18,Math.PI*.18),false,true)}};
 const ringPoint=()=>{if(!ring)return;const rr=ring.getBoundingClientRect(),a=rand(0,Math.PI*2),radius=Math.min(rr.width,rr.height)*rand(.50,.525);make(rr.left+rr.width/2+Math.cos(a)*radius,rr.top+rr.height/2+Math.sin(a)*radius,a+rand(-.28,.28),true)};
 const updateHeat=()=>{if(!ring){heat.style.opacity="0";return}const rr=ring.getBoundingClientRect();heat.style.left=`${rr.left+rr.width/2}px`;heat.style.top=`${rr.top+rr.height/2}px`;heat.style.width=`${Math.max(rr.width,rr.height)*1.75}px`;heat.style.height=heat.style.width;heat.style.opacity="1"};
 seedAmbient();for(let i=0;i<92;i++)ringPoint();
 const tick=()=>{if(stopped)return;updateHeat();const activeRing=embers.reduce((n,e)=>n+(e.ring?1:0),0),activeAmbient=embers.length-activeRing;
  if(ring&&activeRing<92){const count=activeRing<72?(Math.random()<.55?2:3):1;for(let i=0;i<count;i++)ringPoint()}
  if(activeAmbient<135){const count=activeAmbient<105?2:1;const r=scene?.getBoundingClientRect()??{width:innerWidth,height:innerHeight};for(let i=0;i<count;i++){const x=rand(r.width*.10,r.width*.90),y=rand(r.height*.08,r.height*.78);if(y>r.height*.58&&Math.random()<.68)continue;make(x,y,rand(-Math.PI*.18,Math.PI*.18),true)}}
  raf=requestAnimationFrame(tick)};
 raf=requestAnimationFrame(tick);
 return()=>{stopped=true;cancelAnimationFrame(raf);for(const e of embers)e.animation.cancel();layer.remove();heat.remove()}
 },[]);return null}
