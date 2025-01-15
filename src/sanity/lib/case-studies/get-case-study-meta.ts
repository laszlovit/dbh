import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

const CASE_STUDY_META_QUERY = defineQuery(/* groq */ `*[
  _type == "caseStudy"
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

export const getCaseStudyMeta = async (slug: string) => {
  try {
    const caseStudyMeta = await sanityFetch({
      query: CASE_STUDY_META_QUERY,
      stega: false,
      params: { slug },
    })
    return caseStudyMeta.data
  } catch (error) {
    console.error('Error fetching case study meta', error)
  }
}
