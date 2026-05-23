import { motion } from "framer-motion";
import { Factory, School, Shield, ShieldCheck, Home as HomeIcon, ChevronRight, Settings2, MoveHorizontal, RefreshCcw, Wrench, Focus } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroSrc from "../assets/images/hero-tjanster.png";

const services = [
  {
    id: 1,
    title: "Industristängsel",
    icon: Factory,
    desc: "Robusta och pålitliga stängsellösningar för industriområden, fabriker och logistikcentra. Våra industristängsel är byggda för att tåla höga påfrestningar och avskräcka intrång, med möjlighet till anpassad höjd och förstärkning."
  },
  {
    id: 2,
    title: "Förskolestängsel",
    icon: School,
    desc: "Säkra, barnvänliga och hållbara stängsel för förskolor, skolor och lekplatser. Vi lägger stor vikt vid att inga skarpa kanter eller klämrisker finns, samtidigt som stängslet effektivt avgränsar området."
  },
  {
    id: 3,
    title: "Idrottsanläggningar",
    icon: Shield,
    desc: "Höga bollfångarnät och stängsel för fotbollsplaner, tennisbanor, padel och andra idrottsanläggningar. Vi erbjuder kompletta system inklusive åskädarstaket och specialgrindar."
  },
  {
    id: 4,
    title: "Säkerhetsstängsel",
    icon: ShieldCheck,
    desc: "Lösningar med högsta säkerhetsklass för skyddsobjekt, flygplatser, fängelser och andra anläggningar med förhöjd hotbild. Kan kombineras med taggtråd, rakelbladstråd och larm."
  },
  {
    id: 5,
    title: "Automatiska grindar",
    icon: ChevronRight,
    desc: "Smarta och driftsäkra grindlösningar för bekväm och säker inpassering. Våra system integreras sömlöst med passerkort, GSM-styrning eller kodlås beroende på era behov."
  },
  {
    id: 6,
    title: "Skjutgrindar",
    icon: MoveHorizontal,
    desc: "Platseffektiva skjutgrindar för breda infarter, perfekta för industrier och logistik. Finns som fribärande eller rälsgående, manuella eller fullt automatiserade."
  },
  {
    id: 7,
    title: "Svänggrindar",
    icon: RefreshCcw,
    desc: "Klassiska svänggrindar i enkel- eller dubbelutförande. Lämpliga för allt från gångtrafik till tyngre fordonstrafik, tillverkade i kraftigt stål för lång livslängd."
  },
  {
    id: 8,
    title: "Panelstängsel",
    icon: Focus,
    desc: "Eleganta och extremt vridstyva nätpaneler som ger en modern och arkitektonisk känsla. Mycket populära för offentliga miljöer, kontorsfastigheter och skolor."
  },
  {
    id: 9,
    title: "Villastängsel",
    icon: HomeIcon,
    desc: "Smidesstaket, nätstängsel och grindar anpassade för privata bostäder. Vi levererar estetiskt tilltalande lösningar som höjer fastighetens värde och trygghet."
  },
  {
    id: 10,
    title: "Kundanpassade lösningar",
    icon: Settings2,
    desc: "Har ni specifika krav på utseende, funktion eller säkerhetsnivå? Vi projekterar och tillverkar specialanpassade smides- och stängsellösningar helt enligt era ritningar."
  },
  {
    id: 11,
    title: "Reparation och underhåll",
    icon: Wrench,
    desc: "Vi erbjuder serviceavtal, reparationer efter påkörning eller skadegörelse, samt generellt underhåll av befintliga stängsel och automatik för att säkerställa långsiktig funktion."
  }
];

export default function Services() {
  return (
    <main className="w-full pt-20">
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroSrc} 
            alt="Våra tjänster - Nordic Stängsel" 
            className="w-full h-full object-cover object-center opacity-50 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4 block">Expertis</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Tjänster & Lösningar</h1>
            <p className="text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Vi levererar premiumlösningar inom områdesskydd. Från komplexa industristängsel till eleganta villagrindar — alltid med fokus på kvalitet och säkerhet.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="p-8 bg-white flex flex-col h-full group hover:bg-gray-50 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <service.icon className="h-8 w-8 text-[#0f1f2e]/40 mb-6 stroke-[1.5]" />
                <h2 className="text-xl font-serif text-[#0f1f2e] mb-3">{service.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a3349] text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 block">Kostnadsfri konsultation</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Redo att påbörja ditt projekt?</h2>
            <p className="text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
              Vi hjälper dig att hitta rätt lösning för dina specifika behov.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-white text-[#0f1f2e] hover:bg-white/90 rounded-none h-13 px-10 text-sm tracking-widest uppercase">
                Begär offert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
