import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import QuoteForm from "@/components/quote-form";
import SubPageHeader from "@/components/sub-page-header";
import {
	ChatBubbleLeftRightIcon,
	CheckCircleIcon,
	FaceSmileIcon,
	LockOpenIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Få et tilbud | Uforpligtende rengøringstilbud i Esbjerg",
	description:
		"Udfyld vores formular for et uforpligtende tilbud på rengøringstjenester i Esbjerg. Vi svarer hurtigt og skræddersyer løsningen til dine behov..",
	openGraph: {
		title: "Få et tilbud | Uforpligtende rengøringstilbud i Esbjerg",
		description:
			"Udfyld vores formular for et uforpligtende tilbud på rengøringstjenester i Esbjerg. Vi svarer hurtigt og skræddersyer løsningen til dine behov.",
		images: [
			{
				url: "https://cdn.sanity.io/images/11915si6/production/0e018acc33a91657268060541badaf802e8c85f0-1200x630.jpg",
			},
		],
	},
};

export default function Page() {
	return (
		<>
			<Navbar />
			<SubPageHeader title="Få et tilbud" />
			<section className="mx-auto max-w-7xl px-[5%] py-8 md:py-12 lg:py-14">
				<div className="flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
					<div className="lg:mt-6 lg:w-80 lg:flex-none">
						<div className="max-w-lg space-y-8">
							<div className="flex items-center gap-x-6">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
									<FaceSmileIcon aria-hidden="true" className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-base/7 font-semibold text-gray-900">
										Over 300 loyale kunder gennem de sidste 2 år
									</h3>
								</div>
							</div>
							<div className="flex items-center gap-x-6">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
									<ShieldCheckIcon aria-hidden="true" className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-base/7 font-semibold text-gray-900">
										Kvalitetsgaranti på alle ydelser
									</h3>
								</div>
							</div>
							<div className="flex items-center gap-x-6">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
									<LockOpenIcon aria-hidden="true" className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-base/7 font-semibold text-gray-900">Uforpligtende tilbud</h3>
								</div>
							</div>
							<div className="flex items-center gap-x-6">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
									<ChatBubbleLeftRightIcon aria-hidden="true" className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-base/7 font-semibold text-gray-900">
										Gratis rädgivning til alle kunder
									</h3>
								</div>
							</div>
							<div className="flex items-center gap-x-6">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
									<CheckCircleIcon aria-hidden="true" className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-base/7 font-semibold text-gray-900">
										Servicetjek hos alle kunder
									</h3>
								</div>
							</div>
						</div>
					</div>
					<QuoteForm />
				</div>
			</section>

			<Footer />
		</>
	);
}
