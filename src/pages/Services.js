import React, { useEffect } from 'react';
import './services.css'; // Garde ce fichier pour tes styles

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll en haut à l'ouverture
  }, []);

  return (
    <div className="services-container">
      <h1>notre spécialité : l'inclusion de lumière fibre optique multisurface</h1>
      <h2>un travail minutieux pour un résultat exceptionnel</h2>

      <p>
        Élément fort de la décoration, créatrice d’ambiance et de bien-être, l’illumination des parois (sol, mur…) au moyen de la fibre suscite un vif intérêt chez les particuliers, architectes, décorateurs et paysagistes.
        Les possibilités sont immenses et l’inclusion de lumière dans les surfaces en carrelages, dalles, mosaïques, ou autres supports donne un résultat adapté à de très nombreux projets :
      </p>

      <ul>
        <li>Salons, chambres, salles d’eau ou de bain, douches, escaliers, couloirs,</li>
        <li>Hammams, saunas, piscines, bassins et fontaines,</li>
        <li>Decks, terrasses, allées,</li>
        <li>Hôtels, gîtes, chambres d’hôtes, restaurants, bars, lounges,</li>
        <li>Espaces de détente et bien-être, de remise en forme et de sport,</li>
        <li>Halls d’exposition, boutiques, présentations muséographiques,</li>
        <li>Lieux de santé ou pour personnes malvoyantes (la fibre est très visible !),</li>
        <li>Tout espace où l’installation de sources lumineuses impérissables est impossible.</li>
      </ul>

      <p>
        FIBRE & CARRO est au service de tous les projets, des plus simples aux plus extravagants, avec le même amour du travail bien fait, le même souci d’offrir une part de rêve, en France comme à l’étranger.
      </p>

      <p>
        La réalisation d’un projet de fibre optique lumineuse dans le carrelage, fournitures et installations, peut varier de quelques centaines à plusieurs dizaines de milliers d’euros selon le projet, ce qui rend la fibre optique accessible à de nombreux budgets.
      </p>

      <h3>Les atouts incomparables de la fibre optique</h3>

      <p>
        À la différence de tout autre type d’éclairage, le système de la fibre optique différencie nettement le générateur de lumière de son conducteur, ce qui présente des avantages incomparables.
      </p>

      <p>
        La fibre optique utilisée par LUMINESCENCE CARRELAGE est de qualité similaire à celle de la fibre de verre, qui est impérissable ! Cette fibre, une fois mise en place dans les matériaux, est insensible à son environnement ainsi qu’aux agressions habituelles de la vie d’un intérieur ou d’un espace extérieur (eau, nettoyants, changements de température, UV…). En conséquence, ce conducteur est installé à vie, en tout cas aussi longtemps que le carrelage ou le matériau reste en place ! C’est une différence énorme avec les autres systèmes encastrés qui, une fois en panne ou en fin de vie, nécessitent de tout casser pour être réinstallés.
        La propriété de la fibre optique est donc de conduire la lumière qu’on lui soumet jusqu’à son extrémité, seul point visible une fois la réalisation terminée, quelle que soit cette lumière en terme de couleur, d’intensité ou de variations.
      </p>

      <p>
        À l’origine des fibres est installé le générateur, accessible en un lieu choisi, hors de l’espace éclairé. C’est avec ce générateur que l’on diffuse la lumière désirée (blanc froid, blanc chaud, couleurs ou variations de couleurs) et que l’on impulse la manière dont elle est diffusée.
      </p>

      <p>
        Tout est donc possible : lumière fixe, scintillement, changement de couleur, variations d’intensité, etc. Le variateur est pilotable par télécommande.
      </p>

      <p>
        Les fibres permettent de changer totalement d’ambiance en intervenant simplement sur le générateur. Par exemple, si vous souhaitez passer d’une lumière blanche à la chromothérapie, nul besoin d’intervenir sur les fibres : il suffit d’adapter le générateur en conséquence ! Fabuleux n'est-ce pas ?
      </p>
    </div>
  );
};

export default Services;
