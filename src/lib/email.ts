import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const contactToEmail = process.env.CONTACT_TO_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendLeadEmail({
  project,
  interest,
  name,
  email,
  company,
  country,
  message,
  sourcePath,
  ip,
}: {
  project: string;
  interest: string;
  name: string;
  email: string;
  company?: string | null;
  country?: string | null;
  message?: string | null;
  sourcePath?: string | null;
  ip?: string | null;
}) {
  if (!resend || !resendFromEmail || !contactToEmail) {
    console.warn("Resend config missing. Lead email not sent.");
    return;
  }

  await resend.emails.send({
    from: resendFromEmail,
    to: contactToEmail,
    replyTo: email,
    subject: `Nuevo lead · ${project} · ${interest}`,
    text: `
Nuevo lead recibido desde el portfolio.

Proyecto: ${project}
Interés: ${interest}

Nombre: ${name}
Email: ${email}
Empresa: ${company || "-"}
País: ${country || "-"}
IP: ${ip || "-"}

Origen: ${sourcePath || "-"}

Mensaje:
${message || "-"}
`,
  });
}