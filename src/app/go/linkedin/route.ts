//src/app/go/linkedin/route.ts
import { LINKS } from "@/lib/i18n";

export async function GET() {
  return Response.redirect(LINKS.linkedin, 302);
}

