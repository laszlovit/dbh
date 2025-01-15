const FEATURED_SERVICES_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
}`);

import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

export const getFeaturedServices = async (quantity: number) => {
	try {
		const services = await sanityFetch({
			query: FEATURED_SERVICES_QUERY,
			params: { quantity },
		});
		return services.data;
	} catch (error) {
		console.error("Error fetching featured services", error);
		return [];
	}
};
