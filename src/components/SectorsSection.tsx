import AnimatedCard from "@/components/AnimatedCard";

type SectorsSectionProps = {
  i: {
    sectorsTitle: string;
    sectorsKicker: string;
    sectorsItems: {
      title: string;
      desc: string;
    }[];
  };
};

const icons = ["🏢", "🏛️", "🎨"];

export default function SectorsSection({ i }: SectorsSectionProps) {
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <section className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Sectores
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.sectorsTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
        {i.sectorsKicker}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {i.sectorsItems.map((item, index) => (
          <AnimatedCard key={item.title} delay={index * 0.06}>
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border text-xl"
              style={{
                borderColor: "rgba(96,165,250,0.35)",
                background:
                  "linear-gradient(135deg, rgba(96,165,250,0.18), rgba(34,197,94,0.10))",
              }}
            >
              {icons[index] ?? "✨"}
            </div>

            <h4
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg,#60a5fa,#22c55e)",
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