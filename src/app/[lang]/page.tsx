// src/app/[lang]/page.tsx
import { LANGS, type Lang, LINKS, t } from "@/lib/i18n";
import ProjectsGrid from "@/components/ProjectsGrid";
import TrackPageView from "@/components/TrackPageView";
function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
  searchParams?: Promise<{ project?: string; video?: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const i = t(lang);

  const initialProjectSlug = resolvedSearchParams?.project ?? null;
  const initialVideo = resolvedSearchParams?.video === "1";

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

  const linkClass = "underline underline-offset-4 transition";
  const linkStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <main>
	 <TrackPageView path={`/${lang}`} lang={lang} />
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

            <a href="#experience" className={softBtnClass} style={softBtnStyle}>
              {i.ctaExperience}
            </a>

            <a href="/go/cv" className={softBtnClass} style={softBtnStyle}>
              {i.ctaDownloadCv}
            </a>
          </div>

          <div className="mt-2 flex flex-wrap gap-3 text-sm" style={mutedStyle}>
            <a href={LINKS.email} className={linkClass} style={linkStyle}>
              {LINKS.emailText}
            </a>

            <span style={muted2Style}>•</span>

            <a href="/go/linkedin" className={linkClass} style={linkStyle}>
              LinkedIn
            </a>

            <span style={muted2Style}>•</span>

            <a href="/go/github" className={linkClass} style={linkStyle}>
              GitHub
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">{i.sectionProjectsTitle}</h3>

          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            {i.sectionProjectsKicker}
          </p>

          <ProjectsGrid
            lang={lang}
            projects={i.projects}
            initialProjectSlug={initialProjectSlug}
            initialVideo={initialVideo}
          />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-16">
          <h3 className="text-2xl font-semibold">{i.sectionExperienceTitle}</h3>

          <p className="mt-3 text-sm" style={mutedStyle}>
            {i.sectionExperienceKicker}
          </p>

          <div className="mt-6 grid gap-4">
            {i.experience.map(
              (e: {
                company: string;
                role: string;
                period: string;
                bullets: string[];
                stack: string[];
              }) => (
                <div
                  key={`${e.company}-${e.period}`}
                  className="rounded-2xl border p-5"
                  style={cardStyle}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold leading-snug">{e.company}</h4>

                        <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                          {e.role}
                        </div>
                      </div>

                      <span
                        className="shrink-0 text-xs rounded-full border px-3 py-1"
                        style={{
                          borderColor: "var(--card-border)",
                          color: "var(--muted-2)",
                          background: "var(--background)",
                        }}
                      >
                        {e.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm" style={mutedStyle}>
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{ background: "var(--muted-2)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full border px-3 py-1"
                        style={{
                          borderColor: "var(--card-border)",
                          color: "var(--muted)",
                          background: "var(--background)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">{i.sectionSkillsTitle}</h3>

          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
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

        {/* NOW / AVAILABILITY */}
        <section className="mt-16">
          <div className="rounded-2xl border p-6" style={cardStyle}>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">{i.sectionNowTitle}</h3>
              <p className="text-sm leading-relaxed" style={mutedStyle}>
                {i.sectionNowDesc}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span style={{ color: "var(--muted-2)" }}>{i.nowChipsLabel}</span>
              {i.nowChips.map((c: string) => {
                const key = c.toLowerCase();
                const dotColor = key.includes("web")
                  ? "#22c55e"
                  : key.includes("mobile")
                  ? "#f59e0b"
                  : "#60a5fa";

                return (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
                    style={{
                      borderColor: "var(--card-border)",
                      background: "var(--background)",
                      color: "var(--muted)",
                    }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: dotColor }} />
                    {c}
                  </span>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span style={{ color: "var(--muted-2)" }}>{i.bestFitLabel}</span>
              {i.bestFitItems.map((item: string) => {
                const k = item.toLowerCase();
                const dotColor =
                  k.includes("real") || k.includes("tiempo")
                    ? "#a78bfa"
                    : k.includes("map")
                    ? "#22c55e"
                    : "#60a5fa";

                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
                    style={{
                      borderColor: "var(--card-border)",
                      background: "var(--background)",
                      color: "var(--muted)",
                    }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: dotColor }} />
                    {item}
                  </span>
                );
              })}
            </div>

            <ul className="mt-4 space-y-2 text-sm" style={mutedStyle}>
              {i.nowPoints.map((item: string) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--muted-2)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#contact" className={primaryBtnClass} style={primaryBtnStyle}>
                {i.nowCtaPrimary}
              </a>

              <a href="/go/cv" className={softBtnClass} style={softBtnStyle}>
                {i.nowCtaSecondary}
              </a>

              <span className="text-sm" style={{ color: "var(--muted-2)" }}>
                {i.nowResponseTime}
              </span>
            </div>
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

            <a href="/go/linkedin" className={softBtnClass} style={softBtnStyle}>
              {i.ctaLinkedin}
            </a>

            <a href="/go/github" className={softBtnClass} style={softBtnStyle}>
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

