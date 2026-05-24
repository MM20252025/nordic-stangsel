import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Villkor() {
  const { language } = useLanguage();
  const isSv = language === "sv";

  const sections = isSv
    ? [
        { title: "1. Parter", body: "Dessa allmänna villkor gäller mellan Nordic Stängsel AB (org.nr 559582-1900), nedan kallat Leverantören, och den kund som anlitar Leverantören för tjänster. Specifika villkor kan avtalas skriftligen i enskild offert eller avtal, och sådana villkor har i förekommande fall företräde framför dessa allmänna villkor." },
        { title: "2. Offerter och beställningar", body: "En offert är giltig under den tidsperiod som anges i offertdokumentet. Om ingen giltighetstid anges gäller offerten tills vidare, dock med förbehåll för prisförändringar. Beställning är bindande när kunden skriftligen accepterat offerten och Leverantören bekräftat beställningen." },
        { title: "3. Priser och betalning", body: "Alla priser anges exklusive moms om inte annat anges i offerten. Betalningsvillkor framgår av faktura. Vid försenad betalning förbehåller sig Leverantören rätten att debitera dröjsmålsränta i enlighet med tillämplig lagstiftning." },
        { title: "4. Leverans och installation", body: "Angivna leveranstider är vägledande. Bindande leveranstider ska framgå uttryckligen av skriftlig överenskommelse. Leverantören förbinder sig att utföra installation fackmannamässigt i enlighet med gällande branschpraxis och avtalad specifikation." },
        { title: "5. Garanti och reklamation", body: "Leverantören ansvarar för att utfört arbete håller tillfredsställande kvalitet. Garantivillkor för material följer respektive tillverkares villkor. Eventuella fel eller brister ska reklameras skriftligen inom skälig tid efter att de upptäckts eller borde ha upptäckts. Mer specifika garantivillkor kan framgå av enskilt avtal." },
        { title: "6. Ansvarsbegränsning", body: "Leverantörens ansvar är begränsat till direkta skador och får inte överstiga det belopp kunden erlagt för det aktuella uppdraget, om inte annat följer av tvingande lagstiftning. Leverantören ansvarar inte för indirekta skador, utebliven vinst eller följdskador." },
        { title: "7. Tvistelösning", body: "Tvist med anledning av detta avtal ska i första hand lösas genom förhandling mellan parterna. Om parterna inte kan enas ska tvisten avgöras av allmän domstol i Sverige. Svensk rätt ska tillämpas." },
      ]
    : [
        { title: "1. Parties", body: "These general terms apply between Nordic Stängsel AB (company registration number 559582-1900), hereinafter referred to as the Supplier, and the customer engaging the Supplier for services. Specific terms may be agreed in writing in an individual quote or agreement, and such terms shall take precedence over these general terms where applicable." },
        { title: "2. Quotes and orders", body: "A quote is valid for the period stated in the quote document. If no validity period is stated, the quote remains valid until further notice, subject to price changes. An order becomes binding when the customer has accepted the quote in writing and the Supplier has confirmed the order." },
        { title: "3. Prices and payment", body: "All prices are stated excluding VAT unless otherwise specified in the quote. Payment terms are stated on the invoice. In the event of late payment, the Supplier reserves the right to charge late payment interest in accordance with applicable legislation." },
        { title: "4. Delivery and installation", body: "Stated delivery times are indicative. Binding delivery times must be expressly stated in a written agreement. The Supplier undertakes to perform installation professionally in accordance with current industry practice and the agreed specification." },
        { title: "5. Warranty and complaints", body: "The Supplier is responsible for ensuring that the work performed meets satisfactory quality. Warranty terms for materials follow the respective manufacturer's conditions. Any errors or deficiencies must be reported in writing within a reasonable time after they were discovered or should have been discovered. More specific warranty terms may appear in an individual agreement." },
        { title: "6. Limitation of liability", body: "The Supplier's liability is limited to direct damages and may not exceed the amount paid by the customer for the relevant assignment, unless otherwise required by mandatory law. The Supplier is not liable for indirect damages, loss of profit or consequential damages." },
        { title: "7. Dispute resolution", body: "Any dispute arising from this agreement shall primarily be resolved through negotiation between the parties. If the parties cannot agree, the dispute shall be settled by a general court in Sweden. Swedish law shall apply." },
      ];

  return (
    <main className="min-h-screen w-full bg-white pb-24 pt-32">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#0f1f2e]">
            <ArrowLeft className="h-4 w-4" />
            {isSv ? "Tillbaka" : "Back"}
          </Link>

          <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-gray-400">{isSv ? "Juridisk information" : "Legal information"}</span>
          <h1 className="mb-12 text-4xl font-serif text-[#0f1f2e] md:text-5xl">{isSv ? "Allmänna villkor" : "Terms & Conditions"}</h1>

          <div className="prose prose-gray max-w-none space-y-8 leading-relaxed text-gray-600">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-semibold text-[#0f1f2e]">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#0f1f2e]">{isSv ? "8. Kontakt" : "8. Contact"}</h2>
              <p>
                {isSv ? "Frågor om dessa villkor besvaras av Nordic Stängsel AB, Segerstavägen 7B, 741 43 Knivsta." : "Questions about these terms are answered by Nordic Stängsel AB, Segerstavägen 7B, 741 43 Knivsta."}
                <br />
                E-post: <a href="mailto:info@nordicstangsel.com" className="text-[#1a3349] underline underline-offset-2">info@nordicstangsel.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}