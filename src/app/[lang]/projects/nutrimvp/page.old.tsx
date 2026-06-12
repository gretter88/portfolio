import Link from "next/link";
import { LANGS, type Lang } from "@/lib/i18n";

export default async function NutriMvpPage({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const isEs = lang === "es";

  const features = isEs
    ? [
        "Escaneo de productos por código de barras",
        "Información nutricional desde OpenFoodFacts y base propia",
        "Comparación de precios por supermercado",
        "Mapa de supermercados cercanos según ubicación",
        "Mapa de supermercados por producto",
        "Lista inteligente para elegir dónde conviene comprar",
        "Ruta sugerida para comprar productos al menor precio",
        "Historial, favoritos y alertas de precio",
        "Backend Node/Express + PostgreSQL/Supabase + Firebase",
      ]
    : [
        "Barcode-based product scanning",
        "Nutrition data from OpenFoodFacts and internal database",
        "Supermarket price comparison",
        "Nearby supermarket map based on user location",
        "Product-based supermarket mapping",
        "Smart list to choose where to buy",
        "Suggested route to buy products at the lowest price",
        "History, favorites, and price alerts",
        "Node/Express backend + PostgreSQL/Supabase + Firebase",
      ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <Link
        href={`/${lang}`}
        className="text-sm underline underline-offset-4"
        style={{ color: "var(--muted)" }}
      >
        ← {isEs ? "Volver al portfolio" : "Back to portfolio"}
      </Link>

      <section className="mt-8">
        <div
          className="rounded-3xl border p-6 md:p-8"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="inline-flex rounded-full border px-3 py-1 text-xs">
            Android MVP · Smart Shopping
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            NutriMVP
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {isEs
              ? "App mobile para escanear productos, consultar información nutricional, comparar precios por supermercado y optimizar compras mediante mapas, lista inteligente y rutas sugeridas."
              : "Mobile app to scan products, check nutrition facts, compare supermarket prices, and optimize grocery shopping through maps, smart lists, and suggested routes."}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React Native",
              "TypeScript",
              "Node.js",
              "Firebase",
              "PostgreSQL",
              "Supabase",
              "OpenFoodFacts",
              "Maps",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1 text-xs"
                style={{
                  borderColor: "var(--card-border)",
                  color: "var(--muted)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {["nutrimvp-1.webp", "nutrimvp-3.webp", "nutrimvp-5.webp"].map((img, index) => (
          <div
            key={img}
            className="rounded-3xl border p-4"
            style={{
              background: "var(--card)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="mx-auto max-w-[230px] rounded-[2rem] bg-black p-2">
              <img
                src={`/screenshots/${img}`}
                alt={`NutriMVP screenshot ${index + 1}`}
                className="h-[460px] w-full rounded-[1.5rem] object-contain"
              />
            </div>
          </div>
        ))}
      </section>
<section className="mt-12">
  <div
    className="rounded-3xl border p-6 md:p-8"
    style={{
      background: "var(--card)",
      borderColor: "var(--card-border)",
    }}
  >
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
        style={{
          borderColor: "rgba(34,197,94,0.25)",
          background: "rgba(34,197,94,0.08)",
          color: "var(--foreground)",
        }}
      >
        Product Engineering
      </span>

      <span
        className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
        style={{
          borderColor: "rgba(59,130,246,0.25)",
          background: "rgba(59,130,246,0.08)",
          color: "var(--foreground)",
        }}
      >
        Mobile + Geo + Pricing
      </span>
    </div>

    <h2 className="mt-5 text-2xl font-semibold">
      {isEs ? "Technical Highlights" : "Technical Highlights"}
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {[
        {
          title: isEs
            ? "Comparación inteligente de precios"
            : "Smart price comparison",
          desc: isEs
            ? "Motor para comparar supermercados por producto, ubicación y precio."
            : "Engine to compare supermarkets by product, location, and pricing.",
        },
        {
          title: isEs
            ? "Geo-based shopping optimization"
            : "Geo-based shopping optimization",
          desc: isEs
            ? "Optimización de compras usando ubicación y supermercados cercanos."
            : "Shopping optimization using location and nearby supermarkets.",
        },
        {
          title: isEs
            ? "Barcode normalization engine"
            : "Barcode normalization engine",
          desc: isEs
            ? "Normalización y mapeo automático de productos y barcodes."
            : "Automatic normalization and mapping of products and barcodes.",
        },
        {
          title: isEs
            ? "Hybrid Firebase + SQL architecture"
            : "Hybrid Firebase + SQL architecture",
          desc: isEs
            ? "Arquitectura híbrida usando Firebase/Firestore y PostgreSQL/Supabase."
            : "Hybrid architecture using Firebase/Firestore and PostgreSQL/Supabase.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border p-5"
          style={{
            borderColor: "var(--card-border)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>

          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="mt-12">
  <div
    className="rounded-3xl border p-6 md:p-8"
    style={{
      background: "var(--card)",
      borderColor: "var(--card-border)",
    }}
  >
    <h2 className="text-2xl font-semibold">
      {isEs ? "Arquitectura técnica" : "Technical Architecture"}
    </h2>

    <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
      {isEs
        ? "NutriMVP combina una app mobile con backend propio, datos externos y persistencia híbrida para resolver nutrición, precios, ubicación y optimización de compras."
        : "NutriMVP combines a mobile app with a custom backend, external data sources, and hybrid persistence to solve nutrition, pricing, location, and shopping optimization."}
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-4">
      {[
        {
          title: "React Native App",
          desc: isEs
            ? "Escáner, UX mobile, historial, favoritos, alertas, mapas y lista inteligente."
            : "Scanner, mobile UX, history, favorites, alerts, maps, and smart list.",
        },
        {
          title: "Node/Express API",
          desc: isEs
            ? "Orquesta productos, precios, supermercados, barcodes y lógica de negocio."
            : "Orchestrates products, prices, stores, barcodes, and business logic.",
        },
        {
          title: "Firebase + SQL",
          desc: isEs
            ? "Firebase/Firestore para datos app y PostgreSQL/Supabase para precios y supermercados."
            : "Firebase/Firestore for app data and PostgreSQL/Supabase for prices and stores.",
        },
        {
          title: "External Data",
          desc: isEs
            ? "OpenFoodFacts, geolocalización y mapas para nutrición, ubicación y rutas."
            : "OpenFoodFacts, geolocation, and maps for nutrition, location, and routes.",
        },
      ].map((item, index) => (
        <div key={item.title} className="relative">
          <div
            className="rounded-2xl border p-5 h-full"
            style={{
              borderColor: "var(--card-border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="mb-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
              style={{
                background: "rgba(34,197,94,0.12)",
                color: "#4ade80",
              }}
            >
              {index + 1}
            </div>

            <h3 className="text-base font-semibold">{item.title}</h3>

            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {item.desc}
            </p>
          </div>

          {index < 3 ? (
            <div
              className="hidden md:block absolute right-[-18px] top-1/2 z-10 -translate-y-1/2 text-xl"
              style={{ color: "var(--muted-2)" }}
            >
              →
            </div>
          ) : null}
        </div>
      ))}
    </div>

    <div
      className="mt-6 rounded-2xl border p-5 text-sm leading-relaxed"
      style={{
        borderColor: "rgba(59,130,246,0.25)",
        background: "rgba(59,130,246,0.08)",
        color: "var(--muted)",
      }}
    >
      {isEs
        ? "El enfoque híbrido permite mantener una experiencia mobile rápida con Firebase, mientras que PostgreSQL/Supabase concentra la lógica estructurada de productos, supermercados, precios y matching de barcodes."
        : "The hybrid approach keeps the mobile experience fast with Firebase, while PostgreSQL/Supabase handles structured logic for products, stores, prices, and barcode matching."}
    </div>
  </div>
</section>


      <section className="mt-12 grid gap-6 md:grid-cols-[1fr_0.8fr]">
        <div
          className="rounded-3xl border p-6"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <h2 className="text-2xl font-semibold">
            {isEs ? "Qué resuelve" : "What it solves"}
          </h2>

          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            {isEs
              ? "NutriMVP combina nutrición, precios y ubicación para ayudar al usuario a tomar mejores decisiones de compra. No solo muestra datos del producto escaneado: también permite comparar supermercados, encontrar opciones cercanas y armar una compra optimizada."
              : "NutriMVP combines nutrition, prices, and location to help users make better grocery decisions. It does not only show scanned product data: it also enables supermarket comparison, nearby store discovery, and optimized shopping planning."}
          </p>
        </div>

        <div
          className="rounded-3xl border p-6"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <h2 className="text-2xl font-semibold">
            {isEs ? "Highlights" : "Highlights"}
          </h2>

          <ul className="mt-4 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
            {features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-400" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

