import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./types/block-content";
import { caseStudyType } from "./types/case-study";
import { categoryType } from "./types/category";
import { galleryType } from "./types/gallery";
import { postType } from "./types/post";
import { seoType } from "./types/seo";
import { serviceType } from "./types/service";
import { testimonialType } from "./types/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		postType,
		serviceType,
		caseStudyType,
		testimonialType,
		seoType,
		galleryType,
	],
};
