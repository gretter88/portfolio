import type { Lang } from "@/lib/i18n";

export type CaseStudyScreenshot = {
  src: string;
  alt: string;
};



export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  summary: string;
  stack: string[];
  heroImage: string;
  screenshots: CaseStudyScreenshot[];
  problem: string;
  solution: string;
  highlights: string[];
  businessValue: string[];
  nextSteps: string[];
  requestHref: string;
  pdfHref?: string;
  seoKeywords: string[];
  
  commercial: {
  availableFor: string[];
  pricingModel: string;
  targetAudience: string[];
  contactLabel: string;
};

};

export function getCaseStudies(lang: Lang): CaseStudy[] {
  const isEs = lang === "es";

  return [
  
  {
  slug: "sghub",
  title: "SG Hub",

  subtitle: isEs
    ? "Ecosistema digital full stack con Tools, Marketplace y procesamiento de documentos"
    : "Full-stack digital ecosystem with Tools, Marketplace, and document processing",

  status: isEs
    ? "Web · Producción"
    : "Web · Production",

  summary: isEs
    ? "SG Hub es un ecosistema digital full stack en producción que integra herramientas online, marketplace multi-autor de recursos digitales, productos propios, blog, directorio de IA y procesamiento avanzado de documentos mediante API y workers."
    : "SG Hub is a production full-stack digital ecosystem combining online tools, a multi-author digital resources marketplace, proprietary products, a blog, AI directory, and advanced document processing through an API and workers.",

  stack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Docker",
    "Cloudflare R2",
    "Mercado Pago",
    "OCRmyPDF",
    "Tesseract",
    "Vercel",
    "Render",
  ],

  heroImage: "/screenshots/sghub-1.webp",

screenshots: [
  {
    src: "/screenshots/sghub-1.webp",
    alt: isEs
      ? "SG Hub — Home y visión general"
      : "SG Hub — Home and overview",
  },
  {
    src: "/screenshots/sghub-2.webp",
    alt: isEs
      ? "SG Hub — Market de recursos digitales"
      : "SG Hub — Digital resources Market",
  },
  {
    src: "/screenshots/sghub-3.webp",
    alt: isEs
      ? "SG Hub — Herramientas online"
      : "SG Hub — Online tools",
  },
  {
    src: "/screenshots/sghub-4.webp",
    alt: isEs
      ? "SG Hub — OCR PDF completado"
      : "SG Hub — Completed PDF OCR",
  },
  {
    src: "/screenshots/sghub-5.webp",
    alt: isEs
      ? "SG Hub — Directorio IA"
      : "SG Hub — AI directory",
  },
  {
    src: "/screenshots/sghub-6.webp",
    alt: isEs
      ? "SG Hub — SG SaaS Starter Pro"
      : "SG Hub — SG SaaS Starter Pro",
  },
  {
    src: "/screenshots/sghub-7.webp",
    alt: isEs
      ? "SG Hub — Blog"
      : "SG Hub — Blog",
  },
  {
    src: "/screenshots/sghub-8.webp",
    alt: isEs
      ? "SG Hub — Plantillas"
      : "SG Hub — Templates",
  },
  {
    src: "/screenshots/sghub-9.webp",
    alt: isEs
      ? "SG Hub — Autores del Market"
      : "SG Hub — Market authors",
  },
],

  problem: isEs
    ? "Crear una plataforma digital propia capaz de reunir herramientas útiles, contenido, productos digitales y un marketplace comercial dentro de una misma arquitectura, manteniendo SEO, monetización, escalabilidad y procesamiento intensivo de archivos."
    : "Build a proprietary digital platform capable of combining useful tools, content, digital products, and a commercial marketplace in a single architecture while supporting SEO, monetization, scalability, and compute-intensive file processing.",

  solution: isEs
    ? "Se desarrolló una arquitectura distribuida con Next.js para la plataforma pública, Node.js/Express para servicios de procesamiento, MongoDB para persistencia, Redis y BullMQ para jobs asíncronos, Cloudflare R2 para archivos y Mercado Pago para compras. El ecosistema incorpora además autores, liquidaciones, promociones, analytics, notificaciones y productos propios."
    : "A distributed architecture was built with Next.js for the public platform, Node.js/Express for processing services, MongoDB for persistence, Redis and BullMQ for asynchronous jobs, Cloudflare R2 for file storage, and Mercado Pago for purchases. The ecosystem also includes authors, payouts, promotions, analytics, notifications, and proprietary products.",

  highlights: isEs
    ? [
        "Plataforma web bilingüe ES/EN en producción.",
        "Catálogo de herramientas online orientadas a utilidad y adquisición orgánica.",
        "Marketplace de recursos digitales gratuitos y pagos.",
        "Arquitectura multi-autor con solicitud, revisión y aprobación administrativa.",
        "Panel del autor con ventas, vistas, descargas, conversión y actividad.",
        "Sistema de ganancias y solicitudes de liquidación.",
        "Pagos con Mercado Pago y soporte para UYU/USD.",
        "Cupones, promociones públicas y recursos destacados.",
        "Productos oficiales SG Hub con versiones, changelog y relaciones Lite/Pro.",
        "Notificaciones para usuarios, autores y administradores.",
        "Processing API independiente con autenticación interna.",
        "Colas asíncronas mediante Redis + BullMQ.",
        "OCR PDF con OCRmyPDF y Tesseract ES/EN.",
        "Almacenamiento de archivos en Cloudflare R2 mediante URLs firmadas.",
        "Infraestructura distribuida entre Vercel, Render y Cloudflare.",
      ]
    : [
        "Bilingual ES/EN production web platform.",
        "Online tools catalog focused on utility and organic acquisition.",
        "Marketplace for free and paid digital resources.",
        "Multi-author architecture with application, review, and admin approval.",
        "Author dashboard with sales, views, downloads, conversion, and activity.",
        "Earnings and payout request system.",
        "Mercado Pago payments with UYU/USD support.",
        "Coupons, public promotions, and featured resources.",
        "Official SG Hub products with versions, changelog, and Lite/Pro relationships.",
        "Notifications for users, authors, and administrators.",
        "Independent Processing API with internal authentication.",
        "Asynchronous queues using Redis + BullMQ.",
        "PDF OCR using OCRmyPDF and Tesseract ES/EN.",
        "Cloudflare R2 file storage through signed URLs.",
        "Distributed infrastructure across Vercel, Render, and Cloudflare.",
      ],

  businessValue: isEs
    ? [
        "Centraliza adquisición orgánica, herramientas gratuitas y monetización dentro de un mismo ecosistema.",
        "Permite vender productos digitales propios y de terceros.",
        "El modelo multi-autor permite evolucionar el Market hacia un marketplace escalable.",
        "La arquitectura de Processing API permite separar cargas intensivas del frontend.",
        "Tools, Blog y SEO funcionan como canales de adquisición para el Market.",
        "La infraestructura modular permite agregar nuevas herramientas y productos sin rehacer la plataforma.",
      ]
    : [
        "Combines organic acquisition, free tools, and monetization within one ecosystem.",
        "Supports sales of proprietary and third-party digital products.",
        "The multi-author model enables the Market to evolve into a scalable marketplace.",
        "The Processing API architecture isolates intensive workloads from the frontend.",
        "Tools, Blog, and SEO work as acquisition channels for the Market.",
        "The modular infrastructure allows new tools and products to be added without rebuilding the platform.",
      ],

  nextSteps: isEs
    ? [
        "Expandir catálogo de herramientas.",
        "Ampliar productos digitales propios.",
        "Escalar el marketplace multi-autor.",
        "Continuar optimización SEO internacional.",
        "Evolucionar SG Hub hacia aplicación móvil.",
      ]
    : [
        "Expand the tools catalog.",
        "Grow the proprietary digital product catalog.",
        "Scale the multi-author marketplace.",
        "Continue international SEO optimization.",
        "Evolve SG Hub into a mobile application.",
      ],

  seoKeywords: isEs
    ? [
        "Next.js",
        "Marketplace digital",
        "SaaS",
        "Node.js",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Docker",
        "Cloudflare R2",
        "Mercado Pago",
        "OCR PDF",
        "Tesseract",
        "SEO",
        "Vercel",
        "Render",
      ]
    : [
        "Next.js",
        "Digital marketplace",
        "SaaS",
        "Node.js",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Docker",
        "Cloudflare R2",
        "Mercado Pago",
        "PDF OCR",
        "Tesseract",
        "SEO",
        "Vercel",
        "Render",
      ],

  requestHref: "https://www.sghub.com.uy",

  commercial: {
    availableFor: isEs
      ? [
          "Producto propio",
          "Plataforma en producción",
          "Evolución continua",
        ]
      : [
          "Proprietary product",
          "Production platform",
          "Continuous evolution",
        ],

    pricingModel: isEs
      ? "Producto propio de SG Hub / Santiago Gretter Software Studio"
      : "Proprietary product by SG Hub / Santiago Gretter Software Studio",

    targetAudience: isEs
      ? [
          "Creadores digitales",
          "Desarrolladores",
          "Profesionales",
          "Emprendedores",
          "Usuarios de herramientas online",
        ]
      : [
          "Digital creators",
          "Developers",
          "Professionals",
          "Entrepreneurs",
          "Online tools users",
        ],

    contactLabel: isEs
      ? "Visitar SG Hub"
      : "Visit SG Hub",
  },
},
  
    {
      slug: "playduel",
      title: "PlayDuel",
      subtitle: isEs
        ? "Plataforma realtime de duelos 1 vs 1"
        : "Real-time 1v1 duel platform",
      status: isEs ? "Web App · Realtime Gaming" : "Web App · Realtime Gaming",
      summary: isEs
        ? "PlayDuel es una plataforma web full stack para juegos competitivos 1 vs 1 en tiempo real, con lobby, invitaciones, matchmaking, chat por partida, historial, ranking y balance demo."
        : "PlayDuel is a full-stack web platform for competitive real-time 1v1 games, with lobby, invites, matchmaking, match chat, history, ranking, and demo balance.",
      stack: ["Next.js", "TypeScript", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Prisma", "Tailwind CSS"],
      heroImage: "/screenshots/playduel-1.webp",
	  screenshots: [
  {
    src: "/screenshots/playduel-1.webp",
    alt: isEs ? "PlayDuel — Lobby principal" : "PlayDuel — Main lobby",
  },
  {
    src: "/screenshots/playduel-2.webp",
    alt: isEs ? "PlayDuel — Partida en tiempo real" : "PlayDuel — Real-time match",
  },
  {
    src: "/screenshots/playduel-3.webp",
    alt: isEs ? "PlayDuel — Juego competitivo" : "PlayDuel — Competitive game",
  },
  {
    src: "/screenshots/playduel-4.webp",
    alt: isEs ? "PlayDuel — Ranking e historial" : "PlayDuel — Ranking and history",
  },
  {
    src: "/screenshots/playduel-5.webp",
    alt: isEs ? "PlayDuel — Ranking e historial" : "PlayDuel — Ranking and history",
  },
],

      problem: isEs
        ? "Crear una base sólida para una plataforma de gaming competitivo que soporte partidas en tiempo real, estados sincronizados, usuarios conectados y evolución futura hacia torneos o wallet real."
        : "Build a solid foundation for a competitive gaming platform supporting real-time matches, synchronized states, connected users, and future evolution into tournaments or real wallet.",
      solution: isEs
        ? "Se desarrolló una arquitectura full stack con lobby realtime, salas por partida, eventos Socket.IO, juegos 1 vs 1, chat persistente, reconexión, historial, ranking y balance demo actualizado por resultado."
        : "A full-stack architecture was built with real-time lobby, match rooms, Socket.IO events, 1v1 games, persistent chat, reconnection, history, ranking, and demo balance updated by match result.",
      highlights: isEs
        ? [
            "Lobby realtime con usuarios conectados e invitaciones.",
            "Partidas privadas por link y matchmaking rápido.",
            "Juegos: TaTeTi, Piedra/Papel/Tijera, Damas, Ajedrez, Dados y Tetris Duel.",
            "Chat persistente por partida.",
            "Balance demo actualizado automáticamente.",
            "Base preparada para torneos, wallet y monetización.",
          ]
        : [
            "Real-time lobby with connected users and invites.",
            "Private matches by link and quick matchmaking.",
            "Games: Tic Tac Toe, Rock Paper Scissors, Checkers, Chess, Dice, and Tetris Duel.",
            "Persistent match chat.",
            "Demo balance updated automatically.",
            "Foundation ready for tournaments, wallet, and monetization.",
          ],
      businessValue: isEs
        ? [
            "Puede adaptarse como plataforma white-label de gaming.",
            "Permite modelos por torneos, comunidades privadas o entretenimiento competitivo.",
            "Arquitectura lista para escalar con pagos, wallet real y panel admin.",
          ]
        : [
            "Can be adapted as a white-label gaming platform.",
            "Supports tournament, private community, or competitive entertainment models.",
            "Architecture ready to scale with payments, real wallet, and admin panel.",
          ],
      nextSteps: isEs
        ? ["Integrar wallet real.", "Agregar torneos.", "Crear panel admin.", "Agregar pagos y suscripciones."]
        : ["Integrate real wallet.", "Add tournaments.", "Create admin panel.", "Add payments and subscriptions."],
      seoKeywords: isEs
  ? [
      "plataforma gaming realtime",
      "juegos multijugador online",
      "Socket.IO",
      "Next.js gaming platform",
      "desarrollo web full stack",
      "gaming competitivo",
    ]
  : [
      "real-time gaming platform",
      "online multiplayer games",
      "Socket.IO",
      "Next.js gaming platform",
      "full-stack web development",
      "competitive gaming",
    ],
	  requestHref: "/go/request-access/playduel",
	  
	  commercial: {
  availableFor: isEs
    ? [
        "Partnership",
        "White-label",
        "Evolución de producto",
        "Implementación",
        "Licenciamiento",
      ]
    : [
        "Partnership",
        "White-label",
        "Product evolution",
        "Deployment",
        "Licensing",
      ],

  pricingModel: isEs
    ? "Partnership, licencia o evolución hacia plataforma comercial"
    : "Partnership, license, or evolution into a commercial platform",

  targetAudience: isEs
    ? [
        "Gaming competitivo",
        "Comunidades privadas",
        "Torneos online",
        "Entretenimiento realtime",
      ]
    : [
        "Competitive gaming",
        "Private communities",
        "Online tournaments",
        "Real-time entertainment",
      ],

  contactLabel: isEs
    ? "Conversar oportunidad PlayDuel"
    : "Discuss PlayDuel opportunity",
},

    },

    {
      slug: "nutrimvp",
      title: "NutriMVP",
      subtitle: isEs
        ? "App mobile de nutrición, precios y compra inteligente"
        : "Mobile app for nutrition, prices, and smart shopping",
      status: isEs ? "Android MVP · Preview bajo solicitud" : "Android MVP · Preview upon request",
      summary: isEs
        ? "NutriMVP permite escanear productos, consultar datos nutricionales, comparar precios por supermercado, guardar favoritos, crear alertas y optimizar compras según ubicación."
        : "NutriMVP lets users scan products, check nutrition facts, compare supermarket prices, save favorites, create alerts, and optimize grocery shopping based on location.",
      stack: ["React Native", "TypeScript", "Node.js", "Express", "Firebase", "Firestore", "PostgreSQL", "Supabase", "OpenFoodFacts"],
      heroImage: "/screenshots/nutrimvp-1.webp",
	  screenshots: [
  {
    src: "/screenshots/nutrimvp-1.webp",
    alt: isEs ? "NutriMVP — Home" : "NutriMVP — Home",
  },
  {
    src: "/screenshots/nutrimvp-2.webp",
    alt: isEs ? "NutriMVP — Escáner" : "NutriMVP — Scanner",
  },
  {
    src: "/screenshots/nutrimvp-3.webp",
    alt: isEs ? "NutriMVP — Resultado nutricional" : "NutriMVP — Nutrition result",
  },
  {
    src: "/screenshots/nutrimvp-4.webp",
    alt: isEs ? "NutriMVP — Comparación de precios" : "NutriMVP — Price comparison",
  },
  {
    src: "/screenshots/nutrimvp-5.webp",
    alt: isEs ? "NutriMVP — Historial y favoritos" : "NutriMVP — History and favorites",
  },
],

      problem: isEs
        ? "Los usuarios necesitan comparar información nutricional y precios reales de productos de forma simple, rápida y basada en ubicación."
        : "Users need to compare nutrition information and real product prices in a simple, fast, location-based experience.",
      solution: isEs
        ? "Se construyó una app Android con escáner de código de barras, integración con OpenFoodFacts, backend propio, Firebase/Firestore y PostgreSQL/Supabase para productos, supermercados y precios."
        : "An Android app was built with barcode scanner, OpenFoodFacts integration, custom backend, Firebase/Firestore, and PostgreSQL/Supabase for products, stores, and prices.",
      highlights: isEs
        ? [
            "Escaneo de productos por código de barras.",
            "Datos nutricionales desde OpenFoodFacts y base propia.",
            "Comparación de precios por supermercado.",
            "Mapa de supermercados cercanos.",
            "Favoritos, historial, alertas de precio y lista de compras.",
            "Base preparada para rutas inteligentes de compra.",
          ]
        : [
            "Barcode-based product scanning.",
            "Nutrition data from OpenFoodFacts and internal database.",
            "Supermarket price comparison.",
            "Nearby supermarket map.",
            "Favorites, history, price alerts, and shopping list.",
            "Foundation ready for smart shopping routes.",
          ],
      businessValue: isEs
        ? [
            "Aplicable a retail, supermercados, apps de ahorro o nutrición.",
            "Puede evolucionar hacia partnership con comercios.",
            "Combina consumo inteligente, ubicación y precios.",
          ]
        : [
            "Applicable to retail, supermarkets, savings apps, or nutrition products.",
            "Can evolve into partnerships with stores.",
            "Combines smart consumption, location, and pricing.",
          ],
      nextSteps: isEs
        ? ["Completar importación masiva de precios.", "Optimizar matching de productos.", "Agregar rutas inteligentes.", "Publicar beta cerrada."]
        : ["Complete bulk price imports.", "Optimize product matching.", "Add smart routes.", "Publish closed beta."],
seoKeywords: isEs
  ? [
      "app de nutrición",
      "comparador de precios supermercados",
      "React Native Uruguay",
      "escáner de productos",
      "OpenFoodFacts",
      "app mobile de compras",
    ]
  : [
      "nutrition app",
      "supermarket price comparison",
      "React Native Uruguay",
      "product scanner",
      "OpenFoodFacts",
      "mobile shopping app",
    ],     
	 requestHref: "/go/request-access/nutrimvp",
	  pdfHref: "/NutriMVP_ficha_comercial.pdf",
	  commercial: {
  availableFor: isEs
    ? [
        "Partnership",
        "Implementación",
        "Evolución de producto",
      ]
    : [
        "Partnership",
        "Deployment",
        "Product evolution",
      ],

  pricingModel: isEs
    ? "Implementación o evolución según alcance"
    : "Deployment or product evolution",

  targetAudience: isEs
    ? [
        "Retail",
        "Supermercados",
        "Nutrición",
        "Apps de ahorro",
      ]
    : [
        "Retail",
        "Supermarkets",
        "Nutrition",
        "Savings apps",
      ],

  contactLabel: isEs
    ? "Conversar oportunidad"
    : "Discuss opportunity",
},


	  
    },

    {
      slug: "sg-copilot-crm",
      title: "SG Copilot CRM",
      subtitle: isEs
        ? "CRM SaaS con AI, documentos inteligentes y billing"
        : "SaaS CRM with AI, smart documents, and billing",
      status: isEs ? "SaaS · Live" : "SaaS · Live",
      summary: isEs
        ? "SG Copilot CRM es un SaaS full stack para gestión comercial con organizaciones, clientes, tareas, documentos inteligentes, AI Assistant, Stripe Billing y módulos premium por plan."
        : "SG Copilot CRM is a full-stack SaaS for sales operations with organizations, clients, tasks, smart documents, AI Assistant, Stripe Billing, and premium plan-based modules.",
      stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "OpenAI", "PostgreSQL", "Tailwind CSS", "Vercel"],
      heroImage: "/screenshots/sg-copilot-crm-1.webp",
	  
screenshots: [
  {
    src: "/screenshots/sg-copilot-crm-1.webp",
    alt: isEs ? "SG Copilot CRM — Dashboard" : "SG Copilot CRM — Dashboard",
  },
  {
    src: "/screenshots/sg-copilot-crm-1-1.webp",
    alt: isEs ? "SG Copilot CRM — Métricas" : "SG Copilot CRM — Metrics",
  },
  {
    src: "/screenshots/sg-copilot-crm-2.webp",
    alt: isEs ? "SG Copilot CRM — Planes y billing" : "SG Copilot CRM — Plans and billing",
  },
  {
    src: "/screenshots/sg-copilot-crm-3.webp",
    alt: isEs ? "SG Copilot CRM — AI Assistant" : "SG Copilot CRM — AI Assistant",
  },
  {
    src: "/screenshots/sg-copilot-crm-4.webp",
    alt: isEs ? "SG Copilot CRM — Documentos inteligentes" : "SG Copilot CRM — Smart documents",
  },
  {
    src: "/screenshots/sg-copilot-crm-5.webp",
    alt: isEs ? "SG Copilot CRM — Auditoría AI" : "SG Copilot CRM — AI audit",
  },
],


      problem: isEs
        ? "Equipos comerciales necesitan centralizar clientes, tareas, documentos y análisis con AI en una herramienta SaaS escalable y monetizable."
        : "Sales teams need to centralize clients, tasks, documents, and AI-powered analysis in a scalable, monetizable SaaS tool.",
      solution: isEs
        ? "Se desarrolló un CRM SaaS con autenticación, organizaciones, planes Free/Pro/Business, límites por plan, Stripe, búsqueda semántica, Q&A sobre documentos y auditoría AI Business-only."
        : "A SaaS CRM was built with authentication, organizations, Free/Pro/Business plans, plan limits, Stripe, semantic search, document Q&A, and Business-only AI audit.",
      highlights: isEs
        ? [
            "Autenticación y multi-organización con Supabase.",
            "Suscripciones Stripe con planes Free, Pro y Business.",
            "AI Assistant para productividad comercial.",
            "Búsqueda semántica y preguntas sobre documentos.",
            "Límites y bloqueo de features por plan.",
            "Módulo Business de auditoría, insights y exportaciones.",
          ]
        : [
            "Authentication and multi-organization setup with Supabase.",
            "Stripe subscriptions with Free, Pro, and Business plans.",
            "AI Assistant for sales productivity.",
            "Semantic search and document Q&A.",
            "Plan-based limits and feature gating.",
            "Business audit, insights, and export module.",
          ],
      businessValue: isEs
        ? [
            "Modelo SaaS comercializable desde el inicio.",
            "Ideal para white-label, licenciamiento o implementación B2B.",
            "Base sólida para productos con AI y billing recurrente.",
          ]
        : [
            "Commercial SaaS model from the start.",
            "Ideal for white-label, licensing, or B2B deployment.",
            "Strong foundation for AI products with recurring billing.",
          ],
      nextSteps: isEs
        ? ["Mejorar onboarding.", "Agregar templates por industria.", "Expandir analítica AI.", "Preparar estrategia de adquisición de usuarios."]
        : ["Improve onboarding.", "Add industry templates.", "Expand AI analytics.", "Prepare user acquisition strategy."],
seoKeywords: isEs
  ? [
      "CRM con IA",
      "SaaS B2B",
      "Next.js SaaS",
      "Stripe Billing",
      "Supabase CRM",
      "automatización comercial",
    ]
  : [
      "AI CRM",
      "B2B SaaS",
      "Next.js SaaS",
      "Stripe Billing",
      "Supabase CRM",
      "sales automation",
    ],     
	 requestHref: "/go/request-access/sg-copilot-crm",
	  pdfHref: "/SG_Copilot_CRM_ficha_comercial.pdf",
	  commercial: {
  availableFor: isEs
    ? [
        "Licenciamiento",
        "White-label",
        "Implementación",
      ]
    : [
        "Licensing",
        "White-label",
        "Deployment",
      ],

  pricingModel: isEs
    ? "Licencia SaaS o implementación dedicada"
    : "SaaS license or dedicated deployment",

  targetAudience: isEs
    ? [
        "Consultoras",
        "Equipos comerciales",
        "Agencias",
        "B2B",
      ]
    : [
        "Consulting firms",
        "Sales teams",
        "Agencies",
        "B2B",
      ],

  contactLabel: isEs
    ? "Solicitar demo comercial"
    : "Request commercial demo",
},


    },
	
	
	{
  slug: "radar",
  title: "RadarSocial",

  subtitle: isEs
    ? "App móvil de descubrimiento social en tiempo real mediante Bluetooth"
    : "Mobile app for real-time social discovery using Bluetooth",

  status: isEs
    ? "Android · Closed Testing"
    : "Android · Closed Testing",

  summary: isEs
    ? "RadarSocial es una aplicación móvil que permite descubrir personas cercanas en tiempo real mediante Bluetooth Low Energy (BLE), creando una experiencia social basada en proximidad física, perfiles y conexiones instantáneas."
    : "RadarSocial is a mobile application that enables users to discover nearby people in real time using Bluetooth Low Energy (BLE), creating a proximity-based social networking experience.",

  stack: [
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "Socket.IO",
    "Firebase",
    "Google Play",
    "BLE"
  ],

  heroImage: "/screenshots/radarsocial-1.webp",

  screenshots: [
    {
      src: "/screenshots/radarsocial-1.webp",
      alt: isEs
        ? "RadarSocial — Pantalla principal"
        : "RadarSocial — Home screen",
    },
    {
      src: "/screenshots/radarsocial-2.webp",
      alt: isEs
        ? "RadarSocial — Usuarios cercanos"
        : "RadarSocial — Nearby users",
    },
    {
      src: "/screenshots/radarsocial-3.webp",
      alt: isEs
        ? "RadarSocial — Perfil social"
        : "RadarSocial — Social profile",
    },
    {
      src: "/screenshots/radarsocial-4.webp",
      alt: isEs
        ? "RadarSocial — Conexiones"
        : "RadarSocial — Connections",
    },
    {
      src: "/screenshots/radarsocial-5.webp",
      alt: isEs
        ? "RadarSocial — Experiencia móvil"
        : "RadarSocial — Mobile experience",
    },
  ],

  problem: isEs
    ? "Las redes sociales tradicionales conectan personas online pero no aprovechan el contexto físico y la proximidad real entre usuarios."
    : "Traditional social networks connect people online but do not take advantage of physical proximity and real-world interactions.",

  solution: isEs
    ? "Se desarrolló una aplicación móvil basada en Bluetooth Low Energy que permite detectar usuarios cercanos, descubrir perfiles, generar conexiones y crear experiencias sociales contextualizadas."
    : "A Bluetooth Low Energy mobile application was built to detect nearby users, discover profiles, create connections, and enable contextual social experiences.",

highlights: isEs
  ? [
      "Versión web en producción y Android en Google Play Closed Testing.",
      "BLE (Bluetooth Low Energy) para descubrimiento de usuarios cercanos.",
      "Chat 1:1 en tiempo real con Socket.IO.",
      "Mensajes de voz, stickers y multimedia.",
      "Audio llamadas y videollamadas integradas.",
      "Mapa geolocalizado con usuarios y servicios cercanos.",
      "Notificaciones push incluso con la app cerrada.",
      "Monetización mediante AdMob, compras in-app y plan premium.",
      "Backend Node.js + MongoDB Atlas escalable.",
      "Panel administrativo para operación y métricas."
    ]
    : [
        "Bluetooth Low Energy advertising and scanning.",
        "Real-time nearby user discovery.",
        "Node.js + MongoDB Atlas backend.",
        "Authentication and user profiles.",
        "Architecture ready for future monetization.",
        "Android deployment through Google Play Closed Testing.",
      ],

businessValue: isEs
  ? [
      "Puede adaptarse como red social privada o plataforma de comunidades.",
      "Aplicable a networking, eventos, asociaciones, turismo y servicios.",
      "Base tecnológica reutilizable para productos basados en proximidad.",
      "Arquitectura preparada para monetización y escalabilidad comercial."
    ]
    : [
        "Applicable to networking, events, communities, and in-person experiences.",
        "Reusable foundation for proximity-based products.",
        "Scalable architecture for future social features.",
      ],

  nextSteps: isEs
    ? [
        "Integrar sistema de intereses.",
        "Agregar chat en tiempo real.",
        "Expandir funcionalidades premium.",
        "Lanzamiento público en Google Play.",
      ]
    : [
        "Integrate interests system.",
        "Add real-time chat.",
        "Expand premium features.",
        "Public Google Play launch.",
      ],

seoKeywords: isEs
  ? [
      "React Native",
      "Bluetooth Low Energy",
      "BLE",
      "Socket.IO",
      "Aplicación móvil",
      "Red social",
      "Networking",
      "Geolocalización",
      "Google Play",
      "Node.js",
      "MongoDB",
      "WebRTC"
    ]
    : [
        "React Native",
        "Bluetooth Low Energy",
        "BLE",
        "Social app",
        "Mobile application",
        "Networking",
      ],

  requestHref: "/go/request-access/radar",
  pdfHref: "/RadarSocial_ficha_comercial.pdf",

 commercial: {
  availableFor: [
    "Licenciamiento",
    "Partnership",
    "White-label",
    "Implementación"
  ],

  pricingModel:
    "Licencia, partnership estratégico o implementación personalizada",

  targetAudience: [
    "Comunidades",
    "Networking",
    "Eventos",
    "Asociaciones",
    "Turismo",
    "Servicios geolocalizados"
  ],

  contactLabel: "Conversar oportunidad RadarSocial",
}
},
	
	{
  slug: "sg-booking-pro",
  title: "SG Booking Pro",
  subtitle: isEs
    ? "Plataforma SaaS de reservas online para profesionales y pequeños negocios"
    : "Online booking SaaS platform for professionals and small businesses",
  status: isEs ? "SaaS · MVP funcional" : "SaaS · Functional MVP",
  summary: isEs
    ? "SG Booking Pro es una plataforma SaaS para gestionar reservas online, servicios, disponibilidad, clientes y confirmaciones automáticas por email desde un panel simple y escalable."
    : "SG Booking Pro is a SaaS platform to manage online bookings, services, availability, clients, and automated email confirmations from a simple and scalable dashboard.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Resend",
    "Vercel",
    "Render",
  ],
  heroImage: "/screenshots/sg-booking-pro-1.webp",
  screenshots: [
    {
      src: "/screenshots/sg-booking-pro-2.webp",
      alt: isEs ? "SG Booking Pro — Dashboard" : "SG Booking Pro — Dashboard",
    },
    {
      src: "/screenshots/sg-booking-pro-3.webp",
      alt: isEs ? "SG Booking Pro — Servicios" : "SG Booking Pro — Services",
    },
    {
      src: "/screenshots/sg-booking-pro-4.webp",
      alt: isEs ? "SG Booking Pro — Reservas" : "SG Booking Pro — Bookings",
    },
    {
      src: "/screenshots/sg-booking-pro-5.webp",
      alt: isEs ? "SG Booking Pro — Configuración" : "SG Booking Pro — Settings",
    },
	 {
      src: "/screenshots/sg-booking-pro-6.webp",
      alt: isEs ? "SG Booking Pro — Configuración" : "SG Booking Pro — Settings",
    },
	{
      src: "/screenshots/sg-booking-pro-7.webp",
      alt: isEs ? "SG Booking Pro — Clientes" : "SG Booking Pro — Client",
    },
	
	{
      src: "/screenshots/sg-booking-pro-8.webp",
      alt: isEs ? "SG Booking Pro — Crear Reservas" : "SG Booking Pro — Create Reservations",
    },
	{
      src: "/screenshots/sg-booking-pro-9.webp",
      alt: isEs ? "SG Booking Pro — Calendario" : "SG Booking Pro — Calendar",
    },
	
	 {
      src: "/screenshots/sg-booking-pro-10.webp",
      alt: isEs ? "SG Booking Pro — Dashboard Administrador" : "SG Booking Pro — Dashboard Administrator",
    },
	{
      src: "/screenshots/sg-booking-pro-11.webp",
      alt: isEs ? "SG Booking Pro — Administrador - Usuarios y Planes" : "SG Booking Pro — Administrator - Users and Plans",
    },
	
	{
      src: "/screenshots/sg-booking-pro-12.webp",
      alt: isEs ? "SG Booking Pro — Administrador - Job Logs" : "SG Booking Pro — Administrator - Job Logs",
    },
  ],
  problem: isEs
    ? "Muchos profesionales y pequeños negocios gestionan reservas manualmente por WhatsApp, mensajes o llamadas, perdiendo tiempo y generando errores de coordinación."
    : "Many professionals and small businesses manage bookings manually through WhatsApp, messages, or calls, wasting time and creating scheduling errors.",
  solution: isEs
    ? "Se desarrolló una plataforma SaaS con panel administrativo, servicios configurables, página pública de reservas, confirmaciones automáticas y base preparada para multiempresa, pagos y notificaciones."
    : "A SaaS platform was built with an admin dashboard, configurable services, public booking page, automated confirmations, and a foundation ready for multi-tenant use, payments, and notifications.",
  highlights: isEs
    ? [
        "Gestión de servicios y reservas.",
        "Página pública para recibir reservas online.",
        "Confirmaciones automáticas por email.",
        "Panel administrativo para el negocio.",
        "Configuración de datos del negocio.",
        "Backend Node/Express + MongoDB.",
        "Base preparada para multiempresa, pagos y PWA.",
      ]
    : [
        "Service and booking management.",
        "Public page to receive online bookings.",
        "Automated email confirmations.",
        "Business admin dashboard.",
        "Business settings management.",
        "Node/Express + MongoDB backend.",
        "Foundation ready for multi-tenant SaaS, payments, and PWA.",
      ],
  businessValue: isEs
    ? [
        "Reduce tareas manuales de agenda.",
        "Mejora la experiencia de reserva para clientes.",
        "Aplicable a consultorios, estudios, salones, profesionales y servicios.",
        "Puede licenciarse o adaptarse como white-label SaaS.",
      ]
    : [
        "Reduces manual scheduling work.",
        "Improves the booking experience for customers.",
        "Applicable to clinics, studios, salons, professionals, and service businesses.",
        "Can be licensed or adapted as a white-label SaaS.",
      ],
  nextSteps: isEs
    ? [
        "Agregar calendario visual avanzado.",
        "Integrar bloqueo de horarios.",
        "Agregar pagos online.",
        "Evolucionar a multiempresa.",
        "Agregar PWA y notificaciones.",
      ]
    : [
        "Add advanced visual calendar.",
        "Integrate time blocking.",
        "Add online payments.",
        "Evolve into multi-tenant SaaS.",
        "Add PWA and notifications.",
      ],
  seoKeywords: isEs
    ? [
        "SaaS de reservas",
        "sistema de reservas online",
        "Next.js booking app",
        "plataforma de turnos",
        "software para profesionales",
        "agenda online",
      ]
    : [
        "booking SaaS",
        "online booking system",
        "Next.js booking app",
        "appointment platform",
        "software for professionals",
        "online scheduling",
      ],
  requestHref: "/go/request-access/sg-booking-pro",
  commercial: {
    availableFor: isEs
      ? ["Licenciamiento", "White-label", "Implementación", "Personalización"]
      : ["Licensing", "White-label", "Deployment", "Customization"],
    pricingModel: isEs
      ? "Licencia SaaS, white-label o implementación dedicada"
      : "SaaS license, white-label, or dedicated deployment",
    targetAudience: isEs
      ? ["Profesionales", "Consultorios", "Salones", "Estudios", "Pequeñas empresas"]
      : ["Professionals", "Clinics", "Salons", "Studios", "Small businesses"],
    contactLabel: isEs
      ? "Solicitar demo de SG Booking Pro"
      : "Request SG Booking Pro demo",
  },
},
	
	
	{
  slug: "kiosco",

  title: "Museo Canario Kiosco",

  subtitle: isEs
    ? "Experiencia interactiva para visitantes en pantalla táctil"
    : "Interactive touchscreen visitor experience",

  status: isEs
    ? "Tablet Kiosk · Live"
    : "Tablet Kiosk · Live",

  summary: isEs
    ? "Sistema interactivo para tablet horizontal desarrollado para el Museo Canario. Permite explorar piezas, salas, fotografías, contenido multimedia, juegos educativos y mapas interactivos mediante una experiencia optimizada para visitantes."
    : "Interactive kiosk system developed for the Museo Canario. Visitors can explore exhibits, rooms, photos, multimedia content, educational games, and interactive maps through a touchscreen-optimized experience.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "MongoDB",
    "QR Access",
    "PWA"
  ],

  heroImage: "/screenshots/kiosco-1.webp",

  screenshots: [
    {
      src: "/screenshots/kiosco-1.webp",
      alt: isEs
        ? "Museo Canario Kiosco — Inicio"
        : "Museum Kiosk — Home",
    },
    {
      src: "/screenshots/kiosco-2.webp",
      alt: isEs
        ? "Museo Canario Kiosco — Catálogo"
        : "Museum Kiosk — Catalog",
    },
    {
      src: "/screenshots/kiosco-3.webp",
      alt: isEs
        ? "Museo Canario Kiosco — Plano interactivo"
        : "Museum Kiosk — Interactive map",
    },
    {
      src: "/screenshots/kiosco-4.webp",
      alt: isEs
        ? "Museo Canario Kiosco — Juego memoria"
        : "Museum Kiosk — Memory game",
    },
    {
      src: "/screenshots/kiosco-5.webp",
      alt: isEs
        ? "Museo Canario Kiosco — Puzzle interactivo"
        : "Museum Kiosk — Puzzle game",
    },
  ],

  problem: isEs
    ? "Los visitantes necesitan acceder a información histórica y cultural de forma atractiva e intuitiva sin depender de personal o material impreso."
    : "Visitors need access to historical and cultural information through an engaging and intuitive experience without relying on staff or printed materials.",

  solution: isEs
    ? "Se desarrolló una experiencia kiosk optimizada para tablet horizontal con catálogo interactivo, fichas multimedia, juegos educativos, plano de salas y acceso seguro mediante QR."
    : "A kiosk experience optimized for landscape tablets was developed with an interactive catalog, multimedia exhibit pages, educational games, room maps, and secure QR access.",

  highlights: isEs
    ? [
        "Optimizado para tablet horizontal.",
        "Acceso protegido mediante QR dinámico.",
        "Catálogo interactivo de piezas.",
        "Plano de salas interactivo.",
        "Juego Memoria personalizado.",
        "Juego Puzzle personalizado.",
        "Experiencia multilingüe ES/EN.",
        "Contenido multimedia administrable.",
      ]
    : [
        "Landscape tablet optimized.",
        "Secure dynamic QR access.",
        "Interactive exhibit catalog.",
        "Interactive room map.",
        "Custom Memory Game.",
        "Custom Puzzle Game.",
        "ES/EN multilingual experience.",
        "Manageable multimedia content.",
      ],

  businessValue: isEs
    ? [
        "Aplicable a museos y centros culturales.",
        "Adaptable a ferias, exposiciones y eventos.",
        "Reduce dependencia de material impreso.",
        "Mejora la experiencia educativa e interactiva.",
      ]
    : [
        "Applicable to museums and cultural centers.",
        "Adaptable to fairs, exhibitions, and events.",
        "Reduces dependency on printed materials.",
        "Improves educational and interactive experiences.",
      ],

  nextSteps: isEs
    ? [
        "Integración con audio guía.",
        "Analytics de interacción.",
        "Realidad aumentada.",
        "Versiones para múltiples sedes.",
      ]
    : [
        "Audio guide integration.",
        "Interaction analytics.",
        "Augmented reality.",
        "Multi-location deployment.",
      ],

  seoKeywords: isEs
    ? [
        "Kiosco interactivo",
        "Museo digital",
        "Next.js",
        "Tablet interactiva",
        "Experiencia cultural",
        "Museo Canario",
        "Juego educativo",
        "Plano interactivo",
      ]
    : [
        "Interactive kiosk",
        "Digital museum",
        "Next.js",
        "Interactive tablet",
        "Cultural experience",
        "Educational game",
        "Interactive map",
      ],

  requestHref: "/go/request-access/kiosco",

  commercial: {
    availableFor: isEs
      ? [
          "Implementación",
          "Adaptación",
          "White-label",
        ]
      : [
          "Deployment",
          "Adaptation",
          "White-label",
        ],

    pricingModel: isEs
      ? "Proyecto a medida o adaptación institucional"
      : "Custom project or institutional adaptation",

    targetAudience: isEs
      ? [
          "Museos",
          "Centros culturales",
          "Turismo",
          "Educación",
          "Exposiciones",
        ]
      : [
          "Museums",
          "Cultural centers",
          "Tourism",
          "Education",
          "Exhibitions",
        ],

    contactLabel: isEs
      ? "Solicitar propuesta"
      : "Request proposal",
  },
},


