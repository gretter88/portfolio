export default function PortfolioItemListJsonLd() {
  const projects = [
    ["RadarSocial", "/es/projects/radar"],
    ["NutriMVP", "/es/projects/nutrimvp"],
    ["PlayDuel", "/es/projects/playduel"],
    ["SG Copilot CRM", "/es/projects/sg-copilot-crm"],
    ["Museo Canario Kiosco", "/es/projects/museo-canario-kiosco"],
    ["Museo Canario Web", "/es/projects/museo-canario-web"],
    ["Marketplace de Servicios", "/es/projects/marketplace"],
    ["SG SaaS Starter", "/es/projects/sg-saas-starter"],
    ["Intranet WordPress", "/es/projects/intranet-wordpress"],
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Santiago Gretter Portfolio Projects",
    itemListElement: projects.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: `https://www.santiagogretter.com.uy${path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}