import React from 'react';
import './PourquoiChoisirSection.css';

const items = [
  {
    icon: (
      <svg width="40" height="40" fill="#FFD700" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2a7 7 0 00-7 7c0 4.418 7 13 7 13s7-8.582 7-13a7 7 0 00-7-7z" />
        <circle cx="12" cy="7" r="1.5" fill="#ffcc00" />
        <path d="M12 9v4" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Technologie Innovante',
    desc: 'Maîtrise exclusive de la technologie à fibre optique pour des effets lumineux intégrés dans le carrelage.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="#FFD700" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18M9 21V9" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Applications Multiples',
    desc: 'Adapté aux piscines, salles de bain, terrasses et zones commerciales.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="#FFD700" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Durabilité & Qualité',
    desc: 'Matériaux premium validés par BASF garantissant une lumière stable et des performances durables.',
  },
];

const PourquoiChoisirSection = () => {
  return (
    <section
      className="why-luminescence fade-section"
      id="pourquoi-choisir"
      aria-labelledby="section-title-choisir"
      role="region"
    >
      <div className="container">
        <h2 id="section-title-choisir" className="title">
          Pourquoi Choisir LUMINESCENCE CARRELAGE ?
        </h2>
        <p className="intro">
          Notre expertise marie technologie lumineuse, savoir-faire artisanal et qualité haut de gamme.
        </p>

        <div className="grid">
          {items.map(({ icon, title, desc }, idx) => (
            <article className="card" key={idx} role="article">
              <div className="icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PourquoiChoisirSection;
