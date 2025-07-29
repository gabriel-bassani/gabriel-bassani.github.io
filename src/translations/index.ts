export type LanguageKey = 'en' | 'pt';

export type TranslationData = {
  welcome: string;
  about: string;
  projects: {
    invest: string;
    read_me_books: string;
    ntyre: string;
    salve_elas: string;
    ecommerce: string;
    chat_messages: string;
    smart_campus: string;

  }
  contact: string;
  technologies: {
    title: string;
    top: string;
    bottom: string;
  };
};

export const translations: Record<LanguageKey, TranslationData> = {
  en: {
    welcome: 'Welcome to my portfolio!',
    about: 'About Me',
    projects: {
      invest: "Investment visualization app with different graphic visualization options, built with React Native and TypeScript.",
      read_me_books: "App for reading text documents and converting them into audio, developed with React Native and TypeScript.",
      ntyre: "Fleet management and monitoring app, providing vehicle and tire information. Developed with React Native and TypeScript, using Bluetooth to communicate with vehicle sensors and MQTT to send tire measurements to a backend built with NestJS. Also includes a web module created with NextJS.",
      salve_elas: "Domestic violence defense app, with functionalities to disguise itself as a calculator or news app, and a panic button to alert the police for tracking and assisting the user. Developed with React Native and TypeScript, with a Spring-based backend. It also includes a web management and administration module built with NextJS and Tailwind CSS.",
      ecommerce: "E-commerce website built with VueJS and a Laravel backend.",
      chat_messages: "Messaging website using NextJS with TypeScript, leveraging the XMPP protocol and a backend developed with NestJS.",
      smart_campus: "Extensive website and app with functionalities for campus security at UFRN (Federal University of Rio Grande do Norte), energy management, vehicle trip requests, and other features. Developed using JavaServer Faces (JSF), JavaScript, and Bootstrap for the website; React Native for the app; and Spring for the backend.",
    },
    contact: 'Contact',
    technologies: {
      title: "Technologies I Use",
      top: 'I have experience in frontend, backend, mobile, among other areas. These are the technologies I use to develop creative solutions and bring ideas to life.',
      bottom: 'Besides those, other technologies know by me that might be of interest are: Flutter, C, C++,  Java, Electron, Selenium, Cypress, Express, Flask and Java Spring. Experience in the area of Internet of Things (IoT). CSS, HTML, Bootstrap, Tailwind, Kubernetes, CI/CD, MQTT, RabbitMQ, OpenStreetMaps, JavaServer Faces(JSF).',
    },
  },
  pt: {
    welcome: 'Bem-vindo ao meu portfólio!',
    about: 'Sobre Mim',
    projects: {
      invest: "Aplicativo de visualização de investimentos, com diferentes opções de visualização gráfica, feito em React-Native, com Typescript.",
      read_me_books: "Aplicativo de ler documentos de texto, e reproduzir esse texto em áudio, desenvolvido em React-Native, com Typescript.",
      ntyre: "Aplicativo de gestão e monitoramento de veículos de uma frota, recebendo informações sobre os veículos e seus pneus. Desenvolvido em React-Native, com Typescript, usando bluetooth para se comunicar com os sensores dos veículos, e MQTT para enviar medições dos pneus para o backend feito em NestJS. Também possui um módulo web feito em NextJS.",
      salve_elas: "Aplicativo de defesa contra a violência doméstica, com funções para se esconder como uma calculadora ou aplicativo de notícias, capaz de utilizar um botão de pânico para acionar a polícia para rastrear e socorrer o usuário. Desenvolvido em React-Native com Typescript, e backend em Spring. Também possui um módulo web de gestão e administração do sistema, feito em NextJS com Tailwind CSS.",
      ecommerce: "Website para comércio online, feito em VueJS, com backend em Laravel.",
      chat_messages: "Website para envio de mensagens. Utiliza de NextJS, com Typescript, usando protocolo XMPP e um backend em NestJS.",
      smart_campus: "Extenso website e aplicativo com funções de segurança do campus da UFRN, gestão de energia, solicitação de veículos, entre outras funções. Desenvolvido com JavaServer Faces (JSF), Javascript, e Bootstrap no website, React-Native no aplicativo, e Spring no backend.",
    },
    contact: 'Contato',
    technologies: {
      title: "Tecnologias que Uso",
      top: 'Tenho experiência em frontend, backend, mobile entre outras áreas. Essas são as tecnologias com as quais trabalho para desenvolver soluções criativas e transformar ideias em realidade.',
      bottom: 'Além disso, outras tecnologias conhecidas por mim, que podem ser de interesse são: Flutter, C, C++,  Java, Electron, Selenium, Cypress, Express, Flask e Java Spring. Experiência na área de Internet das Coisas (IoT). CSS, HTML, Bootstrap, Tailwind, Kubernetes, CI/CD, MQTT, RabbitMQ, OpenStreetMaps, JavaServer Faces(JSF).',
    },
  },
};