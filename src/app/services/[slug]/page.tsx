import { Button } from "@/components/button";
import Fancybox from "@/components/fancybox-wrapper";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import { image } from "@/sanity/lib/image";
import { getService } from "@/sanity/lib/services/get-service";
import { getServiceMeta } from "@/sanity/lib/services/get-service-meta";
import { getServiceSlugs } from "@/sanity/lib/services/get-service-slugs";
import { Metadata } from "next";
import { PortableText, toPlainText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const serviceSlugs = await getServiceSlugs();
	return serviceSlugs;
}

// TODO: Update custom OG image fallback

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const pageMeta = await getServiceMeta(params.slug);

	return {
		title: pageMeta?.seo?.metaTitle || `${pageMeta?.title} | De Blæ Helte`,
		description: pageMeta?.seo?.metaDescription || pageMeta?.excerpt,
		openGraph: {
			images: [
				{
					url:
						pageMeta?.seo?.ogImage?.asset?.url ||
						"https://cdn.sanity.io/images/11915si6/production/0e018acc33a91657268060541badaf802e8c85f0-1200x630.jpg",
				},
			],
		},
	} satisfies Metadata;
}

export default async function SelectedServicePage({ params }: Props) {
	const service = (await getService((await params).slug)) || notFound();
	return (
		<>
			<Navbar />
			<section className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.5fr] lg:gap-8">
						<div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/5 xl:p-12">
							{service.mainImage && (
								<img
									src={image(service.mainImage).format("webp").url()}
									alt={service.mainImage.alt}
									className="w-full rounded-md object-cover lg:aspect-[4/2]"
									fetchPriority="high"
								/>
							)}
							<h1 className="mb-5 mt-10 text-4xl font-bold sm:text-5xl md:mb-6">{service.title}</h1>
							<div className="md:prose-md prose lg:prose-lg">
								{service.body && (
									<PortableText
										value={service.body}
										components={{
											block: {
												normal: ({ children }) => <p className="">{children}</p>,
												h2: ({ value, children }) => (
													<h2 id={toPlainText(value)} className="">
														{children}
													</h2>
												),
												h3: ({ value, children }) => (
													<h3 id={toPlainText(value)} className="">
														{children}
													</h3>
												),
												blockquote: ({ children }) => (
													<blockquote className="">{children}</blockquote>
												),
											},
											types: {
												image: ({ value }) => (
													<img
														alt={value.alt || ""}
														src={image(value).width(2000).url()}
														className="w-full rounded-2xl"
													/>
												),
												separator: ({ value }) => {
													switch (value.style) {
														case "line":
															return <hr className="my-8 border-t border-gray-200" />;
														case "space":
															return <div className="my-8" />;
														default:
															return null;
													}
												},
											},
											list: {
												bullet: ({ children }) => (
													<ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
														{children}
													</ul>
												),
												number: ({ children }) => (
													<ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
														{children}
													</ol>
												),
											},
											listItem: {
												bullet: ({ children }) => {
													return <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>;
												},
												number: ({ children }) => {
													return <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>;
												},
											},
											marks: {
												strong: ({ children }) => <strong className="">{children}</strong>,
												link: ({ value, children }) => {
													return (
														<Link
															href={value.href}
															className="font-medium text-primary underline decoration-primary/40 underline-offset-4 data-[hover]:decoration-primary/60"
														>
															{children}
														</Link>
													);
												},
											},
										}}
									/>
								)}
							</div>
							{service.gallery && (
								<section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10">
									<h2 className="text-2xl/9 font-semibold tracking-tight text-slate-900">
										Galleri
									</h2>
									<Fancybox
										className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2"
										options={{
											Carousel: {
												infinite: false,
											},
										}}
									>
										{service.gallery.map((imageItem) => (
											<div key={imageItem._key} className="flex flex-col items-center">
												<Link
													data-fancybox="gallery"
													data-caption={imageItem.alt || ""}
													href={image(imageItem).auto("format").url()}
													className="group relative overflow-hidden rounded-xl"
												>
													<img
														alt={imageItem.alt || ""}
														src={image(imageItem).auto("format").url()}
														loading="lazy"
														className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
													/>
												</Link>
											</div>
										))}
									</Fancybox>
								</section>
							)}
							{service.testimonials && (
								<section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10">
									<h2 className="text-2xl/9 font-semibold tracking-tight text-slate-900">
										Hvad vores kunder siger
									</h2>
									<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
										{service.testimonials.map((testimonial) => (
											<li
												key={testimonial.slug}
												className="relative col-span-1 flex flex-col space-y-4 rounded-md bg-white p-6 shadow-sm ring-1 ring-black/10"
											>
												{testimonial.logo && (
													<div className="border-b border-slate-100 pb-4">
														<img
															alt={testimonial.logo.alt || ""}
															src={image(testimonial.logo).format("webp").url()}
															className="h-6 w-auto"
														/>
													</div>
												)}
												<div className="mt-6 flex items-center gap-x-4">
													<div>
														<div className="font-medium">{testimonial.name}</div>
													</div>
												</div>
												<blockquote className="text-sm text-gray-700">
													“{testimonial.content}”
												</blockquote>
											</li>
										))}
									</ul>
								</section>
							)}
						</div>
						<div>
							<div className="rounded-lg border border-primary bg-primary p-8 shadow-sm lg:sticky lg:top-20">
								<h2 className="mb-3 text-pretty text-xl font-bold leading-[1.4] text-white md:mb-4 md:text-2xl">
									Klar til at få professionel rengøring?
								</h2>
								<p className="text-white">
									Kontakt os i dag for at få et tilbud på tilpasset rengøring til din virksomhed.
									Ring nu eller få et uforpligtende tilbud!
								</p>
								<div className="mt-6 flex w-full flex-wrap items-center justify-start gap-4 md:w-auto">
									<Button href="/fa-et-tilbud" variant="secondary">
										Få et tilbud
									</Button>
									<Button
										href="tel:+4570604615"
										variant="outline"
										className="border-2 border-white bg-transparent font-semibold text-white hover:text-gray-950"
									>
										Ring nu
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
