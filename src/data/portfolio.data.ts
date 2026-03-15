import type { Experience, Project, Skill, BlogPost } from '../types';

export const personalInfo = {
  name: 'Eduardo Uriel Chávez Díaz',
  title: 'Full Stack Developer',
  specialty: 'Angular · TypeScript · AWS',
  valueProposition:
    'Construyo aplicaciones web escalables con arquitectura limpia y principios SOLID. Apasionado por interfaces minimalistas y código mantenible.',
  email: 'eduardochavez019@gmail.com',
  phone: '+52 961 674 5589',
  location: 'Tuxtla Gutiérrez, Chiapas, MX',
  linkedin: 'https://www.linkedin.com/in/eduardo-uriel-chavez-diaz-36a170292/',
  github: 'https://github.com/Edward-uri',
  cvUrl: '/Cv_Español_EduardoUrielChavezDiaz.docx.pdf',
};

export const experiences: Experience[] = [
  {
    company: 'UP – Suchiapa',
    role: 'Líder de Proyecto',
    period: 'Jun 2025 – Jul 2025',
    location: 'Remoto · Chiapas, MX',
    bullets: [
      'Coordiné cronogramas con SCRUM impulsando entregas puntuales y eficientes.',
      'Diseñé y documenté planes de proyecto para revisión por stakeholders.',
      'Optimicé flujos de trabajo con Jira para coordinación remota del equipo.',
      'Ejercí liderazgo emocional para mantener colaboración y cohesión.',
    ],
  },
  {
    company: 'Viernes',
    role: 'Full Stack Web Developer',
    period: 'Ene 2025 – Abr 2025',
    location: 'Remoto',
    bullets: [
      'Lideré el diseño completo de la web: estructura visual y experiencia de usuario.',
      'Desarrollé apps responsivas con Angular y SCSS.',
      'Implementé MQTT en ESP32 conectado a AWS usando RabbitMQ en Docker.',
      'Desarrollé WebSocket para comunicación en tiempo real entre clientes.',
      'Diseñé y gestioné bases de datos MySQL optimizando consultas de rendimiento.',
    ],
  },
  {
    company: 'TuxMapa',
    role: 'Frontend Developer',
    period: 'Oct 2024 – Dic 2024',
    location: 'Tuxtla Gutiérrez, MX',
    bullets: [
      'Diseñé la plataforma desde cero: maquetas en Figma, navegación y flujo de usuario.',
      'Desarrollé interfaces responsive con Angular, HTML y CSS.',
      'Elaboré historias de usuario y definí requerimientos funcionales.',
      'Integré servicios backend mediante RESTful APIs.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Plataforma de Rutas Urbanas',
    description:
      'SPA con mapa interactivo para crear, editar y visualizar rutas de recolección urbana con datos GeoJSON.',
    tech: ['Angular', 'Mapbox', 'TypeScript', 'GeoJSON'],
    role: 'Frontend Developer',
    impact: 'Sistema activo de gestión de rutas para administradores municipales.',
  },
  {
    title: 'Sistema IoT + AWS Pipeline',
    description:
      'Pipeline de datos desde ESP32 hasta AWS usando MQTT, RabbitMQ en Docker y WebSockets para procesamiento en tiempo real.',
    tech: ['AWS', 'MQTT', 'RabbitMQ', 'Docker', 'Express.js', 'WebSockets'],
    role: 'Full Stack Developer',
    impact: 'Latencia de datos en tiempo real menor a 200ms.',
  },

  {
    title: 'App Android con Jetpack Compose',
    description:
      'Aplicación Android nativa con arquitectura limpia, patrón MVVM, inyección de dependencias con Hilt y variante con DI manual para mayor control del grafo de dependencias.',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Clean Architecture', 'Coroutines'],
    role: 'Android Developer',
    impact: 'Arquitectura modular que separa completamente UI, dominio y datos.',
  },

  {
    title: 'Portfolio Personal',
    description:
      'Portafolio profesional con React 19, Tailwind v4, Framer Motion y arquitectura de features.',
    tech: ['React', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Vite 8'],
    role: 'Developer & Designer',
    demoUrl: '#',
    repoUrl: 'https://github.com/tu-usuario/portfolio',
  },
];


export const skills: Skill[] = [
  { category: 'Lenguajes',      items: ['TypeScript', 'JavaScript', 'Kotlin', 'Go', 'Python', 'Java', 'C++'] },
  { category: 'Frontend',       items: ['Angular', 'React', 'HTML', 'CSS', 'SCSS', 'Figma'] },
  { category: 'Mobile',         items: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'MVVM', 'Hilt', 'DI Manual'] }, 
  { category: 'Backend',        items: ['Express.js', 'RESTful APIs', 'WebSockets', 'MQTT'] },
  { category: 'Bases de Datos', items: ['MySQL', 'PostgreSQL', 'Room'] },                                      
  { category: 'Cloud & DevOps', items: ['AWS EC2', 'AWS S3', 'Docker', 'Firebase'] },
  { category: 'Herramientas',   items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Figma', 'Insomnia', 'Android Studio'] }, 
];


export const blogPosts: BlogPost[] = [
  {
    title: 'Desplegando una app Node.js en AWS EC2',
    description: 'Guía paso a paso para subir tu backend a EC2 con NGINX y PM2 en producción.',
    tag: 'AWS · DevOps',
    url: '#',
  },
  {
    title: 'Setup de architectura mvm con Hilt en Android',
    description: 'Cómo configurar un proyecto Android con arquitectura MVVM y Hilt para inyección de dependencias.',
    tag: 'Android · Kotlin',
    url: '#',
  },
  {
    title: 'Manejo de proyecto en GitHub con Issues y Projects',
    description: 'Cómo organizar tu proyecto en GitHub usando Issues para tareas y Projects para planificación ágil.',
    tag: 'GitHub · Project Management',
    url: '#',
  },
];
