import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

export async function GET(req: NextRequest) {
  await trackGoEvent({
    req,
    path: "/go/demo/radar",
    project: "radar",
  });

  return Response.redirect("https://radarsocial.com.uy/", 302);
}