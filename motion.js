"use strict";

(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ACCENT = [223, 155, 105];
  const BONE = [238, 233, 223];
  const TAU = Math.PI * 2;
  const random = (seed) => {
    const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
    return value - Math.floor(value);
  };
  const wrap = (value, min, max) => ((value - min) % (max - min) + (max - min)) % (max - min) + min;

  class MotionRenderer {
    constructor(canvas, mode) {
      this.canvas = canvas;
      this.mode = mode;
      this.ctx = canvas.getContext("2d", { alpha: true });
      this.width = 1;
      this.height = 1;
      this.visible = true;
      this.frames = 0;
      this.progress = 0;
      this.scene = 0;
      this.previousScene = 0;
      this.transitionStart = 0;
      this.layerAlpha = 1;
      this.pointer = { x: 0, y: 0, tx: 0, ty: 0 };
      this.nodes = Array.from({ length: 13 }, (_, index) => ({
        x: (random(index * 4 + 1) - .5) * 13,
        y: (random(index * 4 + 2) - .5) * 8,
        z: 4 + random(index * 4 + 3) * 14,
        phase: random(index * 4 + 4) * TAU
      }));
      this.edges = this.nodes.flatMap((_, index) => [[index, (index + 1) % this.nodes.length], [index, (index + 5) % this.nodes.length]]);
      this.particles = Array.from({ length: 44 }, (_, index) => ({
        x: (random(index * 3 + 80) - .5) * 18,
        y: (random(index * 3 + 81) - .5) * 11,
        z: 3 + random(index * 3 + 82) * 20,
        size: .35 + random(index * 3 + 83) * 1.2
      }));
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(canvas);
      this.resize();
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      this.width = Math.max(1, rect.width);
      this.height = Math.max(1, rect.height);
      this.canvas.width = Math.round(this.width * dpr);
      this.canvas.height = Math.round(this.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    setScene(scene, progress) {
      if (scene !== this.scene) {
        this.previousScene = this.scene;
        this.scene = scene;
        this.transitionStart = performance.now();
      }
      this.progress = progress;
    }

    rgba(color, alpha) {
      return `rgba(${color[0]},${color[1]},${color[2]},${Math.max(0, Math.min(1, alpha * this.layerAlpha))})`;
    }

    project(x, y, z, time) {
      if (z < .35) return null;
      const cameraX = Math.sin(time * .17) * .32 + this.pointer.x * .5;
      const cameraY = Math.cos(time * .13) * .22 + this.pointer.y * .35;
      const focal = Math.min(this.width, this.height) * (this.mode === "hero" ? 1.08 : 1.18);
      const centerX = this.width * (this.width < 760 ? .58 : .68);
      const centerY = this.height * (this.mode === "hero" ? .44 : .43);
      return {
        x: centerX + (x - cameraX) * focal / z,
        y: centerY + (y - cameraY) * focal / z,
        scale: focal / z,
        depth: z
      };
    }

    strokePath(points, color = ACCENT, alpha = .4, width = 1) {
      const projected = points.map((point) => this.project(point.x, point.y, point.z, this.time));
      if (projected.some((point) => !point)) return;
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(projected[0].x, projected[0].y);
      projected.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
      ctx.strokeStyle = this.rgba(color, alpha);
      ctx.lineWidth = width;
      ctx.stroke();
    }

    nodePosition(index, time) {
      const node = this.nodes[index];
      return {
        x: node.x + Math.sin(time * .31 + node.phase) * .28,
        y: node.y + Math.cos(time * .27 + node.phase) * .22,
        z: wrap(node.z - time * .24, 4, 18)
      };
    }

    drawNetwork(time, hero = false) {
      const positions = this.nodes.map((_, index) => this.nodePosition(index, time));
      this.edges.forEach(([from, to], index) => {
        this.strokePath([positions[from], positions[to]], ACCENT, hero ? .18 : .27, .8);
        if (index % 2 === 0) {
          const travel = (time * .17 + index * .137) % 1;
          const start = positions[from];
          const end = positions[to];
          const point = {
            x: start.x + (end.x - start.x) * travel,
            y: start.y + (end.y - start.y) * travel,
            z: start.z + (end.z - start.z) * travel
          };
          const projected = this.project(point.x, point.y, point.z, time);
          if (projected) {
            this.ctx.beginPath();
            this.ctx.arc(projected.x, projected.y, 1.5 + Math.sin(time * 3 + index) * .45, 0, TAU);
            this.ctx.fillStyle = this.rgba(ACCENT, .85);
            this.ctx.fill();
          }
        }
      });
      positions.forEach((position, index) => {
        const point = this.project(position.x, position.y, position.z, time);
        if (!point) return;
        const pulse = 3.2 + Math.sin(time * 1.4 + index) * 1.1;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, Math.max(1.4, pulse * point.scale / 85), 0, TAU);
        this.ctx.fillStyle = this.rgba(ACCENT, .9);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, Math.max(4, (10 + Math.sin(time + index) * 3) * point.scale / 85), 0, TAU);
        this.ctx.strokeStyle = this.rgba(ACCENT, .22);
        this.ctx.lineWidth = .8;
        this.ctx.stroke();
      });
      const scanY = wrap(time * .65, -4, 4);
      this.strokePath([{ x: -8, y: scanY, z: 7 }, { x: 8, y: scanY, z: 7 }], ACCENT, .3, 1);
      this.strokePath([{ x: -8, y: scanY + .08, z: 7 }, { x: 8, y: scanY + .08, z: 7 }], ACCENT, .07, 5);
      if (!hero) {
        for (let z = 5; z < 20; z += 3) {
          this.strokePath([{ x: -9, y: -5, z }, { x: 9, y: -5, z }], ACCENT, .055, .7);
          this.strokePath([{ x: -9, y: 5, z }, { x: 9, y: 5, z }], ACCENT, .055, .7);
        }
      }
    }

    drawAccess(time) {
      for (let index = 0; index < 11; index += 1) {
        const z = wrap(index * 2.5 - time * .85, 1.2, 26);
        const fade = Math.min(1, (26 - z) / 8) * Math.min(1, z / 3);
        const width = 11;
        const height = 7.5;
        const points = [
          { x: -width / 2, y: -height / 2, z }, { x: width / 2, y: -height / 2, z },
          { x: width / 2, y: height / 2, z }, { x: -width / 2, y: height / 2, z },
          { x: -width / 2, y: -height / 2, z }
        ];
        this.strokePath(points, ACCENT, fade * .3, index % 3 === 0 ? 1.3 : .75);
      }
      const route = [
        { x: -7, y: 3, z: 5 }, { x: -3, y: 3, z: 5 }, { x: -1, y: .8, z: 5 },
        { x: 2, y: .8, z: 5 }, { x: 4, y: -2.5, z: 5 }, { x: 7, y: -2.5, z: 5 }
      ];
      this.strokePath(route, ACCENT, .7, 1.5);
      const segment = Math.floor(time * .55) % (route.length - 1);
      const travel = (time * .55) % 1;
      const start = route[segment];
      const end = route[segment + 1];
      const point = this.project(
        start.x + (end.x - start.x) * travel,
        start.y + (end.y - start.y) * travel,
        start.z + (end.z - start.z) * travel,
        time
      );
      if (point) {
        const glow = this.ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 24);
        glow.addColorStop(0, this.rgba(ACCENT, .65));
        glow.addColorStop(1, this.rgba(ACCENT, 0));
        this.ctx.fillStyle = glow;
        this.ctx.fillRect(point.x - 24, point.y - 24, 48, 48);
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 3.5, 0, TAU);
        this.ctx.fillStyle = this.rgba(BONE, 1);
        this.ctx.fill();
      }
    }

    drawPrivilege(time) {
      const steps = Array.from({ length: 7 }, (_, index) => ({
        x: (index - 3) * .85 + Math.sin(time * .2) * .25,
        y: 3.7 - index * 1.15,
        z: 7 + index * .35
      }));
      steps.forEach((step, index) => {
        const active = Math.floor(time * .7) % steps.length === index;
        const width = 5.5;
        const depth = 1.2;
        const points = [
          { x: step.x - width / 2, y: step.y, z: step.z },
          { x: step.x + width / 2, y: step.y, z: step.z },
          { x: step.x + width / 2, y: step.y, z: step.z + depth },
          { x: step.x - width / 2, y: step.y, z: step.z + depth },
          { x: step.x - width / 2, y: step.y, z: step.z }
        ];
        this.strokePath(points, ACCENT, active ? .85 : .25, active ? 1.8 : .9);
        if (index < steps.length - 1) this.strokePath([step, steps[index + 1]], ACCENT, .45, 1);
      });
      const travel = (time * .38) % 1;
      const scaled = travel * (steps.length - 1);
      const index = Math.min(steps.length - 2, Math.floor(scaled));
      const local = scaled - index;
      const a = steps[index];
      const b = steps[index + 1];
      const point = this.project(a.x + (b.x - a.x) * local, a.y + (b.y - a.y) * local, a.z + (b.z - a.z) * local, time);
      if (point) {
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 4 + Math.sin(time * 5) * 1.2, 0, TAU);
        this.ctx.fillStyle = this.rgba(BONE, 1);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 18 + Math.sin(time * 3) * 4, 0, TAU);
        this.ctx.strokeStyle = this.rgba(ACCENT, .45);
        this.ctx.stroke();
      }
    }

    drawEvidence(time) {
      const ctx = this.ctx;
      const mobile = this.width < 760;
      const panelWidth = Math.min(this.width * (mobile ? .72 : .36), 570);
      const panelHeight = panelWidth * .77;
      const x = this.width * (mobile ? .57 : .7);
      const y = this.height * .4 + Math.sin(time * .45) * 7;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(time * .24) * .025 + this.pointer.x * .015);
      ctx.scale(1 + Math.sin(time * .35) * .008, 1 + Math.sin(time * .35) * .008);
      ctx.translate(-panelWidth / 2, -panelHeight / 2);
      ctx.fillStyle = this.rgba([12, 10, 8], .72);
      ctx.fillRect(0, 0, panelWidth, panelHeight);
      ctx.strokeStyle = this.rgba(ACCENT, .45);
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, panelWidth, panelHeight);
      const pad = panelWidth * .07;
      ctx.font = `${Math.max(8, panelWidth * .017)}px "IBM Plex Mono"`;
      ctx.fillStyle = this.rgba(ACCENT, .8);
      ctx.fillText("CASE / 004", pad, pad);
      ctx.textAlign = "right";
      ctx.fillText("REPRODUCIBLE", panelWidth - pad, pad);
      ctx.textAlign = "left";
      ctx.beginPath();
      ctx.moveTo(pad, pad * 1.65);
      ctx.lineTo(panelWidth - pad, pad * 1.65);
      ctx.strokeStyle = this.rgba(ACCENT, .2);
      ctx.stroke();
      ctx.font = `${panelWidth * .12}px "Instrument Serif"`;
      ctx.fillStyle = this.rgba(BONE, .88);
      ctx.fillText("EVIDENCE", pad, panelHeight * .35);
      const labels = ["OBSERVATION", "REPRODUCTION", "DOCUMENTATION"];
      labels.forEach((label, index) => {
        const rowY = panelHeight * (.49 + index * .15);
        ctx.beginPath();
        ctx.moveTo(pad, rowY - panelHeight * .045);
        ctx.lineTo(panelWidth - pad, rowY - panelHeight * .045);
        ctx.strokeStyle = this.rgba(ACCENT, .17);
        ctx.stroke();
        ctx.strokeStyle = this.rgba(ACCENT, .65);
        ctx.strokeRect(pad, rowY, 7, 7);
        const cycle = (time * .32 - index * .28) % 3;
        if (cycle > 0) {
          ctx.beginPath();
          ctx.moveTo(pad + 1, rowY + 3);
          ctx.lineTo(pad + 3, rowY + 6);
          ctx.lineTo(pad + 7, rowY);
          ctx.strokeStyle = this.rgba(ACCENT, Math.min(1, cycle * 2));
          ctx.stroke();
        }
        ctx.font = `${Math.max(7, panelWidth * .014)}px "IBM Plex Mono"`;
        ctx.fillStyle = this.rgba(BONE, .55);
        ctx.fillText(label, pad + 20, rowY + 7);
      });
      const scanX = wrap(time * 65, 0, panelWidth);
      const gradient = ctx.createLinearGradient(scanX - 40, 0, scanX + 5, 0);
      gradient.addColorStop(0, this.rgba(ACCENT, 0));
      gradient.addColorStop(1, this.rgba(ACCENT, .12));
      ctx.fillStyle = gradient;
      ctx.fillRect(scanX - 40, 0, 45, panelHeight);
      ctx.fillStyle = this.rgba(ACCENT, .55);
      ctx.fillRect(scanX, 0, 1, panelHeight);
      ctx.restore();
    }

    drawAtmosphere(time) {
      this.particles.forEach((particle, index) => {
        const z = wrap(particle.z - time * .13, 2, 23);
        const point = this.project(particle.x + Math.sin(time * .1 + index) * .15, particle.y, z, time);
        if (!point) return;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, particle.size, 0, TAU);
        this.ctx.fillStyle = this.rgba(ACCENT, .12 + random(index + 200) * .16);
        this.ctx.fill();
      });
    }

    drawScene(scene, time, alpha) {
      this.layerAlpha = alpha;
      if (scene === 0) this.drawNetwork(time);
      if (scene === 1) this.drawAccess(time);
      if (scene === 2) this.drawPrivilege(time);
      if (scene === 3) this.drawEvidence(time);
      this.layerAlpha = 1;
    }

    render(now) {
      if (!this.visible || document.hidden || this.width < 2 || this.height < 2) return;
      this.time = now;
      this.pointer.x += (this.pointer.tx - this.pointer.x) * .035;
      this.pointer.y += (this.pointer.ty - this.pointer.y) * .035;
      this.ctx.clearRect(0, 0, this.width, this.height);
      if (this.mode === "hero") {
        this.drawScene(0, now, .8);
        this.drawAtmosphere(now);
      } else {
        const blend = Math.min(1, (performance.now() - this.transitionStart) / 800);
        const eased = blend * blend * (3 - 2 * blend);
        if (blend < 1) this.drawScene(this.previousScene, now, 1 - eased);
        this.drawScene(this.scene, now, this.transitionStart ? eased : 1);
        this.drawAtmosphere(now);
      }
      this.frames += 1;
      this.canvas.dataset.frame = String(this.frames);
    }
  }

  const hero = new MotionRenderer(document.querySelector("[data-hero-motion]"), "hero");
  const sequence = new MotionRenderer(document.querySelector("[data-sequence-motion]"), "sequence");
  const renderers = [hero, sequence];
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const renderer = renderers.find((item) => item.canvas === entry.target);
      if (renderer) renderer.visible = entry.isIntersecting;
    });
  }, { rootMargin: "100px" });
  renderers.forEach((renderer) => visibilityObserver.observe(renderer.canvas));

  window.addEventListener("pointermove", (event) => {
    renderers.forEach((renderer) => {
      renderer.pointer.tx = event.clientX / window.innerWidth - .5;
      renderer.pointer.ty = event.clientY / window.innerHeight - .5;
    });
  }, { passive: true });

  window.liveMotion = {
    setScene(scene, progress) { sequence.setScene(scene, progress); },
    renderers
  };

  let previousFrame = 0;
  function tick(now) {
    requestAnimationFrame(tick);
    if (reducedMotion.matches || now - previousFrame < 15) return;
    previousFrame = now;
    renderers.forEach((renderer) => renderer.render(now / 1000));
  }
  requestAnimationFrame(tick);
})();
