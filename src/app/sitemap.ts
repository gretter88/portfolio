import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.santiagogretter.com.uy";

  const routes = [
    "",
    "/es",
    "/en",
    "/es/projects/nutrimvp",
    "/en/projects/nutrimvp",
    "/es/projects/playduel",
    "/en/projects/playduel",
    "/es/projects/sg-copilot-crm",
    "/en/projects/sg-copilot-crm",
	"/es/projects/radar",
    "/en/projects/radar",
	"/es/projects/kiosco",
    "/en/projects/kiosco",
	"/es/projects/museo",
    "/en/projects/museo",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" || route === "/es" ? 1 : route.includes("/projects/") ? 0.8 : 0.9,
  }));
}