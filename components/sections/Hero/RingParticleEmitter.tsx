"use client";

import { useEffect } from "react";

type Kind="ambient"|"ring";
type Ember={el:HTMLSpanElement;x:number;y:number;vx:number;vy:number;life:number;maxLife:number;size:number;drift:number;phase:number;opacity:number;kind:Kind;exit:"edge"|"fade";releaseAt:number;released:boolean};
const rand=(a:number,b:number)=>Math.random()*(b-a)+a;
const sizeProfile=()=>{const r=Math.random();if(r<.55)return rand(1,2);if(r<.84)return rand(2,3.5);if(r<.97)return rand(3.5,5.5);return rand(5.5,8);};

export default function RingParticleEmitter(){
 useEffect(()=>{
  const scene=document.querySelector<HTMLElement>(".hero-depth-scene"),ring=document.querySelector<HTMLElement>(".hero-ring-heat");if(!scene||!ring)return;
  const layer=document.createElement("div");layer.className="hero-ring-particle-emitter";scene.appendChild(layer);
  const embers:Ember[]=[];const maxParticles=360;let last=performance.now(),nextBirth=rand(80,150),raf=0,stopped=false;
  const makeParticle=(kind:Kind,x:number,y:number,angle:number,initial=false,releaseAt=0)=>{
   if(embers.length>=maxParticles)return;
   const size=sizeProfile(),depth=rand(.34,1),outward=rand(1.5,5.8),tangent=rand(-6.5,6.5),speed=rand(.42,1.0),gravity=rand(2.5,6.5);
   const el=document.createElement("span");el.className="hero-ring-particle";el.style.width=`${size}px`;el.style.height=`${size}px`;el.style.opacity="0";el.style.setProperty("--particle-depth",depth.toFixed(2));el.style.setProperty("--particle-kind",kind);layer.appendChild(el);
   embers.push({el,x,y,vx:initial?0:(Math.cos(angle)*outward+Math.cos(angle+Math.PI/2)*tangent)*speed,vy:initial?0:(Math.sin(angle)*outward+Math.sin(angle+Math.PI/2)*tangent)*speed+gravity*.08,life:0,maxLife:rand(1900,4100),size,drift:rand(.65,2.05),phase:rand(0,Math.PI*2),opacity:rand(.3,.82)*depth,kind,exit:Math.random()<.72?"edge":"fade",releaseAt,released:!initial});
  };
  const rr=ring.getBoundingClientRect(),sr=scene.getBoundingClientRect();
  for(let i=0;i<130;i++){const x=rand(18,sr.width-18),y=rand(18,sr.height-18),angle=rand(0,Math.PI*2);makeParticle("ambient",x,y,angle,false);}
  const cx=rr.left-sr.left+rr.width/2,cy=rr.top-sr.top+rr.height/2,radius=Math.min(rr.width,rr.height)*rand(.488,.502);
  for(let i=0;i<216;i++){const angle=rand(0,Math.PI*2),x=cx+Math.cos(angle)*radius,y=cy+Math.sin(angle)*radius;makeParticle("ring",x,y,angle,true,rand(250,2400));}
  const tick=(now:number)=>{
   if(stopped)return;const dt=Math.min(34,now-last);last=now;nextBirth-=dt;
   if(nextBirth<=0){makeParticleAtRing();nextBirth=rand(80,150);}
   const seconds=now/1000,rect=scene.getBoundingClientRect(),width=rect.width,height=rect.height;
   for(let i=embers.length-1;i>=0;i--){const p=embers[i];
    if(p.kind==="ring"&&!p.released){p.releaseAt-=dt;if(p.releaseAt>0){const pulse=.7+Math.sin(seconds*p.drift+p.phase)*.08;p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) scale(${.72*pulse})`;p.el.style.opacity=(p.opacity*.42).toFixed(3);continue;}p.released=true;p.el.style.opacity="0";const a=Math.atan2(p.y-(rect.top+height/2-rect.top),p.x-(rect.left+width/2-rect.left)),outward=rand(1.5,5.8),tangent=rand(-6.5,6.5),speed=rand(.42,1),gravity=rand(2.5,6.5);p.vx=(Math.cos(a)*outward+Math.cos(a+Math.PI/2)*tangent)*speed;p.vy=(Math.sin(a)*outward+Math.sin(a+Math.PI/2)*tangent)*speed+gravity*.08;p.life=0;}
    if(!p.released)continue;p.life+=dt;const t=p.life/p.maxLife,swayX=Math.sin(seconds*p.drift+p.phase)*.34,swayY=Math.cos(seconds*p.drift*.71+p.phase*1.17)*.14;p.vy+=.0022*dt;p.vx+=swayX*.0055*dt;p.vy+=swayY*.0025*dt;p.vx*=.9991;p.vy*=.99935;p.x+=p.vx*dt*.035;p.y+=p.vy*dt*.035;
    const outside=p.x<-24||p.x>width+24||p.y<-24||p.y>height+24;if(outside||(p.exit==="fade"&&t>=.82)||t>=1){p.el.remove();embers.splice(i,1);continue;}
    const fadeIn=p.kind==="ambient"?Math.min(1,p.life/180):Math.min(1,p.life/220),fadeOut=p.exit==="fade"?Math.min(1,(1-t)/.16):Math.min(1,(1-t)/.1),pulse=.82+Math.sin(seconds*p.drift*1.9+p.phase)*.18,alpha=p.opacity*fadeIn*fadeOut*pulse,scale=.7+(1-t)*.34;p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) scale(${scale})`;p.el.style.opacity=alpha.toFixed(3);
   }raf=requestAnimationFrame(tick);
  };
  const makeParticleAtRing=()=>{const r=ring.getBoundingClientRect(),s=scene.getBoundingClientRect(),a=rand(0,Math.PI*2),rad=Math.min(r.width,r.height)*rand(.488,.502);makeParticle("ring",r.left-s.left+r.width/2+Math.cos(a)*rad,r.top-s.top+r.height/2+Math.sin(a)*rad,a,false);};
  raf=requestAnimationFrame(tick);return()=>{stopped=true;cancelAnimationFrame(raf);layer.remove()};
 },[]);return null;
}
