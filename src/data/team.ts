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
    name: 'Deme',
    role: 'Founder & AI Developer',
    roleEs: 'Fundador y Desarrollador de IA',
    bio: 'AI Developer and Founder of Quorax LLC, headquartered in New York. Specialized in Data Science and Cloud/Data Engineering. Builds production-grade, cloud-native AI systems — from RAG pipelines and vector search to full-stack web applications.',
    bioEs: 'Desarrollador de IA y Fundador de Quorax LLC, con sede en Nueva York. Especializado en Data Science e Ingeniería Cloud/Data. Construye sistemas de IA cloud-native de nivel producción — desde pipelines RAG y búsqueda vectorial hasta aplicaciones web full-stack.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    specialties: ['Machine Learning', 'Homomorphic Encryption', 'Competitive Programming', 'Cryptography'],
    linkedin: 'https://www.linkedin.com/in/algorexph/',
  },
  {
    id: 'maria-gonzalez',
    name: 'Maria G.',
    role: 'Data Engineer',
    roleEs: 'Ingeniera de Datos',
    bio: 'Specialist in data pipelines, ETL processes, and cloud data infrastructure. Experience with Azure, AWS, and GCP across multiple industries.',
    bioEs: 'Especialista en pipelines de datos, procesos ETL e infraestructura de datos en la nube. Experiencia con Azure, AWS y GCP en múltiples industrias.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    specialties: ['Data Engineering', 'Azure', 'Python', 'SQL'],
    linkedin: '#',
  },
  {
    id: 'carlos-mendez',
    name: 'Carlos M.',
    role: 'Cybersecurity Analyst',
    roleEs: 'Analista de Ciberseguridad',
    bio: 'Focused on penetration testing, vulnerability assessment, and security auditing. OSCP certified with experience in enterprise environments.',
    bioEs: 'Enfocado en pruebas de penetración, evaluación de vulnerabilidades y auditoría de seguridad. Certificado OSCP con experiencia en entornos empresariales.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    specialties: ['Pentesting', 'OSINT', 'Security Audits', 'Compliance'],
    linkedin: '#',
  },
  {
    id: 'ana-torres',
    name: 'Ana T.',
    role: 'UX/UI Designer',
    roleEs: 'Diseñadora UX/UI',
    bio: 'Creates intuitive digital experiences with a focus on accessibility and design systems. Background in product design for SaaS and data platforms.',
    bioEs: 'Crea experiencias digitales intuitivas con foco en accesibilidad y sistemas de diseño. Experiencia en diseño de producto para SaaS y plataformas de datos.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    specialties: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping'],
    linkedin: '#',
  },
  {
    id: 'jorge-ruiz',
    name: 'Jorge R.',
    role: 'ML Engineer',
    roleEs: 'Ingeniero de ML',
    bio: 'Builds and deploys machine learning models at scale. Experienced in NLP, computer vision, and MLOps pipelines.',
    bioEs: 'Construye y despliega modelos de machine learning a escala. Experiencia en NLP, visión por computadora y pipelines de MLOps.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    specialties: ['PyTorch', 'NLP', 'MLOps', 'Computer Vision'],
    linkedin: '#',
    github: '#',
  },
];
