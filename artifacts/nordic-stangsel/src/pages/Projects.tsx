import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import project1Src from "../assets/images/project-1.png";
import project2Src from "../assets/images/project-2.png";
import project3Src from "../assets/images/project-3.png";
import project4Src from "../assets/images/project-4.png";
import project5Src from "../assets/images/project-5.png";
import project6Src from "../assets/images/project-6.png";

const projects = [
  {
    id: 1,
    image: project1Src,
    type: "Industri och verksamhetsområden",
    segment: "Företag",
    desc: "Projekt där tydlig avgränsning, genomtänkt inpassering och lösningar som fungerar i daglig drift behöver samspela.",
  },
  {
    id: 2,
    image: project2Src,
    type: "Skolor och utbildningsmiljöer",
    segment: "Skolor",
    desc: "Uppdrag med fokus på trygghet, orienterbarhet och ett lugnt uttryck i miljöer där många människor rör sig varje dag.",
  },
  {
    id: 3,
    image: project3Src,
    type: "Idrottsanläggningar",
    segment: "Idrottsanläggningar",
    desc: "Lösningar för anläggningar där höjd, siktlinjer, publikflöden och slitstyrka behöver vägas samman från början.",
  },
  {
    id: 4,
    image: project4Src,
    type: "Villor och privata fastigheter",
    segment: "Privata villakunder",
    desc: "Projekt där funktion, trygghet och hur stängsel eller grindar samspelar med husets arkitektur är lika viktiga delar av helheten.",
  },
  {
    id: 5,
    image: project5Src,
    type: "Objekt med högre skyddsbehov",
    segment: "Säkerhetsmiljöer",
    desc: "Genomföranden där nivå på områdesskydd, passager och praktiska driftskrav behöver definieras tydligt innan installation.",
  },
  {
    id: 6,
    image: project6Src,
    type: "Offentliga och gemensamma miljöer",
    segment: "Kommuner & bostadsrättsföreningar",
    desc: "Uppdrag för miljöer där hållbarhet, enkel skötsel och ett sammanhållet visuellt uttryck behöver fungera långsiktigt.",
  },
];

export default function Projects() {
  return (
    <main className="w-full pt-20">
      <section className="py-24 bg-[#1a3349]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4 block">Projekt</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Utvalda projektmiljöer</h1>
            <p className="text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Här visar vi exempel på vilken typ av uppdrag vi arbetar med och vilka frågor som brukar vara avgörande i olika miljöer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group flex flex-col bg-white border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-200 relative">
                  <img
                    src={project.image}
                    alt={project.type}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0f1f2e] text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                    {project.segment}
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-serif text-[#0f1f2e] mb-4">{project.type}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>

                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <Link href="/kontakt" className="inline-flex items-center text-sm font-semibold text-[#0f1f2e] hover:text-blue-700 transition-colors uppercase tracking-wider">
                      Diskutera liknande projekt <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto border border-gray-200 p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f2e] mb-6">Har du ett liknande projekt?</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Vi utgår från platsens krav, användningen över tid och vilken nivå av områdesskydd som passar bäst för er verksamhet eller fastighet.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-[#1a3349] hover:bg-[#264056] text-white rounded-none h-14 px-8 text-base tracking-wide">
                Kontakta oss idag
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
