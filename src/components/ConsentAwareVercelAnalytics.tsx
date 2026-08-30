"use client";

import {
  useEffect,
  useState,
} from "react";

import { Analytics } from "@vercel/analytics/next";

import {
  CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
} from "@/lib/privacy-consent";

export default function ConsentAwareVercelAnalytics() {
  const [enabled, setEnabled] =
    useState(false);

  useEffect(() => {
    const refresh = () => {
      setEnabled(
        hasAnalyticsConsent()
      );
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
  }, []);

  if (!enabled) {
    return null;
  }

  return <Analytics />;
}