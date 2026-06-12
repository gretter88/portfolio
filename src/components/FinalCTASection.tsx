type FinalCTASectionProps = {
  i: {
    finalCtaTitle: string;
    finalCtaDesc: string;
    finalCtaPrimary: string;
    finalCtaSecondary: string;
  };
};

export default function FinalCTASection({ i }: FinalCTASectionProps) {
  return (
    <section className="mt-16">
      <div
        className="relative overflow-hidden rounded-3xl border p-6 md:p-10"
        style={{
          borderColor: "rgba(96,165,250,0.28)",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(34,197,94,0.14), transparent 32%), var(--card)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.16), 0 0 35px rgba(96,165,250,0.08)",
        }}
      >
        <div
          className="absolute right-8 top-8 h-28 w-28 rounded-full blur-3xl"
          style={{ background: "rgba(96,165,250,0.18)" }}
        />

        <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
          Software Studio
        </p>

        <h3 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight">
          {i.finalCtaTitle}
        </h3>

        <p
          className="mt-4 max-w-3xl text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {i.finalCtaDesc}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-2 font-medium transition hover:-translate-y-0.5"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            {i.finalCtaPrimary}
          </a>

          <a
            href="#commercial-projects"
            className="rounded-xl border px-5 py-2 font-medium transition hover:-translate-y-0.5"
            style={{
              borderColor: "rgba(96,165,250,0.28)",
              background: "rgba(96,165,250,0.08)",
            }}
          >
            {i.finalCtaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}