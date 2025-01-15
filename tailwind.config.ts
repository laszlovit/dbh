import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0448ba",
				lightGray: "#f2f4f4",
			},
			animation: {
				"infinite-scroll": "infinite-scroll 30s linear infinite",
			},
			maxWidth: {
				"screen-2xl": "1536px",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				outfit: ["var(--font-outfit)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
