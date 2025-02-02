import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kontakt De Blå Helte | Spørgsmål eller tilbud i Esbjerg",
	description:
		"Har du spørgsmål eller ønsker et tilbud? Kontakt De Blå Helte i Esbjerg via telefon eller email. Vi er klar til at hjælpe dig alle hverdage.",
	openGraph: {
		title: "Kontakt De Blå Helte | Spørgsmål eller tilbud i Esbjerg",
		description:
			"Har du spørgsmål eller ønsker et tilbud? Kontakt De Blå Helte i Esbjerg via telefon eller email. Vi er klar til at hjælpe dig alle hverdage.",
		images: [
			{
				url: "https://cdn.sanity.io/images/11915si6/production/0e018acc33a91657268060541badaf802e8c85f0-1200x630.jpg",
			},
		],
	},
};

function Intro() {
	const contacts = [
		{
			icon: <EnvelopeIcon className="size-12" />,
			title: "Email",
			description: "Besvares alle hverdage 07 - 15",
			link: {
				label: "support@blaahelte.com",
				url: "mailto:support@blaahelte.com",
			},
		},
		{
			icon: <PhoneIcon className="size-12" />,
			title: "Telefonnummer",
			description: "Ring til os alle dage 07 - 17",
			link: {
				label: "+45 70 60 46 15",
				url: "tel:+4570604615",
			},
		},
		{
			icon: <MapPinIcon className="size-12" />,
			title: "Adresse",
			description: "Vi holder til i Esbjerg og omegn.",
			link: {
				label: "Forumlundvej 15, 6715 Esbjerg N.",
				url: "https://www.google.com/maps/dir//Forumlundvej+15,+6715+Esbjerg+Municipality,+Esbjerg+N/@55.5757943,8.3998048,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x464b1f7554c3e7bf:0x37056b6f03e2a474!2m2!1d8.4822045!2d55.5757249?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
			},
		},
	];

	return (
		<>
			<section className="px-[5%] py-8 md:py-12 lg:py-14">
				<div className="mx-auto max-w-7xl">
					<div className="rb-12 md:mb-18 mx-auto mb-12 max-w-2xl text-center lg:mb-20">
						<h1 className="rb-5 mb-5 text-4xl font-bold sm:text-5xl md:mb-6">
							Ræk ud. Vi er her for at lytte.
						</h1>
						<p className="md:text-md">
							Har du spørgsmål eller forespørgsler? Vi vil meget gerne høre fra dig.
						</p>
					</div>
					<div className="grid auto-cols-fr grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
						{contacts.map((contact, index) => (
							<div
								key={index}
								className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8"
							>
								<div className="mb-5 w-fit rounded-md bg-lightGray p-1 shadow-sm ring-1 ring-black/10 lg:mb-6">
									<div className="text-primary">{contact.icon}</div>
								</div>
								<h2 className="mb-3 text-xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-3xl">
									{contact.title}
								</h2>
								<p className="mb-5 md:mb-6">{contact.description}</p>
								<a className="text-primary underline" href={contact.link.url} target="_blank">
									{contact.link.label}
								</a>
							</div>
						))}
						<div className="col-span-full">
							<img
								src="https://cdn.sanity.io/images/11915si6/production/4274b4768beb17174e3205a7d78901569b93081a-1170x487.jpg?auto=format"
								alt=""
								loading="lazy"
								className="size-full rounded-lg object-cover shadow-xl outline-1 -outline-offset-1 outline-black/10"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default function Page() {
	return (
		<>
			<Navbar />
			<Intro />
			<CallToAction />
			<Footer />
		</>
	);
}
