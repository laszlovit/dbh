"use client";

import { Button } from "@/components/button";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const services = [
	{ name: "Vinduespolering", href: "/services/vinduespolering" },
	{ name: "Solcellevask", href: "/services/solcellevask" },
	{ name: "Fliserens", href: "/services/fliserens" },
	{ name: "Algebehandeling", href: "/services/algebehandeling" },
	{ name: "Rens af tagrender", href: "/services/rens-af-tagrender" },
	{ name: "Erhvervsrengøringr", href: "/services/erhvervsrengoring" },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="mt-5 px-[5%] md:mt-6">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-screen-2xl items-center justify-between rounded-lg bg-white px-5 py-2 ring-1 ring-black/5 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">De Blå Helte</span>
						<img
							alt=""
							src="/de-bla-helte-logo.png"
							fetchPriority="high"
							className="h-12 w-auto md:h-14"
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="size-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<Popover className="relative">
						<PopoverButton className="text-md flex items-center gap-x-1 font-semibold hover:text-primary lg:text-base">
							Services
							<ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-lg bg-white p-2 shadow-lg ring-1 ring-black/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
						>
							{services.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-md block rounded-lg px-3 py-2 font-semibold hover:text-primary lg:text-base"
								>
									{item.name}
								</Link>
							))}
						</PopoverPanel>
					</Popover>

					<Link href="/om-os" className="text-md font-semibold hover:text-primary lg:text-base">
						Om os
					</Link>
					<Link href="/galleri" className="text-md font-semibold hover:text-primary lg:text-base">
						Galleri
					</Link>
					<Link href="/kontakt" className="text-md font-semibold hover:text-primary lg:text-base">
						Kontakt
					</Link>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Button variant="primary" href="/fa-et-tilbud">
						Få et tilbud
					</Button>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">De Blå Helte</span>
							<img alt="" src="/de-bla-helte-logo.png" className="h-12 w-auto md:h-14" />
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										Services
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{services.map((item) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>

								<Link
									href="/om-os"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
								>
									Om os
								</Link>
								<Link
									href="/galleri"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
								>
									Galleri
								</Link>
								<Link
									href="/kontakt"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
								>
									Kontakt
								</Link>
							</div>
							<div className="py-6">
								<Button variant="primary" href="/fa-et-tilbud">
									Få et tilbud
								</Button>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
