// src/components/VoirRealisationsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VoirRealisationsSection.css';
import fibresBg from './fibres.jpg';

const VIDEO_BASE = 'https://iframe.videodelivery.net/10ea69dcb9aef0eef8b1d0d2ab05dec9';

const VoirRealisationsSection = () => {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const frameRef = useRef(null);
  const sentinelRef = useRef(null);

  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  // Fade-in du texte
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => contentRef.current?.classList.toggle('visible', e.isIntersecting),
      { threshold: 0.3 }
    );
    if (contentRef.current) io.observe(contentRef.current);
    return () => io.disconnect();
  }, []);

  // Charge le SDK Cloudflare (permet de forcer un .play() dans certains navigateurs)
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://embed.videodelivery.net/embed/sdk.latest.js';
    s.async = true;
    s.onload = () => setSdkReady(true);
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  // Détecte la visibilité de la zone vidéo (≥ 50%) via un sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) {
          setShouldAutoplay(true);
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Si SDK dispo, tente un play() explicite quand visible
  useEffect(() => {
    if (!shouldAutoplay || !frameRef.current) return;
    // @ts-ignore – window.Stream injecté par le SDK
    const Stream = window.Stream;
    if (sdkReady && typeof Stream === 'function') {
      try {
        const player = Stream(frameRef.current);
        player.muted = true;
        player.play().catch(() => {});
      } catch {
        /* no-op */
      }
    }
  }, [shouldAutoplay, sdkReady]);

  // URL de l'iframe (numérique 1/0 pour compat max)
  const src = shouldAutoplay
    ? `${VIDEO_BASE}?autoplay=1&muted=1&loop=1&playsinline=1&preload=auto`
    : `${VIDEO_BASE}?muted=1&playsinline=1&preload=metadata`;

  return (
    <section className="home-realisations" role="region" aria-labelledby="realisations-title">
      {/* Image de fond */}
      <img src={fibresBg} alt="" aria-hidden="true" className="background-img" />

      <div className="realisations-container">
        {/* Sentinel observé (meilleur que l'iframe elle-même) */}
        <div ref={sentinelRef} className="video-wrapper">
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
            <iframe
              ref={frameRef}
              key={src} // remonte l'iframe quand la src change
              src={src}
              title="Vidéo des réalisations de Luminescence Carrelage"
              // pas de lazy ici pour éviter les blocages d’autoplay
              allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>

        <div className="realisations-content-wrapper fade-section" ref={contentRef}>
          <h2 id="realisations-title" className="realisations-title">
            Lumière & design jusque dans les moindres détails
          </h2>
          <p className="realisations-text">
            Plongez dans l’univers de nos réalisations lumineuses uniques.
            Une mise en scène élégante, raffinée et sur-mesure.
          </p>
          <button
            className="bouton"
            onClick={() => navigate('/realisations')}
            aria-label="Voir la galerie de réalisations complètes"
          >
            Voir la galerie complète
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoirRealisationsSection;
