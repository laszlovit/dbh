import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

export const getAllTestimonials = async () => {
  const ALL_TESTIMONIALS_QUERY = defineQuery(
    `*[_type == "testimonial"] | order(publishedAt asc)`
  );
  try {
    const testimonials = await sanityFetch({
      query: ALL_TESTIMONIALS_QUERY,
    });
    return testimonials.data || [];
  } catch (error) {
    console.error('Error fetching all testimonials', error);
    return [];
  }
};
