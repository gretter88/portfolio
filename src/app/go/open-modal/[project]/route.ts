//src/app/go/open-modal/[project]/route.ts
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ project: string }> }
) {
  const { project } = await context.params;
  const lang = req.nextUrl.searchParams.get("lang") || "es";

  return Response.redirect(
    `https://www.santiagogretter.com.uy/${lang}?project=${encodeURIComponent(project.toLowerCase())}`,
    302
  );
}



