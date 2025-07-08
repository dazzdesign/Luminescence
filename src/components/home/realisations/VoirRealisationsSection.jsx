import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import salleDeBain from './video.mp4';
import './VoirRealisationsSection.css';

const VoirRealisationsSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.3, // déclenchement plus souple
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="home-realisations">
      <div className="realisations-container">
        <video
          ref={videoRef}
          className="realisations-video"
          src={salleDeBain}
          muted={isMuted}
          controls
          playsInline
          preload="auto"
        >
          Votre navigateur ne supporte pas la vidéo.
        </video>



        <div className="realisations-content">
          <h2 className="realisations-title">
            Lumière & design jusque dans les moindres détails
          </h2>
          <p className="realisations-text">
            Plongez dans l’univers de nos réalisations lumineuses uniques. Une
            mise en scène élégante, raffinée et sur-mesure.
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
