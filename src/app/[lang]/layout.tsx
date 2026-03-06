// src/app/[lang]/layout.tsx
import type { Metadata } from "next";
import { LANGS, type Lang, LINKS, t } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";

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
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl border grid place-items-center font-semibold"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card)",
              }}
            >
              SG
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold">{i.name}</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                {i.role}
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href="#projects"
              className={clsx("hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm")}
              style={{ borderColor: "var(--card-border)", background: "transparent" }}
            >
              {i.sectionProjectsTitle}
            </a>

            <a
              href="#contact"
              className={clsx("hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm")}
              style={{ borderColor: "var(--card-border)", background: "transparent" }}
            >
              {i.sectionContactTitle}
            </a>
			
			    <a
              href="#experience"
              className={clsx("hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm")}
              style={{ borderColor: "var(--card-border)", background: "transparent" }}
            >
              {i.sectionExperieciaTitle}
            </a>

            <a
              href={i.switchHref}
              className={clsx("rounded-xl border px-4 py-2 text-sm")}
              style={{ borderColor: "var(--card-border)", background: "transparent" }}
            >
              {i.switchTo}
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className={clsx("hidden md:inline-flex rounded-xl border px-4 py-2 text-sm")}
              style={{ borderColor: "var(--card-border)", background: "transparent" }}
            >
              {i.ctaLinkedin}
            </a>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className={clsx("hidden md:inline-flex rounded-xl border px-4 py-2 text-sm")}
              style={{ borderColor: "var(--card-border)", background: "transparent" }}
            >
              {i.ctaGithub}
            </a>

            <ThemeToggle />
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}

