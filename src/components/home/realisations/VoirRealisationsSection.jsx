import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './VoirRealisationsSection.css';

const VoirRealisationsSection = () => {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current?.classList.add('visible');
        } else {
          contentRef.current?.classList.remove('visible');
        }
      },
      { threshold: 0.3 }
    );

    const content = contentRef.current;
    if (content) observer.observe(content);

    return () => {
      if (content) observer.unobserve(content);
    };
  }, []);

  return (
    <section className="home-realisations">
      <div className="realisations-container">
        
        {/* Vidéo via Cloudflare Stream */}
        <div className="video-wrapper">
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
            <iframe
src="https://iframe.videodelivery.net/10ea69dcb9aef0eef8b1d0d2ab05dec9"
              title="Vidéo Réalisation"
              loading="lazy"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            ></iframe>
          </div>
        </div>

        {/* Contenu texte animé */}
        <div className="realisations-content" ref={contentRef}>
          <h2 className="realisations-title">
            Lumière & design jusque dans les moindres détails
          </h2>
          <p className="realisations-text">
            Plongez dans l’univers de nos réalisations lumineuses uniques.
            Une mise en scène élégante, raffinée et sur-mesure.
          </p>
          <button className="bouton" onClick={() => navigate('/realisations')}>
            Voir la galerie complète
          </button>
        </div>

      </div>
    </section>
  );
};

export default VoirRealisationsSection;
