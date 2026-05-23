import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  MapPin,
  Clock,
  Hammer,
  ShieldCheck,
  Factory,
  School,
  Home as HomeIcon,
  ChevronRight,
  FileText,
  Handshake,
  Wrench,
  MoveHorizontal,
  RefreshCcw,
  Focus,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import logoTransparentSrc from "../assets/images/nordic_logo_white_transparent.png";
import heroSrc from "../assets/images/hero-tjanster.png";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";
import project3Src from "../assets/images/project-3.png";

const services = [
  { title: "Industristängsel", icon: Factory, desc: "Lösningar för industriområden, logistik och verksamheter med höga krav på avgränsning." },
  { title: "Skolstängsel", icon: School, desc: "Trygga avgränsningar för skolor och utbildningsmiljöer med fokus på funktion och hållbarhet." },
  { title: "Stängsel för idrottsanläggningar", icon: Shield, desc: "System för bollplaner, arenor och andra aktiva miljöer där slitstyrka är avgörande." },
  { title: "Säkerhetsstängsel", icon: ShieldCheck, desc: "Robusta lösningar för objekt som behöver tydligare perimeterskydd och kontrollerad åtkomst." },
  { title: "Automatiska grindar", icon: ChevronRight, desc: "Smidiga inpasseringslösningar anpassade för daglig drift och tydliga trafikflöden." },
  { title: "Skjutgrindar", icon: MoveHorizontal, desc: "Platseffektiva grindlösningar för bredare infarter och verksamheter med återkommande trafik." },
  { title: "Svänggrindar", icon: RefreshCcw, desc: "Klassiska grindar för gång- och fordonsflöden där enkel och tydlig funktion prioriteras." },
  { title: "Panelstängsel", icon: Focus, desc: "Ett rent och arkitektoniskt uttryck för skolor, företag, bostadsrättsföreningar och offentliga miljöer." },
  { title: "Villastängsel", icon: HomeIcon, desc: "Genomarbetade lösningar för privata fastigheter där både trygghet och helhetsintryck är viktiga." },
  { title: "Kundanpassade lösningar", icon: Settings2, desc: "Anpassning efter plats, användning, nivåskillnader och krav på utseende eller funktion." },
  { title: "Reparationer och underhåll", icon: Wrench, desc: "Åtgärder för befintliga stängsel och grindar när anläggningen behöver ses över eller återställas." },
];

