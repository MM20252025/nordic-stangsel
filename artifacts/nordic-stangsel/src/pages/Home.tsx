import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  ShieldCheck,
  Factory,
  School,
  Home as HomeIcon,
  ChevronRight,
  MoveHorizontal,
  MapPin,
  MessageSquare,
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
          icon: Clock,
          title: "Offert inom 24 timmar",
          desc: "Snabb återkoppling med tydligt nästa steg för projektet.",
        },
        {
          icon: MapPin,
          title: "Lokal närvaro i Mälardalen",
          desc: "Stockholm, Uppsala och närområdet med smidig samordning på plats.",
        },
        {
          icon: ShieldCheck,
          title: "Hållbara helhetslösningar",
          desc: "Estetik, säkerhet och lång livslängd i samma leverans.",
        },
      ]
    : [
        {
          icon: Clock,
          title: "Quote within 24 hours",
          desc: "Fast follow-up with a clear next step for the project.",
        },
        {
          icon: MapPin,
          title: "Local presence in Mälardalen",
          desc: "Stockholm, Uppsala and nearby areas with smooth on-site coordination.",
        },
        {
          icon: ShieldCheck,
          title: "Durable end-to-end solutions",
          desc: "A balance of aesthetics, security and long service life.",
        },
      ];

  const featuredServices = isSv
    ? [
        { title: "Industristängsel", icon: Factory, desc: "Robusta lösningar för industriområden, logistikytor och tekniska miljöer.", linkLabel: "Läs mer" },
        { title: "Skolstängsel", icon: School, desc: "Trygga och hållbara avgränsningar för skolor, förskolor och kommunala miljöer.", linkLabel: "Läs mer" },
        { title: "Säkerhetsstängsel", icon: ShieldCheck, desc: "Högre skyddsnivå för områden där säkerhet, kontroll och tydliga gränser krävs.", linkLabel: "Läs mer" },
        { title: "Automatiska grindar", icon: ChevronRight, desc: "Smidiga grindlösningar som förbättrar flöde, kontroll och användarvänlighet.", linkLabel: "Läs mer" },
        { title: "Skjutgrindar", icon: MoveHorizontal, desc: "Platseffektiva grindar för breda infarter och anläggningar med höga krav på funktion.", linkLabel: "Läs mer" },
        { title: "Villastängsel", icon: HomeIcon, desc: "Eleganta stängsel och grindar som höjer trygghet och helhetsintryck runt fastigheten.", linkLabel: "Läs mer" },
      ]
    : [
        { title: "Industrial fencing", icon: Factory, desc: "Robust solutions for industrial sites, logistics areas and technical environments.", linkLabel: "Read more" },
        { title: "School fencing", icon: School, desc: "Safe and durable boundaries for schools, preschools and municipal environments.", linkLabel: "Read more" },
        { title: "Security fencing", icon: ShieldCheck, desc: "Higher protection levels for sites where security, control and clear boundaries are required.", linkLabel: "Read more" },
        { title: "Automatic gates", icon: ChevronRight, desc: "Efficient gate solutions that improve flow, control and everyday usability.", linkLabel: "Read more" },
        { title: "Sliding gates", icon: MoveHorizontal, desc: "Space-efficient gates for wide entrances and facilities with higher functional demands.", linkLabel: "Read more" },
        { title: "Villa fencing", icon: HomeIcon, desc: "Elegant fencing and gates that raise safety and the overall impression of the property.", linkLabel: "Read more" },
      ];

  const projectHighlights = isSv
    ? [
        {
          img: project1Src,
          alt: "Säkerhetsstängsel för industrifastighet i Knivsta",
          location: "Knivsta",
          type: "Industrifastighet",
          title: "Säkerhetsstängsel med motoriserad skjutgrind",
          desc: "Komplett installation för ett logistikcenter med fokus på säker inpassering, tydlig områdesindelning och lång livslängd.",
        },
        {
          img: project2Src,
          alt: "Panelstängsel för skola i Uppsala",
          location: "Uppsala",
          type: "Kommunal skola",
          title: "Panelstängsel med barnsäkra grindar",
          desc: "Ny inhägnad för skolmiljö där trygghet, orienterbarhet och slitstyrka behövde fungera tillsammans i vardagen.",
        },
        {
          img: project3Src,
          alt: "Bollfångarnät för idrottsanläggning i Stockholm",
          location: "Stockholm",
          type: "Idrottsanläggning",
          title: "Höga bollfångarnät och publikgrindar",
          desc: "Specialanpassad lösning för utomhusarena med tydliga entréflöden, robusta stängselpartier och premium känsla i utförandet.",
        },
      ]
    : [
        {
          img: project1Src,
          alt: "Security fencing for industrial property in Knivsta",
          location: "Knivsta",
          type: "Industrial property",
          title: "Security fencing with motorised sliding gate",
          desc: "Complete installation for a logistics centre focused on secure access, clear perimeter zoning and long service life.",
        },
        {
          img: project2Src,
          alt: "Panel fencing for school in Uppsala",
          location: "Uppsala",
          type: "Municipal school",
          title: "Panel fencing with child-safe gates",
          desc: "New enclosure for a school environment where safety, legibility and durability needed to work together every day.",
        },
        {
          img: project3Src,
          alt: "Ball-stop netting for sports facility in Stockholm",
          location: "Stockholm",
          type: "Sports facility",
          title: "Tall ball-stop netting and audience gates",
          desc: "A tailored solution for an outdoor arena with clear entry flows, robust fence lines and a premium finish.",
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

  const copy = isSv
    ? {
        heroTitle: "Premium stängsel och grindlösningar för företag, kommuner och villor i Stockholm, Uppsala och Mälardalen.",
        heroBody: "Vi projekterar och monterar hållbara lösningar med fokus på estetik, säkerhet och lång livslängd.",
        heroPrimary: "Få offert",
        heroSecondary: "Se projekt",
        expertise: "Tjänster",
        servicesTitle: "Stängsel- och grindlösningar för tydliga behov",
        servicesBody: "Vi hjälper företag, kommuner och villaägare att välja rätt lösning utifrån plats, funktion, säkerhetsnivå och uttryck.",
        allServices: "Se alla tjänster",
        references: "Projekt",
        projectsTitle: "Utvalda realiseringar med premium känsla",
        projectsBody: "Ett urval av uppdrag som visar hur vi arbetar med säkerhet, estetik och genomförande i olika typer av miljöer.",
        allProjects: "Se alla projekt",
        moreProjects: "Visa projekt",
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
        heroTitle: "Premium fencing and gate solutions for companies, municipalities and villas in Stockholm, Uppsala and the Mälardalen region.",
        heroBody: "We design and install durable solutions with a focus on aesthetics, security and long service life.",
        heroPrimary: "Get a quote",
        heroSecondary: "See projects",
        expertise: "Services",
        servicesTitle: "Fencing and gate solutions for clear practical needs",
        servicesBody: "We help companies, municipalities and villa owners choose the right solution based on site, function, security level and appearance.",
        allServices: "See all services",
        references: "Projects",
        projectsTitle: "Selected work with a premium standard",
        projectsBody: "A selection of assignments that show how we combine security, aesthetics and execution across different environments.",
        allProjects: "See all projects",
        moreProjects: "View project",
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

  const primaryButtonClass =
    "h-12 rounded-none border border-[#d0a45e] bg-[#d0a45e] px-7 text-sm font-medium uppercase tracking-[0.18em] text-[#0c1824] transition-colors duration-200 hover:border-[#ddb875] hover:bg-[#ddb875] md:h-[54px]";
  const secondaryButtonClass =
    "h-12 rounded-none border px-7 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 md:h-[54px]";
  const inlineLinkClass =
    "group inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#0f1f2e] transition-colors duration-200 hover:text-[#1a3349]";

  return (
    <main className="w-full">
      <section className="relative flex min-h-[720px] w-full items-center overflow-hidden bg-[#0c1824] pb-24 pt-28 md:min-h-[860px] md:pb-32 md:pt-36">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSrc}
            alt={isSv ? "Professionell stängselmontering" : "Professional fence installation"}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#07121c]/64"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07121c]/88 via-[#07121c]/56 to-[#07121c]/28"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07121c]/72 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <img
              src={logoTransparentSrc}
              alt="Nordic Stängsel"
              className="mb-10 h-16 w-auto brightness-125 drop-shadow-[0_8px_28px_rgba(0,0,0,0.5)] md:mb-14 md:h-24 lg:h-28"
            />
            <div className="mb-8 h-px w-14 bg-white/25 md:mb-10"></div>
            <h1 className="max-w-4xl font-serif text-[2.3rem] leading-[1.04] text-white md:text-[4rem] lg:text-[4.6rem]">
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 md:mt-8 md:text-lg md:leading-8">
              {copy.heroBody}
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-12">
              <Link href={localizePath("/kontakt")}>
                <Button className={`${primaryButtonClass} w-full sm:w-auto`}>
                  {copy.heroPrimary}
                </Button>
              </Link>
              <Link href={localizePath("/projekt")}>
                <Button
                  variant="outline"
                  className={`${secondaryButtonClass} w-full border-white/35 bg-white/6 text-white hover:border-white/70 hover:bg-white/10 hover:text-white sm:w-auto`}
                >
                  {copy.heroSecondary}
                </Button>
              </Link>
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

      <section className="border-t border-[#e4e8ec] bg-white py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-[#e4e8ec] bg-[#f7f9fb] px-5 py-5 md:px-6 md:py-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#1a3349] stroke-[1.7]" />
                  <h3 className="font-serif text-lg leading-tight text-[#0f1f2e]">{item.title}</h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[#51606c]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-3xl">
              <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#7d8993] md:mb-4">{copy.expertise}</span>
              <h2 className="max-w-3xl font-serif text-[2rem] leading-tight text-[#0f1f2e] md:text-[3.25rem]">
                {copy.servicesTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#51606c] md:text-base">
                {copy.servicesBody}
              </p>
            </div>
            <Link href={localizePath("/tjanster")}>
              <span className={inlineLinkClass}>
                {copy.allServices}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
            {featuredServices.map((service, i) => (
              <Link key={service.title} href={localizePath("/tjanster")}>
                <motion.article
                  className="group flex h-full cursor-pointer flex-col justify-between border border-[#e4e8ec] bg-white px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1a3349]/30 hover:shadow-[0_20px_50px_rgba(10,24,38,0.08)] md:px-6 md:py-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <div>
                    <service.icon className="mb-5 h-6 w-6 text-[#1a3349]/70 stroke-[1.7]" />
                    <h3 className="mb-3 font-serif text-[1.45rem] leading-tight text-[#0f1f2e] md:text-[1.6rem]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#51606c]">{service.desc}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#1a3349]">
                    <span>{service.linkLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-16 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-3xl">
              <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#7d8993] md:mb-4">{copy.references}</span>
              <h2 className="max-w-3xl font-serif text-[2rem] leading-tight text-[#0f1f2e] md:text-[3.25rem]">
                {copy.projectsTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#51606c] md:text-base">
                {copy.projectsBody}
              </p>
            </div>
            <Link href={localizePath("/projekt")}>
              <span className={inlineLinkClass}>
                {copy.allProjects}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
            {projectHighlights.map((project, i) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link href={localizePath("/projekt")}>
                  <article className="h-full overflow-hidden border border-[#dbe1e6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(10,24,38,0.09)]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#dde4ea]">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07121c]/38 via-transparent to-transparent"></div>
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="px-5 py-5 md:px-6 md:py-6">
                      <div className="mb-4 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#51606c]">
                        <span className="border border-[#dbe1e6] px-3 py-1">{project.location}</span>
                        <span className="border border-[#dbe1e6] px-3 py-1">{project.type}</span>
                      </div>
                      <h3 className="mb-3 font-serif text-[1.55rem] leading-tight text-[#0f1f2e] md:text-[1.8rem]">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-7 text-[#51606c]">{project.desc}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#1a3349]">
                        <span>{copy.moreProjects}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#1a3349] py-16 text-white md:py-24">
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

      <section className="bg-[#1a3349] py-16 md:py-24">
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

      <section className="border-t border-gray-100 bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-gray-400">{copy.testimonials}</span>
                <h2 className="mb-5 font-serif text-3xl text-[#0f1f2e] md:mb-6 md:text-4xl">{copy.referencesHeadline}</h2>
                <p className="mb-5 font-light leading-relaxed text-gray-500 md:mb-6">{copy.referencesBody1}</p>
                <p className="mb-7 font-light leading-relaxed text-gray-500 md:mb-10">{copy.referencesBody2}</p>
                <Link href={localizePath("/kontakt")}>
                  <Button className={primaryButtonClass}>{copy.requestRefs}</Button>
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
