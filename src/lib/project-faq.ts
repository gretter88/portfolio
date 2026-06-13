import type { Lang } from "@/lib/i18n";

export type ProjectFaqItem = {
  question: string;
  answer: string;
};

const faqs: Record<string, Record<Lang, ProjectFaqItem[]>> = {
  radar: {
    es: [
      {
        question: "¿RadarSocial está disponible para licenciamiento?",
        answer:
          "Sí. RadarSocial está disponible para licenciamiento, partnership, implementación comercial o adquisición.",
      },
      {
        question: "¿RadarSocial tiene aplicación móvil?",
        answer:
          "Sí. Cuenta con aplicación Android en Google Play Closed Testing y versión web en producción.",
      },
      {
        question: "¿Puede adaptarse a otros modelos de negocio?",
        answer:
          "Sí. La plataforma puede adaptarse a comunidades privadas, networking, servicios geolocalizados o marketplaces sociales.",
      },
      {
        question: "¿Incluye backend propio?",
        answer:
          "Sí. Utiliza Node.js, MongoDB, Socket.IO y APIs propias para tiempo real y operación comercial.",
      },
    ],
    en: [
      {
        question: "Is RadarSocial available for licensing?",
        answer:
          "Yes. RadarSocial is available for licensing, partnership, commercial deployment, or acquisition.",
      },
      {
        question: "Does RadarSocial include a mobile app?",
        answer:
          "Yes. It includes an Android app in Google Play Closed Testing and a live web version.",
      },
      {
        question: "Can it be adapted to other business models?",
        answer:
          "Yes. The platform can be adapted to private communities, networking, geolocated services, or social marketplaces.",
      },
      {
        question: "Does it include its own backend?",
        answer:
          "Yes. It uses Node.js, MongoDB, Socket.IO, and custom APIs for real-time and commercial operation.",
      },
    ],
  },

  nutrimvp: {
    es: [
      {
        question: "¿NutriMVP compara precios entre supermercados?",
        answer:
          "Sí. Permite comparar precios de productos entre diferentes supermercados.",
      },
      {
        question: "¿NutriMVP utiliza OpenFoodFacts?",
        answer:
          "Sí. Integra OpenFoodFacts junto con una base de datos propia.",
      },
      {
        question: "¿Puede adaptarse a retail?",
        answer:
          "Sí. Puede evolucionar hacia soluciones para retail, supermercados o consumo inteligente.",
      },
    ],
    en: [
      {
        question: "Does NutriMVP compare supermarket prices?",
        answer:
          "Yes. It allows users to compare product prices across different supermarkets.",
      },
      {
        question: "Does NutriMVP use OpenFoodFacts?",
        answer:
          "Yes. It integrates OpenFoodFacts together with an internal database.",
      },
      {
        question: "Can it be adapted to retail?",
        answer:
          "Yes. It can evolve into solutions for retail, supermarkets, or smart shopping.",
      },
    ],
  },

  "sg-copilot-crm": {
    es: [
      {
        question: "¿SG Copilot CRM incluye Inteligencia Artificial?",
        answer:
          "Sí. Integra asistentes basados en IA para documentos, consultas y productividad comercial.",
      },
      {
        question: "¿Puede funcionar como white-label?",
        answer:
          "Sí. Está preparado para licenciamiento y adaptación white-label.",
      },
      {
        question: "¿Incluye suscripciones y billing?",
        answer:
          "Sí. Integra Stripe Billing con planes Free, Pro y Business.",
      },
    ],
    en: [
      {
        question: "Does SG Copilot CRM include Artificial Intelligence?",
        answer:
          "Yes. It integrates AI-based assistants for documents, queries, and sales productivity.",
      },
      {
        question: "Can it work as white-label?",
        answer:
          "Yes. It is prepared for licensing and white-label adaptation.",
      },
      {
        question: "Does it include subscriptions and billing?",
        answer:
          "Yes. It integrates Stripe Billing with Free, Pro, and Business plans.",
      },
    ],
  },
};

export function getProjectFaqs(slug: string, lang: Lang): ProjectFaqItem[] {
  return faqs[slug]?.[lang] ?? [];
}