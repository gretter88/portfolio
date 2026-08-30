//src/lib/i18n.ts
export type Lang = "es" | "en";
export const LANGS: Lang[] = ["es", "en"];

export const LINKS = {
  github: "https://github.com/gretter88",
  linkedin: "https://www.linkedin.com/in/santiago-gretter",
  email: "mailto:gretter88@gmail.com",
  emailText: "gretter88@gmail.com",
  whatsapp: "https://wa.me/59899204797",
  calendly: "https://calendly.com/gretter88/intro-call-santiago-gretter",
};

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  image?: { src: string; alt: string };
  links?: { demo?: string; repo?: string };
  badge?: string;
  order?: number;
  screenshots?: { src: string; alt: string }[];
  features?: string[];
  video?: { provider: "youtube"; id: string; label?: string; duration?: string };

  downloadLinks?: {
    apk?: string;
    playTesting?: string;
    apkLabel?: string;
    playLabel?: string;
    note?: string;
  };

  statusNote?: string;
};




export function t(lang: Lang) {
  const isEs = lang === "es";

const projects: Project[] = [
{
  order: 0,
  title: "SG Hub",
  desc: isEs
    ? "Ecosistema digital full stack en producción que integra herramientas online, marketplace multi-autor de recursos digitales, productos propios, blog, directorio de IA y procesamiento avanzado de documentos. Incluye pagos, autores, ventas, liquidaciones, promociones, analytics, notificaciones, almacenamiento cloud y workers asíncronos."
    : "Production full-stack digital ecosystem combining online tools, a multi-author digital resources marketplace, proprietary products, blog, AI directory, and advanced document processing. It includes payments, authors, sales, payouts, promotions, analytics, notifications, cloud storage, and asynchronous workers.",
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
  image: {
  src: "/screenshots/sghub-1.webp",
  alt: isEs
    ? "SG Hub — Ecosistema digital de herramientas, Market, IA y recursos"
    : "SG Hub — Digital ecosystem for tools, Market, AI, and resources",
},

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
  links: {
    demo: "https://www.sghub.com.uy",
    repo: "",
  },
  badge: isEs
    ? "Web: Live · Marketplace + Tools"
    : "Web: Live · Marketplace + Tools",
  statusNote: isEs
    ? "Estado actual: plataforma en producción con herramientas online, marketplace multi-autor, pagos con Mercado Pago, productos digitales, analytics y procesamiento de documentos mediante API + workers."
    : "Current status: production platform with online tools, multi-author marketplace, Mercado Pago payments, digital products, analytics, and document processing through an API + workers.",
  features: isEs
    ? [
        "Ecosistema web en producción desarrollado con Next.js y TypeScript",
        "Marketplace de recursos digitales gratuitos y pagos",
        "Arquitectura multi-autor con solicitud, validación y aprobación administrativa",
        "Panel de autor con ventas, vistas, descargas, conversión y actividad",
        "Sistema de ganancias y solicitudes de liquidación para autores",
        "Pagos integrados con Mercado Pago y soporte UYU/USD",
        "Cupones, promociones públicas y recursos destacados",
        "Productos oficiales SG Hub con versiones, changelog y relaciones Lite/Pro",
        "Centro de notificaciones para usuarios, autores y administradores",
        "Herramientas online orientadas a SEO y adquisición orgánica",
        "Procesamiento de PDF mediante API Node/Express y workers BullMQ",
        "OCR con OCRmyPDF y Tesseract en español e inglés",
        "Redis para colas y MongoDB para persistencia",
        "Cloudflare R2 para almacenamiento de archivos mediante URLs firmadas",
        "Infraestructura distribuida entre Vercel, Render y Cloudflare",
        "Google Analytics, Search Console y monetización con AdSense",
      ]
    : [
        "Production web ecosystem built with Next.js and TypeScript",
        "Marketplace for free and paid digital resources",
        "Multi-author architecture with application, verification, and admin approval",
        "Author dashboard with sales, views, downloads, conversion, and activity",
        "Author earnings and payout request system",
        "Mercado Pago integration with UYU/USD support",
        "Coupons, public promotions, and featured resources",
        "Official SG Hub products with versions, changelog, and Lite/Pro relationships",
        "Notification center for users, authors, and administrators",
        "Online tools focused on SEO and organic acquisition",
        "PDF processing through a Node/Express API and BullMQ workers",
        "OCR using OCRmyPDF and Tesseract in Spanish and English",
        "Redis queues and MongoDB persistence",
        "Cloudflare R2 storage through signed URLs",
        "Distributed infrastructure across Vercel, Render, and Cloudflare",
        "Google Analytics, Search Console, and AdSense monetization",
      ],
},

{
  order: 1,
  title: "RadarSocial",
  desc: isEs
    ? "Plataforma full stack en producción con versión web activa y app Android en Google Play Closed Testing. Combina red social + servicios en tiempo real dentro del mismo producto, con chat, mapas, BLE, audio, videollamadas, notificaciones push, monetización mobile y backend escalable."
    : "Full-stack platform with a live web version and an Android app currently in Google Play Closed Testing. It combines social + services experiences in a single product, including chat, maps, BLE, audio, video calls, push notifications, mobile monetization, and a scalable backend.",
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
  links: {
    demo: "https://radarsocial.com.uy/",
    repo: "",
  },
 downloadLinks: {
  playTesting: "https://play.google.com/apps/testing/com.testlinking",
  playLabel: isEs ? "Solicitar acceso beta" : "Request beta access",
  note: isEs
    ? "Versión Android actualmente en Google Play Closed Testing. Acceso disponible bajo solicitud."
    : "Android version currently in Google Play Closed Testing. Access available upon request.",
},

  statusNote: isEs
    ? "Estado actual: Web en producción · Android en Closed Testing · Backend en vivo"
    : "Current status: Web in production · Android in Closed Testing · Backend live",
  badge: isEs
    ? "Web: Live · Android: Google Play Closed Testing"
    : "Web: Live · Android: Google Play Closed Testing",
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
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-6.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-7.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-8.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-9.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-10.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-11.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-12.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
    },
    {
      src: "/screenshots/radarsocial-app-13.webp",
      alt: isEs
        ? "RadarSocial — App / Vista mobile"
        : "RadarSocial — App / Mobile view",
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
      src: "/screenshots/radarsocial-2-1.webp",
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
	 {
      src: "/screenshots/radarsocial-5.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-6.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-7.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-8.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-9.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-10.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-11.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-12.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / UX",
    },
	{
      src: "/screenshots/radarsocial-13.webp",
      alt: isEs
        ? "RadarSocial — Web / Inicio / UX"
        : "RadarSocial — Web / Home / ux",
    },
	
	
  ],
  features: isEs
    ? [
        "Producto full stack con versión web activa y app Android en Google Play Closed Testing",
        "Plataforma con dos experiencias dentro de la misma app: modo social y modo servicio",
        "Registro y login con email/password + acceso con Google",
        "Verificación de cuenta por email en el flujo de registro tradicional",
        "Personalización de perfil con selección de avatar y uso automático de foto de Google",
        "Chat 1:1 en tiempo real (Socket.IO) con estados: online / escribiendo / no leídos / leídos",
        "Mensajes de voz estilo WhatsApp, stickers y multimedia dentro del chat",
        "Llamadas de audio y videollamadas integradas al flujo del chat",
        "Notificaciones push de mensajes, llamadas y videollamadas, incluso en segundo plano o con la app cerrada",
        "Mapa con geolocalización, usuarios cercanos y servicios publicados en tiempo real",
        "Modo servicio con publicación de servicios, búsqueda en mapa y contacto cliente/proveedor",
        "Detección de proximidad por BLE con configuración de visibilidad y datos compartidos",
        "Conexión entre usuarios cercanos: guardar contacto descubierto por BLE y abrir chat en tiempo real",
        "Monetización mobile con AdMob, compras dentro de la app y plan premium sin publicidad",
        "Panel/admin interno para controlar usuarios, accesos, APIs, métricas y operación general",
        "Backend Node/Express + MongoDB con auth JWT, logs y APIs REST",
      ]
    : [
        "Full-stack product with a live web version and Android app in Google Play Closed Testing",
        "Platform with two experiences inside the same app: social mode and service mode",
        "Sign up and login with email/password + Google sign-in",
        "Email account verification in the traditional registration flow",
        "Profile personalization with avatar selection and automatic Google profile photo usage",
        "Real-time 1:1 chat (Socket.IO) with presence: online / typing / unread / read states",
        "WhatsApp-style voice messages, stickers, and rich media inside chat",
        "Audio calls and video calls integrated into the chat flow",
        "Push notifications for messages, calls, and video calls, including background and app-closed scenarios",
        "Map with geolocation, nearby users, and real-time published services",
        "Service mode with service publishing, map-based discovery, and client/provider interaction",
        "BLE proximity discovery with configurable visibility and shared profile data",
        "Nearby user connection flow: save BLE-discovered contacts and open real-time chat",
        "Mobile monetization with AdMob, in-app purchases, and a premium ad-free plan",
        "Internal admin panel to manage users, access, APIs, metrics, and overall operations",
        "Node/Express + MongoDB backend with JWT auth, logs, and REST APIs",
      ],
},



{
  order: 2,
  title: "SG Booking Pro",
  desc: isEs
    ? "Plataforma SaaS para reservas online de profesionales y pequeñas empresas. Incluye servicios, agenda, reservas públicas, confirmaciones automáticas y administración."
    : "SaaS platform for online bookings for professionals and small businesses. Includes services, scheduling, public bookings, automated confirmations, and administration.",
  stack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Resend",
    "Tailwind",
  ],
  image: {
    src: "/screenshots/sg-booking-pro-1.webp",
    alt: "SG Booking Pro",
  },
  links: {
    demo: "/go/request-access/sg-booking-pro",
  },
  badge: isEs
    ? "SaaS · MVP funcional"
    : "SaaS · Functional MVP",
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
  statusNote: isEs
  ? "Estado actual: MVP funcional con frontend en Vercel, backend Node/Express en Render, MongoDB, reservas públicas, gestión de servicios, configuración del negocio y emails automáticos con Resend."
  : "Current status: functional MVP with frontend on Vercel, Node/Express backend on Render, MongoDB, public bookings, service management, business settings, and automated emails with Resend.",
  features: isEs
  ? [
      "Plataforma SaaS para reservas online orientada a profesionales y pequeños negocios.",
      "Frontend desarrollado con Next.js, TypeScript y Tailwind.",
      "Backend Node.js/Express conectado a MongoDB.",
      "Página pública de reservas para clientes finales.",
      "Panel administrativo para gestionar servicios, reservas, clientes y datos del negocio.",
      "Configuración de horarios, datos comerciales y modalidad de confirmación.",
      "Emails automáticos para reserva pendiente y reserva confirmada usando Resend.",
      "Flujo preparado para confirmación manual o automática de reservas.",
      "Arquitectura lista para evolucionar a multiempresa, pagos online, PWA y notificaciones push.",
      "Pensado como producto SaaS licenciable, white-label o base para implementación personalizada.",
    ]
  : [
      "SaaS platform for online bookings aimed at professionals and small businesses.",
      "Frontend built with Next.js, TypeScript, and Tailwind.",
      "Node.js/Express backend connected to MongoDB.",
      "Public booking page for end customers.",
      "Admin dashboard to manage services, bookings, clients, and business information.",
      "Configuration for schedules, business data, and booking confirmation mode.",
      "Automated emails for pending and confirmed bookings using Resend.",
      "Flow prepared for manual or automatic booking confirmation.",
      "Architecture ready to evolve into multi-tenant SaaS, online payments, PWA, and push notifications.",
      "Designed as a licensable SaaS product, white-label solution, or custom deployment base.",
    ],
},





  {
  order: 3,
  title: "NutriMVP",
  desc: isEs
  ? "App mobile MVP para escanear productos, consultar información nutricional, comparar precios por supermercado y optimizar compras. Incluye historial, favoritos, alertas de precio, lista inteligente de compras, mapa de supermercados cercanos según ubicación del usuario, mapa de supermercados por producto y rutas sugeridas para comprar productos al menor precio. Integra datos desde OpenFoodFacts, Firebase/Firestore y backend propio con PostgreSQL/Supabase."
  : "Mobile MVP app to scan products, check nutrition facts, compare supermarket prices, and optimize grocery shopping. It includes scan history, favorites, price alerts, smart shopping lists, nearby supermarket maps based on user location, product-based supermarket mapping, and suggested routes to buy products at the lowest price. It integrates data from OpenFoodFacts, Firebase/Firestore, and a custom backend with PostgreSQL/Supabase.",
  stack: [
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "Firebase Auth",
    "Firestore",
    "PostgreSQL",
    "Supabase",
    "OpenFoodFacts",
  ],
  image: {
    src: "/screenshots/nutrimvp.webp",
    alt: isEs
      ? "NutriMVP — pantalla principal"
      : "NutriMVP — main screen",
  },
  links: {
    repo: "",
  },
  badge: isEs
  ? "Android MVP · Preview bajo solicitud"
  : "Android MVP · Preview upon request",


statusNote: isEs
  ? "Estado actual: MVP Android funcional · Backend en Render · Datos nutricionales + precios en integración · APK preview disponible bajo solicitud."
  : "Current status: Functional Android MVP · Backend on Render · Nutrition data + price integration · Preview APK available upon request.",


  screenshots: [
    {
      src: "/screenshots/nutrimvp-1.webp",
      alt: isEs
        ? "NutriMVP — Home / acceso principal"
        : "NutriMVP — Home / main access",
    },
    {
      src: "/screenshots/nutrimvp-2.webp",
      alt: isEs
        ? "NutriMVP — Escáner de código de barras"
        : "NutriMVP — Barcode scanner",
    },
    {
      src: "/screenshots/nutrimvp-3.webp",
      alt: isEs
        ? "NutriMVP — Resultado nutricional del producto"
        : "NutriMVP — Product nutrition result",
    },
    {
      src: "/screenshots/nutrimvp-4.webp",
      alt: isEs
        ? "NutriMVP — Comparación de precios"
        : "NutriMVP — Price comparison",
    },
    {
      src: "/screenshots/nutrimvp-5.webp",
      alt: isEs
        ? "NutriMVP — Historial, favoritos y alertas"
        : "NutriMVP — History, favorites and alerts",
    },
  ],
  features: isEs
  ? [
      "App Android MVP desarrollada con React Native y TypeScript",
      "Escaneo de productos por código de barras",
      "Consulta de información nutricional desde OpenFoodFacts y base propia",
      "Persistencia de productos y datos nutricionales en Firebase/Firestore",
      "Backend Node/Express con integración PostgreSQL/Supabase para productos, supermercados y precios",
      "Comparación de precios por supermercado y ubicación",
      "Mapa de supermercados cercanos según la ubicación del usuario",
      "Mapa de supermercados por producto escaneado o buscado",
      "Lista inteligente para detectar en qué supermercado conviene comprar",
      "Ruta inteligente para comprar productos al menor precio en distintos supermercados",
      "Optimización de compra combinando precio, supermercado y ubicación",
      "Historial de productos escaneados",
      "Sistema de favoritos, alertas de precio y lista de compras",
      "Normalización y mapeo automático de barcodes contra productos internos",
      "Arquitectura preparada para crecer hacia un producto mobile real orientado a consumo inteligente",
    ]
  : [
      "Android MVP built with React Native and TypeScript",
      "Barcode-based product scanning",
      "Nutrition data from OpenFoodFacts and internal database",
      "Product and nutrition persistence using Firebase/Firestore",
      "Node/Express backend integrated with PostgreSQL/Supabase for products, stores, and prices",
      "Supermarket and location-based price comparison",
      "Nearby supermarket map based on the user’s location",
      "Product-based supermarket map for scanned or searched items",
      "Smart shopping list to detect which supermarket is cheaper",
      "Smart route to buy products at the lowest price across different supermarkets",
      "Shopping optimization combining price, store, and location",
      "Scanned product history",
      "Favorites, price alerts, and shopping list system",
      "Automatic barcode normalization and mapping against internal products",
      "Architecture ready to evolve into a real mobile product for smart grocery decisions",
    ],

},


  
{
  order: 4,
  title: "PlayDuel",
  desc: isEs
    ? "Plataforma web full stack de duelos 1 vs 1 en tiempo real con juegos competitivos, lobby, invitaciones, matchmaking, chat por partida, historial, ranking, balance demo y lógica de resultados. Proyecto pensado como base para una plataforma de gaming competitivo con wallet y torneos."
    : "Full-stack web platform for real-time 1v1 duels with competitive games, lobby, invites, matchmaking, match chat, history, leaderboard, demo balance, and result logic. Built as a foundation for a competitive gaming platform with wallet and tournaments.",
  stack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Socket.IO",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
  ],
  image: {
    src: "/screenshots/playduel-1.webp",
    alt: isEs ? "PlayDuel — lobby principal" : "PlayDuel — main lobby",
  },
  links: {
    repo: "",
  },
  badge: isEs ? "Web App · Realtime Gaming" : "Web App · Realtime Gaming",
  statusNote: isEs
    ? "Estado actual: plataforma web funcional con juegos 1 vs 1, lobby, sockets, historial y balance demo. Preparada para evolucionar hacia torneos, wallet real y monetización."
    : "Current status: functional web platform with 1v1 games, lobby, sockets, history, and demo balance. Ready to evolve into tournaments, real wallet, and monetization.",
  screenshots: [
    {
      src: "/screenshots/playduel-1.webp",
      alt: isEs ? "PlayDuel — Lobby" : "PlayDuel — Lobby",
    },
    {
      src: "/screenshots/playduel-2.webp",
      alt: isEs ? "PlayDuel — Partida en tiempo real" : "PlayDuel — Real-time match",
    },
    {
      src: "/screenshots/playduel-3.webp",
      alt: isEs ? "PlayDuel — Juego de dados" : "PlayDuel — Dice game",
    },
    {
      src: "/screenshots/playduel-4.webp",
      alt: isEs ? "PlayDuel — Chat y resultado" : "PlayDuel — Chat and result",
    },
    {
      src: "/screenshots/playduel-5.webp",
      alt: isEs ? "PlayDuel — Ranking / historial" : "PlayDuel — Ranking / history",
    },
  ],
  features: isEs
    ? [
        "Plataforma web de juegos 1 vs 1 en tiempo real",
        "Lobby con estado en vivo, usuarios conectados e invitaciones",
        "Matchmaking rápido y partidas privadas por link de invitación",
        "Juegos implementados: TaTeTi, Piedra/Papel/Tijera, Damas, Ajedrez, Dados y Tetris Duel",
        "Sincronización realtime con Socket.IO y salas por partida",
        "Chat persistente dentro de cada match",
        "Estados de partida: turno actual, ganador, perdedor, empate y revancha",
        "Reconexion a partidas activas y recuperación de sala",
        "Balance demo actualizado automáticamente según resultados",
        "Historial de partidas y leaderboard",
        "Base preparada para torneos, wallet real, pagos y panel admin",
      ]
    : [
        "Real-time 1v1 web gaming platform",
        "Live lobby with connected users and invites",
        "Quick matchmaking and private matches via invite links",
        "Implemented games: Tic Tac Toe, Rock Paper Scissors, Checkers, Chess, Dice, and Tetris Duel",
        "Real-time synchronization with Socket.IO and match rooms",
        "Persistent chat inside each match",
        "Match states: current turn, winner, loser, draw, and rematch",
        "Reconnect flow for active matches and room recovery",
        "Demo balance automatically updated based on results",
        "Match history and leaderboard",
        "Foundation ready for tournaments, real wallet, payments, and admin panel",
      ],
},







 {
  order: 5,
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
  order: 6,
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
  order: 7,
  title: "Sociedad Islas Canarias Uruguay",
  desc: isEs
    ? "Sitio institucional bilingüe desarrollado para la Sociedad Islas Canarias Uruguay. Incluye gestión de contenido, eventos, galería, noticias, administración, SEO y experiencia responsive."
    : "Bilingual institutional website built for Sociedad Islas Canarias Uruguay. Includes content management, events, gallery, news, administration, SEO, and responsive experience.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "MongoDB",
    "Supabase",
    "Cloudflare",
    "Vercel",
  ],
  image: {
    src: "/screenshots/sociedad-canarias-1.webp",
    alt: "Sociedad Islas Canarias Uruguay",
  },
  links: {
    demo: "https://www.sociedadislascanariasuruguay.com",
  },
  badge: "Web: Live",
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
  statusNote: isEs
  ? "Estado actual: sitio institucional en producción, bilingüe, responsive, con contenido cultural, eventos, galería, administración y despliegue en Vercel/Cloudflare."
  : "Current status: institutional website in production, bilingual, responsive, with cultural content, events, gallery, administration, and deployment on Vercel/Cloudflare.",
 features: isEs
  ? [
      "Sitio institucional desarrollado con Next.js, TypeScript y Tailwind.",
      "Experiencia bilingüe ES/EN para público local e internacional.",
      "Diseño responsive adaptado a desktop, tablet y mobile.",
      "Secciones para historia, cultura, eventos, galería, contacto y contenido institucional.",
      "Panel administrativo para gestionar contenidos, eventos e imágenes.",
      "Integración con Supabase para datos y administración de contenido.",
      "Optimización SEO, metadata, OpenGraph y estructura lista para indexación.",
      "Deploy productivo con Vercel y configuración DNS/SSL mediante Cloudflare.",
      "Arquitectura preparada para seguir sumando nuevas secciones, noticias, recursos y contenido multimedia.",
      "Base reutilizable para asociaciones, instituciones culturales, museos o centros educativos.",
    ]
  : [
      "Institutional website built with Next.js, TypeScript, and Tailwind.",
      "Bilingual ES/EN experience for local and international audiences.",
      "Responsive design adapted to desktop, tablet, and mobile.",
      "Sections for history, culture, events, gallery, contact, and institutional content.",
      "Admin panel to manage content, events, and images.",
      "Supabase integration for data and content management.",
      "SEO optimization, metadata, OpenGraph, and index-ready structure.",
      "Production deployment with Vercel and DNS/SSL configuration through Cloudflare.",
      "Architecture ready to keep adding new sections, news, resources, and multimedia content.",
      "Reusable foundation for associations, cultural institutions, museums, or educational centers.",
    ],
},


