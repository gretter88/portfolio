//src/app/go/cv/route.ts
import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

export async function GET(req: NextRequest) {
  await trackGoEvent({
    req,
    path: "/go/cv",
  });

  return Response.redirect("https://www.santiagogretter.com.uy/cv.pdf", 302);
}

