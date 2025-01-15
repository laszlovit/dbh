"use client";

import { image } from "@/sanity/lib/image";
import { ALL_TESTIMONIALS_QUERYResult } from "@/sanity/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";

type ImageProps = {
	src: string;
	alt?: string;
};

type Testimonial = {
	quote: string;
	logo: ImageProps;
	avatar: ImageProps;
	name: string;
	position: string;
	companyName: string;
};

type Props = {
	testimonials: Testimonial[];
};

export type HomeTestimonialsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export default function HomeTestimonials({
	testimonials,
}: {
	testimonials: ALL_TESTIMONIALS_QUERYResult;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="h-full p-6 md:p-8 lg:p-20">
			<div className="relative h-full overflow-hidden" ref={emblaRef}>
				<div className="embla__container relative flex h-full">
					{testimonials.map((testimonial, index) => (
						<div className="embla__slide relative h-full flex-[0_0_100%] px-4" key={index}>
							<div className="relative mx-auto flex h-full w-full flex-col">
								<div className="mb-6 md:mb-8">
									{testimonial.logo && (
										<img
											src={image(testimonial.logo).url()}
											alt={testimonial.logo.alt}
											loading="lazy"
											className="max-h-12"
										/>
									)}
								</div>
								<blockquote className="mb-8 text-xl font-bold md:mb-0 md:text-2xl">
									&quot;{testimonial.content}&quot;
								</blockquote>
								<div className="mt-auto flex flex-row justify-between">
									<div className="flex flex-col">
										<p className="font-semibold md:text-md">{testimonial.name}</p>
										<p className="md:text-md">
											<span>{testimonial.role}</span>
										</p>
									</div>
									<div className="flex items-end justify-end gap-2 md:gap-4">
										<button
											aria-label="Forrige"
											onClick={scrollPrev}
											className="embla__button embla__button--prev static left-0 right-0 top-0 flex size-12 -translate-y-0 items-center justify-center rounded-md border-none bg-lightGray"
										>
											<ArrowLeftIcon className="size-6" />
										</button>
										<button
											aria-label="Næste"
											onClick={scrollNext}
											className="embla__button embla__button--next static left-0 right-0 top-0 flex size-12 items-center justify-center rounded-md border-none bg-lightGray"
										>
											<ArrowRightIcon className="size-6" />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
