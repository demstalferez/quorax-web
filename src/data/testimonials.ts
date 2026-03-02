export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleEs: string;
  org: string;
  quote: string;
  quoteEs: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'accem',
    name: 'Programa ACCEM',
    role: 'IT Department — ACCEM NGO',
    roleEs: 'Departamento IT — ONG ACCEM',
    org: 'ACCEM',
    quote:
      'Quorax transformed our digital infrastructure completely. From our new web platform to the AI system that helps us match beneficiaries with programs, and the security audit that now protects over 50,000 records — the impact has been extraordinary. Their ongoing consulting keeps us ahead of evolving needs.',
    quoteEs:
      'Quorax transformó completamente nuestra infraestructura digital. Desde nuestra nueva plataforma web hasta el sistema de IA que nos ayuda a emparejar beneficiarios con programas, y la auditoría de seguridad que ahora protege más de 50.000 registros — el impacto ha sido extraordinario. Su consultoría continua nos mantiene por delante de las necesidades cambiantes.',
  },
  {
    id: 'csic',
    name: 'Momentum AI',
    role: 'Research Program — CSIC',
    roleEs: 'Programa de Investigación — CSIC',
    org: 'CSIC',
    quote:
      'The Momentum AI curriculum that Quorax designed for us enrolled over 500 students in the first year. The combination of academic rigor and hands-on practice is exactly what our research community needed. The Google Cloud platform they built supports it all seamlessly.',
    quoteEs:
      'El currículo de Momentum AI que Quorax diseñó para nosotros inscribió a más de 500 estudiantes en el primer año. La combinación de rigor académico y práctica aplicada es exactamente lo que nuestra comunidad investigadora necesitaba. La plataforma en Google Cloud que construyeron lo soporta todo sin problemas.',
  },
  {
    id: 'universidad',
    name: 'Facultad de Ciencias Sociales',
    role: 'Academic Management — Universidad de la República',
    roleEs: 'Gestión Académica — Universidad de la República',
    org: 'UdelaR',
    quote:
      'The platform Quorax built handles 15,000+ concurrent users during enrollment without issues. Faculty adoption reached 95% within six months — a testament to the intuitive design. They unified five legacy systems into one cohesive solution.',
    quoteEs:
      'La plataforma que construyó Quorax maneja 15.000+ usuarios concurrentes durante inscripciones sin problemas. La adopción del profesorado alcanzó el 95% en seis meses — un testimonio del diseño intuitivo. Unificaron cinco sistemas heredados en una solución cohesiva.',
  },
];
