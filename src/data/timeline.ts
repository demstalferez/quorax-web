export interface TimelineItem {
  date: string;
  location: string;
  role: string;
  roleEs: string;
  org: string;
  description: string;
  descriptionEs: string;
}

export const timeline: TimelineItem[] = [
  {
    date: "2026",
    location: "Spain",
    role: "Founder",
    roleEs: "Fundador",
    org: "Quorax LLC",
    description:
      "Founded Quorax, a technology consulting firm specializing in AI, Data Science, and Software Development. Combining a decade of experience across data engineering, cloud architecture, AI systems, and cross-functional leadership to deliver intelligent solutions for complex business challenges.",
    descriptionEs:
      "Fundé Quorax, una firma de consultoría tecnológica especializada en IA, Ciencia de Datos y Desarrollo de Software. Combinando una década de experiencia en ingeniería de datos, arquitectura cloud, sistemas de IA y liderazgo multifuncional para entregar soluciones inteligentes a desafíos empresariales complejos.",
  },
  {
    date: "2025–Present",
    location: "Spain",
    role: "Program Director — Data & AI",
    roleEs: "Director de Programa — Datos e IA",
    org: "CSIC & Upgrade Hub",
    description:
      "Directing the Momentum AI program, designing and delivering curriculum covering machine learning, deep learning, and AI applications. Built a Google Cloud-based web system for the program platform, created microcredential frameworks, and established research institution partnerships.",
    descriptionEs:
      "Dirijo el programa Momentum AI, diseñando e impartiendo un currículo que cubre aprendizaje automático, aprendizaje profundo y aplicaciones de IA. Construí un sistema web basado en Google Cloud para la plataforma del programa, creé marcos de microcredenciales y establecí asociaciones con instituciones de investigación.",
  },
  {
    date: "2025–Present",
    location: "Madrid, Spain (Remote)",
    role: "Technology Consultant & Lead Developer",
    roleEs: "Consultor Tecnológico y Desarrollador Principal",
    org: "ACCEM",
    description:
      "Leading technology transformation for ACCEM, architecting a web platform with Sanity CMS, implementing RAG-based AI systems with vector search for program analysis, and building SQL-based data infrastructure. Managing full development lifecycle from architecture to deployment.",
    descriptionEs:
      "Lidero la transformación tecnológica de ACCEM, diseñando una plataforma web con Sanity CMS, implementando sistemas de IA basados en RAG con búsqueda vectorial para análisis de programas, y construyendo infraestructura de datos basada en SQL. Gestiono el ciclo completo de desarrollo desde la arquitectura hasta el despliegue.",
  },
  {
    date: "2025",
    location: "Argentina (Remote)",
    role: "ML/DL/AI Graduate Lecturer",
    roleEs: "Profesor de Posgrado en ML/DL/IA",
    org: "Universidad de Buenos Aires",
    description:
      "Delivered graduate-level lectures on machine learning, deep learning, and artificial intelligence at one of Latin America's top universities. Covered state-of-the-art techniques and practical applications for advanced students and researchers.",
    descriptionEs:
      "Impartí clases de posgrado en aprendizaje automático, aprendizaje profundo e inteligencia artificial en una de las universidades más prestigiosas de Latinoamérica. Cubrí técnicas de última generación y aplicaciones prácticas para estudiantes avanzados e investigadores.",
  },
  {
    date: "2024–Present",
    location: "Madrid, Spain",
    role: "Full Stack Engineer",
    roleEs: "Ingeniero Full Stack",
    org: "Freelance",
    description:
      "Building production-grade web applications and AI-powered systems for diverse clients. Working with Next.js, TypeScript, Flutter/Dart, Tailwind CSS, and cloud-native architectures. Projects span from startup MVPs to enterprise data platforms.",
    descriptionEs:
      "Construyo aplicaciones web de nivel producción y sistemas potenciados por IA para diversos clientes. Trabajo con Next.js, TypeScript, Flutter/Dart, Tailwind CSS y arquitecturas cloud-native. Los proyectos abarcan desde MVPs para startups hasta plataformas de datos empresariales.",
  },
  {
    date: "2024",
    location: "Madrid, Spain (Remote)",
    role: "IT Auditor",
    roleEs: "Auditor IT",
    org: "ACCEM",
    description:
      "Conducted comprehensive IT security audits for ACCEM, a major Spanish NGO serving vulnerable populations. Identified vulnerabilities across digital infrastructure, designed remediation roadmaps, and established data leak tracking systems to protect sensitive beneficiary information.",
    descriptionEs:
      "Realicé auditorías integrales de seguridad IT para ACCEM, una importante ONG española que atiende a poblaciones vulnerables. Identifiqué vulnerabilidades en la infraestructura digital, diseñé hojas de ruta de remediación y establecí sistemas de rastreo de fugas de datos para proteger información sensible de beneficiarios.",
  },
  {
    date: "2022–Present",
    location: "Madrid, Spain",
    role: "Data Science Mentor & Director",
    roleEs: "Mentor y Director de Ciencia de Datos",
    org: "Upgrade Hub",
    description:
      "Directed the Data Analytics & AI bootcamp program at Madrid's leading tech education hub. Designed learning pathways, created hands-on projects, and built infrastructure for cloud-based learning environments. Mentor students in Python, SQL, Power BI, Microsoft Fabric, Azure ML, LLMs, and RAG.",
    descriptionEs:
      "Dirijo el programa de bootcamp de Data Analytics e IA en el hub de formación tecnológica líder de Madrid. Diseñé rutas de aprendizaje, creé proyectos prácticos y construí infraestructura para entornos de aprendizaje en la nube. Mentorizo estudiantes en Python, SQL, Power BI, Microsoft Fabric, Azure ML, LLMs y RAG.",
  },
  {
    date: "2022–Present",
    location: "Wyoming, USA (Remote)",
    role: "Data Specialist",
    roleEs: "Especialista de Datos",
    org: "MAIA",
    description:
      "Responsible for data engineering and analytics for a US-based tech company. Design and maintain data pipelines, build dashboards, and deliver data-driven insights to support product and business decisions in a fully remote international team.",
    descriptionEs:
      "Responsable de ingeniería de datos y analítica para una empresa tecnológica con sede en EE.UU. Diseño y mantengo pipelines de datos, construyo dashboards y entrego insights basados en datos para apoyar decisiones de producto y negocio en un equipo internacional 100% remoto.",
  },
  {
    date: "2018–2019",
    location: "Montevideo, Uruguay",
    role: "Software Engineer",
    roleEs: "Ingeniero de Software",
    org: "Universidad de la República",
    description:
      "Developed a web platform for the Faculty of Social Sciences, focusing on security, performance optimization, and scalable architecture. Built custom tools for academic workflows and contributed to the university's digital infrastructure modernization.",
    descriptionEs:
      "Desarrollé una plataforma web para la Facultad de Ciencias Sociales, enfocándome en seguridad, optimización de rendimiento y arquitectura escalable. Construí herramientas personalizadas para flujos de trabajo académicos y contribuí a la modernización de la infraestructura digital de la universidad.",
  },
  {
    date: "2015–2021",
    location: "Uruguay",
    role: "Head of Marketing & Data",
    roleEs: "Director de Marketing y Datos",
    org: "NETpc",
    description:
      "Led data strategy and marketing operations across tourism, export trade, and tech verticals. Built data warehousing infrastructure, implemented BI systems, and created predictive analytics models for customer segmentation and marketing optimization. Managed cross-functional teams and delivered measurable revenue impact through data-driven decision making.",
    descriptionEs:
      "Lideré la estrategia de datos y operaciones de marketing en verticales de turismo, comercio exterior y tecnología. Construí infraestructura de data warehousing, implementé sistemas de BI y creé modelos de analítica predictiva para segmentación de clientes y optimización de marketing. Gestioné equipos multifuncionales y generé impacto medible en ingresos mediante toma de decisiones basada en datos.",
  },
];
