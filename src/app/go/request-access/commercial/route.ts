//go/request-access/commercial/route.ts
import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

const EMAIL = "gretter88@gmail.com";

export async function GET(req: NextRequest) {
  const lang = req.nextUrl.searchParams.get("lang") === "en" ? "en" : "es";
  const path = `/go/request-access/commercial?lang=${lang}`;

  await trackGoEvent({
    req,
    path,
    lang,
    project: "commercial",
  });

  const subject =
    lang === "en"
      ? encodeURIComponent("Commercial inquiry / project licensing")
      : encodeURIComponent("Consulta comercial / licenciamiento de proyectos");

  const body =
    lang === "en"
      ? encodeURIComponent(
          `Hello Santiago,

I’m interested in discussing one of your commercializable projects.

Project of interest:
Business model of interest (license / deployment / white-label / partnership / acquisition):
Name:
Company:
Country:
Details / needs:

Thank you.`
        )
      : encodeURIComponent(
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

