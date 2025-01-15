import { Button } from "@/components/button";
import { image } from "@/sanity/lib/image";
import { getFeaturedServices } from "@/sanity/lib/services/get-featured-services";
import Link from "next/link";

export default async function Services() {
	const services = await getFeaturedServices(3);

	return (
		<section className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl rounded-lg bg-white p-6 px-6 py-8 shadow-sm ring-1 ring-black/5 md:p-8 lg:p-20">
				<div className="md:mb-18 mx-auto mb-12 w-full max-w-2xl text-center lg:mb-20">
					<p className="mb-3 font-semibold text-primary md:mb-4">Services</p>
					<h2 className="mb-5 text-4xl font-bold sm:text-5xl md:mb-6">
						Oplev vores professionelle rengøringsservice
					</h2>
					<p className="md:text-md">
						Vi tilbyder professionelle rengøringstjenester i Esbjerg og omegn, tilpasset dine behov.
						Fra vinduespolering til erhvervsrengøring kan du stole på vores dygtige team for at
						levere høj kvalitet og pålidelig service.
					</p>
				</div>
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.slug}
							className="group relative flex h-full flex-col rounded-lg bg-white p-2 shadow-black/10 ring-1 ring-black/10"
						>
							{service.mainImage && (
								<img
									src={image(service.mainImage).width(612).height(408).auto("format").url()}
									alt={service.mainImage.alt}
									loading="lazy"
									className="aspect-[3/2] w-full rounded-md object-cover"
								/>
							)}
							<div className="flex flex-1 flex-col p-8">
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
				<div className="mt-10 flex items-center justify-center gap-4 md:mt-14 lg:mt-16">
					<Button variant="primary" href="/services">
						Se alle services
					</Button>
				</div>
			</div>
		</section>
	);
}
