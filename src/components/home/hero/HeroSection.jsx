import React from 'react';
import './HeroSection.css';
import logo from './logohome.png';
import AnimatedChevron from '../../fleche/AnimatedChevron';

const HeroSection = () => {
  return (
    <>
<header className="hero-section">
  <div className="hero-image-container">
    <img src={logo} alt="Luminescence Carrelage" className="hero-image" />
    <div className="hero-gradient-overlay" />
  </div>
  
</header>

      <div className="hero-chevron-wrapper">
        <AnimatedChevron />
      </div>
    </>
  );
};

export default HeroSection;
