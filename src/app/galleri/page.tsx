import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import SubPageHeader from "@/components/sub-page-header";
import { getAllGalleries } from "@/sanity/lib/galleries/get-all-galleries";
import { image } from "@/sanity/lib/image";
import Link from "next/link";

async function Galleries() {
	const galleries = await getAllGalleries();

	return (
		<section className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8 md:gap-x-8">
					{galleries.map((gallery) => (
						<div
							key={gallery.slug}
							className="group relative flex h-full flex-col rounded-lg bg-white p-3 shadow-black/10 ring-1 ring-black/10"
						>
							{gallery.mainImage && (
								<img
									src={image(gallery.mainImage).format("webp").url()}
									alt={gallery.mainImage.alt}
									loading="lazy"
									className="aspect-[3/2] w-full rounded-md object-cover"
								/>
							)}
							<div className="flex flex-1 flex-col p-7">
								<h2 className="text-xl font-bold md:text-2xl">
									<Link href={`/galleri/${gallery.slug}`}>
										{gallery.title}
										<span className="absolute inset-0"></span>
									</Link>
								</h2>
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
			<SubPageHeader title="Galleri" />
			<Galleries />
			<CallToAction />
			<Footer />
		</>
	);
}