const projectHighlights = [
  {
    img: project1Src,
    alt: "Projekt för industriomrade",
    segment: "Företag & industri",
    title: "Områdesskydd för verksamhetsmiljöer",
    desc: "Planering och montering av stängsel, passager och grindlösningar för anläggningar där drift, flöde och tydlig avgränsning behöver fungera tillsammans.",
  },
  {
    img: project2Src,
    alt: "Projekt for skolmiljo",
    segment: "Skolor & kommuner",
    title: "Trygga lösningar för skolmiljöer",
    desc: "Projekt där säkerhet, orienterbarhet och ett lugnt uttryck behöver balanseras med slitstyrka och enkel skötsel över tid.",
  },
  {
    img: project3Src,
    alt: "Projekt for idrottsanlaggning",
    segment: "Idrottsanläggningar",
    title: "Avgränsning för aktiva miljöer",
    desc: "Lösningar för anläggningar med höga krav på höjd, siktlinjer, publikflöden och material som klarar återkommande användning.",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSrc}
            alt="Professionell stängselmontering"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0c1824]/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1824]/25 via-transparent to-[#0c1824]/55" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img
              src={logoTransparentSrc}
              alt="Nordic Stängsel"
              className="h-24 md:h-32 lg:h-36 w-auto mb-12 brightness-125 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            />

            <div className="w-10 h-[1px] bg-white/30 mb-8" />

            <h1 className="text-[1.875rem] leading-[1.2] md:text-[2.75rem] md:leading-[1.1] lg:text-[3.5rem] lg:leading-[1.08] font-serif font-medium text-white mb-6 max-w-4xl">
              Professionella stängsel och grindlösningar för företag, skolor, idrottsanläggningar och villor
            </h1>

            <p className="text-sm md:text-base text-white/80 font-light max-w-xl mb-12 leading-relaxed">
              Moderna, säkra och hållbara lösningar med professionell montering i hela Sverige.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt">
                <Button className="bg-white text-[#0c1824] hover:bg-white/90 font-medium rounded-none h-12 px-8 text-sm tracking-widest uppercase transition-all duration-200 w-full sm:w-auto">
                  Begär offert
                </Button>
              </Link>
              <Link href="/projekt">
                <Button variant="outline" className="bg-transparent text-white border border-white/30 hover:border-white/70 hover:bg-white/5 rounded-none h-12 px-8 text-sm tracking-widest uppercase transition-all duration-200 w-full sm:w-auto">
                  Våra projekt
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60px] flex items-center border-t border-white/10 z-10">
          <div className="container mx-auto px-4 md:px-6 flex items-center gap-8 text-white/50 text-xs uppercase tracking-[0.2em]">
            <span>Uppsala: +46 18 34 61 11</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Stockholm: +46 8 35 63 66</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { icon: Hammer, title: "Professionell montering", desc: "Ett genomarbetat montage med fokus på funktion, finish och hållbarhet." },
              { icon: MapPin, title: "Hela Sverige", desc: "Projekt för företag, skolor, kommuner, idrottsanläggningar och villor i hela landet." },
              { icon: ShieldCheck, title: "Tydliga lösningsförslag", desc: "Vi hjälper till att välja rätt nivå av stängsel, grindar och kompletteringar för platsen." },
              { icon: Clock, title: "Snabb återkoppling", desc: "En strukturerad offertprocess som gör det enkelt att komma vidare i projektet." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-start px-8 py-10 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <item.icon className="h-7 w-7 text-[#0f1f2e]/50 mb-5 stroke-[1.5]" />
                <h2 className="font-serif text-base text-[#0f1f2e] mb-2 leading-snug">{item.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Tjänster</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f2e]">Lösningar för olika miljöer och behov</h2>
            </div>
            <Link href="/tjanster">
              <Button variant="ghost" className="hover:bg-transparent text-[#0f1f2e] hover:text-[#1a2f45] p-0 group">
                Se alla tjänster <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={service.title} href="/tjanster">
                <motion.div
                  className="group block p-8 border border-gray-100 hover:border-[#0f1f2e] transition-all bg-white hover:bg-[#1a3349] cursor-pointer h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <service.icon className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors mb-6 stroke-[1.5]" />
                  <h3 className="font-serif text-xl text-[#0f1f2e] group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Projekt</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f2e]">Case-orienterade exempel</h2>
            </div>
            <Link href="/projekt">
              <Button variant="ghost" className="hover:bg-transparent text-[#0f1f2e] hover:text-[#1a2f45] p-0 group">
                Se alla projekt <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectHighlights.map((project, i) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href="/projekt">
                  <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-[#1a3349]/0 group-hover:bg-[#1a3349]/20 transition-all duration-500 z-10" />
                    <img src={project.img} alt={project.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">{project.segment}</span>
                  <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] transition-colors">
                    Läs mer om vårt arbetssätt <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a3349] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 block">Därför väljer kunder oss</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-10">Ett lugnt och strukturerat genomförande</h2>

              <ul className="space-y-8">
                {[
                  { title: "Rätt lösning för rätt plats", desc: "Vi utgår från användning, flöden, nivåskillnader och önskat uttryck innan vi föreslår en lösning." },
                  { title: "Tydlig projektdialog", desc: "Beslut, omfattning och praktiska förutsättningar blir tydliga tidigt i processen." },
                  { title: "Genomtänkt montage", desc: "Vi lägger vikt vid utförande, möten, avslut och en helhet som känns färdig på riktigt." },
                  { title: "Långsiktigt perspektiv", desc: "Materialval och konstruktion bedöms utifrån drift, underhåll och hur anläggningen ska fungera över tid." },
                ].map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-white/40 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 w-[1px] bg-white/10 hidden md:block" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 block">Process</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-10">Från första kontakt till färdig leverans</h2>

              <div className="space-y-12">
                {[
                  { step: "01", title: "Kontakt & offert", desc: "Vi går igenom behov, platsens förutsättningar och vilken typ av lösning som är relevant." },
                  { step: "02", title: "Planering", desc: "Vi konkretiserar omfattning, materialval, praktiska detaljer och hur genomförandet ska läggas upp." },
                  { step: "03", title: "Montering", desc: "Installationen genomförs med fokus på struktur, finish och att projektet fungerar i vardagen direkt efter montage." },
                  { step: "04", title: "Överlämning", desc: "Vi går igenom leveransen tillsammans och säkerställer att slutresultatet motsvarar projektets krav." },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="relative flex gap-8 md:pl-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 bg-[#264056] border border-white/20 items-center justify-center font-serif text-lg z-10">
                      {item.step}
                    </div>
                    <div className="md:hidden text-2xl font-serif text-white/30 pt-1">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a3349]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 block">Kostnadsfri offert</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Begär offert</h2>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Samarbete</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f2e] mb-6">Så håller vi processen tydlig</h2>
              <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                Ett bra projekt kräver tydliga beslut, relevant dokumentation och enkel kommunikation från första förfrågan till färdig lösning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
              {[
                {
                  icon: FileText,
                  title: "Tydlig offert",
                  desc: "Vi beskriver omfattning, inriktning och relevanta delar av leveransen så att beslutsunderlaget blir lätt att förstå.",
                },
                {
                  icon: Handshake,
                  title: "Löpande dialog",
                  desc: "Vi håller kontakt kring praktiska frågor, förutsättningar på plats och nästa steg under genomförandet.",
                },
                {
                  icon: Wrench,
                  title: "Efter genomförande",
                  desc: "När projektet är färdigt går vi igenom leveransen och fångar upp eventuella frågor kring användning eller vidare åtgärder.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-10 flex flex-col items-start"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <item.icon className="h-7 w-7 text-[#0f1f2e]/40 mb-6 stroke-[1.5]" />
                  <h3 className="font-serif text-xl text-[#0f1f2e] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
