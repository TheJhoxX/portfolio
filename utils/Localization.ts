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
      en: "Todo App",
      es: "Todo App",
      de: "Aufgaben-App",
    },
    description: {
      en: "A classic task application with login and session handling using cookies.",
      es: "Consiste en una clásica aplicación de tareas con login y manejo de sesiones mediante cookies.",
      de: "Eine klassische Aufgabenanwendung mit Login und Sitzungsverwaltung mithilfe von Cookies.",
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
      en: "Project using Python to find user connections via graphs and improve performance using data structures such as hash tables.",
      es: "Proyecto realizado con Python para la asignatura: Estructuras de Datos y Algoritmos. En esta se buscaba encontrar conexiones entre usuarios mediante el uso de grafos.",
      de: "Projekt mit Python, um Benutzerverbindungen über Graphen zu finden und die Leistung mithilfe von Datenstrukturen wie Hashtabellen zu verbessern.",
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
      en: "Solution to a problem proposed in the Algorithm Analysis and Design course. Although the objective was to solve it using dynamic programming, my teammate and I reached a solution using a similar but less efficient approach.",
      es: "Resolución de un problema planteado para la asignatura: Análisis y Diseño de Algoritmos. El objetivo era resolverlo mediante Programación dinámica pero mi compañero y yo llegamos a una solución mediante una estrategia similar pero menos eficiente.",
      de: "Lösung eines Problems, das im Kurs Algorithmus-Analyse und -Design vorgeschlagen wurde. Obwohl das Ziel darin bestand, es mit dynamischer Programmierung zu lösen, fanden mein Partner und ich eine ähnliche, aber weniger effiziente Lösung.",
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

export const getLabels = (language: Language) => labels[language];

export const getProjects = (language: Language): IProject[] => projects;
