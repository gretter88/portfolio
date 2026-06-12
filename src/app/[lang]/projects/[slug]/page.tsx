import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, type Lang } from "@/lib/i18n";
import { getCaseStudy } from "@/lib/project-case-studies";
import type { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }> | { lang: string; slug: string };
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const study = getCaseStudy(lang, resolved.slug);

  if (!study) {
    return {
      title: "Project case study · Santiago Gretter",
      description: "Full-stack project case study by Santiago Gretter.",
    };
  }

  const url = `https://www.santiagogretter.com.uy/${lang}/projects/${study.slug}`;
const seoTitleMap: Record<string, string> = {
  nutrimvp:
    "NutriMVP | App de nutrición, precios y supermercados | Santiago Gretter",

  playduel:
    "PlayDuel | Plataforma Gaming Multijugador en Tiempo Real | Santiago Gretter",

  "sg-copilot-crm":
    "SG Copilot CRM | CRM con IA para Empresas | Santiago Gretter",
};

const seoTitle =
  seoTitleMap[study.slug] ??
  `${study.title} | Software Development Project | Santiago Gretter`;
  
  
  
  const seoDescriptionMap: Record<string, string> = {
  nutrimvp:
    "Aplicación móvil para nutrición, comparación de precios, supermercados cercanos y gestión inteligente de compras.",

  playduel:
    "Plataforma gaming multijugador con matchmaking, rankings, chat en tiempo real y arquitectura escalable.",

  "sg-copilot-crm":
    "CRM con inteligencia artificial para automatizar ventas, seguimiento de clientes y procesos comerciales.",
};


  
  
  
  return {
    title: seoTitle,
    description: study.summary,
    alternates: {
      canonical: url,
      languages: {
        es: `https://www.santiagogretter.com.uy/es/projects/${study.slug}`,
        en: `https://www.santiagogretter.com.uy/en/projects/${study.slug}`,
      },
    },
    openGraph: {
      title: `${study.title} · Case Study`,
      description:
  seoDescriptionMap[study.slug] ?? study.summary,
      url,
      siteName: "Santiago Gretter Portfolio",
      type: "article",
      images: [
        {
          url: `/${lang}/projects/${study.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
      locale: lang === "es" ? "es_UY" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} · Case Study`,
      description: study.summary,
      images: [`/${lang}/projects/${study.slug}/opengraph-image`],
    },
  };
}



export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }> | { lang: string; slug: string };
}) {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const isEs = lang === "es";

  const study = getCaseStudy(lang, resolved.slug);

  if (!study) {
    notFound();
  }

  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <Link
            href={`/${lang}#projects`}
            className="text-sm underline underline-offset-4"
            style={muted2Style}
          >
            ← {isEs ? "Volver al portfolio" : "Back to portfolio"}
          </Link>
        </div>

        <section className="rounded-3xl border overflow-hidden" style={cardStyle}>
          <div
            className="px-6 py-8 md:px-10 md:py-10 border-b"
            style={{
              borderColor: "var(--card-border)",
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.10), rgba(34,197,94,0.08), rgba(168,85,247,0.07))",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: "rgba(34,197,94,0.35)",
                background: "rgba(34,197,94,0.10)",
              }}
            >
              <span className="h-2 w-2 rounded-full bg-green-400" />
              {study.status}
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              {study.title}
            </h1>

            <h2 className="mt-3 text-xl md:text-2xl" style={muted2Style}>
              {study.subtitle}
            </h2>

            <p className="mt-5 max-w-3xl leading-relaxed" style={mutedStyle}>
              {study.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={study.requestHref}
                className="rounded-xl px-5 py-2 font-medium transition"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                {isEs ? "Consultar este proyecto" : "Inquire about this project"}
              </a>

              <Link
                href={`/${lang}#contact`}
                className="rounded-xl border px-5 py-2 font-medium transition"
                style={{
                  borderColor: "var(--card-border)",
                  background: "var(--card)",
                }}
              >
                {isEs ? "Contactar" : "Contact"}
              </Link>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--background)",
              }}
            >
              <img
                src={study.heroImage}
                alt={study.title}
                className="w-full"
                style={{
                  height: 520,
                  objectFit: "contain",
                  background: "var(--background)",
                }}
              />
            </div>
          </div>
        </section>
{study.screenshots.length > 0 ? (
  <section className="mt-8">
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <h3 className="text-2xl font-semibold">
          {isEs ? "Screenshots del producto" : "Product screenshots"}
        </h3>
        <p className="mt-2 text-sm" style={mutedStyle}>
          {isEs
            ? "Vistas reales del flujo, módulos principales y experiencia de usuario."
            : "Real views of the flow, main modules, and user experience."}
        </p>
      </div>
    </div>

    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {study.screenshots.map((shot) => (
        <div
          key={shot.src}
          className="overflow-hidden rounded-2xl border"
          style={{
            borderColor: "var(--card-border)",
            background: "var(--card)",
          }}
        >
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className="w-full transition duration-300 hover:scale-[1.02]"
            style={{
              height: 460,
              objectFit: "contain",
              objectPosition: "center",
              background: "var(--background)",
              display: "block",
            }}
          />

          <div
            className="border-t px-4 py-3 text-xs"
            style={{
              borderColor: "var(--card-border)",
              color: "var(--muted-2)",
            }}
          >
            {shot.alt}
          </div>
        </div>
      ))}
    </div>
  </section>
) : null}

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-5" style={cardStyle}>
            <h3 className="font-semibold">{isEs ? "Problema" : "Problem"}</h3>
            <p className="mt-3 text-sm leading-relaxed" style={mutedStyle}>
              {study.problem}
            </p>
          </div>

          <div className="rounded-2xl border p-5" style={cardStyle}>
            <h3 className="font-semibold">{isEs ? "Solución" : "Solution"}</h3>
            <p className="mt-3 text-sm leading-relaxed" style={mutedStyle}>
              {study.solution}
            </p>
          </div>

          <div className="rounded-2xl border p-5" style={cardStyle}>
            <h3 className="font-semibold">Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--muted)",
                    background: "var(--background)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