{
  order: 8,
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
  order: 9,
  title: "SG SaaS Starter",
  desc: isEs
    ? "Starter full stack comercializable orientado a productos SaaS. Incluye dashboard admin moderno, autenticación, usuarios, actividad, notificaciones, configuraciones, backend Node.js API y estructura lista para extender como producto real o base de nuevos desarrollos."
    : "Commercial full-stack starter built for SaaS products. It includes a modern admin dashboard, authentication, users, activity, notifications, settings, a Node.js API backend, and a production-ready structure to extend into real products or new commercial builds.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  image: {
    src: "/screenshots/sg-saas-starter-1.webp",
    alt: isEs
      ? "SG SaaS Starter — Dashboard principal"
      : "SG SaaS Starter — Main dashboard",
  },
  links: {
    demo: "https://gretter.gumroad.com/l/qpxbzq",
    repo: "",
  },
  badge: isEs ? "Digital Product · Gumroad" : "Digital Product · Gumroad",
  screenshots: [
    {
      src: "/screenshots/sg-saas-starter-1.webp",
      alt: isEs
        ? "SG SaaS Starter — Dashboard"
        : "SG SaaS Starter — Dashboard",
    },
    {
      src: "/screenshots/sg-saas-starter-2.webp",
      alt: isEs
        ? "SG SaaS Starter — Users"
        : "SG SaaS Starter — Users",
    },
    {
      src: "/screenshots/sg-saas-starter-3.webp",
      alt: isEs
        ? "SG SaaS Starter — Activity"
        : "SG SaaS Starter — Activity",
    },
    {
      src: "/screenshots/sg-saas-starter-4.webp",
      alt: isEs
        ? "SG SaaS Starter — Notifications"
        : "SG SaaS Starter — Notifications",
    },
    {
      src: "/screenshots/sg-saas-starter-5.webp",
      alt: isEs
        ? "SG SaaS Starter — Settings"
        : "SG SaaS Starter — Settings",
    },
	{
      src: "/screenshots/sg-saas-starter-6.webp",
      alt: isEs
        ? "SG SaaS Starter — Settings"
        : "SG SaaS Starter — Settings",
    },
	{
      src: "/screenshots/sg-saas-starter-7.webp",
      alt: isEs
        ? "SG SaaS Starter — Settings"
        : "SG SaaS Starter — Settings",
    },
  ],
  features: isEs
    ? [
        "Dashboard admin moderno listo para usar como base SaaS",
        "Arquitectura full stack separada entre frontend y backend API",
        "Gestión de usuarios con vistas administrativas",
        "Módulo de actividad con filtros y exportación",
        "Sistema de notificaciones y configuraciones base",
        "Diseño responsive y estructura extensible para nuevos módulos",
        "Ideal como starter comercializable, boilerplate privado o base de producto",
      ]
    : [
        "Modern admin dashboard ready to use as a SaaS foundation",
        "Full-stack architecture with separate frontend and backend API",
        "User management with admin views",
        "Activity module with filters and export support",
        "Base notifications and settings system",
        "Responsive design and extensible structure for new modules",
        "Ideal as a commercial starter, private boilerplate, or product foundation",
      ],
},





