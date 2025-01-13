import { Language } from "@/utils/Language";
import { IconType } from "./IconType";
import { IProject } from "./IProject";

const labels = {
  es: {
    navbar: {
      home: "Home",
      projects: "Proyectos",
      aboutMe: "Sobre mí",
      germanTooltip: "Cambiar a alemán",
      spanishTooltip: "Cambiar a español",
      englishTooltip: "Cambiar a inglés",
      collapseNavbar: "Colapsar menú",
      expandNavbar: "Expandir menú",
    },
    utils: {
      directWebAccess: "Acceso directo a la web",
    },
  },
  en: {
    navbar: {
      home: "Home",
      projects: "Projects",
      aboutMe: "About me",
      germanTooltip: "Change to German",
      spanishTooltip: "Change to Spanish",
      englishTooltip: "Change to English",
      collapseNavbar: "Collapse menu",
      expandNavbar: "Expand menu",
    },
    utils: {
      directWebAccess: "Direct web access",
    },
  },
  de: {
    navbar: {
      home: "Startseite",
      projects: "Projekte",
      aboutMe: "Über mich",
      germanTooltip: "Zu Deutsch wechseln",
      spanishTooltip: "Zu Spanisch wechseln",
      englishTooltip: "Zu Englisch wechseln",
      collapseNavbar: "Menü einklappen",
      expandNavbar: "Menü ausklappen",
    },
    utils: {
      directWebAccess: "Enlace directo a la web",
    },
  },
};

