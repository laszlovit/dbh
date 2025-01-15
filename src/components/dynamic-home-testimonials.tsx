"use client";

import { ALL_TESTIMONIALS_QUERYResult } from "@/sanity/types";
import dynamic from "next/dynamic";

const HomeTestimonials = dynamic(() => import("@/components/home-testimonials"), { ssr: false });

export const DynamicHomeTestimonials = ({
	testimonials,
}: {
	testimonials: ALL_TESTIMONIALS_QUERYResult;
}) => {
	if (!Array.isArray(testimonials)) {
		console.error("Invalid testimonials data", testimonials);
		return null;
	}

	return <HomeTestimonials testimonials={testimonials} />;
};
