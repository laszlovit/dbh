"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./button";

// Define the validation schema using zod
const quoteFormSchema = z.object({
	fornavn: z.string().min(1, "Fornavn is required"),
	efternavn: z.string().min(1, "Efternavn is required"),
	email: z.string().email("Invalid email address"),
	telefon: z.string().min(1, "Telefonnummer is required"),
	service: z.string().min(1, "Service is required"),
	gade: z.string().min(1, "Gade is required"),
	etageEllerNummer: z.string().optional(),
	by: z.string().min(1, "By is required"),
	postnummer: z.string().min(1, "Postnummer is required"),
	besked: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function QuoteForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<QuoteFormData>({
		resolver: zodResolver(quoteFormSchema),
	});
	const [acceptTerms, setAcceptTerms] = useState(false);
	const [formSuccess, setFormSuccess] = useState(false);
	const [formSuccessMessage, setFormSuccessMessage] = useState("");
	const [formError, setFormError] = useState("");

	useEffect(() => {
		let successTimeout: NodeJS.Timeout;
		let errorTimeout: NodeJS.Timeout;

		if (formSuccess) {
			successTimeout = setTimeout(() => {
				setFormSuccess(false);
				setFormSuccessMessage("");
			}, 5000);
		}

		if (formError) {
			errorTimeout = setTimeout(() => {
				setFormError("");
			}, 5000);
		}

		return () => {
			clearTimeout(successTimeout);
			clearTimeout(errorTimeout);
		};
	}, [formSuccess, formError]);

	const onSubmit = async (data: QuoteFormData) => {
		if (!acceptTerms) {
			setFormError("You must accept the terms and conditions.");
			return;
		}

		try {
			const response = await fetch("https://www.formbackend.com/f/d6bbaf9d54863c56", {
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Server error, please try again later.");
			}

			await response.json();

			setFormSuccess(true);
			setFormSuccessMessage("Din besked er blevet sendt! Vi vil snart kontakte dig.");
			reset();
			setAcceptTerms(false);
		} catch (error) {
			console.error("Error submitting the form:", error);
			setFormError(
				"Der skete en fejl. Prøv venligst igen og kontakt os, hvis problemet fortsætter.",
			);
		}
	};

	const radioItems = [
		{ id: "vinduespolering", title: "Vinduespolering" },
		{ id: "solcellevask", title: "Solcellevask" },
		{ id: "fliserens", title: "Fliserens" },
		{ id: "algebehandling", title: "Algebehandling" },
		{ id: "rens-of-tagrender", title: "Rens of tagrender" },
		{ id: "erhvervsrengoring", title: "Erhvervsrengøring" },
	];

	return (
		<section className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/5 xl:p-12">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
				>
					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="fornavn" className="block font-semibold text-gray-900">
								Fornavn <span className="text-red-500">&#42;</span>
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="fornavn"
									{...register("fornavn")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.fornavn && (
									<span className="text-red-500">{errors.fornavn.message as string}</span>
								)}
							</div>
						</div>

						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="efternavn" className="block font-semibold text-gray-900">
								Efternavn <span className="text-red-500">&#42;</span>
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="efternavn"
									{...register("efternavn")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.efternavn && (
									<span className="text-red-500">{errors.efternavn.message as string}</span>
								)}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="email" className="block font-semibold text-gray-900">
								E-mailadresse <span className="text-red-500">&#42;</span>
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									id="email"
									{...register("email")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.email && (
									<span className="text-red-500">{errors.email.message as string}</span>
								)}
							</div>
						</div>

						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="telefon" className="block font-semibold text-gray-900">
								Telefonnummer <span className="text-red-500">&#42;</span>
							</label>
							<div className="mt-2.5">
								<input
									type="tel"
									id="telefon"
									{...register("telefon")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.telefon && (
									<span className="text-red-500">{errors.telefon.message as string}</span>
								)}
							</div>
						</div>
					</div>

					<div className="grid w-full items-center py-3 md:py-4">
						<label className="mb-3 block font-semibold text-gray-900 md:mb-4">
							Vælge en service <span className="text-red-500">&#42;</span>
						</label>
						<div className="grid gap-x-6 gap-y-3.5 md:grid-cols-2">
							{radioItems.map((radioItem, index) => (
								<div key={index} className="flex items-center space-x-2">
									<input
										defaultChecked={radioItem.id === "vinduespolering"}
										type="radio"
										id={radioItem.id}
										value={radioItem.id}
										{...register("service")}
										className="focus-visible:outline-ml-3 relative block size-4 appearance-none rounded-full border border-gray-300 bg-white text-sm/6 font-medium text-gray-900 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
									/>
									<label
										className="ml-3 block text-sm/6 font-medium text-gray-900"
										htmlFor={radioItem.id}
									>
										{radioItem.title}
									</label>
								</div>
							))}
						</div>
						{errors.service && (
							<span className="text-red-500">{errors.service.message as string}</span>
						)}
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="gade" className="block font-semibold text-gray-900">
								Gade
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="gade"
									{...register("gade")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.gade && (
									<span className="text-red-500">{errors.gade.message as string}</span>
								)}
							</div>
						</div>

						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="etageEllerNummer" className="block font-semibold text-gray-900">
								Evt. etage/nummer
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="etageEllerNummer"
									{...register("etageEllerNummer")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.etageEllerNummer && (
									<span className="text-red-500">{errors.etageEllerNummer.message as string}</span>
								)}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="by" className="block font-semibold text-gray-900">
								By
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="by"
									{...register("by")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.by && <span className="text-red-500">{errors.by.message as string}</span>}
							</div>
						</div>

						<div className="col-span-2 grid w-full items-center md:col-span-1">
							<label htmlFor="postnummer" className="block font-semibold text-gray-900">
								Postnummer
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="postnummer"
									{...register("postnummer")}
									className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
								/>
								{errors.postnummer && (
									<span className="text-red-500">{errors.postnummer.message as string}</span>
								)}
							</div>
						</div>
					</div>

					<div className="grid w-full items-center">
						<label htmlFor="besked" className="block font-semibold text-gray-900">
							Besked
						</label>
						<div className="mt-2.5">
							<textarea
								id="besked"
								{...register("besked")}
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
							/>
							{errors.besked && (
								<span className="text-red-500">{errors.besked.message as string}</span>
							)}
						</div>
					</div>

					<div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
						<input
							type="checkbox"
							id="terms"
							checked={acceptTerms}
							onChange={(e) => setAcceptTerms(e.target.checked)}
							className="size-4 rounded-md border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
						/>
						<label htmlFor="terms" className="cursor-pointer">
							Jeg accepterer{" "}
							<a className="text-primary underline" href="#">
								vilkårene
							</a>{" "}
							<span className="text-red-500">&#42;</span>
						</label>
					</div>

					<div className="mt-6">
						<Button type="submit" className="">
							Indsend
						</Button>
					</div>

					{formSuccess && <div className="mt-4 text-green-500">{formSuccessMessage}</div>}
					{formError && <div className="mt-4 text-red-500">{formError}</div>}
				</form>
			</div>
		</section>
	);
}
