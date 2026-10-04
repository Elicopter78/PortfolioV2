import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGitAlt, faDiscord, faNodeJs, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faComments, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const skillGroups = [
  {
    number: '01', title: 'Web & interfaces', icon: faCode,
    skills: [
      { name: 'React.js', icon: faReact },
      { name: 'HTML/CSS', icon: faHtml5 },
      { name: 'Node.js', icon: faNodeJs },
    ],
  },
  {
    number: '02', title: 'Bots Discord', icon: faComments,
    skills: [
      { name: 'Discord.js', icon: faDiscord },
      { name: 'Discord.py', icon: faDiscord },
    ],
  },
  {
    number: '03', title: 'Données', icon: faDatabase,
    skills: [
      { name: 'SQLite', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
    ],
  },
  {
    number: '04', title: 'Outils & systèmes', icon: faServer,
    skills: [
      { name: 'Python', icon: faPython },
      { name: 'Git', icon: faGitAlt },
      { name: 'Configuration VPS', icon: faServer },
    ],
  },
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
    <section id="skills" ref={sectionRef} className="relative px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-block">
            <div className="flex items-center gap-3 rounded-full border border-sakura/30 bg-sakura/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-sakura" />
              <span className="font-jp text-sm font-semibold text-sakura">COMPÉTENCES</span>
              <span className="h-2 w-2 rounded-full bg-sakura" />
            </div>
          </div>
          <h2 className="mb-4 font-serif-jp text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Mes Compétences
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Les technologies et outils que j'utilise pour créer des sites, applications et bots Discord.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={group.number}
              className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="h-full rounded-xl border border-sakura/20 bg-gray-50 p-6 transition-all duration-300 hover:border-sakura/50 hover:bg-gray-100 hover:shadow-lg hover:shadow-sakura/20 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sakura/20 to-sakura-dark/20 text-lg text-sakura">
                    <FontAwesomeIcon icon={group.icon} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1 font-jp text-xs font-semibold text-sakura">DOMAINE {group.number}</p>
                    <h3 className="font-jp text-xl font-semibold text-gray-900">{group.title}</h3>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 rounded-full border border-sakura/30 bg-sakura/10 px-3 py-1 font-jp text-xs text-sakura sm:text-sm">
                    <FontAwesomeIcon icon={skill.icon} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
