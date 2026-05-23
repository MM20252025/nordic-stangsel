import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building, ArrowUpRight } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const destination = encodeURIComponent("Segerstavägen 7B, 741 43 Knivsta");
const mapQuery = encodeURIComponent("Segerstavägen 7B, 741 43 Knivsta, Sweden");

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
                      <p className="text-gray-800 text-sm mb-1">
                        <span className="text-gray-500 w-20 inline-block">Uppsala:</span>
                        <a href="tel:+46183461111" className="hover:text-[#1a3349] transition-colors">
                          +46 18 34 61 11
                        </a>
                      </p>
                      <p className="text-gray-800 text-sm">
                        <span className="text-gray-500 w-20 inline-block">Stockholm:</span>
                        <a href="tel:+468356366" className="hover:text-[#1a3349] transition-colors">
                          +46 8 35 63 66
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Offertförfrågan</span>
                      <p className="text-gray-800 text-sm mb-2">
                        Använd formuläret för att beskriva projektet och bifoga bilder om det hjälper oss att förstå platsen bättre.
                      </p>
                      <a href="mailto:marcin@stangselab.se" className="text-sm text-[#1a3349] hover:text-[#264056] transition-colors">
                        marcin@stangselab.se
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Org.nr: 559582-1900</p>
                </div>
              </div>

              <div className="overflow-hidden border border-[#1a3349]/10 bg-white shadow-sm">
                <div className="aspect-[4/3] bg-[#d7dee5]">
                  <iframe
                    title="Nordic Stängsel karta"
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="bg-[#1a3349] p-6 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/45 mb-3 block">Plats</span>
                  <h2 className="text-2xl font-serif mb-3">Besök oss i Knivsta</h2>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Segerstavägen 7B, 741 43 Knivsta. Härifrån planerar vi projekt, platsbesök och nästa steg i offertprocessen.
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase text-white transition-opacity hover:opacity-80"
                  >
                    Öppna vägbeskrivning <ArrowUpRight className="h-4 w-4" />
                  </a>
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