const projects: IProject[] = [
  {
    label: "SugusUVa-web",
    title: {
      en: "SugusUVa Website",
      es: "Web SugusUVa",
      de: "SugusUVa-Webseite",
    },
    description: {
      en: "Website for the cybersecurity school organization 'Sugus' from the University of Valladolid.",
      es: "Web para la organización escolar de ciberseguridad: 'Sugus' de la Universidad de Valladolid.",
      de: "Webseite für die Cybersicherheits-Schulorganisation 'Sugus' der Universität Valladolid.",
    },
    technologies: [
      IconType.NextJS,
      IconType.TailwindCSS,
      IconType.TypeScript,
      IconType.ThreeJS,
    ],
    image: "imagen-sugus.png",
    link: "https://sugusuva.es/",
  },
  {
    label: "Todo-app",
    title: {
      en: "Todo-App",
      es: "Todo-App",
      de: "Aufgaben-App",
    },
    description: {
      en: "It is a classic task management application. The app features a login system that allows both user identification and registration. Once a user is logged in, unless they intentionally log out, they will not be prompted to log in again for a full day, as a cookie will be used to maintain the session. The app offers three types of tasks: important, normal, or optional, and it allows users to: add a task, delete selected tasks, and filter tasks based on their importance. The project is complete, and during the deployment process, I noticed a minor detail: session cookies were not being sent correctly from the client to the server. This prevented the backend from maintaining the user session. It seems to be a configuration adjustment for security that prevents them from being received.",
      es: "Consiste en una clásica aplicación de tareas. La aplicación dispone de un login que permite tanto identificar usuarios como registrarlos. Una vez identificado un usuario, a no ser que cierre sesión intencionalmente, no se le volverá a pedir que la inicie hasta pasado un día y se empleará una cookie como medio de inicio de sesión. En la aplicación se disponen de 3 tipos de tareas: importante, normal u opcional, y será posible: añadir una tarea, eliminar las tareas seleccionadas, filtrar en función de la importancia de la tarea… El proyecto está terminado y en el proceso de despliegue encontré un pequeño detalle: las cookies de sesión no se enviaban correctamente del cliente al servidor. Esto hacía que el backend no pudiera mantener la sesión del usuario. Parece tratarse de algún ajuste de configuración para la seguridad que no permite recibirlas.",
      de: "Es handelt sich um eine klassische Aufgabenverwaltungsanwendung. Die App verfügt über ein Login-System, das sowohl die Identifikation als auch die Registrierung von Benutzern ermöglicht. Sobald ein Benutzer eingeloggt ist, wird er, sofern er sich nicht absichtlich ausloggt, für einen ganzen Tag nicht erneut aufgefordert, sich einzuloggen. Eine Cookie wird verwendet, um die Sitzung aufrechtzuerhalten. Die App bietet drei Aufgabentypen: wichtig, normal oder optional, und ermöglicht es, Aufgaben hinzuzufügen, ausgewählte Aufgaben zu löschen und Aufgaben nach ihrer Wichtigkeit zu filtern. Das Projekt ist abgeschlossen, und während des Bereitstellungsprozesses fiel mir ein kleines Detail auf: Die Sitzungscookies wurden nicht korrekt vom Client an den Server gesendet. Dadurch konnte das Backend die Benutzersitzung nicht aufrechterhalten. Es scheint sich um eine Konfigurationsanpassung für die Sicherheit zu handeln, die deren Empfang verhindert.",
    },
    technologies: [
      IconType.NextJS,
      IconType.TailwindCSS,
      IconType.TypeScript,
      IconType.NodeJS,
      IconType.SQLDeveloper,
    ],
    image: "todo-app.png",
    repository: "https://github.com/TheJhoxX/todo-app",
  },
  {
    label: "Caralibro",
    title: {
      en: "Caralibro: The Social Network",
      es: "Caralibro: la red social",
      de: "Caralibro: Das soziale Netzwerk",
    },
    description: {
      en: "Project developed in Python for the subject: Data Structures and Algorithms. The goal was to find connections between users using graphs (first part) and to improve the performance of the algorithm from the first part by using data structures such as a Hash Table. The assignment description and test files are included in the project.",
      es: "Proyecto realizado con Python para la asignatura: Estructuras de Datos y Algoritmos. En ésta se buscaba encontrar conexiones entre usuarios mediante el uso de grafos (primera parte) y la mejora del rendimiento del algoritmo de la primera parte utilizando estructuras de datos como una Hash Table. Enunciado y ficheros de prueba se encuentran en el proyecto.",
      de: "Projekt mit Python für das Fach: Datenstrukturen und Algorithmen. Ziel war es, Verbindungen zwischen Benutzern mithilfe von Graphen zu finden (erster Teil) und die Leistung des Algorithmus aus dem ersten Teil durch den Einsatz von Datenstrukturen wie einer Hash-Tabelle zu verbessern. Aufgabenstellung und Testdateien befinden sich im Projekt.",
    },
    technologies: [IconType.Python],
    image: "grafo.webp",
    repository: "https://github.com/TheJhoxX/CARALIBRO---La-Red-Social",
  },
  {
    label: "Nested",
    title: {
      en: "Nested",
      es: "Nested",
      de: "Nested",
    },
    description: {
      en: "A web application developed for the Web Services and Systems course. It uses Servlets, MariaDB, HTML, CSS, XML, and JS. It includes APIs like Nominatim and Leaflet for interactive maps.",
      es: "Se trata de una aplicación web desarrollada para la asignatura: Servicios y Sistemas Web. El proyecto está realizado empleando: Servlets, MariaDB, HTML, CSS, XML y JS.",
      de: "Eine Webanwendung, die für den Kurs Webdienste und -systeme entwickelt wurde. Es verwendet Servlets, MariaDB, HTML, CSS, XML und JS.",
    },
    technologies: [
      IconType.Java,
      IconType.JavaScript,
      IconType.HTML,
      IconType.CSS,
    ],
    image: "nested-logo.png",
    repository: "https://github.com/TheJhoxX/Nested",
  },
  {
    label: "Hanoi Towers",
    title: {
      en: "Towers Problem",
      es: "Problema de las torres",
      de: "Türmeproblem",
    },
    description: {
      en: "Solution to a problem proposed for the subject: Analysis and Design of Algorithms. The goal was to solve it using Dynamic Programming, but my teammate and I arrived at a solution using a similar but less efficient strategy. The project includes not only the code but also some test inputs, a PDF with the problem statement, and another PDF with a description of the project development.",
      es: "Resolución de un problema planteado para la asignatura: Análisis y Diseño de Algoritmos. El objetivo era resolverlo mediante Programación dinámica, pero mi compañero y yo llegamos a una solución mediante una estrategia similar pero menos eficiente. El proyecto, además del código, contiene algunas entradas de prueba, un PDF con el enunciado y otro con una descripción sobre la elaboración de la práctica.",
      de: "Lösung eines für das Fach: Analyse und Entwurf von Algorithmen gestellten Problems. Das Ziel war es, das Problem mit dynamischer Programmierung zu lösen, aber mein Kommilitone und ich fanden eine Lösung mit einer ähnlichen, aber weniger effizienten Strategie. Das Projekt enthält neben dem Code einige Testeingaben, eine PDF-Datei mit der Aufgabenstellung und eine weitere mit einer Beschreibung der Projekterstellung.",
    },
    technologies: [IconType.Java],
    image: "hanoi-towers.webp",
    repository: "https://github.com/TheJhoxX/p2ADA",
  },
  {
    label: "UVAsh",
    title: {
      en: "UVAsh",
      es: "UVAsh",
      de: "UVAsh",
    },
    description: {
      en: "Development of a Shell with interactive and non-interactive modes as part of the Operating Systems Structure course.",
      es: "Programación de un Shell con modo interactivo o no interactivo realizada para la asignatura: Estructura de Sistemas Operativos",
      de: "Entwicklung einer Shell mit interaktiven und nicht interaktiven Modi im Rahmen des Kurses Betriebssystemstruktur.",
    },
    technologies: [IconType.C],
    image: "imagen-bash.webp",
    repository: "https://github.com/TheJhoxX/UVash",
  },
  {
    label: "QuickSort",
    title: {
      en: "Improvement of the Classic Algorithm: Quicksort",
      es: "Mejora del algoritmo clásico: Quicksort",
      de: "Verbesserung des klassischen Algorithmus: Quicksort",
    },
    description: {
      en: "Improvement of the Quicksort algorithm using the Direct Insertion algorithm to handle cases where the normal algorithm's efficiency is compromised. This project was developed as part of the course: Algorithm Analysis and Design.",
      es: "Mejora del algoritmo Quicksort usando el algoritmo de Inserción Directa para cubrir casos en los que la eficiencia del algoritmo normal se vea comprometida. Fue realizada como práctica para la asignatura: Análisis y Diseño de Algoritmos",
      de: "Verbesserung des Quicksort-Algorithmus unter Verwendung des direkten Einfügealgorithmus, um Fälle zu bewältigen, in denen die Effizienz des normalen Algorithmus beeinträchtigt wird. Dieses Projekt wurde im Rahmen des Kurses Algorithmus-Analyse und -Design entwickelt.",
    },
    technologies: [IconType.Java],
    image: "quicksort.webp",
    repository: "https://github.com/TheJhoxX/p1ADA",
  },
];

