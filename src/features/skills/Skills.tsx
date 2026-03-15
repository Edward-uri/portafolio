import { motion } from 'framer-motion';
import { SectionWrapper } from '../../components/SectionWrapper';
import { skills } from '../../data/portfolio.data';

export const Skills = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Stack Tecnológico</h2>
    <p className="text-neutral-500 text-sm mb-12">Herramientas y tecnologías que domino</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {skills.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5
            hover:border-indigo-500/30 transition-all duration-300"
        >
          <p className="text-xs text-indigo-400 font-mono uppercase tracking-widest mb-4">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((tech) => (
              <span key={tech}
                className="px-2.5 py-1 text-sm text-neutral-300 bg-neutral-800
                  border border-neutral-700 rounded-lg hover:border-indigo-500/40
                  hover:text-indigo-300 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);
