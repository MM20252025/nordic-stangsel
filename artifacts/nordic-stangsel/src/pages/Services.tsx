import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  School,
  Shield,
  ShieldCheck,
  Home as HomeIcon,
  ChevronRight,
  Settings2,
  MoveHorizontal,
  RefreshCcw,
  Wrench,
  Focus,
  MapPin,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import heroSrc from "../assets/images/hero-tjanster.png";

export default function Services() {
  const { language, localizePath } = useLanguage();
  const isSv = language === "sv";

  const services = isSv
    ? [
        { id: 1, title: "Industristängsel", icon: Factory, desc: "Robusta och pålitliga stängsellösningar för industriområden, fabriker och logistikcentra. Våra industristängsel är byggda för att tåla höga påfrestningar och avskräcka intrång, med möjlighet till anpassad höjd och förstärkning." },
        { id: 2, title: "Skolstängsel", icon: School, desc: "Säkra, barnvänliga och hållbara stängsel för förskolor, skolor och lekplatser. Vi lägger stor vikt vid att inga skarpa kanter eller klämrisker finns, samtidigt som stängslet effektivt avgränsar området." },
        { id: 3, title: "Idrottsanläggningar", icon: Shield, desc: "Höga bollfångarnät och stängsel för fotbollsplaner, tennisbanor, padel och andra idrottsanläggningar. Vi erbjuder kompletta system inklusive åskådarestaket och specialgrindar." },
        { id: 4, title: "Säkerhetsstängsel", icon: ShieldCheck, desc: "Lösningar med högsta säkerhetsklass för skyddsobjekt, flygplatser, fängelser och andra anläggningar med förhöjd hotbild. Kan kombineras med taggtråd, rakelbladstråd och larm." },
        { id: 5, title: "Automatiska grindar", icon: ChevronRight, desc: "Smarta och driftsäkra grindlösningar för bekväm och säker inpassering. Våra system integreras sömlöst med passerkort, GSM-styrning eller kodlås beroende på era behov." },
        { id: 6, title: "Skjutgrindar", icon: MoveHorizontal, desc: "Platseffektiva skjutgrindar för breda infarter, perfekta för industrier och logistik. Finns som fribärande eller rälsgående, manuella eller fullt automatiserade." },
        { id: 7, title: "Svänggrindar", icon: RefreshCcw, desc: "Klassiska svänggrindar i enkel- eller dubbelutförande. Lämpliga för allt från gångtrafik till tyngre fordonstrafik, tillverkade i kraftigt stål för lång livslängd." },
        { id: 8, title: "Panelstängsel", icon: Focus, desc: "Eleganta och extremt vridstyva nätpaneler som ger en modern och arkitektonisk känsla. Mycket populära för offentliga miljöer, kontorsfastigheter och skolor." },
        { id: 9, title: "Villastängsel", icon: HomeIcon, desc: "Smidesstaket, nätstängsel och grindar anpassade för privata bostäder. Vi levererar estetiskt tilltalande lösningar som höjer fastighetens värde och trygghet." },
        { id: 10, title: "Kundanpassade lösningar", icon: Settings2, desc: "Har ni specifika krav på utseende, funktion eller säkerhetsnivå? Vi projekterar och tillverkar specialanpassade smides- och stängsellösningar helt enligt era ritningar." },
        { id: 11, title: "Reparation och underhåll", icon: Wrench, desc: "Vi erbjuder serviceavtal, reparationer efter påkörning eller skadegörelse, samt generellt underhåll av befintliga stängsel och automatik för att säkerställa långsiktig funktion." },
      ]
    : [
        { id: 1, title: "Industrial fencing", icon: Factory, desc: "Robust and reliable fencing solutions for industrial areas, factories and logistics centres. Our industrial fencing is built to handle high stress and deter intrusion, with options for customised height and reinforcement." },
        { id: 2, title: "School fencing", icon: School, desc: "Safe, child-friendly and durable fencing for preschools, schools and playgrounds. We place strong emphasis on eliminating sharp edges and pinch risks while still enclosing the area effectively." },
        { id: 3, title: "Sports facilities", icon: Shield, desc: "High ball-stop netting and fencing for football fields, tennis courts, padel and other sports facilities. We deliver complete systems including spectator barriers and special gates." },
        { id: 4, title: "Security fencing", icon: ShieldCheck, desc: "High-security solutions for protected sites, airports, prisons and other facilities with elevated threat levels. Can be combined with barbed wire, razor wire and alarm systems." },
        { id: 5, title: "Automatic gates", icon: ChevronRight, desc: "Smart and reliable gate solutions for convenient and secure access. Our systems integrate smoothly with access cards, GSM control or keypad entry depending on your needs." },
        { id: 6, title: "Sliding gates", icon: MoveHorizontal, desc: "Space-efficient sliding gates for wide entrances, ideal for industry and logistics. Available as cantilever or track-mounted, manual or fully automated." },
        { id: 7, title: "Swing gates", icon: RefreshCcw, desc: "Classic swing gates in single or double configurations. Suitable for everything from pedestrians to heavy vehicle traffic, manufactured in strong steel for long service life." },
        { id: 8, title: "Panel fencing", icon: Focus, desc: "Elegant and highly rigid mesh panels that create a modern, architectural expression. Very popular for public environments, office properties and schools." },
        { id: 9, title: "Villa fencing", icon: HomeIcon, desc: "Wrought iron, mesh fencing and gates adapted for private homes. We deliver attractive solutions that improve both property value and peace of mind." },
        { id: 10, title: "Custom solutions", icon: Settings2, desc: "Do you have specific requirements for design, function or security level? We design and manufacture custom metalwork and fencing solutions fully in line with your drawings." },
        { id: 11, title: "Repair and maintenance", icon: Wrench, desc: "We offer service agreements, repairs after impact or vandalism, and general maintenance of existing fencing and automation to ensure long-term performance." },
      ];

  const landingPages = isSv
    ? [
        {
          href: "/stangsel-stockholm",
          title: "Stängsel Stockholm",
          description: "Säljsida för företag, BRF, kommuner och villor i Stockholm.",
        },
        {
          href: "/stangsel-uppsala",
          title: "Stängsel Uppsala",
          description: "Fokuserad undersida för stängselprojekt i Uppsala och närområdet.",
        },
        {
          href: "/grindar-stockholm",
          title: "Grindar Stockholm",
          description: "Lokal sida för grindar, inpassering och drift i Stockholm.",
        },
        {
          href: "/grindar-uppsala",
          title: "Grindar Uppsala",
          description: "Sida för grindlösningar i Uppsala för fastigheter, BRF och företag.",
        },
      ]
    : [
        {
          href: "/stangsel-stockholm",
          title: "Fencing Stockholm",
          description: "Sales page for companies, housing associations, municipalities and villas in Stockholm.",
        },
        {
          href: "/stangsel-uppsala",
          title: "Fencing Uppsala",
          description: "Focused landing page for fencing projects in Uppsala and nearby areas.",
        },
        {
          href: "/grindar-stockholm",
          title: "Gates Stockholm",
          description: "Local page for gates, access control and operations in Stockholm.",
        },
        {
          href: "/grindar-uppsala",
          title: "Gates Uppsala",
          description: "Page for gate solutions in Uppsala for properties, housing associations and companies.",
        },
      ];

  const copy = isSv
    ? {
        badge: "Expertis",
        heroTitle: "Stängsel och grindlösningar för riktiga projekt",
        heroBody: "I Stockholm, Uppsala och Mälardalen hjälper vi företag, skolor, kommuner, BRF:er och villakunder att välja rätt lösning och få offert inom 24 timmar.",
        localPagesBadge: "Lokala sidor",
        localPagesTitle: "Snabb väg till rätt sida för ditt område",
        localPagesBody: "Vi har samlat fyra sidor för högintenta sökningar inom stängsel och grindar i Stockholm och Uppsala. De hjälper både besökare och sökmotorer att hitta rätt erbjudande snabbare.",
        localPagesCta: "Öppna sida",
        sectionTitle: "Från första behov till färdig installation",
        sectionBody: "Varje tjänst är utformad för att göra beslutet enklare: rätt nivå av områdesskydd, rätt typ av grind och ett genomförande som fungerar i vardagen efter installation.",
        ctaBadge: "Kostnadsfri konsultation",
        ctaTitle: "Få rätt lösning och kostnadsfri offert inom 24 timmar",
        ctaBody: "Vi hjälper dig att snabbt komma vidare med rätt rekommendation för platsen, användningen och säkerhetsnivån.",
        cta: "Få kostnadsfri offert inom 24 timmar",
      }
    : {
        badge: "Expertise",
        heroTitle: "Fencing and gate solutions for real projects",
        heroBody: "In Stockholm, Uppsala and the Mälardalen region, we help companies, schools, municipalities, housing associations and villa owners choose the right solution and get a quote within 24 hours.",
        localPagesBadge: "Local pages",
        localPagesTitle: "Fast route to the right page for your area",
        localPagesBody: "We have grouped four high-intent pages for fencing and gates in Stockholm and Uppsala. They help both visitors and search engines find the right offer faster.",
        localPagesCta: "Open page",
        sectionTitle: "From first need to completed installation",
        sectionBody: "Each service is designed to make the decision easier: the right level of perimeter protection, the right type of gate and a delivery that works in everyday use after installation.",
        ctaBadge: "Free consultation",
        ctaTitle: "Get the right solution and a free quote within 24 hours",
        ctaBody: "We help you move forward quickly with the right recommendation for the site, the use case and the required security level.",
        cta: "Get a free quote within 24 hours",
      };

  return (
    <main className="w-full pt-20">
      <section className="relative flex h-[48vh] min-h-[320px] w-full items-center bg-[#1a3349] md:h-[60vh] md:min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <img src={heroSrc} alt={isSv ? "Våra tjänster - Nordic Stängsel" : "Our services - Nordic Stängsel"} className="h-full w-full object-cover object-center opacity-50 mix-blend-overlay" decoding="async" fetchPriority="high" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/70">{copy.badge}</span>
            <h1 className="mb-5 font-serif text-4xl text-white md:mb-6 md:text-6xl">{copy.heroTitle}</h1>
            <p className="max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg">{copy.heroBody}</p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-[#f8fafb] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 max-w-3xl md:mb-10">
            <span className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7d8993]">
              <MapPin className="h-4 w-4" />
              {copy.localPagesBadge}
            </span>
            <h2 className="font-serif text-3xl text-[#0f1f2e] md:text-4xl">{copy.localPagesTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[#51606c] md:text-base">{copy.localPagesBody}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {landingPages.map((page, index) => (
              <Link key={page.href} href={localizePath(page.href)}>
                <motion.article
                  className="group flex h-full items-center justify-between gap-5 border border-[#e4e8ec] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1a3349]/30 hover:shadow-[0_20px_50px_rgba(10,24,38,0.08)] md:px-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div>
                    <h3 className="font-serif text-[1.45rem] leading-tight text-[#0f1f2e]">{page.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#51606c]">{page.description}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#1a3349]">
                    <span>{copy.localPagesCta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl md:mb-14">
            <h2 className="font-serif text-3xl text-[#0f1f2e] md:text-4xl">{copy.sectionTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">{copy.sectionBody}</p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-gray-100 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.id} className="group flex h-full flex-col bg-white p-6 transition-colors duration-200 hover:bg-gray-50 md:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}>
                <service.icon className="mb-5 h-7 w-7 text-[#0f1f2e]/40 stroke-[1.5] md:mb-6 md:h-8 md:w-8" />
                <h2 className="mb-3 font-serif text-[1.9rem] leading-tight text-[#0f1f2e] md:text-xl">{service.title}</h2>
                <p className="flex-grow text-sm leading-relaxed text-gray-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a3349] py-16 text-center md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/40">{copy.ctaBadge}</span>
            <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">{copy.ctaTitle}</h2>
            <p className="mx-auto mb-8 max-w-xl leading-relaxed text-white/60 md:mb-10">{copy.ctaBody}</p>
            <Link href={localizePath("/kontakt")}>
              <Button size="lg" className="h-auto min-h-12 rounded-none bg-white px-10 py-3 text-sm uppercase tracking-widest text-[#0f1f2e] hover:bg-white/90 md:h-13 md:whitespace-nowrap">
                {copy.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
