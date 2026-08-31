"use client";

import { useLayoutEffect } from "react";

type Ember = { el: HTMLSpanElement; animation: Animation };
const rand = (a: number, b: number) => Math.random() * (b - a) + a;

function sizeProfile() {
  const r = Math.random();
  if (r < 0.05) return rand(1.3, 1.9);
  if (r < 0.27) return rand(2.2, 3.2);
  if (r < 0.52) return rand(3.2, 4.6);
  if (r < 0.77) return rand(4.6, 5.9);
  if (r < 0.95) return rand(5.9, 7.4);
  return rand(7.5, 10);
}

export default function HeroParticleEngine() {
  useLayoutEffect(() => {
    const scene = document.querySelector<HTMLElement>(".hero-depth-scene");
    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    if (!scene || !ring) return;

    const layer = document.createElement("div");
    layer.className = "hero-live-embers";
    Object.assign(layer.style, {
      position: "absolute",
      inset: "0",
      overflow: "visible",
      pointerEvents: "none",
      zIndex: "2",
      isolation: "isolate",
    });
    scene.appendChild(layer);

    const embers: Ember[] = [];
    let stopped = false;
    let spawnTimer = 0;
    let raf = 0;

    const make = (x: number, y: number, angle: number, initial = false) => {
      if (embers.length >= 620) return;
      const size = sizeProfile();
      const el = document.createElement("span");
      el.className = "hero-live-ember";
      Object.assign(el.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        opacity: "0",
        background: "radial-gradient(circle,rgba(255,214,125,.98) 0%,rgba(255,135,30,.72) 46%,rgba(255,82,8,0) 100%)",
        boxShadow: `0 0 ${Math.max(4, size * 2.4)}px rgba(255,126,22,.34)`,
        willChange: "transform,opacity",
      });

      const distance = rand(38, 150);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance + rand(5, 24);
      const driftX = rand(-24, 24);
      const driftY = rand(-10, 18);
      const duration = initial ? rand(12500, 21000) : rand(10500, 17500);
      const delay = initial ? rand(0, 900) : 0;
      const alpha = rand(.45, .9);

      const animation = el.animate([
        { transform: "translate3d(0,0,0) scale(.78)", opacity: 0 },
        { transform: `translate3d(${dx * .22}px,${dy * .22}px,0) scale(1)`, opacity: alpha, offset: .16 },
        { transform: `translate3d(${dx * .62 + driftX * .35}px,${dy * .62 + driftY * .35}px,0) scale(.94)`, opacity: alpha * .78, offset: .58 },
        { transform: `translate3d(${dx + driftX}px,${dy + driftY}px,0) scale(.62)`, opacity: 0 },
      ], { duration, delay, easing: "ease-out", fill: "both" });

      layer.appendChild(el);
      embers.push({ el, animation });
      animation.onfinish = () => {
        el.remove();
        const i = embers.findIndex((p) => p.el === el);
        if (i >= 0) embers.splice(i, 1);
      };
    };

    const seedAmbient = () => {
      const rect = scene.getBoundingClientRect();
      for (let i = 0; i < 240; i++) {
        make(rand(12, rect.width - 12), rand(12, rect.height - 12), rand(0, Math.PI * 2), true);
      }
    };

    const seedRing = () => {
      const rr = ring.getBoundingClientRect();
      const sr = scene.getBoundingClientRect();
      const a = rand(0, Math.PI * 2);
      const radius = Math.min(rr.width, rr.height) * rand(.486, .505);
      make(
        rr.left - sr.left + rr.width / 2 + Math.cos(a) * radius,
        rr.top - sr.top + rr.height / 2 + Math.sin(a) * radius,
        a,
      );
    };

    seedAmbient();
    for (let i = 180; i > 0; i--) seedRing();

    const tick = () => {
      if (stopped) return;
      spawnTimer -= 16;
      if (spawnTimer <= 0) {
        const count = Math.random() < .72 ? 2 : 3;
        for (let i = 0; i < count; i++) seedRing();
        spawnTimer = rand(100, 170);
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
