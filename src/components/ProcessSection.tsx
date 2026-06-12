import AnimatedCard from "@/components/AnimatedCard";

type ProcessStep = {
  title: string;
  desc: string;
};

type ProcessSectionProps = {
  i: {
    sectionProcessTitle: string;
    sectionProcessKicker: string;
    processSteps: ProcessStep[];
  };
};

const icons = ["🔎", "🏗️", "💻", "🚀"];

export default function ProcessSection({ i }: ProcessSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <section id="process" className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Proceso
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.sectionProcessTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
        {i.sectionProcessKicker}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {i.processSteps.map((step, index) => (
          <AnimatedCard key={step.title} delay={index * 0.06}>
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border text-xl"
              style={{
                borderColor: "rgba(34,197,94,0.35)",
                background:
                  "linear-gradient(135deg, rgba(34,197,94,0.16), rgba(96,165,250,0.12))",
              }}
            >
              {icons[index] ?? "✨"}
            </div>

            <h4
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg,#22c55e,#60a5fa)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {step.title}
            </h4>

            <p className="mt-3 text-sm leading-relaxed" style={mutedStyle}>
              {step.desc}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}