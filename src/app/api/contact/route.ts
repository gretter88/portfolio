import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const projectType = clean(body.projectType);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Missing email environment variables" },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] Nueva consulta — ${name}`,
      text: `
Nombre: ${name}
Email: ${email}
Tipo de proyecto: ${projectType || "No especificado"}

Mensaje:
${message}
      `.trim(),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}