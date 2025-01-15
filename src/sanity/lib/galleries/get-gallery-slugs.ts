import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const GALLERY_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "gallery"]{
    "slug": slug.current
  }
`);

export const getGallerySlugs = async () => {
	try {
		const gallerySlugs = await sanityFetch({
			query: GALLERY_SLUGS_QUERY,
			perspective: "published",
			stega: false,
		});
		return gallerySlugs.data || [];
	} catch (error) {
		console.error("Error fetching gallery slugs", error);
		return [];
	}
};
