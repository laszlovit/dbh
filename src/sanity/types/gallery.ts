import { PhotoIcon } from "@heroicons/react/16/solid";
import { defineField, defineType } from "sanity";

export const galleryType = defineType({
	name: "gallery",
	title: "Gallery",
	type: "document",
	icon: PhotoIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "mainImage",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
				},
			],
		}),
		defineField({
			name: "gallery",
			type: "array",
			of: [
				{
					name: "galleryImage",
					type: "image",
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alternative text",
							validation: (rule) =>
								rule.custom((value, context) => {
									const parent = context?.parent as {
										asset?: { _ref?: string };
									};

									return !value && parent?.asset?._ref
										? "Alt text is required when an image is present"
										: true;
								}),
						},
					],
				},
			],
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
		prepare(selection) {
			return { ...selection };
		},
	},
});
