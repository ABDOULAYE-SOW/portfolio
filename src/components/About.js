import React from 'react';
import { Award, Briefcase, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">À propos de moi</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image de profil avec effet */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <img
              src={process.env.PUBLIC_URL + '/images/profil.jpg'}
              alt="Abdoulaye Sow - Développeur Web"
              className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl relative z-10 border-4 border-cyan-500/30 hover:scale-105 transition-transform duration-300"
              
            />
            {/* Badge de disponibilité */}
            <div className="absolute bottom-8 right-1/4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Disponible
            </div>
          </div>

          {/* Contenu texte */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="text-cyan-400 mr-2" size={20} />
              <span className="text-gray-400">Dakar, Sénégal</span>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Développeur Web Full-Stack passionné
            </h3>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Diplômé d'un <strong className="text-white">BTS en Développement Web et Mobile</strong> (ISEP Thiès), 
              je suis actuellement développeur web freelance spécialisé en Front-End. Je crée des sites modernes, 
              responsives et optimisés avec une expertise particulière en <strong className="text-cyan-400">React JS</strong>.
            </p>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Fort d'une expérience chez <strong className="text-white">ASI Sénégal</strong> et de projets 
              freelance diversifiés, je maîtrise l'écosystème complet du développement web : de la conception 
              UI/UX sur Figma au développement d'applications complexes, en passant par la création de sites e-commerce.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Basé à Dakar, Sénégal, je collabore avec des équipes locales et internationales pour résoudre 
              des problèmes techniques complexes et livrer des solutions web performantes qui dépassent 
              les attentes clients.
            </p>

            {/* Statistiques avec icônes */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <Briefcase className="mx-auto mb-2 text-cyan-400" size={24} />
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-xs text-gray-400">Années d'expérience</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <Award className="mx-auto mb-2 text-cyan-400" size={24} />
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-xs text-gray-400">Projets réalisés</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <Users className="mx-auto mb-2 text-cyan-400" size={24} />
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-gray-400">Satisfaction client</div>
              </div>
            </div>

            {/* Compétences clés */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-300">Domaines d'expertise :</h4>
              <div className="flex flex-wrap gap-2">
                {['React JS', 'WordPress', 'Laravel', 'PrestaShop', 'Joomla', 'Figma (UX/UI)', 'HTML', 'CSS'].map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;