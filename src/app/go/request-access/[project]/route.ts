import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

const EMAIL = "gretter88@gmail.com";

const PROJECT_LABELS: Record<string, string> = {
  marketplace: "Marketplace de Servicios",
  kiosco: "Kiosco Interactivo (Museo)",
  intranet: "Intranet (WordPress) — Organismo público",
  radar: "RadarSocial",
  museo: "Museo Canario (Web)",
  nutrimvp: "NutriMVP",
  playduel: "PlayDuel",
  "sg-copilot-crm": "SG Copilot CRM",
  "sg-saas-starter": "SG SaaS Starter",
  demo: "Project demo",
};

const COMMERCIAL_PROJECTS = new Set([
  "radar",
  "marketplace",
  "nutrimvp",
  "playduel",
  "sg-copilot-crm",
  "sg-saas-starter",
  "kiosco",
]);

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

  const isCommercialLead = COMMERCIAL_PROJECTS.has(key);

  const subject = encodeURIComponent(
    isCommercialLead
      ? `Consulta comercial: ${projectLabel}`
      : `Solicitud de acceso demo: ${projectLabel}`
  );

  const body = encodeURIComponent(
    isCommercialLead
      ? `Hola Santiago,

Me interesa conocer la propuesta comercial de "${projectLabel}".

Nombre:
Empresa:
País:
Caso de uso:
Modelo de interés (licencia / implementación / white-label / partnership / adquisición):
Volumen estimado de usuarios:
Detalle / necesidad:

Quedo atento/a.

Gracias!`
      : `Hola Santiago,

Me gustaría acceder a la demo de "${projectLabel}".

Nombre:
Empresa:
Motivo:

Gracias!`
  );

  return Response.redirect(`mailto:${EMAIL}?subject=${subject}&body=${body}`, 302);
}
