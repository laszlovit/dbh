import CallToAction from "@/components/call-to-action";
import { Container } from "@/components/container";
import { Link } from "@/components/link";
import Navbar from "@/components/navigation-bar";

import { Heading } from "@/components/text";
import { getCaseStudy } from "@/sanity/lib/case-studies/get-case-study";
import { getCaseStudyMeta } from "@/sanity/lib/case-studies/get-case-study-meta";
import { getCaseStudySlugs } from "@/sanity/lib/case-studies/get-case-study-slugs";
import { image } from "@/sanity/lib/image";
import { Metadata } from "next";
import { PortableText, toPlainText } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const caseStudySlugs = await getCaseStudySlugs();
	return caseStudySlugs;
}

// TODO: Update custom OG image fallback

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const pageMeta = await getCaseStudyMeta(params.slug);

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

export default async function SelectedCaseStudyPage({ params }: Props) {
	const caseStudy = (await getCaseStudy((await params).slug)) || notFound();
	return (
		<>
			<Navbar />
			<div className="relative bg-primary/10 bg-[url(/dot-texture.svg)] pt-16 sm:px-6 lg:px-8 lg:pt-24">
				<Container className="relative">
					<div className="flex flex-col items-center justify-center gap-x-8 gap-y-12">
						<div className="lg:max-w-2xl flex flex-col justify-center text-center">
							<p className="text-sm font-medium text-gray-900">Casestudier</p>
							<Heading as="h1" className="mt-2">
								{caseStudy.title}
							</Heading>
						</div>
						<div className="max-w-4xl w-full">
							<div className="shadow-xl relative z-20 -mb-40 flex w-full flex-col rounded-xl bg-white p-2 shadow-black/5 ring-1 ring-slate-900/5">
								{caseStudy.mainImage && (
									<img
										src={image(caseStudy.mainImage).url()}
										alt={caseStudy.mainImage.alt || ""}
										fetchPriority="high"
										className="relative aspect-[4/2] w-full rounded-lg bg-slate-200 object-cover"
									/>
								)}
								<div className="flex flex-col gap-y-4 p-8 sm:flex-row sm:items-center sm:justify-between">
									<div className="flex flex-col">
										<p className="font-medium">Period</p>
										<p className="text-sm">
											{caseStudy.period?.startDate} –{" "}
											{caseStudy.period?.isActive ? "Present" : caseStudy.period?.endDate}
										</p>
									</div>
									<div className="flex flex-col">
										<ul className="flex gap-x-2">
											{caseStudy.services &&
												caseStudy.services.map((service) => (
													<li
														key={service.slug}
														className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
													>
														<Link href={`/services/${service.slug}`}>{service.title}</Link>
													</li>
												))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<main className="mt-64 pb-24">
				<Container>
					<div className="max-w-2xl mx-auto space-y-10">
						<h2 className="text-2xl/8 font-semibold tracking-tight text-gray-950">Oversigt</h2>
						{caseStudy.body && (
							<PortableText
								value={caseStudy.body}
								components={{
									block: {
										normal: ({ children }) => (
											<p className="my-10 text-base/8 first:mt-0 last:mb-0">{children}</p>
										),
										h2: ({ value, children }) => (
											<h2
												id={toPlainText(value)}
												className="mb-10 mt-12 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
											>
												{children}
											</h2>
										),
										h3: ({ value, children }) => (
											<h3
												id={toPlainText(value)}
												className="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
											>
												{children}
											</h3>
										),
										blockquote: ({ children }) => (
											<blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
												{children}
											</blockquote>
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
										strong: ({ children }) => (
											<strong className="font-semibold text-gray-950">{children}</strong>
										),
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
						<div className="flex flex-col gap-y-6">
							<h2 className="text-2xl/8 font-semibold tracking-tight text-gray-950">
								Hvad vi gjorde
							</h2>
							<ul className="flex flex-wrap gap-4">
								{caseStudy.services &&
									caseStudy.services.map((service) => (
										<li
											key={service.slug}
											className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
										>
											<Link href={`/services/${service.slug}`}>{service.title}</Link>
										</li>
									))}
							</ul>
						</div>
						{caseStudy.testimonial && (
							<div className="pt-12">
								{caseStudy.testimonial.logo && (
									<img
										src={image(caseStudy.testimonial.logo).url()}
										alt={caseStudy.testimonial.logo.alt || ""}
										loading="lazy"
										className="mx-auto h-10"
									/>
								)}
								<figure className="mt-10">
									<blockquote className="text-center text-xl/8 font-semibold text-gray-900">
										<p>“{caseStudy.testimonial.content}”</p>
									</blockquote>

									<div className="mt-10">
										<div className="mt-4 flex items-center justify-center space-x-3 text-base">
											<div className="font-semibold text-gray-900">
												{caseStudy.testimonial.name}
											</div>
											<svg
												viewBox="0 0 2 2"
												width="3"
												height="3"
												aria-hidden="true"
												className="fill-gray-900"
											>
												<circle cx="1" cy="1" r="1"></circle>
											</svg>
											<div className="text-gray-600">{caseStudy.testimonial.role}</div>
										</div>
									</div>
								</figure>
							</div>
						)}
					</div>
				</Container>
			</main>
			<CallToAction />
		</>
	);
}
