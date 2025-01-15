import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const ALL_GALLERIES_QUERY = defineQuery(/* groq */ `*[
  _type == "gallery"
][]{
  publishedAt,
  title,
  mainImage,
  gallery[]{
    _key,
    alt,
    asset->{
      _id,
      url
    }
  },
   "slug": slug.current,
}
`);

export const getAllGalleries = async () => {
	try {
		const galleries = await sanityFetch({
			query: ALL_GALLERIES_QUERY,
		});
		return galleries.data || [];
	} catch (error) {
		console.error("Error fetching service", error);
		return [];
	}
};
