import ContactForm from "@/components/ContactForm";
import { LINKS, type Lang } from "@/lib/i18n";

type ContactSectionProps = {
  i: {
    sectionContactTitle: string;
    sectionContactDesc: string;
    ctaEmail: string;
    ctaLinkedin: string;
    ctaGithub: string;
    contactDirectEmail: string;
    contactResponseNote: string;

    contactFormName: string;
    contactFormEmail: string;
    contactFormProjectType: string;
    contactFormMessage: string;
    contactFormSubmit: string;
    contactFormSending: string;
    contactFormSuccess: string;
    contactFormError: string;
  };
  lang: Lang;
};

export default function ContactSection({ i, lang }: ContactSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  const primaryBtnStyle: React.CSSProperties = {
    background: "var(--foreground)",
    color: "var(--background)",
  };

  const softBtnStyle: React.CSSProperties = {
    background: "rgba(96,165,250,0.08)",
    borderColor: "rgba(96,165,250,0.25)",
  };

  return (
    <section id="contact" className="mt-16">
      <div
        className="overflow-hidden rounded-3xl border p-6 md:p-8"
        style={{
          borderColor: "rgba(96,165,250,0.28)",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.16), transparent 32%), var(--card)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.18), 0 0 35px rgba(96,165,250,0.08)",
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium" style={muted2Style}>
              Contacto comercial
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              {i.sectionContactTitle}
            </h3>

            <p className="mt-4 text-sm leading-relaxed" style={mutedStyle}>
              {i.sectionContactDesc}
            </p>

            <div className="mt-6 grid gap-3">
              <div
                className="rounded-2xl border p-4 text-sm"
                style={{
                  borderColor: "rgba(96,165,250,0.25)",
                  background: "rgba(96,165,250,0.08)",
                }}
              >
                <div className="font-medium">📩 Email</div>
                <div className="mt-1" style={mutedStyle}>
                  {LINKS.emailText}
                </div>
              </div>

              <div
                className="rounded-2xl border p-4 text-sm"
                style={{
                  borderColor: "rgba(167,139,250,0.25)",
                  background: "rgba(167,139,250,0.08)",
                }}
              >
                <div className="font-medium">⚡ {i.contactResponseNote}</div>
                <div className="mt-1" style={mutedStyle}>
                  {lang === "es"
                    ? "Ideal para presupuestos, MVPs, SaaS, apps móviles y plataformas web."
                    : "Ideal for proposals, MVPs, SaaS, mobile apps, and web platforms."}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={LINKS.email}
                className="rounded-xl px-5 py-2 font-medium transition"
                style={primaryBtnStyle}
              >
                {i.ctaEmail}
              </a>

              <a
                href="/go/linkedin"
                className="rounded-xl border px-5 py-2 font-medium transition"
                style={softBtnStyle}
              >
                {i.ctaLinkedin}
              </a>

              <a
                href="/go/github"
                className="rounded-xl border px-5 py-2 font-medium transition"
                style={softBtnStyle}
              >
                {i.ctaGithub}
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl border p-4 md:p-5"
            style={{
              borderColor: "rgba(255,255,255,0.10)",
              background: "rgba(0,0,0,0.10)",
            }}
          >
            <ContactForm i={i} />
          </div>
        </div>
      </div>
    </section>
  );
}