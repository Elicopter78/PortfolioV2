import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-sakura/10 rounded-full border border-sakura/30">
              <span className="w-2 h-2 rounded-full bg-sakura"></span>
              <span className="text-sakura font-jp text-sm font-semibold">CONTACT</span>
              <span className="w-2 h-2 rounded-full bg-sakura"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-jp font-bold text-gray-900 mb-4">
            Me Contacter
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons ensemble !
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`transition-all duration-500 ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-8">
              <div className="group p-6 rounded-xl bg-gray-50 border border-sakura/20 hover:border-sakura/50 transition-all duration-300 cursor-pointer">
                <a href="mailto:crevette@elie-dev.fr" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sakura/20 to-sakura-dark/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="text-sakura" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-jp font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 hover:text-sakura transition-colors duration-300">
                      crevette@elie-dev.fr
                    </p>
                  </div>
                </a>
              </div>

              <div className="group p-6 rounded-xl bg-gray-50 border border-sakura/20 hover:border-sakura/50 transition-all duration-300 cursor-pointer">
                <a href="https://discordapp.com/users/1430155559197216839" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sakura/20 to-sakura-dark/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faDiscord} className="text-sakura" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-jp font-semibold mb-1">Discord</h3>
                    <p className="text-gray-600 hover:text-sakura transition-colors duration-300">
                      @elie.off
                    </p>
                  </div>
                </a>
              </div>

              <div className="group p-6 rounded-xl bg-gray-50 border border-sakura/20 hover:border-sakura/50 transition-all duration-300 cursor-pointer">
                <a href="https://github.com/Elicopter78" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sakura/20 to-sakura-dark/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faGithub} className="text-sakura" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-jp font-semibold mb-1">GitHub</h3>
                    <p className="text-gray-600 hover:text-sakura transition-colors duration-300">
                      Elicopter78
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 -right-40 w-60 h-60 rounded-full border border-sakura/10 -z-10 hidden lg:block"></div>
        <div className="absolute bottom-1/3 -left-40 w-72 h-72 rounded-full border border-sakura/10 -z-10 hidden lg:block"></div>
      </div>
    </section>
  );
}
