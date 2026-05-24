import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Hammer,
  ShieldCheck,
  Factory,
  School,
  Home as HomeIcon,
  ChevronRight,
  MoveHorizontal,
  MapPin,
  MessageSquare,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { useLanguage } from "@/lib/language";
import logoTransparentSrc from "../assets/images/nordic_logo_white_transparent.png";
import heroSrc from "../assets/images/hero-tjanster.png";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";
import project3Src from "../assets/images/project-3.png";

export default function Home() {
  const { language, localizePath } = useLanguage();
  const isSv = language === "sv";

  const trustItems = isSv
    ? [
        {
          icon: Hammer,
          title: "Professionell montering",
          desc: "Erfarna montörer säkerställer hög kvalitet i varje steg.",
        },
        {
          icon: MapPin,
          title: "Stockholm, Uppsala och Mälardalen",
          desc: "Regional närvaro med snabb samordning och platsbesök.",
        },
        {
          icon: ShieldCheck,
          title: "Hållbara material",
          desc: "Svensk kvalitet byggd för nordiskt klimat.",
        },
        {
          icon: Clock,
          title: "Offert inom 24 timmar",
          desc: "Snabb återkoppling så att projektet kan gå vidare direkt.",
        },
      ]
    : [
        {
          icon: Hammer,
          title: "Professional installation",
          desc: "Experienced installers ensure high quality at every stage.",
        },
        {
          icon: MapPin,
          title: "Stockholm, Uppsala and Mälardalen",
          desc: "Regional presence with fast coordination and site visits.",
        },
        {
          icon: ShieldCheck,
          title: "Durable materials",
          desc: "Swedish quality built for the Nordic climate.",
        },
        {
          icon: Clock,
          title: "Quote within 24 hours",
          desc: "Fast follow-up so the project can move forward right away.",
        },
      ];

  const featuredServices = isSv
    ? [
        { title: "Industristängsel", icon: Factory, desc: "Robusta lösningar för industriområden och logistikcentra." },
        { title: "Skolstängsel", icon: School, desc: "Säkra och hållbara stängsel för förskolor och skolor." },
        { title: "Säkerhetsstängsel", icon: ShieldCheck, desc: "Hög säkerhetsnivå för skyddsobjekt och avgränsade miljöer." },
        { title: "Automatiska grindar", icon: ChevronRight, desc: "Smarta grindlösningar för bekväm och säker inpassering." },
        { title: "Skjutgrindar", icon: MoveHorizontal, desc: "Platseffektiva skjutgrindar för breda infarter och logistikytor." },
        { title: "Villastängsel", icon: HomeIcon, desc: "Eleganta stängsel och grindar som höjer trygghet och helhetsintryck." },
      ]
    : [
        { title: "Industrial fencing", icon: Factory, desc: "Robust solutions for industrial sites and logistics centres." },
        { title: "School fencing", icon: School, desc: "Safe and durable fencing for preschools and schools." },
        { title: "Security fencing", icon: ShieldCheck, desc: "High-security solutions for protected sites and controlled environments." },
        { title: "Automatic gates", icon: ChevronRight, desc: "Smart gate solutions for convenient and secure access." },
        { title: "Sliding gates", icon: MoveHorizontal, desc: "Space-efficient sliding gates for wide entrances and logistics areas." },
        { title: "Villa fencing", icon: HomeIcon, desc: "Elegant fencing and gates that improve safety and the overall impression." },
      ];

  const projectHighlights = isSv
    ? [
        {
          img: project1Src,
          alt: "Industristängsel",
          segment: "Industrifastighet",
          title: "Säkerhetsstängsel",
          desc: "Komplett installation av 2.4m högt säkerhetsstängsel med motoriserad skjutgrind för logistikcenter.",
        },
        {
          img: project2Src,
          alt: "Skolstängsel",
          segment: "Kommunal skola",
          title: "Panelstängsel",
          desc: "Säker inhägnad av nybyggd förskola med barnsäkra grindar och robusta nätpaneler.",
        },
        {
          img: project3Src,
          alt: "Idrottsanläggning",
          segment: "Sport & Fritid",
          title: "Bollfångarnät",
          desc: "Höga stängsel för ny utomhusarena inklusive specialanpassade publikgrindar och entréer.",
        },
      ]
    : [
        {
          img: project1Src,
          alt: "Industrial fencing",
          segment: "Industrial property",
          title: "Security fencing",
          desc: "Complete installation of 2.4 m high security fencing with a motorised sliding gate for a logistics centre.",
        },
        {
          img: project2Src,
          alt: "School fencing",
          segment: "Municipal school",
          title: "Panel fencing",
          desc: "Secure enclosure for a newly built preschool with child-safe gates and robust mesh panels.",
        },
        {
          img: project3Src,
          alt: "Sports facility",
          segment: "Sport & Leisure",
          title: "Ball-stop netting",
          desc: "Tall fencing for a new outdoor arena including custom audience gates and entrances.",
        },
      ];

  const reasons = isSv
    ? [
        { title: "Tydlig offert snabbt", desc: "Ni får en snabb första bedömning och en konkret väg vidare utan onödigt vänteläge." },
        { title: "Regional närvaro", desc: "Med utgångspunkt i Stockholm, Uppsala och Mälardalen hanterar vi projekt med bättre närvaro på plats." },
        { title: "Lång erfarenhet", desc: "Våra montörer har den kunskap som krävs för både komplexa och krävande installationer." },
        { title: "Totalentreprenad", desc: "Från första projektering till slutbesiktning tar vi ett tydligt helhetsansvar för installationen." },
      ]
    : [
        { title: "Clear quote, quickly", desc: "You get a fast initial assessment and a concrete next step without unnecessary waiting." },
        { title: "Regional presence", desc: "With a base in Stockholm, Uppsala and the Mälardalen region, we manage projects with better on-site presence." },
        { title: "Extensive experience", desc: "Our installers have the expertise required for both complex and demanding installations." },
        { title: "Turnkey delivery", desc: "From initial planning to final inspection, we take clear end-to-end responsibility for the installation." },
      ];

  const processSteps = isSv
    ? [
        { step: "01", title: "Kontakt & Offert", desc: "Ni beskriver behovet och får snabb återkoppling med rätt nästa steg." },
        { step: "02", title: "Platsbedömning", desc: "Vi går igenom mått, miljö och krav så att lösningen passar i praktiken." },
        { step: "03", title: "Montering", desc: "Effektivt och fackmannamässigt montage utfört av våra egna team." },
        { step: "04", title: "Slutbesiktning", desc: "Gemensam genomgång av leveransen för att säkerställa högsta kvalitet." },
      ]
    : [
        { step: "01", title: "Contact & Quote", desc: "You describe the need and receive fast feedback with the right next step." },
        { step: "02", title: "Site assessment", desc: "We review dimensions, environment and requirements so the solution works in practice." },
        { step: "03", title: "Installation", desc: "Efficient and professional installation carried out by our own teams." },
        { step: "04", title: "Final inspection", desc: "A joint review of the delivery to ensure the highest quality." },
      ];

  const salesPoints = isSv
    ? [
        { icon: Clock, label: "Svar inom 24 timmar" },
        { icon: BadgeCheck, label: "Kostnadsfri första bedömning" },
        { icon: PhoneCall, label: "Direkt kontakt med montörsteamet" },
      ]
    : [
        { icon: Clock, label: "Reply within 24 hours" },
        { icon: BadgeCheck, label: "Free initial assessment" },
        { icon: PhoneCall, label: "Direct contact with the installation team" },
      ];

  // User-locked hero copy. Keep unchanged unless explicitly requested.
  const copy = isSv
    ? {
        heroTitle: "Stängsel, grindar och områdesskydd för företag, skolor, fastigheter och villor",
        heroBody: "Få kostnadsfri offert inom 24 timmar. Vi projekterar och monterar hållbara lösningar i Stockholm, Uppsala och Mälardalen för industri, kommun, BRF och privat fastighet.",
        heroPrimary: "Få kostnadsfri offert inom 24 timmar",
        heroSecondary: "Se utförda projekt",
        expertise: "Expertis",
        servicesTitle: "Tjänster som snabbt leder till rätt lösning",
        servicesBody: "Vi hjälper företag, skolor, BRF:er och privatkunder att välja rätt stängsel, grindar och områdesskydd utifrån plats, säkerhetsnivå och budget.",
        allServices: "Se alla tjänster",
        references: "Referenser",
        projectsTitle: "Projekt som bygger förtroende",
        projectsBody: "Utförda uppdrag hjälper nya kunder att snabbt förstå vår nivå, vårt arbetssätt och vilken typ av miljöer vi arbetar i.",
        allProjects: "Se alla projekt",
        moreProjects: "Se fler projekt",
        advantages: "Fördelar",
        whyTitle: "Varför kunder väljer Nordic Stängsel?",
        process: "Arbetsgång",
        processTitle: "Så går det till",
        freeQuote: "Kostnadsfri offert",
        quoteTitle: "Få kostnadsfri offert inom 24 timmar",
        quoteBody: "Beskriv projektet kort. Vi återkommer snabbt med rekommendation, nästa steg och offertunderlag.",
        testimonials: "Omdömen & referenser",
        referencesHeadline: "Vi låter vårt arbete tala",
        referencesBody1: "Vi publicerar inga anonyma omdömen. I stället delar vi gärna kontaktuppgifter till tidigare uppdragsgivare inom er sektor direkt under offertdialogen, med deras samtycke.",
        referencesBody2: "Det ger er möjlighet att ställa direkta frågor om vår arbetsprocess, leveransprecision och hur samarbetet fungerade i praktiken.",
        requestRefs: "Begär referenser",
        quoteCard: "Nordic Stängsel AB — om vårt sätt att arbeta",
        quoteText: "Vi värdesätter transparens. En kund som kan tala direkt med ett referensuppdrag lär sig mer om oss på tio minuter än vad en hemsida kan förmedla.",
      }
    : {
        heroTitle: "Fencing, gates and perimeter protection for companies, schools, properties and villas",
        heroBody: "Get a free quote within 24 hours. We design and install durable solutions in Stockholm, Uppsala and the Mälardalen region for industry, municipalities, housing associations and private properties.",
        heroPrimary: "Get a free quote within 24 hours",
        heroSecondary: "See completed projects",
        expertise: "Expertise",
        servicesTitle: "Services that quickly lead to the right solution",
        servicesBody: "We help companies, schools, housing associations and private customers choose the right fencing, gates and perimeter protection based on site, security level and budget.",
        allServices: "See all services",
        references: "References",
        projectsTitle: "Projects that build trust",
        projectsBody: "Completed assignments help new customers quickly understand our level, our way of working and the kinds of environments we work in.",
        allProjects: "See all projects",
        moreProjects: "See more projects",
        advantages: "Advantages",
        whyTitle: "Why customers choose Nordic Stängsel",
        process: "Process",
        processTitle: "How it works",
        freeQuote: "Free quote",
        quoteTitle: "Get a free quote within 24 hours",
        quoteBody: "Briefly describe the project. We will come back quickly with a recommendation, the next step and a quote basis.",
        testimonials: "Reviews & references",
        referencesHeadline: "We let our work speak for itself",
        referencesBody1: "We do not publish anonymous reviews. Instead, we are happy to share contact details for previous clients in your sector during the quote dialogue, with their consent.",
        referencesBody2: "That gives you the opportunity to ask direct questions about our process, delivery precision and how the collaboration worked in practice.",
        requestRefs: "Request references",
        quoteCard: "Nordic Stängsel AB — about our way of working",
        quoteText: "We value transparency. A customer who can speak directly with a reference project learns more about us in ten minutes than a website can ever convey.",
      };

  return (
    <main className="w-full">
      <section className="relative flex h-[100vh] min-h-[600px] w-full items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img src={heroSrc} alt={isSv ? "Professionell stängselmontering" : "Professional fence installation"} className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0c1824]/35"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1824]/25 via-transparent to-[#0c1824]/55"></div>
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center md:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="flex flex-col items-center">
            <img src={logoTransparentSrc} alt="Nordic Stängsel" className="mb-10 h-20 w-auto brightness-125 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] md:mb-12 md:h-32 lg:h-36" />
            <div className="mb-6 h-[1px] w-10 bg-white/30 md:mb-8"></div>
            <h1 className="mb-5 max-w-5xl font-serif text-[1.95rem] font-medium leading-[1.15] text-white md:mb-6 md:text-[2.9rem] md:leading-[1.08] lg:text-[3.7rem] lg:leading-[1.04]">
              {copy.heroTitle}
            </h1>
            <p className="mb-8 max-w-2xl text-sm font-light leading-relaxed tracking-wide text-white/80 md:mb-10 md:text-base">
              {copy.heroBody}
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href={localizePath("/kontakt")}>
                <Button className="h-auto min-h-12 w-full rounded-none bg-white px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#0c1824] transition-all duration-200 hover:bg-white/90 sm:w-auto sm:whitespace-nowrap">
                  {copy.heroPrimary}
                </Button>
              </Link>
              <Link href={localizePath("/projekt")}>
                <Button variant="outline" className="h-12 w-full rounded-none border border-white/30 bg-transparent px-8 text-sm uppercase tracking-widest text-white transition-all duration-200 hover:border-white/70 hover:bg-white/5 sm:w-auto">
                  {copy.heroSecondary}
                </Button>
              </Link>
            </div>

            <div className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {salesPoints.map((point) => (
                <div key={point.label} className="flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/75">
                  <point.icon className="h-4 w-4 text-white/55" />
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 h-[60px] border-t border-white/10">
          <div className="container mx-auto flex h-full items-center px-4 text-[11px] uppercase tracking-[0.18em] text-white/45 md:px-6">
            <span>Uppsala: +46 18 34 61 11</span>
            <span className="mx-3 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Stockholm: +46 8 35 63 66</span>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {trustItems.map((item, i) => (
              <motion.div key={item.title} className="border border-gray-100 bg-white px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
                <item.icon className="mb-4 h-6 w-6 text-[#0f1f2e]/45 stroke-[1.5] lg:h-7 lg:w-7" />
                <h3 className="mb-2 font-serif text-[0.98rem] leading-snug text-[#0f1f2e] lg:text-base">{item.title}</h3>
                <p className="text-[0.82rem] leading-relaxed text-gray-500 lg:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="max-w-3xl">
              <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-400 md:mb-4">{copy.expertise}</span>
              <h2 className="font-serif text-3xl text-[#0f1f2e] md:text-5xl">{copy.servicesTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">{copy.servicesBody}</p>
            </div>
            <Link href={localizePath("/tjanster")}>
              <Button variant="ghost" className="group w-fit p-0 text-[#0f1f2e] hover:bg-transparent hover:text-[#1a2f45]">
                {copy.allServices}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {featuredServices.map((service, i) => (
              <Link key={service.title} href={localizePath("/tjanster")}>
                <motion.div className="group h-full cursor-pointer border border-gray-100 bg-white p-4 transition-all hover:border-[#0f1f2e] hover:bg-[#1a3349]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}>
                  <service.icon className="mb-4 h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                  <h3 className="font-serif text-lg leading-snug text-[#0f1f2e] transition-colors group-hover:text-white">{service.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-3 lg:gap-6">
            {featuredServices.map((service, i) => (
              <Link key={service.title} href={localizePath("/tjanster")}>
                <motion.div className="group h-full cursor-pointer border border-gray-100 bg-white p-6 transition-all hover:border-[#0f1f2e] hover:bg-[#1a3349] sm:p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
                  <service.icon className="mb-5 h-7 w-7 text-gray-400 transition-colors group-hover:text-white sm:h-8 sm:w-8" />
                  <h3 className="mb-3 font-serif text-2xl text-[#0f1f2e] transition-colors group-hover:text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-white/72">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="max-w-3xl">
              <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-400 md:mb-4">{copy.references}</span>
              <h2 className="font-serif text-3xl text-[#0f1f2e] md:text-5xl">{copy.projectsTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">{copy.projectsBody}</p>
            </div>
            <Link href={localizePath("/projekt")}>
              <Button variant="ghost" className="group w-fit p-0 text-[#0f1f2e] hover:bg-transparent hover:text-[#1a2f45]">
                {copy.allProjects}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:hidden">
            {projectHighlights.slice(0, 2).map((p, i) => (
              <motion.div key={p.title} className="group cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                <Link href={localizePath("/projekt")}>
                  <div className="relative mb-4 aspect-[3/2] overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 z-10 bg-[#1a3349]/0 transition-all duration-500 group-hover:bg-[#1a3349]/20"></div>
                    <img src={p.img} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="mb-2 block text-xs uppercase tracking-wider text-gray-500">{p.segment}</span>
                  <h3 className="mb-2 font-serif text-[1.75rem] text-[#0f1f2e]">{p.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] transition-colors">
                    {copy.moreProjects}
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-3">
            {projectHighlights.map((p, i) => (
              <motion.div key={p.title} className="group cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                <Link href={localizePath("/projekt")}>
                  <div className="relative mb-5 aspect-[3/2] overflow-hidden bg-gray-200 md:mb-6">
                    <div className="absolute inset-0 z-10 bg-[#1a3349]/0 transition-all duration-500 group-hover:bg-[#1a3349]/20"></div>
                    <img src={p.img} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="mb-2 block text-xs uppercase tracking-wider text-gray-500">{p.segment}</span>
                  <h3 className="mb-3 font-serif text-2xl text-[#0f1f2e]">{p.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] transition-colors">
                    {copy.moreProjects}
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#1a3349] py-14 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/50">{copy.advantages}</span>
              <h2 className="mb-7 font-serif text-3xl md:mb-10 md:text-5xl">{copy.whyTitle}</h2>
              <ul className="space-y-5 md:space-y-8">
                {reasons.map((item, i) => (
                  <motion.li key={item.title} className="flex gap-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-white/40" />
                    <div>
                      <h4 className="mb-2 font-serif text-lg">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-6 top-0 hidden w-[1px] bg-white/10 md:block"></div>
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/50">{copy.process}</span>
              <h2 className="mb-7 font-serif text-3xl md:mb-10 md:text-5xl">{copy.processTitle}</h2>
              <div className="space-y-6 md:space-y-12">
                {processSteps.map((item, i) => (
                  <motion.div key={item.step} className="relative flex gap-5 md:gap-8 md:pl-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                    <div className="absolute left-0 top-0 z-10 hidden h-12 w-12 items-center justify-center border border-white/20 bg-[#264056] font-serif text-lg md:flex">{item.step}</div>
                    <div className="pt-1 font-serif text-2xl text-white/30 md:hidden">{item.step}</div>
                    <div>
                      <h4 className="mb-2 font-serif text-xl">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a3349] py-14 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center md:mb-12">
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/40">{copy.freeQuote}</span>
              <h2 className="font-serif text-3xl text-white md:text-4xl">{copy.quoteTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{copy.quoteBody}</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-14 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-gray-400">{copy.testimonials}</span>
                <h2 className="mb-5 font-serif text-3xl text-[#0f1f2e] md:mb-6 md:text-4xl">{copy.referencesHeadline}</h2>
                <p className="mb-5 font-light leading-relaxed text-gray-500 md:mb-6">{copy.referencesBody1}</p>
                <p className="mb-7 font-light leading-relaxed text-gray-500 md:mb-10">{copy.referencesBody2}</p>
                <Link href={localizePath("/kontakt")}>
                  <Button className="h-12 rounded-none bg-[#1a3349] px-8 text-sm uppercase tracking-widest text-white hover:bg-[#264056]">
                    {copy.requestRefs}
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="border border-gray-100 bg-gray-50 p-6 md:p-8">
                <MessageSquare className="mb-5 h-7 w-7 text-[#0f1f2e]/30 stroke-[1.5] md:mb-6" />
                <p className="mb-5 font-serif text-lg leading-relaxed text-[#0f1f2e] md:mb-6">&quot;{copy.quoteText}&quot;</p>
                <div className="border-t border-gray-200 pt-5">
                  <p className="text-xs uppercase tracking-wider text-gray-400">{copy.quoteCard}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
