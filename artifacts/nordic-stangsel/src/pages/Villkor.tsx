import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Villkor() {
  return (
    <main className="w-full pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0f1f2e] transition-colors mb-10">
            <ArrowLeft className="h-4 w-4" />
            Tillbaka
          </Link>

          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Juridisk information</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0f1f2e] mb-12">Allmänna villkor</h1>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">1. Parter</h2>
              <p>Dessa allmänna villkor gäller mellan Nordic Stängsel AB (org.nr 559582-1900), nedan kallat "Leverantören", och den kund som anlitar Leverantören för tjänster. Specifika villkor kan avtalas skriftligen i enskild offert eller avtal, och sådana villkor har i förekommande fall företräde framför dessa allmänna villkor.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">2. Offerter och beställningar</h2>
              <p>En offert är giltig under den tidsperiod som anges i offertdokumentet. Om ingen giltighetstid anges gäller offerten tills vidare, dock med förbehåll för prisförändringar. Beställning är bindande när kunden skriftligen accepterat offerten och Leverantören bekräftat beställningen.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">3. Priser och betalning</h2>
              <p>Alla priser anges exklusive moms om inte annat anges i offerten. Betalningsvillkor framgår av faktura. Vid försenad betalning förbehåller sig Leverantören rätten att debitera dröjsmålsränta i enlighet med tillämplig lagstiftning.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">4. Leverans och installation</h2>
              <p>Angivna leveranstider är vägledande. Bindande leveranstider ska framgå uttryckligen av skriftlig överenskommelse. Leverantören förbinder sig att utföra installation fackmannamässigt i enlighet med gällande branschpraxis och avtalad specifikation.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">5. Garanti och reklamation</h2>
              <p>Leverantören ansvarar för att utfört arbete håller tillfredsställande kvalitet. Garantivillkor för material följer respektive tillverkares villkor. Eventuella fel eller brister ska reklameras skriftligen inom skälig tid efter att de upptäckts eller borde ha upptäckts. Mer specifika garantivillkor kan framgå av enskilt avtal.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">6. Ansvarsbegränsning</h2>
              <p>Leverantörens ansvar är begränsat till direkta skador och får inte överstiga det belopp kunden erlagt för det aktuella uppdraget, om inte annat följer av tvingande lagstiftning. Leverantören ansvarar inte för indirekta skador, utebliven vinst eller följdskador.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">7. Tvistelösning</h2>
              <p>Tvist med anledning av detta avtal ska i första hand lösas genom förhandling mellan parterna. Om parterna inte kan enas ska tvisten avgöras av allmän domstol i Sverige. Svensk rätt ska tillämpas.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">8. Kontakt</h2>
              <p>Frågor om dessa villkor besvaras av Nordic Stängsel AB, Segerstavägen 7B, 741 43 Knivsta.<br />
              E-post: <a href="mailto:info@nordicstangsel.se" className="text-[#1a3349] underline underline-offset-2">info@nordicstangsel.se</a></p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
