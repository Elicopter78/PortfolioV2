import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sakura/20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src="/elie.png" alt="Elie" className="w-10 h-10 object-cover rounded-full flex-shrink-0" />
              <span className="text-gray-900 font-serif-jp text-xl font-semibold">Elie</span>
            </div>
            <p className="text-gray-600 text-sm text-center md:text-left">
              Développeur Full-Stack
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-gray-900 font-jp font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-center text-sm">
              <li>
                <a href="#hero" className="text-gray-600 hover:text-sakura transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-sakura transition-colors duration-300">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-sakura transition-colors duration-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-sakura transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-gray-900 font-jp font-semibold mb-4">Me contacter</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Elicopter78"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-sakura/30 flex items-center justify-center text-gray-900 hover:bg-sakura hover:text-white hover:border-sakura transition-all duration-300"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://discordapp.com/users/1430155559197216839"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-sakura/30 flex items-center justify-center text-gray-900 hover:bg-sakura hover:text-white hover:border-sakura transition-all duration-300"
                title="Discord"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="mailto:crevette@elie-dev.fr"
                className="w-10 h-10 rounded-full bg-gray-100 border border-sakura/30 flex items-center justify-center text-gray-900 hover:bg-sakura hover:text-white hover:border-sakura transition-all duration-300"
                title="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-sakura/30 to-transparent mb-8"></div>

        <div className="text-center text-gray-600 text-sm">
          <p>
            &copy; 2025-{currentYear} - Elie Saidane Lemercier - Tous droits réservés
          </p>
          <p className="mt-2">
            Fait avec <span className="text-sakura">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
