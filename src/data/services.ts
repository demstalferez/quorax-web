export interface Service {
  id: string;
  icon: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  highlights: string[];
  highlightsEs: string[];
  technologies: string[];
  relatedCases: string[];
  impactStat?: string;
  impactStatEs?: string;
  image: string;
  imageAlt: string;
  imageAltEs: string;
}

export const services: Service[] = [
  {
    id: "ai-ml",
    icon: "Brain",
    title: "AI & Machine Learning",
    titleEs: "IA y Aprendizaje Automático",
    description:
      "Custom AI solutions designed to solve complex business challenges. From RAG systems to computer vision and predictive analytics, we engineer intelligent systems that deliver measurable impact.",
    descriptionEs:
      "Soluciones de IA personalizadas para resolver desafíos empresariales complejos. Desde sistemas RAG hasta visión por computadora y análisis predictivo, diseñamos sistemas inteligentes con impacto medible.",
    highlights: [
      "Large Language Model integration & fine-tuning",
      "RAG systems for enterprise knowledge bases",
      "Computer vision & image recognition pipelines",
      "Predictive analytics & forecasting models",
    ],
    highlightsEs: [
      "Integración y fine-tuning de Modelos de Lenguaje",
      "Sistemas RAG para bases de conocimiento empresarial",
      "Pipelines de visión por computadora y reconocimiento de imágenes",
      "Modelos de análisis predictivo y pronóstico",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "RAG",
      "Hugging Face",
      "scikit-learn",
      "GPT APIs",
      "Computer Vision",
    ],
    relatedCases: ["csic-upgrade-hub", "accem-ai-rag"],
    impactStat: "35% increase in program effectiveness with AI-driven insights",
    impactStatEs: "35% de aumento en efectividad de programas con IA",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    imageAlt: "Abstract AI neural network visualization with glowing nodes",
    imageAltEs: "Visualización abstracta de red neuronal de IA con nodos brillantes",
  },
  {
    id: "data-science",
    icon: "BarChart3",
    title: "Data Science & Analytics",
    titleEs: "Ciencia de Datos y Análisis",
    description:
      "Transform raw data into actionable intelligence. We build data pipelines, implement advanced analytics, and create BI systems that enable data-driven decisions across your organization.",
    descriptionEs:
      "Transforma datos en bruto en inteligencia accionable. Construimos pipelines de datos, análisis avanzados y sistemas de BI que permiten decisiones basadas en datos en toda tu organización.",
    highlights: [
      "ETL pipelines & data warehouse architecture",
      "Real-time dashboards & executive reporting",
      "Customer segmentation & predictive modeling",
      "Data governance & quality frameworks",
    ],
    highlightsEs: [
      "Pipelines ETL y arquitectura de data warehouse",
      "Dashboards en tiempo real e informes ejecutivos",
      "Segmentación de clientes y modelado predictivo",
      "Marcos de gobernanza y calidad de datos",
    ],
    technologies: [
      "Pandas",
      "Spark",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Airflow",
      "Tableau",
      "Python",
    ],
    relatedCases: ["holding-empresarial", "accem-web-platform"],
    impactStat: "45% improvement in marketing ROI through data-driven segmentation",
    impactStatEs: "45% de mejora en ROI de marketing con segmentación basada en datos",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Data analytics dashboard with colorful charts and metrics",
    imageAltEs: "Panel de análisis de datos con gráficos coloridos y métricas",
  },
  {
    id: "cybersecurity",
    icon: "Shield",
    title: "Cybersecurity & OSINT",
    titleEs: "Ciberseguridad e OSINT",
    description:
      "Comprehensive security strategy from threat intelligence to incident response. We conduct audits, OSINT investigations, implement defense frameworks, and track data exposure across the internet.",
    descriptionEs:
      "Estrategia de seguridad integral desde inteligencia de amenazas hasta respuesta ante incidentes. Auditorías, investigaciones OSINT, marcos de defensa y rastreo de exposición de datos.",
    highlights: [
      "Security audits & penetration testing",
      "OSINT investigations & threat intelligence",
      "Zero Trust framework implementation",
      "Data leak monitoring & incident response",
    ],
    highlightsEs: [
      "Auditorías de seguridad y pruebas de penetración",
      "Investigaciones OSINT e inteligencia de amenazas",
      "Implementación de marco Zero Trust",
      "Monitoreo de fugas de datos y respuesta ante incidentes",
    ],
    technologies: [
      "Maltego",
      "OSINT Tools",
      "Penetration Testing",
      "Audit Frameworks",
      "Splunk",
      "Network Analysis",
      "Threat Intelligence",
      "Zero Trust",
    ],
    relatedCases: ["osint-uruguay", "accem-security-audit"],
    impactStat: "60% reduction in fraud investigation time with OSINT platform",
    impactStatEs: "60% de reducción en tiempo de investigación de fraude con OSINT",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    imageAlt: "Digital cybersecurity infrastructure with circuit patterns",
    imageAltEs: "Infraestructura de ciberseguridad digital con patrones de circuitos",
  },
  {
    id: "software-dev",
    icon: "Code2",
    title: "Software Development",
    titleEs: "Desarrollo de Software",
    description:
      "Full-stack web and mobile applications built with modern technology. Scalable, secure, and user-centric solutions from frontend to backend, ready for production from day one.",
    descriptionEs:
      "Aplicaciones web y móviles full-stack con tecnología moderna. Soluciones escalables, seguras y centradas en el usuario, listas para producción desde el primer día.",
    highlights: [
      "Full-stack web & mobile applications",
      "Cloud-native microservices architecture",
      "API design & third-party integrations",
      "CI/CD pipelines & DevOps automation",
    ],
    highlightsEs: [
      "Aplicaciones web y móviles full-stack",
      "Arquitectura de microservicios cloud-native",
      "Diseño de APIs e integraciones de terceros",
      "Pipelines CI/CD y automatización DevOps",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "Django",
      "TypeScript",
      "Docker",
      "Kubernetes",
    ],
    relatedCases: [
      "accem-web-platform",
      "universidad-republica",
      "csic-upgrade-hub",
    ],
    impactStat: "50% administrative efficiency improvement through automation",
    impactStatEs: "50% de mejora en eficiencia administrativa con automatización",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    imageAlt: "Software code with colorful syntax highlighting on screen",
    imageAltEs: "Código de software con resaltado de sintaxis colorido en pantalla",
  },
  {
    id: "training",
    icon: "GraduationCap",
    title: "Technical Training",
    titleEs: "Formación Técnica",
    description:
      "Empower teams with cutting-edge technical knowledge. Specialized training programs in AI, data science, cybersecurity, and software engineering with hands-on projects and mentorship.",
    descriptionEs:
      "Empodera equipos con conocimiento técnico de vanguardia. Programas de formación especializados en IA, ciencia de datos, ciberseguridad e ingeniería de software con proyectos prácticos y mentoría.",
    highlights: [
      "Custom corporate training programs",
      "Hands-on labs & cloud sandbox environments",
      "Microcredentials & certification frameworks",
      "Academic curriculum design & delivery",
    ],
    highlightsEs: [
      "Programas de formación corporativa a medida",
      "Laboratorios prácticos y entornos sandbox en la nube",
      "Microcredenciales y marcos de certificación",
      "Diseño e impartición de currículos académicos",
    ],
    technologies: [
      "Curriculum Design",
      "Online Platforms",
      "Hands-on Projects",
      "Mentorship",
      "Assessment Frameworks",
      "Interactive Labs",
      "Cloud Sandbox",
      "Certification",
    ],
    relatedCases: ["csic-upgrade-hub", "universidad-republica"],
    impactStat: "500+ students trained with 85% job placement rate",
    impactStatEs: "500+ estudiantes formados con 85% de tasa de empleo",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    imageAlt: "Technical training workshop with students and instructor",
    imageAltEs: "Taller de formación técnica con estudiantes e instructor",
  },
];
