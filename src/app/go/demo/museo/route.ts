import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

export async function GET(req: NextRequest) {
  await trackGoEvent({
    req,
    path: "/go/demo/museo",
    project: "museo",
  });

  return Response.redirect("https://www.museocanario.com.uy", 302);
}