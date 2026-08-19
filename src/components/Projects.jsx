import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faDownload } from '@fortawesome/free-solid-svg-icons';

function DescriptionWithLinks({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return (
            <a 
              key={i} 
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sakura hover:underline font-semibold"
            >
              {match[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const projects = [
  {
    name: 'CQL Interactive',
    description: 'CQL Interactive est un groupe que j\'ai fondé avec un ami développant plusieurs quiz en ligne. Notre objectif est de créer des jeux éducatifs et divertissants, accessibles à tous gratuitement comme [C Quoi Le Jeu](https://cquoilejeu.fr).',
    logo: '/images/cql-interactive_logo.png',
    tags: ['Node.js', 'HTML/CSS', 'React.js', 'Site Web'],
    startDate: "juin 2025",
    endDate: "aujourd'hui",
    links: [
      { label: 'Site', icon: faGlobe, url: 'https://cql-interactive.fr' },
      { label: 'GitHub', icon: faGithub, url: 'https://github.com/CQL-Interactive/' },
    ],
  },
  {
    name: 'Bots Caaqlojin',
    description: 'Les bots Caaqlojin (Caaqlojin, CaaqlojinAI et Caaqlojin - Sondages) sont des bots Discord créés pour le serveur de CQL Interactive.',
    logo: '/images/caaqlojin_logo.png',
    tags: ['Discord.js', 'Discord.py', 'Bots Discord'],
    startDate: "juin 2025",
    endDate: "aujourd'hui",
    links: [
      { label: 'Discord', icon: faDiscord, url: 'https://discord.gg/Evu8WXm27z' },
    ],
  },
  {
    name: 'MoyenneExpress',
    description: 'MoyenneExpress est l\'outil fait pour calculer votre moyenne générale ! Disponible sur Windows et macOS.',
    logo: '/images/moyenneexpress_logo.png',
    tags: ['Python', 'Tkinter', 'App', 'Windows & macOS'],
    startDate: "2023",
    endDate: "2024",
    links: [
      { label: 'Télécharger', icon: faDownload, url: 'https://github.com/Elicopter78/MoyenneExpress/releases' },
      { label: 'GitHub', icon: faGithub, url: 'https://github.com/Elicopter78/MoyenneExpress' },
    ],
  },
  {
    name: 'Portfolio',
    description: 'Mon portfolio personnalisé présentant mes compétences et mes projets avec un design moderne et des animations fluides.',
    logo: '/images/portfolio_logo.png',
    tags: ['Node.js', 'React.js', 'HTML/CSS', 'Site Web'],
    startDate: "octobre 2025",
    endDate: "aujourd'hui",
    links: [
      { label: 'Site', icon: faGlobe, url: 'https://elie-dev.fr' },
    ],
  },
  {
    name: 'Décompte 2027',
    description: 'Un décompte simple et efficace pour 2027. Une application web minimaliste et responsive.',
    logo: '/images/decompte2027_logo.png',
    tags: ['Node.js', 'HTML/CSS', 'Site Web'],
    startDate: "janvier 2026",
    endDate: "aujourd'hui",
    links: [
      { label: 'Site', icon: faGlobe, url: 'https://2027.elie-dev.fr' },
    ],
  },
  {
    name: 'Pissenlit',
    description: 'Bot Discord avec des commandes funs pour s\'amuser entre amis et animer votre serveur Discord.',
    logo: '/images/pissenlit_logo.png',
    tags: ['Discord.js', 'Bots Discord'],
    startDate: "avril 2026",
    endDate: "aujourd'hui",
    links: [
      { label: 'GitHub', icon: faGithub, url: 'https://github.com/Elicopter78/Pissenlit' },
    ],
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-sakura/10 rounded-full border border-sakura/30">
              <span className="w-2 h-2 rounded-full bg-sakura"></span>
              <span className="text-sakura font-jp text-sm font-semibold">PROJETS</span>
              <span className="w-2 h-2 rounded-full bg-sakura"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-jp font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Les projets sur lesquels j'ai travaillé, allant de sites web à des applications et bots Discord, en variant les technologies utilisées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group transition-all duration-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="h-full p-6 sm:p-8 rounded-xl bg-gray-50 border border-sakura/20 hover:border-sakura/50 group-hover:bg-gray-100 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-sakura/20">
                <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={project.logo} 
                    alt={project.name} 
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-jp font-semibold text-gray-900 mb-3 group-hover:text-sakura transition-colors duration-300">
                  {project.name}
                </h3>

                {(project.startDate || project.endDate) && (
                  <p className="text-xs sm:text-sm text-sakura font-jp mb-3">
                    {project.startDate}
                    {project.startDate && project.endDate && " à "}
                    {project.endDate}
                  </p>
                )}

                <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                  <DescriptionWithLinks text={project.description} />
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs sm:text-sm bg-sakura/10 text-sakura rounded-full border border-sakura/30 font-jp"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-jp rounded-lg bg-sakura/10 text-sakura hover:bg-sakura hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-sakura/30"
                    >
                      <FontAwesomeIcon icon={link.icon} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-20 -right-40 w-60 h-60 rounded-full border border-sakura/5 -z-10 hidden lg:block"></div>
        <div className="absolute -bottom-20 -left-40 w-50 h-50 rounded-full border border-sakura/5 -z-10 hidden lg:block"></div>
      </div>
    </section>
  );
}
