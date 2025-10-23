import React from 'react';

const Skills = () => {
  // Données des compétences basées sur votre CV
  const competences = [
    { nom: 'HTML & CSS', niveau: '95%', couleur: 'bg-orange-500' },
    { nom: 'JavaScript', niveau: '90%', couleur: 'bg-yellow-500' },
    { nom: 'React JS', niveau: '85%', couleur: 'bg-cyan-500' },
    { nom: 'WordPress', niveau: '80%', couleur: 'bg-blue-600' },
    { nom: 'Laravel', niveau: '75%', couleur: 'bg-red-500' },
    { nom: 'Node.js', niveau: '70%', couleur: 'bg-green-500' },
    { nom: 'Angular', niveau: '65%', couleur: 'bg-red-600' },
    { nom: 'Git', niveau: '80%', couleur: 'bg-gray-500' },
    { nom: 'MySQL', niveau: '75%', couleur: 'bg-blue-500' },
    { nom: 'Figma (UX/UI)', niveau: '70%', couleur: 'bg-purple-500' },
    { nom: 'PrestaShop', niveau: '75%', couleur: 'bg-pink-500' },
    { nom: 'Joomla', niveau: '70%', couleur: 'bg-indigo-500' }
  ];

  return (
    <section id="competences" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Mes Compétences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competences.map((comp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-sm">{comp.nom}</span>
                <span className="text-gray-400 text-sm">{comp.niveau}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${comp.couleur} transition-all duration-1000 ease-out`}
                  style={{ width: comp.niveau }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Compétences Transversales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-cyan-400 text-xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Organisation</h4>
              <p className="text-sm text-gray-400">Gestion efficace des projets et respect des délais</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-cyan-400 text-xl mb-2">💬</div>
              <h4 className="font-semibold mb-2">Communication</h4>
              <p className="text-sm text-gray-400">Collaboration efficace en équipe et avec les clients</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-cyan-400 text-xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Adaptation</h4>
              <p className="text-sm text-gray-400">Capacité d'adaptation aux nouvelles technologies</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-cyan-400 text-xl mb-2">🔧</div>
              <h4 className="font-semibold mb-2">Résolution</h4>
              <p className="text-sm text-gray-400">Résolution créative de problèmes techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;