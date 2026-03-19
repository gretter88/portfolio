export type Lang = "es" | "en";
export const LANGS: Lang[] = ["es", "en"];

export const LINKS = {
  github: "https://github.com/gretter88",
  linkedin: "https://www.linkedin.com/in/santiago-gretter",
  email: "mailto:gretter88@gmail.com",
  emailText: "gretter88@gmail.com",
};

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  image?: { src: string; alt: string };
  links?: { demo?: string; repo?: string };
  badge?: string;
  order?: number;

  // ✅ NUEVO (opcional)
  screenshots?: { src: string; alt: string }[];
  features?: string[];
  video?: { provider: "youtube"; id: string; label?: string; duration?: string };
};




export function t(lang: Lang) {
  const isEs = lang === "es";

const projects: Project[] = [
{
  order: 1,
  title: "RadarSocial",
  desc: isEs
    ? "Web en producción + App Android en testing. Plataforma social y de servicios en tiempo real con dos experiencias dentro de la misma app: modo social y modo servicio. Incluye chat, mapas, estado online, proximidad por BLE, stickers, mensajes de voz, llamadas, videollamadas y monetización mobile (AdMob, compras in-app y premium). Backend Node/MongoDB + Socket.IO. Las capturas actuales combinan versión app y web; la app Android está en testing privado (Google Play – acceso por invitación)."
    : "Web live + Android app in testing. Real-time social and services platform with two experiences inside the same app: social mode and service mode. It includes chat, maps, online presence, BLE proximity, stickers, voice messages, calls, video calls, and mobile monetization (AdMob, in-app purchases, and premium). Node/MongoDB + Socket.IO backend. Current screenshots combine app and web views; the Android app is in private testing (Google Play – invite-only).",
  stack: [
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "MongoDB",
    "Socket.IO",
    "Firebase",
    "AdMob",
    "Google Play Billing",
    "WebRTC",
    "BLE",
  ],
  image: {
    src: "/screenshots/radarsocial-app-1.webp",
    alt: isEs
      ? "RadarSocial — App / vista principal"
      : "RadarSocial — App / main view",
  },
  links: { demo: "https://radarsocial.com.uy/", repo: "" },
  badge: isEs
    ? "Web: Live · App Android: Testing privado"
    : "Web: Live · Android App: Private testing",
  screenshots: [
    {
      src: "/screenshots/radarsocial-app-1.webp",
      alt: isEs
        ? "RadarSocial — App / Login o inicio"
        : "RadarSocial — App / Login or home",
    },
    {
      src: "/screenshots/radarsocial-app-2.webp",
      alt: isEs
        ? "RadarSocial — App / Home social o servicio"
        : "RadarSocial — App / Social or service home",
    },
    {
      src: "/screenshots/radarsocial-app-3.webp",
      alt: isEs
        ? "RadarSocial — App / Chat en tiempo real"
        : "RadarSocial — App / Real-time chat",
    },
    {
      src: "/screenshots/radarsocial-app-4.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },
 {
      src: "/screenshots/radarsocial-app-5.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },

 {
      src: "/screenshots/radarsocial-app-6.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },

 {
      src: "/screenshots/radarsocial-app-7.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },


	 {
      src: "/screenshots/radarsocial-app-8.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },
	
	 {
      src: "/screenshots/radarsocial-app-9.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },
	
	 {
      src: "/screenshots/radarsocial-app-10.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },
	
	 {
      src: "/screenshots/radarsocial-app-11.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },
	
	 {
      src: "/screenshots/radarsocial-app-12.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },
	
	 {
      src: "/screenshots/radarsocial-app-13.webp",
      alt: isEs
        ? "RadarSocial — App / Mapa y usuarios o servicios"
        : "RadarSocial — App / Map and users or services",
    },

    {
      src: "/screenshots/radarsocial-1.webp",
      alt: isEs
        ? "RadarSocial — Web / Perfil / UX"
        : "RadarSocial — Web / Profile / UX",
    },
    {
      src: "/screenshots/radarsocial-2.webp",
      alt: isEs
        ? "RadarSocial — Web / Chat en tiempo real"
        : "RadarSocial — Web / Real-time chat",
    },
    {
      src: "/screenshots/radarsocial-3.webp",
      alt: isEs
        ? "RadarSocial — Web / Mapa y usuarios cercanos"
        : "RadarSocial — Web / Map and nearby users",
    },
    {
      src: "/screenshots/radarsocial-4.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
  ],
  features: isEs
    ? [
        "Plataforma con dos experiencias dentro de la misma app: modo social y modo servicio",
        "Registro y login con email/password + acceso con Google",
        "Verificación de cuenta por email en el flujo de registro tradicional",
        "Personalización de perfil con selección de avatar y uso automático de foto de Google en perfil y mapa al iniciar sesión con Google",
        "Chat 1:1 en tiempo real (Socket.IO) con estados: online / escribiendo / no leídos / leídos",
        "Mensajes de voz estilo WhatsApp, stickers y multimedia dentro del chat",
        "Llamadas de audio y videollamadas integradas al flujo del chat",
        "Notificaciones push de mensajes, llamadas y videollamadas, incluso en segundo plano o con la app cerrada",
        "Mapa con geolocalización, usuarios cercanos y servicios publicados en tiempo real",
        "Modo servicio con publicación de servicios, búsqueda en mapa y contacto cliente/proveedor",
        "Detección de proximidad por BLE con configuración de visibilidad y datos compartidos",
        "Conexión entre usuarios cercanos: guardar contacto descubierto por BLE y abrir chat en tiempo real",
        "Monetización mobile con AdMob, compras dentro de la app y plan premium sin publicidad",
        "Economía interna con estrellas, beneficios premium y descuentos en compras",
        "Panel/admin interno para controlar usuarios, accesos, APIs, métricas y operación general",
        "Backend Node/Express + MongoDB con auth JWT, logs y APIs REST",
      ]
    : [
        "Platform with two experiences inside the same app: social mode and service mode",
        "Sign up and login with email/password + Google sign-in",
        "Email account verification in the traditional registration flow",
        "Profile personalization with avatar selection and automatic Google profile photo usage across profile and map when signing in with Google",
        "Real-time 1:1 chat (Socket.IO) with presence: online / typing / unread / read states",
        "WhatsApp-style voice messages, stickers, and rich media inside chat",
        "Audio calls and video calls integrated into the chat flow",
        "Push notifications for messages, calls, and video calls, including background and app-closed scenarios",
        "Map with geolocation, nearby users, and real-time published services",
        "Service mode with service publishing, map-based discovery, and client/provider interaction",
        "BLE proximity discovery with configurable visibility and shared profile data",
        "Nearby user connection flow: save BLE-discovered contacts and open real-time chat",
        "Mobile monetization with AdMob, in-app purchases, and a premium ad-free plan",
        "Internal stars economy, premium benefits, and discounted purchases",
        "Internal admin panel to manage users, access, APIs, metrics, and overall operations",
        "Node/Express + MongoDB backend with JWT auth, logs, and REST APIs",
      ],
},





  
  





 {
  order: 2,
  title: "Museo Canario (Web)",
  desc: isEs
    ? "Sitio oficial bilingüe (ES/EN) en producción, integrado con un panel Admin (compartido con el kiosco) para gestionar contenido, salas y piezas."
    : "Official bilingual (ES/EN) production website, integrated with a shared Admin panel (also used by the kiosk) to manage content, rooms, and items.",
  stack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "Cloudflare"],
  image: { src: "/screenshots/museo2.webp", alt: "Museo Canario website" },
  links: { demo: "https://www.museocanario.com.uy", repo: "" },
  badge: "Web: Live",

  screenshots: [
    { src: "/screenshots/museo-1.webp", alt: "Museo Canario — seccion / Noticias, Libros y Recursos" },
    { src: "/screenshots/museo-2.webp", alt: "Museo Canario — seccion / Museos canarios" },
    { src: "/screenshots/museo-3.webp", alt: "Museo Canario — seccion / Museos canarios" },
	{ src: "/screenshots/museo-4.webp", alt: "Museo Canario — Galeria / Piezas / Salas" },
	{ src: "/screenshots/museo-5.webp", alt: "Museo Canario — Home / secciones" },
  ],

  features: isEs
    ? [
        "Website en producción con i18n ES/EN y estructura editorial (secciones, catálogo, piezas)",
        "Contenido dinámico desde MongoDB: salas, piezas y metadata (títulos/descripciones ES/EN)",
        "Integración con Cloudinary para gestión de imágenes (subir/editar/eliminar) con URLs optimizadas",
        "Panel Admin compartido con el kiosco: mismo flujo y permisos para administrar el contenido",
        "Export/Import JSON: exportar salas/piezas, importar y hacer carga masiva",
        "Infra y despliegue: Vercel + Cloudflare (DNS, cache, SSL) + OpenGraph/SEO",
      ]
    : [
        "Production website with ES/EN i18n and an editorial structure (sections, catalog, items)",
        "Dynamic content from MongoDB: rooms, items, and metadata (ES/EN titles/descriptions)",
        "Cloudinary integration for image management (upload/edit/delete) with optimized delivery",
        "Shared Admin panel with the kiosk: same flow and permissions to manage content",
        "JSON export/import: export rooms/items, import for bulk loading and sync",
        "Infra & deployment: Vercel + Cloudflare (DNS, cache, SSL) + OpenGraph/SEO",
      ],
},

{
  order: 3,
  title: isEs ? "Kiosco Interactivo (Museo)" : "Interactive Kiosk (Museum)",
  desc: isEs
    ? "Experiencia táctil para tablet fija en museo: plano interactivo, tour guiado, piezas 3D (Luma), autoguía con QR por pieza y administración completa vía panel Admin."
    : "Tablet-fixed museum experience: interactive floor map, guided tour, 3D pieces (Luma), QR-based self-guide per item, and full content management via Admin panel.",
  stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "MongoDB", "Cloudinary"],
  image: { src: "/screenshots/kio2.webp", alt: "Kiosco interactivo" },
  links: { demo: "https://kiosco.museocanario.com.uy", repo: "" },
  badge: isEs ? "Tablet: Live · Restricted" : "Tablet: Live · Restricted",

  screenshots: [
    { src: "/screenshots/kiosco-1.webp", alt: "Kiosco — Catalogo" },
    { src: "/screenshots/kiosco-2.webp", alt: "Kiosco — Plano / Pieza" },
    { src: "/screenshots/kiosco-3.webp", alt: "Kiosco — Seccion / Juegos" },
	{ src: "/screenshots/kiosco-4.webp", alt: "Kiosco — Seccion / Piezas 3D" },
  ],

  features: isEs
    ? [
        "Modo tablet fijo (horizontal): UI táctil grande, navegación simple y resistente a uso público",
        "Plano interactivo del museo: salas + piezas, navegación por ubicación y contexto",
        "Tour guiado: recorrido sugerido y módulos temáticos dentro del kiosco",
        "Piezas en 3D (Luma 3D) integradas para visualización inmersiva",
        "Autoguía con QR: cada pieza tiene QR para abrir su ficha y continuar el recorrido",
        "Panel Admin (compartido con la web): administrar acceso, contenido, salas y piezas",
        "Gestión de imágenes: subir/editar/eliminar con Cloudinary + sincronización con MongoDB",
        "Herramientas pro: exportar JSON (salas/piezas), importar JSON, y carga masiva",
      ]
    : [
        "Fixed-tablet mode (landscape): large touch UI, simple navigation, built for public usage",
        "Interactive museum floor map: rooms + items, navigation by location and context",
        "Guided tour: suggested route and themed modules inside the kiosk experience",
        "3D pieces (Luma 3D) integrated for immersive viewing",
        "QR self-guide: each item has a QR to open its detail view and continue the route",
        "Admin panel (shared with the website): manage access, content, rooms, and items",
        "Image management: upload/edit/delete via Cloudinary + sync with MongoDB",
        "Pro tools: export JSON (rooms/items), import JSON, and bulk loading workflow",
      ],
},


{
  order: 4,
  title: isEs ? "Intranet (WordPress) — Organismo público" : "Intranet (WordPress) — Public agency",
  desc: isEs
    ? "Intranet interna (sin acceso público) para comunicación y gestión. Implementación completa en WordPress: diseño a medida, módulos sociales, eventos y base de conocimiento, con optimización y mantenimiento."
    : "Internal intranet (no public access) for communication and operations. End-to-end WordPress implementation: custom UI, social modules, events and knowledge base, plus performance and maintenance.",
  stack: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
  image: { src: "/screenshots/intranet-1.webp", alt: "Intranet (WordPress) screenshot" },
  links: { repo: "" }, // demo no pública
  badge: isEs ? "Internal · Screenshots only" : "Internal · Screenshots only",

 video: { provider: "youtube", id: "mrsk8z4_Xg0", label: isEs ? "Ver video" : "View video", duration: "50s" },

  features: isEs
    ? [
        "Diseño y maquetación (Elementor/Divi)",
        "Módulos sociales/comunidad (BuddyPress/bbPress)",
        "Eventos, encuestas y formularios",
        "Knowledge base / documentación interna",
        "Optimización: cache/limpieza/compresión + buenas prácticas",
      ]
    : [
        "Custom UI/layout (Elementor/Divi)",
        "Social/community modules (BuddyPress/bbPress)",
        "Events, surveys and forms",
        "Internal knowledge base / documentation",
        "Performance: cache/cleanup/compression + best practices",
      ],

  screenshots: [
    { src: "/screenshots/intranet-1.webp", alt: isEs ? "Inicio intranet" : "Intranet home" },
    { src: "/screenshots/intranet-2.webp", alt: isEs ? "Sección interna" : "Internal section" },
    { src: "/screenshots/intranet-3.webp", alt: isEs ? "Módulo / panel" : "Module / dashboard" },
  ],
 


},


{
  order: 5,
  title: isEs
    ? "Marketplace de Servicios"
    : "Services Marketplace",
  desc: isEs
    ? "Proyecto actual en desarrollo. Plataforma mobile full stack para conectar clientes, proveedores y administración en una sola operación: solicitudes, chat en tiempo real, mapa, ubicación, push notifications, reseñas, historial y dashboard admin."
    : "Current project in development. Full-stack mobile platform connecting clients, providers, and admin in a single workflow: service requests, real-time chat, map, location, push notifications, reviews, history, and admin dashboard.",
  stack: [
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "Firebase",
    "Google Maps",
  ],
  image: {
    src: "/screenshots/marketplace-1.webp",
    alt: isEs
      ? "Marketplace de Servicios — vista principal"
      : "Services Marketplace — main view",
  },
  links: { repo: "" },
  badge: isEs ? "Mobile App · En desarrollo" : "Mobile App · In development",
  screenshots: [
    {
      src: "/screenshots/marketplace-1.webp",
      alt: isEs
        ? "Marketplace — Login / acceso"
        : "Marketplace — Login / access",
    },
    {
      src: "/screenshots/marketplace-2.webp",
      alt: isEs
        ? "Marketplace — Home cliente"
        : "Marketplace — Client home",
    },
    {
      src: "/screenshots/marketplace-3.webp",
      alt: isEs
        ? "Marketplace — Solicitudes / chat"
        : "Marketplace — Requests / chat",
    },
    {
      src: "/screenshots/marketplace-4.webp",
      alt: isEs
        ? "Marketplace — Dashboard admin"
        : "Marketplace — Admin dashboard",
    },
    {
      src: "/screenshots/marketplace-5.webp",
      alt: isEs
        ? "Marketplace — Perfil proveedor"
        : "Marketplace — Provider profile",
    },
    {
      src: "/screenshots/marketplace-6.webp",
      alt: isEs
        ? "Marketplace — Auditoría / logs admin"
        : "Marketplace — Audit logs / admin",
    },
	
	    {
      src: "/screenshots/marketplace-7.webp",
      alt: isEs
        ? "Marketplace — Auditoría / logs admin"
        : "Marketplace — Audit logs / admin",
    },
  ],
  features: isEs
    ? [
        "Autenticación con roles: cliente, proveedor y administrador",
        "Solicitudes de servicio con seguimiento por estados",
        "Chat por solicitud en tiempo real con unread count, typing y read receipts",
        "Ubicación del cliente y mapa de proveedores activos",
        "Notificaciones push con Firebase Cloud Messaging",
        "Sistema de reseñas, rating e historial de servicios",
        "Perfil editable del proveedor con disponibilidad y categorías",
        "Dashboard admin con métricas, filtros, exportes CSV, auditoría y soft delete",
      ]
    : [
        "Role-based authentication: client, provider, and admin",
        "Service requests with status-based workflow tracking",
        "Real-time request chat with unread count, typing, and read receipts",
        "Client location and active providers map",
        "Push notifications with Firebase Cloud Messaging",
        "Reviews, ratings, and service history",
        "Editable provider profile with availability and categories",
        "Admin dashboard with metrics, filters, CSV exports, audit logs, and soft delete",
      ],
},

];




  return {
	  
	  
    langLabel: isEs ? "Español" : "English",
    switchTo: isEs ? "English" : "Español",
    switchHref: isEs ? "/en" : "/es",

    heroKicker: isEs
  ? "Disponible: Remoto · Freelance · Full-time"
  : "Available: Remote · Freelance · Full-time",

    name: "Santiago Gretter",
    role: "Fullstack / Mobile Developer (React Native · Node · Next.js)",
    summary: isEs
      ? "Construyo productos completos: apps móviles, webs modernas y backends escalables. Enfocado en performance, UX y features en tiempo real (sockets, mapas, notificaciones)."
      : "I build end-to-end products: mobile apps, modern web apps, and scalable backends. Focused on performance, UX, and real-time features (sockets, maps, notifications).",

    ctaProjects: isEs ? "Ver proyectos" : "View projects",
    ctaContact: isEs ? "Contacto" : "Contact",
	ctaExperience: isEs ? "Experiencia" : "Experience",
    ctaEmail: isEs ? "Enviar email" : "Email me",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaDownloadCv: isEs ? "Descargar CV" : "Download CV",

    sectionProjectsTitle: isEs ? "Proyectos" : "Projects",
    sectionProjectsDesc: isEs
      ? "Selección de trabajos reales con foco en resultados."
      : "A selection of real projects focused on outcomes.",
sectionProjectsKicker: isEs
  ? "Proyectos reales en producción: foco en producto, performance y experiencias en tiempo real."
  : "Real projects in production: product focus, performance, and real-time experiences.",


   sectionSkillsTitle: "Skills",
   sectionSkillsKicker: isEs
  ? "Perfil full-stack orientado a producto: web + mobile + backend, con tiempo real y despliegues en producción."
  : "Product-driven full-stack profile: web + mobile + backend, with real-time features and production deployments.",

skills: [
  {
    title: isEs ? "Frontend Web" : "Web Frontend",
    items: [
      "Next.js (App Router)",
      "React + TypeScript",
      isEs ? "UI responsive + SEO técnico" : "Responsive UI + technical SEO",
      "OpenGraph / metadata",
    ],
  },
  {
    title: "Mobile (RadarSocial)",
    items: [
      "React Native (Android)",
      "Real-time chat (Socket.IO)",
      isEs ? "Llamadas audio/video (WebRTC)" : "Audio/Video calls (WebRTC)",
      isEs ? "Stickers + multimedia" : "Stickers + rich media",
      "Maps + geolocation",
      "FCM/Notifee (push)",
      "IAP (Google Play)",
    ],
  },
  {
    title: isEs ? "Backend & Infra" : "Backend & Infra",
    items: [
      "Node.js / Express",
      "JWT auth",
      "MongoDB",
      "REST APIs",
      "Cloudinary / Firebase Storage",
      "Deploy: Vercel + Cloudflare",
    ],
  },
],


    sectionContactTitle: isEs ? "Contacto" : "Contact",
	sectionExperieciaTitle: isEs ? "Experiencia" : "Experience",
    sectionContactDesc: isEs
      ? "Si querés que trabajemos juntos, escribime:"
      : "Want to work together? Reach out:",

    projects,
    footer: "Portfolio · Santiago Gretter",
	
	sectionNowTitle: isEs ? "Disponible" : "Available",
sectionNowDesc: isEs
  ? "Estoy abierto a proyectos y colaboraciones. Si querés que armemos algo sólido (web + mobile + backend), escribime."
  : "Open to projects and collaborations. If you want to build something solid (web + mobile + backend), reach out.",

nowPoints: isEs
  ? [
      "Remoto (Uruguay) · Flexible por husos horarios",
      "Full-stack orientado a producto (UX + performance + tiempo real)",
      "Experiencia real en producción: deploys, monitoreo y mejoras iterativas",
    ]
  : [
      "Remote (Uruguay) · Flexible across time zones",
      "Product-driven full-stack (UX + performance + real-time)",
      "Production experience: deploys, monitoring and iterative improvements",
    ],

nowResponseTime: isEs
  ? "Respuesta típica: 24–48h"
  : "Typical response time: 24–48h",

nowCtaPrimary: isEs ? "Hablemos" : "Let’s talk",
nowCtaSecondary: isEs ? "Descargar CV" : "Download CV",

nowChipsLabel: isEs ? "Open to:" : "Open to:",
nowChips: isEs
  ? ["Web", "Mobile", "Backend"]
  : ["Web", "Mobile", "Backend"],

bestFitLabel: isEs ? "Mejor encaje:" : "Best fit:",
bestFitItems: isEs
  ? ["Apps en tiempo real", "Mapas", "Admin/CMS"]
  : ["Real-time apps", "Maps", "Admin/CMS"],

sectionExperienceTitle: isEs ? "Experiencia" : "Experience",
sectionExperienceKicker: isEs
  ? "Experiencia presencial/contratada en sector público y consultoría (detalles redactados de forma general por confidencialidad)."
  : "On-site/contracted experience in public sector and consulting (written generically for confidentiality).",

experience: isEs
  ? [
      {
        company: "Consultoría tecnológica (cliente del sector banca) · Montevideo, Uruguay",
        role: "Analista de Sistemas / Funcional · IT Support (Presencial)",
        period: "2013 – 2022",
        bullets: [
          "Referente funcional/técnico en módulos CRM/ERP (Compras y Recursos Humanos) dentro del área de Desarrollo.",
          "Interacción directa con usuarios finales y equipos internos del banco: relevamiento, seguimiento y soporte post-producción.",
          "Coordinación con proveedores y stakeholders para análisis, resolución de incidentes y mejoras evolutivas.",
          "Integración de sistemas y middleware + automatizaciones para flujos operativos diarios (logs, procesos, depósitos).",
          "Automatización con Control-M: reducción de tareas manuales recurrentes y minimización de errores operativos.",
          "Reporting/BI: reportes y dashboards para negocio (SQL/Oracle + Power BI/Excel) integrando fuentes (banking/CRM/ERP).",
          "Documentos/reportes operativos (Java + Oracle + JasperReports) para procesos internos.",
          "Metodologías ágiles (Scrum) y herramientas de seguimiento (JIRA).",
        ],
        stack: [
          "Java",
          "Oracle",
          "SQL",
          "JasperReports",
          "Power BI",
          "Control-M",
          "CRM/ERP",
          "Middleware",
          "JIRA",
          "Scrum",
        ],
      },

      {
        company: "Organismo público (Registro) · Montevideo, Uruguay",
        role: "Web Design & Development · IT Help Desk Support (Presencial)",
        period: "2023 – 2024",
        bullets: [
          "Soporte TI a usuarios internos: mantenimiento, resolución de incidencias y asistencia operativa.",
          "Desarrollo y soporte de aplicaciones internas y mejoras evolutivas.",
          "Diseño y mantenimiento web (HTML/CSS/JS + PHP/WordPress) para sitios y módulos internos.",
          "Reportes y documentación: JasperReports/Jaspersoft Studio para necesidades de negocio.",
          "ERP: desarrollo de módulos en Odoo e integraciones con base de datos Oracle.",
        ],
        stack: ["Java", "JavaScript", "Oracle", "JasperReports", "Odoo", "WordPress", "HTML/CSS"],
      },

      {
        company: "Software factory (proyectos web) · Montevideo, Uruguay",
        role: "Web Design & Development · Full-Stack Java Developer",
        period: "2011 – 2013",
        bullets: [
          "Desarrollo de aplicaciones web con Java (Servlet/JSP) y front-end (JS/CSS/HTML).",
          "Implementación de soluciones con Play Framework y stack Java clásico (Hibernate/Maven/Tomcat).",
          "Trabajo por iteraciones con enfoque ágil (Scrum) y herramientas de desarrollo (Eclipse).",
        ],
        stack: ["Java", "Play Framework", "Servlet/JSP", "Hibernate", "Maven", "Tomcat", "MySQL"],
      },
    ]
  : [
      {
        company: "Tech consulting (client in banking sector) · Montevideo, Uruguay",
        role: "Systems / Functional Analyst · IT Support (On-site)",
        period: "2013 – 2022",
        bullets: [
          "Functional/technical point of contact for CRM/ERP modules (Procurement and HR) within the Development area.",
          "Direct collaboration with end users and internal bank teams: requirements, tracking and post-production support.",
          "Coordination with vendors and stakeholders for analysis, incident resolution and iterative improvements.",
          "System integrations and middleware work + automation for daily operational flows (logs, processes, deposits).",
          "Automation with Control-M: reduced recurring manual tasks and operational errors.",
          "Reporting/BI: business reports and dashboards (SQL/Oracle + Power BI/Excel) integrating sources (banking/CRM/ERP).",
          "Operational documents/reports (Java + Oracle + JasperReports) supporting internal processes.",
          "Agile delivery (Scrum) and tracking tools (JIRA).",
        ],
        stack: [
          "Java",
          "Oracle",
          "SQL",
          "JasperReports",
          "Power BI",
          "Control-M",
          "CRM/ERP",
          "Middleware",
          "JIRA",
          "Scrum",
        ],
      },

      {
        company: "Public sector agency (Registry) · Montevideo, Uruguay",
        role: "Web Design & Development · IT Help Desk Support (On-site)",
        period: "2023 – 2024",
        bullets: [
          "On-site IT support for internal users: maintenance, incident handling, and operational assistance.",
          "Built and supported internal applications and iterative improvements.",
          "Web design & maintenance (HTML/CSS/JS + PHP/WordPress) for internal sites/modules.",
          "Reporting and documentation: JasperReports/Jaspersoft Studio for business needs.",
          "ERP: Odoo module development and integrations with Oracle database.",
        ],
        stack: ["Java", "JavaScript", "Oracle", "JasperReports", "Odoo", "WordPress", "HTML/CSS"],
      },

      {
        company: "Software factory (web projects) · Montevideo, Uruguay",
        role: "Web Design & Development · Full-Stack Java Developer",
        period: "2011 – 2013",
        bullets: [
          "Built web applications with Java (Servlet/JSP) and front-end (JS/CSS/HTML).",
          "Implemented solutions using Play Framework and classic Java stack (Hibernate/Maven/Tomcat).",
          "Worked iteratively with an agile mindset (Scrum) and dev tooling (Eclipse).",
        ],
        stack: ["Java", "Play Framework", "Servlet/JSP", "Hibernate", "Maven", "Tomcat", "MySQL"],
      },
    ],



navCommercial: isEs ? "Licenciamiento" : "Licensing",

commercialProjectsTitle: isEs
  ? "Proyectos comercializables"
  : "Commercial projects",

commercialProjectsKicker: isEs
  ? "Productos digitales desarrollados y disponibles para licenciamiento, partnership, implementación comercial o adquisición, según alcance y modelo de negocio."
  : "Digital products developed and available for licensing, partnership, commercial deployment, or acquisition, depending on scope and business model.",

commercialProjectsIntro: isEs
  ? "Además de desarrollar soluciones a medida, también construyo productos propios con potencial de comercialización. Algunos proyectos de este portfolio pueden adaptarse, licenciarse o implementarse para terceros bajo distintos esquemas de colaboración."
  : "In addition to building custom solutions, I also create proprietary products with commercial potential. Some projects in this portfolio can be adapted, licensed, or deployed for third parties under different collaboration models.",

commercialProjectsBadge: isEs
  ? "Negocio / Licenciamiento"
  : "Business / Licensing",

commercialProjectsModelLabel: isEs
  ? "Modelo"
  : "Model",

commercialProjectsIdealForLabel: isEs
  ? "Ideal para"
  : "Ideal for",

commercialProjectsCta: isEs
  ? "Si te interesa licenciar uno de estos productos, implementarlo para tu organización o conversar una posible alianza, podés contactarme para recibir una ficha comercial, propuesta de alcance o alternativa de colaboración."
  : "If you are interested in licensing one of these products, implementing it for your organization, or exploring a partnership, feel free to contact me to receive a commercial one-pager, scope proposal, or collaboration option.",

commercialProjectsContact: isEs
  ? "Contactar"
  : "Contact",

commercialProjectsCardRequest: isEs
  ? "Consultar este proyecto"
  : "Inquire about this project",

commercialProjectsRequest: isEs
  ? "Solicitar ficha comercial"
  : "Request commercial one-pager",

commercialProjectsSecondaryNote: isEs
  ? "También disponible para adaptar a otros modelos, sectores o verticales."
  : "Also available for adaptation to other models, sectors, or verticals.",

commercialProjectsBottomNote: isEs
  ? "Modalidades posibles: licenciamiento, implementación, white-label, adaptación por vertical, partnership estratégico o adquisición, según el proyecto."
  : "Possible models: licensing, deployment, white-label, vertical adaptation, strategic partnership, or acquisition, depending on the project.",

commercialProjectsPdf: isEs
  ? "Descargar ficha PDF"
  : "Download PDF one-pager",




commercialProjectsItems: [
  {
    title: isEs ? "RadarSocial" : "RadarSocial",
    status: isEs
      ? "Disponible para licenciamiento"
      : "Available for licensing",
	  featuredLabel: isEs ? "Proyecto principal" : "Flagship product",
    description: isEs
      ? "Plataforma full stack de interacción social y servicios en tiempo real. Incluye app móvil, web, backend, chat, mapas, llamadas, BLE, monetización y panel administrativo. Disponible para licenciamiento, partnership o implementación comercial."
      : "Full-stack real-time social and services platform. Includes mobile app, web, backend, chat, maps, calls, BLE, monetization, and admin panel. Available for licensing, partnership, or commercial deployment.",
    model: isEs
      ? "Licencia / Partnership / Adquisición"
      : "License / Partnership / Acquisition",
    idealFor: isEs
      ? "Comunidades, networking, servicios geolocalizados, plataformas sociales privadas o modelos híbridos entre social y servicios."
      : "Communities, networking, geolocated services, private social platforms, or hybrid social-services models.",
    tags: isEs
      ? ["Licencia", "Partnership", "Adquisición"]
      : ["License", "Partnership", "Acquisition"],
    requestHref: "/go/request-access/radar",
	pdfHref: "/RadarSocial_ficha_comercial.pdf",
  },
  {
    title: isEs
      ? "Marketplace de Servicios"
      : "Services Marketplace",
    status: isEs
      ? "Disponible para implementación"
      : "Available for deployment",
    description: isEs
      ? "Solución mobile orientada a conectar clientes, proveedores y administración en una sola operación. Incluye solicitudes, chat en tiempo real, mapa, historial, reseñas y dashboard admin. Disponible para implementación comercial y adaptación por vertical."
      : "Mobile solution designed to connect clients, providers, and admin workflows in a single operation. Includes requests, real-time chat, map, history, reviews, and admin dashboard. Available for commercial deployment and vertical adaptation.",
    model: isEs
      ? "Implementación / White-label / Adaptación"
      : "Deployment / White-label / Adaptation",
    idealFor: isEs
      ? "Empresas de servicios, verticales locales, operación multi-proveedor o productos white-label orientados a clientes finales."
      : "Service companies, local verticals, multi-provider operations, or white-label products aimed at end customers.",
    tags: isEs
      ? ["Implementación", "White-label", "Adaptación"]
      : ["Deployment", "White-label", "Adaptation"],
    requestHref: "/go/request-access/marketplace",
  },
  {
    title: isEs
      ? "Kiosco Interactivo / Museo"
      : "Interactive Kiosk / Museum",
    status: isEs
      ? "Disponible para adaptación"
      : "Available for adaptation",
    description: isEs
      ? "Sistema interactivo para espacios culturales, educativos o institucionales. Puede adaptarse como solución de exhibición, consulta y experiencia inmersiva para proyectos con requerimientos específicos de contenido y operación."
      : "Interactive system for cultural, educational, or institutional spaces. It can be adapted as an exhibition, consultation, and immersive experience solution for projects with specific content and operational requirements.",
    model: isEs
      ? "Proyecto a medida / Licencia parcial"
      : "Custom project / Partial license",
    idealFor: isEs
      ? "Museos, centros culturales, espacios educativos, exhibiciones institucionales o instalaciones interactivas con contenido curado."
      : "Museums, cultural centers, educational spaces, institutional exhibitions, or interactive installations with curated content.",
    tags: isEs
      ? ["Proyecto a medida", "Licencia parcial", "Adaptación"]
      : ["Custom project", "Partial license", "Adaptation"],
    requestHref: "/go/request-access/kiosco",
  },
],








	
	
  };
}
