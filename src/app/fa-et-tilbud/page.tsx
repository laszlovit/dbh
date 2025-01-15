import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import QuoteForm from "@/components/quote-form";
import SubPageHeader from "@/components/sub-page-header";

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
