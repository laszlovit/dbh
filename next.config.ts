import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/vinduespudsning",
				destination: "/services/vinduespolering",
				permanent: false,
			},
			{
				source: "/kopi-af-vinduespudsning-privat",
				destination: "/services/fliserens",
				permanent: true,
			},
			{
				source: "/kopi-af-flise-og-facaderens",
				destination: "/services/rens-af-tagrender",
				permanent: true,
			},
			{
				source: "/vinduespudsning-erhverv",
				destination: "/services/vinduespolering",
				permanent: false,
			},
			{
				source: "/kundeservice",
				destination: "/kontakt",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
