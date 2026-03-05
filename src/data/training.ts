export interface TrainingProgram {
  id: string;
  icon: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  topics: string[];
  topicsEs: string[];
  duration: string;
  durationEs: string;
  level: string;
  levelEs: string;
  certification?: string;
  certificationEs?: string;
}

export interface MethodologyStep {
  id: string;
  icon: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
}

export interface TargetAudience {
  id: string;
  icon: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
}

export interface CareerOutcome {
  id: string;
  icon: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'module-1',
    icon: 'Code2',
    title: 'ETL, Business Intelligence & Python',
    titleEs: 'ETL, Business Intelligence y Python',
    description: 'Build a solid foundation in the full ETL process with PowerQuery and Microsoft Fabric, BI and dimensional modeling, Power BI with DAX for executive dashboards, and Python applied to data with NumPy, Pandas, and professional visualization.',
    descriptionEs: 'Construye una base sólida en el proceso ETL completo con PowerQuery y Microsoft Fabric, BI y modelado dimensional, Power BI con DAX para dashboards ejecutivos, y Python aplicado a datos con NumPy, Pandas y visualización profesional.',
    topics: ['ETL with PowerQuery & Microsoft Fabric', 'Dimensional Modeling & Data Warehouses', 'Power BI with DAX', 'Python: NumPy, Pandas & Visualization', 'End-to-end Project on GitHub'],
    topicsEs: ['ETL con PowerQuery y Microsoft Fabric', 'Modelado Dimensional y Data Warehouses', 'Power BI con DAX', 'Python: NumPy, Pandas y Visualización', 'Proyecto End-to-end en GitHub'],
    duration: '6 weeks',
    durationEs: '6 semanas',
    level: 'Beginner',
    levelEs: 'Principiante',
    certification: 'Microsoft Fabric Analytics Engineer & Power BI Data Analyst',
    certificationEs: 'Microsoft Fabric Analytics Engineer y Power BI Data Analyst',
  },
  {
    id: 'module-2',
    icon: 'BarChart3',
    title: 'Data Analysis, SQL & Modern Tools',
    titleEs: 'Análisis de Datos, SQL y Herramientas Modernas',
    description: 'Deep dive into statistics, Streamlit for interactive apps, SQL with Azure databases, AI-assisted coding with GitHub Copilot & Ollama, and Vibe Coding to build your professional online portfolio.',
    descriptionEs: 'Profundiza en estadística, Streamlit para apps interactivas, SQL con bases de datos Azure, programación asistida por IA con GitHub Copilot y Ollama, y Vibe Coding para construir tu portfolio profesional online.',
    topics: ['Streamlit & Interactive Apps', 'Statistics & Advanced Preprocessing', 'SQL with Azure & Python Integration', 'GitHub Copilot & Ollama', 'Vibe Coding: Portfolio & CV Online'],
    topicsEs: ['Streamlit y Apps Interactivas', 'Estadística y Preprocesamiento Avanzado', 'SQL con Azure e Integración Python', 'GitHub Copilot y Ollama', 'Vibe Coding: Portfolio y CV Online'],
    duration: '6 weeks',
    durationEs: '6 semanas',
    level: 'Intermediate',
    levelEs: 'Intermedio',
  },
  {
    id: 'module-3',
    icon: 'Brain',
    title: 'Machine Learning, LLMs & Computer Vision',
    titleEs: 'Machine Learning, LLMs y Visión Computacional',
    description: 'Explore the full AI ecosystem: from classic ML (classification, regression, time series) to neural networks, computer vision with YOLO, LLMs via API, RAG for enterprise chatbots, and workflow automation with n8n.',
    descriptionEs: 'Explora el ecosistema completo de la IA: desde ML clásico (clasificación, regresión, series temporales) hasta redes neuronales, visión computacional con YOLO, LLMs vía API, RAG para chatbots empresariales y automatización de flujos con n8n.',
    topics: ['Classification, Regression & Time Series', 'Neural Networks & Computer Vision (YOLO)', 'LLMs & Prompt Engineering', 'RAG: Enterprise Chatbots with Context', 'n8n Workflow Automation'],
    topicsEs: ['Clasificación, Regresión y Series Temporales', 'Redes Neuronales y Visión Computacional (YOLO)', 'LLMs y Prompt Engineering', 'RAG: Chatbots Empresariales con Contexto', 'Automatización de Flujos con n8n'],
    duration: '6 weeks',
    durationEs: '6 semanas',
    level: 'Advanced',
    levelEs: 'Avanzado',
    certification: 'Microsoft Azure Data Scientist Associate',
    certificationEs: 'Microsoft Azure Data Scientist Associate',
  },
  {
    id: 'career-skills',
    icon: 'Sparkles',
    title: 'Career & Soft Skills',
    titleEs: 'Carrera y Soft Skills',
    description: 'Develop the professional skills that complement your technical training. Emotional intelligence, agile methodologies (Scrum & Kanban), data storytelling, CV & LinkedIn optimization, and technical mock interviews.',
    descriptionEs: 'Desarrolla las habilidades profesionales que complementan tu formación técnica. Inteligencia emocional, metodologías ágiles (Scrum y Kanban), data storytelling, optimización de CV y LinkedIn, y mock interviews técnicas.',
    topics: ['Emotional Intelligence & Communication', 'Agile: Scrum & Kanban', 'Data Storytelling for Non-Technical Audiences', 'CV & LinkedIn Optimization', 'Ethics & Responsibility in AI'],
    topicsEs: ['Inteligencia Emocional y Comunicación', 'Agile: Scrum y Kanban', 'Data Storytelling para Audiencias No Técnicas', 'Optimización de CV y LinkedIn', 'Ética y Responsabilidad en IA'],
    duration: 'Ongoing',
    durationEs: 'Continuo',
    level: 'All Levels',
    levelEs: 'Todos los Niveles',
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    id: 'live-classes',
    icon: 'Target',
    title: '100% Live Classes',
    titleEs: 'Clases 100% en Directo',
    description: 'All sessions are live with real-time interaction. Every class is recorded for later review at your own pace.',
    descriptionEs: 'Todas las sesiones son en directo con interacción en tiempo real. Cada clase queda grabada para repaso posterior a tu ritmo.',
  },
  {
    id: 'learn-by-doing',
    icon: 'Hammer',
    title: 'Learning by Doing',
    titleEs: 'Aprender Haciendo',
    description: 'Practical methodology from day one. Real datasets, business scenarios, and hands-on projects delivered on GitHub in every module.',
    descriptionEs: 'Metodología práctica desde el primer día. Datasets reales, escenarios de negocio y proyectos prácticos entregados en GitHub en cada módulo.',
  },
  {
    id: 'mentorship',
    icon: 'Users',
    title: '1:1 Mentorship',
    titleEs: 'Mentoría 1:1',
    description: 'Personalized mentoring and feedback sessions with industry professionals who review your projects and guide your progress.',
    descriptionEs: 'Mentorías personalizadas y sesiones de feedback con profesionales de la industria que revisan tus proyectos y guían tu progreso.',
  },
  {
    id: 'cloud-sandbox',
    icon: 'Cloud',
    title: 'Cloud & AI Tools',
    titleEs: 'Herramientas Cloud e IA',
    description: 'Work with Azure, Streamlit, GitHub Copilot, Ollama, and cutting-edge AI tools. Plus 24/7 AI assistant support.',
    descriptionEs: 'Trabaja con Azure, Streamlit, GitHub Copilot, Ollama y herramientas de IA de vanguardia. Además, asistente IA disponible 24/7.',
  },
  {
    id: 'certification',
    icon: 'Award',
    title: 'Microsoft Certifications',
    titleEs: 'Certificaciones Microsoft',
    description: 'Preparation for 3 official Microsoft certifications: Fabric Analytics Engineer, Power BI Data Analyst, and Azure Data Scientist.',
    descriptionEs: 'Preparación para 3 certificaciones oficiales de Microsoft: Fabric Analytics Engineer, Power BI Data Analyst y Azure Data Scientist.',
  },
];

