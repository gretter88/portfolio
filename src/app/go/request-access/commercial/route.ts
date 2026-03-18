import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

const EMAIL = "gretter88@gmail.com";

export async function GET(req: NextRequest) {
  const path = "/go/request-access/commercial";

  await trackGoEvent({
    req,
    path,
    project: "commercial",
  });

  const subject = encodeURIComponent(
    "Consulta comercial / licenciamiento de proyectos"
  );

  const body = encodeURIComponent(
    `Hola Santiago,

Me interesa conversar sobre alguno de tus proyectos comercializables.

Proyecto de interés:
Modelo de interés (licencia / implementación / white-label / partnership / adquisición):
Nombre:
Empresa:
País:
Detalle / necesidad:

Gracias.`
  );

  return Response.redirect(
    `mailto:${EMAIL}?subject=${subject}&body=${body}`,
    302
  );
}
