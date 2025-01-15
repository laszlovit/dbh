import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const ALL_SERVICES_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && defined(slug.current)
]| order(title asc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  icon,
  mainImage,
}`);

export const getAllServices = async () => {
	try {
		const services = await sanityFetch({
			query: ALL_SERVICES_QUERY,
		});
		return services.data || [];
	} catch (error) {
		console.error("Error fetching all services", error);
		return [];
	}
};
