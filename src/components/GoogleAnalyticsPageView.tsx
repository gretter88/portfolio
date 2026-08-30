"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  GA_READY_EVENT,
  normalizeAnalyticsPath,
  sendGoogleAnalyticsPageView,
  shouldTrackAnalyticsPath,
} from "@/lib/google-analytics";

export default function GoogleAnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    const pagePath =
      normalizeAnalyticsPath(pathname);

    if (!shouldTrackAnalyticsPath(pagePath)) {
      return;
    }

    const sendPageView = () => {
      sendGoogleAnalyticsPageView(pagePath);
    };

    // Por si GA ya está disponible.
    sendPageView();

    // Por si el componente se montó antes
    // de que terminara de configurarse gtag.
    window.addEventListener(
      GA_READY_EVENT,
      sendPageView
    );

    return () => {
      window.removeEventListener(
        GA_READY_EVENT,
        sendPageView
      );
    };
  }, [pathname]);

  return null;
}