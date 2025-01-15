import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

const SERVICE_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  gallery[]{
    _key,
    alt,
    asset->{
      _id,
      url
    }
  },
  testimonials[]->{
   "slug": slug.current,
    name,
    logo,
    avatar,
    content,
  },
}
`)

export const getService = async (slug: string) => {
  try {
    const service = await sanityFetch({
      query: SERVICE_QUERY,
      params: { slug },
    })
    return service.data
  } catch (error) {
    console.error('Error fetching service', error)
  }
}
