//src\app\go\request-access\[project]\page.tsx
import Link from "next/link";
import LeadRequestForm from "@/components/LeadRequestForm";

type Props = {
  params: Promise<{ project: string }> | { project: string };
  searchParams: Promise<{ type?: string }> | { type?: string };
};

function getProjectName(project: string) {
  const labels: Record<string, string> = {
    marketplace: "Marketplace de Servicios",
    kiosco: "Kiosco Interactivo (Museo)",
    intranet: "Intranet WordPress",
    radar: "RadarSocial",
    museo: "Museo Canario Web",
    nutrimvp: "NutriMVP",
    playduel: "PlayDuel",
    "sg-copilot-crm": "SG Copilot CRM",
    "sg-saas-starter": "SG SaaS Starter",
    "museo-canario-kiosco": "Museo Canario Kiosco",
    "museo-canario-web": "Museo Canario Web",
  };

  return labels[project] || project;
}

function getInterestLabel(type?: string) {
  const labels: Record<string, string> = {
    demo: "Solicitar demo",
    license: "Licenciamiento",
    partnership: "Partnership",
    deployment: "Implementación",
    info: "Información general",
  };

  return labels[type || "info"] || "Información general";
}

export default async function RequestAccessPage({
  params,
  searchParams,
}: Props) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const project = resolvedParams.project?.toLowerCase() || "demo";
  const type = resolvedSearchParams.type || "info";

  const projectName = getProjectName(project);
  const interestLabel = getInterestLabel(type);

  const mailSubject = encodeURIComponent(
    `Consulta ${interestLabel} - ${projectName}`
  );

  const mailBody = encodeURIComponent(`Hola Santiago,

Me interesa conversar sobre:

Proyecto: ${projectName}
Interés: ${interestLabel}

Nombre:
Empresa:
País:
Mensaje:
`);

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/es#projects"
          className="text-sm underline underline-offset-4"
          style={{ color: "var(--muted)" }}
        >
          ← Volver al portfolio
        </Link>

        <section
          className="mt-8 rounded-3xl border p-6 md:p-8"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: "rgba(34,197,94,0.35)",
              background: "rgba(34,197,94,0.10)",
            }}
          >
            Solicitud comercial
          </div>

          <h1 className="mt-5 text-3xl font-bold">{interestLabel}</h1>

          <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
            Completá el contacto para conversar sobre el proyecto seleccionado.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-2xl border p-4"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--background)",
              }}
            >
              <div className="text-xs" style={{ color: "var(--muted-2)" }}>
                Proyecto
              </div>
              <div className="mt-1 font-semibold">{projectName}</div>
            </div>

            <div
              className="rounded-2xl border p-4"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--background)",
              }}
            >
              <div className="text-xs" style={{ color: "var(--muted-2)" }}>
                Interés
              </div>
              <div className="mt-1 font-semibold">{interestLabel}</div>
            </div>
          </div>
<LeadRequestForm
  project={project}
  projectName={projectName}
  interest={type}
  interestLabel={interestLabel}
/>
          <div className="mt-8 flex flex-wrap gap-3">
           

            <a
              href={`https://wa.me/59899204797?text=${mailBody}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-5 py-3 text-sm font-medium"
              style={{
                borderColor: "rgba(34,197,94,0.35)",
                background: "rgba(34,197,94,0.10)",
              }}
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}