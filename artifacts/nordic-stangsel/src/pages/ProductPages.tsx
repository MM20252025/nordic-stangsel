import { motion } from "framer-motion";
import { ArrowRight, Factory, Home as HomeIcon, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import heroSrc from "../assets/images/hero-tjanster.png";
import project1Src from "../assets/images/project-1.png";
import project3Src from "../assets/images/project-3.png";

type PageKey = "industristangsel" | "villastangsel-grindar";

type LocalizedPageConfig = {
  heroLabel: string;
  title: string;
  intro: string;
  proofTitle: string;
  proofBody: string;
  solutionsTitle: string;
  solutions: { title: string; body: string }[];
  trustPoints: string[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  relatedLinks: { href: string; label: string; description: string }[];
  primaryCta: string;
  secondaryCta: string;
  projectsCta: string;
};

type PageConfig = {
  image: string;
  imageAlt: { sv: string; en: string };
  audienceChips: { sv: string[]; en: string[] };
  copy: {
    sv: LocalizedPageConfig;
    en: LocalizedPageConfig;
  };
};

const pageConfigs: Record<PageKey, PageConfig> = {
  "industristangsel": {
    image: project1Src,
    imageAlt: {
      sv: "Industristängsel för verksamhetsområde",
      en: "Industrial fencing for a business site",
    },
    audienceChips: {
      sv: [
        "Industriområden och fabriker",
        "Lager och logistik",
        "Tekniska anläggningar",
        "Verksamheter med krav på tydlig kontroll",
      ],
      en: [
        "Industrial areas and factories",
        "Warehouses and logistics",
        "Technical facilities",
        "Operations that need clear control",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Industristängsel",
        title: "Industristängsel för verksamheter som kräver tydlig avgränsning och driftsäker funktion",
        intro:
          "Nordic Stängsel hjälper företag, lager, logistikmiljöer och tekniska anläggningar att välja industristängsel som fungerar i vardagen, håller över tid och ger rätt nivå av kontroll kring området.",
        proofTitle: "För miljöer där stängslet är en del av driften",
        proofBody:
          "Industristängsel ska inte bara stå på plats. Det ska tåla belastning, stödja tydliga flöden, fungera med grindar och inpassering samt bidra till att verksamheten kan arbeta utan onödiga störningar.",
        solutionsTitle: "Vanliga lösningar inom industristängsel",
        solutions: [
          {
            title: "Robusta stängsellinjer för industri och lager",
            body: "För områden där slitstyrka, lång livslängd och tydlig avgränsning är viktigare än standardlösningar som bara ser rätt ut på papper.",
          },
          {
            title: "Integrerade grindar och kontrollerad inpassering",
            body: "För verksamheter där lastbilar, personal och besökare behöver egna flöden med rätt nivå av åtkomst och driftsäker passage.",
          },
          {
            title: "Lösningar anpassade till risknivå och användning",
            body: "För anläggningar där höjd, förstärkning och helhetsutformning behöver matcha platsens faktiska säkerhetsbehov.",
          },
        ],
        trustPoints: [
          "Industristängsel anpassat till verkliga driftmiljöer och rörelsemönster",
          "Tydlig helhet mellan stängsel, grindar, inpassering och områdesskydd",
          "Snabb väg till offert och rekommendation för rätt säkerhetsnivå",
        ],
        faqTitle: "Vanliga frågor om industristängsel",
        faqs: [
          {
            question: "Vilken typ av industristängsel passar bäst?",
            answer:
              "Det beror på hur området används, vilka fordon och personer som rör sig där, vilken säkerhetsnivå som krävs och hur viktig den visuella helheten är. Vi hjälper till att välja rätt lösning utifrån platsen.",
          },
          {
            question: "Kan industristängsel kombineras med grindar och inpassering?",
            answer:
              "Ja, det är ofta en viktig del av helheten. Vi arbetar gärna med lösningar där stängsellinje, grindar och accessflöden behöver fungera tillsammans från början.",
          },
          {
            question: "När är panelstängsel rätt val för industri?",
            answer:
              "Panelstängsel är ofta relevant när man vill kombinera robust funktion med ett mer ordnat och professionellt uttryck. Exakt val avgörs av platsens krav och användning.",
          },
        ],
        ctaTitle: "Behöver ni rätt industristängsel?",
        ctaBody:
          "Beskriv området, användningen och vilken typ av kontroll ni behöver så återkommer vi med rekommenderad lösning och offertunderlag.",
        relatedLinks: [
          {
            href: "/omradesskydd-foretag",
            label: "Områdesskydd för företag",
            description: "Se helhetslösningar för företag som behöver stängsel, grindar och tydlig inpassering.",
          },
          {
            href: "/grindar-stockholm",
            label: "Grindar Stockholm",
            description: "Komplettera industristängslet med rätt grindlösning och flöde för infarter.",
          },
          {
            href: "/tjanster",
            label: "Tjänster",
            description: "Se fler lösningar inom industristängsel, säkerhetsnivåer och montage.",
          },
          {
            href: "/kontakt",
            label: "Kontakt",
            description: "Gå direkt till offertförfrågan eller kontaktuppgifter.",
          },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Industrial fencing",
        title: "Industrial fencing for operations that need clear boundaries and dependable daily function",
        intro:
          "Nordic Stängsel helps companies, warehouses, logistics environments and technical facilities choose industrial fencing that works in daily use, lasts over time and creates the right level of control around the site.",
        proofTitle: "For environments where the fence is part of operations",
        proofBody:
          "Industrial fencing should do more than stand in place. It needs to handle strain, support clear movement flows, work together with gates and access control, and help the operation run without unnecessary disruption.",
        solutionsTitle: "Common industrial fencing solutions",
        solutions: [
          {
            title: "Robust fence lines for industry and warehousing",
            body: "For sites where durability, long service life and clear boundaries matter more than standard options that only look right on paper.",
          },
          {
            title: "Integrated gates and controlled access",
            body: "For operations where trucks, staff and visitors need separate flows with the right access level and dependable passage.",
          },
          {
            title: "Solutions adapted to risk level and use case",
            body: "For facilities where height, reinforcement and overall design need to match the real security demands of the site.",
          },
        ],
        trustPoints: [
          "Industrial fencing adapted to real operating environments and movement flows",
          "A clear relationship between fencing, gates, access control and perimeter protection",
          "Fast route to a quote and recommendation for the right protection level",
        ],
        faqTitle: "Common questions about industrial fencing",
        faqs: [
          {
            question: "What type of industrial fencing is the right fit?",
            answer:
              "That depends on how the site is used, what vehicles and people move through it, which security level is needed and how important the visual expression is. We help define the right solution based on the site.",
          },
          {
            question: "Can industrial fencing be combined with gates and access control?",
            answer:
              "Yes, that is often a central part of the solution. We are happy to deliver setups where the fence line, gates and access flows need to work together from the beginning.",
          },
          {
            question: "When is panel fencing the right industrial choice?",
            answer:
              "Panel fencing is often relevant when you want to combine robust function with a more ordered and professional expression. The exact choice depends on the needs and use of the site.",
          },
        ],
        ctaTitle: "Do you need the right industrial fencing?",
        ctaBody:
          "Describe the site, how it is used and what level of control you need, and we will return with a recommended solution and quote basis.",
        relatedLinks: [
          {
            href: "/omradesskydd-foretag",
            label: "Perimeter Protection for Companies",
            description: "See complete business solutions that combine fencing, gates and clear access control.",
          },
          {
            href: "/grindar-stockholm",
            label: "Gates Stockholm",
            description: "Complement the industrial fence with the right gate solution and entrance flow.",
          },
          {
            href: "/tjanster",
            label: "Services",
            description: "See more solutions across industrial fencing, security levels and installation scope.",
          },
          {
            href: "/kontakt",
            label: "Contact",
            description: "Go straight to the quote request or contact details.",
          },
        ],
        primaryCta: "Get a quote",
        secondaryCta: "Contact us",
        projectsCta: "See projects",
      },
    },
  },
  "villastangsel-grindar": {
    image: project3Src,
    imageAlt: {
      sv: "Villastängsel och grindar",
      en: "Villa fencing and gates",
    },
    audienceChips: {
      sv: [
        "Villor och radhus",
        "Infarter och gånggrindar",
        "Tomter med behov av tydligare avgränsning",
        "Hem där estetik och trygghet väger lika tungt",
      ],
      en: [
        "Villas and townhouses",
        "Driveways and pedestrian gates",
        "Plots that need clearer boundaries",
        "Homes where aesthetics and safety matter equally",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Villastängsel och grindar",
        title: "Villastängsel och grindar som höjer tryggheten och passar husets uttryck",
        intro:
          "Nordic Stängsel hjälper villaägare att välja stängsel och grindar som skapar en tydligare tomt, bättre passage och ett genomarbetat helhetsintryck runt bostaden.",
        proofTitle: "För hem där funktion och estetik måste fungera tillsammans",
        proofBody:
          "Ett villastängsel ska inte kännas som en nödlösning. Det ska passa huset, underlätta vardagen och bidra till trygghet utan att göra entrén tung eller stängd på fel sätt.",
        solutionsTitle: "Vanliga lösningar för villastängsel och grindar",
        solutions: [
          {
            title: "Tomtavgränsning med lätt och genomtänkt uttryck",
            body: "För bostäder där man vill markera gränser tydligare och skapa lugn utan att kompromissa med helhetskänslan runt huset.",
          },
          {
            title: "Grindar för infarter och gångpassager",
            body: "För hem där tillgänglighet, trygghet och smidig användning behöver fungera varje dag för både boende och besökare.",
          },
          {
            title: "Lösningar anpassade till stil, nivåskillnader och användning",
            body: "För fastigheter där stängsel och grind behöver utformas efter tomten och huset, inte tvärtom.",
          },
        ],
        trustPoints: [
          "Tydlig balans mellan trygghet, estetik och enkel vardagsanvändning",
          "Lösningar för både infarter, gånggrindar och tomtlinjer runt villan",
          "Snabb väg till offert och rekommendation för rätt helhetslösning",
        ],
        faqTitle: "Vanliga frågor om villastängsel och grindar",
        faqs: [
          {
            question: "Vilket stängsel passar bäst runt en villa?",
            answer:
              "Det beror på hur tomten används, hur tydlig avgränsningen behöver vara och vilket uttryck huset har. Vi hjälper till att hitta en lösning som fungerar både praktiskt och visuellt.",
          },
          {
            question: "Kan man kombinera villastängsel med gånggrind och infartsgrind?",
            answer:
              "Ja, ofta blir resultatet bäst när stängsel och grindar planeras som en helhet så att passage, proportioner och uttryck hänger ihop från början.",
          },
          {
            question: "Hur får man en lösning som känns premium och inte standardmässig?",
            answer:
              "Genom att anpassa stängseltyp, höjd, öppningar och detaljer till huset, tomten och hur ni faktiskt använder entré och utemiljö i vardagen.",
          },
        ],
        ctaTitle: "Planerar du villastängsel eller grindar?",
        ctaBody:
          "Skicka några rader om huset, tomten och vad ni vill förbättra så återkommer vi med rekommenderad lösning och offertunderlag.",
        relatedLinks: [
          {
            href: "/stangsel-stockholm",
            label: "Stängsel Stockholm",
            description: "Se lokala stängsellösningar för villafastigheter och privata projekt i Stockholm.",
          },
          {
            href: "/grindar-uppsala",
            label: "Grindar Uppsala",
            description: "Se fler grindlösningar för entréer, gångpassager och infarter i Uppsala.",
          },
          {
            href: "/projekt",
            label: "Projekt",
            description: "Utforska referensmiljöer med fokus på uttryck, trygghet och användning.",
          },
          {
            href: "/kontakt",
            label: "Kontakt",
            description: "Gå direkt till offertförfrågan eller kontaktuppgifter.",
          },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Villa fencing and gates",
        title: "Villa fencing and gates that improve safety and suit the character of the home",
        intro:
          "Nordic Stängsel helps homeowners choose fencing and gates that create clearer plot boundaries, smoother access and a more considered overall impression around the property.",
        proofTitle: "For homes where function and aesthetics need to work together",
        proofBody:
          "A villa fence should not feel like a quick fix. It should suit the house, make daily use easier and improve peace of mind without making the entrance feel heavy or closed in the wrong way.",
        solutionsTitle: "Common villa fencing and gate solutions",
        solutions: [
          {
            title: "Plot boundaries with a light and considered expression",
            body: "For homes where you want clearer boundaries and more peace of mind without compromising the overall feel around the house.",
          },
          {
            title: "Gates for driveways and pedestrian access",
            body: "For homes where accessibility, safety and smooth daily use matter for both residents and visitors.",
          },
          {
            title: "Solutions adapted to style, level changes and use",
            body: "For properties where the fencing and gate design should be shaped around the plot and the house, not the other way around.",
          },
        ],
        trustPoints: [
          "A clear balance between safety, aesthetics and easy everyday use",
          "Solutions for driveways, pedestrian gates and plot lines around the home",
          "Fast route to a quote and recommendation for the right overall solution",
        ],
        faqTitle: "Common questions about villa fencing and gates",
        faqs: [
          {
            question: "What fencing suits a villa best?",
            answer:
              "That depends on how the plot is used, how clear the boundary needs to be and what expression the house has. We help define a solution that works both practically and visually.",
          },
          {
            question: "Can villa fencing be combined with both pedestrian and driveway gates?",
            answer:
              "Yes, the result is often strongest when fencing and gates are planned as one complete concept so that access, proportions and expression work together from the start.",
          },
          {
            question: "How do you get a premium result instead of a generic one?",
            answer:
              "By adapting the fence type, height, openings and details to the house, the plot and how you actually use the entrance and outdoor spaces every day.",
          },
        ],
        ctaTitle: "Planning villa fencing or gates?",
        ctaBody:
          "Send a few lines about the house, the plot and what you want to improve, and we will return with a recommended solution and quote basis.",
        relatedLinks: [
          {
            href: "/stangsel-stockholm",
            label: "Fencing Stockholm",
            description: "See local fencing solutions for villa properties and private projects in Stockholm.",
          },
          {
            href: "/grindar-uppsala",
            label: "Gates Uppsala",
            description: "See more gate solutions for entrances, pedestrian access and driveways in Uppsala.",
          },
          {
            href: "/projekt",
            label: "Projects",
            description: "Explore reference environments focused on expression, safety and daily use.",
          },
          {
            href: "/kontakt",
            label: "Contact",
            description: "Go straight to the quote request or contact details.",
          },
        ],
        primaryCta: "Get a quote",
        secondaryCta: "Contact us",
        projectsCta: "See projects",
      },
    },
  },
};

function ProductLandingPage({ pageKey }: { pageKey: PageKey }) {
  const { language, localizePath } = useLanguage();
  const page = pageConfigs[pageKey];
  const copy = page.copy[language];
  const chips = page.audienceChips[language];
  const isSv = language === "sv";

  const audienceLabel = isSv ? "Passar särskilt för" : "Especially relevant for";
  const solutionLinkLabel = isSv ? "Diskutera lösningen" : "Discuss the solution";
  const quoteBadge = isSv ? "Offertförfrågan" : "Quote request";
  const quoteTitle = isSv ? "Beskriv projektet så återkommer vi snabbt" : "Describe the project and we will return quickly";
  const directContactLabel = isSv ? "Direktkontakt" : "Direct contact";
  const directContactBody = isSv
    ? "Vill du prata direkt med rätt kontor kan du använda någon av kontaktvägarna här bredvid."
    : "If you prefer a direct conversation with the right office, use one of the contact routes alongside the form.";
  const internalLinksTitle = isSv ? "Fler relevanta sidor" : "More relevant pages";
  const internalLinksBody = isSv
    ? "Fortsätt till relaterade tjänster, lokala sidor eller kontakt om du vill jämföra alternativ eller gå vidare direkt."
    : "Continue to related services, local pages or contact if you want to compare options or move forward directly.";

  return (
    <main className="w-full pt-20">
      <section className="relative overflow-hidden bg-[#07121c] pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="absolute inset-0">
          <img src={heroSrc} alt={copy.heroLabel} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07121c]/92 via-[#07121c]/78 to-[#07121c]/54" />
        </div>
        <div className="container relative mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.22em] text-white/55">{copy.heroLabel}</span>
            <h1 className="max-w-3xl font-serif text-[2.3rem] leading-[1.05] text-white md:text-[4rem]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
              {copy.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={localizePath("/kontakt")}>
                <Button className="h-12 rounded-none border border-[#d0a45e] bg-[#d0a45e] px-7 text-sm uppercase tracking-[0.18em] text-[#0c1824] hover:border-[#ddb875] hover:bg-[#ddb875]">
                  {copy.primaryCta}
                </Button>
              </Link>
              <Link href={localizePath("/projekt")}>
                <Button
                  variant="outline"
                  className="h-12 rounded-none border-white/35 bg-white/5 px-7 text-sm uppercase tracking-[0.18em] text-white hover:border-white/60 hover:bg-white/10 hover:text-white"
                >
                  {copy.projectsCta}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="overflow-hidden border border-white/10 bg-white/8 backdrop-blur-sm"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={page.image} alt={page.imageAlt[language]} className="h-full w-full object-cover" />
            </div>
            <div className="border-t border-white/10 px-6 py-6">
              <h2 className="font-serif text-2xl text-white">{copy.proofTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{copy.proofBody}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#e4e8ec] bg-white py-8 md:py-10">
        <div className="container mx-auto grid gap-5 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#7d8993]">{audienceLabel}</span>
            <p className="max-w-xl text-sm leading-7 text-[#51606c]">{copy.proofBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="border border-[#dbe1e6] bg-[#f7f9fb] px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-[#1a3349]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl md:mb-14">
            <span className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7d8993]">
              {pageKey === "industristangsel" ? <Factory className="h-4 w-4" /> : <HomeIcon className="h-4 w-4" />}
              {copy.heroLabel}
            </span>
            <h2 className="font-serif text-[2rem] leading-tight text-[#0f1f2e] md:text-[3.1rem]">
              {copy.solutionsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {copy.solutions.map((solution, index) => (
              <motion.article
                key={solution.title}
                className="flex h-full flex-col justify-between border border-[#e4e8ec] bg-[#f8fafb] px-6 py-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div>
                  <h3 className="font-serif text-[1.55rem] leading-tight text-[#0f1f2e]">{solution.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#51606c]">{solution.body}</p>
                </div>
                <Link href={localizePath("/kontakt")}>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#1a3349] transition-colors hover:text-[#244764]">
                    {solutionLinkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h2 className="font-serif text-[2rem] leading-tight text-[#0f1f2e] md:text-[3rem]">
              {copy.proofTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#51606c] md:text-base">{copy.proofBody}</p>
          </div>
          <div className="grid gap-4">
            {copy.trustPoints.map((point, index) => (
              <motion.div
                key={point}
                className="flex gap-4 border border-[#dbe1e6] bg-white px-5 py-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#1a3349]" />
                <p className="text-sm leading-7 text-[#394754]">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl md:mb-12">
            <h2 className="font-serif text-[2rem] leading-tight text-[#0f1f2e] md:text-[3rem]">{copy.faqTitle}</h2>
          </div>
          <div className="grid gap-4">
            {copy.faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                className="border border-[#e4e8ec] bg-[#fbfcfd] px-6 py-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="font-serif text-[1.45rem] leading-tight text-[#0f1f2e]">{faq.question}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#51606c]">{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-[#7d8993]">{quoteBadge}</span>
            <h2 className="font-serif text-[2rem] leading-tight text-[#0f1f2e] md:text-[3rem]">{quoteTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#51606c] md:text-base">{copy.ctaBody}</p>

            <div className="mt-8 border border-[#e4e8ec] bg-[#f8fafb] px-6 py-6">
              <span className="mb-3 block text-xs uppercase tracking-[0.18em] text-[#7d8993]">{directContactLabel}</span>
              <p className="text-sm leading-7 text-[#51606c]">{directContactBody}</p>
              <div className="mt-5 space-y-3 text-sm text-[#0f1f2e]">
                <a className="block transition-colors hover:text-[#244764]" href="tel:+46835633666">
                  Stockholm: +46 8 35 63 66
                </a>
                <a className="block transition-colors hover:text-[#244764]" href="tel:+46183461111">
                  Uppsala: +46 18 34 61 11
                </a>
                <a className="block transition-colors hover:text-[#244764]" href="mailto:info@nordicstangsel.com">
                  info@nordicstangsel.com
                </a>
                <p className="pt-1 text-[#51606c]">Segerstavägen 7B, 741 43 Knivsta</p>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <section className="bg-[#1a3349] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/45">{internalLinksTitle}</span>
              <h2 className="font-serif text-[2rem] leading-tight text-white md:text-[3rem]">{copy.ctaTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-white/68 md:text-base">{internalLinksBody}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={localizePath("/kontakt")}>
                  <Button className="h-12 rounded-none border border-[#d0a45e] bg-[#d0a45e] px-7 text-sm uppercase tracking-[0.18em] text-[#0c1824] hover:border-[#ddb875] hover:bg-[#ddb875]">
                    {copy.secondaryCta}
                  </Button>
                </Link>
                <Link href={localizePath("/projekt")}>
                  <Button
                    variant="outline"
                    className="h-12 rounded-none border-white/35 bg-transparent px-7 text-sm uppercase tracking-[0.18em] text-white hover:border-white/65 hover:bg-white hover:text-[#0f1f2e]"
                  >
                    {copy.projectsCta}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {copy.relatedLinks.map((link) => (
                <Link key={link.href} href={localizePath(link.href)}>
                  <motion.article
                    className="group border border-white/10 bg-white/5 px-5 py-5 transition-colors hover:bg-white/8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-xl text-white">{link.label}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/60">{link.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-white/55 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function IndustristangselPage() {
  return <ProductLandingPage pageKey="industristangsel" />;
}

export function VillastangselGrindarPage() {
  return <ProductLandingPage pageKey="villastangsel-grindar" />;
}
