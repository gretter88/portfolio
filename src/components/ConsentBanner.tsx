"use client";

import { useEffect, useState } from "react";

import {
  CONSENT_UPDATED_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/privacy-consent";

type Props = {
  lang: "es" | "en";
};

export default function ConsentBanner({
  lang,
}: Props) {
  const isEs = lang === "es";

  const [consent, setConsent] =
    useState<AnalyticsConsent | null>(null);

  const [loaded, setLoaded] =
    useState(false);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const current =
      getAnalyticsConsent();

    setConsent(current);
    setOpen(current === null);
    setLoaded(true);

    const handleConsentChange = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<AnalyticsConsent>;

      setConsent(customEvent.detail);
    };

    window.addEventListener(
      CONSENT_UPDATED_EVENT,
      handleConsentChange
    );

    return () => {
      window.removeEventListener(
        CONSENT_UPDATED_EVENT,
        handleConsentChange
      );
    };
  }, []);

  function choose(
    value: AnalyticsConsent
  ) {
    setAnalyticsConsent(value);
    setConsent(value);
    setOpen(false);
  }

  if (!loaded) {
    return null;
  }

  return (
    <>
      {open ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6"
          role="dialog"
          aria-modal="true"
          aria-label={
            isEs
              ? "Preferencias de privacidad"
              : "Privacy preferences"
          }
        >
          <div
            className="mx-auto max-w-4xl rounded-2xl border p-5 shadow-2xl backdrop-blur-xl md:p-6"
            style={{
              borderColor:
                "var(--card-border)",

              background:
                "color-mix(in srgb, var(--background) 94%, transparent)",
            }}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-lg font-semibold">
                  {isEs
                    ? "Tu privacidad"
                    : "Your privacy"}
                </h2>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {isEs
                    ? "Usamos herramientas de analítica únicamente para entender cómo se utiliza el portfolio y mejorar la experiencia. Google Analytics, Vercel Analytics y nuestro sistema interno de estadísticas solo se activan si aceptás."
                    : "We use analytics tools only to understand how the portfolio is used and improve the experience. Google Analytics, Vercel Analytics, and our internal analytics system are activated only if you accept."}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    choose("denied")
                  }
                  className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
                  style={{
                    borderColor:
                      "var(--card-border)",

                    background:
                      "var(--card)",
                  }}
                >
                  {isEs
                    ? "Solo necesarias"
                    : "Necessary only"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    choose("granted")
                  }
                  className="rounded-xl px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
                  style={{
                    background:
                      "var(--foreground)",

                    color:
                      "var(--background)",
                  }}
                >
                  {isEs
                    ? "Aceptar analítica"
                    : "Accept analytics"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-3 left-3 z-[90] rounded-full border px-3 py-1.5 text-xs shadow-lg backdrop-blur transition hover:-translate-y-0.5"
          style={{
            borderColor:
              "var(--card-border)",

            background:
              "color-mix(in srgb, var(--background) 88%, transparent)",

            color: "var(--muted)",
          }}
        >
          {isEs
            ? "Configurar privacidad"
            : "Privacy settings"}
        </button>
      )}
    </>
  );
}