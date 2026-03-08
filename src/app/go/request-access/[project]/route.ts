//src/app/go/request-access/[project]/route.ts
import type { NextRequest } from "next/server";

const EMAIL = "gretter88@gmail.com";

const PROJECT_LABELS: Record<string, string> = {
  kiosco: "Kiosco Interactivo (Museo)",
  intranet: "Intranet (WordPress) — Organismo público",
  radar: "RadarSocial",
  museo: "Museo Canario (Web)",
  demo: "Project demo",
};

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ project: string }> }
) {
  const { project } = await context.params;
  const key = project?.toLowerCase() || "demo";
  const projectLabel = PROJECT_LABELS[key] || project || "Project demo";

  const subject = encodeURIComponent(`Solicitud de acceso demo: ${projectLabel}`);
  const body = encodeURIComponent(
    `Hola Santiago,\n\nMe gustaría acceder a la demo de "${projectLabel}".\n\nNombre:\nEmpresa:\nMotivo:\n\nGracias!`
  );

  return Response.redirect(`mailto:${EMAIL}?subject=${subject}&body=${body}`, 302);
}

