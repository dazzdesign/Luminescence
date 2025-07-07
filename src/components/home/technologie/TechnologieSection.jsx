import React from 'react';
import './TechnologieSection.css';

const TechnologieSection = () => {
  return (
    <section className="how-it-works">
      <div className="how-text-block">
        
        <div className="fade-section">
          <h3 className="how-title">Notre Technologie</h3>
        </div>

        <div className="icon-illustration">

          {/* Générateur LED */}
          <div className="fade-section">
            {/* SVG Générateur LED ici */}
            <svg className="led-generator" width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Générateur de lumière LED">
              <defs>
                <linearGradient id="beam-gradient" x1="0" y1="0.5" x2="1" y2="0.5">
                  <stop offset="0%" stopColor="#64b5f6">
                    <animate attributeName="stop-color" values="#64b5f6;#f48fb1;#4dd0e1;#64b5f6" dur="5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="box-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#263238" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <filter id="beam-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00ffff" floodOpacity="0.5" />
                </filter>
              </defs>
              <rect x="10" y="40" width="30" height="40" rx="4" fill="url(#box-gradient)" stroke="#00e5ff" strokeWidth="1.2" />
              <polygon points="40,45 160,20 160,100 40,75" fill="url(#beam-gradient)" filter="url(#beam-glow)" opacity="0.85" />
              <rect x="18" y="48" width="14" height="4" rx="1" fill="#00e5ff" />
              <rect x="18" y="56" width="14" height="4" rx="1" fill="#00e5ff" />
              <circle cx="25" cy="68" r="4" fill="#00e5ff" stroke="#ffffff" strokeWidth="0.8" />
            </svg>
          </div>

          <div className="fade-section">
            <p className="how-description">
              La <span className="highlight-led">fibre optique</span> sépare la source de lumière de son conducteur.
            </p>
          </div>

          {/* Tuyau lumineux */}
          <div className="fade-section fiber-tube">
            <svg width="100%" height="100" viewBox="0 0 520 100" xmlns="http://www.w3.org/2000/svg" aria-label="Tuyau lumineux synchronisé avec faisceau RGB">
              <defs>
                <linearGradient id="beam-gradient-tube" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#64b5f6" stopOpacity="0.8">
                    <animate attributeName="stop-color" values="#64b5f6;#f48fb1;#4dd0e1;#64b5f6" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#f48fb1" stopOpacity="0.6">
                    <animate attributeName="stop-color" values="#f48fb1;#4dd0e1;#64b5f6;#f48fb1" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#4dd0e1" stopOpacity="0">
                    <animate attributeName="stop-color" values="#4dd0e1;#64b5f6;#f48fb1;#4dd0e1" dur="4s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
                <filter id="beam-glow-tube" x="-100%" y="-100%" width="300%" height="300%">
                  <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#ffffff" floodOpacity="0.7" />
                </filter>
              </defs>
              <path d="M30,40 h350 v20 h-350 a10,10 0 0 1 0,-20 z" fill="url(#tube-gradient)" stroke="#ffffff" strokeWidth="1.5" />
              <polygon points="380,40 510,30 510,70 380,60" fill="url(#beam-gradient-tube)" filter="url(#beam-glow-tube)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="4s" repeatCount="indefinite" />
              </polygon>
            </svg>
          </div>

          <div className="fade-section">
            <p className="how-description">
              Cela offre une <span className="highlight-led">flexibilité unique</span> pour l’ambiance lumineuse.
            </p>
          </div>

          {/* Télécommande */}
          <div className="fade-section">
            <svg className="icon remote-small-icon" width="50" height="150" viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Télécommande réaliste">
              <defs>
                <linearGradient id="remote-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#455a64" />
                  <stop offset="100%" stopColor="#263238" />
                </linearGradient>
                <radialGradient id="btn-grad-blue" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#64b5f6" />
                  <stop offset="100%" stopColor="#1976d2" />
                </radialGradient>
                <radialGradient id="btn-grad-pink" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f48fb1" />
                  <stop offset="100%" stopColor="#c2185b" />
                </radialGradient>
                <radialGradient id="btn-grad-cyan" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4dd0e1" />
                  <stop offset="100%" stopColor="#00838f" />
                </radialGradient>
                <filter id="btn-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#64b5f6" floodOpacity="0.9" />
                </filter>
                <radialGradient id="wave-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0288d1" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g transform="translate(20, 12)">
                {[12, 16, 20].map((r, i) => (
                  <path
                    key={r}
                    d={`M -${r} 0 A ${r} ${r} 0 0 1 ${r} 0`}
                    fill="none"
                    stroke="url(#wave-gradient)"
                    strokeWidth={8 - i * 2}
                    strokeLinecap="round"
                    opacity={0.75 - i * 0.15}
                  >
                    <animate attributeName="stroke-width" values={`${8 - i * 2};${10 - i * 2};${8 - i * 2}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
                    <animate attributeName="opacity" values={`${0.75 - i * 0.15};0;${0.75 - i * 0.15}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -20; 0 0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
                  </path>
                ))}
              </g>

              <rect x="6" y="16" width="28" height="64" rx="12" ry="12" fill="url(#remote-grad)" stroke="#37474f" strokeWidth="1.5" />
              <circle cx="20" cy="34" r="6" fill="url(#btn-grad-blue)" filter="url(#btn-shadow)">
                <animate attributeName="r" values="6;7;6" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="52" r="6" fill="url(#btn-grad-pink)" filter="url(#btn-shadow)">
                <animate attributeName="r" values="6;7;6" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="70" r="6" fill="url(#btn-grad-cyan)" filter="url(#btn-shadow)">
                <animate attributeName="r" values="6;7;6" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <div className="fade-section">
            <p className="how-description">
              Tout est possible avec notre <span className="highlight-led">système télécommandé</span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologieSection;
