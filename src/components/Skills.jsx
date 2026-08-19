import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGitAlt, faDiscord, faNodeJs, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'Python', level: 85, icon: faPython },
  { name: 'HTML/CSS', level: 80, icon: faHtml5 },
  { name: 'Discord.py', level: 80, icon: faDiscord },
  { name: 'Configuration VPS', level: 80, icon: faServer },
  { name: 'Node.js', level: 75, icon: faNodeJs },
  { name: 'React.js', level: 70, icon: faReact },
  { name: 'SQLite', level: 70, icon: faDatabase },
  { name: 'Discord.js', level: 70, icon: faDiscord },
  { name: 'Git', level: 70, icon: faGitAlt },
  { name: 'PostgreSQL', level: 65, icon: faDatabase },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-sakura/10 rounded-full border border-sakura/30">
              <span className="w-2 h-2 rounded-full bg-sakura"></span>
              <span className="text-sakura font-jp text-sm font-semibold">COMPÉTENCES</span>
              <span className="w-2 h-2 rounded-full bg-sakura"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-jp font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Une sélection des technologies et outils que j'utilise quotidiennement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group transition-all duration-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="p-6 rounded-xl bg-gray-50 border border-sakura/20 hover:border-sakura/50 group-hover:bg-gray-100 transition-all duration-300 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-sakura">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <h3 className="text-gray-900 font-jp font-semibold mb-4">
                  {skill.name}
                </h3>
                
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-sakura to-sakura-light rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? 'w-[var(--progress)]' : 'w-0'
                    }`}
                    style={{
                      '--progress': `${skill.level}%`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
                
                <div className="text-right mt-2 text-sakura font-jp font-bold text-sm">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 -left-20 w-40 h-40 rounded-full border border-sakura/10 -z-10 hidden lg:block"></div>
        <div className="absolute bottom-1/4 -right-20 w-32 h-32 rounded-full border-2 border-sakura/10 -z-10 hidden lg:block"></div>
      </div>
    </section>
  );
}
