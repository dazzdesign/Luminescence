import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Carrelage lumineux à Manosque – Fibre optique & innovation | Luminescence Carrelage</title>
        <meta
          name="description"
          content="Découvrez Luminescence Carrelage, expert du carrelage lumineux avec fibre optique à Manosque. Artisanat, technologie et design au service de vos sols et murs."
        />
        <meta
          name="keywords"
          content="carrelage lumineux Manosque, fibre optique, artisan carreleur Provence, Denis Dussert, carrelage innovant, sol lumineux"
        />
        <meta name="author" content="Denis Dussert" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph pour réseaux sociaux */}
        <meta property="og:title" content="Carrelage lumineux à Manosque – Luminescence Carrelage" />
        <meta property="og:description" content="Sublimez vos espaces avec notre carrelage lumineux à fibre optique, alliant innovation et savoir-faire artisanal." />
        <meta property="og:url" content="https://luminescence-carrelage.fr/" />
        <meta property="og:image" content="https://luminescence-carrelage.fr/logo512.png" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://luminescence-carrelage.fr/" />
      </Helmet>

      <HeroSection />

      <section className="hero-text fade-section">
        <h1>Carrelage Lumineux</h1>
        <h2>Fibre Optique Multisurface</h2>

        <h4 className="highlight-led">Avec 30 ans de savoir-faire.</h4>

        <p>
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
