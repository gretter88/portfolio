// src/app/[lang]/layout.tsx
import type { Metadata } from "next";
import { LANGS, type Lang, LINKS, t } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import TrackedLink from "@/components/TrackedLink";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const i = t(lang);
  const baseUrl = new URL("https://www.santiagogretter.com.uy");
  const url = new URL(`/${lang}`, baseUrl);
  const title = `${i.name} — Portfolio`;
  const description = i.summary;

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: {
      canonical: url.pathname,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      url: url.toString(),
      title,
      description,
      siteName: `${i.name} — Portfolio`,
      images: [
        {
          url: "/og/og.png",
          width: 1200,
          height: 630,
          alt: `${i.name} — Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/og2.png"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const i = t(lang);

  return (
    <div className="scroll-smooth">
      <header
        className="sticky top-0 z-40 border-b backdrop-blur"
        style={{
          borderColor: "var(--card-border)",
          background: "color-mix(in srgb, var(--background) 75%, transparent)",
        }}
      >
       <div className="mx-auto flex max-w-5xl items-center justify-between px-3 py-3 md:px-6 md:py-4">



          <div className="flex items-center gap-2 md:gap-3 min-w-0">
  <div
    className="h-9 w-9 shrink-0 rounded-xl border grid place-items-center font-semibold"
    style={{
      borderColor: "var(--card-border)",
      background: "var(--card)",
    }}
  >
    SG
  </div>

  <div className="hidden sm:block leading-tight min-w-0">
    <div className="text-sm font-semibold truncate">{i.name}</div>
    <div
      className="hidden md:block text-xs"
      style={{ color: "var(--muted)" }}
    >
      {i.role}
    </div>
  </div>
</div>



         <nav className="flex items-center gap-2">
  <div className="hidden md:flex items-center gap-2">
    <TrackedLink
      href="#projects"
      trackPath="/nav/projects"
      lang={lang}
      className={clsx("rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.sectionProjectsTitle}
    </TrackedLink>

    <TrackedLink
      href="#commercial-projects"
      trackPath="/nav/commercial-projects"
      lang={lang}
      className={clsx("rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.navCommercial}
    </TrackedLink>

    <TrackedLink
      href="#contact"
      trackPath="/nav/contact"
      lang={lang}
      className={clsx("rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.sectionContactTitle}
    </TrackedLink>

    <TrackedLink
      href="#experience"
      trackPath="/nav/experience"
      lang={lang}
      className={clsx("rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.sectionExperienceTitle}
    </TrackedLink>

    <Link
      href={i.switchHref}
      className={clsx("rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.switchTo}
    </Link>

    <TrackedLink
      href="/go/linkedin"
      trackPath="/nav/linkedin"
      lang={lang}
      className={clsx("hidden lg:inline-flex rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.ctaLinkedin}
    </TrackedLink>

    <TrackedLink
      href="/go/github"
      trackPath="/nav/github"
      lang={lang}
      className={clsx("hidden lg:inline-flex rounded-xl border px-4 py-2 text-sm")}
      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.ctaGithub}
    </TrackedLink>
  </div>

  <div className="flex items-center gap-2 md:hidden">
    <Link
      href={i.switchHref}
      className={clsx("rounded-xl border px-2.5 py-2 text-sm")}

      style={{ borderColor: "var(--card-border)", background: "transparent" }}
    >
      {i.switchTo}
    </Link>

    <ThemeToggle />

 <MobileMenu
  lang={lang}
  labels={{
    name: i.name,
    role: i.role,
    projects: i.sectionProjectsTitle,
    commercial: i.navCommercial,
    experience: i.sectionExperienceTitle,
    contact: i.sectionContactTitle,
    linkedin: i.ctaLinkedin,
    github: i.ctaGithub,
    switchTo: i.switchTo,
    switchHref: i.switchHref,
  }}
/>

  </div>

  <div className="hidden md:block">
    <ThemeToggle />
  </div>
</nav>

        </div>
      </header>

      {children}
      <Analytics />
    </div>
  );
}

