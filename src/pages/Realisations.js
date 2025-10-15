import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './realisation.css';

// 1) require tout le dossier img/chantiers (JPEG + PNG, insensible à la casse)
const reqImgs = require.context('../img/chantiers', false, /\.(jpe?g|png)$/i);

// 2) tri « naturel »
const sortedKeys = reqImgs
  .keys()
  .sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );

// 3) génère le tableau images
const images = sortedKeys.map((key) => {
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

  // ----------- VIDEO 1 : autoplay on visible + centrage (16:9) ----------
  const frameRef1 = useRef(null);
  const sentinelRef1 = useRef(null);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    const el = sentinelRef1.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible1(e.isIntersecting && e.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const baseSrc1 =
    'https://customer-xqcdu670n9dp9ds1.cloudflarestream.com/8c069be9c622b2435c0365510215668b/iframe?poster=https%3A%2F%2Fcustomer-xqcdu670n9dp9ds1.cloudflarestream.com%2F8c069be9c622b2435c0365510215668b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600';

  const iframeSrc1 = visible1
    ? `${baseSrc1}&autoplay=1&muted=1&playsinline=1&loop=1&preload=auto`
    : `${baseSrc1}&muted=1&playsinline=1&preload=metadata`;

  // ----------- VIDEO 2 (portrait 9:16) : autoplay on visible + centrage ----------
  const frameRef2 = useRef(null);
  const sentinelRef2 = useRef(null);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const el = sentinelRef2.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible2(e.isIntersecting && e.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const baseSrc2 =
    'https://customer-xqcdu670n9dp9ds1.cloudflarestream.com/75d75c7cce678d755d16dabe6507fafc/iframe?poster=https%3A%2F%2Fcustomer-xqcdu670n9dp9ds1.cloudflarestream.com%2F75d75c7cce678d755d16dabe6507fafc%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600';

  const iframeSrc2 = visible2
    ? `${baseSrc2}&autoplay=1&muted=1&playsinline=1&loop=1&preload=auto`
    : `${baseSrc2}&muted=1&playsinline=1&preload=metadata`;

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
              className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* --------- VIDEO 1 : centrée, 16:9, autoplay quand visible --------- */}
      <div className="video-embed" style={{ margin: '2rem 0' }}>
        <div
          ref={sentinelRef1}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 'min(100%, 900px)',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              ref={frameRef1}
              key={iframeSrc1}
              src={iframeSrc1}
              title="Vidéo de nos réalisations"
              allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* --------- VIDEO 2 (portrait 9:16) : centrée, autoplay quand visible --------- */}
      <div className="video-embed" style={{ margin: '2rem 0' }}>
        <div
          ref={sentinelRef2}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 'min(100%, 560px)', // un peu plus étroit pour de la verticale
              aspectRatio: '9 / 16',     // équivalent à padding-top: 177.777%
            }}
          >
            <iframe
              ref={frameRef2}
              key={iframeSrc2}
              src={iframeSrc2}
              title="Vidéo verticale de nos réalisations"
              allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                width: '80%',
                height: '80%',
                border: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
