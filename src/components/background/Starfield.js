import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  const numStars = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Modes LED (couleurs dominantes par phase)
    const colorModes = [
      { h: 0, s: 0, l: 100 },     // Blanc éclatant
      { h: 200, s: 100, l: 80 },  // Bleu clair plus lumineux
      { h: 330, s: 100, l: 85 },  // Rose plus lumineux
      { h: 50, s: 100, l: 80 },   // Doré plus lumineux
    ];

    let modeIndex = 0;
    let transitionProgress = 0;

    // Créer les étoiles
    stars.current = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.5,
      haloSize: Math.random() * 15 + 10, // halos plus gros
      flicker: Math.random() * 0.5 + 0.5,
    }));

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const current = colorModes[modeIndex];
      const next = colorModes[(modeIndex + 1) % colorModes.length];

      // Transition douce entre deux modes (0 -> 1)
      const h = current.h + (next.h - current.h) * transitionProgress;
      const s = current.s + (next.s - current.s) * transitionProgress;
      const l = current.l + (next.l - current.l) * transitionProgress;

      stars.current.forEach(star => {
        const flicker = Math.sin(Date.now() / 200 + star.x) * 0.2 + 0.8; // scintillement doux et lent

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);

        // Couleur avec plus de luminosité
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${flicker})`;

        // Halo plus lumineux et plus gros
        ctx.shadowColor = `hsla(${h}, ${s}%, ${Math.min(l + 20, 100)}%, 0.9)`;
        ctx.shadowBlur = star.haloSize * flicker * 1.5;
        ctx.fill();
      });

      // Faire évoluer la transition
      transitionProgress += 0.003;
      if (transitionProgress >= 1) {
        transitionProgress = 0;
        modeIndex = (modeIndex + 1) % colorModes.length;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: 'black',
      }}
    />
  );
};

export default Starfield;