export const aboutMeDescriptions = {
  es: {
    introduction:
      "Soy un desarrollador frontend apasionado, siempre ansioso por aprender sobre las últimas tecnologías.",
    projectsKind:
      "En los últimos años, he trabajado en una variedad de proyectos académicos, personales y profesionales. Estos han ido desde desarrollos de alto nivel utilizando frameworks modernos como Next.js hasta programación de bajo nivel con C y C++. Esta experiencia diversa no solo ha ampliado mi conocimiento, sino que también me ha ayudado a descubrir qué tecnologías y campos disfruto más.",
    interests:
      "Actualmente, estoy particularmente enfocado en el desarrollo web, especialmente frontend, utilizando tecnologías como Next.js, TailwindCSS y Flutter. También estoy abierto a aprender más sobre desarrollo móvil para ampliar aún más mis habilidades.",
  },
  en: {
    introduction:
      "I am a passionate frontend developer, always eager to learn about the latest technologies.",
    projectsKind:
      "Over the past few years, I have worked on a variety of academic, personal, and professional projects. These have ranged from high-level development using modern frameworks like Next.js to low-level programming with C and C++. This diverse experience has not only broadened my knowledge but also helped me discover which technologies and fields I enjoy the most.",
    interests:
      "Currently, I am particularly focused on web development, especially frontend, using technologies like Next.js, TailwindCSS, and Flutter. I am also open to learning more about mobile development to further expand my skill set.",
  },
  de: {
    introduction:
      "Ich bin ein leidenschaftlicher Frontend-Entwickler und immer bestrebt, die neuesten Technologien zu erlernen.",
    projectsKind:
      "In den letzten Jahren habe ich an einer Vielzahl von akademischen, persönlichen und beruflichen Projekten gearbeitet. Diese reichten von High-Level-Entwicklungen mit modernen Frameworks wie Next.js bis hin zur Low-Level-Programmierung mit C und C++. Diese vielfältigen Erfahrungen haben nicht nur mein Wissen erweitert, sondern mir auch geholfen, herauszufinden, welche Technologien und Bereiche mir am meisten Spaß machen.",
    interests:
      "Derzeit konzentriere ich mich besonders auf die Webentwicklung, insbesondere im Frontend-Bereich, mit Technologien wie Next.js, TailwindCSS und Flutter. Ich bin auch offen dafür, mehr über die mobile Entwicklung zu lernen, um meine Fähigkeiten weiter auszubauen.",
  },
};

export const getAboutMeDescriptions = (language: Language) =>
  aboutMeDescriptions[language];

export const getLabels = (language: Language) => labels[language];

export const getProjects = (): IProject[] => projects;
