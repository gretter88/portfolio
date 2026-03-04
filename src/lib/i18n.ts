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
  badge?: string; // 👈 nuevo
};

export function t(lang: Lang) {
  const isEs = lang === "es";

const projects: Project[] = [
{
  title: "RadarSocial",
  desc: isEs
    ? "Web en producción + App Android en testing. Plataforma social con chat en tiempo real, mapas, estado online, stickers y llamadas. Backend Node/MongoDB + Socket.IO. App Android en testing (Google Play – acceso por invitación)."
    : "Web live + Android app in testing. Social platform with real-time chat, maps, online presence, stickers and calls. Node/MongoDB + Socket.IO backend. Android app in testing (Google Play – invite-only).",
  stack: ["Next.js", "TypeScript", "React Native", "Node.js", "MongoDB", "Socket.IO"],
  image: { src: "/screenshots/radarsocialweb.webp", alt: "RadarSocial (Web)" },
  links: { demo: "https://radarsocial.com.uy/", repo: "" },
  badge: "Web: Live · Android: Testing",
},


  {
    title: "Museo Canario (Web)",
    desc: isEs
      ? "Sitio moderno en Next.js bilingüe (ES/EN), con secciones dinámicas, catálogo y foco en performance/SEO."
      : "Modern bilingual (ES/EN) Next.js website with dynamic sections, catalog, and strong performance/SEO focus.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "Cloudflare"],
	 image: { src: "/screenshots/museo2.webp", alt: "Museo Canario website" },
    links: { demo: "https://www.museocanario.com.uy", repo: "" },
  },
  {
    title: isEs ? "Kiosco Interactivo (Museo)" : "Interactive Kiosk (Museum)",
    desc: isEs
      ? "Kiosco táctil para tablet fija en museo. Módulos interactivos, fullscreen y UX optimizada para público general."
      : "Tablet-fixed interactive kiosk. Touch-friendly modules, fullscreen mode, and UX optimized for museum visitors.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
	  image: { src: "/screenshots/kio2.webp", alt: "Kiosco interactivo" },
    links: { demo: "https://kiosco.museocanario.com.uy", repo: "" },
	badge: isEs ? "Tablet mode · Restricted" : "Tablet mode · Restricted",
  },
];


  return {
    langLabel: isEs ? "Español" : "English",
    switchTo: isEs ? "English" : "Español",
    switchHref: isEs ? "/en" : "/es",

    heroKicker: isEs ? "Disponible remoto / Uruguay" : "Open to remote / Uruguay",
    name: "Santiago Gretter",
    role: "Fullstack / Mobile Developer (React Native · Node · Next.js)",
    summary: isEs
      ? "Construyo productos completos: apps móviles, webs modernas y backends escalables. Enfocado en performance, UX y features en tiempo real (sockets, mapas, notificaciones)."
      : "I build end-to-end products: mobile apps, modern web apps, and scalable backends. Focused on performance, UX, and real-time features (sockets, maps, notifications).",

    ctaProjects: isEs ? "Ver proyectos" : "View projects",
    ctaContact: isEs ? "Contacto" : "Contact",
    ctaEmail: isEs ? "Enviar email" : "Email me",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaDownloadCv: isEs ? "Descargar CV" : "Download CV",

    sectionProjectsTitle: isEs ? "Proyectos" : "Projects",
    sectionProjectsDesc: isEs
      ? "Selección de trabajos reales con foco en resultados."
      : "A selection of real projects focused on outcomes.",

    sectionSkillsTitle: "Skills",
    skills: [
      {
        title: isEs ? "Frontend" : "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
      },
      {
        title: "Mobile",
        items: ["React Native", "Maps", "Audio/Video", "IAP", "FCM/Notifee"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express", "MongoDB", "REST APIs", "Socket.IO"],
      },
    ],

    sectionContactTitle: isEs ? "Contacto" : "Contact",
    sectionContactDesc: isEs
      ? "Si querés que trabajemos juntos, escribime:"
      : "Want to work together? Reach out:",

    projects,
    footer: "Portfolio · Santiago Gretter",
  };
}
