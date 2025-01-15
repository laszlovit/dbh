import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const ALL_CASE_STUDIES_QUERY = defineQuery(/* groq */ `*[
  _type == "caseStudy"
  && defined(slug.current)
]| order(title asc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  services[]->{
    title,
    "slug": slug.current,
  },
}`);

export const getAllCaseStudies = async () => {
	try {
		const caseStudies = await sanityFetch({
			query: ALL_CASE_STUDIES_QUERY,
		});
		return caseStudies.data || [];
	} catch (error) {
		console.error("Error fetching all case studies", error);
		return [];
	}
};
