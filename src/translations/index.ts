export type LanguageKey = 'en' | 'pt';

type TranslationData = {
  welcome: string;
  about: string;
  projects: string;
  contact: string;
  technologies: {
    top: string;
    bottom: string;
  };
};

export const translations: Record<LanguageKey, TranslationData> = {
  en: {
    welcome: 'Welcome to my portfolio!',
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact',
    technologies: {
      top: 'Technologies I Use',
      bottom: 'Besides those, other technologies know by me that might be of interest are: Flutter, C, C++,  Java, Electron, Selenium, Cypress, Express, Flask and Java Spring. Experience in the area of Internet of Things (IoT). CSS, HTML, Bootstrap, Tailwind, Kubernetes, CI/CD, MQTT, RabbitMQ, OpenStreetMaps, JavaServer Faces(JSF).',
    },
  },
  pt: {
    welcome: 'Bem-vindo ao meu portfólio!',
    about: 'Sobre Mim',
    projects: 'Projetos',
    contact: 'Contato',
    technologies: {
      top: 'Tecnologias que Uso',
      bottom: 'Além disso, outras tecnologias conhecidas por mim, que podem ser de interesse são: Flutter, C, C++,  Java, Electron, Selenium, Cypress, Express, Flask e Java Spring. Experiência na área de Internet das Coisas (IoT). CSS, HTML, Bootstrap, Tailwind, Kubernetes, CI/CD, MQTT, RabbitMQ, OpenStreetMaps, JavaServer Faces(JSF).',
    },
  },
};