"use client";

import { useEffect } from "react";

type Kind = "ambient" | "ring";

type Ember = {
  el: HTMLSpanElement;
  animation: Animation;
  maxLife: number;
};

const rand = (a: number, b: number) => Math.random() * (b - a) + a;

const sizeProfile = () => {
  const r = Math.random();
  if (r < 0.42) return rand(1.4, 2.4);
  if (r < 0.76) return rand(2.4, 4.2);
  if (r < 0.95) return rand(4.2, 6.5);
  return rand(6.5, 9);
};

export default function RingParticleEmitter() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".hero-depth-scene");
    const ring = document.querySelector<HTMLElement>(".hero-ring-heat");
    if (!scene || !ring) return;

    const layer = document.createElement("div");
    layer.className = "hero-ring-particle-emitter";
    scene.appendChild(layer);

    const embers: Ember[] = [];
    const maxParticles = 720;
    let spawnTimer = 0;
    let raf = 0;
    let last = performance.now();
    let stopped = false;

    const createAnimation = (
      el: HTMLSpanElement,
      kind: Kind,
      x: number,
      y: number,
      angle: number,
      size: number,
      depth: number,
      delay: number,
    ) => {
      const maxLife = kind === "ambient" ? rand(5600, 9200) : rand(5000, 8200);
      const distance = kind === "ambient" ? rand(70, 260) : rand(80, 310);
      const outward = kind === "ambient" ? rand(0.7, 1.5) : rand(0.85, 1.55);
      const drift = rand(14, 38);
      const down = rand(18, 54);
      const sway = rand(18, 48);
      const phase = rand(0, Math.PI * 2);
      const dx = Math.cos(angle) * distance * outward;
      const dy = Math.sin(angle) * distance * outward + down;
      const frames = [];

      for (let i = 0; i <= 8; i++) {
        const t = i / 8;
        const eased = 1 - Math.pow(1 - t, 1.35);
        const sx = Math.sin(phase + t * Math.PI * rand(1.1, 2.2)) * sway * (1 - t * 0.18);
        const sy = Math.cos(phase * 0.73 + t * Math.PI * 1.35) * drift * (1 - t * 0.2);
        const opacity = t < 0.08 ? t / 0.08 : t > 0.78 ? (1 - t) / 0.22 : 1;
        const scale = 0.82 + (1 - t) * 0.34;
        frames.push({
          transform: `translate3d(${x + dx * eased + sx}px,${y + dy * eased + sy}px,0) scale(${scale})`,
          opacity: (opacity * depth * rand(0.72, 0.98)).toFixed(3),
          offset: t,
        });
      }

      const animation = el.animate(frames, {
        duration: maxLife,
        delay,
        easing: "linear",
        fill: "both",
      });
      animation.onfinish = () => {
        if (stopped) return;
        el.remove();
        const index = embers.findIndex((p) => p.el === el);
        if (index !== -1) embers.splice(index, 1);
      };
      return { animation, maxLife };
    };

    const makeParticle = (
      kind: Kind,
      x: number,
      y: number,
      angle: number,
      delay = 0,
    ) => {
      if (embers.length >= maxParticles) return;

      const size = sizeProfile();
      const depth = rand(0.34, 1);
      const el = document.createElement("span");
      el.className = "hero-ring-particle";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = "0";
      el.style.top = "0";
      el.style.opacity = "0";
      el.style.setProperty("--particle-depth", depth.toFixed(2));
      el.style.setProperty("--particle-kind", kind);
      layer.appendChild(el);

      const { animation, maxLife } = createAnimation(el, kind, x, y, angle, size, depth, delay);
      embers.push({ el, animation, maxLife });
    };

    const sceneRect = scene.getBoundingClientRect();
    for (let i = 0; i < 190; i++) {
      makeParticle(
        "ambient",
        rand(18, sceneRect.width - 18),
        rand(18, sceneRect.height - 18),
        rand(0, Math.PI * 2),
        rand(0, 1800),
      );
    }

    const ringRect = ring.getBoundingClientRect();
    const cx = ringRect.left - sceneRect.left + ringRect.width / 2;
    const cy = ringRect.top - sceneRect.top + ringRect.height / 2;
    const radius = Math.min(ringRect.width, ringRect.height) * 0.495;

    // Dense ring population is present immediately, but every ember releases on its own clock.
    for (let i = 0; i < 648; i++) {
      const angle = rand(0, Math.PI * 2);
      const r = radius * rand(0.992, 1.008);
      makeParticle(
        "ring",
        cx + Math.cos(angle) * r,
        cy + Math.sin(angle) * r,
        angle,
        rand(180, 2600),
      );
    }

    const tick = (now: number) => {
      if (stopped) return;
      const dt = Math.min(34, now - last);
      last = now;
      spawnTimer -= dt;

      if (spawnTimer <= 0) {
        const count = Math.random() < 0.34 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const r = ring.getBoundingClientRect();
          const s = scene.getBoundingClientRect();
          const angle = rand(0, Math.PI * 2);
          const rad = Math.min(r.width, r.height) * rand(0.488, 0.502);
          makeParticle(
            "ring",
            r.left - s.left + r.width / 2 + Math.cos(angle) * rad,
            r.top - s.top + r.height / 2 + Math.sin(angle) * rad,
            angle,
            rand(0, 90),
          );
        }
        spawnTimer = rand(55, 115);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      for (const p of embers) p.animation.cancel();
      layer.remove();
    };
  }, []);

  return null;
}