{
  slug: "museo",

  title: "Museo Canario Web",

  subtitle: isEs
    ? "Sitio institucional bilingüe para museo y gestión cultural"
    : "Bilingual institutional website for museum and cultural management",

  status: isEs ? "Web · Live" : "Web · Live",

  summary: isEs
    ? "Sitio web institucional bilingüe desarrollado para el Museo Canario, con contenido dinámico, catálogo de piezas, galería, noticias, secciones culturales y base preparada para integrarse con el ecosistema del kiosco interactivo."
    : "Bilingual institutional website developed for Museo Canario, featuring dynamic content, exhibit catalog, gallery, news, cultural sections, and a foundation prepared to integrate with the interactive kiosk ecosystem.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Cloudinary",
    "Vercel",
    "Cloudflare",
  ],

  heroImage: "/screenshots/museo-1.webp",

  screenshots: [
    {
      src: "/screenshots/museo-1.webp",
      alt: isEs
        ? "Museo Canario Web — Inicio"
        : "Museo Canario Website — Home",
    },
    {
      src: "/screenshots/museo-2.webp",
      alt: isEs
        ? "Museo Canario Web — Sección cultural"
        : "Museo Canario Website — Cultural section",
    },
    {
      src: "/screenshots/museo-3.webp",
      alt: isEs
        ? "Museo Canario Web — Contenido institucional"
        : "Museo Canario Website — Institutional content",
    },
    {
      src: "/screenshots/museo-4.webp",
      alt: isEs
        ? "Museo Canario Web — Galería y piezas"
        : "Museo Canario Website — Gallery and exhibits",
    },
    {
      src: "/screenshots/museo-5.webp",
      alt: isEs
        ? "Museo Canario Web — Secciones principales"
        : "Museo Canario Website — Main sections",
    },
  ],

  problem: isEs
    ? "El museo necesitaba una presencia digital moderna, bilingüe y administrable para presentar su historia, piezas, actividades y contenido cultural de forma clara y accesible."
    : "The museum needed a modern, bilingual, and manageable digital presence to present its history, exhibits, activities, and cultural content in a clear and accessible way.",

  solution: isEs
    ? "Se desarrolló un sitio web institucional con Next.js, estructura bilingüe ES/EN, contenido dinámico, galería multimedia, integración con Cloudinary, SEO técnico y despliegue en Vercel con Cloudflare."
    : "An institutional website was built with Next.js, ES/EN bilingual structure, dynamic content, multimedia gallery, Cloudinary integration, technical SEO, and deployment on Vercel with Cloudflare.",

  highlights: isEs
    ? [
        "Sitio institucional bilingüe ES/EN.",
        "Contenido dinámico administrable.",
        "Catálogo y galería multimedia.",
        "Integración con Cloudinary para imágenes.",
        "SEO técnico, OpenGraph y despliegue productivo.",
        "Infraestructura Vercel + Cloudflare.",
        "Base integrada con el ecosistema del kiosco interactivo.",
      ]
    : [
        "ES/EN bilingual institutional website.",
        "Manageable dynamic content.",
        "Catalog and multimedia gallery.",
        "Cloudinary image integration.",
        "Technical SEO, OpenGraph, and production deployment.",
        "Vercel + Cloudflare infrastructure.",
        "Foundation integrated with the interactive kiosk ecosystem.",
      ],

  businessValue: isEs
    ? [
        "Mejora la presencia digital institucional.",
        "Permite administrar contenido cultural sin depender de cambios manuales en código.",
        "Funciona como puerta de entrada al museo físico y al kiosco interactivo.",
        "Base reutilizable para otros museos, asociaciones o centros culturales.",
      ]
    : [
        "Improves institutional digital presence.",
        "Allows cultural content management without manual code changes.",
        "Works as an entry point to the physical museum and interactive kiosk.",
        "Reusable foundation for other museums, associations, or cultural centers.",
      ],

  nextSteps: isEs
    ? [
        "Ampliar catálogo público.",
        "Agregar agenda avanzada de actividades.",
        "Mejorar analítica de visitas.",
        "Integrar más contenidos multimedia.",
      ]
    : [
        "Expand public catalog.",
        "Add advanced event agenda.",
        "Improve visit analytics.",
        "Integrate more multimedia content.",
      ],

  seoKeywords: isEs
    ? [
        "Museo digital",
        "Sitio web institucional",
        "Next.js",
        "Web bilingüe",
        "Gestión cultural",
        "Cloudinary",
        "Museo Canario",
        "Catálogo digital",
      ]
    : [
        "Digital museum",
        "Institutional website",
        "Next.js",
        "Bilingual website",
        "Cultural management",
        "Cloudinary",
        "Museum website",
        "Digital catalog",
      ],

  requestHref: "/go/request-access/museo",

  commercial: {
    availableFor: isEs
      ? ["Implementación", "Adaptación", "Proyecto a medida"]
      : ["Deployment", "Adaptation", "Custom project"],

    pricingModel: isEs
      ? "Proyecto institucional a medida o adaptación para centros culturales"
      : "Custom institutional project or adaptation for cultural centers",

    targetAudience: isEs
      ? [
          "Museos",
          "Asociaciones culturales",
          "Centros educativos",
          "Instituciones",
          "Archivos y bibliotecas",
        ]
      : [
          "Museums",
          "Cultural associations",
          "Educational centers",
          "Institutions",
          "Archives and libraries",
        ],

    contactLabel: isEs ? "Solicitar propuesta web" : "Request web proposal",
  },
},

