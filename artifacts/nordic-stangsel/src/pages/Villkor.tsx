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
          <h1 className="text-4xl md:text-5xl font-serif text-[#0f1f2e] mb-12">Villkor</h1>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">1. Offert och projektupplägg</h2>
              <p>
                Varje uppdrag bedöms utifrån platsens förutsättningar, omfattning och önskad lösning. Detaljer om pris,
                innehåll, tidplan och genomförande lämnas i samband med offert och vidare projektgenomgång.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">2. Skriftligt underlag</h2>
              <p>
                För att skapa tydlighet dokumenteras relevanta delar av uppdraget skriftligt innan genomförande, så att
                omfattning och praktiska förutsättningar är tydliga för båda parter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">3. Förändringar i projekt</h2>
              <p>
                Om förutsättningarna förändras under projektets gång behöver lösning, omfattning eller tidplan ibland
                justeras. Sådana frågor hanteras i dialog och förtydligas innan ändringen genomförs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">4. Kontakt kring aktuella villkor</h2>
              <p>
                Om du vill ta del av aktuella villkor för ett planerat uppdrag är du välkommen att kontakta oss i samband
                med din förfrågan, så går vi igenom vad som gäller för just ditt projekt.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
