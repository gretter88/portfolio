//src/app/go/github/route.ts

import { LINKS } from "@/lib/i18n";

export async function GET() {
  return Response.redirect(LINKS.github, 302);
}
