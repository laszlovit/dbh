import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";

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
			description: "Ring til os alle dage 07 - 16",
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
				<div className="max-w-7xl mx-auto">
					<div className="rb-12 max-w-2xl mx-auto mb-12 text-center md:mb-18 lg:mb-20">
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
								className="shadow-sm rounded-lg bg-white p-6 ring-1 ring-black/5 md:p-8"
							>
								<div className="shadow-sm mb-5 w-fit rounded-md bg-lightGray p-1 ring-1 ring-black/10 lg:mb-6">
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
								src="https://cdn.sanity.io/images/11915si6/production/fccd6cf84822a3fcf54662be0ff2582ade71d417-1400x650.jpg?fit=max&w=1200&h=1200&auto=format"
								alt=""
								loading="lazy"
								className="shadow-xl size-full rounded-lg object-cover outline-1 -outline-offset-1 outline-black/10"
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
