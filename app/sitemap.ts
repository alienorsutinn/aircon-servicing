import { MetadataRoute } from 'next'
import { SERVICES } from './data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://servicecostchecker.my' // Placeholder domain

  const serviceUrls = SERVICES.map((service) => ({
    url: `${baseUrl}${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...serviceUrls,
  ]
}
