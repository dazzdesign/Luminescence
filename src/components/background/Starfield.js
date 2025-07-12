import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  const numStars = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const generateStars = () => {
      stars.current = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        haloSize: Math.random() * 15 + 10,
        flicker: Math.random() * 0.5 + 0.5,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars(); // <-- Important : régénérer les étoiles
    };

    resize();
    window.addEventListener('resize', resize);

    const colorModes = [
      { h: 0, s: 0, l: 100 },
      { h: 200, s: 100, l: 80 },
      { h: 330, s: 100, l: 85 },
      { h: 50, s: 100, l: 80 },
    ];

    let modeIndex = 0;
    let transitionProgress = 0;

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const current = colorModes[modeIndex];
      const next = colorModes[(modeIndex + 1) % colorModes.length];

      const h = current.h + (next.h - current.h) * transitionProgress;
      const s = current.s + (next.s - current.s) * transitionProgress;
      const l = current.l + (next.l - current.l) * transitionProgress;

      stars.current.forEach(star => {
        const flicker = Math.sin(Date.now() / 200 + star.x) * 0.2 + 0.8;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${flicker})`;
        ctx.shadowColor = `hsla(${h}, ${s}%, ${Math.min(l + 20, 100)}%, 0.9)`;
        ctx.shadowBlur = star.haloSize * flicker * 1.5;
        ctx.fill();
      });

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
