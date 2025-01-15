import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WhyUs from "@/components/home/why-us";
import Navbar from "@/components/navigation-bar";

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
