import { BanknotesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/button";

function LogoCloudBento() {
	const logos = [
		{
			src: "https://cdn.sanity.io/images/11915si6/production/ad1b218014755842016b6929a70db6a08b62a066-516x96.png?auto=format",
			alt: "Rekom logo",
		},
		{
			src: "https://cdn.sanity.io/images/11915si6/production/572155938d8d5300f5651fc878b0f1d857e86436-400x102.png?auto=format",
			alt: "A Place To logo",
		},
		{
			src: "https://cdn.sanity.io/images/11915si6/production/20bed9a645554c67bfc19e9891aa011ab8fa884e-716x162.png?auto=format",
			alt: "Henne Mølle Badehotel logo",
		},
		{
			src: "https://cdn.sanity.io/images/11915si6/production/59d73723ce5c620e7c499f2744fc9fa2d9e759a6-1200x628.webp?auto=format",
			alt: "Rustik logo",
		},
		{
			src: "https://cdn.sanity.io/images/11915si6/production/7324f1bae3087db4dbe46ac8e725f0b413116c9b-510x162.png?auto=format",
			alt: "Stennevad logo",
		},
		{
			src: "https://cdn.sanity.io/images/11915si6/production/c500677e3d37ca542da318f3a152731821510e0b-310x174.png?auto=format",
			alt: "Dansk Bilglas logo",
		},
	];

	return (
		<section className="overflow-hidden py-12 md:py-16 lg:py-20">
			<div className="mx-auto mb-8 w-full px-[5%] md:mb-10 lg:mb-12">
				<h1 className="md:text-md text-center text-base font-bold leading-[1.2] md:leading-[1.2]">
					Betroet af vores værdifulde kunder
				</h1>
			</div>
			<div className="flex items-center pt-7 md:pt-0">
				{Array(2)
					.fill(0)
					.map((_, index) => (
						<div key={index} className="animate-loop-horizontally flex shrink-0 items-center">
							{logos.map((logo, index) => (
								<img
									key={index}
									className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
									src={logo.src}
									alt={logo.alt}
									loading="lazy"
								/>
							))}
						</div>
					))}
			</div>
		</section>
	);
}

export default function Hero() {
	const features = [
		{
			icon: <BanknotesIcon className="size-10 text-primary" />,
			heading: "Simple priser, ingen ubehagelige overraskelser",
		},
		{
			icon: <CheckBadgeIcon className="size-10 text-primary" />,
			heading: "Garanti for veludført arbejde",
		},
	];
	return (
		<section className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-6 md:gap-8">
					<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
						<div className="order-first flex flex-col items-stretch rounded-lg bg-white shadow-sm ring-1 ring-black/5 lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
							<div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12 xl:p-20">
								<div>
									<h1 className="mb-5 text-pretty text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl xl:text-6xl 2xl:text-7xl">
										Serviceløsninger til private og erhvervskunder
									</h1>
									<p className="md:text-md">
										Vinduesvask | Rengøring | Fliserens | Solcellerens | Algebehandling |
										Myrebekæmpelse | Trappevask m.m. <br /> <br />
										Vi tilbyder pålidelig opgaveløsning. Vores erfarne team sikrer høj kvalitet og
										tilfredshed.
									</p>
								</div>
								<div className="mt-6 flex items-center gap-4 md:mt-8">
									<Button variant="primary" href="/fa-et-tilbud">
										Få et tilbud
									</Button>
									<Button variant="outline" href="tel:+4570604615">
										Ring nu
									</Button>
								</div>
								<div className="xxl:mt-auto mt-12">
									<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
										{features.map((feature, index) => (
											<div key={index}>
												<div className="mb-3 md:mb-4">{feature.icon}</div>
												<p className="mb-3 text-pretty text-lg font-bold md:mb-4 md:text-xl">
													{feature.heading}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="lg:order-none">
							<div className="flex size-full items-center justify-center rounded-lg shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<picture className="size-full rounded-lg object-cover">
									<source
										media="(max-width: 767px)"
										srcSet="https://cdn.sanity.io/images/11915si6/production/b2effd8e613a3da3ee83aa5d47e5b50174ceff1b-1505x1004.jpg?fit=max&w=600&h=600&auto=format"
									/>
									<source
										media="(min-width: 768px) and (max-width: 1023px)"
										srcSet="https://cdn.sanity.io/images/11915si6/production/b2effd8e613a3da3ee83aa5d47e5b50174ceff1b-1505x1004.jpg?fit=max&w=900&h=900&auto=format"
									/>
									<source
										media="(min-width: 1024px) and (max-width: 1439px)"
										srcSet="https://cdn.sanity.io/images/11915si6/production/b2effd8e613a3da3ee83aa5d47e5b50174ceff1b-1505x1004.jpg?fit=max&w=1200&h=1200&auto=format"
									/>
									<source
										media="(min-width: 1440px)"
										srcSet="https://cdn.sanity.io/images/11915si6/production/b2effd8e613a3da3ee83aa5d47e5b50174ceff1b-1505x1004.jpg?fit=max&w=1500&h=1500&auto=format"
									/>
									<img
										src="https://cdn.sanity.io/images/11915si6/production/b2effd8e613a3da3ee83aa5d47e5b50174ceff1b-1505x1004.jpg?fit=max&w=1200&h=1200&auto=format"
										alt=""
										className="size-full rounded-lg object-cover"
									/>
								</picture>
							</div>
						</div>
						<div className="order-last flex w-full flex-col justify-between rounded-lg bg-white ring-1 ring-black/5 lg:order-none">
							<LogoCloudBento />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
