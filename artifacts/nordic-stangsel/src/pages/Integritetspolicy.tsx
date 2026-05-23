import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Integritetspolicy() {
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
          <h1 className="text-4xl md:text-5xl font-serif text-[#0f1f2e] mb-12">Integritetspolicy</h1>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">1. Personuppgifter vi tar emot</h2>
              <p>
                När du kontaktar Nordic Stängsel via formulär, telefon eller e-post kan vi ta emot uppgifter som namn,
                telefonnummer, e-postadress och den information du själv väljer att lämna om ditt projekt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">2. Varför vi behandlar uppgifterna</h2>
              <p>
                Uppgifterna används för att kunna besvara din förfrågan, följa upp kontakt kring ditt projekt och ge
                relevant information om våra tjänster.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">3. Hur länge uppgifterna sparas</h2>
              <p>
                Vi sparar uppgifter så länge det behövs för att hantera din kontakt eller ditt pågående ärende och tar
                bort dem när de inte längre behövs för ändamålet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">4. Dina rättigheter</h2>
              <p>
                Du kan kontakta oss om du vill få information om vilka uppgifter vi har om dig eller om du vill begära
                rättelse eller radering av uppgifter som inte längre behöver behandlas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">5. Kontakt</h2>
              <p>
                Nordic Stängsel AB<br />
                Segerstavägen 7B, 741 43 Knivsta<br />
                info@nordicstangsel.se
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
