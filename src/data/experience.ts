// ─────────────────────────────────────────────────────────────
//  EXPERIENCIA LABORAL
//  Editá este archivo para agregar o modificar tu experiencia.
//  Los iconos usan svgl.app — si una tech no tiene icono, dejá icon vacío.
// ─────────────────────────────────────────────────────────────

export interface Technology {
  name: string;
  icon?: string; // nombre del archivo en /public/icons/tech/{icon}.svg
}

export interface Job {
  role: string;
  company: string;
  type: string;         // ej. "Jornada completa"
  location: string;
  modality: string;     // ej. "Presencial" | "Híbrido" | "Remoto"
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: Technology[];
  current?: boolean;    // true si es el trabajo actual
}

const es: Job[] = [
  {
    role: "Técnico en Telecomunicaciones y Gestión de Clientes",
    company: "Telectron Ingeniería",
    type: "Jornada completa",
    location: "Río Cuarto, Córdoba, Argentina",
    modality: "Presencial",
    period: "Feb 2022 – Ago 2023",
    summary:
      "Rol técnico y operativo integral, combinando tareas de infraestructura, atención al cliente y gestión administrativa.",
    responsibilities: [
      "Instalación y configuración de enlaces Punto a Punto (PtP) para conectividad de alta calidad.",
      "Gestión de base de datos de clientes, incluyendo facturación y cobranzas.",
      "Administración de redes sociales y campañas de marketing digital.",
      "Diseño gráfico para comunicación y publicidad.",
      "Venta, armado y reparación de PCs y notebooks.",
      "Soporte técnico en sistemas operativos y hardware.",
      "Atención técnica en campo, optimizando tiempos mediante movilidad propia.",
    ],
    technologies: [
      { name: "Adobe Illustrator", icon: "illustrator" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Windows", icon: "windows" },
      { name: "Redes", icon: "internet" },
      { name: "Hardware", icon: "hardware" },
      { name: "Marketing Digital", icon: "marketing" },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Let's Code",
    type: "Jornada completa",
    location: "Río Cuarto, Córdoba, Argentina",
    modality: "Híbrido",
    period: "Ago 2023 – Ene 2026",
    summary:
      "Desarrollador Full Stack en múltiples proyectos web y móviles, con fuerte enfoque en arquitecturas modernas y sistemas escalables.",
    responsibilities: [
      "Desarrollo frontend en Vue 3: editor rich text personalizado, notificaciones en tiempo real, sincronización mediante webhooks, generación de documentos PDF y Word.",
      "Desarrollo backend con Django y DRF: APIs escalables, sistema de notificaciones asincrónicas con Redis y Celery.",
      "Integración con Docker para entornos reproducibles.",
      "Desarrollo de sistema interno: gestión de tareas y seguimiento de trabajadores con arquitectura basada en eventos.",
      "Mantenimiento y evolución del proyecto M3: resolución de tickets y nuevas funcionalidades (Vue/Quasar + Django).",
      "Participación en app móvil Android (Flipi): desarrollo en Kotlin y mejoras en APIs backend.",
      "Diseño 3D de una caja para sistema de ósmosis (modelado + ensamblado).",
    ],
    technologies: [
      { name: "Vue 3", icon: "vue" },
      { name: "Quasar", icon: "quasar" },
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
  {
    role: "Backend Developer",
    company: "Innexus",
    type: "Jornada completa",
    location: "Remoto",
    modality: "Remoto",
    period: "Ene 2026 – Actualidad",
    current: true,
    summary:
      "Desarrollador backend especializado en Django, enfocado en construcción de APIs robustas y mantenimiento de sistemas productivos.",
    responsibilities: [
      "Desarrollo y mantenimiento de APIs con Django y Django REST Framework.",
      "Modelado de datos y optimización de consultas en PostgreSQL.",
      "Implementación de lógica de negocio escalable.",
      "Integración de servicios y mejora continua del sistema backend.",
    ],
    technologies: [
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
];

const en: Job[] = [
  {
    role: "Telecommunications Technician & Customer Service",
    company: "Telectron Ingeniería",
    type: "Full-time",
    location: "Río Cuarto, Córdoba, Argentina",
    modality: "On-site",
    period: "Feb 2022 – Aug 2023",
    summary:
      "Comprehensive technical and operational role combining infrastructure tasks, customer service, and administrative management.",
    responsibilities: [
      "Installation and configuration of Point-to-Point (PtP) links for high-quality connectivity.",
      "Customer database management, including billing and collections.",
      "Social media administration and digital marketing campaigns.",
      "Graphic design for communication and advertising.",
      "Sales, assembly, and repair of PCs and laptops.",
      "Technical support for operating systems and hardware.",
      "Field technical service, optimizing response times with own mobility.",
    ],
    technologies: [
      { name: "Adobe Illustrator", icon: "illustrator" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Windows", icon: "windows" },
      { name: "Networking", icon: "internet" },
      { name: "Hardware", icon: "hardware" },
      { name: "Digital Marketing", icon: "marketing" },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Let's Code",
    type: "Full-time",
    location: "Río Cuarto, Córdoba, Argentina",
    modality: "Hybrid",
    period: "Aug 2023 – Jan 2026",
    summary:
      "Full Stack Developer across multiple web and mobile projects, with a strong focus on modern architectures and scalable systems.",
    responsibilities: [
      "Frontend development in Vue 3: custom rich text editor, real-time notifications, webhook synchronization, PDF and Word document generation.",
      "Backend development with Django and DRF: scalable APIs, asynchronous notification system with Redis and Celery.",
      "Docker integration for reproducible environments.",
      "Internal system development: task management and worker tracking with event-driven architecture.",
      "Maintenance and evolution of the M3 project: ticket resolution and new features (Vue/Quasar + Django).",
      "Contribution to Android mobile app (Flipi): Kotlin development and backend API improvements.",
      "3D design of an enclosure for an osmosis system (modeling + assembly).",
    ],
    technologies: [
      { name: "Vue 3", icon: "vue" },
      { name: "Quasar", icon: "quasar" },
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
  {
    role: "Backend Developer",
    company: "Innexus",
    type: "Full-time",
    location: "Remote",
    modality: "Remote",
    period: "Jan 2026 – Present",
    current: true,
    summary:
      "Backend Developer specialized in Django, focused on building robust APIs and maintaining production systems.",
    responsibilities: [
      "Development and maintenance of APIs with Django and Django REST Framework.",
      "Data modeling and query optimization in PostgreSQL.",
      "Implementation of scalable business logic.",
      "Service integration and continuous improvement of the backend system.",
    ],
    technologies: [
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
];

export const experience: Record<'es' | 'en', Job[]> = { es, en };