{
  order: 10,
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

{
  order: 11,
  title: isEs ? "SG Copilot CRM" : "SG Copilot CRM",
  desc: isEs
    ? "CRM SaaS full stack orientado a operación comercial, seguimiento de clientes y productividad con AI. Incluye autenticación, organizaciones, suscripciones con Stripe, planes Free/Pro/Business, dashboard de uso, documentos con búsqueda semántica, preguntas sobre documentos, resúmenes AI de clientes y módulo Business-only de auditoría/insights AI."
    : "Full-stack SaaS CRM focused on sales operations, client follow-up, and AI-powered productivity. It includes authentication, organizations, Stripe subscriptions, Free/Pro/Business plans, usage dashboard, semantic document search, document Q&A, AI client summaries, and a Business-only AI audit/insights module.",
  stack: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "Stripe",
    "OpenAI",
    "Vercel",
    "Tailwind CSS",
    "PostgreSQL",
  ],
  image: {
    src: "/screenshots/sg-copilot-crm-1.webp",
    alt: isEs
      ? "SG Copilot CRM — Dashboard principal"
      : "SG Copilot CRM — Main dashboard",
  },
  links: {
    demo: "https://sg-copilot-crm.vercel.app",
    repo: "",
  },
  badge: isEs ? "SaaS · Live" : "SaaS · Live",
  screenshots: [
    {
      src: "/screenshots/sg-copilot-crm-1.webp",
      alt: isEs
        ? "SG Copilot CRM — Dashboard"
        : "SG Copilot CRM — Dashboard",
    },
	    {
      src: "/screenshots/sg-copilot-crm-1-1.webp",
      alt: isEs
        ? "SG Copilot CRM — Dashboard"
        : "SG Copilot CRM — Dashboard",
    },
    {
      src: "/screenshots/sg-copilot-crm-2.webp",
      alt: isEs
        ? "SG Copilot CRM — Billing y planes"
        : "SG Copilot CRM — Billing and plans",
    },
	  {
      src: "/screenshots/sg-copilot-crm-2-2.webp",
      alt: isEs
        ? "SG Copilot CRM — Billing y planes"
        : "SG Copilot CRM — Billing and plans",
    },
    {
      src: "/screenshots/sg-copilot-crm-3.webp",
      alt: isEs
        ? "SG Copilot CRM — AI Assistant"
        : "SG Copilot CRM — AI Assistant",
    },
	
    {
      src: "/screenshots/sg-copilot-crm-4.webp",
      alt: isEs
        ? "SG Copilot CRM — Documentos con búsqueda semántica"
        : "SG Copilot CRM — Documents with semantic search",
    },
    {
      src: "/screenshots/sg-copilot-crm-5.webp",
      alt: isEs
        ? "SG Copilot CRM — AI History / auditoría Business"
        : "SG Copilot CRM — AI History / Business audit",
    },
	  {
      src: "/screenshots/sg-copilot-crm-5-2.webp",
      alt: isEs
        ? "SG Copilot CRM — AI History / auditoría Business"
        : "SG Copilot CRM — AI History / Business audit",
    },
	  {
      src: "/screenshots/sg-copilot-crm-6.webp",
      alt: isEs
        ? "SG Copilot CRM — AI History / auditoría Business"
        : "SG Copilot CRM — AI History / Business audit",
    },
  ],
  features: isEs
    ? [
        "Autenticación y multi-organización con Supabase",
        "Modelo SaaS con suscripciones Stripe y planes Free / Pro / Business",
        "Dashboard con métricas, límites de uso y recomendaciones inteligentes según consumo",
        "Gestión de clientes, tareas y documentos dentro del workspace",
        "AI Assistant con chat comercial y resúmenes AI por cliente",
        "Búsqueda semántica y preguntas sobre documentos usando embeddings + AI",
        "Límites por plan y bloqueo contextual de features premium",
        "Módulo Business-only de auditoría AI: historial, analítica, comparativas por rango, export CSV/JSON e insights guardados",
        "Panel de insights con fijado, búsqueda, filtros y exportación",
        "Arquitectura preparada para producto SaaS comercializable y escalable",
      ]
    : [
        "Authentication and multi-organization setup with Supabase",
        "SaaS subscription model with Stripe and Free / Pro / Business plans",
        "Dashboard with metrics, usage limits, and smart upgrade recommendations",
        "Client, task, and document management inside each workspace",
        "AI Assistant with sales-focused chat and AI-generated client summaries",
        "Semantic search and document Q&A using embeddings + AI",
        "Per-plan limits and contextual premium feature gating",
        "Business-only AI audit module: history, analytics, range comparisons, CSV/JSON export, and saved insights",
        "Insights panel with pinning, search, filters, and export",
        "Architecture ready for a scalable and commercial SaaS product",
      ],
},




];




  return {
	  
	  
    langLabel: isEs ? "Español" : "English",
    switchTo: isEs ? "English" : "Español",
    switchHref: isEs ? "/en" : "/es",

heroKicker: isEs
  ? "Software Studio · Uruguay · Remoto"
  : "Software Studio · Uruguay · Remote",

role: isEs
  ? "Desarrollo de software, apps móviles, SaaS y soluciones digitales para empresas"
  : "Software development, mobile apps, SaaS, and digital solutions for companies",

summary: isEs
  ? "Creo productos digitales de punta a punta: plataformas web, aplicaciones móviles, backends, dashboards, SaaS y soluciones a medida. Este sitio funciona como portfolio profesional y también como estudio de software para empresas, startups y organizaciones."
  : "I build end-to-end digital products: web platforms, mobile apps, backends, dashboards, SaaS, and custom solutions. This site works both as a professional portfolio and as a software studio for companies, startups, and organizations.",
name: "Santiago Gretter",
  ctaProjects: isEs ? "Ver casos" : "View work",
ctaContact: isEs ? "Solicitar propuesta" : "Request proposal",
	ctaExperience: isEs ? "Experiencia" : "Experience",
    ctaEmail: isEs ? "Enviar consulta" : "Send inquiry",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaDownloadCv: isEs ? "Descargar CV" : "Download CV",
sectionServicesTitle: isEs ? "Servicios" : "Services",
sectionServicesKicker: isEs
  ? "Soluciones digitales para empresas, startups, instituciones y proyectos que necesitan tecnología real, escalable y lista para producción."
  : "Digital solutions for companies, startups, institutions, and projects that need real, scalable, production-ready technology.",

services: [
  {
    title: isEs ? "Desarrollo Web" : "Web Development",
    desc: isEs
      ? "Sitios institucionales, plataformas web, landing pages comerciales, paneles administrativos y productos con Next.js, React y TypeScript."
      : "Institutional websites, web platforms, commercial landing pages, admin dashboards, and products with Next.js, React, and TypeScript.",
    items: ["Next.js", "React", "TypeScript", "SEO", "Admin panels"],
  },
  {
    title: isEs ? "Aplicaciones Móviles" : "Mobile Apps",
    desc: isEs
      ? "Apps Android/iOS con React Native, autenticación, mapas, notificaciones push, chat, pagos y publicación en stores."
      : "Android/iOS apps with React Native, authentication, maps, push notifications, chat, payments, and store publishing.",
    items: ["React Native", "Android", "iOS", "Push", "Maps"],
  },
  {
    title: isEs ? "SaaS y Plataformas" : "SaaS & Platforms",
    desc: isEs
      ? "Productos SaaS, CRM, marketplaces, sistemas internos, portales empresariales y soluciones white-label listas para adaptar."
      : "SaaS products, CRM, marketplaces, internal systems, business portals, and white-label solutions ready to adapt.",
    items: ["SaaS", "CRM", "Marketplace", "White-label", "Billing"],
  },
],
    sectionProjectsTitle: isEs ? "Casos de éxito y productos" : "Case studies and products",
    sectionProjectsDesc: isEs
      ? "Selección de trabajos reales con foco en resultados."
      : "A selection of real projects focused on outcomes.",
sectionProjectsKicker: isEs
  ? "Selección de proyectos reales, plataformas propias y soluciones listas para adaptar, licenciar o implementar."
  : "A selection of real projects, proprietary platforms, and solutions ready to adapt, license, or deploy.",

   sectionSkillsTitle: isEs ? "Perfil técnico" : "Technical profile",
   sectionSkillsKicker: isEs
  ? "Experiencia técnica personal detrás del estudio: desarrollo full-stack, mobile, backend, tiempo real, integraciones y despliegues en producción."
  : "Personal technical experience behind the studio: full-stack development, mobile, backend, real-time features, integrations, and production deployments.",

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


    sectionContactTitle: isEs ? "Hablemos de tu proyecto" : "Let’s talk about your project",

sectionContactDesc: isEs
  ? "Contame qué querés construir, mejorar o lanzar. Puede ser una web, app móvil, SaaS, sistema interno, marketplace, dashboard o una solución a medida para tu empresa."
  : "Tell me what you want to build, improve, or launch. It can be a website, mobile app, SaaS, internal system, marketplace, dashboard, or a custom solution for your company.",

    projects,
    footer: "Santiago Gretter · Software Studio",
	
sectionNowTitle: isEs ? "Disponible para nuevos proyectos" : "Available for new projects",

sectionNowDesc: isEs
  ? "Trabajo con empresas, startups, instituciones y proyectos propios que necesitan construir, mejorar o escalar soluciones digitales: web, mobile, backend, SaaS, dashboards, integraciones y productos comerciales."
  : "I work with companies, startups, institutions, and proprietary projects that need to build, improve, or scale digital solutions: web, mobile, backend, SaaS, dashboards, integrations, and commercial products.",
nowPoints: isEs
  ? [
      "Disponible para proyectos freelance y desarrollo de productos digitales.",
      "Abierto a oportunidades como empleado en empresas locales de Uruguay.",
      "Experiencia combinando negocio, producto, desarrollo y soporte de aplicaciones.",
      "Flexible para modalidad remota, híbrida o presencial según el proyecto o empresa.",
    ]
  : [
      "Available for freelance projects and digital product development.",
      "Open to employment opportunities with local companies in Uruguay.",
      "Experience combining business, product, software development, and application support.",
      "Flexible for remote, hybrid, or on-site arrangements depending on the company or project.",
    ],

nowResponseTime: isEs
  ? "Respuesta típica: 24–48h"
  : "Typical response time: 24–48h",

nowCtaPrimary: isEs ? "Solicitar propuesta" : "Request proposal",
nowCtaSecondary: isEs ? "Descargar CV" : "Download CV",

nowChipsLabel: isEs ? "Servicios:" : "Services:",
nowChips: isEs
  ? ["Freelance", "Full-Time", "Part-Time", "Web", "Mobile", "Backend"]
  : ["Freelance", "Full-Time", "Part-Time", "Web", "Mobile", "Backend"],

bestFitLabel: isEs ? "Ideal para:" : "Ideal for:",
bestFitItems: isEs
  ? ["Empresas locales", "Startups", "Software Studio", "Producto digital"]
  : ["Local companies", "Startups", "Software Studio", "Digital product"],
  
sectionExperienceTitle: isEs ? "Trayectoria profesional" : "Professional background",
sectionExperienceKicker: isEs
  ? "Trayectoria previa en consultoría tecnológica, banca, sector público, soporte IT, sistemas internos, reporting, ERP/CRM y desarrollo web."
  : "Previous background in technology consulting, banking, public sector, IT support, internal systems, reporting, ERP/CRM, and web development.",
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
  title: isEs ? "SG Copilot CRM" : "SG Copilot CRM",
  status: isEs
    ? "Disponible para licenciamiento / implementación"
    : "Available for licensing / deployment",
  featuredLabel: isEs ? "SaaS B2B" : "B2B SaaS",
  description: isEs
    ? "CRM SaaS full stack con AI, billing por suscripción, límites por plan, documentos inteligentes y módulo Business de auditoría/insights. Disponible para licenciamiento, white-label o implementación comercial para equipos, consultoras y operaciones B2B."
    : "Full-stack SaaS CRM with AI, subscription billing, plan limits, smart documents, and a Business audit/insights module. Available for licensing, white-label, or commercial deployment for teams, consulting firms, and B2B operations.",
  model: isEs
    ? "Licencia / White-label / Implementación"
    : "License / White-label / Deployment",
  idealFor: isEs
    ? "Equipos comerciales, consultoras, operaciones B2B, agencias o empresas que necesiten CRM + AI + modelo SaaS listo para evolucionar."
    : "Sales teams, consulting firms, B2B operations, agencies, or companies needing a CRM + AI + SaaS-ready product.",
  tags: isEs
    ? ["SaaS", "Licencia", "White-label"]
    : ["SaaS", "License", "White-label"],
   requestHref: "/go/request-access/sg-copilot-crm",
   pdfHref: "/SG_Copilot_CRM_ficha_comercial.pdf",
},


