// src/app/[lang]/layout.tsx

import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  LANGS,
  type Lang,
  t,
} from "@/lib/i18n";

import ThemeToggle from "@/components/ThemeToggle";
import TrackedLink from "@/components/TrackedLink";
import MobileMenu from "@/components/MobileMenu";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import PortfolioItemListJsonLd from "@/components/PortfolioItemListJsonLd";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAnalyticsPageView from "@/components/GoogleAnalyticsPageView";
import TrackPageView from "@/components/TrackPageView";

import ConsentBanner from "@/components/ConsentBanner";
import ConsentAwareVercelAnalytics from "@/components/ConsentAwareVercelAnalytics";

function clsx(
  ...arr: Array<
    | string
    | false
    | null
    | undefined
  >
) {
  return arr
    .filter(Boolean)
    .join(" ");
}

export async function generateMetadata({
  params,
}: {
  params:
    | {
        lang: string;
      }
    | Promise<{
        lang: string;
      }>;
}): Promise<Metadata> {
  const resolved =
    await Promise.resolve(
      params
    );

  const lang = (
    LANGS.includes(
      resolved.lang as Lang
    )
      ? resolved.lang
      : "es"
  ) as Lang;

  const i =
    t(lang);

  const isEs =
    lang === "es";

  const baseUrl =
    new URL(
      "https://www.santiagogretter.com.uy"
    );

  const url =
    new URL(
      `/${lang}`,
      baseUrl
    );

  const title =
    isEs
      ? `${i.name} — Desarrollo de Software, Apps y SaaS en Uruguay`
      : `${i.name} — Software Development, Mobile Apps and SaaS`;

  const description =
    isEs
      ? "Software Studio en Uruguay especializado en desarrollo web, aplicaciones móviles, plataformas SaaS, automatización, integraciones y productos digitales."
      : "Software Studio specialized in web development, mobile apps, SaaS platforms, automation, integrations, and digital products.";

  return {
    metadataBase:
      baseUrl,

    title,

    description,

    alternates: {
      canonical:
        url.pathname,

      languages: {
        es: "/es",
        en: "/en",
      },
    },

    openGraph: {
      type:
        "website",

      locale:
        lang === "es"
          ? "es_ES"
          : "en_US",

      url:
        url.toString(),

      title,

      description,

      siteName:
        "SG Software Studio",

      images: [
        {
          url:
            "/og/og.png",

          width:
            1200,

          height:
            630,

          alt:
            "SG Software Studio — Software que impulsa tu negocio",
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [
        "/og/og2.png",
      ],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children:
    React.ReactNode;

  params:
    | {
        lang: string;
      }
    | Promise<{
        lang: string;
      }>;
}) {
  const resolved =
    await Promise.resolve(
      params
    );

  const lang = (
    LANGS.includes(
      resolved.lang as Lang
    )
      ? resolved.lang
      : "es"
  ) as Lang;

  const i =
    t(lang);

  const navLinkClass =
    "rounded-xl border px-3 py-2 text-sm transition hover:-translate-y-0.5";

  const navLinkStyle:
    React.CSSProperties = {
      borderColor:
        "rgba(96,165,250,0.22)",

      background:
        "rgba(255,255,255,0.02)",
    };

  return (
    <div className="scroll-smooth">
      <GoogleAnalytics />

      <GoogleAnalyticsPageView />

      <TrackPageView
        lang={lang}
      />

      <header
        className="sticky top-0 z-40 border-b backdrop-blur"
        style={{
          borderColor:
            "var(--card-border)",

          background:
            "color-mix(in srgb, var(--background) 75%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-3 py-3 md:px-6 md:py-4">
          <div className="flex min-w-0 items-center gap-2 md:gap-3">
            <div
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border font-semibold transition hover:-translate-y-0.5"
              style={{
                borderColor:
                  "rgba(96,165,250,0.35)",

                background:
                  "linear-gradient(135deg, rgba(96,165,250,0.18), rgba(167,139,250,0.12))",

                boxShadow:
                  "0 0 24px rgba(96,165,250,0.10)",
              }}
            >
              SG
            </div>

            <div className="hidden min-w-0 leading-tight sm:block">
              <div className="truncate text-sm font-semibold">
                Santiago Gretter
              </div>

              <div
                className="hidden text-xs lg:block"
                style={{
                  color:
                    "var(--muted)",
                }}
              >
                Software Studio
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <TrackedLink
                href="#services"
                trackPath="/nav/services"
                lang={lang}
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.navServices}
              </TrackedLink>

              <TrackedLink
                href="#projects"
                trackPath="/nav/projects"
                lang={lang}
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.navProjects}
              </TrackedLink>

              <TrackedLink
                href="#commercial-projects"
                trackPath="/nav/commercial-projects"
                lang={lang}
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.navCommercial}
              </TrackedLink>

              <TrackedLink
                href="#process"
                trackPath="/nav/process"
                lang={lang}
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.navProcess}
              </TrackedLink>

              <TrackedLink
                href="#contact"
                trackPath="/nav/contact"
                lang={lang}
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.navContact}
              </TrackedLink>

              <TrackedLink
                href="#experience"
                trackPath="/nav/experience"
                lang={lang}
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.ctaExperience}
              </TrackedLink>

              <Link
                href={
                  i.switchHref
                }
                className={clsx(
                  navLinkClass
                )}
                style={
                  navLinkStyle
                }
              >
                {i.switchTo}
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Link
                href={
                  i.switchHref
                }
                className={clsx(
                  "rounded-xl border px-2.5 py-2 text-sm"
                )}
                style={{
                  borderColor:
                    "var(--card-border)",

                  background:
                    "transparent",
                }}
              >
                {i.switchTo}
              </Link>

              <ThemeToggle />

              <MobileMenu
                lang={lang}
                labels={{
                  name:
                    i.name,

                  role:
                    i.brandSubtitle,

                  services:
                    i.navServices,

                  projects:
                    i.navProjects,

                  commercial:
                    i.navCommercial,

                  process:
                    i.navProcess,

                  experience:
                    i.navExperience,

                  contact:
                    i.navContact,

                  linkedin:
                    i.ctaLinkedin,

                  github:
                    i.ctaGithub,

                  switchTo:
                    i.switchTo,

                  switchHref:
                    i.switchHref,
                }}
              />
            </div>

            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <PortfolioItemListJsonLd />

      {children}

      <WhatsAppFloatingButton
        lang={lang}
      />

      <ConsentBanner
        lang={lang}
      />

      <ConsentAwareVercelAnalytics />
    </div>
  );
}