{
  slug: "sociedad-canarias-uy",
  title: "Sociedad Islas Canarias Uruguay",
  subtitle: isEs
    ? "Sitio institucional bilingüe para asociación cultural"
    : "Bilingual institutional website for a cultural association",
  status: isEs ? "Web · Live" : "Web · Live",
  summary: isEs
    ? "Sitio institucional desarrollado para la Sociedad Islas Canarias Uruguay, con contenido cultural, historia, eventos, galería, administración y estructura bilingüe."
    : "Institutional website built for Sociedad Islas Canarias Uruguay, featuring cultural content, history, events, gallery, administration, and bilingual structure.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Vercel",
    "Cloudflare",
  ],
  heroImage: "/screenshots/sociedad-canarias-1.webp",
    screenshots: [
    {
      src: "/screenshots/sociedad-canarias-1.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Home"
        : "Sociedad Islas Canarias Uruguay — Home",
    },
    {
      src: "/screenshots/sociedad-canarias-2.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Historia"
        : "Sociedad Islas Canarias Uruguay — History",
    },
    {
      src: "/screenshots/sociedad-canarias-3.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Eventos"
        : "Sociedad Islas Canarias Uruguay — Events",
    },
    {
      src: "/screenshots/sociedad-canarias-4.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Galería"
        : "Sociedad Islas Canarias Uruguay — Gallery",
    },
	
	{
      src: "/screenshots/sociedad-canarias-5.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Noticias"
        : "Sociedad Islas Canarias Uruguay — News",
    },
	
	{
      src: "/screenshots/sociedad-canarias-6.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Experiencia"
        : "Sociedad Islas Canarias Uruguay — Experience",
    },
	
	{
      src: "/screenshots/sociedad-canarias-7.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Contacto"
        : "Sociedad Islas Canarias Uruguay — Contact",
    },
	
		{
      src: "/screenshots/sociedad-canarias-8.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Dashboard Administrador"
        : "Sociedad Islas Canarias Uruguay — Administrator Dashboard",
    },
	
		{
      src: "/screenshots/sociedad-canarias-9.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Noticias Administrador"
        : "Sociedad Islas Canarias Uruguay — Administrator News",
    },
	
		{
      src: "/screenshots/sociedad-canarias-10.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Eventos Administrador"
        : "Sociedad Islas Canarias Uruguay — Administrator Events",
    },
	
		{
      src: "/screenshots/sociedad-canarias-11.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Galeria Administrador"
        : "Sociedad Islas Canarias Uruguay — Administrator Gallery",
    },
	
		{
      src: "/screenshots/sociedad-canarias-12.webp",
      alt: isEs
        ? "Sociedad Islas Canarias Uruguay — Talleres Administrador"
        : "Sociedad Islas Canarias Uruguay — Administrator Workshops",
    },
  ],
  problem: isEs
    ? "La institución necesitaba una presencia digital moderna para comunicar su historia, actividades, eventos y contenido cultural de forma clara, accesible y administrable."
    : "The institution needed a modern digital presence to communicate its history, activities, events, and cultural content in a clear, accessible, and manageable way.",
  solution: isEs
    ? "Se desarrolló un sitio institucional responsive con Next.js, estructura bilingüe, secciones culturales, eventos, galería, contenido administrable, SEO técnico y despliegue productivo."
    : "A responsive institutional website was built with Next.js, bilingual structure, cultural sections, events, gallery, manageable content, technical SEO, and production deployment.",
  highlights: isEs
    ? [
        "Sitio institucional moderno y responsive.",
        "Contenido bilingüe ES/EN.",
        "Secciones culturales, historia y eventos.",
        "Galería multimedia.",
        "Panel administrativo para contenido.",
        "SEO técnico y OpenGraph.",
        "Deploy con Vercel + Cloudflare.",
      ]
    : [
        "Modern and responsive institutional website.",
        "ES/EN bilingual content.",
        "Cultural sections, history, and events.",
        "Multimedia gallery.",
        "Admin panel for content.",
        "Technical SEO and OpenGraph.",
        "Deployment with Vercel + Cloudflare.",
      ],
  businessValue: isEs
    ? [
        "Mejora la presencia digital institucional.",
        "Facilita la comunicación de actividades y eventos.",
        "Permite administrar contenido sin depender de cambios manuales.",
        "Base reutilizable para asociaciones, instituciones y centros culturales.",
      ]
    : [
        "Improves institutional digital presence.",
        "Makes it easier to communicate activities and events.",
        "Allows content management without manual code changes.",
        "Reusable foundation for associations, institutions, and cultural centers.",
      ],
  nextSteps: isEs
    ? [
        "Ampliar contenido histórico.",
        "Mejorar agenda de eventos.",
        "Agregar más recursos multimedia.",
        "Optimizar SEO por secciones culturales.",
      ]
    : [
        "Expand historical content.",
        "Improve the events agenda.",
        "Add more multimedia resources.",
        "Optimize SEO for cultural sections.",
      ],
  seoKeywords: isEs
    ? [
        "sitio institucional",
        "asociación cultural",
        "Next.js Uruguay",
        "web bilingüe",
        "gestión de eventos",
        "Sociedad Islas Canarias Uruguay",
      ]
    : [
        "institutional website",
        "cultural association",
        "Next.js Uruguay",
        "bilingual website",
        "event management",
        "Sociedad Islas Canarias Uruguay",
      ],
  requestHref: "/go/request-access/sociedad-canarias-uy",
  commercial: {
    availableFor: isEs
      ? ["Proyecto institucional", "Adaptación", "Implementación"]
      : ["Institutional project", "Adaptation", "Deployment"],
    pricingModel: isEs
      ? "Proyecto institucional a medida"
      : "Custom institutional project",
    targetAudience: isEs
      ? ["Asociaciones", "Instituciones", "Centros culturales", "Organizaciones"]
      : ["Associations", "Institutions", "Cultural centers", "Organizations"],
    contactLabel: isEs
      ? "Solicitar propuesta institucional"
      : "Request institutional proposal",
  },
},
{
  slug: "marketplace",

  title: isEs
    ? "Marketplace de Servicios"
    : "Services Marketplace",

  subtitle: isEs
    ? "Plataforma tipo Uber/Fiverr para conectar clientes y profesionales"
    : "Uber/Fiverr-style platform connecting clients and service providers",

  status: isEs
    ? "Mobile + Backend · White-label Ready"
    : "Mobile + Backend · White-label Ready",

  summary: isEs
    ? "Marketplace full stack que permite conectar clientes y profesionales mediante solicitudes, chat en tiempo real y gestión de servicios. Diseñado como base reutilizable para múltiples industrias."
    : "Full-stack marketplace connecting clients and professionals through service requests, real-time chat, and service management. Designed as a reusable foundation for multiple industries.",

  stack: [
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Admin Panel"
  ],

  heroImage: "/screenshots/marketplace-1.webp",

  screenshots: [
    {
      src: "/screenshots/marketplace-1.webp",
      alt: isEs
        ? "Marketplace — Inicio"
        : "Marketplace — Home",
    },
    {
      src: "/screenshots/marketplace-2.webp",
      alt: isEs
        ? "Marketplace — Solicitudes"
        : "Marketplace — Requests",
    },
    {
      src: "/screenshots/marketplace-3.webp",
      alt: isEs
        ? "Marketplace — Chat"
        : "Marketplace — Chat",
    },
    {
      src: "/screenshots/marketplace-4.webp",
      alt: isEs
        ? "Marketplace — Proveedores"
        : "Marketplace — Providers",
    },
    {
      src: "/screenshots/marketplace-5.webp",
      alt: isEs
        ? "Marketplace — Gestión"
        : "Marketplace — Management",
    },
  ],

  problem: isEs
    ? "Muchos sectores necesitan conectar clientes y proveedores de forma simple, rápida y trazable."
    : "Many industries need a simple, fast, and traceable way to connect clients and service providers.",

  solution: isEs
    ? "Se desarrolló una arquitectura marketplace con aplicación móvil, backend, autenticación, solicitudes, chat en tiempo real y roles diferenciados para clientes y proveedores."
    : "A marketplace architecture was developed with mobile app, backend, authentication, requests, real-time chat, and separate client/provider roles.",

  highlights: isEs
    ? [
        "Roles Cliente y Proveedor.",
        "Creación y gestión de solicitudes.",
        "Chat en tiempo real mediante Socket.IO.",
        "Backend Node.js + MongoDB.",
        "Autenticación JWT.",
        "Arquitectura white-label reutilizable.",
        "Preparado para pagos y monetización.",
      ]
    : [
        "Client and Provider roles.",
        "Request creation and management.",
        "Real-time chat using Socket.IO.",
        "Node.js + MongoDB backend.",
        "JWT authentication.",
        "Reusable white-label architecture.",
        "Ready for payments and monetization.",
      ],

  businessValue: isEs
    ? [
        "Aplicable a múltiples industrias.",
        "Reduce tiempo de desarrollo de nuevos marketplaces.",
        "Base sólida para modelos tipo Uber, Fiverr o servicios locales.",
        "Preparado para escalar comercialmente.",
      ]
    : [
        "Applicable across multiple industries.",
        "Reduces development time for new marketplaces.",
        "Strong foundation for Uber, Fiverr, or local services models.",
        "Ready for commercial scaling.",
      ],

  nextSteps: isEs
    ? [
        "Integrar pagos online.",
        "Agregar notificaciones push.",
        "Incorporar geolocalización avanzada.",
        "Expandir panel administrativo.",
      ]
    : [
        "Integrate online payments.",
        "Add push notifications.",
        "Add advanced geolocation.",
        "Expand admin panel.",
      ],

  seoKeywords: isEs
    ? [
        "Marketplace",
        "React Native",
        "Node.js",
        "MongoDB",
        "Servicios",
        "Socket.IO",
        "White-label",
        "Uber clone",
        "Fiverr clone",
      ]
    : [
        "Marketplace",
        "React Native",
        "Node.js",
        "MongoDB",
        "Services",
        "Socket.IO",
        "White-label",
        "Uber clone",
        "Fiverr clone",
      ],

  requestHref: "/go/request-access/marketplace",

  commercial: {
    availableFor: isEs
      ? [
          "White-label",
          "Implementación",
          "Licenciamiento",
        ]
      : [
          "White-label",
          "Deployment",
          "Licensing",
        ],

    pricingModel: isEs
      ? "White-label o implementación dedicada"
      : "White-label or dedicated deployment",

    targetAudience: isEs
      ? [
          "Servicios profesionales",
          "Oficios",
          "Delivery",
          "Marketplace local",
          "Startups",
        ]
      : [
          "Professional services",
          "Trades",
          "Delivery",
          "Local marketplace",
          "Startups",
        ],

    contactLabel: isEs
      ? "Solicitar información comercial"
      : "Request commercial information",
  },
},


	{
  slug: "sg-saas-starter",

  title: "SG SaaS Starter Pro",

  subtitle: isEs
    ? "Starter kit full stack para acelerar productos SaaS, CRM y plataformas administrativas"
    : "Full-stack starter kit for faster SaaS, CRM and admin platform development",

  status: isEs
    ? "Producto digital · Pro · SG Hub Market"
    : "Digital Product · Pro · SG Hub Market",

  summary: isEs
    ? "SG SaaS Starter Pro es una base full stack comercial desarrollada por Santiago Gretter Software Studio para acelerar la creación de productos SaaS, dashboards administrativos, CRM, backoffices, herramientas internas y aplicaciones multiusuario. Incluye autenticación JWT, organizaciones, roles y permisos, analytics, activity logs, notificaciones persistentes y realtime, configuración de workspace y una arquitectura modular con frontend y backend separados."
    : "SG SaaS Starter Pro is a commercial full-stack foundation developed by Santiago Gretter Software Studio to accelerate SaaS products, admin dashboards, CRMs, backoffices, internal tools and multi-user applications. It includes JWT authentication, organizations, roles and permissions, analytics, activity logs, persistent and real-time notifications, workspace settings, and a modular architecture with separate frontend and backend applications.",

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Socket.IO",
    "Recharts",
  ],

  heroImage: "/screenshots/sg-saas-starter-1.webp",

  screenshots: [
    {
      src: "/screenshots/sg-saas-starter-1.webp",
      alt: isEs
        ? "SG SaaS Starter Pro — Dashboard administrativo"
        : "SG SaaS Starter Pro — Admin dashboard",
    },
    {
      src: "/screenshots/sg-saas-starter-2.webp",
      alt: isEs
        ? "SG SaaS Starter Pro — Gestión de usuarios"
        : "SG SaaS Starter Pro — User management",
    },
    {
      src: "/screenshots/sg-saas-starter-3.webp",
      alt: isEs
        ? "SG SaaS Starter Pro — Activity logs"
        : "SG SaaS Starter Pro — Activity logs",
    },
    {
      src: "/screenshots/sg-saas-starter-4.webp",
      alt: isEs
        ? "SG SaaS Starter Pro — Notificaciones"
        : "SG SaaS Starter Pro — Notifications",
    },
    {
      src: "/screenshots/sg-saas-starter-5.webp",
      alt: isEs
        ? "SG SaaS Starter Pro — Configuración de workspace"
        : "SG SaaS Starter Pro — Workspace settings",
    },
  ],

  problem: isEs
    ? "Crear un producto SaaS desde cero obliga a repetir módulos fundamentales como autenticación, usuarios, roles, permisos, dashboards, organizaciones, métricas, logs y notificaciones antes de poder trabajar en la funcionalidad específica del negocio."
    : "Building a SaaS product from scratch requires repeatedly implementing core modules such as authentication, users, roles, permissions, dashboards, organizations, analytics, logs and notifications before work can begin on the product's specific business functionality.",

  solution: isEs
    ? "Se desarrolló una arquitectura full stack reutilizable con frontend Next.js y backend Node.js/Express separados, MongoDB para persistencia, autenticación JWT, organizaciones y workspaces, roles avanzados, helpers de permisos, dashboard con analytics, activity logs y notificaciones persistentes y realtime mediante Socket.IO."
    : "A reusable full-stack architecture was built with separate Next.js frontend and Node.js/Express backend applications, MongoDB persistence, JWT authentication, organizations and workspaces, advanced roles, permission helpers, dashboard analytics, activity logs, and persistent and real-time notifications through Socket.IO.",

  highlights: isEs
    ? [
        "Frontend independiente con Next.js, React, TypeScript y Tailwind CSS.",
        "Backend separado con Node.js, Express, TypeScript, MongoDB y Mongoose.",
        "Autenticación JWT y rutas protegidas.",
        "Gestión completa de usuarios con búsqueda, filtros y paginación.",
        "Roles admin, manager, member y viewer.",
        "Sistema reutilizable de permisos en frontend y backend.",
        "Organizaciones, workspaces y base arquitectónica multi-tenant.",
        "Dashboard administrativo con KPIs, métricas y gráficos.",
        "Analytics y visualizaciones mediante Recharts.",
        "Activity logs con filtros y exportación.",
        "Notificaciones persistentes almacenadas en MongoDB.",
        "Notificaciones realtime mediante Socket.IO.",
        "Configuración de workspace, branding y preferencias.",
        "Seed demo con organizaciones, usuarios, actividad y notificaciones.",
        "Documentación técnica de instalación, arquitectura, personalización y deployment.",
        "Código fuente completo y licencia comercial.",
      ]
    : [
        "Independent frontend built with Next.js, React, TypeScript and Tailwind CSS.",
        "Separate backend built with Node.js, Express, TypeScript, MongoDB and Mongoose.",
        "JWT authentication and protected routes.",
        "Complete user management with search, filters and pagination.",
        "Admin, manager, member and viewer roles.",
        "Reusable permission system across frontend and backend.",
        "Organizations, workspaces and a multi-tenant architectural foundation.",
        "Admin dashboard with KPIs, metrics and charts.",
        "Analytics and visualizations powered by Recharts.",
        "Activity logs with filters and export support.",
        "Persistent notifications stored in MongoDB.",
        "Real-time notifications through Socket.IO.",
        "Workspace settings, branding and preferences.",
        "Demo seed with organizations, users, activity and notifications.",
        "Technical documentation for installation, architecture, customization and deployment.",
        "Complete source code and commercial license.",
      ],

  businessValue: isEs
    ? [
        "Reduce el tiempo dedicado a desarrollar infraestructura repetitiva de productos SaaS.",
        "Permite comenzar desde una arquitectura funcional en lugar de una aplicación vacía.",
        "Sirve como base para SaaS B2B, CRM, dashboards, backoffices y herramientas internas.",
        "Puede utilizarse en proyectos propios o desarrollos para clientes según la licencia incluida.",
        "La separación frontend/backend facilita adaptar y desplegar cada capa de forma independiente.",
        "La estructura modular permite extender el producto con nuevos módulos y lógica específica de negocio.",
      ]
    : [
        "Reduces the time spent rebuilding repetitive SaaS infrastructure.",
        "Lets developers start from a functional architecture instead of an empty application.",
        "Works as a foundation for B2B SaaS products, CRMs, dashboards, backoffices and internal tools.",
        "Can be used for personal products or client work under the included license.",
        "The separated frontend/backend architecture makes each layer easier to adapt and deploy independently.",
        "Its modular structure allows new modules and business-specific logic to be added progressively.",
      ],

  nextSteps: isEs
    ? [
        "Ampliar módulos reutilizables para distintos tipos de SaaS.",
        "Agregar integraciones opcionales de billing y pagos.",
        "Continuar fortaleciendo aislamiento multi-tenant y controles de seguridad para escenarios productivos.",
        "Mantener documentación, compatibilidad y relación Lite/Pro actualizadas.",
      ]
    : [
        "Expand reusable modules for different SaaS use cases.",
        "Add optional billing and payment integrations.",
        "Continue strengthening multi-tenant isolation and security controls for production scenarios.",
        "Keep documentation, compatibility and Lite/Pro relationships up to date.",
      ],

  seoKeywords: isEs
    ? [
        "SG SaaS Starter Pro",
        "SaaS Starter",
        "Next.js SaaS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Socket.IO",
        "Recharts",
        "Dashboard administrativo",
        "CRM",
        "Multi-tenant",
        "Starter kit full stack",
      ]
    : [
        "SG SaaS Starter Pro",
        "SaaS Starter",
        "Next.js SaaS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Socket.IO",
        "Recharts",
        "Admin dashboard",
        "CRM",
        "Multi-tenant",
        "Full-stack starter kit",
      ],

  requestHref:
    "https://www.sghub.com.uy/market/sg-saas-starter-pro",

  commercial: {
    availableFor: isEs
      ? [
          "Compra directa",
          "Licencia comercial",
          "Proyectos propios",
          "Proyectos para clientes",
          "Personalización",
        ]
      : [
          "Direct purchase",
          "Commercial license",
          "Own products",
          "Client projects",
          "Customization",
        ],

    pricingModel: isEs
      ? "Licencia comercial mediante SG Hub Market"
      : "Commercial license through SG Hub Market",

    targetAudience: isEs
      ? [
          "Desarrolladores",
          "Freelancers",
          "Agencias",
          "Startups",
          "Emprendedores SaaS",
          "Equipos de producto",
        ]
      : [
          "Developers",
          "Freelancers",
          "Agencies",
          "Startups",
          "SaaS entrepreneurs",
          "Product teams",
        ],

    contactLabel: isEs
      ? "Comprar SG SaaS Starter Pro"
      : "Buy SG SaaS Starter Pro",
  },
},


