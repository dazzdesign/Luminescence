import React, { useEffect } from 'react';
import './services.css'; // Assuming we will create a corresponding CSS file for styles
import carrelage from '../img/home/carrelage.png';
import Mosaïque from '../img/home/Mosaïque.png';
import Parement from '../img/home/Parement.png';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  return (
    <div className="services-container">
      <div className="services">
        <h1><span className="highlight">Nos services</span></h1>
        <br/>
        <p>Bienvenue sur notre page services. Nous réalisons tous vos projets de carrelage, mosaïque et parement, 
          avec un savoir-faire de qualité.
        </p>
        <br/>
        <br/>
        <div className="service">
          <img src={carrelage} alt="Réalisations" className="image-reahome" />
          <div className="service-text">
            <h2><span className="highlight">Carrelage</span></h2>
            <p>
              Nous offrons des services de pose de <span className="highlight">carrelage de qualité</span>,
              alliant <span className="highlight">esthétique et durabilité</span>. Que ce soit pour <span className="highlight">l'intérieur</span> ou
              <span className="highlight">l'extérieur</span>, nous vous assurons une précision pour créer
              des espaces <span className="highlight">élégants et fonctionnels</span>. Notre expertise couvre tous
              types de carrelage, des plus traditionnels aux plus modernes, afin
              de répondre à tous vos critères décoratifs.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={Mosaïque} alt="Réalisations" className="image-reahome" />
          <div className="service-text">
            <h2><span className="highlight">Mosaïques</span></h2>
            <p>
              Notre équipe réalise l'installation de <span className="highlight">mosaïques personnalisées</span>. Nous utilisons des <span className="highlight">matériaux variés</span>
              et des <span className="highlight">techniques avancées</span> pour créer des motifs originaux et élégants. Si vous cherchez à ajouter une touche unique à vos
              espaces, qu'il s'agisse de <span className="highlight">salles de bains</span>, de <span className="highlight">cuisines</span> ou
              d'espaces extérieurs, notre travail met en valeur vos créations en véritables œuvres.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={Parement} alt="Réalisations" className="image-reahome" />
          <div className="service-text">
            <h2><span className="highlight">Parement</span></h2>
            <p>
  Transformez vos murs avec notre expertise en pose de parement en <span className="highlight">pierre naturelle</span> ou <span className="highlight">brique</span>. Nos experts assurent une <span className="highlight">installation durable</span> pour des <span className="highlight">effets esthétiques</span> uniques, que ce soit à l'<span className="highlight">intérieur</span> ou à l'<span className="highlight">extérieur</span>. Nous travaillons avec des matériaux de <span className="highlight"> qualité</span> pour sublimer vos surfaces.
</p>





          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
