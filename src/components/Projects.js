import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Données des projets - PERSONNALISEZ VOS PROJETS ICI
  const projets = [
    {
      id: 1,
      titre: 'Site E-commerce PrestaShop',
      description: 'Développement d\'un site e-commerce complet avec PrestaShop, gestion des produits, panier et système de paiement sécurisé. Interface moderne et responsive.',
      image: `${process.env.PUBLIC_URL}/images/projet1.jpg`, 
      github: 'https://github.com/abdoulaye-sow/ecommerce-prestashop',
      demo: '#',
      technologies: ['PrestaShop', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      titre: 'Site Médical HOGIP',
      description: 'Création d\'un site web dans le domaine médical avec Joomla chez ASI Sénégal. Interface moderne, gestion de contenu optimisée et responsive design.',
      image: `${process.env.PUBLIC_URL}/images/projet2.jpg`,
      github: 'https://github.com/abdoulaye-sow/site-medical-joomla',
      demo: 'https://www.hogip.sn/', 
      technologies: ['Joomla', 'PHP', 'MySQL', 'Bootstrap', 'CSS']
    },
    {
      id: 3,
      titre: 'Application Web DiangIA',
      description: 'Développement d\'une application web DiangIA pour l\'éducation des éléve assisté par IA. Interface utilisateur intuitive et intégration de modèles d\'intelligence artificielle.',
      image: `${process.env.PUBLIC_URL}/images/DiangIA.png`,
      github: 'https://github.com/ABDOULAYE-SOW/diangIA',
      demo: 'https://abdoulaye-sow.github.io/diangia.github.io/', 
      technologies: ['Html', 'Css', 'JavaScript', 'Figma']
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Mes Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map(projet => (
            <div key={projet.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/374151/9CA3AF?text=Image+du+projet';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{projet.titre}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{projet.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <Github size={16} className="mr-1 group-hover:scale-110 transition-transform" />
                    Code
                  </a>
                  <a
                    href={projet.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <ExternalLink size={16} className="mr-1 group-hover:scale-110 transition-transform" />
                    Démo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section "Plus de projets" */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Découvrez plus de projets sur mon GitHub
          </p>
          <a
            href="https://github.com/abdoulaye-sow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Github className="mr-2" size={20} />
            Voir tous mes projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;