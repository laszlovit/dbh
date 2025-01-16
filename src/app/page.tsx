import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WhyUs from "@/components/home/why-us";
import Navbar from "@/components/navigation-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "De Blå Helte | Rengøringsløsninger i Esbjerg og omegn",
	description:
		"De Blå Helte tilbyder rengøring, vinduespudsning, fliserens, algebehandling, rens af tagrender og solcellevask i Esbjerg. Høj kvalitet og faste priser.",
	openGraph: {
		title: "De Blå Helte | Rengøringsløsninger i Esbjerg og omegn",
		description:
			"De Blå Helte tilbyder rengøring, vinduespudsning, fliserens, algebehandling, rens af tagrender og solcellevask i Esbjerg. Høj kvalitet og faste priser.",
		images: [
			{
				url: "https://cdn.sanity.io/images/11915si6/production/0e018acc33a91657268060541badaf802e8c85f0-1200x630.jpg",
			},
		],
	},
};

export default function Page() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<WhyUs />
			<Testimonials />
			<CallToAction />
			<Footer />
		</>
	);
}
