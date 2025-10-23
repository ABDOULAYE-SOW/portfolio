import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Supprimer l'erreur si l'utilisateur commence à taper
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nom.trim()) errors.nom = 'Le nom est requis';
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.message.trim()) errors.message = 'Le message est requis';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Simulation d'envoi
      alert('Message envoyé avec succès ! Je vous recontacterai bientôt.');
      setFormData({ nom: '', email: '', message: '' });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contactez-moi</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
            <p className="text-gray-300 mb-8">
              Développeur freelance basé à Dakar, Sénégal. N'hésitez pas à me contacter 
              pour discuter de vos projets web ou pour toute collaboration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4 text-cyan-400" size={20} />
                <span>Sabdoulaye768@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-cyan-400" size={20} />
                <span>+221 77 013 28 49</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-cyan-400" size={20} />
                <span>Dakar, Sénégal</span>
              </div>
            </div>

            {/* Liens professionnels */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Mes réseaux</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/abdoulaye-sow-339b246bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/abdoulaye-sow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Github className="mr-2" size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  formErrors.nom ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {formErrors.nom && <p className="text-red-400 text-sm mt-1">{formErrors.nom}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  formErrors.email ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none ${
                  formErrors.message ? 'ring-2 ring-red-500' : ''
                }`}
              ></textarea>
              {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition-colors"
            >
              Envoyer le message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;