{
  title: "SG Booking Pro",
  status: isEs
    ? "Disponible para licenciamiento"
    : "Available for licensing",
  featuredLabel: "SaaS Booking",
  description: isEs
    ? "Plataforma SaaS de reservas para profesionales y pequeñas empresas."
    : "Booking SaaS platform for professionals and small businesses.",
  model: isEs
    ? "Licencia / White-label / Implementación"
    : "License / White-label / Deployment",
  idealFor: isEs
    ? "Consultorios, estudios, centros estéticos, profesionales y servicios."
    : "Clinics, studios, beauty centers, professionals and services.",
	tags: isEs
  ? ["SaaS", "White-label", "Reservas"]
  : ["SaaS", "White-label", "Booking"],
  requestHref: "/go/request-access/sg-booking-pro",
},

{
  title: "NutriMVP",
  status: isEs
    ? "Disponible para evolución / implementación"
    : "Available for evolution / deployment",
  featuredLabel: isEs ? "Smart Shopping MVP" : "Smart Shopping MVP",
  description: isEs
    ? "App mobile MVP orientada a consumo inteligente: escaneo de productos, nutrición, comparación de precios, mapas de supermercados cercanos, lista inteligente y rutas sugeridas para comprar al menor precio. Disponible para evolución como producto propio, implementación por vertical o partnership."
    : "Mobile MVP focused on smart grocery shopping: product scanning, nutrition data, price comparison, nearby supermarket maps, smart shopping lists, and suggested routes to buy at the lowest price. Available for product evolution, vertical deployment, or partnership.",
  model: isEs
    ? "Evolución de producto / Partnership / Implementación"
    : "Product evolution / Partnership / Deployment",
  idealFor: isEs
    ? "Retail, supermercados, consumo masivo, apps de ahorro, comparación de precios, nutrición o experiencias mobile basadas en ubicación."
    : "Retail, supermarkets, consumer goods, savings apps, price comparison, nutrition, or location-based mobile experiences.",
  tags: isEs
    ? ["MVP", "Smart Shopping", "Partnership"]
    : ["MVP", "Smart Shopping", "Partnership"],
  requestHref: "/go/request-access/nutrimvp",
  pdfHref: "/NutriMVP_ficha_comercial.pdf",
},


