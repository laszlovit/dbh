import { SanityLive } from "@/sanity/lib/live";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
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
		title: "De Blå Helte",
		description: "Serviceløsninger til privat- og erhvervskunder",
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
			<Script
				id="fb-pixel"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '440234665723553');
						fbq('track', 'PageView');
						`,
				}}
			/>
			<body className={`${inter.variable} ${outfit.variable} bg-lightGray antialiased`}>
				{children}
				<SanityLive />
				<Analytics />
				<noscript>
					<img
						height="1"
						width="1"
						className="hidden"
						alt="Facebbok Pixel Tracking"
						src="https://www.facebook.com/tr?id=440234665723553&ev=PageView&noscript=1"
					/>
				</noscript>
			</body>
		</html>
	);
}
