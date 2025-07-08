import React, { useEffect } from 'react';
import './Granito.css';  // Ton fichier de style
import granitoVideo from '../img/video/granito.mp4'; // ✅ Assure-toi que ce chemin est correct


const Granito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="granito-container">
      <h1>Inclusion de fibre optique : Granito coulé sur-mesure !</h1>
      <p>
        Dans le Granito, les granulats sont directement mélangés dans la masse avant d'être coulés au sol. La particularité Fibre & Carro : l'inclusion de lumière fibre optique, le tout sur-mesure et surtout selon vos envies !
      </p>

      {/* ✅ Vidéo insérée ici */}
      <div className="granito-video-wrapper">
<video
  src={granitoVideo}
  autoPlay
  muted
  controls
  playsInline
  preload="auto"
  className="granito-video"
/>

      </div>

      <h2>AD LUCEM, notre partenaire Granito/Terrazzo</h2>
      <p>
        LUMINESCENCE CARRELAGE vous offre son expertise en utilisant des matériaux haute qualité. C'est pourquoi nous travaillons avec les meilleurs. Aujourd'hui on vous parle de notre fournisseur en Granito. AD LUCEM, c'est la rencontre entre les professionnels du bâtiment et ceux de la chimie pour proposer des matières décoratives millimétriques minérales en sols et murs. Les plus grandes marques leur font confiance, et nous aussi !
      </p>
    </div>
  );
};

export default Granito;
