import { SectionWrapper } from '../../components/SectionWrapper';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { projects } from '../../data/portfolio.data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import { FiGlobe, FiSmartphone, FiServer } from 'react-icons/fi';

const platformIcon = {
  web: <><FiGlobe size={12} />     Web</>,
  mobile: <><FiSmartphone size={12} /> Mobile</>,
  backend: <><FiServer size={12} />    Backend</>,
};

const platformColor = {
  web: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  mobile: 'text-green-400  bg-green-500/10  border-green-500/20',
  backend: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
};


export const Projects = () => (
  <SectionWrapper id="projects">
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Proyectos Destacados</h2>
    <p className="text-neutral-500 text-sm mb-12">Cosas que he construido</p>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <Card key={i} className="group flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0 ml-2">
                {/* Badge plataforma */}
                {project.platform && (
                  <span className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border font-medium
        ${platformColor[project.platform]}`}>
                    {platformIcon[project.platform]}
                  </span>
                )}
                {/* Links */}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer"
                    className="text-neutral-600 hover:text-white transition-colors">
                    <FiGithub size={17} />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer"
                    className="text-neutral-600 hover:text-white transition-colors">
                    <FiExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>
            {project.impact && (
              <p className="text-indigo-400 text-xs mb-5 font-medium">✦ {project.impact}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => <Badge key={t} label={t} />)}
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);
