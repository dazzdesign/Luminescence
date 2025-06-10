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
      <h1>Luminescence carrelage : spécialiste carrelage & fibre optique</h1>
      <div className="content">
        <div className="hexagon-container">
          <div className="hexagon">
            <img src={hexImage} alt="photo" />
          </div>
        </div>
        
        <div className="text-container">
          <p>
            LUMINESCENCE CARRELAGE a été créée par Denis Dussert, artisan hors norme et toujours en recherche d’être à la pointe des nouvelles technologies pour servir au mieux sa clientèle.
          </p>
          <p>
            Artisan du carrelage depuis 30 ans à Manosque, dans les Alpes de Haute-Provence, Denis Dussert est vivement sollicité pour la qualité de son travail. Il s’est également beaucoup investi pour trouver les meilleures solutions permettant d’inclure la lumière dans ses réalisations, ce dont il est spécialiste.
          </p>
          <p>
            Le choix de la fibre optique s'explique par les effets absolument uniques que l’on ne peut créer que par le biais de celle-ci. Constatant que tout était à inventer dans ce domaine, Denis Dussert a choisi à travers LUMINESCENCE CARRELAGE les meilleurs partenaires pour obtenir un résultat d’exception et surtout durable.
          </p>
          <p>
            Les prestations proposées aujourd’hui par LUMINESCENCE CARRELAGE sont le fruit de patients essais, de plusieurs brevets de mise en oeuvre qui ont enfin permis d’associer les deux matériaux que sont le carrelage et la fibre optique dans une même réalisation.
          </p>
          <p>
            La mise en œuvre et les produits nécessaires (colle, carrelage, joints…) consiste en un procédé qui a été validé par le bureau d’étude de Construction Chemicals BASF France, avec la marque PCI qui, depuis plus de 50 ans, propose des solutions innovantes, à la pointe de la technologie, pour les professionnels de la construction. Le résultat vise donc tout simplement l’excellence !
          </p>
          <button className="bouton" onClick={handleContact}>
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
