import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

const SERVICE_META_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && slug.current == $slug
][0]{
  title,
  excerpt,  
  seo {
    metaTitle,
    metaDescription,
    canonicalUrl,
    ogImage {
      asset -> {
        _id,
        url
      }
    }
  },
}
`)

export const getServiceMeta = async (slug: string) => {
  try {
    const serviceMeta = await sanityFetch({
      query: SERVICE_META_QUERY,
      stega: false,
      params: { slug },
    })
    return serviceMeta.data
  } catch (error) {
    console.error('Error fetching service meta', error)
  }
}
