import AnimatedCard from "@/components/AnimatedCard";

type WorkModelsSectionProps = {
  i: {
    workModelsTitle: string;
    workModelsKicker: string;
    workModelsItems: {
      title: string;
      desc: string;
    }[];
  };
};

const icons = ["🛠️", "🏷️", "🤝"];

export default function WorkModelsSection({ i }: WorkModelsSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <section className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Modalidades
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.workModelsTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
        {i.workModelsKicker}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {i.workModelsItems.map((item, index) => (
          <AnimatedCard key={item.title} delay={index * 0.06}>
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border text-xl"
              style={{
                borderColor: "rgba(167,139,250,0.35)",
                background:
                  "linear-gradient(135deg, rgba(167,139,250,0.18), rgba(96,165,250,0.12))",
              }}
            >
              {icons[index] ?? "✨"}
            </div>

            <h4
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg,#a78bfa,#60a5fa)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-relaxed" style={mutedStyle}>
              {item.desc}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}