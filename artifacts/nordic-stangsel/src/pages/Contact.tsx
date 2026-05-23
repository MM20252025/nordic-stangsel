import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

export default function Contact() {
  return (
    <main className="w-full pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 block">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#0f1f2e] mb-4">Kontakta oss</h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              Vi hjälper dig med rådgivning, lösningsförslag och offert för stängsel, grindar och områdesskydd. Använd formuläret eller ring oss direkt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 border border-gray-200">
                <h2 className="text-xl font-serif text-[#0f1f2e] mb-6 flex items-center gap-2">
                  <Building className="h-5 w-5 text-gray-400" /> Nordic Stängsel AB
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Adress</span>
                      <p className="text-gray-800 text-sm">Segerstavägen 7B<br />741 43 Knivsta</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Telefon</span>
                      <p className="text-gray-800 text-sm mb-1"><span className="text-gray-500 w-20 inline-block">Uppsala:</span> +46 18 34 61 11</p>
                      <p className="text-gray-800 text-sm"><span className="text-gray-500 w-20 inline-block">Stockholm:</span> +46 8 35 63 66</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Offertförfrågan</span>
                      <p className="text-gray-800 text-sm">Använd formuläret för att beskriva projektet och bifoga bilder om det hjälper oss att förstå platsen bättre.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Org.nr: 559582-1900</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <QuoteForm />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
