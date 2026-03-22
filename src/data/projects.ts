// ─────────────────────────────────────────────────────────────
//  PROYECTOS
//  Editá este archivo para agregar o modificar tus proyectos.
//  icon: nombre del archivo en /public/icons/tech/{icon}.svg
// ─────────────────────────────────────────────────────────────

export interface Technology {
  name: string;
  icon?: string;
}

export interface Project {
  title: string;
  role: string;
  summary: string;
  responsibilities: string[];
  technologies: Technology[];
  url?: string;
  repo?: string;
}

const es: Project[] = [
  {
    title: "Arbitt",
    role: "Frontend Developer (principal) + colaboración en backend",
    summary:
      "Plataforma web orientada al área legal corporativa para la gestión integral de solicitudes, contratos y flujos de trabajo. Permite colaboración en tiempo real y trazabilidad completa del ciclo de vida de documentos.",
    responsibilities: [
      "Desarrollo completo del frontend con Vue 3 y Vite.",
      "Implementación de editor WYSIWYG personalizado.",
      "Desarrollo de sistema de edición colaborativa en tiempo real.",
      "Integración con backend mediante Axios y webhooks.",
      "Implementación de notificaciones en vivo y visualización de usuarios activos por documento.",
      "Manejo de estados y flujos de trabajo dinámicos.",
      "Generación de documentos PDF y Word.",
      "Colaboración en funcionalidades backend con Django.",
    ],
    technologies: [
      { name: "Vue 3", icon: "vue" },
      { name: "Vite", icon: "vite" },
      { name: "Axios", icon: "axios" },
      { name: "Webhooks", icon: "internet" },
      { name: "Django", icon: "django" },
    ],
  },
  {
    title: "Transporte Boarini",
    role: "Full Stack Developer",
    summary:
      "Sistema integral para la gestión operativa y financiera de transporte, con automatización de procesos, trazabilidad de viajes y control de cuentas corrientes.",
    responsibilities: [
      "Desarrollo backend con Django y Django REST Framework.",
      "Modelado de datos y lógica de negocio compleja.",
      "Implementación de cuentas corrientes y liquidaciones.",
      "Generación de reportes y PDFs financieros.",
      "Desarrollo de scraping de facturas AFIP.",
      "Integración con API de rastreo vehicular (EasyTrack).",
      "Cálculo automático de kilómetros y tiempos de uso.",
      "Implementación de tareas asincrónicas con Celery + Redis.",
      "Deploy completo en producción (Docker, Nginx, Cloudflare, HTTPS).",
      "Administración de servidor Linux.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    title: "Tourviso",
    role: "Backend Developer",
    summary:
      "Plataforma backend orientada a la integración y sincronización automatizada de productos turísticos mediante feeds y APIs externas, con procesamiento de datos y automatización de flujos.",
    responsibilities: [
      "Desarrollo backend con Django y DRF.",
      "Procesamiento y normalización de feeds (URL, CSV, manual).",
      "Integración con APIs externas y exposición de API para terceros.",
      "Procesamiento automatizado de archivos CSV y XLS.",
      "Generación de JSON para integraciones externas.",
      "Implementación de tareas asincrónicas con Celery + Redis y Celery Beat.",
      "Personalización del Django Admin.",
      "Optimización y mantenimiento evolutivo del sistema.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    title: "Sistema Interno",
    role: "Backend Developer",
    summary:
      "Sistema interno para gestión de tareas, seguimiento de empleados y notificaciones en tiempo real, con arquitectura orientada a eventos y procesamiento asincrónico.",
    responsibilities: [
      "Desarrollo backend con Django y DRF.",
      "Desarrollo de lógica de seguimiento de tareas y usuarios.",
      "Integración de procesos asincrónicos con Redis y Celery.",
      "Mantenimiento y evolución del sistema.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
    ],
  },
  {
    title: "Flipi",
    role: "Mobile + Backend Developer",
    summary:
      "Aplicación móvil Android con integración backend, orientada a la incorporación de nuevas funcionalidades y mejora de APIs existentes.",
    responsibilities: [
      "Desarrollo de funcionalidades en Kotlin.",
      "Mejora y mantenimiento de APIs en Django.",
      "Integración entre app mobile y backend.",
    ],
    technologies: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Django", icon: "django" },
    ],
  },
];

const en: Project[] = [
  {
    title: "Arbitt",
    role: "Frontend Developer (lead) + backend collaboration",
    summary:
      "Web platform for corporate legal teams to manage requests, contracts, and workflows. Supports real-time collaboration and full document lifecycle traceability.",
    responsibilities: [
      "Full frontend development with Vue 3 and Vite.",
      "Implementation of a custom WYSIWYG editor.",
      "Real-time collaborative editing system.",
      "Backend integration via Axios and webhooks.",
      "Live notifications and active user presence per document.",
      "Dynamic state and workflow management.",
      "PDF and Word document generation.",
      "Backend feature collaboration with Django.",
    ],
    technologies: [
      { name: "Vue 3", icon: "vue" },
      { name: "Vite", icon: "vite" },
      { name: "Axios", icon: "axios" },
      { name: "Webhooks", icon: "internet" },
      { name: "Django", icon: "django" },
    ],
  },
  {
    title: "Transporte Boarini",
    role: "Full Stack Developer",
    summary:
      "Comprehensive system for operational and financial transport management, featuring process automation, trip traceability, and current account control.",
    responsibilities: [
      "Backend development with Django and Django REST Framework.",
      "Data modeling and complex business logic.",
      "Current accounts and settlement implementation.",
      "Financial report and PDF generation.",
      "AFIP invoice scraping development.",
      "Integration with vehicle tracking API (EasyTrack).",
      "Automatic kilometer and usage time calculation.",
      "Asynchronous task processing with Celery + Redis.",
      "Full production deployment (Docker, Nginx, Cloudflare, HTTPS).",
      "Linux server administration.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    title: "Tourviso",
    role: "Backend Developer",
    summary:
      "Backend platform for automated integration and synchronization of tourism products via feeds and external APIs, with data processing and workflow automation.",
    responsibilities: [
      "Backend development with Django and DRF.",
      "Feed processing and normalization (URL, CSV, manual).",
      "External API integration and third-party API exposure.",
      "Automated CSV and XLS file processing.",
      "JSON generation for external integrations.",
      "Asynchronous task processing with Celery + Redis and Celery Beat.",
      "Django Admin customization.",
      "System optimization and evolutionary maintenance.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    title: "Internal System",
    role: "Backend Developer",
    summary:
      "Internal system for task management, employee tracking, and real-time notifications, built on an event-driven architecture with asynchronous processing.",
    responsibilities: [
      "Backend development with Django and DRF.",
      "Task and user tracking logic development.",
      "Asynchronous processing integration with Redis and Celery.",
      "System maintenance and evolution.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
    ],
  },
  {
    title: "Flipi",
    role: "Mobile + Backend Developer",
    summary:
      "Android mobile application with backend integration, focused on adding new features and improving existing APIs.",
    responsibilities: [
      "Feature development in Kotlin.",
      "Django API improvement and maintenance.",
      "Mobile app and backend integration.",
    ],
    technologies: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Django", icon: "django" },
    ],
  },
];

export const projects: Record<'es' | 'en', Project[]> = { es, en };
