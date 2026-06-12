import AnimatedCard from "@/components/AnimatedCard";

type WhyUsSectionProps = {
  i: {
    whyUsTitle: string;
    whyUsKicker: string;
    whyUsItems: {
      title: string;
      desc: string;
    }[];
  };
};

const icons = ["⚡", "🧠", "🚀", "📈"];

export default function WhyUsSection({ i }: WhyUsSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <section className="mt-16">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
          Diferencial
        </p>

        <h3 className="text-2xl font-semibold">{i.whyUsTitle}</h3>

        <p className="max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
          {i.whyUsKicker}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {i.whyUsItems.map((item, index) => (
          <AnimatedCard key={item.title} delay={index * 0.06}>
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border text-xl"
              style={{
                borderColor: "rgba(96,165,250,0.35)",
                background:
                  "linear-gradient(135deg, rgba(96,165,250,0.18), rgba(167,139,250,0.12))",
              }}
            >
              {icons[index] ?? "✨"}
            </div>

            <h4
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
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