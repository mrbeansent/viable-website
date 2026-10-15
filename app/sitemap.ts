import type { MetadataRoute } from 'next'
import { PAGES, SITE_URL } from '@/lib/seo'

const PRIORITY: Record<string, number> = { '/': 1, '/services': 0.9, '/free-audit': 0.9, '/about': 0.8 }

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return PAGES.map(({ path }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/privacy' || path === '/terms' ? 'yearly' : 'monthly',
    priority: PRIORITY[path] ?? 0.5,
  }))
}
