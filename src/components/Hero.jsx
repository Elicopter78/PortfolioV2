import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      <div className="max-w-2xl w-full text-center z-10">
        <div className={`mb-8 inline-block transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-sakura via-sakura-light to-sakura-dark flex items-center justify-center shadow-2xl shadow-sakura/50 hover:shadow-sakura hover:scale-105 transition-all duration-300 overflow-hidden">
              <img src="/elie.png" alt="Elie" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-sakura/30 animate-pulse-slow"></div>
          </div>
        </div>

        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif-jp font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Elie Saidane Lemercier
        </h1>

        <div className={`flex flex-col items-center gap-2 mb-8 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
          <p className="text-xl sm:text-2xl font-jp text-sakura font-semibold">
            💻 Développeur Full-Stack
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Création de sites, applications et bots Discord
          </p>
        </div>

        <p className={`text-base sm:text-lg text-gray-700 mb-12 max-w-xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          👋 Bonjour ! J'ai 16 ans et je suis passionné par le développement web, la création d'applications et le Japon ! Vous avez un projet en tête ? Parlons ensemble ! 🚀
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <a href="https://github.com/Elicopter78" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-sakura text-white font-jp font-bold rounded-lg hover:bg-sakura-light shadow-lg hover:shadow-sakura/50 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <button onClick={(e) => handleScroll(e, '#contact')} className="px-8 py-3 border-2 border-sakura text-sakura font-jp font-bold rounded-lg hover:bg-sakura/10 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>Me Contacter</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="animate-bounce text-sakura">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