{
  title: isEs ? "SG SaaS Starter" : "SG SaaS Starter",
  status: isEs
    ? "Disponible en Gumroad / Licenciamiento"
    : "Available on Gumroad / Licensing",
  featuredLabel: isEs ? "Digital Product" : "Digital Product",
  description: isEs
    ? "Starter full stack orientado a SaaS y dashboards administrativos. Disponible como producto digital en Gumroad y también como base adaptable para implementaciones, white-label o nuevos productos comerciales."
    : "Full-stack starter focused on SaaS and admin dashboards. Available as a digital product on Gumroad and also as an adaptable base for deployments, white-label solutions, or new commercial products.",
  model: isEs
    ? "Producto digital / Licencia / White-label"
    : "Digital product / License / White-label",
  idealFor: isEs
    ? "Founders, equipos técnicos, agencias o desarrolladores que necesiten una base moderna para lanzar un SaaS o panel administrativo más rápido."
    : "Founders, technical teams, agencies, or developers who need a modern foundation to launch a SaaS product or admin dashboard faster.",
  tags: isEs
    ? ["Gumroad", "Licencia", "White-label"]
    : ["Gumroad", "License", "White-label"],
  requestHref: "/go/request-access/sg-saas-starter",
  
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
  
  {
  title: "PlayDuel",
  status: isEs
    ? "Disponible para evolución / partnership"
    : "Available for evolution / partnership",
  featuredLabel: isEs ? "Gaming Platform" : "Gaming Platform",
  description: isEs
    ? "Plataforma realtime de duelos 1 vs 1 con lobby, juegos competitivos, chat, ranking, historial y balance demo. Puede evolucionar hacia torneos, wallet real, suscripciones, white-label o modelo de gaming competitivo por vertical."
    : "Real-time 1v1 duel platform with lobby, competitive games, chat, ranking, history, and demo balance. It can evolve into tournaments, real wallet, subscriptions, white-label, or a competitive gaming model by vertical.",
  model: isEs
    ? "Partnership / White-label / Evolución de producto"
    : "Partnership / White-label / Product evolution",
  idealFor: isEs
    ? "Gaming competitivo, comunidades, torneos privados, plataformas de entretenimiento, eSports casual o productos con mecánicas realtime."
    : "Competitive gaming, communities, private tournaments, entertainment platforms, casual eSports, or products with real-time mechanics.",
  tags: isEs
    ? ["Gaming", "Realtime", "White-label"]
    : ["Gaming", "Realtime", "White-label"],
  requestHref: "/go/request-access/playduel",
  pdfHref: "/PlayDuel_ficha_comercial.pdf",
},

],




