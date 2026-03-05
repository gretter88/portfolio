// src/app/[lang]/page.tsx
import { LANGS, type Lang, LINKS, t } from "@/lib/i18n";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export default async function Page({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const i = t(lang);

  // helpers para estilos basados en variables CSS (sin Tailwind dark:)
  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  const softBtnClass = "rounded-xl border px-5 py-2 font-medium transition";
  const softBtnStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const ghostBtnClass = "rounded-xl border px-4 py-2 transition text-sm";
  const ghostBtnStyle: React.CSSProperties = {
    background: "transparent",
    borderColor: "var(--card-border)",
  };

  const primaryBtnClass = "rounded-xl px-5 py-2 font-medium transition";
  const primaryBtnStyle: React.CSSProperties = {
    background: "var(--foreground)",
    color: "var(--background)",
  };

  const linkClass =
    "underline underline-offset-4 transition";
  const linkStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <section className="flex flex-col gap-6">
          <p className="text-sm" style={mutedStyle}>
            {i.heroKicker}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{i.name}</h1>
          <h2 className="text-xl md:text-2xl" style={muted2Style}>
            {i.role}
          </h2>

          <p className="max-w-2xl leading-relaxed" style={mutedStyle}>
            {i.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className={primaryBtnClass} style={primaryBtnStyle}>
              {i.ctaProjects}
            </a>

            <a href="#contact" className={softBtnClass} style={softBtnStyle}>
              {i.ctaContact}
            </a>

            <a href="/cv.pdf" className={softBtnClass} style={softBtnStyle}>
              {i.ctaDownloadCv}
            </a>
          </div>

          <div className="mt-2 flex flex-wrap gap-3 text-sm" style={mutedStyle}>
            <a href={LINKS.email} className={linkClass} style={linkStyle}>
              {LINKS.emailText}
            </a>
            <span style={muted2Style}>•</span>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
              style={linkStyle}
            >
              LinkedIn
            </a>
            <span style={muted2Style}>•</span>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
              style={linkStyle}
            >
              GitHub
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">{i.sectionProjectsTitle}</h3>
        {/*  <p className="mt-2" style={mutedStyle}>
            {i.sectionProjectsDesc}
          </p>*/}
<p className="mt-2 text-zinc-600 dark:text-zinc-400">{i.sectionProjectsKicker}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
           {[...i.projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999)).map((p) => {
             const isRestricted =
  p.title.includes("Kiosco") || p.title.includes("Kiosk");

              const subject = encodeURIComponent(
                lang === "es"
                  ? `Solicitud de acceso demo: ${p.title}`
                  : `Request: demo access — ${p.title}`
              );

              const body = encodeURIComponent(
                lang === "es"
                  ? `Hola Santiago,\n\nMe gustaría acceder a la demo de "${p.title}".\nURL: ${
                      p.links?.demo || ""
                    }\n\nNombre:\nEmpresa:\nMotivo:\n\nGracias!`
                  : `Hi Santiago,\n\nI'd like access to the "${p.title}" demo.\nURL: ${
                      p.links?.demo || ""
                    }\n\nName:\nCompany:\nReason:\n\nThanks!`
              );

              return (
                <div
                  key={p.title}
                  className={clsx(
                    "rounded-2xl border p-5 transition",
                    "hover:opacity-[0.98]"
                  )}
                  style={cardStyle}
                >
                  {p.image?.src ? (
                   <div className="mb-4 overflow-hidden rounded-xl border" style={cardStyle}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
  src={p.image.src}
  alt={p.image.alt}
  className="w-full"
  style={{ height: 220, objectFit: "contain", background: "var(--background)" }}
  loading="lazy"
/>
                    </div>
                  ) : null}
				  
				  

                  <h4 className="text-lg font-semibold">{p.title}</h4>
			{p.badge ? (
  <div className="mb-3">
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200">
     <span
  className={[
    "h-2 w-2 rounded-full",
    /restricted/i.test(p.badge)
      ? "bg-zinc-400"
      : /testing/i.test(p.badge)
      ? "bg-amber-400"
      : /live/i.test(p.badge)
      ? "bg-green-400"
      : "bg-zinc-500",
  ].join(" ")}
/>

      {p.badge}
    </span>
  </div>
) : null}

                  <p className="mt-2 text-sm leading-relaxed" style={mutedStyle}>
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full border px-3 py-1"
                        style={{
                          borderColor: "var(--card-border)",
                          color: "var(--muted)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    {/* DEMO / ACCESO */}
                    {p.links?.demo ? (
                      isRestricted ? (
                        <a
                          className={ghostBtnClass}
                          style={ghostBtnStyle}
                          href={`mailto:gretter88@gmail.com?subject=${subject}&body=${body}`}
                        >
                          {lang === "es" ? "Solicitar acceso" : "Request access"}
                        </a>
                      ) : (
                        <a
                          className={ghostBtnClass}
                          style={ghostBtnStyle}
                          href={p.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      )
                    ) : (
                      <span
                        className="rounded-xl border px-4 py-2"
                        style={{
                          borderColor: "var(--card-border)",
                          color: "var(--muted-2)",
                        }}
                      >
                        {lang === "es" ? "Demo (próximamente)" : "Demo (coming soon)"}
                      </span>
                    )}

                    {/* REPO */}
                    <span
                      className="rounded-xl border px-4 py-2"
                      style={{
                        borderColor: "var(--card-border)",
                        color: "var(--muted)",
                      }}
                    >
                      {lang === "es" ? "Repo: Privado" : "Repo: Private"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">{i.sectionSkillsTitle}</h3>
<p className="mt-2 text-zinc-600 dark:text-zinc-400">
  {i.sectionSkillsKicker}
</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {i.skills.map((s) => (
              <div key={s.title} className="rounded-2xl border p-5" style={cardStyle}>
                <h4 className="font-semibold">{s.title}</h4>
                <ul className="mt-3 space-y-2 text-sm" style={mutedStyle}>
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--muted-2)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">{i.sectionContactTitle}</h3>
          <p className="mt-2" style={mutedStyle}>
            {i.sectionContactDesc}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={LINKS.email} className={primaryBtnClass} style={primaryBtnStyle}>
              {i.ctaEmail}
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className={softBtnClass}
              style={softBtnStyle}
            >
              {i.ctaLinkedin}
            </a>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className={softBtnClass}
              style={softBtnStyle}
            >
              {i.ctaGithub}
            </a>
          </div>

          <div className="mt-4 text-sm" style={mutedStyle}>
            {lang === "es" ? "Email directo: " : "Direct email: "}
            <span style={{ color: "var(--foreground)" }}>{LINKS.emailText}</span>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="mt-16 border-t pt-6 text-sm"
          style={{ borderColor: "var(--card-border)", color: "var(--muted-2)" }}
        >
          © {new Date().getFullYear()} {i.footer}
        </footer>
      </div>
    </main>
  );
}