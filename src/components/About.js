import React from 'react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">À propos de moi</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/profil.jpg"
              alt="Abdoulaye Sow - Développeur Web"
              className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
              }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Développeur Web passionné
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Diplômé d'un BTS en Développement Web et Mobile (ISEP Thiès), je suis actuellement 
              développeur web freelance spécialisé en Front-End. Je crée des sites modernes, 
              responsives et optimisés avec une expertise particulière en React JS.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Fort d'une expérience chez ASI Sénégal et de projets freelance diversifiés, 
              je maîtrise l'écosystème complet du développement web : de la conception UI/UX 
              sur Figma au développement d'applications complexes, en passant par la création 
              de sites e-commerce.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Basé à Dakar, Sénégal, je collabore avec des équipes locales et internationales 
              pour résoudre des problèmes techniques complexes et livrer des solutions web 
              performantes qui dépassent les attentes clients.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;