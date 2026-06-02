import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building, BadgeCheck, PhoneCall, ExternalLink } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { useLanguage } from "@/lib/language";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590332861296&sk=about";
const INSTAGRAM_URL = "https://www.instagram.com/nordic_stangselab/";

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M14.3 8.6V6.8c0-.5.4-.8.9-.8h1.8V3h-2.6c-2.9 0-4.4 1.7-4.4 4.2v2.4H7v3.2h3V21h3.5v-8.2h2.7l.5-3.2h-3.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export default function Contact() {
  const { language } = useLanguage();
  const isSv = language === "sv";

  const quickPoints = isSv
    ? ["Offert inom 24 timmar", "Kostnadsfri första bedömning", "Direkt kontakt med rätt team"]
    : ["Quote within 24 hours", "Free initial assessment", "Direct contact with the right team"];

  const copy = isSv
    ? {
        badge: "Kontakt & offert",
        title: "Få kostnadsfri offert inom 24 timmar",
        body: "Berätta kort vad ni behöver. Vi hjälper företag, skolor, kommuner, BRF:er och villakunder i Stockholm, Uppsala och Mälardalen med rätt stängsel, grindar och områdesskydd.",
        address: "Besöks- & postadress",
        phone: "Telefon",
        email: "E-post",
        social: "Sociala medier",
        facebookLabel: "Nordic Stängsel på Facebook",
        instagramLabel: "Nordic Stängsel på Instagram",
        hours: "Öppettider",
        route: "Vägbeskrivning",
        fastTitle: "Snabbaste vägen till offert",
        fastBody: "Skicka några rader om projektet, ungefärlig plats och vilken typ av stängsel eller grind ni behöver. Då kan vi återkomma snabbare med rätt nästa steg.",
      }
    : {
        badge: "Contact & quote",
        title: "Get a free quote within 24 hours",
        body: "Briefly tell us what you need. We help companies, schools, municipalities, housing associations and villa owners in Stockholm, Uppsala and the Mälardalen region with the right fencing, gates and perimeter protection.",
        address: "Visiting & postal address",
        phone: "Phone",
        email: "Email",
        social: "Social media",
        facebookLabel: "Nordic Stängsel on Facebook",
        instagramLabel: "Nordic Stängsel on Instagram",
        hours: "Opening hours",
        route: "Directions",
        fastTitle: "Fastest route to a quote",
        fastBody: "Send a few lines about the project, the approximate location and what type of fencing or gate you need. That helps us return faster with the right next step.",
      };

  const socialButtonClass = "inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#315f97] text-white shadow-sm transition-colors hover:bg-[#3c70ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3349]/40";

  return (
    <main className="min-h-screen w-full bg-gray-50 pb-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-gray-500">{copy.badge}</span>
            <h1 className="mb-4 text-4xl font-serif text-[#0f1f2e] md:text-5xl">{copy.title}</h1>
            <p className="max-w-3xl text-lg font-light text-gray-600">{copy.body}</p>
            <div className="mt-6 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              {quickPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-3 text-xs uppercase tracking-[0.16em] text-[#0f1f2e]/75">
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
                      <span className="mb-1 block text-xs uppercase tracking-wider text-gray-500">{copy.address}</span>
                      <p className="text-sm text-gray-800">Vårsångsvägen 4<br />741 43 Knivsta</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-2 block text-xs uppercase tracking-wider text-gray-500">{copy.phone}</span>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-20 text-xs text-gray-500">Uppsala</span>
                          <a href="tel:+46183461111" className="text-sm font-medium text-[#0f1f2e] underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#1a3349] hover:decoration-[#1a3349]">+46 18 34 61 11</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-20 text-xs text-gray-500">Stockholm</span>
                          <a href="tel:+46835633666" className="text-sm font-medium text-[#0f1f2e] underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#1a3349] hover:decoration-[#1a3349]">+46 8 35 63 66</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-1 block text-xs uppercase tracking-wider text-gray-500">{copy.email}</span>
                      <a href="mailto:info@nordicstangsel.com" className="text-sm font-medium text-[#0f1f2e] underline decoration-gray-300 underline-offset-2 transition-colors hover:text-[#1a3349] hover:decoration-[#1a3349]">info@nordicstangsel.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-2 block text-xs uppercase tracking-wider text-gray-500">{copy.social}</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={FACEBOOK_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={copy.facebookLabel}
                          title={copy.facebookLabel}
                          className={socialButtonClass}
                          data-testid="button-contact-facebook"
                        >
                          <FacebookIcon />
                        </a>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={copy.instagramLabel}
                          title={copy.instagramLabel}
                          className={socialButtonClass}
                          data-testid="button-contact-instagram"
                        >
                          <InstagramIcon />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <span className="mb-1 block text-xs uppercase tracking-wider text-gray-500">{copy.hours}</span>
                      <p className="text-sm text-gray-800"><span className="inline-block w-20 text-gray-500">Mån–Fre</span> 07:00–16:00</p>
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
                  <h4 className="font-serif text-lg">{copy.fastTitle}</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{copy.fastBody}</p>
              </div>

              <div className="overflow-hidden border border-gray-200 bg-white">
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <iframe title="Nordic Stängsel — Vårsångsvägen 4, Knivsta" src="https://www.google.com/maps?q=V%C3%A5rs%C3%A5ngsv%C3%A4gen+4,+741+43+Knivsta&output=embed" className="h-full w-full border-0" loading="lazy" allowFullScreen />
                </div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-[#0f1f2e]">Vårsångsvägen 4</p>
                    <p className="text-xs text-gray-500">741 43 Knivsta</p>
                  </div>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=V%C3%A5rs%C3%A5ngsv%C3%A4gen+4,+741+43+Knivsta,+Sweden" target="_blank" rel="noopener noreferrer" className="shrink-0 whitespace-nowrap border border-gray-300 px-3 py-1.5 text-xs font-medium text-[#0f1f2e] transition-colors hover:border-[#0f1f2e] hover:bg-gray-50">
                    {copy.route} →
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
