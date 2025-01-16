import { getGallerySlugs } from "@/sanity/lib/galleries/get-gallery-slugs";
import { getServiceSlugs } from "@/sanity/lib/services/get-service-slugs";
import type { MetadataRoute } from "next";
import { unstable_noStore } from "next/cache";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// to try fix caching issue: https://github.com/vercel/next.js/discussions/56708#discussioncomment-10127496
	unstable_noStore();

	const servicesResult = await getServiceSlugs();
	const galleriesResult = await getGallerySlugs();

	const services = servicesResult.map((service) => ({
		url: `https://blaahelte.com/services/${service.slug}`,
		lastModified: new Date(service._updatedAt),
	}));

	const galleries = galleriesResult.map((gallery) => ({
		url: `https://blaahelte.com/galleri/${gallery.slug}`,
		lastModified: new Date(gallery._updatedAt),
	}));

	const staticUrls = [
		{
			url: "https://blaahelte.com/",
			priority: 1,
		},
		{
			url: "https://blaahelte.com/services",
		},
		{
			url: "https://blaahelte.com/om-os",
		},
		{
			url: "https://blaahelte.com/galleri",
		},
		{
			url: "https://blaahelte.com/kontakt",
		},
		{
			url: "https://blaahelte.com/fa-et-tilbud",
		},
		{
			url: "https://blaahelte.com/privatlivspolitik",
		},
		{
			url: "https://blaahelte.com/handelsbetingelser",
		},
	];

	return [...staticUrls, ...services, ...galleries];
}
