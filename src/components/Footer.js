import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Informations personnelles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Abdoulaye Sow</h3>
            <p className="text-gray-400 text-sm mb-2">Développeur Web Full-Stack</p>
            <p className="text-gray-400 text-sm">Dakar, Sénégal</p>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:Sabdoulaye768@gmail.com" className="flex items-center text-gray-400 hover:text-white text-sm transition-colors">
                <Mail size={14} className="mr-2" />
                Sabdoulaye768@gmail.com
              </a>
              <a href="tel:+221770132849" className="flex items-center text-gray-400 hover:text-white text-sm transition-colors">
                <Phone size={14} className="mr-2" />
                +221 77 013 28 49
              </a>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/abdoulaye-sow-339b246bb" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/abdoulaye-sow" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Abdoulaye Sow. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;