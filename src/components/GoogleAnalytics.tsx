"use client";

import Script from "next/script";

import {
  useEffect,
  useState,
} from "react";

import {
  GA_READY_EVENT,
  isPortfolioProductionHost,
} from "@/lib/google-analytics";

import {
  CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
} from "@/lib/privacy-consent";

type GoogleAnalyticsProps = {
  gaId?: string;
};

type AnalyticsWindow =
  Window & {
    gtag?: (
      ...args: any[]
    ) => void;
  };

export default function GoogleAnalytics({
  gaId: gaIdProp,
}: GoogleAnalyticsProps = {}) {
  const gaId =
    gaIdProp ||
    process.env
      .NEXT_PUBLIC_GA_ID ||
    "";

  const [enabled, setEnabled] =
    useState(false);

  useEffect(() => {
    const refresh = () => {
      const allowed =
        Boolean(gaId) &&
        isPortfolioProductionHost() &&
        hasAnalyticsConsent();

      setEnabled(allowed);

      if (!allowed) {
        const win =
          window as AnalyticsWindow;

        if (
          typeof win.gtag ===
          "function"
        ) {
          win.gtag(
            "consent",
            "update",
            {
              analytics_storage:
                "denied",

              ad_storage:
                "denied",

              ad_user_data:
                "denied",

              ad_personalization:
                "denied",
            }
          );
        }
      }
    };

    refresh();

    window.addEventListener(
      CONSENT_UPDATED_EVENT,
      refresh
    );

    return () => {
      window.removeEventListener(
        CONSENT_UPDATED_EVENT,
        refresh
      );
    };
  }, [gaId]);

  if (
    !gaId ||
    !enabled
  ) {
    return null;
  }

  return (
    <>
      <Script
        id="portfolio-google-consent"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer =
            window.dataLayer || [];

          window.gtag =
            window.gtag ||
            function () {
              window.dataLayer.push(arguments);
            };

          window.gtag(
            "consent",
            "default",
            {
              analytics_storage: "granted",
              ad_storage: "denied",
              ad_user_data: "denied",
              ad_personalization: "denied"
            }
          );
        `}
      </Script>

      <Script
        id="portfolio-google-analytics-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      <Script
        id="portfolio-google-analytics-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer =
            window.dataLayer || [];

          window.gtag =
            window.gtag ||
            function () {
              window.dataLayer.push(arguments);
            };

          if (
            !window.__portfolioGaConfigured
          ) {
            window.gtag(
              "js",
              new Date()
            );

            window.gtag(
              "config",
              "${gaId}",
              {
                send_page_view: false,
                anonymize_ip: true
              }
            );

            window.__portfolioGaConfigured =
              true;
          }

          window.__portfolioGaReady =
            true;

          window.dispatchEvent(
            new Event(
              "${GA_READY_EVENT}"
            )
          );
        `}
      </Script>
    </>
  );
}