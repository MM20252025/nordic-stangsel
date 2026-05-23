import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
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
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 block">Hör av dig</span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#0f1f2e] mb-4">Kontakta oss</h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              Vi hjälper dig med expertis och rådgivning kring ditt områdesskydd. Fyll i formuläret eller kontakta oss direkt via telefon eller e-post.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-8 border border-gray-200">
                <h3 className="text-xl font-serif text-[#0f1f2e] mb-6 flex items-center gap-2">
                  <Building className="h-5 w-5 text-gray-400" /> Nordic Stängsel AB
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Besöks- & postadress</span>
                      <p className="text-gray-800 text-sm">Segerstavägen 7B<br />741 43 Knivsta</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Telefon</span>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-xs w-20">Uppsala</span>
                          <a
                            href="tel:+46183461111"
                            className="text-sm text-[#0f1f2e] font-medium hover:text-[#1a3349] transition-colors underline underline-offset-2 decoration-gray-300 hover:decoration-[#1a3349]"
                          >
                            +46 18 34 61 11
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-xs w-20">Stockholm</span>
                          <a
                            href="tel:+46835633666"
                            className="text-sm text-[#0f1f2e] font-medium hover:text-[#1a3349] transition-colors underline underline-offset-2 decoration-gray-300 hover:decoration-[#1a3349]"
                          >
                            +46 8 35 63 66
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">E-post</span>
                      <a
                        href="mailto:info@nordicstangsel.se"
                        className="text-sm text-[#0f1f2e] font-medium hover:text-[#1a3349] transition-colors underline underline-offset-2 decoration-gray-300 hover:decoration-[#1a3349]"
                      >
                        info@nordicstangsel.se
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Öppettider</span>
                      <p className="text-gray-800 text-sm">
                        <span className="text-gray-500 w-20 inline-block">Mån–Fre</span> 07:00–16:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Org.nr: 559582-1900</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="aspect-[4/3] w-full bg-gray-100 relative">
                  <iframe
                    title="Nordic Stängsel — Segerstavägen 7B, Knivsta"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=17.74,59.72,17.80,59.75&layer=mapnik&marker=59.7325,17.770"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#0f1f2e] uppercase tracking-wider mb-0.5">Segerstavägen 7B</p>
                    <p className="text-xs text-gray-500">741 43 Knivsta</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Segerstavägen+7B,+741+43+Knivsta,+Sweden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-medium text-[#0f1f2e] border border-gray-300 hover:border-[#0f1f2e] hover:bg-gray-50 px-3 py-1.5 transition-colors whitespace-nowrap"
                  >
                    Vägbeskrivning →
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
