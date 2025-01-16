import { getAllTestimonials } from "@/sanity/lib/testimonials/get-all-testimonials";
import { DynamicHomeTestimonials } from "../dynamic-home-testimonials";

export default async function Testimonials() {
	const testimonials = await getAllTestimonials();

	return (
		<section className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
					<div className="order-1 h-full rounded-lg outline-1 -outline-offset-1 outline-black/10">
						<img
							src="https://cdn.sanity.io/images/11915si6/production/de40e4588b112e67c60927e02dcb0a985a409467-1200x961.jpg?format=auto"
							className="size-full rounded-lg object-cover"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="order-2 h-full rounded-lg bg-white shadow-sm ring-1 ring-black/5">
						<DynamicHomeTestimonials testimonials={testimonials} />
					</div>
				</div>
			</div>
		</section>
	);
}
