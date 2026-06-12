import type { Lang } from "@/lib/i18n";
import AnimatedCard from "@/components/AnimatedCard";
type ServiceItem = {
  title: string;
  desc: string;
  items: string[];
};

type ServicesSectionProps = {
  i: {
    sectionServicesTitle: string;
    sectionServicesKicker: string;
    services: ServiceItem[];
  };
  lang: Lang;
};

export default function ServicesSection({ i }: ServicesSectionProps) {
  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  return (
    <section id="services" className="mt-16">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium" style={muted2Style}>
          Software Studio
        </p>

        <h3 className="text-2xl font-semibold">{i.sectionServicesTitle}</h3>

        <p className="max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
          {i.sectionServicesKicker}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {i.services.map((service) => (
         <AnimatedCard key={service.title} delay={0.05}>
		  
		  
            <h4 className="text-lg font-semibold" style={{
  background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
  WebkitBackgroundClip: "text",
  color: "transparent",
}}>{service.title}</h4>

            <p className="mt-3 text-sm leading-relaxed" style={mutedStyle}>
              {service.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {service.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--background)",
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