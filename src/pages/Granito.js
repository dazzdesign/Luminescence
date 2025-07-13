import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Granito.css';

const Granito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="granito-container">
      <Helmet>
        <title>Granito lumineux sur-mesure – Fibre optique intégrée | Luminescence Carrelage</title>
        <meta
          name="description"
          content="Découvrez notre Granito coulé personnalisé avec intégration de fibre optique. Un sol innovant et lumineux, réalisé sur-mesure avec AD LUCEM."
        />
        <meta
          name="keywords"
          content="granito lumineux, fibre optique dans le sol, carrelage innovant, sol sur-mesure lumineux, AD LUCEM, terrazzo moderne"
        />
        <meta name="author" content="Denis Dussert" />

        {/* Open Graph (réseaux sociaux) */}
        <meta property="og:title" content="Granito lumineux avec fibre optique – Luminescence Carrelage" />
        <meta property="og:description" content="Granito coulé sur-mesure avec inclusion de fibre optique. Une innovation décorative unique, signée Luminescence Carrelage." />
        <meta property="og:url" content="https://luminescence-carrelage.fr/granito" />
        <meta property="og:image" content="https://luminescence-carrelage.fr/logo512.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://luminescence-carrelage.fr/granito" />
      </Helmet>

      <h1>Inclusion de fibre optique :<br/> Granito coulé sur-mesure !</h1>
      <p>
        Dans le Granito, les granulats sont directement mélangés dans la masse avant d'être coulés au sol.
        La particularité Fibre & Carro : l'inclusion de lumière fibre optique, le tout sur-mesure et surtout selon vos envies !
      </p>

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
