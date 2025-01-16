import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import SubPageHeader from "@/components/sub-page-header";

export default function Page() {
	return (
		<>
			<Navbar />
			<SubPageHeader title="Handelsbetingelser" />
			<main className="mx-auto max-w-7xl px-[5%] py-8 md:py-12 lg:py-14">
				<div className="prose max-w-7xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8 lg:p-20">
					<p>
						Handelsbetingelser (“Vilkårene”) er et sæt juridiske termer udfærdiget af ejeren af en
						hjemmeside. De fremsætter de handelsbetingelser, der regulerer aktiviteterne af
						besøgende på samme hjemmeside, samt forholdet mellem besøgende på hjemmesiden og ejeren.
						Vilkårene skal udfærdiges jævnfør hjemmesidens specifikke behov samt arten af hver
						hjemmeside. Eksempelvis skal en hjemmeside, der tilbyder produkter til kunder med
						eCommerce-transaktioner have Vilkår, der er forskellige fra en hjemmeside, der kun
						oplyser. Vilkårene giver ejeren af hjemmesiden mulighed for at beskytte sig selv mod
						potentielt juridiske svagheder.
					</p>
					<p>Hvad skal du helt generelt dække i dine handelsbetingelser?</p>
					<ol>
						<li>
							Hvem der kan bruge din hjemmeside: hvad er kravene for at oprette en konto (hvis
							relevant)
						</li>
						<li>Kommercielle nøgletermer tilbudt til kunderne</li>
						<li>Fastholdelse af retten til ændring</li>
						<li>Garantier og ansvarlighed ved services og produkter</li>
						<li>Ejerskab af intellektuel ejendom, ophavsretter og logoer</li>
						<li>Retten til at suspendere eller annullere en medlemskonto</li>
						<li>Skadesløsholdelse</li>
						<li>Ansvarsbegrænsning</li>
						<li>Retten til at ændre og modificere Vilkårene</li>
						<li>Præference for lov og tvistløsning</li>
						<li>Kontaktoplysninger</li>
					</ol>

					<p>
						Du kan læse denne supportartikel (på engelsk) for at få mere information om, hvordan du
						opretter en side til handelsbetingelser
					</p>
					<p className="font-bold">
						Forklaringerne og informationen givet heri er udelukkende generelle forklaringer,
						information og uddrag. Du bør ikke anvende denne artikel som juridisk rådgivning eller
						anbefaling til, hvad du faktisk bør gøre. Vi anbefaler, at du søger juridisk rådgivning,
						som kan hjælpe dig med at forstå og oprette dine handelsbetingelser.
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
}
