import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "./link";

const variants = {
	primary: clsx(
		"inline-flex items-center justify-center px-6 py-3",
		"shadow-md rounded-md border border-transparent bg-primary font-semibold",
		"whitespace-nowrap text-white",
		"data-[disabled]:bg-primary data-[disabled]:opacity-40 data-[hover]:opacity-80",
	),
	secondary: clsx(
		"inline-flex items-center justify-center px-6 py-3",
		"shadow-md rounded-md border border-transparent bg-white font-semibold",
		"whitespace-nowrap",
		"data-[disabled]:bg-primary data-[disabled]:opacity-40 data-[hover]:opacity-80",
	),
	outline: clsx(
		"inline-flex items-center justify-center px-6 py-3",
		"shadow rounded-md border border-transparent ring-1 ring-black/10",
		"whitespace-nowrap font-semibold",
		"data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40",
	),
};

type ButtonProps = {
	variant?: keyof typeof variants;
} & (React.ComponentPropsWithoutRef<typeof Link> | (Headless.ButtonProps & { href?: undefined }));

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
	className = clsx(className, variants[variant]);

	if (typeof props.href === "undefined") {
		return <Headless.Button {...props} className={className} />;
	}

	return <Link {...props} className={className} />;
}
