import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://barakaminingltd.co.ke'
  
  // Static pages
  const routes = ['', '/about', '/story', '/mine', '/contact', '/gems'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic gem pages
  const gemIds = [
    'round-cut',
    'pear-shaped',
    'trilliant-shaped',
    'oval-shaped',
    'emerald-shaped',
    'cushion-shaped',
    'rough-tsavorite-1',
    'rough-tsavorite-2',
    'rough-tsavorite-3'
  ]

  const gemRoutes = gemIds.map((id) => ({
    url: `${baseUrl}/gems/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...gemRoutes]
}