import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: true,
});

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
});

export const metadata: Metadata = {
	title: "De Blå Helte",
	description: "Serviceløsninger til privat- og erhvervskunder",
	openGraph: {
		images: [
			{
				url: "https://cdn.sanity.io/images/11915si6/production/0e018acc33a91657268060541badaf802e8c85f0-1200x630.jpg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="da">
			<body className={`${inter.variable} ${outfit.variable} bg-lightGray antialiased`}>
				{children}
				<SanityLive />
			</body>
		</html>
	);
}
