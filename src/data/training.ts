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

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'module-1',
    icon: 'Code2',
    title: 'Programming & Data Analysis Fundamentals',
    titleEs: 'Fundamentos de Programación y Análisis de Datos',
    description: 'Build a solid foundation in Python programming, data manipulation, and SQL. Learn to work with real datasets using NumPy, Pandas, and connect to APIs and scripts.',
    descriptionEs: 'Construye una base sólida en programación Python, manipulación de datos y SQL. Aprende a trabajar con datasets reales usando NumPy, Pandas, y a conectarte a APIs y scripts.',
    topics: ['Python Programming', 'NumPy & Pandas', 'SQL & Databases', 'Scripts & APIs', 'Data Cleaning & Manipulation'],
    topicsEs: ['Programación Python', 'NumPy y Pandas', 'SQL y Bases de Datos', 'Scripts y APIs', 'Limpieza y Manipulación de Datos'],
    duration: '6 weeks',
    durationEs: '6 semanas',
    level: 'Beginner',
    levelEs: 'Principiante',
  },
  {
    id: 'module-2',
    icon: 'BarChart3',
    title: 'Business Intelligence & Analysis Techniques',
    titleEs: 'Business Intelligence y Técnicas de Análisis',
    description: 'Master exploratory data analysis, data storytelling, and business intelligence tools. Build professional dashboards with Power BI and Microsoft Fabric.',
    descriptionEs: 'Domina el análisis exploratorio de datos, data storytelling y herramientas de inteligencia de negocio. Construye dashboards profesionales con Power BI y Microsoft Fabric.',
    topics: ['Exploratory Data Analysis', 'Data Storytelling & Visualization', 'Power BI', 'Microsoft Fabric', 'Business Intelligence'],
    topicsEs: ['Análisis Exploratorio de Datos', 'Data Storytelling y Visualización', 'Power BI', 'Microsoft Fabric', 'Inteligencia de Negocio'],
    duration: '6 weeks',
    durationEs: '6 semanas',
    level: 'Intermediate',
    levelEs: 'Intermedio',
  },
  {
    id: 'module-3',
    icon: 'Brain',
    title: 'Machine Learning, Cloud & AI',
    titleEs: 'Machine Learning, Cloud e IA',
    description: 'Dive into machine learning, cloud computing with Azure, computer vision with YOLO, and generative AI. Work with Large Language Models and RAG techniques for real-world applications.',
    descriptionEs: 'Sumérgete en machine learning, computación en la nube con Azure, visión por computadora con YOLO e IA generativa. Trabaja con Large Language Models y técnicas RAG para aplicaciones reales.',
    topics: ['Azure ML & Cloud AI', 'Computer Vision (YOLO)', 'Large Language Models', 'RAG Techniques', 'Streamlit & n8n'],
    topicsEs: ['Azure ML e IA en la Nube', 'Visión por Computadora (YOLO)', 'Large Language Models', 'Técnicas RAG', 'Streamlit y n8n'],
    duration: '6 weeks',
    durationEs: '6 semanas',
    level: 'Advanced',
    levelEs: 'Avanzado',
  },
  {
    id: 'career-skills',
    icon: 'Sparkles',
    title: 'Career & Soft Skills',
    titleEs: 'Carrera y Soft Skills',
    description: 'Develop the professional skills that complement your technical training. Agile methodologies, CV optimization, LinkedIn strategy, technical mock interviews, and leadership coaching.',
    descriptionEs: 'Desarrolla las habilidades profesionales que complementan tu formación técnica. Metodologías ágiles, optimización de CV, estrategia de LinkedIn, mock interviews técnicas y coaching de liderazgo.',
    topics: ['Agile (Scrum & Kanban)', 'CV & LinkedIn Optimization', 'Technical Mock Interviews', 'Communication & Leadership', 'GitHub Copilot & ChatGPT'],
    topicsEs: ['Agile (Scrum y Kanban)', 'Optimización de CV y LinkedIn', 'Mock Interviews Técnicas', 'Comunicación y Liderazgo', 'GitHub Copilot y ChatGPT'],
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
    description: 'Practical methodology from day one. Real datasets, business scenarios, and hands-on projects in every module.',
    descriptionEs: 'Metodología práctica desde el primer día. Datasets reales, escenarios de negocio y proyectos prácticos en cada módulo.',
  },
  {
    id: 'mentorship',
    icon: 'Users',
    title: '1:1 Mentorship',
    titleEs: 'Mentoría 1:1',
    description: 'Personalized mentorships and feedback sessions with industry professionals who guide your learning journey.',
    descriptionEs: 'Mentorías personalizadas y sesiones de feedback con profesionales de la industria que guían tu aprendizaje.',
  },
  {
    id: 'cloud-sandbox',
    icon: 'Cloud',
    title: 'Cloud & AI Tools',
    titleEs: 'Herramientas Cloud e IA',
    description: 'Work with Azure, Streamlit, GitHub Copilot, and cutting-edge AI tools. Plus 24/7 AI assistant support.',
    descriptionEs: 'Trabaja con Azure, Streamlit, GitHub Copilot y herramientas de IA de vanguardia. Además, asistente IA disponible 24/7.',
  },
  {
    id: 'certification',
    icon: 'Award',
    title: 'Microsoft Certifications',
    titleEs: 'Certificaciones Microsoft',
    description: 'Preparation for official Microsoft certifications: Azure Data Scientist, Power BI, and Fabric Analytics Engineer.',
    descriptionEs: 'Preparación para certificaciones oficiales de Microsoft: Azure Data Scientist, Power BI y Fabric Analytics Engineer.',
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

export const upgradeHubPartnership = {
  name: 'Upgrade Hub',
  location: 'Madrid, Spain',
  website: 'https://www.upgrade-hub.com/bootcamp/curso-data-analytics/',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
  imageAlt: 'Modern tech training classroom environment',
  imageAltEs: 'Entorno moderno de formación tecnológica',
  role: 'Bootcamp Director — Data Analytics & AI',
  roleEs: 'Director de Bootcamp — Data Analytics e IA',
  description: 'Our founder Demetrio Esteban serves as Bootcamp Director of the Data Analytics & AI program at Upgrade Hub, Madrid\'s leading tech education hub. The program covers Python, SQL, Power BI, Microsoft Fabric, Azure ML, LLMs, and RAG — preparing students to work with data end-to-end and build production AI models.',
  descriptionEs: 'Nuestro fundador Demetrio Esteban es Director de Bootcamp del programa Data Analytics e IA en Upgrade Hub, el hub líder de formación tecnológica en Madrid. El programa cubre Python, SQL, Power BI, Microsoft Fabric, Azure ML, LLMs y RAG — preparando estudiantes para trabajar con datos de principio a fin y construir modelos de IA para producción.',
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
};
