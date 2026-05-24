import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building, BadgeCheck, PhoneCall } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const quickPoints = [
  "Offert inom 24 timmar",
  "Kostnadsfri första bedömning",
  "Direkt kontakt med rätt team",
];

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-gray-50 pb-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-12">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-gray-500">Kontakt & offert</span>
            <h1 className="mb-4 text-4xl font-serif text-[#0f1f2e] md:text-5xl">Få kostnadsfri offert inom 24 timmar</h1>
            <p className="max-w-3xl text-lg font-light text-gray-600">
              Berätta kort vad ni behöver. Vi hjälper företag, skolor, kommuner, BRF:er och villakunder i Stockholm, Uppsala, Gävle och Västerås med rätt stängsel, grindar och områdesskydd.
            </p>
            <div className="mt-6 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              {quickPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-3 text-xs uppercase tracking-[0.16em] text-[#0f1f2e]/75"
                >
                  <BadgeCheck className="h-4 w-4 text-[#1a3349]/55" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-4">
              <div className="border border-gray-200 bg-white p-8">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-serif text-[#0f1f2e]">
                  <Building className="h-5 w-5 text-gray-400" /> Nordic Stängsel AB
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-1 block text-xs uppercase tracking-wider text-gray-500">Besöks- & postadress</span>
                      <p className="text-sm text-gray-800">Segerstavägen 7B<br />741 43 Knivsta</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-2 block text-xs uppercase tracking-wider text-gray-500">Telefon</span>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-20 text-xs text-gray-500">Uppsala</span>
                          <a
                            href="tel:+46183461111"
                            className="text-sm font-medium text-[#0f1f2e] underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#1a3349] hover:decoration-[#1a3349]"
                          >
                            +46 18 34 61 11
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-20 text-xs text-gray-500">Stockholm</span>
                          <a
                            href="tel:+46835633666"
                            className="text-sm font-medium text-[#0f1f2e] underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#1a3349] hover:decoration-[#1a3349]"
                          >
                            +46 8 35 63 66
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-1 block text-xs uppercase tracking-wider text-gray-500">E-post</span>
                      <a
                        href="mailto:info@nordicstangsel.com"
                        className="text-sm font-medium text-[#0f1f2e] underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#1a3349] hover:decoration-[#1a3349]"
                      >
                        info@nordicstangsel.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-1 block text-xs uppercase tracking-wider text-gray-500">Öppettider</span>
                      <p className="text-sm text-gray-800">
                        <span className="inline-block w-20 text-gray-500">Mån–Fre</span> 07:00–16:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-6">
                  <p className="text-xs text-gray-500">Org.nr: 559582-1900</p>
                </div>
              </div>

              <div className="border border-[#d9e1e8] bg-[#f7fafc] p-6">
                <div className="mb-4 flex items-center gap-2 text-[#0f1f2e]">
                  <PhoneCall className="h-5 w-5 text-[#1a3349]/60" />
                  <h4 className="font-serif text-lg">Snabbaste vägen till offert</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Skicka några rader om projektet, ungefärlig plats och vilken typ av stängsel eller grind ni behöver. Då kan vi återkomma snabbare med rätt nästa steg.
                </p>
              </div>

              <div className="overflow-hidden border border-gray-200 bg-white">
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <iframe
                    title="Nordic Stängsel — Segerstavägen 7B, Knivsta"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=17.74,59.72,17.80,59.75&layer=mapnik&marker=59.7325,17.770"
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-[#0f1f2e]">Segerstavägen 7B</p>
                    <p className="text-xs text-gray-500">741 43 Knivsta</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Segerstavägen+7B,+741+43+Knivsta,+Sweden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 whitespace-nowrap border border-gray-300 px-3 py-1.5 text-xs font-medium text-[#0f1f2e] transition-colors hover:border-[#0f1f2e] hover:bg-gray-50"
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
