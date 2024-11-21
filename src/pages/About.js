import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css'; 
import hexImage from '../img/apropos.png'; 

const About = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact'); 
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="about-container">
      <h1><span className="highlight">À propos</span></h1>
      <div className="content">
        <div className="hexagon-container">
          <div className="hexagon">
            <br />
            <br />
            <img src={hexImage} alt="photo" />
          </div>
        </div>
        
        <div className="text-container">
          <br />
          <p>Bonjour,
          <br />
          <br />
            Je suis <span className="highlight">Laurent Dussert</span>, artisan carreleur et fondateur de <span className="highlight">Provence Carrelage</span>.
            Après plusieurs années passées aux côtés de mon père, <span className="highlight">Denis Dussert</span>, chez <span className="highlight">PROCARRÉ</span>,
            j’ai décidé de me lancer dans cette aventure pour poursuivre ma passion du métier de carreleur tout en y apportant ma touche personnelle.
            <br />
            <br />
            Mes réalisations allient <span className="highlight">tradition</span> et <span className="highlight">innovation</span>,
            intégrant des techniques modernes tout en respectant les savoir-faire transmis au fil des ans. Mon objectif est de répondre aux besoins variés de mes clients,
            particuliers ou professionnels. Je m’adapte à chaque projet.
            <br />
            <br />
            La satisfaction de mes clients est au cœur de mes préoccupations. J’attache une grande importance à l’<span className="highlight">écoute</span>, à la <span className="highlight">rigueur</span> et à la <span className="highlight">réactivité</span> dans chacune de mes interventions.
            Vous souhaitez concrétiser vos idées et créer des espaces qui vous ressemblent.
            <br />
            <br />
            N’hésitez pas à me contacter pour discuter de votre projet ou obtenir un <span className="highlight">devis gratuit</span> sans engagement.
          </p>
          <br />
          <button className="contact-button" onClick={handleContact}>
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
