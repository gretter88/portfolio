import { NextRequest, NextResponse } from "next/server";
import { insertLead } from "@/lib/leads";
import { sendLeadEmail } from "@/lib/email";

const VALID_INTERESTS = new Set([
  "demo",
  "license",
  "partnership",
  "deployment",
  "info",
]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const project = String(body.project || "").trim();
    const interest = String(body.interest || "info").trim();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();

    if (!project || !name || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || null;

    await insertLead({
      project,
      interest: VALID_INTERESTS.has(interest) ? (interest as any) : "info",
      name,
      email,
      company: body.company || null,
      country: body.country || null,
      message: body.message || null,
      sourcePath: body.sourcePath || null,
      ip,
      userAgent: req.headers.get("user-agent"),
	  status: "new",
  internalNotes: null,
      createdAt: new Date(),
    });

await sendLeadEmail({
  project,
  interest: VALID_INTERESTS.has(interest) ? interest : "info",
  name,
  email,
  company: body.company || null,
  country: body.country || null,
  message: body.message || null,
  sourcePath: body.sourcePath || null,
  ip,
});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}