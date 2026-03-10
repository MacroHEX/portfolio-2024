export type Lang = 'es' | 'en';

export const t = {
  es: {
    nav: {
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack',
      description:
        '4 años construyendo aplicaciones web con React, Angular, Java y Go. Apasionado por la arquitectura limpia y la experiencia de usuario.',
      cta: 'Contacto',
      ctaSecondary: 'Ver proyectos',
    },
    skills: {
      label: 'Stack',
      title: 'Habilidades',
    },
    experience: {
      label: 'Carrera',
      title: 'Experiencia',
    },
    projects: {
      label: 'Trabajo',
      title: 'Proyectos',
      visitSite: 'Ver sitio',
    },
    contact: {
      label: 'Contacto',
      title: 'Trabajemos juntos',
      description:
        'Estoy disponible para proyectos freelance y nuevas oportunidades laborales. No dudes en escribirme.',
    },
    footer: 'Todos los derechos reservados.',
  },
  en: {
    nav: {
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      description:
        '4 years building web applications with React, Angular, Java and Go. Passionate about clean architecture and user experience.',
      cta: 'Contact me',
      ctaSecondary: 'View projects',
    },
    skills: {
      label: 'Stack',
      title: 'Skills',
    },
    experience: {
      label: 'Career',
      title: 'Experience',
    },
    projects: {
      label: 'Work',
      title: 'Projects',
      visitSite: 'Visit site',
    },
    contact: {
      label: 'Contact',
      title: "Let's work together",
      description:
        "I'm available for freelance projects and new job opportunities. Feel free to reach out.",
    },
    footer: 'All rights reserved.',
  },
} as const;