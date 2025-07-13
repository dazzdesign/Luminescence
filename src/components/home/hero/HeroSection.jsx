import React from 'react';
import { Helmet } from 'react-helmet';
import './HeroSection.css';
import logo from './logohome (2).jpg';
import AnimatedChevron from '../../fleche/AnimatedChevron';

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Luminescence Carrelage, spécialiste du carrelage lumineux en Provence. Une technologie fibre optique unique, visible dès la première seconde."
        />
      </Helmet>

      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="animated-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff2b0">
              <animate attributeName="offset" values="0;1;0" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#FFD700">
              <animate attributeName="offset" values="0.5;1;0.5" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#b88b0b">
              <animate attributeName="offset" values="1;0;1" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <header className="hero-section" role="banner">
        <div className="hero-image-container">
          <div className="hero-chevron-wrapper" aria-hidden="true">
            <AnimatedChevron />
          </div>

          <div className="hero-chevron-sides" aria-hidden="true">
            <div className="chevron-left"><AnimatedChevron /></div>
            <div className="chevron-right"><AnimatedChevron /></div>
          </div>

          <img
            src={logo}
            alt="Logo de Luminescence Carrelage, carrelage lumineux à fibre optique en Provence"
            className="hero-image"
            loading="eager"
          />

          <div className="hero-gradient-top" aria-hidden="true" />
          <div className="hero-gradient-bottom" aria-hidden="true" />
        </div>
      </header>

      <div
        className="social-banner"
        role="complementary"
        aria-label="Suivez Luminescence Carrelage sur les réseaux sociaux"
      >
        <div className="social-icons">
          <a
            href="https://www.facebook.com/fibreetcarro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Luminescence Carrelage"
          >
            <svg viewBox="0 0 24 24">
              <path fill="url(#animated-gold-gradient)" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/luminescence_carrelage/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Luminescence Carrelage"
          >
            <svg viewBox="0 0 24 24">
              <path fill="url(#animated-gold-gradient)" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC3ru1dKYxRWTo3k7qQdkO8g/videos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chaîne YouTube de Luminescence Carrelage"
          >
            <svg viewBox="0 0 24 24">
              <path fill="url(#animated-gold-gradient)" d="M23.5 6.5c-.3-1.2-1.2-2.1-2.4-2.4C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.1.6c-1.2.3-2.1 1.2-2.4 2.4C0 8.5 0 12 0 12s0 3.5.5 5.5c.3 1.2 1.2 2.1 2.4 2.4 2 .5 9.1.5 9.1.5s7.1 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2 .5-5.5.5-5.5s0-3.5-.5-5.5zM9.8 15.2V8.8L15.5 12l-5.7 3.2z" />
            </svg>
          </a>
        </div>
      </div>

      <br />
    </>
  );
};

export default HeroSection;
