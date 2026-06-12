import AnimatedCard from "@/components/AnimatedCard";

type TechStackSectionProps = {
  i: {
    techStackTitle: string;
    techStackKicker: string;
    techStackGroups: {
      title: string;
      items: string[];
    }[];
  };
};

const icons = ["🌐", "📱", "☁️"];

export default function TechStackSection({ i }: TechStackSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <section className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Stack
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.techStackTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
        {i.techStackKicker}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {i.techStackGroups.map((group, index) => (
          <AnimatedCard key={group.title} delay={index * 0.06}>
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
              {group.title}
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: "rgba(96,165,250,0.25)",
                    background: "rgba(96,165,250,0.08)",
                    color: "var(--muted)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}