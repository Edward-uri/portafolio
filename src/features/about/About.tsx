import { SectionWrapper } from '../../components/SectionWrapper';
import { Card } from '../../components/Card';
import { FiMapPin, FiBook, FiCode } from 'react-icons/fi';

const stats = [
  { icon: <FiCode size={15} />, label: 'Full Stack Developer' },
  { icon: <FiBook size={15} />, label: 'Ing. Software · UPChiapas' },
  { icon: <FiMapPin size={15} />, label: 'Tuxtla Gutiérrez, Chiapas' },
];

const certs = [
  { org: 'AWS',    name: 'AWS Academy – Arquitectura en la Nube',  color: 'text-orange-400' },
  { org: 'AWS',    name: 'AWS Academy – Desarrollo en la Nube',    color: 'text-orange-400' },
  { org: 'Google', name: 'Diseño de Experiencia del Usuario (UX)', color: 'text-blue-400'   },
  { org: 'Cisco',  name: 'Networking Basics',                      color: 'text-cyan-400'   },
];

export const About = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Sobre Mí</h2>
        <p className="text-neutral-500 text-sm mb-8">Un poco de contexto profesional</p>

        <p className="text-neutral-400 leading-relaxed mb-5">
          Soy desarrollador Full Stack con experiencia en Angular, TypeScript, Express y AWS.
          Me apasiona construir interfaces minimalistas con arquitectura limpia, aplicando
          principios SOLID y las mejores prácticas de la industria.
        </p>
        <p className="text-neutral-400 leading-relaxed mb-8">
          He trabajado en equipos remotos con metodologías ágiles, liderado proyectos
          end-to-end desde Figma hasta producción e integrado sistemas IoT con la nube.
        </p>

        <div className="space-y-3">
          {stats.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm text-neutral-500">
              <span className="text-indigo-400">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <Card hover={false}>
        <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono mb-5">
          Certificaciones
        </p>
        <div className="space-y-3">
          {certs.map((cert) => (
            <div key={cert.name}
              className="flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
              <span className={`text-xs font-bold font-mono mt-0.5 w-12 shrink-0 ${cert.color}`}>
                {cert.org}
              </span>
              <span className="text-sm text-neutral-300">{cert.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </SectionWrapper>
);
