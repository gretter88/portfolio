// src/lib/google-analytics.ts

export const GA_READY_EVENT = "portfolio:ga-ready";

const PRODUCTION_HOSTS = new Set([
  "santiagogretter.com.uy",
  "www.santiagogretter.com.uy",
]);

type GtagParams = Record<
  string,
  string | number | boolean | null | undefined
>;

type PortfolioWindow = Window & {
  gtag?: (...args: any[]) => void;
  __portfolioGaReady?: boolean;
  __portfolioGaConfigured?: boolean;
  __portfolioLastGaPageView?: string;
};

export function isPortfolioProductionHost() {
  if (typeof window === "undefined") {
    return false;
  }

  return PRODUCTION_HOSTS.has(
    window.location.hostname.toLowerCase()
  );
}

export function normalizeAnalyticsPath(
  value?: string | null
) {
  let path = value || "/";

  // Nunca consideramos query params ni hashes como otra página.
  path = path.split("?")[0] || "/";
  path = path.split("#")[0] || "/";

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path || "/";
}

export function shouldTrackAnalyticsPath(
  value?: string | null
) {
  const path = normalizeAnalyticsPath(value);

  if (
    path === "/admin" ||
    path.startsWith("/admin/") ||
    path === "/api" ||
    path.startsWith("/api/") ||
    path.startsWith("/_next/")
  ) {
    return false;
  }

  return true;
}

function cleanParams(params: GtagParams) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) =>
        value !== null &&
        value !== undefined &&
        value !== ""
    )
  );
}

function normalizeEventName(name: string) {
  let eventName = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_+/g, "_");

  if (!/^[a-z]/.test(eventName)) {
    eventName = `portfolio_${eventName}`;
  }

  return (eventName || "portfolio_event").slice(0, 40);
}

export function sendGoogleAnalyticsPageView(
  pathname: string
) {
  if (
    typeof window === "undefined" ||
    !isPortfolioProductionHost()
  ) {
    return false;
  }

  const pagePath = normalizeAnalyticsPath(pathname);

  if (!shouldTrackAnalyticsPath(pagePath)) {
    return false;
  }

  const win = window as PortfolioWindow;

  if (typeof win.gtag !== "function") {
    return false;
  }

  // Evita doble page_view por Strict Mode,
  // layouts duplicados o componentes repetidos.
  if (win.__portfolioLastGaPageView === pagePath) {
    return true;
  }

  win.__portfolioLastGaPageView = pagePath;

  win.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: `${window.location.origin}${pagePath}`,
    page_title: document.title,
  });

  return true;
}

export function sendGoogleAnalyticsEvent(
  name: string,
  params: GtagParams = {}
) {
  if (
    typeof window === "undefined" ||
    !isPortfolioProductionHost()
  ) {
    return false;
  }

  const pagePath = normalizeAnalyticsPath(
    window.location.pathname
  );

  if (!shouldTrackAnalyticsPath(pagePath)) {
    return false;
  }

  const win = window as PortfolioWindow;

  if (typeof win.gtag !== "function") {
    return false;
  }

  win.gtag(
    "event",
    normalizeEventName(name),
    cleanParams({
      ...params,
      page_path: pagePath,
    })
  );

  return true;
}