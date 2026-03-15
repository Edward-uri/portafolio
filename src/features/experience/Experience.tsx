import { SectionWrapper } from '../../components/SectionWrapper';
import { experiences } from '../../data/portfolio.data';

export const Experience = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Experiencia</h2>
    <p className="text-neutral-500 text-sm mb-12">Roles y empresas donde he contribuido</p>

    <div className="relative border-l border-neutral-800 pl-8 space-y-12">
      {experiences.map((exp, i) => (
        <div key={i} className="relative">
          <span className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full
            bg-indigo-500 border-2 border-[#0a0a0a]" />

          <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
            <div>
              <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
              <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
            </div>
            <span className="text-neutral-500 text-sm font-mono bg-neutral-900
              border border-neutral-800 px-3 py-1 rounded-lg">
              {exp.period}
            </span>
          </div>

          <p className="text-neutral-600 text-xs mb-4">{exp.location}</p>

          <ul className="space-y-2">
            {exp.bullets.map((bullet, j) => (
              <li key={j} className="text-neutral-400 text-sm flex gap-3">
                <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);
