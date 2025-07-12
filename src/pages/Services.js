import React, { useEffect } from 'react';
import './services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-container">
      <h1>Notre spécialité : la lumière fibre optique multisurface</h1>
      <h2>Un savoir-faire unique pour un rendu spectaculaire</h2>

      <p>
        L’inclusion de lumière dans les surfaces (sols, murs, dalles, mosaïques…) crée des ambiances élégantes et surprenantes.
        Cette technique séduit particuliers, architectes, décorateurs et paysagistes.
      </p>

      <p>Les applications sont infinies :</p>

      <ul>
        <li>Espaces de vie : chambres, douches, escaliers</li>
        <li>Espaces bien-être : hammams, piscines, spas</li>
        <li>Terrasses, allées, fontaines</li>
        <li>Hôtels, restaurants, bars, boutiques</li>
        <li>Espaces de santé ou malvoyants (haute visibilité)</li>
        <li>Zones où les sources lumineuses classiques sont impossibles</li>
      </ul>

      <p>
        Nous réalisons tous types de projets, en France et à l’étranger, avec la même exigence de qualité. Accessible à de nombreux budgets, la fibre optique s’adapte à tous les rêves.
      </p>

      <div className="video-wrapper">
        <iframe
          src="https://customer-xqcdu670n9dp9ds1.cloudflarestream.com/14218f1a9dc0cd83796502615a1bc598/iframe?autoplay=1&muted=1"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title="Vidéo Fibre Optique"
        ></iframe>
      </div>

      <h3>Pourquoi la fibre optique ?</h3>

      <p>
        Contrairement aux LED intégrées, la fibre sépare la lumière de son conducteur. Résultat ?
        Aucune panne visible, pas d’entretien, et un effet lumineux 100% personnalisable.
      </p>

      <p>
        Robuste comme la fibre de verre, elle résiste à l’eau, aux produits, aux UV et à la chaleur.
        Une fois posée, elle est là pour longtemps.
      </p>

      <p>
        Le générateur placé hors champ diffuse la lumière : blanc chaud, couleurs, effets...
        même la chromothérapie est possible avec une simple télécommande.
      </p>

      <p>Une ambiance évolutive, sans toucher à l’installation. Magique, non ?</p>
    </div>
  );
};

export default Services;
