import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './realisation.css';

// 1) require tout le dossier img/chantiers
const reqImgs = require.context('../img/chantiers', false, /\.jpe?g$/);

// 2) trie « naturel » pour obtenir : img (1).jpg, img (2).jpg, img (3).jpg, img (3a).jpg, img (3b).jpg, img (4).jpg…
const sortedKeys = reqImgs
  .keys()
  .sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );

// 3) génère le tableau images à partir des clés triées
const images = sortedKeys.map((key) => {
  // extrait le numéro principal pour le titre
  const match = key.match(/img \((\d+)/);
  const num = match ? match[1] : '';
  return {
    src: reqImgs(key),
    titre: `Projet ${num}`,
  };
});

const Realisation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goPrevious = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const goNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="realisation-gallery">
      <Helmet>
        <title>Réalisations en carrelage lumineux – Luminescence Carrelage</title>
        <meta
          name="description"
          content="Découvrez nos réalisations en carrelage lumineux avec fibre optique. Projets sur-mesure à Manosque et en Provence, alliant technologie et artisanat."
        />
        <meta
          name="keywords"
          content="réalisations carrelage lumineux, fibre optique sol, projets Luminescence Carrelage, chantier carrelage Provence"
        />
        <meta name="author" content="Denis Dussert" />
        <meta
          property="og:title"
          content="Nos réalisations – Carrelage lumineux avec fibre optique"
        />
        <meta
          property="og:description"
          content="Inspirez-vous avec nos projets de carrelage lumineux en Provence. Un savoir-faire unique signé Denis Dussert."
        />
        <meta
          property="og:url"
          content="https://luminescence-carrelage.fr/realisations"
        />
        <meta
          property="og:image"
          content="https://luminescence-carrelage.fr/logo512.png"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://luminescence-carrelage.fr/realisations"
        />
      </Helmet>

      <h1 className="realisation-title">Nos Réalisations</h1>

      {/* Galerie principale */}
      <div className="gallery-viewer">
        <div className="gallery-image-container">
          <Zoom>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].titre}
              className="gallery-image"
            />
          </Zoom>

          <button
            className="nav-arrow nav-left desktop-only"
            onClick={goPrevious}
            aria-label="Image précédente"
          >
            &#10094;
          </button>
          <button
            className="nav-arrow nav-right desktop-only"
            onClick={goNext}
            aria-label="Image suivante"
          >
            &#10095;
          </button>
        </div>

        <div className="nav-arrow-container mobile-only">
          <button
            className="nav-arrow"
            onClick={goPrevious}
            aria-label="Image précédente"
          >
            &#10094;
          </button>
          <button
            className="nav-arrow"
            onClick={goNext}
            aria-label="Image suivante"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Vignettes */}
      <div className="gallery-thumbnails-wrapper">
        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.titre}
              className={`thumbnail ${
                index === selectedIndex ? 'active' : ''
              }`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Bloc vidéo responsive – ratio 16:9 */}
      <div className="video-embed" style={{ margin: '2rem 0' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src="https://customer-xqcdu670n9dp9ds1.cloudflarestream.com/8c069be9c622b2435c0365510215668b/iframe?poster=https%3A%2F%2Fcustomer-xqcdu670n9dp9ds1.cloudflarestream.com%2F8c069be9c622b2435c0365510215668b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            title="Vidéo de nos réalisations"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Realisation;
