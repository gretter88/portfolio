import { LINKS, type Lang } from "@/lib/i18n";
import MotionReveal from "@/components/MotionReveal";

type Props = {
  lang: Lang;
};

export default function CalendarCTASection({ lang }: Props) {
  const isEs = lang === "es";

  return (
    <MotionReveal>
      <section className="mt-16">
        <div
          className="rounded-3xl border p-6 md:p-8"
          style={{
            borderColor: "rgba(96,165,250,0.28)",
            background:
              "radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.14), transparent 32%), var(--card)",
            boxShadow:
              "0 24px 80px rgba(0,0,0,0.14), 0 0 35px rgba(96,165,250,0.08)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
            📅 {isEs ? "Agenda" : "Schedule"}
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            {isEs ? "Agendá una reunión inicial" : "Book an intro meeting"}
          </h3>

          <p
            className="mt-3 max-w-3xl text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {isEs
              ? "Podemos conversar 15 minutos sobre tu proyecto, idea, MVP, app, SaaS, sitio web o una posible oportunidad laboral."
              : "We can talk for 15 minutes about your project, idea, MVP, app, SaaS, website, or a possible work opportunity."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-5 py-2 font-medium transition hover:-translate-y-0.5"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              {isEs ? "Agendar reunión" : "Book meeting"}
            </a>

            <a
              href="#contact"
              className="rounded-xl border px-5 py-2 font-medium transition hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(96,165,250,0.28)",
                background: "rgba(96,165,250,0.08)",
              }}
            >
              {isEs ? "Prefiero enviar consulta" : "I prefer to send an inquiry"}
            </a>
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}