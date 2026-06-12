// src/app/[lang]/page.tsx
import { LANGS, type Lang, LINKS, t } from "@/lib/i18n";
import ProjectsGrid from "@/components/ProjectsGrid";
import TrackPageView from "@/components/TrackPageView";
import CommercialProjectsSection from "@/components/CommercialProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StudioIntroSection from "@/components/StudioIntroSection";
import FinalCTASection from "@/components/FinalCTASection";
import StatsSection from "@/components/StatsSection";
import SectorsSection from "@/components/SectorsSection";
import TechStackSection from "@/components/TechStackSection";
import WhyUsSection from "@/components/WhyUsSection";
import WorkModelsSection from "@/components/WorkModelsSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechnicalProfileSection from "@/components/TechnicalProfileSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import ToolLogosSection from "@/components/ToolLogosSection";
import MotionReveal from "@/components/MotionReveal";
import CalendarCTASection from "@/components/CalendarCTASection";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
  searchParams?: Promise<{ project?: string; video?: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const i = t(lang);

  const initialProjectSlug = resolvedSearchParams?.project ?? null;
  const initialVideo = resolvedSearchParams?.video === "1";

  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  const softBtnClass = "rounded-xl border px-5 py-2 font-medium transition";
  const softBtnStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const ghostBtnClass = "rounded-xl border px-4 py-2 transition text-sm";
  const ghostBtnStyle: React.CSSProperties = {
    background: "transparent",
    borderColor: "var(--card-border)",
  };

  const primaryBtnClass = "rounded-xl px-5 py-2 font-medium transition";
  const primaryBtnStyle: React.CSSProperties = {
    background: "var(--foreground)",
    color: "var(--background)",
  };

  const linkClass = "underline underline-offset-4 transition";
  const linkStyle: React.CSSProperties = { color: "var(--muted)" };

  return (
    <main>
      <TrackPageView path={`/${lang}`} lang={lang} />

      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
       <HeroSection i={i} lang={lang} />
		
		<MotionReveal>
  <StatsSection i={i} />
</MotionReveal>

<MotionReveal delay={0.05}>
  <StudioIntroSection i={i} />
</MotionReveal>

<MotionReveal delay={0.08}>
  <ServicesSection i={i} lang={lang} />
</MotionReveal>

<SectorsSection i={i} />
<TechStackSection i={i} />
<WhyUsSection i={i} />
<WorkModelsSection i={i} />

        {/* PROJECTS */}
<section id="projects" className="mt-16">
 <MotionReveal>
  <div
    className="rounded-3xl border p-6 md:p-8"
    style={{
      borderColor: "rgba(96,165,250,0.25)",
      background:
        "radial-gradient(circle at top left, rgba(96,165,250,0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.12), transparent 32%), var(--card)",
    }}
  >
    <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
      Portfolio
    </p>

    <h3 className="mt-3 text-2xl font-semibold">{i.sectionProjectsTitle}</h3>

    <p
      className="mt-3 max-w-3xl text-sm leading-relaxed"
      style={{ color: "var(--muted)" }}
    >
      {i.sectionProjectsKicker}
    </p>
  </div>
</MotionReveal>
  <ProjectsGrid
    lang={lang}
    projects={i.projects}
    initialProjectSlug={initialProjectSlug}
    initialVideo={initialVideo}
  />
</section>

<CommercialProjectsSection i={i} lang={lang} />

<ProcessSection i={i} />

{/* EXPERIENCE */}
<ExperienceSection i={i} />


        {/* SKILLS */}
        <TechnicalProfileSection i={i} />
		
	

<ToolLogosSection i={i} />

        {/* NOW / AVAILABILITY */}
        <AvailabilitySection i={i} />
		
		<FAQSection i={i} />
		<CalendarCTASection lang={lang} />
<FinalCTASection i={i} />
        {/* CONTACT */}
		<MotionReveal delay={0.08}>
       <ContactSection i={i} lang={lang} />
</MotionReveal>
        {/* FOOTER */}
       <FooterSection i={i} lang={lang} />
      </div>
    </main>
  );
}


