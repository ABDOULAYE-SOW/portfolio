import React from 'react';
import { Download, Eye } from 'lucide-react';

const Hero = () => {
  // ID de votre fichier Google Drive
  const googleDriveFileId = '1Dxj-1xRNxr_juJNtaRoylnOoJddDNF0g';
  
  // Liens Google Drive
  const cvViewLink = `https://drive.google.com/file/d/${googleDriveFileId}/view`;
  const cvDownloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

  // Fonction pour télécharger le CV depuis Google Drive
  const downloadCV = () => {
    // Ouvrir le lien de téléchargement direct
    window.open(cvDownloadLink, '_blank');
  };

  // Fonction pour voir le CV
  const viewCV = () => {
    // Ouvrir le CV en mode visualisation
    window.open(cvViewLink, '_blank');
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Bonjour, je suis{' '}
          <span className="text-cyan-400">Abdoulaye Sow</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Développeur Web Front-End
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Développeur web freelance passionné, spécialisé en Front-End, 
          je crée des sites modernes, responsives et optimisés. Expert en création 
          d'interfaces utilisateur et applications web performantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={downloadCV}
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
          >
            <Download className="mr-2" size={20} />
            Télécharger mon CV
          </button>
          <button
            onClick={viewCV}
            className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Eye className="mr-2" size={20} />
            Consulter mon CV
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          📄 CV au format PDF - Dernière mise à jour : Mars 2025
        </p>
      </div>
    </section>
  );
};

export default Hero;