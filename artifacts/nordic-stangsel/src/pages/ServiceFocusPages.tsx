import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Focus, School, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import heroSrc from "../assets/images/hero-tjanster.png";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";
import project3Src from "../assets/images/project-3.png";

type PageKey = "skolstangsel" | "panelstangsel" | "automatgrindar" | "skjutgrindar";

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
  skolstangsel: {
    image: project2Src,
    imageAlt: {
      sv: "Skolstängsel för trygg skolgård",
      en: "School fencing for a safe schoolyard",
    },
    audienceChips: {
      sv: [
        "Skolor och förskolor",
        "Kommuner och utbildningsmiljöer",
        "Lekytor och skolgårdar",
        "Miljöer med krav på trygg orientering",
      ],
      en: [
        "Schools and preschools",
        "Municipal education environments",
        "Play areas and schoolyards",
        "Environments that need safe orientation",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Skolstängsel",
        title: "Skolstängsel för trygga miljöer där säkerhet och vardagsfunktion måste fungera tillsammans",
        intro:
          "Nordic Stängsel hjälper skolor, förskolor och kommuner att välja skolstängsel som skapar tryggare gårdar, tydligare gränser och en lösning som fungerar i vardagen utan att kännas hård eller tung.",
        proofTitle: "För miljöer där många människor rör sig varje dag",
        proofBody:
          "Ett bra skolstängsel ska stödja trygghet, orienterbarhet och slitstyrka. Det behöver fungera för barn, personal, vårdnadshavare och serviceflöden utan att skapa onödiga hinder eller fel signaler i miljön.",
        solutionsTitle: "Vanliga lösningar inom skolstängsel",
        solutions: [
          {
            title: "Panelstängsel för skolgårdar och avgränsningar",
            body: "För skolmiljöer där tydliga gränser, god överblick och ett lugnt uttryck behöver gå hand i hand.",
          },
          {
            title: "Barnsäkra grindar och passager",
            body: "För entréer och genomgångar där säker passage, enkel användning och kontroll över flöden är viktiga delar av helheten.",
          },
          {
            title: "Lösningar anpassade till platsens vardag",
            body: "För utbildningsmiljöer där stängslet måste fungera i verklig drift, inte bara uppfylla ett minimikrav på avgränsning.",
          },
        ],
        trustPoints: [
          "Skolstängsel anpassat till trygghet, orienterbarhet och daglig användning",
          "Tydlig helhet mellan stängsel, grindar och hur skolgården faktiskt används",
          "Snabb väg till offert och rekommendation för rätt nivå av avgränsning",
        ],
        faqTitle: "Vanliga frågor om skolstängsel",
        faqs: [
          {
            question: "Vilket skolstängsel passar bäst för en skolgård?",
            answer:
              "Det beror på platsens utformning, vilka åldrar som använder gården, hur tydlig avgränsningen behöver vara och vilken nivå av överblick man vill behålla. Panelstängsel är ofta ett starkt val, men inte det enda möjliga.",
          },
          {
            question: "Kan ni hjälpa till med både stängsel och grindar för skolmiljö?",
            answer:
              "Ja, vi hjälper gärna till med helhetslösningar där stängsel, gånggrindar och flöden runt skolan behöver fungera tillsammans.",
          },
          {
            question: "Hur gör man en lösning trygg utan att den känns för hård?",
            answer:
              "Genom att välja rätt typ av stängsel, rätt höjd och rätt öppningar utifrån hur miljön används. Vi väger in både trygghet och hur platsen upplevs i vardagen.",
          },
        ],
        ctaTitle: "Behöver ni rätt skolstängsel?",
        ctaBody:
          "Beskriv skolgården, passagerna och behoven kort så återkommer vi med rekommenderad lösning och offertunderlag.",
        relatedLinks: [
          {
            href: "/panelstangsel",
            label: "Panelstängsel",
            description: "Se lösningar där tydliga linjer, överblick och ett modernt uttryck är viktiga.",
          },
          {
            href: "/stangsel-uppsala",
            label: "Stängsel Uppsala",
            description: "Se lokal sida för skolor, fastigheter och andra projekt i Uppsala.",
          },
          {
            href: "/projekt",
            label: "Projekt",
            description: "Utforska relevanta projektmiljöer för skolor och offentliga miljöer.",
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
        heroLabel: "School fencing",
        title: "School fencing for safe environments where security and daily function need to work together",
        intro:
          "Nordic Stängsel helps schools, preschools and municipalities choose school fencing that creates safer yards, clearer boundaries and a solution that works in daily use without feeling heavy or overly harsh.",
        proofTitle: "For environments where many people move every day",
        proofBody:
          "Good school fencing should support safety, orientation and durability. It needs to work for children, staff, guardians and service flows without creating unnecessary barriers or the wrong visual signals in the environment.",
        solutionsTitle: "Common school fencing solutions",
        solutions: [
          {
            title: "Panel fencing for schoolyards and boundaries",
            body: "For school environments where clear boundaries, good visibility and a calm expression need to work together.",
          },
          {
            title: "Child-safe gates and passage points",
            body: "For entrances and walk-throughs where safe passage, easy use and controlled flows are important parts of the whole.",
          },
          {
            title: "Solutions adapted to the site's daily use",
            body: "For education environments where the fencing must work in real operation, not just meet a minimum requirement for enclosure.",
          },
        ],
        trustPoints: [
          "School fencing adapted to safety, orientation and daily use",
          "A clear relationship between fencing, gates and how the schoolyard is actually used",
          "Fast route to a quote and recommendation for the right boundary level",
        ],
        faqTitle: "Common questions about school fencing",
        faqs: [
          {
            question: "What school fencing is the right fit for a schoolyard?",
            answer:
              "That depends on the site layout, the ages using the area, how clear the boundary needs to be and how much openness should remain. Panel fencing is often a strong choice, but not the only one.",
          },
          {
            question: "Can you help with both fencing and gates for school environments?",
            answer:
              "Yes, we are happy to help with complete solutions where fencing, pedestrian gates and movement flows around the school need to work together.",
          },
          {
            question: "How do you make the solution feel safe without becoming too harsh?",
            answer:
              "By choosing the right fencing type, height and openings based on how the site is used. We weigh both safety and the everyday feel of the environment.",
          },
        ],
        ctaTitle: "Do you need the right school fencing?",
        ctaBody:
          "Briefly describe the schoolyard, access points and needs and we will return with a recommended solution and quote basis.",
        relatedLinks: [
          {
            href: "/panelstangsel",
            label: "Panel Fencing",
            description: "See solutions where clear lines, visibility and a modern expression matter.",
          },
          {
            href: "/stangsel-uppsala",
            label: "Fencing Uppsala",
            description: "See the local page for schools, properties and other projects in Uppsala.",
          },
          {
            href: "/projekt",
            label: "Projects",
            description: "Explore relevant project environments for schools and public settings.",
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
  panelstangsel: {
    image: project3Src,
    imageAlt: {
      sv: "Panelstängsel med modernt uttryck",
      en: "Panel fencing with a modern expression",
    },
    audienceChips: {
      sv: [
        "BRF och fastigheter",
        "Kontor och offentliga miljöer",
        "Skolor och utbildningsområden",
        "Projekt där uttryck och ordning är viktiga",
      ],
      en: [
        "Housing associations and properties",
        "Offices and public environments",
        "Schools and education areas",
        "Projects where appearance and order matter",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Panelstängsel",
        title: "Panelstängsel för miljöer där ordning, överblick och ett modernt uttryck är avgörande",
        intro:
          "Nordic Stängsel levererar panelstängsel för fastigheter, skolor, BRF:er och verksamhetsmiljöer där man vill kombinera tydlig avgränsning med ett mer genomarbetat visuellt uttryck.",
        proofTitle: "När stängslet också är en del av helhetsintrycket",
        proofBody:
          "Panelstängsel används ofta där man behöver en lösning som både är robust och representativ. Rätt utfört skapar det ordning, trygghet och en tydlig linje utan att miljön känns tung eller stängd.",
        solutionsTitle: "Vanliga användningar av panelstängsel",
        solutions: [
          {
            title: "Panelstängsel för BRF och bostadsområden",
            body: "För gårdar, entréer och gemensamma ytor där tydliga gränser och ett lugnt uttryck behöver fungera tillsammans.",
          },
          {
            title: "Panelstängsel för skolor och offentliga miljöer",
            body: "För miljöer där överblick, trygghet och lättskötta lösningar är viktiga över tid.",
          },
          {
            title: "Panelstängsel för kontor och verksamheter",
            body: "För projekt där man vill markera området tydligt men samtidigt behålla ett professionellt och modernt intryck.",
          },
        ],
        trustPoints: [
          "Panelstängsel anpassat till både funktion och visuell helhet",
          "Tydlig balans mellan robusthet, överblick och ett lugnt uttryck",
          "Snabb väg till offert och rekommendation för rätt utförande",
        ],
        faqTitle: "Vanliga frågor om panelstängsel",
        faqs: [
          {
            question: "När är panelstängsel ett bättre val än andra stängseltyper?",
            answer:
              "Ofta när man vill kombinera tydlig avgränsning med ett mer modernt och representativt uttryck. Det passar särskilt bra i miljöer där överblick och ordning är viktiga.",
          },
          {
            question: "Passar panelstängsel för både BRF och företag?",
            answer:
              "Ja, panelstängsel är mycket flexibelt och fungerar bra i både bostadsnära och mer professionella miljöer, beroende på höjd, utförande och hur platsen används.",
          },
          {
            question: "Kan panelstängsel kombineras med grindar?",
            answer:
              "Ja, det är vanligt att komplettera med gånggrindar eller andra entrélösningar så att hela området får en sammanhållen funktion och visuell linje.",
          },
        ],
        ctaTitle: "Behöver ni rätt panelstängsel?",
        ctaBody:
          "Skicka några rader om fastigheten, området och vilken typ av avgränsning ni behöver så återkommer vi med rätt lösning.",
        relatedLinks: [
          {
            href: "/stangsel-brf",
            label: "Stängsel för BRF",
            description: "Se hur panelstängsel ofta används för gårdar, passager och gemensamma ytor i BRF-miljöer.",
          },
          {
            href: "/skolstangsel",
            label: "Skolstängsel",
            description: "Se lösningar för skolor och utbildningsmiljöer där panelstängsel ofta är relevant.",
          },
          {
            href: "/projekt",
            label: "Projekt",
            description: "Utforska projektmiljöer där uttryck, överblick och ordning varit centrala.",
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
        heroLabel: "Panel fencing",
        title: "Panel fencing for environments where order, visibility and a modern expression matter",
        intro:
          "Nordic Stängsel delivers panel fencing for properties, schools, housing associations and business environments where you want to combine clear boundaries with a more considered visual expression.",
        proofTitle: "When the fencing is also part of the overall impression",
        proofBody:
          "Panel fencing is often used where the solution needs to be both robust and representative. Done right, it creates order, safety and a clear line without making the environment feel heavy or closed off.",
        solutionsTitle: "Common uses for panel fencing",
        solutions: [
          {
            title: "Panel fencing for housing associations and residential areas",
            body: "For courtyards, entrances and shared spaces where clear boundaries and a calm expression need to work together.",
          },
          {
            title: "Panel fencing for schools and public environments",
            body: "For sites where visibility, safety and easy maintenance matter over time.",
          },
          {
            title: "Panel fencing for offices and business environments",
            body: "For projects where you want to define the site clearly while maintaining a professional and modern impression.",
          },
        ],
        trustPoints: [
          "Panel fencing adapted to both function and visual coherence",
          "A clear balance between robustness, visibility and a calm expression",
          "Fast route to a quote and recommendation for the right execution",
        ],
        faqTitle: "Common questions about panel fencing",
        faqs: [
          {
            question: "When is panel fencing a better choice than other fence types?",
            answer:
              "Often when you want to combine clear enclosure with a more modern and representative expression. It is especially suitable in environments where visibility and order matter.",
          },
          {
            question: "Is panel fencing suitable for both housing associations and companies?",
            answer:
              "Yes, panel fencing is highly flexible and works well in both residential and more professional environments depending on height, execution and how the site is used.",
          },
          {
            question: "Can panel fencing be combined with gates?",
            answer:
              "Yes, it is common to complement it with pedestrian gates or other entrance solutions so the whole site gets a coherent function and visual line.",
          },
        ],
        ctaTitle: "Do you need the right panel fencing?",
        ctaBody:
          "Send a few lines about the property, the area and what kind of boundary you need and we will come back with the right solution.",
        relatedLinks: [
          {
            href: "/stangsel-brf",
            label: "Fencing for Housing Associations",
            description: "See how panel fencing is often used for courtyards, passages and shared areas in housing association settings.",
          },
          {
            href: "/skolstangsel",
            label: "School Fencing",
            description: "See solutions for schools and education environments where panel fencing is often relevant.",
          },
          {
            href: "/projekt",
            label: "Projects",
            description: "Explore project environments where expression, visibility and order were central.",
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
  automatgrindar: {
    image: project1Src,
    imageAlt: {
      sv: "Automatgrind för kontrollerad inpassering",
      en: "Automatic gate for controlled access",
    },
    audienceChips: {
      sv: [
        "Företag och verksamheter",
        "Fastigheter med daglig passage",
        "BRF och bostadsområden",
        "Miljöer med behov av smidig kontroll",
      ],
      en: [
        "Companies and operations",
        "Properties with daily passage",
        "Housing associations and residential areas",
        "Environments needing smooth control",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Automatgrindar",
        title: "Automatgrindar för inpassering som ska vara tydlig, smidig och driftsäker varje dag",
        intro:
          "Nordic Stängsel levererar automatgrindar för företag, fastigheter, BRF:er och andra miljöer där flöde, kontroll och användarvänlighet behöver fungera som en helhet.",
        proofTitle: "När passagen är en viktig del av vardagen",
        proofBody:
          "En automatgrind ska inte bara öppna och stänga. Den ska stödja ett tydligt flöde, rätt nivå av kontroll och en lösning som fungerar pålitligt över tid för boende, personal, fordon och besökare.",
        solutionsTitle: "Vanliga lösningar inom automatgrindar",
        solutions: [
          {
            title: "Automatgrindar för företag och verksamhetsmiljöer",
            body: "För platser där fordon, personal och besökare behöver hanteras smidigt utan att tappa kontroll över tillträdet.",
          },
          {
            title: "Automatgrindar för BRF och fastigheter",
            body: "För miljöer där daglig användning, trygghet och enkel passage behöver fungera både praktiskt och visuellt.",
          },
          {
            title: "Lösningar anpassade till flöde och driftkrav",
            body: "För projekt där automatik, öppningsfrekvens och typ av trafik måste vägas in redan från början.",
          },
        ],
        trustPoints: [
          "Automatgrindar valda efter verkligt flöde, kontroll och användning",
          "Tydlig helhet mellan grind, stängsellinje och platsens vardag",
          "Snabb väg till offert och rekommendation för rätt automatiknivå",
        ],
        faqTitle: "Vanliga frågor om automatgrindar",
        faqs: [
          {
            question: "När är automatgrind rätt val?",
            answer:
              "Det är ofta rätt när passagen används ofta, när man vill ha tydligare kontroll eller när bekväm inpassering är viktig för både säkerhet och vardagsfunktion.",
          },
          {
            question: "Passar automatgrindar för både företag och BRF?",
            answer:
              "Ja, men lösningen behöver anpassas efter trafiktyp, användningsfrekvens och hur mycket kontroll eller enkelhet som prioriteras i vardagen.",
          },
          {
            question: "Kan ni hjälpa till med helheten kring grind och stängsel?",
            answer:
              "Ja, vi arbetar gärna med lösningar där automatgrind, stängsellinje och inpassering behöver fungera som ett sammanhållet system.",
          },
        ],
        ctaTitle: "Behöver ni rätt automatgrind?",
        ctaBody:
          "Beskriv platsen, vilken typ av passage ni har och hur ofta grinden används så återkommer vi med rekommenderad lösning.",
        relatedLinks: [
          {
            href: "/skjutgrindar",
            label: "Skjutgrindar",
            description: "Se lösningar för bredare infarter och miljöer där platsutnyttjande är extra viktigt.",
          },
          {
            href: "/grindar-stockholm",
            label: "Grindar Stockholm",
            description: "Se lokal sida för grindlösningar och inpassering i Stockholm.",
          },
          {
            href: "/projekt",
            label: "Projekt",
            description: "Utforska projektmiljöer med tydliga entréflöden och kontrollerad passage.",
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
        heroLabel: "Automatic gates",
        title: "Automatic gates for access that needs to be clear, smooth and dependable every day",
        intro:
          "Nordic Stängsel delivers automatic gates for companies, properties, housing associations and other environments where flow, control and ease of use need to work as one coherent solution.",
        proofTitle: "When access is an important part of everyday use",
        proofBody:
          "An automatic gate should do more than open and close. It should support clear flow, the right level of control and a solution that works reliably over time for residents, staff, vehicles and visitors.",
        solutionsTitle: "Common automatic gate solutions",
        solutions: [
          {
            title: "Automatic gates for companies and business environments",
            body: "For sites where vehicles, staff and visitors need to be handled smoothly without losing control over access.",
          },
          {
            title: "Automatic gates for housing associations and properties",
            body: "For environments where daily use, safety and smooth passage need to work both practically and visually.",
          },
          {
            title: "Solutions adapted to flow and operational demands",
            body: "For projects where automation, opening frequency and traffic type need to be weighed from the beginning.",
          },
        ],
        trustPoints: [
          "Automatic gates chosen around real flow, control and use",
          "A clear relationship between the gate, fence line and everyday use of the site",
          "Fast route to a quote and recommendation for the right automation level",
        ],
        faqTitle: "Common questions about automatic gates",
        faqs: [
          {
            question: "When is an automatic gate the right choice?",
            answer:
              "It is often the right fit when the passage is used frequently, when clearer control is needed or when convenient access is important for both safety and everyday function.",
          },
          {
            question: "Are automatic gates suitable for both companies and housing associations?",
            answer:
              "Yes, but the solution needs to be adapted to traffic type, usage frequency and how much control or simplicity is prioritised in everyday use.",
          },
          {
            question: "Can you help with the full gate and fencing scope?",
            answer:
              "Yes, we are happy to work with solutions where the automatic gate, fence line and access need to function as one coherent system.",
          },
        ],
        ctaTitle: "Do you need the right automatic gate?",
        ctaBody:
          "Describe the site, what type of passage you have and how often the gate is used, and we will return with a recommended solution.",
        relatedLinks: [
          {
            href: "/skjutgrindar",
            label: "Sliding Gates",
            description: "See solutions for wider entrances and environments where space efficiency is especially important.",
          },
          {
            href: "/grindar-stockholm",
            label: "Gates Stockholm",
            description: "See the local page for gate solutions and access control in Stockholm.",
          },
          {
            href: "/projekt",
            label: "Projects",
            description: "Explore project environments with clear entrance flows and controlled access.",
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
  skjutgrindar: {
    image: project1Src,
    imageAlt: {
      sv: "Skjutgrind för bred infart",
      en: "Sliding gate for a wide entrance",
    },
    audienceChips: {
      sv: [
        "Industri och logistik",
        "Företag med breda infarter",
        "Tekniska anläggningar",
        "Platser där utrymme och drift väger tungt",
      ],
      en: [
        "Industry and logistics",
        "Companies with wide entrances",
        "Technical facilities",
        "Sites where space and operation matter",
      ],
    },
    copy: {
      sv: {
        heroLabel: "Skjutgrindar",
        title: "Skjutgrindar för infarter där platsutnyttjande, kontroll och robust funktion är avgörande",
        intro:
          "Nordic Stängsel hjälper företag, industri, logistik och tekniska miljöer att välja skjutgrindar som fungerar pålitligt, använder utrymmet smart och ger rätt nivå av kontroll vid inpassering.",
        proofTitle: "När infarten måste fungera utan kompromisser",
        proofBody:
          "Skjutgrindar är ofta rätt val där öppningsbredd, flöde och drift behöver fungera utan att ta onödigt med plats. Rätt lösning förbättrar både vardagslogistik och helhetskontroll runt området.",
        solutionsTitle: "Vanliga lösningar inom skjutgrindar",
        solutions: [
          {
            title: "Skjutgrindar för industri och logistik",
            body: "För infarter där breda fordon, regelbundna passager och tydlig kontroll behöver fungera som en stabil helhet.",
          },
          {
            title: "Skjutgrindar för verksamhetsfastigheter",
            body: "För miljöer där man vill kombinera driftsäker passage med bättre utnyttjande av ytan vid entrén.",
          },
          {
            title: "Lösningar anpassade till frekvens och säkerhetsnivå",
            body: "För projekt där typ av trafik, öppningsmönster och krav på robusthet behöver styra valet från start.",
          },
        ],
        trustPoints: [
          "Skjutgrindar anpassade till verklig infartstrafik och daglig användning",
          "Tydlig koppling mellan grind, stängsellinje och områdets logik",
          "Snabb väg till offert och rekommendation för rätt utförande",
        ],
        faqTitle: "Vanliga frågor om skjutgrindar",
        faqs: [
          {
            question: "När är skjutgrind ett bättre val än andra grindtyper?",
            answer:
              "Ofta när man behöver bred passage, smartare utnyttjande av ytan eller en lösning som fungerar stabilt i miljöer med mycket trafik och tydliga infarter.",
          },
          {
            question: "Passar skjutgrindar bara för industri?",
            answer:
              "Nej, de används ofta i industri och logistik men kan också vara rätt i andra verksamhetsmiljöer där plats och flöde är viktiga faktorer.",
          },
          {
            question: "Kan ni hjälpa till med rätt kombination av grind och stängsel?",
            answer:
              "Ja, vi hjälper gärna till med helheten så att skjutgrind, stängsellinje och inpassering fungerar som ett sammanhållet system.",
          },
        ],
        ctaTitle: "Behöver ni rätt skjutgrind?",
        ctaBody:
          "Skicka några rader om infarten, fordonstrafiken och hur ofta passagen används så återkommer vi med rätt rekommendation.",
        relatedLinks: [
          {
            href: "/automatgrindar",
            label: "Automatgrindar",
            description: "Se lösningar för kontrollerad inpassering där automatik och flöde är viktiga delar.",
          },
          {
            href: "/industristangsel",
            label: "Industristängsel",
            description: "Komplettera skjutgrinden med rätt stängsellinje för industri, lager och logistik.",
          },
          {
            href: "/projekt",
            label: "Projekt",
            description: "Utforska projektmiljöer med breda infarter, logistikflöden och tydlig kontroll.",
          },
          {
            href: "/kontakt",
            label: "Kontakt",
            description: "Gå direkt till offertförfrågan lub kontaktuppgifter.",
          },
        ],
        primaryCta: "Få offert",
        secondaryCta: "Kontakta oss",
        projectsCta: "Se projekt",
      },
      en: {
        heroLabel: "Sliding gates",
        title: "Sliding gates for entrances where space efficiency, control and robust function are critical",
        intro:
          "Nordic Stängsel helps companies, industry, logistics and technical environments choose sliding gates that work reliably, use the available space intelligently and create the right level of access control.",
        proofTitle: "When the entrance needs to work without compromise",
        proofBody:
          "Sliding gates are often the right choice where opening width, flow and operation need to work without taking unnecessary space. The right solution improves both daily logistics and overall control around the site.",
        solutionsTitle: "Common sliding gate solutions",
        solutions: [
          {
            title: "Sliding gates for industry and logistics",
            body: "For entrances where wide vehicles, regular traffic and clear control need to function as a stable whole.",
          },
          {
            title: "Sliding gates for business properties",
            body: "For environments where you want to combine reliable passage with better use of the area around the entrance.",
          },
          {
            title: "Solutions adapted to frequency and security level",
            body: "For projects where traffic type, opening patterns and robustness requirements need to guide the choice from the start.",
          },
        ],
        trustPoints: [
          "Sliding gates adapted to real entrance traffic and daily use",
          "A clear relationship between the gate, fence line and site logic",
          "Fast route to a quote and recommendation for the right execution",
        ],
        faqTitle: "Common questions about sliding gates",
        faqs: [
          {
            question: "When is a sliding gate a better choice than other gate types?",
            answer:
              "Often when you need wide passage, more efficient use of space or a solution that works steadily in environments with a lot of traffic and clearly defined entrances.",
          },
          {
            question: "Are sliding gates only suitable for industrial sites?",
            answer:
              "No, they are common in industry and logistics but can also be the right fit in other business settings where space and flow are important factors.",
          },
          {
            question: "Can you help with the right combination of gate and fencing?",
            answer:
              "Yes, we are happy to help with the full solution so the sliding gate, fence line and access work as one coherent system.",
          },
        ],
        ctaTitle: "Do you need the right sliding gate?",
        ctaBody:
          "Send a few lines about the entrance, the vehicle traffic and how often the passage is used and we will return with the right recommendation.",
        relatedLinks: [
          {
            href: "/automatgrindar",
            label: "Automatic Gates",
            description: "See solutions for controlled access where automation and flow are important parts.",
          },
          {
            href: "/industristangsel",
            label: "Industrial Fencing",
            description: "Complement the sliding gate with the right fence line for industry, warehousing and logistics.",
          },
          {
            href: "/projekt",
            label: "Projects",
            description: "Explore project environments with wide entrances, logistics flows and clear control.",
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

function ServiceFocusLandingPage({ pageKey }: { pageKey: PageKey }) {
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
              {pageKey === "skolstangsel" ? <School className="h-4 w-4" /> : pageKey === "panelstangsel" ? <Focus className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
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

export function SkolstangselPage() {
  return <ServiceFocusLandingPage pageKey="skolstangsel" />;
}

export function PanelstangselPage() {
  return <ServiceFocusLandingPage pageKey="panelstangsel" />;
}

export function AutomatgrindarPage() {
  return <ServiceFocusLandingPage pageKey="automatgrindar" />;
}

export function SkjutgrindarPage() {
  return <ServiceFocusLandingPage pageKey="skjutgrindar" />;
}
