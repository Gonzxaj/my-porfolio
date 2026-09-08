// ─────────────────────────────────────────────────────────────
//  PROYECTOS PERSONALES
//  Proyectos propios (side projects), separados de la experiencia
//  laboral. Cada uno tiene una vista de detalle en /projects/{slug}
//  (o /en/projects/{slug} en inglés).
// ─────────────────────────────────────────────────────────────

import type { Technology } from './projects';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'github' | 'dockerhub' | 'external';
}

export interface PortRow {
  port: string;
  protocol: string;
  purpose: string;
}

export interface VolumeRow {
  path: string;
  purpose: string;
}

export interface EnvVarRow {
  name: string;
  value: string;
  purpose: string;
}

export interface CodeBlock {
  label: string;
  lang: string;
  code: string;
}

export interface PersonalProject {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  logo?: string;
  description: string[];
  highlights: string[];
  architecture?: string[];
  quickStart?: CodeBlock[];
  ports?: PortRow[];
  volumes?: VolumeRow[];
  envVars?: EnvVarRow[];
  technologies: Technology[];
  links: ProjectLink[];
}

const es: PersonalProject[] = [
  {
    slug: 'go-container',
    logo: '/icons/projects/go-container.webp',
    title: 'go-container',
    tagline: 'Panel de administración de Docker self-hosted, tipo Portainer simplificado',
    status: 'En desarrollo activo',
    description: [
      'Panel web para gestionar containers, imágenes, redes, volúmenes, "stacks" (proyectos docker-compose) y usuarios con roles, todo desde el navegador. El backend actúa como proxy autenticado sobre el Docker Engine API del host, no como una reimplementación de Docker.',
      'Se distribuye como un solo binario Go que embebe el build de producción del frontend, así que en producción es un único contenedor sirviendo tanto la API como la SPA.',
    ],
    highlights: [
      'Gestión completa de containers, imágenes, redes, volúmenes y stacks (docker-compose) desde una SPA en Vue 3.',
      'Shell interactiva por WebSocket dentro de cada container (xterm.js) y streaming de logs en vivo.',
      'Sistema de roles (viewer / editor / administrator) con revalidación de la sesión contra la base en cada request, así desactivar un usuario invalida su acceso al instante.',
      'Los "stacks" no son solo un pass-through de Docker: se persisten en Postgres y cada operación (deploy, stop, pull, force-deploy) invoca el CLI real de docker compose, con reintento si un paso falla sin perder el registro.',
      'Watcher que escucha eventos de muerte de containers y persiste sus últimos logs, para poder ver por qué murió uno aunque después se borre.',
      'Recuperación de crash: si el proceso muere sin un shutdown limpio (panic, OOM-kill), el contenido del log se recupera y se guarda en el próximo arranque.',
    ],
    architecture: [
      'Backend en Go con Gin como router y GORM + PostgreSQL para persistencia.',
      'Cliente propio contra el socket de Docker (sin el SDK oficial), hablando directo la Engine API por HTTP.',
      'Frontend en Vue 3 (Composition API) + Vite + Pinia, sin frameworks de CSS.',
      'Autenticación con JWT; los WebSockets (shell, logs) aceptan el token también como query param porque el navegador no permite mandar el header Authorization en un WS nativo.',
      'Build de producción: un Dockerfile multi-stage compila el frontend, lo embebe en el binario Go (go:embed) y arma una imagen final que solo necesita el binario + el CLI de docker compose.',
    ],
    quickStart: [
      {
        label: 'docker-compose.yml (desarrollo)',
        lang: 'yaml',
        code: `services:
  app:
    build:
      context: ./app
      target: dev
    ports:
      - "9000:9000"
    volumes:
      - ./app:/app
      - /app/tmp
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DB_HOST=db
      - DB_PORT=5432
      - DB_USER=postgres
      - DB_PASSWORD=postgres
      - DB_NAME=go_container
      - DOCKER_SOCKET_PATH=/var/run/docker.sock
      - CORS_ALLOWED_ORIGIN=http://localhost:5173
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=go_container
    ports:
      - "5433:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  front:
    build:
      context: ./front
      target: dev
    ports:
      - "5173:5173"
    volumes:
      - ./front:/app
      - /app/node_modules

volumes:
  pgdata:`,
      },
      { label: 'Levantar el entorno', lang: 'bash', code: 'docker compose up -d' },
    ],
    envVars: [
      { name: 'SECRET_KEY', value: 'default_secret_key', purpose: 'Firma de JWT — cambiar en producción.' },
      { name: 'DB_HOST', value: 'localhost', purpose: 'Host de PostgreSQL.' },
      { name: 'DB_PORT', value: '5432', purpose: 'Puerto de PostgreSQL.' },
      { name: 'DB_USER', value: 'postgres', purpose: 'Usuario de PostgreSQL.' },
      { name: 'DB_PASSWORD', value: 'postgres', purpose: 'Contraseña de PostgreSQL.' },
      { name: 'DB_NAME', value: 'go_container', purpose: 'Nombre de la base de datos.' },
      { name: 'DOCKER_SOCKET_PATH', value: '/var/run/docker.sock', purpose: 'Socket del Docker Engine a proxear.' },
      { name: 'CORS_ALLOWED_ORIGIN', value: 'http://localhost:5173', purpose: 'Único origen permitido por el middleware CORS.' },
      { name: 'STACKS_DIR', value: 'stacks', purpose: 'Directorio donde se materializan los docker-compose.yml de cada stack.' },
    ],
    technologies: [
      { name: 'Go', icon: 'go' },
      { name: 'Vue 3', icon: 'vue' },
      { name: 'Vite', icon: 'vite' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'JWT', icon: 'jwt' },
      { name: 'WebSockets', icon: 'websocket' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Docker', icon: 'docker' },
    ],
    links: [
      { label: 'Ver en GitHub', url: 'https://github.com/Gonzxaj/go-container', kind: 'github' },
    ],
  },
  {
    slug: 'go-data',
    logo: '/icons/projects/go-data.webp',
    title: 'go-data',
    tagline: 'Dashboard de monitoreo de servidores tipo Netdata, minimalista, en un solo binario Go',
    status: 'Imagen publicada en Docker Hub',
    description: [
      'Un solo binario en Go que expone una API JSON y sirve un dashboard web estático, sin dependencias obligatorias: sin base de datos, sin agentes externos, sin build de JS. Pensado para levantar en un VPS o homelab con un simple docker compose up -d y tener visibilidad inmediata del servidor.',
      'Todo es opt-in: si no se monta el socket de Docker, /var/log o /proc del host, esas features simplemente no muestran datos en vez de romper la aplicación.',
    ],
    highlights: [
      'Métricas de CPU, RAM, disco, red, temperatura, contenedores Docker, intentos de login SSH y conexiones entrantes.',
      'Frontend estático (HTML/CSS/JS) servido directo por el binario, sin framework ni paso de build.',
      'Persistencia de métricas en memoria por defecto (ventana corta), con InfluxDB opcional para historial más largo.',
      'Basic Auth opcional para proteger el dashboard y la API.',
      'Configuración 100% por variables de entorno — nada que editar en archivos para prender o apagar features.',
    ],
    architecture: [
      'Collectors propios (sin dependencias externas) que leen /proc, /sys, logs de auth y el socket de Docker.',
      'Módulo de seguridad que parsea el auth log para detectar intentos de SSH y nuevas conexiones entrantes por puerto.',
      'Umbrales de alerta configurables para CPU, RAM, disco, iowait/steal y temperatura.',
      'Capa de storage intercambiable: memoria, InfluxDB, o ambas combinadas.',
      'Empaquetado como imagen Docker multi-stage con binario estático, más un docker-compose.yml con InfluxDB como servicio opcional.',
    ],
    quickStart: [
      {
        label: 'docker-compose.yml (con InfluxDB)',
        lang: 'yaml',
        code: `services:
  app:
    image: gonzxa/go-data:latest
    ports:
      - "19245:9000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /var/log:/var/log:ro
      - /proc:/hostproc:ro
      - app-data:/app/data
    environment:
      - USE_INFLUX=true
      - INFLUX_URL=http://influx:8086
      - INFLUX_TOKEN=\${INFLUXDB_ADMIN_TOKEN}
      - INFLUX_ORG=\${INFLUXDB_ORG}
      - INFLUX_BUCKET=\${INFLUXDB_BUCKET}
      - DOCKER_ENABLED=true
      - SSH_WATCH_ENABLED=true
      - CONN_WATCH_ENABLED=true
      - AUTH_ENABLED=true
      - AUTH_USER=\${AUTH_USER}
      - AUTH_PASSWORD=\${AUTH_PASSWORD}
    depends_on:
      - influx

  influx:
    image: influxdb:2.7
    volumes:
      - influx-data:/var/lib/influxdb2
      - influx-config:/etc/influxdb2
    environment:
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_USERNAME=\${INFLUXDB_USERNAME}
      - DOCKER_INFLUXDB_INIT_PASSWORD=\${INFLUXDB_PASSWORD}
      - DOCKER_INFLUXDB_INIT_ORG=\${INFLUXDB_ORG}
      - DOCKER_INFLUXDB_INIT_BUCKET=\${INFLUXDB_BUCKET}
      - DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=\${INFLUXDB_ADMIN_TOKEN}

volumes:
  app-data:
  influx-data:
  influx-config:`,
      },
      { label: 'Levantar el stack', lang: 'bash', code: 'docker compose up -d' },
    ],
    envVars: [
      { name: 'USE_INFLUX', value: 'false', purpose: 'Habilita persistencia de métricas en InfluxDB en vez de solo memoria.' },
      { name: 'DOCKER_ENABLED', value: 'false', purpose: 'Habilita el collector de containers Docker (requiere montar el socket).' },
      { name: 'SSH_WATCH_ENABLED', value: 'false', purpose: 'Habilita el parseo del auth log para intentos de login SSH.' },
      { name: 'CONN_WATCH_ENABLED', value: 'false', purpose: 'Habilita la detección de conexiones entrantes nuevas por puerto.' },
      { name: 'AUTH_ENABLED', value: 'false', purpose: 'Protege el dashboard y la API con Basic Auth.' },
    ],
    technologies: [
      { name: 'Go', icon: 'go' },
      { name: 'Docker', icon: 'docker' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
    links: [
      { label: 'Ver en GitHub', url: 'https://github.com/Gonzxaj/go-data', kind: 'github' },
      { label: 'Ver en Docker Hub', url: 'https://hub.docker.com/repository/docker/gonzxa/go-data/general', kind: 'dockerhub' },
    ],
  },
  {
    slug: 'assetto-server-manager',
    title: 'Assetto Corsa Server Manager',
    tagline: 'Imagen Docker self-contained para correr Server Manager de Assetto Corsa',
    status: 'Imagen publicada en Docker Hub',
    description: [
      'Imagen Docker que empaqueta Server Manager, el panel web para administrar servidores dedicados de Assetto Corsa, junto con steamcmd y el binario del server. La imagen puede descargar y correr el servidor de Assetto Corsa por sí sola, sin instalación manual.',
      'Pensada para levantar un servidor de carreras completo (panel + game server) con un solo docker run o docker compose, aportando solo un config.yml propio.',
    ],
    highlights: [
      'Bundlea steamcmd + el binario oficial de Server Manager en una sola imagen.',
      'Corre como usuario no privilegiado (uid 1000) dentro del container.',
      'Basada en debian:bullseye-slim con las librerías de 32 bits que steamcmd/acServer necesitan.',
      'El config.yml con credenciales queda fuera de la imagen — se monta como volumen, nunca se hornea en el build.',
    ],
    quickStart: [
      {
        label: 'docker run',
        lang: 'bash',
        code: `docker run -d \\
  --name assetto-server-manager \\
  -p 8772:8772 \\
  -p 9600:9600/tcp -p 9600:9600/udp \\
  -p 8082:8082/tcp -p 8082:8082/udp \\
  -v server-install:/home/assetto/server-manager/assetto \\
  -v /path/to/your/config.yml:/home/assetto/server-manager/config.yml \\
  gonzxa/assetto-server-manager:1`,
      },
      {
        label: 'docker-compose.yml',
        lang: 'yaml',
        code: `services:
  server-manager:
    image: gonzxa/assetto-server-manager:1
    container_name: assetto-server-manager
    restart: unless-stopped
    ports:
      # web panel
      - "8772:8772"
      # Assetto Corsa game server: TCP and UDP, same port in and out
      - "9600:9600/tcp"
      - "9600:9600/udp"
      # server's HTTP/lobby port: must match
      # Server Options -> HTTP Port in the panel
      - "8082:8082/tcp"
      - "8082:8082/udp"
    volumes:
      - server-install:/home/assetto/server-manager/assetto
      - /path/to/your/config.yml:/home/assetto/server-manager/config.yml

volumes:
  server-install:`,
      },
    ],
    ports: [
      { port: '8772', protocol: 'TCP', purpose: 'Panel web de Server Manager' },
      { port: '9600', protocol: 'TCP/UDP', purpose: 'Servidor de juego de Assetto Corsa' },
      { port: '8082', protocol: 'TCP/UDP', purpose: 'Puerto HTTP/lobby del server (debe coincidir con Server Options → HTTP Port en el panel)' },
    ],
    volumes: [
      { path: '/home/assetto/server-manager/assetto', purpose: 'Donde steamcmd instala el servidor de Assetto Corsa (binario, pistas, autos). Persistir para no re-descargar en cada reinicio.' },
      { path: '/home/assetto/server-manager/config.yml', purpose: 'Configuración propia de Server Manager (no incluida en la imagen).' },
    ],
    technologies: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
    ],
    links: [
      { label: 'Ver en Docker Hub', url: 'https://hub.docker.com/repository/docker/gonzxa/assetto-server-manager/general', kind: 'dockerhub' },
      { label: 'Server Manager (upstream)', url: 'https://github.com/JustaPenguin/assetto-server-manager', kind: 'external' },
    ],
  },
];

const en: PersonalProject[] = [
  {
    slug: 'go-container',
    logo: '/icons/projects/go-container.webp',
    title: 'go-container',
    tagline: 'Self-hosted Docker admin panel, a simplified Portainer',
    status: 'Actively developed',
    description: [
      'A web panel for managing containers, images, networks, volumes, "stacks" (docker-compose projects) and role-based users, all from the browser. The backend acts as an authenticated proxy over the host\'s Docker Engine API, not a reimplementation of Docker.',
      'It ships as a single Go binary that embeds the production frontend build, so in production it\'s one container serving both the API and the SPA.',
    ],
    highlights: [
      'Full management of containers, images, networks, volumes and stacks (docker-compose) from a Vue 3 SPA.',
      'Interactive shell over WebSocket inside each container (xterm.js) plus live log streaming.',
      'Role system (viewer / editor / administrator) that revalidates the session against the database on every request, so deactivating a user cuts off access instantly.',
      'Stacks aren\'t a plain Docker pass-through: they\'re persisted in Postgres and every operation (deploy, stop, pull, force-deploy) invokes the real docker compose CLI, retaining the record even if a step fails.',
      'A watcher listens for container death events and persists their last logs, so you can see why a container died even after it\'s removed.',
      'Crash recovery: if the process dies without a clean shutdown (panic, OOM-kill), the leftover log is recovered and stored on the next boot.',
    ],
    architecture: [
      'Go backend with Gin as the router and GORM + PostgreSQL for persistence.',
      'A hand-rolled client talks directly to the Docker socket over the Engine API, without the official SDK.',
      'Vue 3 (Composition API) + Vite + Pinia frontend, no CSS framework.',
      'JWT authentication; WebSockets (shell, logs) also accept the token as a query param since a native browser WebSocket can\'t send an Authorization header.',
      'Production build: a multi-stage Dockerfile compiles the frontend, embeds it into the Go binary (go:embed), and produces a final image that only needs the binary plus the docker compose CLI.',
    ],
    quickStart: [
      {
        label: 'docker-compose.yml (development)',
        lang: 'yaml',
        code: `services:
  app:
    build:
      context: ./app
      target: dev
    ports:
      - "9000:9000"
    volumes:
      - ./app:/app
      - /app/tmp
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DB_HOST=db
      - DB_PORT=5432
      - DB_USER=postgres
      - DB_PASSWORD=postgres
      - DB_NAME=go_container
      - DOCKER_SOCKET_PATH=/var/run/docker.sock
      - CORS_ALLOWED_ORIGIN=http://localhost:5173
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=go_container
    ports:
      - "5433:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  front:
    build:
      context: ./front
      target: dev
    ports:
      - "5173:5173"
    volumes:
      - ./front:/app
      - /app/node_modules

volumes:
  pgdata:`,
      },
      { label: 'Start the environment', lang: 'bash', code: 'docker compose up -d' },
    ],
    envVars: [
      { name: 'SECRET_KEY', value: 'default_secret_key', purpose: 'JWT signing secret — change it in production.' },
      { name: 'DB_HOST', value: 'localhost', purpose: 'PostgreSQL host.' },
      { name: 'DB_PORT', value: '5432', purpose: 'PostgreSQL port.' },
      { name: 'DB_USER', value: 'postgres', purpose: 'PostgreSQL user.' },
      { name: 'DB_PASSWORD', value: 'postgres', purpose: 'PostgreSQL password.' },
      { name: 'DB_NAME', value: 'go_container', purpose: 'Database name.' },
      { name: 'DOCKER_SOCKET_PATH', value: '/var/run/docker.sock', purpose: 'Docker Engine socket to proxy.' },
      { name: 'CORS_ALLOWED_ORIGIN', value: 'http://localhost:5173', purpose: 'Single origin allowed by the CORS middleware.' },
      { name: 'STACKS_DIR', value: 'stacks', purpose: 'Directory where each stack\'s docker-compose.yml is materialized.' },
    ],
    technologies: [
      { name: 'Go', icon: 'go' },
      { name: 'Vue 3', icon: 'vue' },
      { name: 'Vite', icon: 'vite' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'JWT', icon: 'jwt' },
      { name: 'WebSockets', icon: 'websocket' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Docker', icon: 'docker' },
    ],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/Gonzxaj/go-container', kind: 'github' },
    ],
  },
  {
    slug: 'go-data',
    logo: '/icons/projects/go-data.webp',
    title: 'go-data',
    tagline: 'A minimalist, Netdata-like server monitoring dashboard in a single Go binary',
    status: 'Published on Docker Hub',
    description: [
      'A single Go binary that exposes a JSON API and serves a static web dashboard, with no required dependencies: no database, no external agents, no JS build step. Meant to be spun up on a VPS or homelab with a simple docker compose up -d for instant server visibility.',
      'Everything is opt-in: if you don\'t mount the Docker socket, /var/log or the host\'s /proc, those features simply show no data instead of breaking the app.',
    ],
    highlights: [
      'CPU, RAM, disk, network, temperature, Docker container, SSH login attempt and incoming connection metrics.',
      'Static frontend (HTML/CSS/JS) served directly by the binary, no framework or build step.',
      'In-memory metrics persistence by default (short window), with optional InfluxDB for longer history.',
      'Optional Basic Auth to protect the dashboard and API.',
      '100% environment-variable configuration — nothing to edit in files to turn features on or off.',
    ],
    architecture: [
      'Dependency-free collectors that read /proc, /sys, auth logs and the Docker socket.',
      'A security module that parses the auth log to detect SSH login attempts and new incoming connections per port.',
      'Configurable alert thresholds for CPU, RAM, disk, iowait/steal and temperature.',
      'Swappable storage layer: memory, InfluxDB, or both combined.',
      'Packaged as a multi-stage Docker image with a static binary, plus a docker-compose.yml with InfluxDB as an optional service.',
    ],
    quickStart: [
      {
        label: 'docker-compose.yml (with InfluxDB)',
        lang: 'yaml',
        code: `services:
  app:
    image: gonzxa/go-data:latest
    ports:
      - "19245:9000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /var/log:/var/log:ro
      - /proc:/hostproc:ro
      - app-data:/app/data
    environment:
      - USE_INFLUX=true
      - INFLUX_URL=http://influx:8086
      - INFLUX_TOKEN=\${INFLUXDB_ADMIN_TOKEN}
      - INFLUX_ORG=\${INFLUXDB_ORG}
      - INFLUX_BUCKET=\${INFLUXDB_BUCKET}
      - DOCKER_ENABLED=true
      - SSH_WATCH_ENABLED=true
      - CONN_WATCH_ENABLED=true
      - AUTH_ENABLED=true
      - AUTH_USER=\${AUTH_USER}
      - AUTH_PASSWORD=\${AUTH_PASSWORD}
    depends_on:
      - influx

  influx:
    image: influxdb:2.7
    volumes:
      - influx-data:/var/lib/influxdb2
      - influx-config:/etc/influxdb2
    environment:
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_USERNAME=\${INFLUXDB_USERNAME}
      - DOCKER_INFLUXDB_INIT_PASSWORD=\${INFLUXDB_PASSWORD}
      - DOCKER_INFLUXDB_INIT_ORG=\${INFLUXDB_ORG}
      - DOCKER_INFLUXDB_INIT_BUCKET=\${INFLUXDB_BUCKET}
      - DOCKER_INFLUXDB_INIT_ADMIN_TOKEN=\${INFLUXDB_ADMIN_TOKEN}

volumes:
  app-data:
  influx-data:
  influx-config:`,
      },
      { label: 'Start the stack', lang: 'bash', code: 'docker compose up -d' },
    ],
    envVars: [
      { name: 'USE_INFLUX', value: 'false', purpose: 'Enables metrics persistence in InfluxDB instead of memory only.' },
      { name: 'DOCKER_ENABLED', value: 'false', purpose: 'Enables the Docker container collector (requires mounting the socket).' },
      { name: 'SSH_WATCH_ENABLED', value: 'false', purpose: 'Enables auth log parsing for SSH login attempts.' },
      { name: 'CONN_WATCH_ENABLED', value: 'false', purpose: 'Enables detection of new incoming connections per port.' },
      { name: 'AUTH_ENABLED', value: 'false', purpose: 'Protects the dashboard and API with Basic Auth.' },
    ],
    technologies: [
      { name: 'Go', icon: 'go' },
      { name: 'Docker', icon: 'docker' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/Gonzxaj/go-data', kind: 'github' },
      { label: 'View on Docker Hub', url: 'https://hub.docker.com/repository/docker/gonzxa/go-data/general', kind: 'dockerhub' },
    ],
  },
  {
    slug: 'assetto-server-manager',
    title: 'Assetto Corsa Server Manager',
    tagline: 'Self-contained Docker image to run Assetto Corsa\'s Server Manager',
    status: 'Published on Docker Hub',
    description: [
      'A Docker image that packages Server Manager, the web panel for managing dedicated Assetto Corsa servers, together with steamcmd and the server binary. The image can download and run the Assetto Corsa server entirely on its own, with no manual install.',
      'Meant to bring up a full racing server (panel + game server) with a single docker run or docker compose, given only your own config.yml.',
    ],
    highlights: [
      'Bundles steamcmd and the official Server Manager binary into a single image.',
      'Runs as an unprivileged user (uid 1000) inside the container.',
      'Built on debian:bullseye-slim with the 32-bit libs steamcmd/acServer require.',
      'The config.yml with credentials stays out of the image — mounted as a volume, never baked into the build.',
    ],
    quickStart: [
      {
        label: 'docker run',
        lang: 'bash',
        code: `docker run -d \\
  --name assetto-server-manager \\
  -p 8772:8772 \\
  -p 9600:9600/tcp -p 9600:9600/udp \\
  -p 8082:8082/tcp -p 8082:8082/udp \\
  -v server-install:/home/assetto/server-manager/assetto \\
  -v /path/to/your/config.yml:/home/assetto/server-manager/config.yml \\
  gonzxa/assetto-server-manager:1`,
      },
      {
        label: 'docker-compose.yml',
        lang: 'yaml',
        code: `services:
  server-manager:
    image: gonzxa/assetto-server-manager:1
    container_name: assetto-server-manager
    restart: unless-stopped
    ports:
      # web panel
      - "8772:8772"
      # Assetto Corsa game server: TCP and UDP, same port in and out
      - "9600:9600/tcp"
      - "9600:9600/udp"
      # server's HTTP/lobby port: must match
      # Server Options -> HTTP Port in the panel
      - "8082:8082/tcp"
      - "8082:8082/udp"
    volumes:
      - server-install:/home/assetto/server-manager/assetto
      - /path/to/your/config.yml:/home/assetto/server-manager/config.yml

volumes:
  server-install:`,
      },
    ],
    ports: [
      { port: '8772', protocol: 'TCP', purpose: 'Server Manager web panel' },
      { port: '9600', protocol: 'TCP/UDP', purpose: 'Assetto Corsa game server' },
      { port: '8082', protocol: 'TCP/UDP', purpose: 'Server HTTP/lobby port (must match Server Options → HTTP Port in the panel)' },
    ],
    volumes: [
      { path: '/home/assetto/server-manager/assetto', purpose: 'Where steamcmd installs the Assetto Corsa server (binary, tracks, cars). Persist it to avoid re-downloading on every restart.' },
      { path: '/home/assetto/server-manager/config.yml', purpose: 'Your own Server Manager configuration (not included in the image).' },
    ],
    technologies: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
    ],
    links: [
      { label: 'View on Docker Hub', url: 'https://hub.docker.com/repository/docker/gonzxa/assetto-server-manager/general', kind: 'dockerhub' },
      { label: 'Server Manager (upstream)', url: 'https://github.com/JustaPenguin/assetto-server-manager', kind: 'external' },
    ],
  },
];

export const personalProjects: Record<'es' | 'en', PersonalProject[]> = { es, en };