export const targetAudiences: TargetAudience[] = [
  {
    id: 'career-changers',
    icon: 'UserCog',
    title: 'Career Changers',
    titleEs: 'Cambio de Carrera',
    description: 'From zero to job-ready in 18 weeks. The bootcamp is designed to take you from any background into data analytics and AI with a 90%+ employment rate.',
    descriptionEs: 'De cero a listo para trabajar en 18 semanas. El bootcamp está diseñado para llevarte desde cualquier background al mundo del data analytics e IA con más del 90% de empleabilidad.',
  },
  {
    id: 'professionals',
    icon: 'Building2',
    title: 'Professionals Upskilling',
    titleEs: 'Profesionales en Reskilling',
    description: 'Already working but need data skills? Learn Python, Power BI, and AI tools to bring data-driven decision making to your current role.',
    descriptionEs: '¿Ya trabajas pero necesitas skills en datos? Aprende Python, Power BI y herramientas de IA para llevar la toma de decisiones basada en datos a tu rol actual.',
  },
  {
    id: 'recent-grads',
    icon: 'BookOpen',
    title: 'Recent Graduates',
    titleEs: 'Recién Graduados',
    description: 'Complement your academic degree with practical, industry-ready skills in data analytics, business intelligence, and artificial intelligence.',
    descriptionEs: 'Complementa tu título académico con habilidades prácticas y demandadas en data analytics, business intelligence e inteligencia artificial.',
  },
  {
    id: 'entrepreneurs',
    icon: 'Landmark',
    title: 'Entrepreneurs & Founders',
    titleEs: 'Emprendedores y Fundadores',
    description: 'Understand your data, build dashboards, and leverage AI to make smarter business decisions without depending on external teams.',
    descriptionEs: 'Entiende tus datos, construye dashboards y aprovecha la IA para tomar mejores decisiones de negocio sin depender de equipos externos.',
  },
];

