export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEs: string;
  bio: string;
  bioEs: string;
  image: string;
  specialties: string[];
  linkedin?: string;
  github?: string;
}

export const collaborators: TeamMember[] = [
  {
    id: 'demetrio-esteban',
    name: 'Demetrio Esteban Alférez',
    role: 'Founder & AI Developer',
    roleEs: 'Fundador y Desarrollador de IA',
    bio: 'AI Developer and Founder of Quorax LLC, headquartered in New York. Specialized in Data Science and Cloud/Data Engineering. Builds production-grade, cloud-native AI systems — from RAG pipelines and vector search to full-stack web applications.',
    bioEs: 'Desarrollador de IA y Fundador de Quorax LLC, con sede en Nueva York. Especializado en Data Science e Ingeniería Cloud/Data. Construye sistemas de IA cloud-native de nivel producción — desde pipelines RAG y búsqueda vectorial hasta aplicaciones web full-stack.',
    image: '/images/deme.jpeg',
    specialties: ['AI/ML', 'Data Science', 'Cloud Engineering', 'Cybersecurity', 'Full-Stack'],
    linkedin: 'https://www.linkedin.com/in/demstalfer',
    github: 'https://github.com/demstalferez',
  },
  {
    id: 'esther-carrasco',
    name: 'Esther Carrasco',
    role: 'Third Sector Liaison',
    roleEs: 'Enlace del Tercer Sector',
    bio: 'Sociologist and third sector expert. Leads the Softskills Area at Quorax — coordinating content design and delivery, and mentoring the Softskills track within data science programs.',
    bioEs: 'Socióloga y experta en tercer sector. Lidera el Área de Softskills en Quorax — coordinando el diseño y la generación de contenidos, y mentorizando el itinerario de Softskills en programas de ciencia de datos.',
    image: '/images/esther.jpeg',
    specialties: ['Third Sector', 'Softskills', 'Content Design', 'Mentoring', 'Sociology'],
    linkedin: 'https://www.linkedin.com/in/esther-carrasco-díaz-6a2041213/',
  },
  {
    id: 'antonio-zarauz',
    name: 'Antonio Zarauz',
    role: 'AI Consultant',
    roleEs: 'Consultor en Inteligencia Artificial',
    bio: 'Cognitive-AI R&D Product Owner at Credicorp and Stanford-trained. Advises Quorax on AI strategy, cognitive systems, and enterprise AI adoption across complex organizational environments.',
    bioEs: 'Product Owner de I+D en IA Cognitiva en Credicorp y formado en Stanford. Asesora a Quorax en estrategia de IA, sistemas cognitivos y adopción de IA en entornos empresariales complejos.',
    image: '/images/antonio.jpeg',
    specialties: ['AI Strategy', 'Cognitive AI', 'R&D', 'Product Ownership', 'Enterprise AI'],
    linkedin: 'https://www.linkedin.com/in/antonio-zarauz-moreno/',
  },
  {
    id: 'danielle-meer',
    name: 'Danielle Meer',
    role: 'ML Engineer & Cryptography Specialist',
    roleEs: 'Ingeniera de ML y Especialista en Criptografía',
    bio: 'Machine Learning Engineer from the Philippines. 3x StackLeague Grand Champion (2021–2023) and competitive programmer with deep expertise in Partially Homomorphic Encryption and applied ML systems.',
    bioEs: 'Ingeniera de Machine Learning de Filipinas. Triple Campeona del StackLeague (2021–2023) y programadora competitiva con profunda experiencia en Cifrado Parcialmente Homomórfico y sistemas de ML aplicado.',
    image: '/images/danielle.jpeg',
    specialties: ['Machine Learning', 'Homomorphic Encryption', 'Competitive Programming', 'Cryptography'],
    linkedin: 'https://www.linkedin.com/in/algorexph/',
  },
  {
    id: 'manuel-cotarelo',
    name: 'José Manuel Cotarelo Linares',
    role: 'ServiceNow & AI Consultant',
    roleEs: 'Consultor ServiceNow e IA',
    bio: 'ServiceNow Senior Consultant at DXC Technology with 8+ years delivering ITSM solutions for global enterprises. MSc in Cybersecurity, specialized in GenAI for IT Ops (RAG/LLMs), MLOps and Azure ML. AI Instructor at Upgrade Hub.',
    bioEs: 'Consultor Senior de ServiceNow en DXC Technology con más de 8 años implantando soluciones ITSM en grandes empresas globales. Máster en Ciberseguridad, especializado en GenAI para IT Ops (RAG/LLMs), MLOps y Azure ML. Profesor de IA en Upgrade Hub.',
    image: '/images/manu.jpeg',
    specialties: ['ServiceNow', 'ITSM', 'GenAI / RAG', 'MLOps', 'Azure ML', 'Cybersecurity'],
    linkedin: 'https://www.linkedin.com/in/manulinares6/',
  },
  {
    id: 'angela-valcarcel',
    name: 'Ángela Valcárcel Segura',
    role: 'Digital Transformation & Data Analytics for Social Impact',
    roleEs: 'Transformación Digital y Análisis de Datos para Tercer Sector e Intervención Social',
    bio: 'Chief Digital Transformation Officer at Accem and Data Analytics Teacher at Upgrade Hub. 8+ years leading digital strategy, data governance, and cloud migration in humanitarian and third-sector organizations including the Spanish Red Cross across Spain and West Africa.',
    bioEs: 'Chief Digital Transformation Officer en Accem y Profesora de Data Analytics en Upgrade Hub. Más de 8 años liderando estrategia digital, gobernanza de datos y migración cloud en organizaciones humanitarias y del tercer sector, incluyendo Cruz Roja Española en España y África Occidental.',
    image: '/images/angela.jpeg',
    specialties: ['Digital Transformation', 'Data Analytics', 'Power BI', 'Microsoft 365', 'Third Sector'],
    linkedin: 'https://www.linkedin.com/in/ángela-valcárcel-segura-3b8532185/',
  },
];
