import { ImageResponse } from "next/og";
import { LANGS, type Lang } from "@/lib/i18n";
import { getCaseStudy } from "@/lib/project-case-studies";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }> | { lang: string; slug: string };
}) {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const isEs = lang === "es";

  const study = getCaseStudy(lang, resolved.slug);

  const title = study?.title ?? "Santiago Gretter";
  const subtitle =
    study?.subtitle ??
    (isEs ? "Software Studio & Portfolio" : "Software Studio & Portfolio");

  const stack = study?.stack?.slice(0, 5) ?? [
    "Next.js",
    "React Native",
    "Node.js",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #020617 0%, #111827 42%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(96,165,250,0.28)",
            filter: "blur(80px)",
            left: -140,
            top: -140,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "rgba(167,139,250,0.22)",
            filter: "blur(80px)",
            right: -120,
            bottom: -120,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                SG
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 24, fontWeight: 700 }}>
                  Santiago Gretter
                </div>
                <div style={{ fontSize: 18, color: "rgba(255,255,255,0.68)" }}>
                  Software Studio
                </div>
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(96,165,250,0.35)",
                background: "rgba(96,165,250,0.14)",
                borderRadius: 999,
                padding: "12px 20px",
                fontSize: 18,
                color: "#bfdbfe",
              }}
            >
              Case Study
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-3px",
                maxWidth: 900,
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.25,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 860,
              }}
            >
              {subtitle}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {stack.map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 999,
                    padding: "10px 16px",
                    fontSize: 18,
                    color: "rgba(255,255,255,0.84)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.58)" }}>
            www.santiagogretter.com.uy
          </div>
        </div>
      </div>
    ),
    size
  );
}