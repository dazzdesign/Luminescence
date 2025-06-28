import React from 'react';
import './PourquoiChoisirSection.css';

const PourquoiChoisirSection = () => {
  return (
    <section className="fade-section luminescence-info">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Pourquoi Choisir <span className="gold">LUMINESCENCE CARRELAGE</span> ?
        </h2>

        <p>
          Chez <strong>LUMINESCENCE CARRELAGE</strong>, nous allions <strong>innovation lumineuse</strong>, <strong>design architectural</strong> et <strong>qualité certifiée</strong> pour offrir une solution unique sur le marché du revêtement. Notre expertise en <a href="#">fibre optique intégrée</a> permet de créer des carrelages lumineux durables, esthétiques et adaptés à tous les environnements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Bloc 1 */}
          <div className="card text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-icon mx-auto mb-4">
              <svg fill="#fbbf24" viewBox="0 0 24 24" width="40" height="40" aria-label="Innovation">
                <path d="M12 2a7 7 0 00-7 7c0 4.418 7 13 7 13s7-8.582 7-13a7 7 0 00-7-7z" />
                <circle cx="12" cy="7" r="1.5" fill="#f59e0b" />
                <path d="M12 9v4" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Technologie Innovante</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Maîtrise exclusive de la <a href="#" className="text-yellow-500 underline hover:text-yellow-600">technologie à fibre optique</a> pour des effets lumineux inédits, directement intégrés dans le carrelage.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="card text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-icon mx-auto mb-4">
              <svg fill="#fbbf24" viewBox="0 0 24 24" width="40" height="40" aria-label="Applications">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M3 9h18M9 21V9" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Applications Multiples</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Adapté aux <a href="#" className="text-yellow-500 underline hover:text-yellow-600">piscines</a>, <a href="#" className="text-yellow-500 underline hover:text-yellow-600">salles de bain</a>, terrasses et espaces commerciaux.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="card text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-icon mx-auto mb-4">
              <svg fill="#fbbf24" viewBox="0 0 24 24" width="40" height="40" aria-label="Durabilité">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Durabilité & Qualité</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Matériaux premium validés par <a href="https://www.basf.com/fr/fr.html" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline hover:text-yellow-600">BASF Construction Chemicals</a>, garantissant une lumière stable et durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiChoisirSection;
