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
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">1. Personuppgiftsansvarig</h2>
              <p>Nordic Stängsel AB, org.nr 559582-1900, Segerstavägen 7B, 741 43 Knivsta, är personuppgiftsansvarig för behandlingen av dina personuppgifter.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">2. Vilka uppgifter samlar vi in?</h2>
              <p>Vi samlar in uppgifter som du lämnar frivilligt, exempelvis via vårt offertformulär: namn, telefonnummer, e-postadress samt projektbeskrivning. Vi samlar inte in känsliga personuppgifter.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">3. Ändamål och rättslig grund</h2>
              <p>Uppgifterna används uteslutande för att hantera din offertförfrågan och kommunicera med dig angående ditt projekt. Den rättsliga grunden är berättigat intresse (GDPR art. 6.1 f).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">4. Lagring och radering</h2>
              <p>Vi lagrar dina uppgifter så länge det är nödvändigt för att fullgöra det ändamål för vilket de samlades in. När ändamålet har upphört raderas uppgifterna. Har du frågor om lagring av dina uppgifter är du välkommen att kontakta oss.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">5. Dina rättigheter</h2>
              <p>Du har rätt att begära tillgång till, rättelse eller radering av dina personuppgifter. Kontakta oss på <a href="mailto:info@nordicstangsel.se" className="text-[#1a3349] underline underline-offset-2">info@nordicstangsel.se</a> för sådana förfrågningar.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f1f2e] mb-3">6. Kontakt</h2>
              <p>Nordic Stängsel AB<br />Segerstavägen 7B, 741 43 Knivsta<br />info@nordicstangsel.se</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
