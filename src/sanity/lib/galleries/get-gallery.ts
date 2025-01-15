import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const GALLERY_QUERY = defineQuery(/* groq */ `*[
  _type == "gallery"
    && slug.current == $slug
][0]{
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

export const getGallery = async (slug: string) => {
	try {
		const gallery = await sanityFetch({
			query: GALLERY_QUERY,
			params: { slug },
		});
		return gallery.data;
	} catch (error) {
		console.error("Error fetching service", error);
	}
};
