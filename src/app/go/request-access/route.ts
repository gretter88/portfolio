//src/app/go/request-access/route.ts

import { NextRequest } from "next/server";

const EMAIL = "gretter88@gmail.com";

export async function GET(req: NextRequest) {
  const project = req.nextUrl.searchParams.get("project") || "Project demo";

  const subject = encodeURIComponent(`Solicitud de acceso demo: ${project}`);
  const body = encodeURIComponent(
    `Hola Santiago,\n\nMe gustaría acceder a la demo de "${project}".\n\nNombre:\nEmpresa:\nMotivo:\n\nGracias!`
  );

  return Response.redirect(`mailto:${EMAIL}?subject=${subject}&body=${body}`, 302);
}