export const careerOutcomes: CareerOutcome[] = [
  {
    id: 'data-analyst',
    icon: 'BarChart3',
    title: 'Data Analyst',
    titleEs: 'Analista de Datos',
    description: 'Collect, analyze, and visualize large volumes of data for business decision-making.',
    descriptionEs: 'Recopila, analiza y visualiza grandes volúmenes de datos para la toma de decisiones empresariales.',
  },
  {
    id: 'data-scientist',
    icon: 'Brain',
    title: 'Data Scientist',
    titleEs: 'Científico de Datos',
    description: 'Develop predictive algorithms and models to solve complex business problems.',
    descriptionEs: 'Desarrolla algoritmos y modelos predictivos para resolver problemas empresariales complejos.',
  },
  {
    id: 'bi-specialist',
    icon: 'Target',
    title: 'BI Specialist',
    titleEs: 'Especialista en BI',
    description: 'Transform data into strategic information to support decision-making at all levels.',
    descriptionEs: 'Transforma datos en información estratégica para apoyar la toma de decisiones.',
  },
  {
    id: 'data-engineer',
    icon: 'Code2',
    title: 'Data Engineer',
    titleEs: 'Ingeniero de Datos',
    description: 'Design and manage data storage, processing, and pipeline systems.',
    descriptionEs: 'Diseña y administra sistemas de almacenamiento, procesamiento y pipelines de datos.',
  },
  {
    id: 'analytics-consultant',
    icon: 'Landmark',
    title: 'Analytics Consultant',
    titleEs: 'Consultor de Analítica',
    description: 'Advise companies on implementing data analysis and AI solutions.',
    descriptionEs: 'Asesora empresas en la implementación de soluciones de análisis de datos e IA.',
  },
  {
    id: 'marketing-analyst',
    icon: 'Sparkles',
    title: 'Marketing Data Analyst',
    titleEs: 'Analista de Marketing Digital',
    description: 'Analyze and optimize marketing strategies using data and metrics.',
    descriptionEs: 'Analiza y optimiza estrategias de marketing usando datos y métricas.',
  },
];

export const upgradeHubPartnership = {
  name: 'Upgrade Hub',
  location: 'Madrid, Spain',
  locationEs: 'Madrid, España',
  website: 'https://www.upgrade-hub.com/bootcamp/curso-data-analytics/',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
  imageAlt: 'Modern tech training classroom environment',
  imageAltEs: 'Entorno moderno de formación tecnológica',
  role: 'Bootcamp Director — Data Analytics & AI',
  roleEs: 'Director de Bootcamp — Data Analytics e IA',
  description: 'Our founder Demetrio Esteban serves as Bootcamp Director of the Data Analytics & AI program at Upgrade Hub, Madrid\'s leading tech education hub. The 18-week intensive program covers ETL, Power BI, SQL, Python, Machine Learning, LLMs, RAG, and Computer Vision — preparing students to work with data end-to-end and build production AI models.',
  descriptionEs: 'Nuestro fundador Demetrio Esteban es Director de Bootcamp del programa Data Analytics e IA en Upgrade Hub, el hub líder de formación tecnológica en Madrid. El programa intensivo de 18 semanas cubre ETL, Power BI, SQL, Python, Machine Learning, LLMs, RAG y Visión Computacional — preparando estudiantes para trabajar con datos de principio a fin y construir modelos de IA para producción.',
  highlights: [
    'Cisco Networking Academy partner',
    'Excellence in Education Awards 2025',
    'Selected by CSIC for Momentum program',
    'Partners: Indra, Telefónica, BBVA, Deloitte, Accenture',
  ],
  highlightsEs: [
    'Partner de Cisco Networking Academy',
    'Premios Excelencia Educativa 2025',
    'Seleccionados por CSIC para el programa Momentum',
    'Partners: Indra, Telefónica, BBVA, Deloitte, Accenture',
  ],
  stats: [
    { value: '3,000+', label: 'Graduates', labelEs: 'Graduados' },
    { value: '90%+', label: 'Employment Rate', labelEs: 'Tasa de Empleo' },
    { value: '500+', label: 'Company Partners', labelEs: 'Empresas Asociadas' },
  ],
  contact: {
    phone: '+34 622 340 700',
    email: 'admisiones.upgradehub@upgrade-hub.com',
    address: 'Spaces Bernabéu · Paseo de la Castellana 93b · 28046 Madrid',
  },
};
