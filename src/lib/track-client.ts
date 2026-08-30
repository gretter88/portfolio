import {
  isPortfolioProductionHost,
  sendGoogleAnalyticsEvent,
} from "@/lib/google-analytics";

const ALLOWED_EVENT_TYPES = new Set([
  "click",
  "pdf_download",
  "request_demo",
  "request_license",
  "request_partnership",
  "request_project_info",
]);

type TrackPortfolioEventInput = {
  type: string;
  path: string;
  lang?: string | null;
  project?: string | null;
};

function getVisitorId() {
  const cookieName = "visitor_id=";
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const trimmed = cookie.trim();

    if (trimmed.startsWith(cookieName)) {
      return trimmed.substring(
        cookieName.length
      );
    }
  }

  const id =
    globalThis.crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}`;

  document.cookie =
    `visitor_id=${id}; ` +
    "path=/; " +
    "max-age=31536000; " +
    "samesite=lax";

  return id;
}

export function trackPortfolioEvent({
  type,
  path,
  lang = null,
  project = null,
}: TrackPortfolioEventInput) {
  try {
    if (
      typeof window === "undefined" ||
      !isPortfolioProductionHost() ||
      !ALLOWED_EVENT_TYPES.has(type)
    ) {
      return;
    }

    // Google Analytics 4
    sendGoogleAnalyticsEvent(
      type === "click"
        ? "portfolio_click"
        : type,
      {
        link_path: path,
        language: lang,
        project,
      }
    );

    // Analytics propio / MongoDB
    const payload = JSON.stringify({
      type,
      project,
      path,
      lang,
      visitorId: getVisitorId(),
      referrer:
        document.referrer || null,
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], {
        type: "application/json",
      });

      const sent = navigator.sendBeacon(
        "/api/track",
        blob
      );

      if (sent) {
        return;
      }
    }

    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // El tracking nunca debe romper
    // la navegación del portfolio.
  }
}

export function trackCommercialEvent({
  type,
  project,
  path,
  lang,
}: {
  type: string;
  project: string;
  path: string;
  lang: string;
}) {
  trackPortfolioEvent({
    type,
    project,
    path,
    lang,
  });
}