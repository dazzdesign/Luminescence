import React, { useEffect } from 'react';
import './Granito.css';  // à créer pour le style
import './home.css';  // à créer pour le style

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
      <h2>AD LUCEM, notre partenaire Granito/Terrazzo</h2>
      <p>
        LUMINESCENCE CARRELAGE vous offre son expertise en utilisant des matériaux haute qualité. C'est pourquoi nous travaillons avec les meilleurs. Aujourd'hui on vous parle de notre fournisseur en Granito. AD LUCEM, c'est la rencontre entre les professionnels du bâtiment et ceux de la chimie pour proposer des matières décoratives millimétriques minérales en sols et murs. Les plus grandes marques leur font confiance, et nous aussi !
      </p>
    </div>
  );
};

export default Granito;
