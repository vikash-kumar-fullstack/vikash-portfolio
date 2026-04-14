import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vikash-kumar-fullstack.vercel.app";
  const lastModified = new Date();

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/skills", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/education", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}