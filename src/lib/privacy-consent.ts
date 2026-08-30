// src/lib/privacy-consent.ts

export type AnalyticsConsent =
  | "granted"
  | "denied";

export const CONSENT_STORAGE_KEY =
  "portfolio_analytics_consent";

export const CONSENT_UPDATED_EVENT =
  "portfolio:consent-updated";

export function getAnalyticsConsent():
  | AnalyticsConsent
  | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(
      CONSENT_STORAGE_KEY
    );

    if (
      value === "granted" ||
      value === "denied"
    ) {
      return value;
    }
  } catch {
    // Ignorar errores de localStorage.
  }

  return null;
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === "granted";
}

export function setAnalyticsConsent(
  value: AnalyticsConsent
) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      value
    );
  } catch {
    // Aunque localStorage falle,
    // notificamos el cambio en esta sesión.
  }

  window.dispatchEvent(
    new CustomEvent<AnalyticsConsent>(
      CONSENT_UPDATED_EVENT,
      {
        detail: value,
      }
    )
  );
}