import AnimatedCard from "@/components/AnimatedCard";
type StatsSectionProps = {
  i: {
    statsTitle: string;
    statsItems: {
      value: string;
      label: string;
      desc: string;
    }[];
  };
};

export default function StatsSection({ i }: StatsSectionProps) {
  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const mutedStyle: React.CSSProperties = {
    color: "var(--muted)",
  };

  return (
    <section className="mt-12">
      <div className="grid gap-4 md:grid-cols-4">
        {i.statsItems.map((item) => (
          <AnimatedCard key={item.label} delay={0.05}>
            <div
  className="text-2xl font-bold"
  style={{
    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
  {item.value}
</div>
            <div className="mt-2 font-medium">
              {item.label}
            </div>

            <div
              className="mt-2 text-sm leading-relaxed"
              style={mutedStyle}
            >
              {item.desc}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}