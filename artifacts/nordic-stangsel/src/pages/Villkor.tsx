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
              <p>Dessa allmänna villkor gäller mellan Nordic Stängsel AB (org.nr 559582-1900), nedan kallat "Leverantören", och kunden som beställer tjänster.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">2. Offerter och beställningar</h2>
              <p>En offert är giltig i 30 dagar från utfärdandedatum om inget annat anges. Beställning är bindande när kunden skriftligen accepterat offerten och Leverantören bekräftat beställningen.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">3. Priser och betalning</h2>
              <p>Alla priser anges exklusive moms om inte annat anges. Betalningsvillkor är 30 dagar netto från fakturadatum. Vid försenad betalning tillkommer dröjsmålsränta enligt räntelagen.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">4. Leverans och installation</h2>
              <p>Leveranstider är vägledande och inte bindande om inte uttryckligen avtalats. Leverantören ansvarar för fackmannamässig installation i enlighet med gällande branschstandard.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">5. Garanti och reklamation</h2>
              <p>Leverantören lämnar två (2) års garanti på utfört arbete. Material följer respektive tillverkares garantivillkor. Reklamation ska göras skriftligen inom skälig tid efter att felet upptäckts.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">6. Ansvarsbegränsning</h2>
              <p>Leverantörens skadeståndsansvar är begränsat till det belopp kunden betalat för det aktuella uppdraget. Leverantören ansvarar inte för indirekta skador.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">7. Tvistelösning</h2>
              <p>Tvist i anledning av detta avtal ska avgöras av svensk domstol med Uppsala tingsrätt som första instans. Svensk rätt ska tillämpas.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
