"use client";

import { useLayoutEffect } from "react";

type Ember = { el: HTMLSpanElement; animation: Animation };
const rand = (a: number, b: number) => Math.random() * (b - a) + a;

function sizeProfile() {
  const r = Math.random();
  if (r < 0.045) return rand(1.4, 2.1);
  if (r < 0.23) return rand(2.3, 3.4);
  if (r < 0.50) return rand(3.4, 4.8);
  if (r < 0.76) return rand(4.8, 6.2);
  if (r < 0.95) return rand(6.2, 7.8);
  return rand(8, 10.5);
}

export default function HeroParticleEngine() {
  useLayoutEffect(() => {
    const scene = document.querySelector<HTMLElement>(".hero-depth-scene");
    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    if (!scene || !ring) return;

    const layer = document.createElement("div");
    layer.className = "hero-live-embers";
    Object.assign(layer.style, {
      position: "absolute", inset: "0", overflow: "visible", pointerEvents: "none",
      zIndex: "2", isolation: "isolate",
    });
    scene.appendChild(layer);

    const embers: Ember[] = [];
    let stopped = false;
    let spawnTimer = rand(40, 140);
    let raf = 0;

    const make = (x: number, y: number, angle: number, initial = false) => {
      if (embers.length >= 360) return;
      const size = sizeProfile();
      const el = document.createElement("span");
      el.className = "hero-live-ember";
      Object.assign(el.style, {
        position: "absolute", left: `${x}px`, top: `${y}px`,
        width: `${size}px`, height: `${size}px`, borderRadius: "50%", opacity: "0",
        background: "radial-gradient(circle,rgba(255,224,145,.98) 0%,rgba(255,145,34,.76) 45%,rgba(255,75,8,0) 100%)",
        boxShadow: `0 0 ${Math.max(4, size * 2.6)}px rgba(255,126,22,.30)`,
        willChange: "transform,opacity",
      });

      const distance = rand(55, 175);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance + rand(8, 34);
      const driftX = rand(-34, 34);
      const driftY = rand(-8, 28);
      const duration = initial ? rand(15000, 24000) : rand(12500, 20500);
      const alpha = rand(.38, .82);
      const scaleEnd = rand(.34, .58);
      const animation = el.animate([
        { transform: "translate3d(0,0,0) scale(.72)", opacity: 0 },
        { transform: `translate3d(${dx * .18}px,${dy * .18}px,0) scale(1)`, opacity: alpha, offset: .12 },
        { transform: `translate3d(${dx * .55 + driftX * .32}px,${dy * .55 + driftY * .25}px,0) scale(.78)`, opacity: alpha * .72, offset: .56 },
        { transform: `translate3d(${dx + driftX}px,${dy + driftY}px,0) scale(${scaleEnd})`, opacity: 0, offset: .94 },
        { transform: `translate3d(${dx + driftX * 1.15}px,${dy + driftY + rand(8,22)}px,0) scale(.18)`, opacity: 0 },
      ], { duration, easing: "linear", fill: "both" });

      layer.appendChild(el);
      embers.push({ el, animation });
      animation.onfinish = () => {
        el.remove();
        const i = embers.findIndex((p) => p.el === el);
        if (i >= 0) embers.splice(i, 1);
      };
    };

    const seedAmbient = () => {
      const r = scene.getBoundingClientRect();
      for (let i = 0; i < 150; i++) {
        const x = rand(r.width * .10, r.width * .90);
        const y = rand(r.height * .12, r.height * .92);
        const angle = rand(-Math.PI * .25, Math.PI * .25);
        make(x, y, angle, true);
      }
    };

    const seedRing = () => {
      const rr = ring.getBoundingClientRect();
      const sr = scene.getBoundingClientRect();
      const a = rand(0, Math.PI * 2);
      const radius = Math.min(rr.width, rr.height) * rand(.50, .525);
      const x = rr.left - sr.left + rr.width / 2 + Math.cos(a) * radius;
      const y = rr.top - sr.top + rr.height / 2 + Math.sin(a) * radius;
      make(x, y, a + rand(-.28, .28));
    };

    seedAmbient();
    for (let i = 0; i < 48; i++) seedRing();

    const tick = () => {
      if (stopped) return;
      spawnTimer -= 16;
      if (spawnTimer <= 0) {
        const count = Math.random() < .68 ? 1 : 2;
        for (let i = 0; i < count; i++) seedRing();
        spawnTimer = rand(130, 230);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      for (const ember of embers) ember.animation.cancel();
      layer.remove();
    };
  }, []);

  return null;
}
