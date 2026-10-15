"use client";

import { useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  angle: number;
  dx: number;
  dy: number;
  driftX: number;
  driftY: number;
  size: number;
  duration: number;
  born: number;
  alpha: number;
  scaleEnd: number;
  ring: boolean;
  spark: boolean;
};

const rand = (a: number, b: number) => Math.random() * (b - a) + a;

function sizeProfile(ring: boolean) {
  const r = Math.random();
  if (r < .03) return rand(1.4, 2.1);
  if (r < .17) return rand(2.3, 3.4);
  if (r < .42) return rand(3.4, 4.8);
  if (r < .67) return rand(4.8, 6.2);
  if (r < .92) return rand(6.2, 7.8);
  if (r < .985) return rand(8, 10.5);
  return ring ? rand(10.5, 13) : rand(9, 11);
}

export default function HeroParticleEngine() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ring = document.querySelector<HTMLElement>(".hero-orbit-one");
    if (!ring) return;

    // One canvas replaces hundreds of animated DOM nodes. Particle counts and
    // their long-lived orbit/ambient behavior remain at the original levels.
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      pointerEvents: "none",
      zIndex: "3",
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      canvas.remove();
      return;
    }

    const TARGET_RING_PARTICLES = 132;
    const MAX_PARTICLES = 920;
    const MAX_TRANSIENT_PARTICLES = MAX_PARTICLES - TARGET_RING_PARTICLES;
    const particles: Particle[] = [];
    const spriteCache = new Map<string, HTMLCanvasElement>();
    let ringIndex = 0;
    let sparkSide: "left" | "right" = "right";
    let ambientClock = rand(90, 150);
    let sparkClock = rand(1200, 1600);
    let stopped = false;
    let raf = 0;
    let lastFrame = 0;
    let lastTick = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // A capped backing scale keeps high-DPI mobile devices from multiplying
      // the fill cost while retaining a crisp glow.
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sprite = (spark: boolean, size: number) => {
      const bucket = Math.max(1, Math.round(size * 2) / 2);
      const key = `${spark ? "s" : "e"}-${bucket}`;
      const cached = spriteCache.get(key);
      if (cached) return cached;

      const side = 128;
      const image = document.createElement("canvas");
      image.width = side;
      image.height = side;
      const g = image.getContext("2d");
      if (!g) return image;
      const gradient = g.createRadialGradient(side / 2, side / 2, 0, side / 2, side / 2, side / 2);
      if (spark) {
        gradient.addColorStop(0, "rgba(255,252,220,1)");
        gradient.addColorStop(.12, "rgba(255,191,70,.98)");
        gradient.addColorStop(.28, "rgba(255,91,8,.62)");
        gradient.addColorStop(.5, "rgba(255,50,0,.16)");
        gradient.addColorStop(1, "rgba(255,50,0,0)");
      } else {
        gradient.addColorStop(0, "rgba(255,231,174,1)");
        gradient.addColorStop(.16, "rgba(255,139,24,.78)");
        gradient.addColorStop(.36, "rgba(255,61,4,.28)");
        gradient.addColorStop(1, "rgba(255,61,4,0)");
      }
      g.fillStyle = gradient;
      g.fillRect(0, 0, side, side);
      spriteCache.set(key, image);
      return image;
    };

    const ringPoint = (spark = false, forcedSide?: "left" | "right", initialPhase = 0) => {
      if (particles.length >= MAX_PARTICLES) return;
      const rr = ring.getBoundingClientRect();
      let angle = (ringIndex++ % TARGET_RING_PARTICLES) * (Math.PI * 2 / TARGET_RING_PARTICLES) + rand(-.018, .018);
      if (forcedSide) {
        const left = angle > Math.PI / 2 && angle < Math.PI * 1.5;
        if ((forcedSide === "left") !== left) angle += Math.PI;
      }
      const radius = Math.min(rr.width, rr.height) * .515;
      const x = rr.left + rr.width / 2 + Math.cos(angle) * radius;
      const y = rr.top + rr.height / 2 + Math.sin(angle) * radius;
      const size = spark ? rand(3.2, 7.2) : sizeProfile(true);
      const distance = spark ? rand(40, 88) : rand(48, 155);
      const duration = spark ? rand(9000, 13000) : rand(10000, 16000);
      particles.push({
        x, y, angle: angle + rand(-.12, .12),
        dx: Math.cos(angle + rand(-.12, .12)) * distance,
        dy: Math.sin(angle + rand(-.12, .12)) * distance + (spark ? rand(8, 24) : rand(10, 36)),
        driftX: rand(-3, 3), driftY: rand(-4, 16), size, duration,
        born: performance.now() - initialPhase,
        alpha: spark ? rand(.84, 1) : rand(.46, .92),
        scaleEnd: spark ? rand(.22, .38) : rand(.30, .55),
        ring: !spark, spark,
      });
    };

    const ambientPoint = (initialPhase = 0) => {
      if (particles.length >= MAX_PARTICLES) return;
      const x = rand(width * .06, width * .94);
      const y = rand(height * .05, height * .94);
      if (y > height * .82 && Math.random() < .22) return;
      const angle = rand(-Math.PI * .10, Math.PI * .10);
      const distance = rand(35, 135);
      particles.push({
        x, y, angle, dx: Math.cos(angle) * distance, dy: Math.sin(angle) * distance + rand(14, 46),
        driftX: rand(-3, 3), driftY: rand(-4, 16), size: sizeProfile(false),
        duration: rand(11000, 17000), born: performance.now() - initialPhase,
        alpha: rand(.46, .92), scaleEnd: rand(.30, .55), ring: false, spark: false,
      });
    };

    const maintainRing = () => {
      if (stopped) return;
      const ringCount = particles.reduce((n, p) => n + (p.ring ? 1 : 0), 0);
      if (ringCount < TARGET_RING_PARTICLES) ringPoint();
    };

    const sparkBurst = () => {
      const count = Math.floor(rand(20, 31));
      for (let i = 0; i < count; i++) {
        ringPoint(true, sparkSide);
        sparkSide = sparkSide === "right" ? "left" : "right";
      }
    };

    const interpolate = (a: number, b: number, t: number) => a + (b - a) * t;
    const drawParticle = (p: Particle, now: number) => {
      const elapsed = (now - p.born) % p.duration;
      const t = Math.max(0, Math.min(1, elapsed / p.duration));
      const ease = t < .12 ? t / .12 : t < .52 ? interpolate(.08, .38, (t - .12) / .40) : t < .82 ? interpolate(.38, .70, (t - .52) / .30) : interpolate(.70, 1, (t - .82) / .18);
      let alpha = t < .08 ? interpolate(0, p.alpha, t / .08) : t < .52 ? p.alpha : t < .82 ? p.alpha * interpolate(1, .34, (t - .52) / .30) : p.alpha * interpolate(.34, 0, (t - .82) / .18);
      if (t > .975) alpha = 0;
      const x = p.x + p.dx * ease + p.driftX * t;
      const y = p.y + p.dy * ease + p.driftY * t;
      const scale = t < .12 ? interpolate(.45, 1, t / .12) : interpolate(1, p.scaleEnd, Math.max(0, (t - .12) / .88));
      const image = sprite(p.spark, p.size);
      const glowSize = p.size * (p.spark ? 7.2 : 5.8) * scale;
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.drawImage(image, x - glowSize / 2, y - glowSize / 2, glowSize, glowSize);
    };

    const tick = (now: number) => {
      if (stopped) return;
      raf = requestAnimationFrame(tick);
      if (document.hidden || now - lastFrame < 32) return;
      const delta = lastTick ? Math.min(now - lastTick, 80) : 16;
      lastTick = now;
      lastFrame = now;
      ambientClock -= delta;
      sparkClock -= delta;
      if (sparkClock <= 0) {
        sparkBurst();
        sparkClock = rand(1900, 2500);
      }
      if (ambientClock <= 0) {
        let made = 0;
        for (let a = 0; a < 10 && made < 3; a++) {
          const before = particles.length;
          ambientPoint();
          if (particles.length > before) made++;
        }
        ambientClock = rand(150, 260);
      }

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (now - p.born >= p.duration) {
          particles.splice(i, 1);
          if (p.ring) maintainRing();
          continue;
        }
        drawParticle(p, now);
      }
      ctx.globalAlpha = 1;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    for (let i = 0; i < TARGET_RING_PARTICLES; i++) ringPoint(false, undefined, rand(0, 12000));
    for (let i = 0; i < 220; i++) ambientPoint(rand(0, 12000));
    sparkBurst();
    raf = requestAnimationFrame(tick);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.remove();
      spriteCache.clear();
    };
  }, []);

  return null;
}
