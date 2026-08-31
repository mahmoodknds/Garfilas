"use client";

import { useEffect } from "react";

type Ember = {
  el: HTMLSpanElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  drift: number;
  phase: number;
  opacity: number;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export default function RingParticleEmitter() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".hero-depth-scene");
    const ring = document.querySelector<HTMLElement>(".hero-ring-heat");
    if (!scene || !ring) return;

    const layer = document.createElement("div");
    layer.className = "hero-ring-particle-emitter";
    scene.appendChild(layer);

    const embers: Ember[] = [];
    const maxParticles = 170;
    let last = performance.now();
    let spawnAccumulator = 0;
    let raf = 0;
    let stopped = false;

    const spawn = (warm = false) => {
      if (embers.length >= maxParticles) return;

      const rr = ring.getBoundingClientRect();
      const sr = scene.getBoundingClientRect();
      const cx = rr.left - sr.left + rr.width / 2;
      const cy = rr.top - sr.top + rr.height / 2;
      const radius = Math.min(rr.width, rr.height) * rand(0.485, 0.515);
      const angle = rand(0, Math.PI * 2);
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      const size = rand(1.2, warm ? 4.2 : 3.5);
      const outward = rand(3, 10);
      const tangent = rand(-5.5, 5.5);
      const gravity = rand(3.5, 8.5);
      const depth = rand(0.35, 1);
      const speed = warm ? rand(0.75, 1.35) : rand(0.45, 1.05);

      const el = document.createElement("span");
      el.className = "hero-ring-particle";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.opacity = "0";
      el.style.setProperty("--particle-depth", depth.toFixed(2));
      layer.appendChild(el);

      embers.push({
        el,
        x,
        y,
        vx: (Math.cos(angle) * outward + Math.cos(angle + Math.PI / 2) * tangent) * speed,
        vy: (Math.sin(angle) * outward + Math.sin(angle + Math.PI / 2) * tangent) * speed + gravity * 0.08,
        life: warm ? rand(0, 900) : 0,
        maxLife: rand(2200, 5200),
        size,
        drift: rand(0.7, 2.2),
        phase: rand(0, Math.PI * 2),
        opacity: rand(0.34, 0.9) * depth,
      });
    };

    for (let i = 0; i < 72; i++) spawn(true);

    const tick = (now: number) => {
      if (stopped) return;
      const dt = Math.min(34, now - last);
      last = now;
      spawnAccumulator += dt;

      while (spawnAccumulator >= 105) {
        spawnAccumulator -= 105;
        const amount = Math.random() < 0.34 ? 2 : 1;
        for (let i = 0; i < amount; i++) spawn();
      }

      const seconds = now / 1000;
      for (let i = embers.length - 1; i >= 0; i--) {
        const p = embers[i];
        p.life += dt;
        const t = p.life / p.maxLife;
        if (t >= 1) {
          p.el.remove();
          embers.splice(i, 1);
          continue;
        }

        const swayX = Math.sin(seconds * p.drift + p.phase) * 0.38;
        const swayY = Math.cos(seconds * (p.drift * 0.73) + p.phase) * 0.18;
        p.vy += 0.0024 * dt;
        p.vx += swayX * 0.006 * dt;
        p.vy += swayY * 0.003 * dt;
        p.vx *= 0.9992;
        p.vy *= 0.9994;
        p.x += p.vx * dt * 0.035;
        p.y += p.vy * dt * 0.035;

        const fadeIn = Math.min(1, p.life / 180);
        const fadeOut = Math.min(1, (1 - t) / 0.22);
        const pulse = 0.78 + Math.sin(seconds * rand(1.5, 3.5) + p.phase) * 0.22;
        const alpha = p.opacity * fadeIn * fadeOut * pulse;
        const scale = 0.72 + (1 - t) * 0.32;
        p.el.style.transform = `translate3d(${p.x}px,${p.y}px,0) scale(${scale})`;
        p.el.style.opacity = alpha.toFixed(3);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onResize = () => {
      for (const p of embers) p.life = Math.min(p.life, p.maxLife - 50);
    };
    window.addEventListener("resize", onResize);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      layer.remove();
    };
  }, []);

  return null;
}