{
  slug: "intranet",

  title: "Intranet WordPress",

  subtitle: isEs
    ? "Portal interno corporativo para gestión y comunicación"
    : "Corporate internal portal for management and communication",

  status: isEs
    ? "Proyecto interno · Producción"
    : "Internal Project · Production",

  summary: isEs
    ? "Portal corporativo desarrollado sobre WordPress para centralizar información interna, documentación, procesos y comunicación entre equipos."
    : "Corporate portal developed on WordPress to centralize internal information, documentation, processes, and communication between teams.",

  stack: [
    "WordPress",
    "PHP",
    "MySQL",
    "JavaScript",
    "CSS",
    "Hosting"
  ],

  heroImage: "/screenshots/intranet-1.webp",

  screenshots: [
    {
      src: "/screenshots/intranet-1.webp",
      alt: isEs
        ? "Intranet WordPress — Portal interno"
        : "WordPress Intranet — Internal portal",
    },
  ],

  problem: isEs
    ? "La organización necesitaba centralizar documentación, noticias internas y procesos en una única plataforma."
    : "The organization needed to centralize documentation, internal news, and processes in a single platform.",

  solution: isEs
    ? "Se implementó una intranet corporativa basada en WordPress con gestión de contenido, accesos internos y organización de documentación."
    : "A corporate intranet based on WordPress was implemented with content management, internal access, and document organization.",

  highlights: isEs
    ? [
        "Portal interno corporativo.",
        "Gestión documental.",
        "Comunicación interna.",
        "Control de acceso.",
        "Administración sencilla."
      ]
    : [
        "Corporate internal portal.",
        "Document management.",
        "Internal communication.",
        "Access control.",
        "Easy administration."
      ],

  businessValue: isEs
    ? [
        "Centraliza información interna.",
        "Reduce dependencia de correos.",
        "Mejora acceso a documentación.",
        "Facilita comunicación organizacional."
      ]
    : [
        "Centralizes internal information.",
        "Reduces email dependency.",
        "Improves document access.",
        "Facilitates organizational communication."
      ],

  nextSteps: isEs
    ? [
        "Integraciones corporativas.",
        "Flujos de aprobación.",
        "Automatización documental."
      ]
    : [
        "Corporate integrations.",
        "Approval workflows.",
        "Document automation."
      ],

  seoKeywords: isEs
    ? [
        "Intranet",
        "WordPress",
        "Portal corporativo",
        "Gestión documental",
        "Comunicación interna"
      ]
    : [
        "Intranet",
        "WordPress",
        "Corporate portal",
        "Document management",
        "Internal communication"
      ],

  requestHref: "/go/request-access/intranet",

  commercial: {
    availableFor: isEs
      ? ["Implementación", "Adaptación"]
      : ["Deployment", "Adaptation"],

    pricingModel: isEs
      ? "Proyecto corporativo a medida"
      : "Custom corporate project",

    targetAudience: isEs
      ? [
          "Empresas",
          "Organizaciones",
          "Instituciones"
        ]
      : [
          "Companies",
          "Organizations",
          "Institutions"
        ],

    contactLabel: isEs
      ? "Consultar solución corporativa"
      : "Inquire about corporate solution",
  },
},
  ];
}

export function getCaseStudy(lang: Lang, slug: string) {
  return getCaseStudies(lang).find((item) => item.slug === slug);
}
