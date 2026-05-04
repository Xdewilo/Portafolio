export const I18N = {
  es: {
    a11y: { skip: 'Saltar al contenido' },

    nav: {
      home: 'inicio',
      about: 'sobre_mí',
      skills: 'skills',
      experience: 'experiencia',
      projects: 'proyectos',
      contact: 'contacto'
    },

    header: { available: 'disponible' },

    hero: {
      firstName: 'JEREMY',
      lastName: 'POSADA',
      role: 'Backend Engineer · Arquitecto de Microservicios',
      lead: 'Construyo backends robustos en Java + Spring Boot con arquitectura hexagonal, DDD y CQRS. Frontends en Angular cuando hace falta.',
      ctaProjects: 'view_projects()',
      ctaCV: 'download_cv.pdf',
      location: 'Barranquilla, Colombia',
      status: 'abierto a oportunidades',
      boot: {
        line1:  '$ whoami',
        out1:   'jeremy_posada',
        line2:  '$ cat profile.json',
        json:   ['{', '  "role": "Backend Engineer",', '  "stack": ["Java", "Spring Boot", "Angular"],', '  "location": "Barranquilla, CO",', '  "status": "open_to_opportunities"', '}'],
        line3:  '$ ./hire_me.sh --year=2026',
        out3:   '> ready.'
      }
    },

    about: {
      title: 'cat about_me.md',
      caption: '// jeremy.posada — Barranquilla, CO',
      p1: 'Desarrollador backend orientado a resultados. Microservicios en Java + Spring Boot, arquitectura hexagonal, DDD/CQRS. Próximo a graduarme de Ingeniería de Sistemas.',
      p2: 'Me enfoco en código claro, testeable y estable en producción. Comunico avances con precisión y cuido los detalles. Quiero aportar en equipos donde la calidad técnica y la entrega constante marquen la diferencia.',
      degree: 'Ingeniería de Sistemas — pendiente título',
      focus: 'microservicios, DDD, arquitectura limpia'
    },

    spring: {
      lead: 'Mi stack principal. Microservicios con Spring Boot, autenticación JWT, JPA/Hibernate y migraciones controladas con Flyway. Hexagonal + DDD/CQRS para que la lógica de negocio quede clara y testeable.'
    },

    angular: {
      lead: 'Para el frontend: Angular + TypeScript con vertical slicing por dominio, RxJS para flujos reactivos, Reactive Forms con validación robusta. Frontends que escalan junto al backend.'
    },

    stack: {
      title: 'ls --all ./skills',
      intro: 'El stack completo. Backend, frontend, datos, infraestructura, herramientas.'
    },

    experience: {
      title: 'git log --author=jeremy'
    },

    exp: {
      present: 'presente',
      eidykos: {
        role: 'Backend Engineer @ EIDYKOS S.A.S',
        b1: 'Migración del monolito a arquitectura hexagonal — mejor mantenibilidad y desacoplamiento.',
        b2: 'Casos de uso con DDD/CQRS — comandos y queries separados, lógica de negocio testeable.',
        b3: 'APIs REST con JWT, JPA/Hibernate, migraciones con Flyway en PostgreSQL.',
        b4: 'Frontend Angular + TypeScript con vertical slicing por dominios.'
      },
      tic: {
        role: 'Junior Full Stack Developer @ TIC LTDA',
        b1: 'Migración de aplicaciones PHP → Laravel — mejora de escalabilidad y organización.',
        b2: 'Módulo de generación de códigos de barras y guías de envío para Triple AAA y Efigas.',
        b3: 'Consumo de APIs externas para visualización de datos en tiempo real.'
      },
      edu: {
        role: 'Ingeniería de Sistemas · Diplomado C# .NET',
        b1: 'Próximo a graduarme. Diplomado complementario en C# / .NET.'
      }
    },

    projects: {
      title: 'ls ./projects',
      ebrisk: { desc: 'PWA en producción. Mi segundo proyecto, enfocado en velocidad y experiencia móvil. Visita el sitio en vivo.' },
      angularSpring: { desc: 'Aplicación full-stack: backend Spring Boot + frontend Angular. Docker, Firebase, autenticación JWT.' },
      slot1: { title: 'Microservices Lab', desc: 'Set de microservicios Spring Boot con arquitectura hexagonal, DDD/CQRS, comunicación vía Kafka.' },
      slot2: { title: 'REST API Toolkit', desc: 'APIs REST en Node.js / NestJS con autenticación, validación, OpenAPI. Patrones MVC y DDD.' },
      slot3: { title: 'Próximamente', desc: 'Más proyectos en camino. Sígueme en GitHub.' },
      cta: { visit: 'visit_site() →', code: 'view_code() →', demo: 'demo() →' }
    },

    contact: {
      title: './say_hi.sh',
      lead: 'Si quieres hablar de un proyecto, vacante o colaboración, escríbeme. Respondo rápido.'
    },

    form: {
      name: 'name',
      email: 'email',
      message: 'message',
      submit: 'send_message()',
      success: '✓ enviado. te responderé pronto.',
      error: '✗ algo falló. intenta de nuevo o escribe directo a jeremyposada2003@gmail.com',
      required: 'campo requerido',
      sending: 'enviando…'
    },

    footer: {
      built: '// © 2026 Jeremy Posada — hecho a mano en HTML, CSS y JS',
      backToTop: 'subir ↑'
    }
  },

  en: {
    a11y: { skip: 'Skip to content' },

    nav: {
      home: 'home',
      about: 'about_me',
      skills: 'skills',
      experience: 'experience',
      projects: 'projects',
      contact: 'contact'
    },

    header: { available: 'available' },

    hero: {
      firstName: 'JEREMY',
      lastName: 'POSADA',
      role: 'Backend Engineer · Microservices Architect',
      lead: 'I build robust backends with Java + Spring Boot using hexagonal architecture, DDD and CQRS. Angular frontends when needed.',
      ctaProjects: 'view_projects()',
      ctaCV: 'download_cv.pdf',
      location: 'Barranquilla, Colombia',
      status: 'open to opportunities',
      boot: {
        line1:  '$ whoami',
        out1:   'jeremy_posada',
        line2:  '$ cat profile.json',
        json:   ['{', '  "role": "Backend Engineer",', '  "stack": ["Java", "Spring Boot", "Angular"],', '  "location": "Barranquilla, CO",', '  "status": "open_to_opportunities"', '}'],
        line3:  '$ ./hire_me.sh --year=2026',
        out3:   '> ready.'
      }
    },

    about: {
      title: 'cat about_me.md',
      caption: '// jeremy.posada — Barranquilla, CO',
      p1: 'Results-oriented backend developer. Microservices in Java + Spring Boot, hexagonal architecture, DDD/CQRS. Soon to graduate as Systems Engineer.',
      p2: 'I focus on clear, testable, production-stable code. I communicate progress precisely and care about details. I want to contribute on teams where technical quality and consistent delivery make the difference.',
      degree: 'Systems Engineering — pending degree',
      focus: 'microservices, DDD, clean architecture'
    },

    spring: {
      lead: 'My main stack. Spring Boot microservices, JWT authentication, JPA/Hibernate, controlled migrations with Flyway. Hexagonal + DDD/CQRS so business logic stays clear and testable.'
    },

    angular: {
      lead: 'For the frontend: Angular + TypeScript with domain-based vertical slicing, RxJS for reactive flows, Reactive Forms with robust validation. Frontends that scale alongside the backend.'
    },

    stack: {
      title: 'ls --all ./skills',
      intro: 'The full stack. Backend, frontend, data, infrastructure, tooling.'
    },

    experience: {
      title: 'git log --author=jeremy'
    },

    exp: {
      present: 'present',
      eidykos: {
        role: 'Backend Engineer @ EIDYKOS S.A.S',
        b1: 'Migrated monolith to hexagonal architecture — improved maintainability and decoupling.',
        b2: 'Built use cases with DDD/CQRS — commands and queries separated, testable business logic.',
        b3: 'REST APIs with JWT, JPA/Hibernate, Flyway migrations on PostgreSQL.',
        b4: 'Angular + TypeScript frontend with domain-based vertical slicing.'
      },
      tic: {
        role: 'Junior Full Stack Developer @ TIC LTDA',
        b1: 'Migrated PHP apps to Laravel — improved scalability and code organization.',
        b2: 'Built barcode-generation and shipping-label module for Triple AAA and Efigas.',
        b3: 'Integrated external APIs for real-time data visualization.'
      },
      edu: {
        role: 'Systems Engineering · C# .NET Diploma',
        b1: 'Soon to graduate. Complementary diploma in C# / .NET.'
      }
    },

    projects: {
      title: 'ls ./projects',
      ebrisk: { desc: 'PWA in production. My second project, focused on speed and mobile experience. Visit the live site.' },
      angularSpring: { desc: 'Full-stack app: Spring Boot backend + Angular frontend. Docker, Firebase, JWT authentication.' },
      slot1: { title: 'Microservices Lab', desc: 'Spring Boot microservices set with hexagonal architecture, DDD/CQRS, Kafka messaging.' },
      slot2: { title: 'REST API Toolkit', desc: 'REST APIs in Node.js / NestJS with authentication, validation, OpenAPI. MVC and DDD patterns.' },
      slot3: { title: 'Coming soon', desc: 'More projects on the way. Follow me on GitHub.' },
      cta: { visit: 'visit_site() →', code: 'view_code() →', demo: 'demo() →' }
    },

    contact: {
      title: './say_hi.sh',
      lead: 'If you want to talk about a project, role, or collaboration, drop me a line. I reply fast.'
    },

    form: {
      name: 'name',
      email: 'email',
      message: 'message',
      submit: 'send_message()',
      success: '✓ sent. I will reply soon.',
      error: '✗ something failed. Try again or email jeremyposada2003@gmail.com directly.',
      required: 'required field',
      sending: 'sending…'
    },

    footer: {
      built: '// © 2026 Jeremy Posada — handcrafted in HTML, CSS and JS',
      backToTop: 'top ↑'
    }
  }
};
