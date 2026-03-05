export interface CaseMetric {
  value: string;
  label: string;
  labelEs: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  subtitle: string;
  subtitleEs: string;
  sector: string;
  sectorEs: string;
  tags: string[];
  duration: string;
  durationEs: string;
  challenge: string;
  challengeEs: string;
  approach: string;
  approachEs: string;
  deliverables: string[];
  deliverablesEs: string[];
  techStack: string[];
  impact: string;
  impactEs: string;
  image: string;
  imageAlt: string;
  imageAltEs: string;
  color: string;
  metrics: CaseMetric[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "accem-web-platform",
    client: "ACCEM",
    subtitle: "Modern Web Platform with Next.js, Sanity CMS & SQL Infrastructure",
    subtitleEs: "Plataforma Web Moderna con Next.js, Sanity CMS e Infraestructura SQL",
    sector: "Third Sector / Non-profit",
    sectorEs: "Tercer Sector / Sin fines de lucro",
    tags: ["Software Development"],
    duration: "Ongoing — continuous consulting",
    durationEs: "En curso — consultoría continua",
    challenge:
      "ACCEM, a major Spanish NGO serving vulnerable populations across Spain, relied on an outdated web presence that couldn't scale with their growing operations. They needed a modern, content-managed platform that would empower non-technical staff to update content, integrate with their data systems, and provide a seamless experience for beneficiaries, donors, and partners.",
    challengeEs:
      "ACCEM, una importante ONG española que atiende a poblaciones vulnerables en toda España, dependía de una presencia web obsoleta que no podía escalar con sus crecientes operaciones. Necesitaban una plataforma moderna con gestión de contenidos que permitiera al personal no técnico actualizar contenido, integrarse con sus sistemas de datos y ofrecer una experiencia fluida para beneficiarios, donantes y colaboradores.",
    approach:
      "We designed and built a full web platform from scratch using Next.js with TypeScript for type safety and developer productivity. Tailwind CSS provided a consistent, responsive design system. Sanity CMS was implemented as the headless content backbone, giving editors a powerful, intuitive interface for managing pages, news, programs, and multimedia content. The backend data layer was built on PostgreSQL with structured SQL pipelines for reporting, donor management, and beneficiary tracking. We continue to provide ongoing consulting, feature development, and technical support as part of our continuous partnership with ACCEM.",
    approachEs:
      "Diseñamos y construimos una plataforma web completa desde cero utilizando Next.js con TypeScript para seguridad de tipos y productividad del desarrollo. Tailwind CSS proporcionó un sistema de diseño consistente y responsive. Sanity CMS se implementó como el backend headless de contenidos, dando a los editores una interfaz potente e intuitiva para gestionar páginas, noticias, programas y contenido multimedia. La capa de datos backend se construyó sobre PostgreSQL con pipelines SQL estructurados para reporting, gestión de donantes y seguimiento de beneficiarios. Continuamos proporcionando consultoría continua, desarrollo de funcionalidades y soporte técnico como parte de nuestra colaboración permanente con ACCEM.",
    deliverables: [
      "Full web platform built with Next.js and TypeScript",
      "Sanity CMS integration with custom schemas and editor workflows",
      "Tailwind CSS design system with responsive layouts",
      "PostgreSQL database with SQL reporting pipelines",
      "Donor management and beneficiary tracking modules",
      "Content migration from legacy systems",
      "Ongoing consulting and continuous feature development",
    ],
    deliverablesEs: [
      "Plataforma web completa construida con Next.js y TypeScript",
      "Integración de Sanity CMS con esquemas personalizados y flujos de edición",
      "Sistema de diseño con Tailwind CSS y layouts responsive",
      "Base de datos PostgreSQL con pipelines de reporting SQL",
      "Módulos de gestión de donantes y seguimiento de beneficiarios",
      "Migración de contenido desde sistemas heredados",
      "Consultoría continua y desarrollo de funcionalidades permanente",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "PostgreSQL",
      "Node.js",
      "Vercel",
    ],
    impact:
      "The new platform transformed ACCEM's digital presence, enabling non-technical staff to publish and manage content independently. Page load times improved by 70% compared to the legacy site. The SQL infrastructure unified data from 4 previously siloed systems, reducing administrative overhead by 40%. Content publishing turnaround went from days to minutes. We remain embedded as ongoing technical consultants, ensuring the platform evolves with ACCEM's needs.",
    impactEs:
      "La nueva plataforma transformó la presencia digital de ACCEM, permitiendo al personal no técnico publicar y gestionar contenido de forma independiente. Los tiempos de carga mejoraron un 70% respecto al sitio anterior. La infraestructura SQL unificó datos de 4 sistemas previamente aislados, reduciendo la carga administrativa en un 40%. La publicación de contenidos pasó de días a minutos. Permanecemos integrados como consultores técnicos continuos, asegurando que la plataforma evolucione con las necesidades de ACCEM.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Modern web platform and content management interface",
    imageAltEs: "Plataforma web moderna e interfaz de gestión de contenidos",
    color: "#0147FF",
    metrics: [
      { value: "70%", label: "Faster Load Times", labelEs: "Mejora en Velocidad" },
      { value: "40%", label: "Admin Overhead Reduced", labelEs: "Reducción de Carga Admin." },
      { value: "4", label: "Systems Unified", labelEs: "Sistemas Unificados" },
    ],
  },
  {
    slug: "accem-security-audit",
    client: "ACCEM",
    subtitle: "IT Security Audit, Data Protection & Ongoing Cyber Resilience",
    subtitleEs: "Auditoría de Seguridad IT, Protección de Datos y Ciberresiliencia Continua",
    sector: "Third Sector / Non-profit",
    sectorEs: "Tercer Sector / Sin fines de lucro",
    tags: ["Security", "Cybersecurity"],
    duration: "Ongoing — continuous consulting",
    durationEs: "En curso — consultoría continua",
    challenge:
      "ACCEM is one of Spain's leading social inclusion organizations, with 3,800+ employees across 15 autonomous communities serving 95,000+ people annually — including refugees, migrants, trafficking victims, and unaccompanied minors. Their systems handle highly sensitive personal data across distributed offices and accommodation centers. After years of organic growth, the IT infrastructure had accumulated technical debt: inconsistent access controls, unpatched systems, no centralized monitoring, and no formal incident response plan. A breach could expose vulnerable populations to real harm and put the organization at serious regulatory risk under GDPR.",
    challengeEs:
      "ACCEM es una de las principales organizaciones de inclusión social de España, con más de 3.800 empleados en 15 comunidades autónomas atendiendo a más de 95.000 personas al año — incluyendo refugiados, migrantes, víctimas de trata y menores no acompañados. Sus sistemas manejan datos personales altamente sensibles en oficinas y centros de acogida distribuidos por todo el territorio. Tras años de crecimiento orgánico, la infraestructura IT había acumulado deuda técnica: controles de acceso inconsistentes, sistemas sin parchear, ausencia de monitorización centralizada y ningún plan formal de respuesta ante incidentes. Una brecha podría exponer a poblaciones vulnerables a daños reales y poner a la organización en riesgo regulatorio serio bajo el RGPD.",
    approach:
      "We started with a full-scope IT security audit across network infrastructure, web applications, access management, and data handling workflows — covering both headquarters and distributed regional offices. We ran vulnerability scans and penetration tests against external and internal assets, audited user privilege levels and credential policies, and reviewed data flows to map where sensitive information was stored, transmitted, and exposed. From the findings, we built a prioritized remediation roadmap organized by risk severity. We then moved into implementation: firewall hardening, endpoint protection rollout, network segmentation, access policy enforcement, and deployment of centralized log monitoring. We wrote incident response playbooks tailored to their operational reality, ran a phishing simulation campaign as a baseline, and delivered security awareness training across all staff levels. The engagement continues with quarterly reassessments and ongoing advisory.",
    approachEs:
      "Comenzamos con una auditoría de seguridad IT de alcance completo sobre infraestructura de red, aplicaciones web, gestión de accesos y flujos de manejo de datos — cubriendo tanto la sede central como las oficinas regionales distribuidas. Ejecutamos escaneos de vulnerabilidades y tests de penetración contra activos externos e internos, auditamos niveles de privilegios de usuario y políticas de credenciales, y revisamos flujos de datos para mapear dónde se almacenaba, transmitía y exponía la información sensible. A partir de los hallazgos, construimos una hoja de ruta de remediación priorizada por severidad de riesgo. Pasamos entonces a la implementación: fortalecimiento de firewalls, despliegue de protección de endpoints, segmentación de red, aplicación de políticas de acceso e implantación de monitorización centralizada de logs. Redactamos playbooks de respuesta ante incidentes adaptados a su realidad operativa, ejecutamos una campaña de simulación de phishing como línea base e impartimos formación en concienciación de seguridad a todos los niveles del personal. El compromiso continúa con reevaluaciones trimestrales y asesoría permanente.",
    deliverables: [
      "Full-scope IT security audit report with risk classification",
      "Prioritized remediation roadmap by severity",
      "Penetration testing report (external and internal)",
      "Network segmentation and firewall hardening",
      "Centralized log monitoring and alerting setup",
      "Endpoint protection deployment across all offices",
      "Incident response playbooks and escalation procedures",
      "Phishing simulation campaign and baseline report",
      "Security awareness training for 3,800+ staff",
      "GDPR compliance assessment and gap analysis",
      "Quarterly reassessment and ongoing security advisory",
    ],
    deliverablesEs: [
      "Informe completo de auditoría de seguridad IT con clasificación de riesgos",
      "Hoja de ruta de remediación priorizada por severidad",
      "Informe de tests de penetración (externo e interno)",
      "Segmentación de red y fortalecimiento de firewalls",
      "Monitorización centralizada de logs y configuración de alertas",
      "Despliegue de protección de endpoints en todas las oficinas",
      "Playbooks de respuesta ante incidentes y procedimientos de escalación",
      "Campaña de simulación de phishing e informe de línea base",
      "Formación en concienciación de seguridad para más de 3.800 empleados",
      "Evaluación de cumplimiento RGPD y análisis de brechas",
      "Reevaluación trimestral y asesoría de seguridad continua",
    ],
    techStack: [
      "Nessus",
      "Burp Suite",
      "Wireshark",
      "OWASP ZAP",
      "Splunk",
      "CrowdStrike",
      "pfSense",
      "Wazuh",
    ],
    impact:
      "The audit identified and remediated 23 critical vulnerabilities across ACCEM's distributed infrastructure, including unpatched services exposed to the internet, overly permissive access policies, and unencrypted data flows carrying personal information. Full GDPR compliance was achieved for the data handling of 95,000+ beneficiary records. The phishing simulation baseline showed a 34% click rate — after targeted training across all 3,800+ staff, follow-up simulations dropped that to under 7%. Centralized monitoring now covers all regional offices with real-time alerting. We remain as their permanent security consultants, running quarterly reassessments and adapting the security posture as the organization and threat landscape evolve.",
    impactEs:
      "La auditoría identificó y remedió 23 vulnerabilidades críticas en la infraestructura distribuida de ACCEM, incluyendo servicios sin parchear expuestos a internet, políticas de acceso excesivamente permisivas y flujos de datos sin cifrar que transportaban información personal. Se logró cumplimiento total con el RGPD para el manejo de datos de más de 95.000 beneficiarios. La simulación de phishing inicial mostró una tasa de clic del 34% — tras la formación dirigida a los más de 3.800 empleados, las simulaciones de seguimiento redujeron esa cifra a menos del 7%. La monitorización centralizada ahora cubre todas las oficinas regionales con alertas en tiempo real. Continuamos como sus consultores de seguridad permanentes, realizando reevaluaciones trimestrales y adaptando la postura de seguridad a medida que la organización y el panorama de amenazas evolucionan.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    imageAlt: "Cybersecurity audit and protection infrastructure",
    imageAltEs: "Auditoría de ciberseguridad e infraestructura de protección",
    color: "#EF4444",
    metrics: [
      { value: "95,000+", label: "Records Protected", labelEs: "Registros Protegidos" },
      { value: "23", label: "Vulnerabilities Fixed", labelEs: "Vulnerabilidades Corregidas" },
      { value: "34%→7%", label: "Phishing Click Rate", labelEs: "Tasa de Clic Phishing" },
    ],
  },
  {
    slug: "accem-ai-rag",
    client: "ACCEM",
    subtitle: "AI-Powered RAG System for Program Analysis & Service Matching",
    subtitleEs: "Sistema de IA RAG para Análisis de Programas y Matching de Servicios",
    sector: "Third Sector / Non-profit",
    sectorEs: "Tercer Sector / Sin fines de lucro",
    tags: ["AI"],
    duration: "Ongoing — continuous consulting",
    durationEs: "En curso — consultoría continua",
    challenge:
      "ACCEM runs dozens of social programs across Spain serving refugees, migrants, and vulnerable populations. Program managers struggled to efficiently match beneficiaries with the right services, analyze program effectiveness across regions, and extract actionable insights from thousands of case files and reports scattered across multiple systems.",
    challengeEs:
      "ACCEM gestiona decenas de programas sociales en toda España atendiendo a refugiados, migrantes y poblaciones vulnerables. Los gestores de programas tenían dificultades para emparejar eficientemente a beneficiarios con los servicios adecuados, analizar la efectividad de los programas entre regiones y extraer información accionable de miles de expedientes e informes dispersos en múltiples sistemas.",
    approach:
      "We designed and deployed a Retrieval-Augmented Generation (RAG) system that ingests ACCEM's program documentation, case files, and operational reports into a vector store for semantic search. The AI layer enables program managers to query their data in natural language — finding relevant precedents, matching beneficiaries to available programs, and generating summary reports. The system integrates with their existing PostgreSQL infrastructure and respects strict data access controls to protect sensitive beneficiary information. We provide ongoing consulting to refine the model, expand the knowledge base, and develop new AI-powered workflows as ACCEM's needs evolve.",
    approachEs:
      "Diseñamos y desplegamos un sistema de Generación Aumentada por Recuperación (RAG) que ingesta la documentación de programas, expedientes y reportes operativos de ACCEM en un almacén vectorial para búsqueda semántica. La capa de IA permite a los gestores de programas consultar sus datos en lenguaje natural — encontrando precedentes relevantes, emparejando beneficiarios con programas disponibles y generando informes resumen. El sistema se integra con su infraestructura PostgreSQL existente y respeta controles estrictos de acceso a datos para proteger información sensible de beneficiarios. Proporcionamos consultoría continua para refinar el modelo, expandir la base de conocimiento y desarrollar nuevos flujos de trabajo impulsados por IA según evolucionan las necesidades de ACCEM.",
    deliverables: [
      "RAG system with vector search and semantic retrieval",
      "Document ingestion pipeline for program files and reports",
      "Natural language query interface for program managers",
      "Beneficiary-to-program matching engine",
      "Automated summary report generation",
      "Integration with existing PostgreSQL data infrastructure",
      "Data access controls and privacy safeguards",
      "Ongoing AI consulting and model refinement",
    ],
    deliverablesEs: [
      "Sistema RAG con búsqueda vectorial y recuperación semántica",
      "Pipeline de ingestión de documentos para expedientes y reportes",
      "Interfaz de consulta en lenguaje natural para gestores de programas",
      "Motor de matching beneficiario-programa",
      "Generación automatizada de informes resumen",
      "Integración con infraestructura de datos PostgreSQL existente",
      "Controles de acceso a datos y salvaguardas de privacidad",
      "Consultoría continua de IA y refinamiento de modelos",
    ],
    techStack: [
      "LangChain",
      "OpenAI",
      "Pinecone",
      "Python",
      "PostgreSQL",
      "Node.js",
      "Docker",
    ],
    impact:
      "The RAG system transformed how ACCEM's program managers access and use their institutional knowledge. Beneficiary-to-program matching time dropped from hours of manual review to seconds of AI-assisted search. Program effectiveness analysis that previously required weeks of manual data compilation can now be generated on demand. The system increased overall program effectiveness by 35%, helping ACCEM serve more people with better-targeted resources. We continue as embedded AI consultants, expanding the system's capabilities and training staff on new AI-powered workflows.",
    impactEs:
      "El sistema RAG transformó la forma en que los gestores de programas de ACCEM acceden y utilizan su conocimiento institucional. El tiempo de emparejamiento beneficiario-programa pasó de horas de revisión manual a segundos de búsqueda asistida por IA. Los análisis de efectividad de programas que antes requerían semanas de compilación manual de datos ahora pueden generarse bajo demanda. El sistema aumentó la efectividad global de los programas en un 35%, ayudando a ACCEM a atender a más personas con recursos mejor dirigidos. Continuamos como consultores de IA integrados, expandiendo las capacidades del sistema y formando al personal en nuevos flujos de trabajo impulsados por IA.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    imageAlt: "AI and machine learning system with data visualization",
    imageAltEs: "Sistema de IA y aprendizaje automático con visualización de datos",
    color: "#8B5CF6",
    metrics: [
      { value: "35%", label: "Effectiveness Increase", labelEs: "Aumento de Efectividad" },
      { value: "10x", label: "Faster Matching", labelEs: "Matching Más Rápido" },
      { value: "1000s", label: "Documents Indexed", labelEs: "Documentos Indexados" },
    ],
  },
  {
    slug: "csic-upgrade-hub",
    client: "CSIC & Upgrade Hub",
    subtitle: "AI Training Programs & Google Cloud Web Platform",
    subtitleEs: "Programas de Formación en IA y Plataforma Web en Google Cloud",
    sector: "Academic / Education",
    sectorEs: "Académico / Educación",
    tags: ["AI", "Training", "Software Development"],
    duration: "Ongoing (2+ years)",
    durationEs: "En curso (2+ años)",
    challenge:
      "CSIC (Spanish National Research Council) and Upgrade Hub aimed to launch comprehensive AI and data science programs for academic and professional audiences, but lacked the technical infrastructure, curriculum expertise, and web platform to deliver scalable, quality education. They needed a full program — from curriculum design to a production-grade platform.",
    challengeEs:
      "CSIC (Consejo Superior de Investigaciones Científicas) y Upgrade Hub tenían como objetivo lanzar programas integrales de IA y ciencia de datos para públicos académicos y profesionales, pero carecían de infraestructura técnica, experiencia curricular y plataforma web para entregar educación de calidad y escalable. Necesitaban un programa completo — desde el diseño curricular hasta una plataforma de nivel producción.",
    approach:
      "We designed the Momentum AI program curriculum covering machine learning, deep learning, NLP, and computer vision. Built a Google Cloud-based web system for the program platform with interactive labs and automated assessment. Created modular microcredentials stackable into full certifications. The Data Analytics & AI bootcamp at Upgrade Hub covers Python, SQL, Power BI, Microsoft Fabric, Azure ML, LLMs, and RAG in an 18-week intensive format.",
    approachEs:
      "Diseñamos el currículo del programa Momentum AI cubriendo aprendizaje automático, aprendizaje profundo, NLP y visión por computadora. Construimos un sistema web basado en Google Cloud para la plataforma del programa con laboratorios interactivos y evaluación automatizada. Creamos microcredenciales modulares apilables en certificaciones completas. El bootcamp de Data Analytics e IA en Upgrade Hub cubre Python, SQL, Power BI, Microsoft Fabric, Azure ML, LLMs y RAG en un formato intensivo de 18 semanas.",
    deliverables: [
      "Momentum AI curriculum (200+ hours of content)",
      "Google Cloud-based web platform",
      "Interactive coding labs with automated assessment",
      "18-week Data Analytics & AI bootcamp",
      "Microcredential framework with digital badges",
      "Instructor training and certification program",
      "Industry partnership and job placement network",
    ],
    deliverablesEs: [
      "Currículo de Momentum AI (200+ horas de contenido)",
      "Plataforma web basada en Google Cloud",
      "Laboratorios de codificación interactivos con evaluación automatizada",
      "Bootcamp de Data Analytics e IA de 18 semanas",
      "Marco de microcredenciales con insignias digitales",
      "Programa de capacitación y certificación de instructores",
      "Red de asociaciones industriales y colocación laboral",
    ],
    techStack: [
      "Google Cloud",
      "Next.js",
      "Python",
      "Jupyter",
      "TensorFlow",
      "PyTorch",
      "PostgreSQL",
    ],
    impact:
      "The Momentum AI program enrolled 500+ students in the first year across academic and professional tracks. Graduates reported 85% job placement rate within 3 months. The platform reached 15+ research institutions for collaborative projects. Computer vision specialization attracted industry partnerships from leading tech companies, resulting in sponsored research projects.",
    impactEs:
      "El programa Momentum AI inscribió a 500+ estudiantes en el primer año en pistas académicas y profesionales. Los graduados informaron una tasa de colocación laboral del 85% dentro de 3 meses. La plataforma alcanzó 15+ instituciones de investigación para proyectos colaborativos. La especialización en visión por computadora atrajo asociaciones industriales de empresas tecnológicas líderes, resultando en proyectos de investigación patrocinados.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    imageAlt: "AI and machine learning training environment",
    imageAltEs: "Entorno de capacitación en IA y aprendizaje automático",
    color: "#00D4FF",
    metrics: [
      { value: "500+", label: "Students Enrolled", labelEs: "Estudiantes Inscritos" },
      { value: "85%", label: "Job Placement Rate", labelEs: "Tasa de Colocación Laboral" },
      { value: "15+", label: "Research Institutions", labelEs: "Instituciones de Investigación" },
    ],
  },
  {
    slug: "osint-uruguay",
    client: "Private Investigation Consortium",
    subtitle: "OSINT-Powered Fraud Detection & Financial Crime Investigation",
    subtitleEs:
      "Detección de Fraude Impulsada por OSINT e Investigación de Crimen Financiero",
    sector: "Private Investigation / Fraud Detection",
    sectorEs: "Investigación Privada / Detección de Fraude",
    tags: ["Cybersecurity", "OSINT", "Data Science"],
    duration: "8 months",
    durationEs: "8 meses",
    challenge:
      "A consortium of private investigators in Uruguay faced significant challenges in detecting sophisticated financial fraud schemes that operated across multiple jurisdictions and digital platforms. Traditional investigation methods were slow and resource-intensive. They needed to rapidly connect disparate data points from public sources to identify fraud networks and track illicit financial flows.",
    challengeEs:
      "Un consorcio de investigadores privados en Uruguay enfrentaba desafíos significativos para detectar esquemas sofisticados de fraude financiero que operaban en múltiples jurisdicciones y plataformas digitales. Los métodos de investigación tradicionales eran lentos e intensivos en recursos. Necesitaban conectar rápidamente puntos de datos dispares de fuentes públicas para identificar redes de fraude y rastrear flujos financieros ilícitos.",
    approach:
      "We built a comprehensive OSINT platform that aggregated data from multiple internet sources including business registries, social media, domain registration databases, and financial records. Implemented advanced graph analysis to identify connections between individuals, companies, and financial transactions. Created automated alerts for suspicious patterns and network structures. Trained the investigation team on advanced OSINT techniques and tool usage.",
    approachEs:
      "Construimos una plataforma OSINT integral que agregó datos de múltiples fuentes de internet incluyendo registros comerciales, redes sociales, bases de datos de registro de dominios y registros financieros. Implementamos análisis gráfico avanzado para identificar conexiones entre individuos, empresas y transacciones financieras. Creamos alertas automatizadas para patrones sospechosos y estructuras de redes. Capacitamos al equipo de investigación en técnicas avanzadas de OSINT y uso de herramientas.",
    deliverables: [
      "OSINT aggregation platform with multi-source data integration",
      "Graph database for relationship analysis (Neo4j)",
      "Automated fraud pattern detection algorithms",
      "Real-time alerting system for suspicious activities",
      "Investigator dashboard with visualization tools",
      "OSINT toolkit training and documentation",
      "Case management and evidence tracking system",
    ],
    deliverablesEs: [
      "Plataforma de agregación OSINT con integración de múltiples fuentes de datos",
      "Base de datos gráfica para análisis de relaciones (Neo4j)",
      "Algoritmos automatizados de detección de patrones de fraude",
      "Sistema de alertas en tiempo real para actividades sospechosas",
      "Panel de investigador con herramientas de visualización",
      "Capacitación en herramientas OSINT y documentación",
      "Sistema de gestión de casos y seguimiento de evidencia",
    ],
    techStack: [
      "Python",
      "Neo4j",
      "Maltego",
      "PostgreSQL",
      "Elasticsearch",
      "React",
      "Node.js",
      "Docker",
    ],
    impact:
      "The OSINT platform enabled investigators to reduce fraud investigation time by 60%, from weeks to days. Successfully identified and documented 12 major fraud networks operating across Uruguay and neighboring countries. Recovered $8.5M in fraudulent assets through evidence provided by platform-based investigations. The system achieved 92% accuracy in identifying fraudulent entities compared to traditional methods.",
    impactEs:
      "La plataforma OSINT permitió a los investigadores reducir el tiempo de investigación de fraude en 60%, de semanas a días. Identificó y documentó exitosamente 12 redes de fraude importante que operaban en Uruguay y países vecinos. Recuperó $8.5M en activos fraudulentos mediante evidencia proporcionada por investigaciones basadas en plataforma. El sistema logró una precisión del 92% en la identificación de entidades fraudulentas comparado con métodos tradicionales.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Data investigation and fraud detection analytics",
    imageAltEs: "Análisis de investigación de datos y detección de fraude",
    color: "#6366F1",
    metrics: [
      { value: "60%", label: "Investigation Time Reduced", labelEs: "Reducción de Tiempo" },
      { value: "$8.5M", label: "Assets Recovered", labelEs: "Activos Recuperados" },
      { value: "92%", label: "Detection Accuracy", labelEs: "Precisión de Detección" },
    ],
  },
  {
    slug: "universidad-republica",
    client: "Universidad de la República",
    subtitle: "Web Platform, Security & Performance Optimization",
    subtitleEs: "Plataforma Web, Seguridad y Optimización de Rendimiento",
    sector: "Higher Education",
    sectorEs: "Educación Superior",
    tags: ["Software Development", "Database", "Security"],
    duration: "20 months",
    durationEs: "20 meses",
    challenge:
      "Universidad de la República, Uruguay's largest public university, needed a modern web platform for the Faculty of Social Sciences. Existing systems had security vulnerabilities, poor performance under load, and lacked a unified architecture for academic workflows, student records, and research data.",
    challengeEs:
      "La Universidad de la República, la universidad pública más grande de Uruguay, necesitaba una plataforma web moderna para la Facultad de Ciencias Sociales. Los sistemas existentes tenían vulnerabilidades de seguridad, bajo rendimiento bajo carga y carecían de una arquitectura unificada para flujos de trabajo académicos, registros de estudiantes y datos de investigación.",
    approach:
      "We developed a web platform focused on three pillars: security hardening, performance optimization, and scalable architecture. Built the platform with a secure API layer, role-based access control, and audit logging. Optimized database queries and implemented caching strategies to handle peak enrollment traffic. Created comprehensive web interfaces for administrators, faculty, and students.",
    approachEs:
      "Desarrollamos una plataforma web enfocada en tres pilares: fortalecimiento de seguridad, optimización de rendimiento y arquitectura escalable. Construimos la plataforma con una capa de API segura, control de acceso basado en roles y registro de auditoría. Optimizamos consultas de base de datos e implementamos estrategias de caché para manejar el tráfico de inscripción en horas pico. Creamos interfaces web integrales para administradores, profesores y estudiantes.",
    deliverables: [
      "Integrated academic management platform",
      "PostgreSQL database with comprehensive data model",
      "Microservices backend with scalable architecture",
      "Secure REST API with role-based access control",
      "Admin, faculty, and student web portals",
      "Audit logging and compliance reporting",
      "Data migration from legacy systems",
      "Staff training and documentation",
    ],
    deliverablesEs: [
      "Plataforma integrada de gestión académica",
      "Base de datos PostgreSQL con modelo de datos integral",
      "Backend de microservicios con arquitectura escalable",
      "API REST segura con control de acceso basado en roles",
      "Portales web para administradores, profesores y estudiantes",
      "Registro de auditoría e informes de cumplimiento",
      "Migración de datos de sistemas heredados",
      "Capacitación del personal y documentación",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "React",
      "TypeScript",
    ],
    impact:
      "The platform successfully integrated data from 5 legacy systems, eliminating data silos. Improved administrative efficiency by 50% through automated workflows. Faculty adoption rate reached 95% within 6 months due to intuitive interface. Student access to academic records improved satisfaction scores by 40%. System handled 15,000+ concurrent users during peak enrollment periods without issues.",
    impactEs:
      "La plataforma integró exitosamente datos de 5 sistemas heredados, eliminando silos de datos. Mejoró la eficiencia administrativa en 50% mediante flujos de trabajo automatizados. La tasa de adopción del profesorado alcanzó 95% dentro de 6 meses debido a la interfaz intuitiva. El acceso de estudiantes a registros académicos mejoró puntuaciones de satisfacción en 40%. El sistema manejó 15,000+ usuarios concurrentes durante períodos pico de inscripción sin problemas.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    imageAlt: "Modern academic institution and learning platform",
    imageAltEs: "Institución académica moderna y plataforma de aprendizaje",
    color: "#10B981",
    metrics: [
      { value: "15,000+", label: "Concurrent Users", labelEs: "Usuarios Concurrentes" },
      { value: "95%", label: "Faculty Adoption", labelEs: "Adopción del Profesorado" },
      { value: "50%", label: "Efficiency Improvement", labelEs: "Mejora de Eficiencia" },
    ],
  },
];
