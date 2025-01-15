export default function SubPageHeader({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<section className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
			<div className="mx-auto flex max-w-screen-2xl items-center justify-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8 lg:p-12">
				<div className="mx-auto max-w-2xl text-center">
					<h1 className="mb-5 text-4xl font-bold sm:text-5xl md:mb-6">{title}</h1>
					<p className="md:text-md">{description}</p>
				</div>
			</div>
		</section>
	);
}
