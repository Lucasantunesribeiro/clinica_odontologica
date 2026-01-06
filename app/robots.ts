import { MetadataRoute } from "next";

const BASE_URL = "https://sorrirplus.com.br"; // TROCAR PELO SEU DOMÍNIO

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
