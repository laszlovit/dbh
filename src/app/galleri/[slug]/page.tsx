import CallToAction from "@/components/call-to-action";
import Fancybox from "@/components/fancybox-wrapper";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import SubPageHeader from "@/components/sub-page-header";
import { getGallery } from "@/sanity/lib/galleries/get-gallery";
import { getGallerySlugs } from "@/sanity/lib/galleries/get-gallery-slugs";
import { image } from "@/sanity/lib/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const gallerySlugs = await getGallerySlugs();
	return gallerySlugs;
}

export default async function Page({ params }: Props) {
	const gallery = (await getGallery((await params).slug)) || notFound();

	return (
		<>
			<Navbar />
			<SubPageHeader title={`${gallery.title} - Galleri`} />
			<section className="px-[5%] py-8 md:py-12 lg:py-14">
				<div className="mx-auto max-w-screen-2xl">
					<div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
						<Fancybox
							className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2"
							options={{
								Carousel: {
									infinite: false,
								},
							}}
						>
							{gallery.gallery?.map((imageItem) => (
								<div key={imageItem._key} className="flex flex-col items-center">
									<Link
										data-fancybox="gallery"
										data-caption={imageItem.alt || ""}
										href={image(imageItem).url()}
										className="group relative overflow-hidden rounded-xl"
									>
										<img
											alt={imageItem.alt || ""}
											src={image(imageItem).url()}
											loading="lazy"
											className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
										/>
									</Link>
								</div>
							))}
						</Fancybox>
					</div>
				</div>
			</section>
			<CallToAction />
			<Footer />
		</>
	);
}
