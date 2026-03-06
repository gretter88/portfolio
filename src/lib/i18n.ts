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
      ? "Web en producción + App Android en testing. Plataforma social con chat en tiempo real, mapas, estado online, stickers y llamadas. Backend Node/MongoDB + Socket.IO. App Android en testing (Google Play – acceso por invitación)."
      : "Web live + Android app in testing. Social platform with real-time chat, maps, online presence, stickers and calls. Node/MongoDB + Socket.IO backend. Android app in testing (Google Play – invite-only).",
    stack: ["Next.js", "TypeScript", "React Native", "Node.js", "MongoDB", "Socket.IO"],
    image: { src: "/screenshots/radarsocialweb.webp", alt: "RadarSocial (Web)" },
    links: { demo: "https://radarsocial.com.uy/", repo: "" },
    badge: "Web: Live · Android: Testing",

    // ✅ NUEVO
    screenshots: [
      { src: "/screenshots/radarsocial-1.webp", alt: "RadarSocial — Perfil / UX" },
      { src: "/screenshots/radarsocial-2.webp", alt: "RadarSocial — Chat en tiempo real" },
      { src: "/screenshots/radarsocial-3.webp", alt: "RadarSocial — Mapa y usuarios cercanos" },
	  { src: "/screenshots/radarsocial-4.webp", alt: "RadarSocial — Inicio / UX" },
    ],
    features: isEs
      ? [
          "Chat 1:1 en tiempo real (Socket.IO) con estados: online / escribiendo / no leídos",
          "Mapa con geolocalización y usuarios cercanos + navegación directa al chat",
          "Stickers y multimedia + notificaciones push (FCM/Notifee)",
          "Llamadas por internet (audio/video) integradas al flujo del chat",
          "Backend Node/Express + MongoDB con auth JWT, logs y APIs REST",
        ]
      : [
          "Real-time 1:1 chat (Socket.IO) with presence: online / typing / unread counters",
          "Map with geolocation and nearby users + direct navigation to chat",
          "Stickers and rich media + push notifications (FCM/Notifee)",
          "Internet calls (audio/video) integrated into the chat flow",
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





	
	
  };
}
