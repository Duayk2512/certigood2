import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tu-dominio.com",
      lastModified: new Date(),
    },
    {
      url: "https://tu-dominio.com/about",
      lastModified: new Date(),
    },
  ];
}