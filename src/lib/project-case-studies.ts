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
	
  ];
}

export function getCaseStudy(lang: Lang, slug: string) {
  return getCaseStudies(lang).find((item) => item.slug === slug);
}
