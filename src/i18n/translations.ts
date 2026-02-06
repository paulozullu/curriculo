import type { Language } from './LanguageContext';

export interface Translations {
  aboutMe: string;
  professionalExperience: string;
  skills: string;
  education: string;
  certifications: string;
  projects: string;
  toggleTheme: string;
  madeWith: string;
  allRightsReserved: string;
  // Education
  degreeIn: string;
  // Experience
  fullTime: string;
  internship: string;
  remote: string;
  // Buttons
  showLess: string;
  showMoreCertifications: string;
  usingReactMUI: string;
}

export const translations: Record<Language, Translations> = {
  pt: {
    aboutMe: 'Sobre Mim',
    professionalExperience: 'Experiência Profissional',
    skills: 'Competências',
    education: 'Formação Acadêmica',
    certifications: 'Certificações',
    projects: 'Projetos',
    toggleTheme: 'Alternar tema',
    madeWith: 'Feito com',
    allRightsReserved: 'Todos os direitos reservados',
    degreeIn: 'em',
    fullTime: 'Tempo integral',
    internship: 'Estágio',
    remote: 'Remota',
    showLess: 'Mostrar menos',
    showMoreCertifications: 'Ver mais {count} certificações',
    usingReactMUI: 'usando React & Material UI',
  },
  en: {
    aboutMe: 'About Me',
    professionalExperience: 'Professional Experience',
    skills: 'Skills',
    education: 'Education',
    certifications: 'Certifications',
    projects: 'Projects',
    toggleTheme: 'Toggle theme',
    madeWith: 'Made with',
    allRightsReserved: 'All rights reserved',
    degreeIn: 'in',
    fullTime: 'Full-time',
    internship: 'Internship',
    remote: 'Remote',
    showLess: 'Show less',
    showMoreCertifications: 'Show {count} more certifications',
    usingReactMUI: 'using React & Material UI',
  },
};
