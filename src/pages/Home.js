import React, { useEffect } from 'react';
import './home.css';

// Sections principales
import HeroSection from '../components/home/hero/HeroSection';
import AnimatedChevron from '../components/fleche/AnimatedChevron';
import HowItWorksSlider from '../components/home/slider/HowItWorksSlider';
import TechnologieSection from '../components/home/technologie/TechnologieSection';
import PourquoiChoisirSection from '../components/home/choisir/PourquoiChoisirSection';
import VoirRealisationsSection from '../components/home/realisations/VoirRealisationsSection';

const Home = () => {
  // Apparition douce des sections avec la classe "fade-section"
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* HERO */}
      <HeroSection />

      {/* Introduction de la marque */}
<section className="hero-text fade-section">
  <h1>Carrelage Lumineux</h1>
  <h2>Fibre Optique Multisurface</h2>

  <p>
    <h4 className="highlight-led">Avec 30 ans de savoir-faire.</h4>
    <br />
    Bienvenue sur notre site, où <span className="highlight-led">l'artisanat</span> rencontre <span className="highlight-led">la technologie</span>.
    <br /><br />
    Fondée par Denis Dussert à Manosque, <strong className="highlight-led">LUMINESCENCE CARRELAGE</strong> marie
    <span className="highlight-led"> fibre optique</span> et <span className="highlight-led">carrelage</span>.
  </p>
</section>




      {/* Slider explicatif */}
      <HowItWorksSlider />

      {/* Section technologie (avec animations internes) */}
      <TechnologieSection />

      {/* Pourquoi choisir nous */}
      <PourquoiChoisirSection />
      {/* Réalisations */}
      <VoirRealisationsSection />
    

    

    
    
    
    
    </div>
    
  );
};

export default Home;
