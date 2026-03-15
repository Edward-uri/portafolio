import { type Variants } from 'framer-motion';  
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { personalInfo } from '../../data/portfolio.data';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,  
    },
  },
};

export const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative">
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

    <motion.div variants={container} initial="hidden" animate="show">
      <motion.p variants={item} className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase">
        Hola, soy
      </motion.p>

      <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
        Eduardo Uriel<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Chávez Díaz
        </span>
      </motion.h1>

      <motion.p variants={item} className="text-lg md:text-xl text-neutral-400 mt-6 max-w-2xl leading-relaxed">
        {personalInfo.valueProposition}
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
        <Button href="#projects" variant="primary">Ver Proyectos</Button>
        <Button href={personalInfo.cvUrl} variant="outline" download>Descargar CV</Button>
        <Button href="#contact" variant="ghost">Contacto →</Button>
      </motion.div>

      <motion.div variants={item} className="flex gap-5 mt-10">
        {[
          { icon: <FiGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
          { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
          { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
        ].map(({ icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="text-neutral-500 hover:text-indigo-400 transition-colors hover:-translate-y-0.5 duration-200">
            {icon}
          </a>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}>
      <span className="text-neutral-600 text-xs font-mono">Descúbreme</span>
      <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent" />
    </motion.div>
  </section>
);
