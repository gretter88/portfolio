//src/app/go/open-modal/[project]/route.ts
import type { NextRequest } from "next/server";
import { trackGoEvent } from "@/lib/track-go-event";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ project: string }> }
) {
  const { project } = await context.params;
  const lang = req.nextUrl.searchParams.get("lang") || "es";
  const projectKey = project?.toLowerCase() || "demo";
  const path = `/go/open-modal/${projectKey}`;

  await trackGoEvent({
    req,
    path,
    lang,
    project: projectKey,
  });

  return Response.redirect(
    `https://www.santiagogretter.com.uy/${lang}?project=${encodeURIComponent(projectKey)}`,
    302
  );
}



