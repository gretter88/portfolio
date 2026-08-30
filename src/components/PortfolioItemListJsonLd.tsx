export default function PortfolioItemListJsonLd() {
  const projects = [
    ["SG Hub", "/es/projects/sghub"],
    ["RadarSocial", "/es/projects/radar"],
    ["SG Booking Pro", "/es/projects/sg-booking-pro"],
    ["NutriMVP", "/es/projects/nutrimvp"],
    ["PlayDuel", "/es/projects/playduel"],
    ["SG Copilot CRM", "/es/projects/sg-copilot-crm"],
    ["Marketplace de Servicios", "/es/projects/marketplace"],
    ["SG SaaS Starter", "/es/projects/sg-saas-starter"],
    ["Museo Canario Web", "/es/projects/museo"],
    ["Museo Canario Kiosco", "/es/projects/kiosco"],
    [
      "Sociedad Islas Canarias Uruguay",
      "/es/projects/sociedad-canarias-uy",
    ],
    ["Intranet WordPress", "/es/projects/intranet"],
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Santiago Gretter Portfolio Projects",
    numberOfItems: projects.length,
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}