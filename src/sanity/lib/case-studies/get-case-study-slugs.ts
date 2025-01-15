import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

const CASE_STUDY_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy"]{
    "slug": slug.current
  }
`)

export const getCaseStudySlugs = async () => {
  try {
    const caseStudySlugs = await sanityFetch({
      query: CASE_STUDY_SLUGS_QUERY,
      perspective: 'published',
      stega: false,
    })
    return caseStudySlugs.data || []
  } catch (error) {
    console.error('Error fetching case study slugs', error)
    return []
  }
}
