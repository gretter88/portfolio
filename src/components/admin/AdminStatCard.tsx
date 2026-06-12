type Props = {
  label: string;
  value: string | number;
  hint?: string;
};

export default function AdminStatCard({ label, value, hint }: Props) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        background: "var(--card)",
        borderColor: "var(--card-border)",
      }}
    >
      <div className="text-sm" style={{ color: "var(--muted-2)" }}>
        {label}
      </div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
      {hint ? (
        <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}