import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

const SERVICE_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "service"]{
    "slug": slug.current
  }
`)

export const getServiceSlugs = async () => {
  try {
    const serviceSlugs = await sanityFetch({
      query: SERVICE_SLUGS_QUERY,
      perspective: 'published',
      stega: false,
    })
    return serviceSlugs.data || []
  } catch (error) {
    console.error('Error fetching service slugs', error)
    return []
  }
}
