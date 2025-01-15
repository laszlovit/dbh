import { WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import { groq } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { apiVersion } from "../env";

export const serviceType = defineType({
	name: "service",
	title: "Service",
	type: "document",
	icon: WrenchScrewdriverIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "icon",
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
			name: "categories",
			type: "array",
			of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
		}),
		defineField({
			name: "isFeatured",
			type: "boolean",
			initialValue: false,
			validation: (Rule) =>
				Rule.custom(async (isFeatured, { getClient }) => {
					if (isFeatured !== true) {
						return true;
					}

					const featuredServices = await getClient({ apiVersion })
						.withConfig({ perspective: "previewDrafts" })
						.fetch<number>(groq`count(*[_type == 'post' && isFeatured == true])`);

					return featuredServices > 3 ? "Only 3 services can be featured at a time." : true;
				}),
		}),
		defineField({
			name: "excerpt",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "body",
			type: "blockContent",
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
			name: "testimonials",
			type: "array",
			of: [defineArrayMember({ type: "reference", to: { type: "testimonial" } })],
		}),
		defineField({
			name: "seo",
			type: "seo",
			title: "SEO Settings",
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
