import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Testimonials from "@/components/home/testimonials";
import Navbar from "@/components/navigation-bar";
import SubPageHeader from "@/components/sub-page-header";
import {
	FaceSmileIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";

function AboutUs() {
	return (
		<section className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
					<div className="space-y-6">
						<p className="md:text-md">
							De Blå Helte er en afdeling af CBL Service ApS, som ejes og administreres af Claus
							Bjerrum Langendorff.
						</p>
						<p className="md:text-md">
							Virksomheden startede som en enkeltmandsvirksomhed i 2021, hvor Claus Bjerrum
							Langendorff udførte opgaver for fortrinsvis private kunder og var underleverandør for
							andre virksomheder, mens han stadig varetog sit almindelige fuldtidsarbejde.
						</p>
						<p className="md:text-md">
							I januar 2023 opkøbte Claus Bjerrum Langendorff en ophørt virksomhed og stiftede
							selskabet CBL Service ApS og videreførte navnet De Blå Helte.
						</p>
						<p className="md:text-md">
							I 2023 konsoliderede virksomheden sit navn i så høj grad, at Claus Bjerrum Langendorff
							i 2024 valgte at bruge al sin tid på virksomheden og opsagde sit fuldtidsarbejde.
						</p>
						<p className="md:text-md">
							Claus Bjerrum Langendorff er selv aktiv i driften. Udover at lede de dygtige og loyale
							medarbejdere varetager Claus Bjerrum Langendorff de fleste opgaver indenfor
							vinduesvask og udendørsbehandlinger selv.
						</p>
						<p className="md:text-md">
							Claus Bjerrum Langendorff vægter den personlige kontakt til sine kunder. Derfor er det
							også ham selv, som besvarer telefonen, når du ringer.
						</p>
					</div>
					<div>
						<img
							src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
							className="w-full object-cover"
							alt="Relume placeholder image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function Features() {
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
				<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 md:grid-cols-2">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex self-stretch rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/5"
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
		</section>
	);
}

export default function Page() {
	return (
		<>
			<Navbar />
			<SubPageHeader title="Om os" />
			<AboutUs />
			<Features />
			<Testimonials />
			<CallToAction />
			<Footer />
		</>
	);
}
