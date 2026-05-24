import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import heroSrc from "../assets/images/hero-om-oss.png";

export default function About() {
  const { language } = useLanguage();
  const isSv = language === "sv";

  const values = isSv
    ? [
        { icon: ShieldCheck, title: "Kvalitet", desc: "Vi väljer lösningar och utförande med långsiktig funktion och tydlig finish i fokus." },
        { icon: Target, title: "Noggrannhet", desc: "Vi planerar utifrån platsens verkliga förutsättningar i stället för generella standardlösningar." },
        { icon: Leaf, title: "Hållbarhet", desc: "Vi prioriterar lösningar som fungerar i vardagen och är rimliga att förvalta över tid." },
        { icon: Users, title: "Professionalitet", desc: "Kommunikation, närvaro på plats och genomförande ska kännas ordnat från start till överlämning." },
      ]
    : [
        { icon: ShieldCheck, title: "Quality", desc: "We choose solutions and workmanship with long-term function and a clear finish in focus." },
        { icon: Target, title: "Precision", desc: "We plan based on the real conditions on site instead of relying on generic standard solutions." },
        { icon: Leaf, title: "Durability", desc: "We prioritise solutions that work in everyday use and are reasonable to manage over time." },
        { icon: Users, title: "Professionalism", desc: "Communication, on-site presence and delivery should feel organised from start to handover." },
      ];

  const copy = isSv
    ? {
        badge: "Om oss",
        heroTitle: "En partner för stängsel, grindar och områdesskydd",
        heroBody: "Nordic Stängsel hjälper kunder att fatta trygga beslut kring funktion, säkerhet och utförande i Stockholm, Uppsala och Mälardalen.",
        title: "En professionell partner för stängsel och grindar",
        paragraphs: [
          "Nordic Stängsel arbetar med stängsel- och grindlösningar för företag, skolor, idrottsanläggningar, kommuner, bostadsrättsföreningar och privata villakunder i Stockholm, Uppsala och Mälardalen.",
          "Vår roll är att hjälpa kunder att välja en lösning som fungerar i praktiken, passar platsens förutsättningar och håller ihop både tekniskt och visuellt.",
          "Vi lägger stor vikt vid tydlig projektdialog, snabb återkoppling och ett montage som känns färdigt i varje detalj. Det är så vi vill att Nordic Stängsel ska upplevas som samarbetspartner.",
        ],
        howTitle: "Hur vi arbetar",
        howBody: "Vi börjar med platsens behov och förutsättningar. Därefter konkretiserar vi lösning, omfattning och genomförande på ett sätt som gör projektet lätt att förstå, lättare att besluta om och enklare att genomföra utan onödiga omvägar.",
        importantTitle: "Vad som är viktigt för oss",
        importantBody: "Ett bra resultat kräver tydliga beslut, relevant materialval och ett montage som fungerar över tid. Därför prioriterar vi struktur, precision och ett lugnt samarbete genom hela processen.",
        valuesTitle: "Våra arbetssätt",
        nextStep: "Nästa steg",
        ctaTitle: "Vill du diskutera ett projekt?",
        ctaBody: "Beskriv kort projektet så återkommer vi snabbt med rätt nästa steg och kostnadsfri offert inom 24 timmar.",
        cta: "Få kostnadsfri offert inom 24 timmar",
      }
    : {
        badge: "About",
        heroTitle: "A partner for fencing, gates and perimeter protection",
        heroBody: "Nordic Stängsel helps customers make confident decisions about function, security and delivery in Stockholm, Uppsala and the Mälardalen region.",
        title: "A professional partner for fencing and gates",
        paragraphs: [
          "Nordic Stängsel works with fencing and gate solutions for companies, schools, sports facilities, municipalities, housing associations and private villa customers in Stockholm, Uppsala and the Mälardalen region.",
          "Our role is to help customers choose a solution that works in practice, suits the site conditions and holds together both technically and visually.",
          "We place great importance on clear project dialogue, quick follow-up and installation that feels complete in every detail. That is how we want Nordic Stängsel to be experienced as a partner.",
        ],
        howTitle: "How we work",
        howBody: "We start with the site's needs and conditions. We then define the solution, scope and execution in a way that makes the project easier to understand, easier to approve and easier to complete without unnecessary detours.",
        importantTitle: "What matters to us",
        importantBody: "A strong result requires clear decisions, relevant material choices and installation that works over time. That is why we prioritise structure, precision and a calm collaboration throughout the process.",
        valuesTitle: "Our working principles",
        nextStep: "Next step",
        ctaTitle: "Would you like to discuss a project?",
        ctaBody: "Briefly describe the project and we will come back quickly with the right next step and a free quote within 24 hours.",
        cta: "Get a free quote within 24 hours",
      };

  return (
    <main className="w-full pt-20">
      <section className="relative flex h-[50vh] min-h-[400px] w-full items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img src={heroSrc} alt={isSv ? "Om Nordic Stängsel" : "About Nordic Stängsel"} className="h-full w-full object-cover object-center opacity-40 mix-blend-overlay" decoding="async" fetchPriority="high" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto max-w-3xl text-center">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/70">{copy.badge}</span>
            <h1 className="mb-6 text-4xl font-serif text-white md:text-6xl">{copy.heroTitle}</h1>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">{copy.heroBody}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="mb-8 text-3xl font-serif text-[#0f1f2e]">{copy.title}</h2>
              <div className="prose prose-lg max-w-none font-sans text-gray-600">
                {copy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="mb-4 text-2xl font-serif text-[#0f1f2e]">{copy.howTitle}</h3>
              <p className="leading-relaxed text-gray-600">{copy.howBody}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="mb-4 text-2xl font-serif text-[#0f1f2e]">{copy.importantTitle}</h3>
              <p className="leading-relaxed text-gray-600">{copy.importantBody}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-serif text-[#0f1f2e] md:text-4xl">{copy.valuesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div key={value.title} className="border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-gray-100 bg-gray-50">
                  <value.icon className="h-7 w-7 text-[#0f1f2e]/60 stroke-[1.5]" />
                </div>
                <h3 className="mb-3 text-xl font-serif text-[#0f1f2e]">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a3349] py-24 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/40">{copy.nextStep}</span>
            <h2 className="mb-6 text-3xl font-serif md:text-4xl">{copy.ctaTitle}</h2>
            <p className="mb-10 leading-relaxed text-white/60">{copy.ctaBody}</p>
            <Link href="/kontakt">
              <Button className="h-12 rounded-none bg-white px-8 text-sm uppercase tracking-widest text-[#0f1f2e] hover:bg-white/90">
                {copy.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}