import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Integritetspolicy() {
  const { language } = useLanguage();
  const isSv = language === "sv";

  const sections = isSv
    ? [
        { title: "1. Personuppgiftsansvarig", body: "Nordic Stängsel AB, org.nr 559582-1900, Segerstavägen 7B, 741 43 Knivsta, är personuppgiftsansvarig för behandlingen av dina personuppgifter." },
        { title: "2. Vilka uppgifter samlar vi in?", body: "Vi samlar in uppgifter som du lämnar frivilligt, exempelvis via vårt offertformulär: namn, telefonnummer, e-postadress samt projektbeskrivning. Vi samlar inte in känsliga personuppgifter." },
        { title: "3. Ändamål och rättslig grund", body: "Uppgifterna används uteslutande för att hantera din offertförfrågan och kommunicera med dig angående ditt projekt. Den rättsliga grunden är berättigat intresse (GDPR art. 6.1 f)." },
        { title: "4. Lagring och radering", body: "Vi lagrar dina uppgifter så länge det är nödvändigt för att fullgöra det ändamål för vilket de samlades in. När ändamålet har upphört raderas uppgifterna. Har du frågor om lagring av dina uppgifter är du välkommen att kontakta oss." },
        { title: "5. Dina rättigheter", body: "Du har rätt att begära tillgång till, rättelse eller radering av dina personuppgifter. Kontakta oss på info@nordicstangsel.com för sådana förfrågningar." },
      ]
    : [
        { title: "1. Data controller", body: "Nordic Stängsel AB, company registration number 559582-1900, Segerstavägen 7B, 741 43 Knivsta, is the data controller for the processing of your personal data." },
        { title: "2. What data do we collect?", body: "We collect information that you provide voluntarily, for example through our quote form: name, phone number, email address and project description. We do not collect sensitive personal data." },
        { title: "3. Purpose and legal basis", body: "The information is used solely to handle your quote request and communicate with you regarding your project. The legal basis is legitimate interest (GDPR Art. 6.1 f)." },
        { title: "4. Storage and deletion", body: "We store your information only as long as necessary to fulfil the purpose for which it was collected. Once the purpose has ended, the data is deleted. If you have questions about storage of your information, you are welcome to contact us." },
        { title: "5. Your rights", body: "You have the right to request access to, correction of or deletion of your personal data. Contact us at info@nordicstangsel.com for such requests." },
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
          <h1 className="mb-12 text-4xl font-serif text-[#0f1f2e] md:text-5xl">{isSv ? "Integritetspolicy" : "Privacy Policy"}</h1>

          <div className="prose prose-gray max-w-none space-y-8 leading-relaxed text-gray-600">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-semibold text-[#0f1f2e]">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#0f1f2e]">{isSv ? "6. Kontakt" : "6. Contact"}</h2>
              <p>
                Nordic Stängsel AB<br />
                Segerstavägen 7B, 741 43 Knivsta<br />
                <a href="mailto:info@nordicstangsel.com" className="text-[#1a3349] underline underline-offset-2">info@nordicstangsel.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}