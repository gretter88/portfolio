// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.santiagogretter.com.uy";

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/es", priority: 1, changeFrequency: "weekly" as const },
    { path: "/en", priority: 0.9, changeFrequency: "weekly" as const },

    { path: "/es/projects/nutrimvp", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/nutrimvp", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/playduel", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/playduel", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/sg-copilot-crm", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/sg-copilot-crm", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/radar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/radar", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/kiosco", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/kiosco", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/museo", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/museo", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/marketplace", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/marketplace", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/sg-saas-starter", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/sg-saas-starter", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/projects/intranet", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/intranet", priority: 0.8, changeFrequency: "monthly" as const },
	
	 { path: "/es/projects/sg-booking-pro", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/projects/sg-booking-pro", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}