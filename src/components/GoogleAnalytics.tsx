"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  GA_READY_EVENT,
  isPortfolioProductionHost,
} from "@/lib/google-analytics";

type GoogleAnalyticsProps = {
  gaId?: string;
};

export default function GoogleAnalytics({
  gaId: gaIdProp,
}: GoogleAnalyticsProps = {}) {
  const gaId =
    gaIdProp || process.env.NEXT_PUBLIC_GA_ID || "";

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(
      Boolean(gaId) &&
        isPortfolioProductionHost()
    );
  }, [gaId]);

  if (!gaId || !enabled) {
    return null;
  }

  return (
    <>
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

          if (!window.__portfolioGaConfigured) {
            window.gtag("js", new Date());

            window.gtag(
              "config",
              "${gaId}",
              {
                send_page_view: false,
                anonymize_ip: true
              }
            );

            window.__portfolioGaConfigured = true;
          }

          window.__portfolioGaReady = true;

          window.dispatchEvent(
            new Event("${GA_READY_EVENT}")
          );
        `}
      </Script>
    </>
  );
}