import Link from "next/link";

type ImageProps = {
	url?: string;
	src: string;
	alt?: string;
};

type Links = {
	title: string;
	url: string;
};

type SocialMediaLinks = {
	url: string;
	icon: React.ReactNode;
	ariaLabel: string;
};

type ColumnLinks = {
	links: Links[];
};

type Address = {
	label: string;
	value: string;
};

type Contact = {
	label: string;
	phone: string;
	email: string;
	cvr: string;
};

type Props = {
	logo: ImageProps;
	address: Address;
	contact: Contact;
	columnLinks: ColumnLinks[];
	socialMediaLinks: SocialMediaLinks[];
	footerText?: string;
	footerLinks: Links[];
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer = (props: FooterProps) => {
	const { logo, address, contact, columnLinks, socialMediaLinks, footerText, footerLinks } = {
		...FooterDefaults,
		...props,
	};
	return (
		<footer className="px-[5%] py-6 md:py-9 lg:py-10">
			<div className="shadow-sm mx-auto max-w-screen-2xl rounded-lg bg-white ring-1 ring-black/5">
				<div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
					<div className="col-span-2 md:col-span-1">
						<div className="rb-6 mb-6 md:mb-8">
							<Link href={logo.url || "/"}>
								<img src={logo.src} alt={logo.alt} className="inline-block h-12 md:h-14" />
							</Link>
						</div>
						<div className="rb-6 mb-6 md:mb-8">
							<div>
								<p className="mb-1 text-sm font-semibold">{address.label}</p>
								<p className="mb-5 text-sm md:mb-6">{address.value}</p>
							</div>
							<div>
								<p className="mb-1 text-sm font-semibold">{contact.label}</p>
								<div className="flex flex-col gap-y-1 text-sm md:mb-6">
									<a
										href={`tel:${contact.phone}`}
										className="underline decoration-black underline-offset-1 hover:text-primary hover:decoration-primary"
									>
										{contact.phone}
									</a>
									<a
										href={`mailto:${contact.email}`}
										className="underline decoration-black underline-offset-1 hover:text-primary hover:decoration-primary"
									>
										{contact.email}
									</a>
									<p>{contact.cvr}</p>
								</div>
							</div>
						</div>
						<div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
							{socialMediaLinks.map((link, index) => (
								<a key={index} href={link.url} aria-label={link.ariaLabel}>
									{link.icon}
								</a>
							))}
						</div>
					</div>
					<div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
						{columnLinks.map((column, index) => (
							<ul key={index}>
								{column.links.map((link, linkIndex) => (
									<li key={linkIndex} className="py-2 text-sm font-semibold hover:text-primary">
										<Link href={link.url}>{link.title}</Link>
									</li>
								))}
							</ul>
						))}
					</div>
					<div className="col-span-2 flex w-full flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
						<p className="mt-8 md:mt-0">{footerText}</p>
						<ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
							{footerLinks.map((link, index) => (
								<li key={index} className="underline">
									<Link href={link.url}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export const FooterDefaults: Props = {
	logo: {
		url: "#",
		src: "/de-bla-helte-logo.png",
		alt: "Logo image",
	},
	address: {
		label: "Adresse:",
		value: "Forumlundvej 15, 6715 Esbjerg N.",
	},
	contact: {
		label: "Kontakt:",
		phone: "+45 70 60 46 15",
		email: "support@blaahelte.com",
		cvr: "CVR: 43755315",
	},
	columnLinks: [
		{
			links: [
				{ title: "Vinduespolering", url: "/services/vinduespolering" },
				{ title: "Solcellevask", url: "/services/solcellevask" },
				{ title: "Fliserens", url: "/services/fliserens" },
				{ title: "Algebehandeling", url: "/services/algebehandeling" },
				{ title: "Rens of tagrender", url: "/services/rens-af-tagrender" },
				{ title: "Erhvervsrengøring", url: "/services/erhvervsrengoring" },
			],
		},
		{
			links: [
				{ title: "Services", url: "/services" },
				{ title: "Om os", url: "/#om-os" },
				{ title: "Galleri", url: "/galleri" },
				{ title: "Kontakt", url: "/kontakt" },
				{ title: "Få et tilbud", url: "/fa-et-tilbud" },
			],
		},
	],
	socialMediaLinks: [
		{
			url: "https://www.facebook.com/deblaahelte",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					className="size-6 hover:text-primary"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
				</svg>
			),
			ariaLabel: "Facebook",
		},
		{
			url: "https://www.instagram.com/deblaahelte",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					className="size-6 hover:text-primary"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
					<circle cx="16.806" cy="7.207" r="1.078"></circle>
					<path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
				</svg>
			),
			ariaLabel: "Instagram",
		},
		{
			url: "https://www.linkedin.com/company/de-bl%C3%A5-helte-v-cbl-service-aps/",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					className="size-6 hover:text-primary"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
				</svg>
			),
			ariaLabel: "LinkedIn",
		},
	],
	footerText: "© 2025 De Blå Helte. All rights reserved.",
	footerLinks: [
		{ title: "Privatlivspolitik", url: "#" },
		{ title: "Handelsbetingelser", url: "#" },
		{ title: "Cookiepolitik", url: "#" },
	],
};
