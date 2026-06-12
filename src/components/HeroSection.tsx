import { LINKS, type Lang } from "@/lib/i18n";
import MotionReveal from "@/components/MotionReveal";

type HeroSectionProps = {
  i: {
    heroKicker: string;
    name: string;
    role: string;
    summary: string;
    ctaContact: string;
    navServices: string;
    ctaProjects: string;
    navCommercial: string;
    ctaExperience: string;
  };
  lang: Lang;
};

export default function HeroSection({ i, lang }: HeroSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  const chips =
    lang === "es"
      ? ["Next.js", "React Native", "Node.js", "SaaS", "IA", "Uruguay"]
      : ["Next.js", "React Native", "Node.js", "SaaS", "AI", "Uruguay"];

  return (
    <section
      className="relative overflow-hidden rounded-3xl border p-6 md:p-10"
      style={{
        borderColor: "rgba(96,165,250,0.28)",
        boxShadow:
          "0 24px 90px rgba(0,0,0,0.16), 0 0 40px rgba(96,165,250,0.10)",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.26), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.20), transparent 32%), radial-gradient(circle at center right, rgba(34,197,94,0.10), transparent 28%), var(--card)",
        }}
      />

      <div
        className="absolute right-6 top-6 -z-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "rgba(96,165,250,0.22)" }}
      />

      <div
        className="absolute bottom-8 right-16 -z-10 hidden h-28 w-28 rounded-full blur-3xl md:block"
        style={{ background: "rgba(167,139,250,0.18)" }}
      />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <MotionReveal>
          <div>
            <div
              className="inline-flex rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: "rgba(96,165,250,0.30)",
                background: "rgba(96,165,250,0.10)",
                color: "var(--muted)",
              }}
            >
              {i.heroKicker}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span>{i.name}</span>
              <span
                className="mt-2 block"
                style={{
                  background: "linear-gradient(90deg,#60a5fa,#a78bfa,#22c55e)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Software Studio
              </span>
            </h1>

            <h2
              className="mt-4 max-w-3xl text-xl leading-snug md:text-2xl"
              style={muted2Style}
            >
              {i.role}
            </h2>

            <p className="mt-5 max-w-2xl leading-relaxed" style={mutedStyle}>
              {i.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl px-5 py-2 font-medium transition hover:-translate-y-0.5"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                {i.ctaContact}
              </a>

              <a
                href="#services"
                className="rounded-xl border px-5 py-2 font-medium transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(96,165,250,0.25)",
                  background: "rgba(96,165,250,0.08)",
                }}
              >
                {i.navServices}
              </a>

              <a
                href="#projects"
                className="rounded-xl border px-5 py-2 font-medium transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(167,139,250,0.25)",
                  background: "rgba(167,139,250,0.08)",
                }}
              >
                {i.ctaProjects}
              </a>

              <a
                href="#commercial-projects"
                className="rounded-xl border px-5 py-2 font-medium transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(34,197,94,0.25)",
                  background: "rgba(34,197,94,0.08)",
                }}
              >
                {i.navCommercial}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm" style={mutedStyle}>
              <a href={LINKS.email} className="underline underline-offset-4 transition">
                {LINKS.emailText}
              </a>
              <span style={muted2Style}>•</span>
              <a href="/go/linkedin" className="underline underline-offset-4 transition">
                LinkedIn
              </a>
              <span style={muted2Style}>•</span>
              <a href="/go/github" className="underline underline-offset-4 transition">
                GitHub
              </a>
              <span style={muted2Style}>•</span>
              <a href="#experience" className="underline underline-offset-4 transition">
                {i.ctaExperience}
              </a>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <div
            className="rounded-3xl border p-5"
            style={{
              borderColor: "rgba(96,165,250,0.22)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div className="grid gap-3">
              {[
                {
                  value: "10+",
                  label: lang === "es" ? "Proyectos reales" : "Real projects",
                },
                {
                  value: "15+",
                  label: lang === "es" ? "Años en IT" : "Years in IT",
                },
                { value: "Web + Mobile", label: "Full-stack" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border p-4 transition hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(96,165,250,0.18)",
                    background:
                      "linear-gradient(135deg, rgba(96,165,250,0.10), rgba(167,139,250,0.06))",
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{
                      background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm" style={mutedStyle}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: "rgba(96,165,250,0.22)",
                    background: "rgba(96,165,250,0.08)",
                    color: "var(--muted)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}