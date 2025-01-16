import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import QuoteForm from "@/components/quote-form";
import SubPageHeader from "@/components/sub-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Få et tilbud | Uforpligtende rengøringstilbud i Esbjerg",
	description:
		"Udfyld vores formular for et uforpligtende tilbud på rengøringstjenester i Esbjerg. Vi svarer hurtigt og skræddersyer løsningen til dine behov..",
	openGraph: {
		title: "Få et tilbud | Uforpligtende rengøringstilbud i Esbjerg",
		description:
			"Udfyld vores formular for et uforpligtende tilbud på rengøringstjenester i Esbjerg. Vi svarer hurtigt og skræddersyer løsningen til dine behov.",
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
			<SubPageHeader title="Få et tilbud" />
			<QuoteForm />
			<Footer />
		</>
	);
}
