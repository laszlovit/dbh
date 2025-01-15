import { Button } from "@/components/button";

export default function CallToAction() {
	return (
		<section className="px-[5%] pb-8 md:pb-12 lg:pb-14">
			<div className="mx-auto max-w-screen-2xl rounded-lg bg-primary">
				<div className="grid grid-cols-1 items-start justify-start gap-6 rounded-lg p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12">
					<div className="md:mr-12 lg:mr-0">
						<div className="w-full">
							<h2 className="mb-3 text-4xl font-bold leading-[1.2] text-white sm:text-5xl md:mb-4 md:text-5xl">
								Klar til at få professionel rengøring?
							</h2>
							<p className="max-w-2xl text-white md:text-md">
								Kontakt os i dag for at få et tilbud på tilpasset rengøring til din virksomhed.
								Vores team er klar til at hjælpe dig med dine behov. Ring nu eller få et
								uforpligtende tilbud!
							</p>
						</div>
					</div>
					<div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
						<Button variant="secondary" href="/fa-et-tilbud" className="">
							Få et tilbud
						</Button>
						<Button
							variant="outline"
							href="tel:+4570604615"
							className="border-2 border-white bg-transparent font-semibold text-white hover:text-gray-950"
						>
							Ring nu
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
