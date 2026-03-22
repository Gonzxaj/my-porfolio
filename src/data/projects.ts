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
  current?: boolean;
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
      "Sistema integral para la gestión operativa y financiera de transporte, con automatización de procesos, trazabilidad de viajes y control de cuentas corrientes. Proyecto en producción con mantenimiento activo y soporte continuo.",
    responsibilities: [
      "Desarrollo backend con Django y Django REST Framework.",
      "Modelado de datos y lógica de negocio compleja.",
      "Implementación de cuentas corrientes y liquidaciones.",
      "Generación de reportes y PDFs financieros.",
      "Desarrollo de scraping de facturas AFIP.",
      "Integración con API de rastreo vehicular (EasyTrack).",
      "Cálculo automático de kilómetros y tiempos de uso.",
      "Implementación de tareas asincrónicas con Celery + Redis.",
      "Configuración de dominio, DNS y certificados HTTPS.",
      "Nginx como reverse proxy con hardening contra ataques (rate limiting, headers de seguridad).",
      "Deploy completo en servidor Debian con todos los servicios dockerizados.",
      "Administración del servidor Linux (Debian).",
      "Mantenimiento activo, nuevas funcionalidades y soporte continuo.",
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
    current: true,
  },
  {
    title: "Tourviso",
    role: "Backend Developer",
    summary:
      "Plataforma backend orientada a la integración y sincronización automatizada de productos turísticos mediante feeds y APIs externas, con procesamiento de datos, automatización de flujos e integración de IA para traducción multilingüe. En producción con mantenimiento activo y nuevas implementaciones.",
    responsibilities: [
      "Desarrollo backend con Django y DRF.",
      "Procesamiento y normalización de feeds (URL, CSV, manual).",
      "Integración con APIs externas y exposición de API para terceros.",
      "Procesamiento automatizado de archivos CSV y XLS.",
      "Generación de JSON para integraciones externas.",
      "Integración de IA para traducción automática de elementos en más de 20 idiomas.",
      "Implementación de tareas asincrónicas con Celery + Redis y Celery Beat.",
      "Personalización del Django Admin.",
      "Mantenimiento activo, nuevas implementaciones y soporte continuo.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
      { name: "IA", icon: "ai" },
    ],
    current: true,
  },
  {
    title: "Sistema Interno de Gestión",
    role: "Full Stack Developer",
    summary:
      "Sistema interno para gestión de tareas, seguimiento de empleados y control de tiempo, con notificaciones en tiempo real y arquitectura orientada a eventos. La plataforma permite visualizar y optimizar el trabajo del equipo mediante herramientas de tracking y planificación.",
    responsibilities: [
      "Desarrollo backend con Django y Django REST Framework.",
      "Desarrollo frontend utilizando Django Templates.",
      "Implementación de sistema de gestión de tareas y seguimiento de usuarios.",
      "Desarrollo de módulo de tracking de tiempo (time tracking) por usuario.",
      "Implementación de calendario para planificación y visualización de tareas.",
      "Integración de sistema de notificaciones en tiempo real.",
      "Implementación de procesos asincrónicos con Redis y Celery.",
      "Diseño de lógica de negocio para control de actividad y productividad.",
      "Mantenimiento y evolución del sistema.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "Django Templates", icon: "django" },
      { name: "Django REST Framework", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Docker", icon: "docker" }
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
  {
    title: "Vulcan (Bushfire Management Platform)",
    role: "Backend Developer (principal) + arquitectura de sistema",
    summary:
      "Plataforma orientada a la gestión de incidentes de incendios forestales, integrando información geoespacial, notificaciones en tiempo real y herramientas operativas para la toma de decisiones. Permite centralizar datos de múltiples fuentes, optimizar flujos de trabajo y mejorar la coordinación entre equipos.",
    responsibilities: [
      "Diseño y desarrollo del backend con Django y Django REST Framework.",
      "Implementación de arquitectura basada en eventos (Event Bus + Handlers).",
      "Desarrollo de sistema de notificaciones en tiempo real utilizando WebSockets.",
      "Integración con Redis para manejo de eventos y mensajería asincrónica.",
      "Diseño de modelos y estructura modular para múltiples roles (admin, cliente, transportista, etc.).",
      "Gestión de autenticación y autorización mediante JWT.",
      "Optimización de flujos de datos geoespaciales provenientes de servicios externos (WMS/FeatureServer).",
      "Diseño de endpoints para compartir recursos mediante tokens seguros.",
      "Resolución de conflictos de concurrencia y manejo de eventos distribuidos.",
      "Integración con frontend para consumo eficiente de APIs y eventos en tiempo real.",
      "Configuración de entorno con Docker y servicios desacoplados.",
      "Colaboración en decisiones de arquitectura y escalabilidad del sistema."
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "Django REST Framework", icon: "django" },
      { name: "Redis", icon: "redis" },
      { name: "WebSockets", icon: "websocket" },
      { name: "JWT", icon: "jwt" },
      { name: "Docker", icon: "docker" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "GeoSpatial APIs", icon: "googleMaps" },
    ],
  }
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
      "Comprehensive system for operational and financial transport management, featuring process automation, trip traceability, and current account control. Live in production with active maintenance and ongoing support.",
    responsibilities: [
      "Backend development with Django and Django REST Framework.",
      "Data modeling and complex business logic.",
      "Current accounts and settlement implementation.",
      "Financial report and PDF generation.",
      "AFIP invoice scraping development.",
      "Integration with vehicle tracking API (EasyTrack).",
      "Automatic kilometer and usage time calculation.",
      "Asynchronous task processing with Celery + Redis.",
      "Domain, DNS configuration and HTTPS certificate setup.",
      "Nginx as reverse proxy with security hardening against attacks (rate limiting, security headers).",
      "Full deployment on a Debian server with all services dockerized.",
      "Linux server administration (Debian).",
      "Active maintenance, new features and ongoing support.",
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
    current: true,
  },
  {
    title: "Tourviso",
    role: "Backend Developer",
    summary:
      "Backend platform for automated integration and synchronization of tourism products via feeds and external APIs, with data processing, workflow automation, and AI-powered multilingual translation. Live in production with active maintenance and new implementations.",
    responsibilities: [
      "Backend development with Django and DRF.",
      "Feed processing and normalization (URL, CSV, manual).",
      "External API integration and third-party API exposure.",
      "Automated CSV and XLS file processing.",
      "JSON generation for external integrations.",
      "AI integration for automatic translation of elements into 20+ languages.",
      "Asynchronous task processing with Celery + Redis and Celery Beat.",
      "Django Admin customization.",
      "Active maintenance, new implementations and ongoing support.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "DRF", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "Docker", icon: "docker" },
      { name: "AI", icon: "ai" },
    ],
    current: true,
  },
  {
    title: "Internal Management System",
    role: "Full Stack Developer",
    summary:
      "Internal platform for task management, employee tracking, and time control, featuring real-time notifications and an event-driven architecture. The system enables teams to monitor activity, optimize workflows, and improve productivity through planning and tracking tools.",
    responsibilities: [
      "Developed backend services using Django and Django REST Framework.",
      "Built frontend interfaces using Django Templates.",
      "Implemented task management and user tracking system.",
      "Developed time tracking module for monitoring user activity.",
      "Implemented calendar features for task planning and visualization.",
      "Integrated real-time notification system.",
      "Implemented asynchronous processing with Redis and Celery.",
      "Designed business logic for activity and productivity tracking.",
      "Maintained and evolved the system.",
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "Django Templates", icon: "django" },
      { name: "Django REST Framework", icon: "drf" },
      { name: "Redis", icon: "redis" },
      { name: "Celery", icon: "celery" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Docker", icon: "docker" }
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
  {
    title: "Vulcan (Bushfire Management Platform)",
    role: "Backend Developer (Lead) + System Architecture",
    summary:
      "Platform focused on bushfire incident management, integrating geospatial data, real-time notifications, and operational tools for decision-making. It centralizes information from multiple sources, optimizes workflows, and improves coordination between teams.",
    responsibilities: [
      "Design and development of the backend using Django and Django REST Framework.",
      "Implementation of an event-driven architecture (Event Bus + Handlers).",
      "Development of a real-time notification system using WebSockets.",
      "Integration with Redis for event handling and asynchronous messaging.",
      "Design of modular data models supporting multiple user roles (admin, client, transporter, etc.).",
      "Implementation of authentication and authorization using JWT.",
      "Optimization of geospatial data flows from external services (WMS/FeatureServer).",
      "Design of secure endpoints for resource sharing via token-based access.",
      "Handling concurrency challenges and distributed event processing.",
      "Integration with frontend for efficient API consumption and real-time updates.",
      "Environment setup and orchestration using Docker.",
      "Collaboration on system architecture and scalability decisions."
    ],
    technologies: [
      { name: "Django", icon: "django" },
      { name: "Django REST Framework", icon: "django" },
      { name: "Redis", icon: "redis" },
      { name: "WebSockets", icon: "websocket" },
      { name: "JWT", icon: "jwt" },
      { name: "Docker", icon: "docker" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "GeoSpatial APIs", icon: "googleMaps" },
    ],
  }
];

export const projects: Record<'es' | 'en', Project[]> = { es, en };
