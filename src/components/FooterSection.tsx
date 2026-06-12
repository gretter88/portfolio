import { LINKS, type Lang } from "@/lib/i18n";

type FooterSectionProps = {
  i: {
    footer: string;
    navServices: string;
    navProjects: string;
    navCommercial: string;
    navProcess: string;
    navContact: string;
  };
  lang: Lang;
};

export default function FooterSection({ i }: FooterSectionProps) {
  return (
    <footer
      className="mt-16 border-t pt-8 text-sm"
      style={{ borderColor: "var(--card-border)", color: "var(--muted-2)" }}
    >
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl border grid place-items-center font-semibold"
              style={{
                borderColor: "rgba(96,165,250,0.28)",
                background: "rgba(96,165,250,0.08)",
                color: "var(--foreground)",
              }}
            >
              SG
            </div>

            <div>
              <div className="font-semibold" style={{ color: "var(--foreground)" }}>
                Santiago Gretter
              </div>
              <div>Software Studio</div>
            </div>
          </div>

          <p className="mt-4 max-w-xl leading-relaxed">
            Desarrollo web, apps móviles, SaaS, productos digitales y soluciones a medida para empresas, startups e instituciones.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a href={LINKS.email} className="underline underline-offset-4">
              {LINKS.emailText}
            </a>
            <a href="/go/linkedin" className="underline underline-offset-4">
              LinkedIn
            </a>
            <a href="/go/github" className="underline underline-offset-4">
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href="#services" className="rounded-xl border px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
            {i.navServices}
          </a>
          <a href="#projects" className="rounded-xl border px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
            {i.navProjects}
          </a>
          <a href="#commercial-projects" className="rounded-xl border px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
            {i.navCommercial}
          </a>
          <a href="#process" className="rounded-xl border px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
            {i.navProcess}
          </a>
          <a href="#contact" className="rounded-xl border px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
            {i.navContact}
          </a>
        </div>
      </div>

      <div className="mt-8 border-t pt-5" style={{ borderColor: "var(--card-border)" }}>
        © {new Date().getFullYear()} {i.footer}
      </div>
    </footer>
  );
}