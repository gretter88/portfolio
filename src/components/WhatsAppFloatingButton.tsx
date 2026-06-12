import { LINKS, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function WhatsAppFloatingButton({ lang }: Props) {
  const text = lang === "es" ? "Hablemos" : "Let’s talk";

  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium shadow-2xl transition hover:-translate-y-0.5"
      style={{
        borderColor: "rgba(34,197,94,0.35)",
        background:
          "linear-gradient(135deg, rgba(34,197,94,0.95), rgba(22,163,74,0.95))",
        color: "white",
      }}
    >
      <span>💬</span>
      <span>{text}</span>
    </a>
  );
}