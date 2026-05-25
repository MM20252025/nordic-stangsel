import { motion } from "framer-motion";
import { ArrowRight, Building2, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import heroSrc from "../assets/images/hero-tjanster.png";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";

type PageKey = "omradesskydd-foretag" | "stangsel-brf";

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
  "omradesskydd-foretag": {
    image: project1Src,
    imageAlt: {
      sv: "Områdesskydd för företag",
      en: "Perimeter protection for companies",
    },
    audienceChips: {
      sv: [
        "Industri och logistik",
        "Kontor och verksamhetsfastigheter",
        "Lager och tekniska anläggningar",
        "Företag med krav på tydlig inpassering",
      ],
      en: [
        "Industry and logistics",
        "Office and commercial properties",
        "Warehouses and technical sites",
        "Companies that need clear access control",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Områdesskydd för företag",
        title: "Områdesskydd för företag med tydlig säkerhet, funktion och ett professionellt uttryck",
        intro:
          "Nordic Stängsel hjälper företag att projektera och montera områdesskydd där säkerhet, flöden, drift och helhetsintryck måste fungera tillsammans från första dagen.",
        proofTitle: "För företag som behöver mer än bara en avgränsning",
        proofBody:
          "Ett bra områdesskydd ska inte bara markera gränsen. Det ska stödja trygg inpassering, tydliga flöden, lägre störningar i vardagen och ett seriöst första intryck för kunder, personal och besökare.",
        solutionsTitle: "Vanliga lösningar inom områdesskydd för företag",
        solutions: [
          {
            title: "Industristängsel och panelstängsel",
            body: "För verksamhetsområden och fastigheter där robust avgränsning, lång livslängd och ett ordnat uttryck behöver gå hand i hand.",
          },
          {
            title: "Grindar och kontrollerad inpassering",
            body: "För företag som behöver styra fordon, personal eller besökare med tydliga entréer och rätt nivå av kontroll.",
          },
          {
            title: "Helhetslösningar för drift och vardagsanvändning",
            body: "För platser där områdesskyddet måste fungera praktiskt varje dag och inte bara se bra ut i en offert eller ritning.",
          },
        ],
        trustPoints: [
          "Lösningar anpassade till verkliga företagsflöden och säkerhetsbehov",
          "Tydlig koppling mellan stängsel, grind, inpassering och platsens användning",
          "Snabb väg till offert och rekommendation för rätt nivå av områdesskydd",
        ],
        faqTitle: "Vanliga frågor om områdesskydd för företag",
        faqs: [
          {
            question: "Vad ingår i områdesskydd för företag?",
            answer:
              "Ofta handlar det om en kombination av stängsel, grindar, gångpassager och rätt typ av inpassering. Exakt upplägg beror på plats, risknivå och hur området används i vardagen.",
          },
          {
            question: "Hur väljer man rätt säkerhetsnivå?",
            answer:
              "Det styrs av verksamheten, flödena, tillträdesbehovet och vilka delar av området som behöver skyddas tydligast. Vi hjälper till att välja en nivå som är rimlig och funktionell i praktiken.",
          },
          {
            question: "Kan ni leverera både stängsel och grindar som en helhet?",
            answer:
              "Ja, vi arbetar gärna med helhetslösningar där områdesskydd, grindar och entréflöden behöver fungera som ett sammanhållet system.",
          },
        ],
        ctaTitle: "Behöver ditt företag rätt områdesskydd?",
        ctaBody:
          "Beskriv platsen och behoven kort så återkommer vi med rekommenderad lösning och offertunderlag för ert områdesskydd.",
        relatedLinks: [
          {
            href: "/stangsel-stockholm",
            label: "Stängsel Stockholm",
            description: "För företag och fastigheter i Stockholm som behöver lokal projektering och montage.",
          },
          {
            href: "/grindar-stockholm",
            label: "Grindar Stockholm",
            description: "Komplettera områdesskyddet med rätt inpassering och grindlösning.",
          },
          {
            href: "/tjanster",
            label: "Tjänster",
            description: "Se fler lösningstyper inom stängsel, grindar och säkerhetsnivåer.",
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
        heroLabel: "Perimeter protection for companies",
        title: "Perimeter protection for companies with clear security, function and a professional expression",
        intro:
          "Nordic Stängsel helps companies design and install perimeter protection where security, movement flows, operations and overall impression need to work together from day one.",
        proofTitle: "For companies that need more than a simple boundary",
        proofBody:
          "Good perimeter protection should do more than mark a line. It should support safe access, clear movement flows, fewer daily disruptions and a serious first impression for clients, staff and visitors.",
        solutionsTitle: "Common perimeter protection solutions for companies",
        solutions: [
          {
            title: "Industrial fencing and panel fencing",
            body: "For business sites and properties where robust boundaries, long service life and an ordered visual expression need to work together.",
          },
          {
            title: "Gates and controlled access",
            body: "For companies that need to manage vehicles, staff or visitors through clear entry points and the right level of control.",
          },
          {
            title: "End-to-end solutions for daily operations",
            body: "For sites where the perimeter solution must work in everyday use, not just look good in a quote or drawing.",
          },
        ],
        trustPoints: [
          "Solutions adapted to real business flows and security needs",
          "Clear alignment between fencing, gates, access control and how the site is used",
          "Fast route to a quote and recommendation for the right protection level",
        ],
        faqTitle: "Common questions about perimeter protection for companies",
        faqs: [
          {
            question: "What is included in perimeter protection for companies?",
            answer:
              "It often includes a combination of fencing, gates, pedestrian access points and the right type of access control. The exact setup depends on the site, risk level and everyday use.",
          },
          {
            question: "How do you choose the right security level?",
            answer:
              "That depends on the business, movement flows, access needs and which parts of the site need the clearest protection. We help define a level that is practical and proportionate.",
          },
          {
            question: "Can you deliver fencing and gates as one complete solution?",
            answer:
              "Yes, we often deliver complete solutions where perimeter protection, gates and access flows need to work as one coherent system.",
          },
        ],
        ctaTitle: "Does your company need the right perimeter protection?",
        ctaBody:
          "Briefly describe the site and needs and we will return with a recommended solution and quote basis.",
        relatedLinks: [
          {
            href: "/stangsel-stockholm",
            label: "Fencing Stockholm",
            description: "For companies and properties in Stockholm that need local planning and installation.",
          },
          {
            href: "/grindar-stockholm",
            label: "Gates Stockholm",
            description: "Complement the perimeter scope with the right access and gate solution.",
          },
          {
            href: "/tjanster",
            label: "Services",
            description: "See more solution types across fencing, gates and security levels.",
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
  "stangsel-brf": {
    image: project2Src,
    imageAlt: {
      sv: "Stängsel för BRF",
      en: "Fencing for housing associations",
    },
    audienceChips: {
      sv: [
        "Bostadsrättsföreningar",
        "Fastighetsägare och förvaltare",
        "Gårdar och entréer",
        "Boendemiljöer med krav på ordning och trygghet",
      ],
      en: [
        "Housing associations",
        "Property owners and managers",
        "Courtyards and entrances",
        "Residential environments that need order and safety",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Stängsel för BRF",
        title: "Stängsel för BRF som skapar ordning, trygghet och ett bättre helhetsintryck",
        intro:
          "Nordic Stängsel hjälper bostadsrättsföreningar att välja stängsel och grindar som fungerar i vardagen, passar fastigheten visuellt och gör boendemiljön tydligare och tryggare.",
        proofTitle: "För BRF:er där både uttryck och funktion spelar roll",
        proofBody:
          "I en BRF behöver lösningen inte bara vara hållbar. Den behöver även fungera för boende, besökare, gårdsmiljöer, entréer och gemensamma ytor utan att skapa ett tungt eller störande intryck.",
        solutionsTitle: "Vanliga stängsellösningar för BRF",
        solutions: [
          {
            title: "Panelstängsel för gårdar och avgränsningar",
            body: "För föreningar som vill skapa tydligare gränser, bättre ordning och en mer genomarbetad gårdsmiljö.",
          },
          {
            title: "Grindar för entréer och gångpassager",
            body: "För boendemiljöer där flöden, trygghet och ett välkomnande uttryck behöver balanseras på ett smart sätt.",
          },
          {
            title: "Lösningar som passar fastighetens karaktär",
            body: "För BRF:er som vill att stängsel och grindar ska förstärka helhetsintrycket i stället för att bara lösa en praktisk detalj.",
          },
        ],
        trustPoints: [
          "Tydlig balans mellan trygghet, estetik och enkel vardagsanvändning",
          "Lösningar anpassade för gårdar, entréer, passager och gemensamma ytor",
          "Snabb väg till offert och rekommendation för rätt nivå av avgränsning",
        ],
        faqTitle: "Vanliga frågor om stängsel för BRF",
        faqs: [
          {
            question: "Vilken typ av stängsel passar bäst för en BRF?",
            answer:
              "Det beror på fastighetens utformning, om ni vill markera gränser tydligare, skapa tryggare gårdsmiljöer eller styra passager bättre. Panelstängsel är ofta ett starkt val, men inte alltid det enda rätta.",
          },
          {
            question: "Kan ni hjälpa till med både stängsel och grindar?",
            answer:
              "Ja, vi hjälper gärna till med helheten när föreningen behöver kombinera avgränsning, entréer och ett lugnt, välordnat uttryck.",
          },
          {
            question: "Hur tar man fram rätt lösning för en bostadsrättsförening?",
            answer:
              "Det börjar med hur gården och entréerna används i vardagen. Vi tittar på flöden, behov av trygghet, visualitet och underhåll för att rekommendera rätt lösning.",
          },
        ],
        ctaTitle: "Behöver er BRF rätt stängsellösning?",
        ctaBody:
          "Skicka några rader om fastigheten och vad ni vill förbättra så återkommer vi med rekommendation och offertunderlag.",
        relatedLinks: [
          {
            href: "/stangsel-uppsala",
            label: "Stängsel Uppsala",
            description: "För BRF:er och fastigheter i Uppsala som vill ha lokal projektering och montage.",
          },
          {
            href: "/grindar-uppsala",
            label: "Grindar Uppsala",
            description: "Komplettera stängslet med rätt gånggrindar och entrélösningar.",
          },
          {
            href: "/tjanster",
            label: "Tjänster",
            description: "Se fler lösningar för fastigheter, gårdar och gemensamma miljöer.",
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
        heroLabel: "Fencing for housing associations",
        title: "Fencing for housing associations that improves order, safety and the overall impression",
        intro:
          "Nordic Stängsel helps housing associations choose fencing and gates that work in daily use, suit the property visually and make the residential environment clearer and safer.",
        proofTitle: "For housing associations where both expression and function matter",
        proofBody:
          "In a housing association, the solution should not only be durable. It also needs to work for residents, visitors, courtyards, entrances and shared spaces without creating a heavy or intrusive impression.",
        solutionsTitle: "Common fencing solutions for housing associations",
        solutions: [
          {
            title: "Panel fencing for courtyards and boundaries",
            body: "For associations that want clearer boundaries, better order and a more considered outdoor environment.",
          },
          {
            title: "Gates for entrances and walkways",
            body: "For residential settings where movement flows, safety and a welcoming expression need to be balanced intelligently.",
          },
          {
            title: "Solutions that fit the property's character",
            body: "For associations that want fencing and gates to strengthen the overall impression instead of simply solving a practical detail.",
          },
        ],
        trustPoints: [
          "A clear balance between safety, aesthetics and easy everyday use",
          "Solutions adapted for courtyards, entrances, passages and shared spaces",
          "Fast route to a quote and recommendation for the right level of boundary control",
        ],
        faqTitle: "Common questions about fencing for housing associations",
        faqs: [
          {
            question: "What type of fencing suits a housing association best?",
            answer:
              "That depends on the property layout, whether you want clearer boundaries, safer courtyard areas or better control of movement flows. Panel fencing is often a strong option, but not always the only right one.",
          },
          {
            question: "Can you help with both fencing and gates?",
            answer:
              "Yes, we are happy to help with the full solution when the association needs to combine boundaries, entrances and a calm, well-ordered visual expression.",
          },
          {
            question: "How do you define the right solution for a housing association?",
            answer:
              "It starts with how the courtyard and entrances are used every day. We look at movement flows, safety needs, visual character and maintenance to recommend the right approach.",
          },
        ],
        ctaTitle: "Does your housing association need the right fencing solution?",
        ctaBody:
          "Send a few lines about the property and what you want to improve, and we will return with a recommendation and quote basis.",
        relatedLinks: [
          {
            href: "/stangsel-uppsala",
            label: "Fencing Uppsala",
            description: "For housing associations and properties in Uppsala that want local planning and installation.",
          },
          {
            href: "/grindar-uppsala",
            label: "Gates Uppsala",
            description: "Complement the fencing scope with the right pedestrian gates and entrance solutions.",
          },
          {
            href: "/tjanster",
            label: "Services",
            description: "See more solutions for properties, courtyards and shared environments.",
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

function AudienceLandingPage({ pageKey }: { pageKey: PageKey }) {
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
    ? "Fortsätt till närliggande lösningar, lokala sidor eller kontakt om du vill jämföra alternativ eller gå vidare direkt."
    : "Continue to nearby solutions, local pages or contact if you want to compare options or move forward directly.";

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
              {pageKey === "omradesskydd-foretag" ? <BriefcaseBusiness className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
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

export function OmradesskyddForetagPage() {
  return <AudienceLandingPage pageKey="omradesskydd-foretag" />;
}

export function StangselBrfPage() {
  return <AudienceLandingPage pageKey="stangsel-brf" />;
}
