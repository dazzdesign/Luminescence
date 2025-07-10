import React, { useEffect } from 'react';
import './Granito.css';

const Granito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="granito-container">
      <h1>Inclusion de fibre optique :<br/> Granito coulé sur-mesure !</h1>
      <p>
        Dans le Granito, les granulats sont directement mélangés dans la masse avant d'être coulés au sol.
        La particularité Fibre & Carro : l'inclusion de lumière fibre optique, le tout sur-mesure et surtout selon vos envies !
      </p>

      {/* ✅ Vidéo Cloudflare Stream */}
      <div className="granito-video-wrapper" style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
        <iframe
          src="https://customer-xqcdu670n9dp9ds1.cloudflarestream.com/f10f12f802bef4d64badfc7f4ff8e5c8/iframe?autoplay=1&muted=1"
          style={{
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Vidéo Granito"
        ></iframe>
      </div>

      <h2>AD LUCEM, notre partenaire Granito/Terrazzo</h2>
      <p>
        LUMINESCENCE CARRELAGE vous offre son expertise en utilisant des matériaux haute qualité.
        C'est pourquoi nous travaillons avec les meilleurs. Aujourd'hui on vous parle de notre fournisseur en Granito.
        AD LUCEM, c'est la rencontre entre les professionnels du bâtiment et ceux de la chimie pour proposer des matières
        décoratives millimétriques minérales en sols et murs. Les plus grandes marques leur font confiance, et nous aussi !
      </p>
    </div>
  );
};

export default Granito;
