import { MetadataRoute } from "next";
import { TREATMENTS } from "@/lib/content";

const BASE_URL = "https://sorrirplus.com.br"; // TROCAR PELO SEU DOMÍNIO

export default function sitemap(): MetadataRoute.Sitemap {
  // Páginas estáticas
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tratamentos`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/equipe`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Páginas de tratamentos (dinâmicas)
  const treatmentPages = TREATMENTS.map((treatment) => ({
    url: `${BASE_URL}/tratamentos/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...treatmentPages];
}
