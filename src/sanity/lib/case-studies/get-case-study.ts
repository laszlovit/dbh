import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

const CASE_STUDY_QUERY = defineQuery(/* groq */ `*[
  _type == "caseStudy"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  services[]->{
    title,
    "slug": slug.current,
  },
  period,
  testimonial->{
    name,
    role,
    content,
    logo,
  },
}
`)

export const getCaseStudy = async (slug: string) => {
  try {
    const caseStudy = await sanityFetch({
      query: CASE_STUDY_QUERY,
      params: { slug },
    })
    return caseStudy.data
  } catch (error) {
    console.error('Error fetching case study', error)
  }
}
