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

  const stack = study?.stack?.slice(0, 5) ?? ["Next.js", "React Native", "Node.js"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "Arial",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -120,
            top: -120,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: "rgba(96,165,250,0.35)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -140,
            bottom: -140,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(34,197,94,0.25)",
            filter: "blur(90px)",
          }}
        />

        <div
          style={{
            width: "100%",
            padding: 64,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                SG
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 25, fontWeight: 700 }}>
                  Santiago Gretter
                </div>
                <div style={{ fontSize: 18, color: "rgba(255,255,255,0.65)" }}>
                  Software Studio
                </div>
              </div>
            </div>

            <div
              style={{
                border: "1px solid rgba(96,165,250,0.40)",
                background: "rgba(96,165,250,0.16)",
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
                fontSize: 76,
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-3px",
                maxWidth: 920,
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.25,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 920,
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
                    color: "rgba(255,255,255,0.86)",
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