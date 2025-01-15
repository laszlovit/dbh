import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import SubPageHeader from "@/components/sub-page-header";
import { image } from "@/sanity/lib/image";
import { getAllServices } from "@/sanity/lib/services/get-all-services";
import Link from "next/link";

async function Services() {
	const services = await getAllServices();

	return (
		<section className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8 md:gap-x-8">
					{services.map((service) => (
						<div
							key={service.slug}
							className="group relative flex h-full flex-col rounded-lg bg-white p-3 shadow-black/10 ring-1 ring-black/10"
						>
							{service.mainImage && (
								<img
									src={image(service.mainImage).format("webp").url()}
									alt={service.mainImage.alt}
									loading="lazy"
									className="aspect-[3/2] w-full rounded-md object-cover"
								/>
							)}
							<div className="flex flex-1 flex-col p-7">
								<h3 className="mb-3 text-xl font-bold transition-all duration-300 ease-in-out group-hover:text-primary md:mb-4 md:text-2xl">
									<Link href={`/services/${service.slug}`}>
										{service.title}
										<span className="absolute inset-0"></span>
									</Link>
								</h3>
								<p className="line-clamp-3">{service.excerpt}</p>
								<p className="mt-6 text-sm/6 font-semibold text-primary">
									Lære mere <span aria-hidden="true">→</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default function Page() {
	return (
		<>
			<Navbar />
			<SubPageHeader
				title="Services"
				description="Vi tilbyder professionelle rengøringstjenester i Esbjerg og omegn, tilpasset dine behov. Fra vinduespolering til erhvervsrengøring kan du stole på vores dygtige team for at levere høj kvalitet og pålidelig service."
			/>
			<Services />
			<CallToAction />
			<Footer />
		</>
	);
}
