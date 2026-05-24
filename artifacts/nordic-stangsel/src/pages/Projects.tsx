import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";
import project3Src from "../assets/images/project-3.png";
import project4Src from "../assets/images/project-4.png";
import project5Src from "../assets/images/project-5.png";
import project6Src from "../assets/images/project-6.png";

export default function Projects() {
  const { language, localizePath } = useLanguage();
  const isSv = language === "sv";

  const projects = isSv
    ? [
        { id: 1, image: project1Src, type: "Industri och verksamhetsområden", segment: "Företag", desc: "Projekt där tydlig avgränsning, genomtänkt inpassering och lösningar som fungerar i daglig drift behöver samspela." },
        { id: 2, image: project2Src, type: "Skolor och utbildningsmiljöer", segment: "Skolor", desc: "Uppdrag med fokus på trygghet, orienterbarhet och ett lugnt uttryck i miljöer där många människor rör sig varje dag." },
        { id: 3, image: project3Src, type: "Idrottsanläggningar", segment: "Idrottsanläggningar", desc: "Lösningar för anläggningar där höjd, siktlinjer, publikflöden och slitstyrka behöver vägas samman från början." },
        { id: 4, image: project4Src, type: "Villor och privata fastigheter", segment: "Privata villakunder", desc: "Projekt där funktion, trygghet och hur stängsel eller grindar samspelar med husets arkitektur är lika viktiga delar av helheten." },
        { id: 5, image: project5Src, type: "Objekt med högre skyddsbehov", segment: "Säkerhetsmiljöer", desc: "Genomföranden där nivå på områdesskydd, passager och praktiska driftskrav behöver definieras tydligt innan installation." },
        { id: 6, image: project6Src, type: "Offentliga och gemensamma miljöer", segment: "Kommuner & bostadsrättsföreningar", desc: "Uppdrag för miljöer där hållbarhet, enkel skötsel och ett sammanhållet visuellt uttryck behöver fungera långsiktigt." },
      ]
    : [
        { id: 1, image: project1Src, type: "Industrial and commercial sites", segment: "Companies", desc: "Projects where clear boundaries, well-planned access and solutions that work in daily operations need to work together." },
        { id: 2, image: project2Src, type: "Schools and educational environments", segment: "Schools", desc: "Assignments focused on safety, orientation and a calm visual expression in environments where many people move every day." },
        { id: 3, image: project3Src, type: "Sports facilities", segment: "Sports facilities", desc: "Solutions for facilities where height, sightlines, audience flows and durability need to be balanced from the start." },
        { id: 4, image: project4Src, type: "Villas and private properties", segment: "Private villa customers", desc: "Projects where function, safety and how fencing or gates interact with the architecture of the house are equally important parts of the whole." },
        { id: 5, image: project5Src, type: "Sites with higher security needs", segment: "Security environments", desc: "Deliveries where the level of perimeter protection, passages and practical operating requirements need to be defined clearly before installation." },
        { id: 6, image: project6Src, type: "Public and shared environments", segment: "Municipalities & housing associations", desc: "Assignments for environments where durability, easy maintenance and a coherent visual expression need to work over time." },
      ];

  const copy = isSv
    ? {
        badge: "Projekt",
        heroTitle: "Projektmiljöer som visar hur vi arbetar",
        heroBody: "Här ser du exempel på vilken typ av uppdrag vi arbetar med och vad som brukar vara avgörande för att hitta rätt lösning snabbt.",
        sectionTitle: "Relevant erfarenhet för olika typer av kunder",
        sectionBody: "När du snabbt vill bedöma en leverantör är det viktigt att se om de förstår din typ av miljö. Därför visar vi projektområden som hjälper dig att känna igen ditt eget behov.",
        link: "Diskutera liknande projekt",
        ctaTitle: "Har du ett liknande projekt?",
        ctaBody: "Beskriv kort miljön, användningen och vilken typ av stängsel eller grind du behöver. Vi återkommer med rätt nästa steg och kostnadsfri offert inom 24 timmar.",
        cta: "Få kostnadsfri offert inom 24 timmar",
      }
    : {
        badge: "Projects",
        heroTitle: "Project environments that show how we work",
        heroBody: "Here you can see examples of the kinds of assignments we work on and what is usually decisive in finding the right solution quickly.",
        sectionTitle: "Relevant experience for different customer types",
        sectionBody: "When you need to assess a supplier quickly, it is important to see whether they understand your type of environment. That is why we show project areas that help you recognise your own need.",
        link: "Discuss a similar project",
        ctaTitle: "Do you have a similar project?",
        ctaBody: "Briefly describe the environment, the intended use and what type of fencing or gate you need. We will return with the right next step and a free quote within 24 hours.",
        cta: "Get a free quote within 24 hours",
      };

  return (
    <main className="w-full pt-20">
      <section className="bg-[#1a3349] py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/70">{copy.badge}</span>
            <h1 className="mb-6 text-4xl font-serif text-white md:text-6xl">{copy.heroTitle}</h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-white/80">{copy.heroBody}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-serif text-[#0f1f2e] md:text-4xl">{copy.sectionTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">{copy.sectionBody}</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {projects.map((project, i) => (
              <motion.div key={project.id} className="group flex flex-col border border-gray-100 bg-white shadow-sm" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                  <img src={project.image} alt={project.type} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" sizes="(min-width: 1024px) 40vw, 100vw" />
                  <div className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0f1f2e] backdrop-blur">{project.segment}</div>
                </div>

                <div className="flex flex-grow flex-col p-8 md:p-10">
                  <h2 className="mb-4 text-2xl font-serif text-[#0f1f2e] md:text-3xl">{project.type}</h2>
                  <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-600">{project.desc}</p>
                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <Link href={localizePath("/kontakt")} className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-[#0f1f2e] transition-colors hover:text-blue-700">
                      {copy.link} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl border border-gray-200 p-12 md:p-16">
            <h2 className="mb-6 text-3xl font-serif text-[#0f1f2e] md:text-4xl">{copy.ctaTitle}</h2>
            <p className="mb-10 leading-relaxed text-gray-600">{copy.ctaBody}</p>
            <Link href={localizePath("/kontakt")}>
              <Button size="lg" className="h-14 rounded-none bg-[#1a3349] px-8 text-base tracking-wide text-white hover:bg-[#264056]">
                {copy.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