<section className="mt-8 rounded-2xl border p-5" style={cardStyle}>
  <h3 className="text-xl font-semibold">
    {isEs ? "Tecnologías y enfoque" : "Technologies and focus"}
  </h3>

  <div className="mt-4 flex flex-wrap gap-2">
    {study.seoKeywords.map((item) => (
      <span
        key={item}
        className="rounded-full border px-3 py-1 text-sm"
        style={{
          borderColor: "rgba(96,165,250,0.30)",
          background: "rgba(96,165,250,0.08)",
          color: "var(--foreground)",
        }}
      >
        {item}
      </span>
    ))}
  </div>
</section>
        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5" style={cardStyle}>
            <h3 className="text-xl font-semibold">
              {isEs ? "Highlights técnicos" : "Technical highlights"}
            </h3>

            <ul className="mt-4 space-y-2 text-sm" style={mutedStyle}>
              {study.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--muted-2)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border p-5" style={cardStyle}>
            <h3 className="text-xl font-semibold">
              {isEs ? "Valor comercial" : "Business value"}
            </h3>

            <ul className="mt-4 space-y-2 text-sm" style={mutedStyle}>
              {study.businessValue.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--muted-2)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
{/*
        <section className="mt-8 rounded-2xl border p-5" style={cardStyle}>
          <h3 className="text-xl font-semibold">
            {isEs ? "Próximos pasos sugeridos" : "Suggested next steps"}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.nextSteps.map((item) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1 text-sm"
                style={{
                  borderColor: "rgba(59,130,246,0.30)",
                  background: "rgba(59,130,246,0.08)",
                  color: "var(--foreground)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>
		
		*/}
<section className="mt-10">
  <div
    className="rounded-3xl border p-6"
    style={{
      borderColor: "var(--card-border)",
      background: "var(--card)",
    }}
  >
    <h3 className="text-2xl font-semibold">
      {isEs ? "Disponibilidad comercial" : "Commercial availability"}
    </h3>

    <div className="mt-6 grid gap-6 md:grid-cols-3">
      <div>
        <div
          className="text-xs uppercase tracking-wide"
          style={{ color: "var(--muted-2)" }}
        >
          {isEs ? "Disponible para" : "Available for"}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {study.commercial.availableFor.map((item) => (
            <span
              key={item}
              className="rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: "rgba(34,197,94,0.25)",
                background: "rgba(34,197,94,0.08)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div
          className="text-xs uppercase tracking-wide"
          style={{ color: "var(--muted-2)" }}
        >
          {isEs ? "Modelo" : "Model"}
        </div>

        <div className="mt-2 text-sm">
          {study.commercial.pricingModel}
        </div>
      </div>

      <div>
        <div
          className="text-xs uppercase tracking-wide"
          style={{ color: "var(--muted-2)" }}
        >
          {isEs ? "Ideal para" : "Ideal for"}
        </div>

        <ul className="mt-2 space-y-1 text-sm">
          {study.commercial.targetAudience.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-6">
      <a
        href={study.requestHref}
        className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        {study.commercial.contactLabel}
      </a>
    </div>
  </div>
</section>

        <section
          className="mt-8 rounded-2xl border p-6"
          style={{
            borderColor: "rgba(34,197,94,0.28)",
            background: "rgba(34,197,94,0.08)",
          }}
        >
          <h3 className="text-xl font-semibold">
            {isEs ? "¿Te interesa este proyecto?" : "Interested in this project?"}
          </h3>

          <p className="mt-3 text-sm leading-relaxed" style={mutedStyle}>
            {isEs
              ? "Podés solicitar más información, una demo privada, una ficha comercial o conversar una posible implementación, licencia, white-label o partnership."
              : "You can request more information, a private demo, a commercial one-pager, or discuss a possible deployment, license, white-label, or partnership."}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={study.requestHref}
              className="rounded-xl px-5 py-2 font-medium"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              {isEs ? "Solicitar información" : "Request information"}
            </a>

            <Link
              href={`/${lang}#projects`}
              className="rounded-xl border px-5 py-2 font-medium"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card)",
              }}
            >
              {isEs ? "Ver otros proyectos" : "View other projects"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
