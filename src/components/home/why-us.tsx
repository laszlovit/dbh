import {
	FaceSmileIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../button";

export default function WhyUs() {
	const features = [
		{
			icon: <ShieldCheckIcon className="size-12 text-primary" />,
			heading: "Troværdighed",
			description:
				"Vi sætter en stor ære i at yde det bedste for vores kunder. Derfor er De Blå Helte bygget op omkring troværdighed, høj kvalitet og et serviceminded personale.",
		},
		{
			icon: <FaceSmileIcon className="size-12 text-primary" />,
			heading: "Kundetilfredshed",
			description:
				"For os er det vigtigt, at vores kunder er tilfredse og føler sig trygge ved den service, vi udfører.",
		},
		{
			icon: <UserGroupIcon className="size-12 text-primary" />,
			heading: "Personlig service",
			description:
				"Derfor tilfører vi et fast team til hver enkelt opgave. Det giver vores team et personligt tilhørsforhold og garanterer ensartet rengøring.",
		},
		{
			icon: <SparklesIcon className="size-12 text-primary" />,
			heading: "Grundig rengøring",
			description:
				"Vores mål er at levere en grundig rengøring af dine lokaler, så du kan nyde et rent og behageligt miljø.",
		},
	];
	return (
		<section id="om-os" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-x-20">
					<div className="">
						<div className="lg:sticky lg:top-20">
							<p className="mb-3 font-semibold text-primary md:mb-4">Om os</p>
							<h2 className="rb-5 mb-5 text-pretty text-4xl font-bold sm:text-5xl md:mb-6">
								Hvordan sikrer vi din troværdighed og kvalitet?
							</h2>
							<p className="md:text-md">
								Vi er dedikeret til at levere service af højeste kvalitet, hvor tillid og
								pålidelighed er i fokus. Vores team arbejder altid med stor omhu og professionel
								integritet for at sikre, at du får den bedste oplevelse hver gang.
							</p>
							<div className="mt-6 flex items-center gap-4 md:mt-8">
								<Button variant="primary" href="/om-os">
									Hvem er De Blå Helte?
								</Button>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
						{features.map((feature, index) => (
							<div
								key={index}
								className="shadow-sm flex self-start rounded-lg bg-white p-8 ring-1 ring-black/5"
							>
								<div className="mr-6 flex-none self-start">{feature.icon}</div>
								<div>
									<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{feature.heading}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
