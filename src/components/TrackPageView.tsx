"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  usePathname,
} from "next/navigation";

import {
  isPortfolioProductionHost,
  normalizeAnalyticsPath,
  shouldTrackAnalyticsPath,
} from "@/lib/google-analytics";

import {
  CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
} from "@/lib/privacy-consent";

type Props = {
  path?: string;
  lang?: string;
};

type TrackingWindow =
  Window & {
    __portfolioLastOwnPageView?: string;
  };

function getVisitorId() {
  const cookieName =
    "visitor_id=";

  const cookies =
    document.cookie.split(";");

  for (
    const cookie of cookies
  ) {
    const trimmed =
      cookie.trim();

    if (
      trimmed.startsWith(
        cookieName
      )
    ) {
      return trimmed.substring(
        cookieName.length
      );
    }
  }

  const id =
    typeof crypto !==
      "undefined" &&
    "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}`;

  document.cookie =
    `visitor_id=${id}; ` +
    "path=/; " +
    "max-age=31536000; " +
    "samesite=lax";

  return id;
}

function getLanguageFromPath(
  path: string
) {
  const segment =
    path
      .split("/")
      .filter(Boolean)[0];

  if (
    segment === "es" ||
    segment === "en"
  ) {
    return segment;
  }

  return null;
}

export default function TrackPageView({
  path,
  lang,
}: Props = {}) {
  const pathname =
    usePathname();

  const [
    consentGranted,
    setConsentGranted,
  ] = useState(false);

  const effectivePath =
    normalizeAnalyticsPath(
      path ||
        pathname ||
        "/"
    );

  const effectiveLang =
    lang ||
    getLanguageFromPath(
      effectivePath
    );

  useEffect(() => {
    const refreshConsent =
      () => {
        setConsentGranted(
          hasAnalyticsConsent()
        );
      };

    refreshConsent();

    window.addEventListener(
      CONSENT_UPDATED_EVENT,
      refreshConsent
    );

    return () => {
      window.removeEventListener(
        CONSENT_UPDATED_EVENT,
        refreshConsent
      );
    };
  }, []);

  useEffect(() => {
    if (
      !consentGranted ||
      !isPortfolioProductionHost() ||
      !shouldTrackAnalyticsPath(
        effectivePath
      )
    ) {
      return;
    }

    const win =
      window as TrackingWindow;

    if (
      win.__portfolioLastOwnPageView ===
      effectivePath
    ) {
      return;
    }

    win.__portfolioLastOwnPageView =
      effectivePath;

    const visitorId =
      getVisitorId();

    fetch("/api/track", {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        type: "pageview",

        path:
          effectivePath,

        lang:
          effectiveLang,

        visitorId,

        referrer:
          document.referrer ||
          null,
      }),

      keepalive: true,
    }).catch(() => {});
  }, [
    effectivePath,
    effectiveLang,
    consentGranted,
  ]);

  return null;
}