sectionProcessTitle: isEs ? "Proceso de trabajo" : "Work process",
sectionProcessKicker: isEs
  ? "Una forma simple y ordenada de transformar una idea en una solución funcional, escalable y lista para producción."
  : "A simple and structured way to turn an idea into a functional, scalable, production-ready solution.",

processSteps: [
  {
    title: isEs ? "1. Descubrimiento" : "1. Discovery",
    desc: isEs
      ? "Analizamos la idea, objetivos, usuarios, alcance, prioridades y modelo de negocio."
      : "We analyze the idea, goals, users, scope, priorities, and business model.",
  },
  {
    title: isEs ? "2. Arquitectura" : "2. Architecture",
    desc: isEs
      ? "Definimos la estructura técnica: frontend, backend, base de datos, integraciones y despliegue."
      : "We define the technical structure: frontend, backend, database, integrations, and deployment.",
  },
  {
    title: isEs ? "3. Desarrollo" : "3. Development",
    desc: isEs
      ? "Construimos la solución por etapas, validando avances y priorizando lo que genera más valor."
      : "We build the solution in stages, validating progress and prioritizing what creates the most value.",
  },
  {
    title: isEs ? "4. Lanzamiento" : "4. Launch",
    desc: isEs
      ? "Publicamos, probamos, ajustamos y dejamos la base lista para soporte, mejoras o evolución comercial."
      : "We publish, test, adjust, and leave the foundation ready for support, improvements, or commercial evolution.",
  },
],


