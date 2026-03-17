//src/app/go/request-access/[project]/route.ts
import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

const EMAIL = "gretter88@gmail.com";

const PROJECT_LABELS: Record<string, string> = {
  marketplace: "Marketplace de Servicios",
  kiosco: "Kiosco Interactivo (Museo)",
  intranet: "Intranet (WordPress) — Organismo público",
  radar: "RadarSocial",
  museo: "Museo Canario (Web)",
  demo: "Project demo",
};


export async function GET(
  req: NextRequest,
  context: { params: Promise<{ project: string }> }
) {
  const { project } = await context.params;
  const key = project?.toLowerCase() || "demo";
  const projectLabel = PROJECT_LABELS[key] || project || "Project demo";
  const path = `/go/request-access/${key}`;

  await trackGoEvent({
    req,
    path,
    project: key,
  });

const isCommercialLead = key === "radar" || key === "marketplace";


const subject = encodeURIComponent(
  isCommercialLead
    ? `Consulta comercial: ${projectLabel}`
    : `Solicitud de acceso demo: ${projectLabel}`
);

const body = encodeURIComponent(
  isCommercialLead
    ? `Hola Santiago,\n\nMe interesa conocer la propuesta comercial de "${projectLabel}".\n\nNombre:\nEmpresa:\nPaís:\nCaso de uso:\nModelo de interés (licencia / partnership / implementación / adquisición):\nVolumen estimado de usuarios:\n\nQuedo atento/a.\n\nGracias!`
    : `Hola Santiago,\n\nMe gustaría acceder a la demo de "${projectLabel}".\n\nNombre:\nEmpresa:\nMotivo:\n\nGracias!`
);



  return Response.redirect(`mailto:${EMAIL}?subject=${subject}&body=${body}`, 302);
}
