import AnimatedCard from "@/components/AnimatedCard";

type StudioIntroSectionProps = {
  i: {
    studioIntroTitle: string;
    studioIntroDesc: string;
    studioIntroItems: string[];
  };
};

const icons = ["💼", "🧩", "🚀"];

export default function StudioIntroSection({ i }: StudioIntroSectionProps) {
  return (
    <section className="mt-12">
      <div
        className="overflow-hidden rounded-3xl border p-6 md:p-8"
        style={{
          borderColor: "rgba(96,165,250,0.25)",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.14), transparent 32%), var(--card)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.12), 0 0 30px rgba(96,165,250,0.08)",
        }}
      >
        <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
          Software Studio
        </p>

        <h3 className="mt-3 text-2xl font-semibold">{i.studioIntroTitle}</h3>

        <p
          className="mt-3 max-w-3xl text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {i.studioIntroDesc}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {i.studioIntroItems.map((item, index) => (
            <AnimatedCard key={item} delay={index * 0.06}>
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

              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {item}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}