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
];