studioIntroTitle: isEs
  ? "Software Studio especializado en productos digitales"
  : "Software Studio focused on digital products",

studioIntroDesc: isEs
  ? "Este sitio reúne mi experiencia como desarrollador y una propuesta comercial orientada a empresas: desarrollo de productos digitales, soluciones a medida, plataformas SaaS, apps móviles y proyectos listos para adaptar o licenciar."
  : "This site combines my experience as a developer with a commercial offering for companies: digital product development, custom solutions, SaaS platforms, mobile apps, and projects ready to adapt or license.",

studioIntroItems: isEs
  ? [
      "Portfolio profesional con casos reales",
      "Servicios de desarrollo para empresas",
      "Productos propios listos para adaptar",
    ]
  : [
      "Professional portfolio with real case studies",
      "Software development services for companies",
      "Proprietary products ready to adapt",
    ],
	
	
	
	finalCtaTitle: isEs
  ? "¿Tenés una idea, empresa o producto para construir?"
  : "Have an idea, company, or product to build?",

finalCtaDesc: isEs
  ? "Puedo ayudarte a transformar una idea en una solución real: desde una web profesional o app móvil hasta una plataforma SaaS, sistema interno, marketplace o producto listo para comercializar."
  : "I can help turn an idea into a real solution: from a professional website or mobile app to a SaaS platform, internal system, marketplace, or product ready to commercialize.",

finalCtaPrimary: isEs ? "Hablemos del proyecto" : "Let’s talk about the project",

finalCtaSecondary: isEs ? "Ver productos licenciables" : "View licensable products",
	
	
	brandSubtitle: isEs
  ? "Software Studio"
  : "Software Studio",
	
	navContact: isEs ? "Contacto" : "Contact",
	
	navServices: isEs ? "Servicios" : "Services",
navProjects: isEs ? "Casos" : "Work",
navProcess: isEs ? "Proceso" : "Process",

statsTitle: isEs ? "Resultados" : "Results",

statsItems: isEs
  ? [
      {
        value: "12+",
        label: "Proyectos",
        desc: "Web, Mobile, SaaS y plataformas en producción",
      },
      {
        value: "15+",
        label: "Años IT",
        desc: "Experiencia en banca, sector público y desarrollo",
      },
      {
        value: "Web + Mobile",
        label: "Especialidad",
        desc: "Frontend, backend, apps móviles y tiempo real",
      },
      {
        value: "8+",
        label: "Productos propios",
        desc: "SG Hub, RadarSocial, SG Booking Pro, NutriMVP, PlayDuel, CRM, Marketplace y SaaS Starter",
      },
    ]
  : [
      {
        value: "12+",
        label: "Projects",
        desc: "Web, Mobile, SaaS and production platforms",
      },
      {
        value: "15+",
        label: "Years in IT",
        desc: "Banking, public sector and software development",
      },
      {
        value: "Web + Mobile",
        label: "Specialization",
        desc: "Frontend, backend, mobile apps and realtime",
      },
      {
        value: "8+",
        label: "Own Products",
        desc: "SG Hub, RadarSocial, SG Booking Pro, NutriMVP, PlayDuel, CRM, Marketplace and SaaS Starter",
      },
    ],

sectorsTitle: isEs ? "Clientes y sectores" : "Clients and sectors",

sectorsKicker: isEs
  ? "Experiencia combinando proyectos propios, soluciones institucionales y desarrollo para organizaciones con necesidades reales de operación, contenido, usuarios y escalabilidad."
  : "Experience combining proprietary products, institutional solutions, and software development for organizations with real needs around operations, content, users, and scalability.",

sectorsItems: isEs
  ? [
      {
        title: "Empresas y startups",
        desc: "Desarrollo de plataformas web, SaaS, marketplaces, CRM, dashboards, productos white-label y soluciones comerciales.",
      },
      {
        title: "Instituciones y sector público",
        desc: "Experiencia en sistemas internos, soporte TI, reportes, intranets, automatización, ERP/CRM y procesos operativos.",
      },
      {
        title: "Cultura, educación y museos",
        desc: "Sitios institucionales, kioscos interactivos, catálogos digitales, experiencias táctiles, contenido bilingüe y gestión multimedia.",
      },
    ]
  : [
      {
        title: "Companies and startups",
        desc: "Web platforms, SaaS, marketplaces, CRM, dashboards, white-label products, and commercial solutions.",
      },
      {
        title: "Institutions and public sector",
        desc: "Internal systems, IT support, reporting, intranets, automation, ERP/CRM, and operational processes.",
      },
      {
        title: "Culture, education and museums",
        desc: "Institutional websites, interactive kiosks, digital catalogs, touch experiences, bilingual content, and multimedia management.",
      },
    ],
	
	techStackTitle: isEs ? "Tecnologías que utilizamos" : "Technologies we use",

techStackKicker: isEs
  ? "Stack moderno para construir productos web, mobile, SaaS, backends, dashboards e integraciones listas para producción."
  : "Modern stack to build production-ready web, mobile, SaaS products, backends, dashboards, and integrations.",

techStackGroups: isEs
  ? [
      {
        title: "Web & Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "SEO", "OpenGraph"],
      },
      {
        title: "Mobile & Realtime",
        items: ["React Native", "Socket.IO", "WebRTC", "Push Notifications", "Maps", "BLE"],
      },
      {
  title: "Backend & Cloud",
  items: [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Docker",
    "Cloudflare R2",
    "Supabase",
    "Firebase",
    "Vercel",
    "Render",
  ],
},
    ]
  : [
      {
        title: "Web & Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "SEO", "OpenGraph"],
      },
      {
        title: "Mobile & Realtime",
        items: ["React Native", "Socket.IO", "WebRTC", "Push Notifications", "Maps", "BLE"],
      },
     {
  title: "Backend & Cloud",
  items: [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Docker",
    "Cloudflare R2",
    "Supabase",
    "Firebase",
    "Vercel",
    "Render",
  ],
},
    ],
	
	
	
	whyUsTitle: isEs ? "¿Por qué trabajar conmigo?" : "Why work with me?",

whyUsKicker: isEs
  ? "Una combinación de experiencia técnica, visión de producto y capacidad para construir soluciones completas desde la idea hasta producción."
  : "A combination of technical experience, product thinking, and the ability to build complete solutions from idea to production.",

