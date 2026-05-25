import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import heroSrc from "../assets/images/hero-tjanster.png";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";
import project3Src from "../assets/images/project-3.png";

type PageKey =
  | "stangsel-stockholm"
  | "stangsel-uppsala"
  | "grindar-stockholm"
  | "grindar-uppsala";

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
  relatedLabel: string;
  relatedLinks: { href: string; label: string; description: string }[];
  primaryCta: string;
  secondaryCta: string;
  projectsCta: string;
};

type PageConfig = {
  image: string;
  imageAlt: { sv: string; en: string };
  copy: {
    sv: LocalizedPageConfig;
    en: LocalizedPageConfig;
  };
};

const pageConfigs: Record<PageKey, PageConfig> = {
  "stangsel-stockholm": {
    image: project3Src,
    imageAlt: {
      sv: "Stängsellösning i Stockholm",
      en: "Fencing solution in Stockholm",
    },
    copy: {
      sv: {
        heroLabel: "Stängsel Stockholm",
        title: "Stängsel i Stockholm för företag, BRF, kommuner och villor",
        intro:
          "Nordic Stängsel projekterar och monterar stängsel i Stockholm för kunder som redan vet att de behöver en lösning som håller över tid, fungerar i drift och ser professionell ut från första intrycket.",
        proofTitle: "Lokal relevans för Stockholmsprojekt",
        proofBody:
          "Vi arbetar med miljöer där logistik, säkerhet, arkitektur och tydliga flöden behöver fungera tillsammans. Därför utformas varje stängsellösning utifrån platsens användning, inte som en standardprodukt.",
        solutionsTitle: "Vanliga stängsellösningar i Stockholm",
        solutions: [
          {
            title: "Industristängsel och områdesskydd",
            body: "För verksamhetsområden, lager, logistik och tekniska anläggningar där tydlig avgränsning och robust funktion är avgörande.",
          },
          {
            title: "Panelstängsel för fastigheter och offentliga miljöer",
            body: "För kontor, skolor, bostadsrättsföreningar och kommunala miljöer där uttryck, säkerhet och lång livslängd behöver balanseras.",
          },
          {
            title: "Villastängsel med premiumkänsla",
            body: "För privata fastigheter där trygghet, estetik och en lösning som passar arkitekturen är lika viktiga som själva avgränsningen.",
          },
        ],
        trustPoints: [
          "Projektering och montage med fokus på funktion i verklig drift",
          "Lösningar anpassade för Stockholm, infarter, fastigheter och publika miljöer",
          "Referensdialog och tydlig offertväg via kontakt eller offertförfrågan",
        ],
        faqTitle: "Vanliga frågor om stängsel i Stockholm",
        faqs: [
          {
            question: "Vad kostar stängsel i Stockholm?",
            answer:
              "Det beror främst på typ av stängsel, höjd, markförhållanden, längd, grindbehov och säkerhetsnivå. Vi tar fram offert utifrån platsens verkliga förutsättningar.",
          },
          {
            question: "Vilken typ av stängsel passar företag eller BRF bäst?",
            answer:
              "Ofta handlar det om panelstängsel eller industristängsel, men rätt val styrs av hur området används, vilket uttryck ni vill ha och vilken nivå av kontroll som behövs.",
          },
          {
            question: "Kan ni hjälpa till med både projektering och montering?",
            answer:
              "Ja, vi hjälper till från behovsbild och platsbedömning till rekommendation, offert och färdig installation.",
          },
        ],
        ctaTitle: "Behöver du stängsel i Stockholm?",
        ctaBody:
          "Beskriv projektet kort så återkommer vi med rätt nästa steg och offertunderlag för stängsel i Stockholm.",
        relatedLabel: "Relaterade sidor",
        relatedLinks: [
          { href: "/", label: "Start", description: "Tillbaka till hemsidan och vårt huvuderbjudande." },
          { href: "/tjanster", label: "Tjänster", description: "Se fler lösningstyper inom stängsel och grindar." },
          { href: "/projekt", label: "Projekt", description: "Se projektmiljöer och referensnära exempel." },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Fencing Stockholm",
        title: "Fencing in Stockholm for companies, housing associations, municipalities and villas",
        intro:
          "Nordic Stängsel designs and installs fencing in Stockholm for clients who need a solution that lasts, works in daily use and looks professional from the first impression.",
        proofTitle: "Local relevance for Stockholm projects",
        proofBody:
          "We work in environments where logistics, security, architecture and clear movement flows need to work together. Each fencing solution is therefore shaped around the site, not treated as a generic product.",
        solutionsTitle: "Common fencing solutions in Stockholm",
        solutions: [
          {
            title: "Industrial fencing and perimeter protection",
            body: "For business areas, warehouses, logistics and technical facilities where clear boundaries and robust performance matter.",
          },
          {
            title: "Panel fencing for properties and public settings",
            body: "For offices, schools, housing associations and municipal environments where appearance, safety and long service life need to be balanced.",
          },
          {
            title: "Premium villa fencing",
            body: "For private properties where safety, aesthetics and a solution that fits the architecture matter as much as the perimeter itself.",
          },
        ],
        trustPoints: [
          "Planning and installation focused on real operating conditions",
          "Solutions adapted for Stockholm properties, entrances and public environments",
          "Reference-led dialogue and a clear quote path through contact or quote request",
        ],
        faqTitle: "Common questions about fencing in Stockholm",
        faqs: [
          {
            question: "What does fencing cost in Stockholm?",
            answer:
              "That mainly depends on the fence type, height, ground conditions, length, gate requirements and security level. We prepare quotes based on the real site conditions.",
          },
          {
            question: "What type of fencing suits companies or housing associations best?",
            answer:
              "Panel fencing and industrial fencing are common choices, but the right option depends on how the site is used, the visual expression you want and the level of control required.",
          },
          {
            question: "Can you help with both planning and installation?",
            answer:
              "Yes, we support the full path from needs assessment and site review to recommendation, quote and completed installation.",
          },
        ],
        ctaTitle: "Need fencing in Stockholm?",
        ctaBody:
          "Briefly describe the project and we will return with the right next step and a quote basis for fencing in Stockholm.",
        relatedLabel: "Related pages",
        relatedLinks: [
          { href: "/", label: "Home", description: "Back to the homepage and our main offer." },
          { href: "/tjanster", label: "Services", description: "See more fencing and gate solution types." },
          { href: "/projekt", label: "Projects", description: "See project environments and reference-led examples." },
        ],
        primaryCta: "Get a quote",
        secondaryCta: "Contact us",
        projectsCta: "See projects",
      },
    },
  },
  "stangsel-uppsala": {
    image: project2Src,
    imageAlt: {
      sv: "Stängsellösning i Uppsala",
      en: "Fencing solution in Uppsala",
    },
    copy: {
      sv: {
        heroLabel: "Stängsel Uppsala",
        title: "Stängsel i Uppsala för fastigheter, skolor, företag och villor",
        intro:
          "Vi hjälper kunder i Uppsala att få rätt stängsellösning utan att kompromissa med helhetsintryck, hållbarhet eller praktisk användning efter montage.",
        proofTitle: "Byggt för miljöer där trygghet och ordning ska hålla länge",
        proofBody:
          "I Uppsala är många uppdrag kopplade till skolor, bostadsområden, verksamhetsfastigheter och offentliga miljöer. Därför behöver lösningen både tåla vardagen och kännas genomtänkt visuellt.",
        solutionsTitle: "Stängsellösningar för Uppsala",
        solutions: [
          {
            title: "Skolstängsel och avgränsningar för utbildningsmiljöer",
            body: "För skolor och förskolor där trygghet, orienterbarhet och robusthet behöver fungera tillsammans varje dag.",
          },
          {
            title: "Panelstängsel för fastigheter och BRF",
            body: "För bostadsrättsföreningar och fastigheter där ett ordnat, modernt och lättskött uttryck är viktigt.",
          },
          {
            title: "Industristängsel och säkerhetslösningar",
            body: "För företag och tekniska miljöer där drift, kontroll och lång livslängd väger tungt i beslutet.",
          },
        ],
        trustPoints: [
          "Lokal förståelse för projekt i Uppsala och närområdet",
          "Fokus på hållbar lösning, tydlig funktion och lugnt visuellt uttryck",
          "Klar väg till offert, kontakt och relevanta referensmiljöer",
        ],
        faqTitle: "Vanliga frågor om stängsel i Uppsala",
        faqs: [
          {
            question: "Vilket stängsel passar bäst för skolor eller BRF i Uppsala?",
            answer:
              "Det beror på hur området används, vilka flöden som finns och hur tydlig avgränsningen behöver vara. Panelstängsel är ofta ett starkt val, men inte alltid det enda rätta.",
          },
          {
            question: "Kan ni ta fram en lösning för både funktion och estetik?",
            answer:
              "Ja, vi väger in uttryck, användning, säkerhet och underhåll så att lösningen fungerar både praktiskt och visuellt över tid.",
          },
          {
            question: "Hur snabbt kan vi få offert på stängsel i Uppsala?",
            answer:
              "När vi har tillräckligt underlag återkommer vi snabbt med rekommendation och offertväg, ofta redan inom 24 timmar.",
          },
        ],
        ctaTitle: "Planerar du stängsel i Uppsala?",
        ctaBody:
          "Skicka en kort beskrivning av platsen och behovet så återkommer vi med rekommenderad lösning och offertunderlag.",
        relatedLabel: "Relaterade sidor",
        relatedLinks: [
          { href: "/", label: "Start", description: "Se hela Nordic Stängsels erbjudande." },
          { href: "/tjanster", label: "Tjänster", description: "Utforska fler stängsel- och grindlösningar." },
          { href: "/projekt", label: "Projekt", description: "Se miljöer som liknar ditt projekt." },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Fencing Uppsala",
        title: "Fencing in Uppsala for properties, schools, companies and villas",
        intro:
          "We help clients in Uppsala choose the right fencing solution without compromising on overall appearance, durability or practical use after installation.",
        proofTitle: "Built for environments where safety and order need to last",
        proofBody:
          "Many assignments in Uppsala are tied to schools, residential areas, commercial properties and public environments. The solution therefore needs to withstand daily use and still feel visually considered.",
        solutionsTitle: "Fencing solutions for Uppsala",
        solutions: [
          {
            title: "School fencing and boundary solutions",
            body: "For schools and preschools where safety, legibility and robustness need to work together every day.",
          },
          {
            title: "Panel fencing for properties and housing associations",
            body: "For residential communities and properties where an ordered, modern and easy-to-maintain expression matters.",
          },
          {
            title: "Industrial fencing and security solutions",
            body: "For companies and technical settings where operations, control and long service life carry real weight in the decision.",
          },
        ],
        trustPoints: [
          "Local understanding of projects in Uppsala and nearby areas",
          "Focus on durable solutions, clear function and a calm visual expression",
          "A clear route to quotes, contact and relevant reference environments",
        ],
        faqTitle: "Common questions about fencing in Uppsala",
        faqs: [
          {
            question: "What fencing works best for schools or housing associations in Uppsala?",
            answer:
              "That depends on how the site is used, what movement flows exist and how clear the boundary needs to be. Panel fencing is often a strong option, but not always the only right one.",
          },
          {
            question: "Can you recommend a solution that balances function and aesthetics?",
            answer:
              "Yes, we factor in appearance, use, safety and maintenance so the result works both practically and visually over time.",
          },
          {
            question: "How quickly can we get a quote for fencing in Uppsala?",
            answer:
              "Once we have enough background, we return quickly with a recommendation and quote path, often within 24 hours.",
          },
        ],
        ctaTitle: "Planning fencing in Uppsala?",
        ctaBody:
          "Send a short description of the site and need, and we will return with a recommended solution and quote basis.",
        relatedLabel: "Related pages",
        relatedLinks: [
          { href: "/", label: "Home", description: "See the full Nordic Stängsel offer." },
          { href: "/tjanster", label: "Services", description: "Explore more fencing and gate solutions." },
          { href: "/projekt", label: "Projects", description: "See environments that resemble your project." },
        ],
        primaryCta: "Get a quote",
        secondaryCta: "Contact us",
        projectsCta: "See projects",
      },
    },
  },
  "grindar-stockholm": {
    image: project1Src,
    imageAlt: {
      sv: "Grindlösning i Stockholm",
      en: "Gate solution in Stockholm",
    },
    copy: {
      sv: {
        heroLabel: "Grindar Stockholm",
        title: "Grindar i Stockholm för infarter, fastigheter och verksamheter",
        intro:
          "Nordic Stängsel levererar grindar i Stockholm för kunder som behöver en lösning där inpassering, driftsäkerhet och ett professionellt uttryck måste fungera tillsammans från start.",
        proofTitle: "Rätt grindlösning för hur platsen faktiskt används",
        proofBody:
          "När infarter, gångpassager och fordonsflöden är viktiga räcker det inte med en grind som bara ser bra ut. Lösningen behöver väljas utifrån rörelsemönster, säkerhetsnivå och driftkrav.",
        solutionsTitle: "Vanliga grindlösningar i Stockholm",
        solutions: [
          {
            title: "Automatiska grindar för kontrollerad inpassering",
            body: "För verksamheter, fastigheter och anläggningar där bekväm, tydlig och driftsäker passage är central.",
          },
          {
            title: "Skjutgrindar för breda infarter",
            body: "För logistik, industri och områden där platsutnyttjande och robust funktion är viktiga delar av lösningen.",
          },
          {
            title: "Gånggrindar och svänggrindar",
            body: "För kompletterande passager där flöde, utseende och säkerhet behöver fungera väl tillsammans med stängsellinjen.",
          },
        ],
        trustPoints: [
          "Grindlösningar valda efter flöde, funktion och daglig användning",
          "Tydlig koppling mellan grind, stängsel och platsens helhet",
          "Kontaktväg för offert, rådgivning och fortsatt projektdialog",
        ],
        faqTitle: "Vanliga frågor om grindar i Stockholm",
        faqs: [
          {
            question: "Vilken grind passar bäst för företag eller fastighet i Stockholm?",
            answer:
              "Det avgörs främst av hur många passager som sker, vilken typ av trafik som använder platsen och hur mycket kontroll eller automatik som behövs.",
          },
          {
            question: "Kan ni hjälpa till med både grind och tillhörande stängsel?",
            answer:
              "Ja, vi arbetar med helhetslösningar där grind, stängsellinje och inpassering behöver fungera som ett sammanhållet system.",
          },
          {
            question: "Är automatiska grindar rätt val för alla projekt?",
            answer:
              "Inte alltid. I vissa miljöer är en manuell eller enklare lösning bättre. Vi rekommenderar lösningen utifrån användningen, inte tvärtom.",
          },
        ],
        ctaTitle: "Behöver du grindar i Stockholm?",
        ctaBody:
          "Berätta kort om infarten, användningen och om ni behöver automatik så hjälper vi er vidare med rätt lösning.",
        relatedLabel: "Relaterade sidor",
        relatedLinks: [
          { href: "/", label: "Start", description: "Se hela erbjudandet från Nordic Stängsel." },
          { href: "/tjanster", label: "Tjänster", description: "Utforska fler grind- och stängsellösningar." },
          { href: "/projekt", label: "Projekt", description: "Se projektmiljöer med relevanta flöden och entréer." },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Gates Stockholm",
        title: "Gates in Stockholm for entrances, properties and business sites",
        intro:
          "Nordic Stängsel delivers gates in Stockholm for clients who need access control, reliable operation and a professional visual expression to work together from day one.",
        proofTitle: "The right gate solution for how the site is actually used",
        proofBody:
          "When vehicle entrances, pedestrian access and daily traffic matter, it is not enough for a gate to simply look good. The solution needs to be chosen based on movement patterns, security level and operating demands.",
        solutionsTitle: "Common gate solutions in Stockholm",
        solutions: [
          {
            title: "Automatic gates for controlled access",
            body: "For business sites, properties and facilities where convenient, clear and reliable passage matters.",
          },
          {
            title: "Sliding gates for wide entrances",
            body: "For logistics, industry and sites where space use and robust function are important parts of the solution.",
          },
          {
            title: "Pedestrian and swing gates",
            body: "For complementary access points where flow, appearance and safety need to work well with the surrounding fence line.",
          },
        ],
        trustPoints: [
          "Gate solutions chosen around flow, function and daily use",
          "Clear alignment between gate, fence line and the overall site",
          "A direct route to quote, advice and continued project dialogue",
        ],
        faqTitle: "Common questions about gates in Stockholm",
        faqs: [
          {
            question: "What gate suits a company or property in Stockholm best?",
            answer:
              "That mainly depends on how many passages occur, what kind of traffic uses the site and how much control or automation is needed.",
          },
          {
            question: "Can you handle both the gate and the connected fencing?",
            answer:
              "Yes, we work with complete solutions where the gate, fence line and access control need to function as one coherent system.",
          },
          {
            question: "Are automatic gates the right choice for every project?",
            answer:
              "Not always. In some environments a manual or simpler solution is better. We recommend the solution based on use, not the other way around.",
          },
        ],
        ctaTitle: "Need gates in Stockholm?",
        ctaBody:
          "Tell us about the entrance, the use case and whether you need automation, and we will help you move forward with the right solution.",
        relatedLabel: "Related pages",
        relatedLinks: [
          { href: "/", label: "Home", description: "See the full Nordic Stängsel offer." },
          { href: "/tjanster", label: "Services", description: "Explore more gate and fencing solution types." },
          { href: "/projekt", label: "Projects", description: "See project environments with relevant access flows." },
        ],
        primaryCta: "Get a quote",
        secondaryCta: "Contact us",
        projectsCta: "See projects",
      },
    },
  },
  "grindar-uppsala": {
    image: project1Src,
    imageAlt: {
      sv: "Grindlösning i Uppsala",
      en: "Gate solution in Uppsala",
    },
    copy: {
      sv: {
        heroLabel: "Grindar Uppsala",
        title: "Grindar i Uppsala för företag, fastigheter, BRF och villor",
        intro:
          "Vi hjälper kunder i Uppsala att välja grindlösningar som fungerar i vardagen, stödjer rätt flöden och ger ett mer genomarbetat helhetsintryck kring fastigheten.",
        proofTitle: "När rätt passage gör hela lösningen bättre",
        proofBody:
          "En grind påverkar både säkerhet, användarvänlighet och hur området upplevs. Därför behöver den anpassas till platsen, människorna som använder den och hur ofta den ska öppnas, stängas eller styras.",
        solutionsTitle: "Grindlösningar för Uppsala",
        solutions: [
          {
            title: "Automatiska grindar för fastigheter och verksamheter",
            body: "För miljöer där snabb, tydlig och kontrollerad inpassering är viktig för drift och användarupplevelse.",
          },
          {
            title: "Skjutgrindar för större infarter",
            body: "För områden där fordonspassager, bredd och säker funktion behöver lösas utan att tumma på helhetskänslan.",
          },
          {
            title: "Kompletterande gånggrindar och entrélösningar",
            body: "För platser där fotgängarflöde, trygghet och en tydlig entré behöver samspela med stängsellösningen.",
          },
        ],
        trustPoints: [
          "Rekommendationer baserade på användning, inte generiska paket",
          "Helhet mellan grind, stängsel och platsens karaktär",
          "Enkel väg till offert, rådgivning och fortsatt projektering",
        ],
        faqTitle: "Vanliga frågor om grindar i Uppsala",
        faqs: [
          {
            question: "Hur väljer man rätt grind för en fastighet i Uppsala?",
            answer:
              "Man behöver titta på vilka som passerar, hur ofta grinden används, om det gäller fordon eller gångtrafik och vilken nivå av kontroll som behövs.",
          },
          {
            question: "Kan ni rekommendera en grind som passar både funktionellt och visuellt?",
            answer:
              "Ja, vi väger in platsens uttryck, användning och driftbehov så att grinden fungerar väl som del av hela anläggningen.",
          },
          {
            question: "Arbetar ni med både enklare grindar och mer avancerad automatik?",
            answer:
              "Ja, vi hjälper till med både enklare passagelösningar och mer styrda system beroende på projektets behov.",
          },
        ],
        ctaTitle: "Behöver du grindar i Uppsala?",
        ctaBody:
          "Skicka några rader om platsen och vilken typ av passage ni behöver, så återkommer vi med rekommenderad väg framåt.",
        relatedLabel: "Relaterade sidor",
        relatedLinks: [
          { href: "/", label: "Start", description: "Tillbaka till Nordic Stängsels startsida." },
          { href: "/tjanster", label: "Tjänster", description: "Se fler lösningar inom grindar och stängsel." },
          { href: "/projekt", label: "Projekt", description: "Se referensmiljöer som liknar ditt behov." },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Gates Uppsala",
        title: "Gates in Uppsala for companies, properties, housing associations and villas",
        intro:
          "We help clients in Uppsala choose gate solutions that work in daily use, support the right access flows and create a more considered overall impression around the property.",
        proofTitle: "When the right access point improves the entire solution",
        proofBody:
          "A gate affects security, usability and how the area is perceived. It therefore needs to be adapted to the site, the people who use it and how often it must open, close or be controlled.",
        solutionsTitle: "Gate solutions for Uppsala",
        solutions: [
          {
            title: "Automatic gates for properties and business sites",
            body: "For environments where quick, clear and controlled access matters for operations and user experience.",
          },
          {
            title: "Sliding gates for larger entrances",
            body: "For sites where vehicle access, width and dependable function must be solved without compromising the overall impression.",
          },
          {
            title: "Complementary pedestrian gates and entrance solutions",
            body: "For places where foot traffic, safety and a clear entrance need to work together with the fencing solution.",
          },
        ],
        trustPoints: [
          "Recommendations based on use, not generic packages",
          "A coherent relationship between gate, fence line and site character",
          "A simple route to quote, advice and continued planning",
        ],
        faqTitle: "Common questions about gates in Uppsala",
        faqs: [
          {
            question: "How do you choose the right gate for a property in Uppsala?",
            answer:
              "You need to look at who passes through, how often the gate is used, whether it handles vehicles or pedestrians and what level of control is required.",
          },
          {
            question: "Can you recommend a gate that works both functionally and visually?",
            answer:
              "Yes, we factor in the site's visual expression, everyday use and operating needs so the gate works well as part of the whole installation.",
          },
          {
            question: "Do you work with both simpler gates and more advanced automation?",
            answer:
              "Yes, we help with both simpler access solutions and more controlled systems depending on what the project actually needs.",
          },
        ],
        ctaTitle: "Need gates in Uppsala?",
        ctaBody:
          "Send a short note about the site and what kind of access point you need, and we will return with the recommended way forward.",
        relatedLabel: "Related pages",
        relatedLinks: [
          { href: "/", label: "Home", description: "Back to the Nordic Stängsel homepage." },
          { href: "/tjanster", label: "Services", description: "See more gate and fencing solutions." },
          { href: "/projekt", label: "Projects", description: "See reference environments that match your need." },
        ],
        primaryCta: "Get a quote",
        secondaryCta: "Contact us",
        projectsCta: "See projects",
      },
    },
  },
};

function LocalLandingPage({ pageKey }: { pageKey: PageKey }) {
  const { language, localizePath } = useLanguage();
  const config = pageConfigs[pageKey];
  const copy = config.copy[language];
  const isSv = language === "sv";

  return (
    <main className="w-full pt-20">
      <section className="relative overflow-hidden bg-[#07121c] pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="absolute inset-0">
          <img
            src={heroSrc}
            alt={isSv ? "Premium stängsel- och grindlösningar" : "Premium fencing and gate solutions"}
            className="h-full w-full object-cover opacity-30"
          />
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
              <img src={config.image} alt={config.imageAlt[language]} className="h-full w-full object-cover" />
            </div>
            <div className="border-t border-white/10 px-6 py-6">
              <h2 className="font-serif text-2xl text-white">{copy.proofTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{copy.proofBody}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl md:mb-14">
            <span className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7d8993]">
              <MapPin className="h-4 w-4" />
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
                className="border border-[#e4e8ec] bg-[#f8fafb] px-6 py-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <h3 className="font-serif text-[1.55rem] leading-tight text-[#0f1f2e]">{solution.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#51606c]">{solution.body}</p>
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

      <section className="bg-[#1a3349] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/45">{copy.relatedLabel}</span>
              <h2 className="font-serif text-[2rem] leading-tight text-white md:text-[3rem]">{copy.ctaTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-white/68 md:text-base">{copy.ctaBody}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={localizePath("/kontakt")}>
                  <Button className="h-12 rounded-none border border-[#d0a45e] bg-[#d0a45e] px-7 text-sm uppercase tracking-[0.18em] text-[#0c1824] hover:border-[#ddb875] hover:bg-[#ddb875]">
                    {copy.primaryCta}
                  </Button>
                </Link>
                <Link href={localizePath("/kontakt")}>
                  <Button
                    variant="outline"
                    className="h-12 rounded-none border-white/35 bg-transparent px-7 text-sm uppercase tracking-[0.18em] text-white hover:border-white/65 hover:bg-white hover:text-[#0f1f2e]"
                  >
                    {copy.secondaryCta}
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

export function StangselStockholmPage() {
  return <LocalLandingPage pageKey="stangsel-stockholm" />;
}

export function StangselUppsalaPage() {
  return <LocalLandingPage pageKey="stangsel-uppsala" />;
}

export function GrindarStockholmPage() {
  return <LocalLandingPage pageKey="grindar-stockholm" />;
}

export function GrindarUppsalaPage() {
  return <LocalLandingPage pageKey="grindar-uppsala" />;
}
