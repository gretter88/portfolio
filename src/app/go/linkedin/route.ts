//src/app/go/linkedin/route.ts
import type { NextRequest } from "next/server";
import { LINKS } from "@/lib/i18n";
import { trackGoEvent } from "@/lib/track-go-event";

export async function GET(req: NextRequest) {
  await trackGoEvent({
    req,
    path: "/go/linkedin",
  });

  return Response.redirect(LINKS.linkedin, 302);
}