whyUsItems: isEs
  ? [
      {
        title: "Desarrollo end-to-end",
        desc: "Web, mobile, backend, dashboards, integraciones y despliegue desde una misma visión técnica.",
      },
      {
        title: "Experiencia real",
        desc: "Trayectoria en banca, sector público, soporte IT, reporting, sistemas internos y desarrollo de software.",
      },
      {
        title: "Productos propios",
       desc: "Construcción de plataformas reales como SG Hub, RadarSocial, SG Booking Pro, SG Copilot CRM, NutriMVP y PlayDuel.",
      },
      {
        title: "Enfoque en negocio",
        desc: "Trabajo pensando en usuarios, operación, escalabilidad, monetización y evolución del producto.",
      },
    ]
  : [
      {
        title: "End-to-end development",
        desc: "Web, mobile, backend, dashboards, integrations, and deployment from a single technical vision.",
      },
      {
        title: "Real experience",
        desc: "Background in banking, public sector, IT support, reporting, internal systems, and software development.",
      },
      {
        title: "Own products",
        desc: "Building real products such as SG Hub, RadarSocial, SG Booking Pro, SG Copilot CRM, NutriMVP, and PlayDuel.",
      },
      {
        title: "Business focus",
        desc: "I work with users, operations, scalability, monetization, and product evolution in mind.",
      },
    ],
	
	
	workModelsTitle: isEs ? "Modelos de trabajo" : "Work models",

workModelsKicker: isEs
  ? "Distintas formas de colaborar según el estado del proyecto, el presupuesto y el objetivo comercial."
  : "Different ways to collaborate depending on the project stage, budget, and business goal.",

workModelsItems: isEs
  ? [
      {
        title: "Proyecto a medida",
        desc: "Desarrollo completo de una web, app, dashboard, sistema interno o plataforma desde cero.",
      },
      {
        title: "Producto white-label",
        desc: "Adaptación de una base existente como marketplace, SaaS, CRM, kiosco interactivo o app mobile.",
      },
      {
        title: "Licenciamiento / partnership",
        desc: "Uso, evolución o implementación comercial de productos propios como RadarSocial, NutriMVP o SG Copilot CRM.",
      },
    ]
  : [
      {
        title: "Custom project",
        desc: "Complete development of a website, app, dashboard, internal system, or platform from scratch.",
      },
      {
        title: "White-label product",
        desc: "Adaptation of an existing base such as a marketplace, SaaS, CRM, interactive kiosk, or mobile app.",
      },
      {
        title: "Licensing / partnership",
        desc: "Use, evolution, or commercial deployment of proprietary products such as RadarSocial, NutriMVP, or SG Copilot CRM.",
      },
    ],
	
	faqTitle: isEs ? "Preguntas frecuentes" : "FAQ",

faqKicker: isEs
  ? "Algunas respuestas rápidas para empresas, startups u organizaciones que estén evaluando una solución digital."
  : "Quick answers for companies, startups, or organizations evaluating a digital solution.",

faqItems: isEs
  ? [
      {
        question: "¿Trabajás solo como desarrollador o también como estudio?",
        answer:
          "Trabajo bajo mi marca personal Santiago Gretter Software Studio. Puedo asumir proyectos como desarrollador full-stack o como proveedor de una solución completa según el alcance.",
      },
	  {
  question: isEs
    ? "¿Estás disponible para empresas locales como empleado?"
    : "Are you available for local companies as an employee?",
  answer: isEs
    ? "Sí. Además de proyectos comerciales y desarrollos a medida, estoy abierto a oportunidades con empresas locales de Uruguay para trabajar como empleado, especialmente en roles Full Stack, Mobile, Analista Funcional, Soporte de Aplicaciones, IT Support o posiciones híbridas entre negocio y tecnología."
    : "Yes. In addition to commercial projects and custom development, I am open to opportunities with local companies in Uruguay as an employee, especially in Full Stack, Mobile, Functional Analyst, Application Support, IT Support, or hybrid business/technology roles.",
},
      {
        question: "¿Podés desarrollar una app o plataforma desde cero?",
        answer:
          "Sí. Puedo cubrir frontend, backend, base de datos, autenticación, panel admin, APIs, despliegue y evolución inicial del producto.",
      },
      {
        question: "¿Tenés productos ya listos para adaptar?",
        answer:
          "Sí. Algunos proyectos como RadarSocial, SG Copilot CRM, Marketplace, NutriMVP y SG SaaS Starter pueden adaptarse, licenciarse o usarse como base para nuevos productos.",
      },
      {
        question: "¿Trabajás con empresas fuera de Uruguay?",
        answer:
          "Sí. Trabajo remoto y puedo colaborar con empresas, startups o equipos de otros países según el proyecto, idioma y huso horario.",
      },
    ]
  : [
      {
        question: "Do you work only as a developer or also as a studio?",
        answer:
          "I work under my personal brand Santiago Gretter Software Studio. I can take projects as a full-stack developer or as a provider of a complete solution depending on scope.",
      },
	  {
  question: isEs
    ? "¿Estás disponible para empresas locales como empleado?"
    : "Are you available for local companies as an employee?",
  answer: isEs
    ? "Sí. Además de proyectos comerciales y desarrollos a medida, estoy abierto a oportunidades con empresas locales de Uruguay para trabajar como empleado, especialmente en roles Full Stack, Mobile, Analista Funcional, Soporte de Aplicaciones, IT Support o posiciones híbridas entre negocio y tecnología."
    : "Yes. In addition to commercial projects and custom development, I am open to opportunities with local companies in Uruguay as an employee, especially in Full Stack, Mobile, Functional Analyst, Application Support, IT Support, or hybrid business/technology roles.",
},
      {
        question: "Can you build an app or platform from scratch?",
        answer:
          "Yes. I can cover frontend, backend, database, authentication, admin panels, APIs, deployment, and the initial product evolution.",
      },
      {
        question: "Do you have products ready to adapt?",
        answer:
          "Yes. Some projects such as RadarSocial, SG Copilot CRM, Marketplace, NutriMVP, and SG SaaS Starter can be adapted, licensed, or used as a base for new products.",
      },
      {
        question: "Do you work with companies outside Uruguay?",
        answer:
          "Yes. I work remotely and can collaborate with companies, startups, or teams from other countries depending on the project, language, and time zone.",
      },
    ],
	
	contactFormName: isEs ? "Tu nombre" : "Your name",
contactFormEmail: isEs ? "Tu email" : "Your email",
contactFormProjectType: isEs
  ? "Tipo de proyecto: web, app, SaaS, marketplace..."
  : "Project type: website, app, SaaS, marketplace...",
contactFormMessage: isEs
  ? "Contame brevemente qué necesitás construir, mejorar o lanzar..."
  : "Briefly tell me what you need to build, improve, or launch...",
contactFormSubmit: isEs ? "Enviar consulta" : "Send inquiry",
contactFormSending: isEs ? "Enviando..." : "Sending...",
contactFormSuccess: isEs
  ? "Consulta enviada correctamente."
  : "Inquiry sent successfully.",
contactFormError: isEs
  ? "No se pudo enviar. Probá nuevamente o escribime por email."
  : "Could not send. Try again or email me directly.",
	
	
	contactDirectEmail: isEs ? "Email directo" : "Direct email",
contactResponseNote: isEs ? "Respuesta 24–48h" : "24–48h response",

navExperience: isEs ? "Experiencia" : "Experience",


toolLogosTitle: isEs ? "Herramientas y tecnologías" : "Tools and technologies",

toolLogosKicker: isEs
  ? "Tecnologías utilizadas en productos reales, plataformas comerciales, apps móviles, dashboards, integraciones y despliegues en producción."
  : "Technologies used in real products, commercial platforms, mobile apps, dashboards, integrations, and production deployments.",

toolLogosItems: [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Socket.IO",
  "WebRTC",
  "Stripe",
  "OpenAI",
  "Vercel",
  "Cloudflare",
],
  };
}
