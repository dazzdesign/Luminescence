import React, { useEffect, useState } from 'react';
import './home.css';

// Sections principales
import HeroSection from '../components/home/hero/HeroSection';
import AnimatedChevron from '../components/fleche/AnimatedChevron';
import HowItWorksSlider from '../components/home/slider/HowItWorksSlider';
import TechnologieSection from '../components/home/technologie/TechnologieSection';
import PourquoiChoisirSection from '../components/home/choisir/PourquoiChoisirSection';
import VoirRealisationsSection from '../components/home/realisations/VoirRealisationsSection';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      document.querySelectorAll('.fade-section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <HeroSection />
        <div className="hero-text">
    <h1>Carrelage Lumineux - Fibre Optique Multisurface</h1>
    <p>
      Bienvenue sur notre site, où l'artisanat rencontre la technologie.
      Fondée par Denis Dussert à Manosque, <strong>LUMINESCENCE CARRELAGE</strong> marie
      fibre optique et carrelage avec 30 ans de savoir-faire.
    </p>
  </div>

      <HowItWorksSlider />
      <TechnologieSection />
      <PourquoiChoisirSection />
      <VoirRealisationsSection />
    </div>
  );
};

export default Home;
