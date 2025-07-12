import React, { useEffect } from 'react';
import './home.css';

import HeroSection from '../components/home/hero/HeroSection';
import AnimatedChevron from '../components/fleche/AnimatedChevron';
import HowItWorksSlider from '../components/home/slider/HowItWorksSlider';
import TechnologieSection from '../components/home/technologie/TechnologieSection';
import PourquoiChoisirSection from '../components/home/choisir/PourquoiChoisirSection';
import VoirRealisationsSection from '../components/home/realisations/VoirRealisationsSection';

const Home = () => {
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
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <HeroSection />

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
      <HowItWorksSlider />
      <TechnologieSection />
      <PourquoiChoisirSection />
      <VoirRealisationsSection />

    </div>
    
  );
};

export default Home;
