import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    image: "/src/assets/images/project-1.png",
    type: "Industristängsel & Grindar",
    segment: "Logistik & Transport",
    desc: "En omfattande säkerhetsinstallation för ett nytt logistikcenter. Projektet innefattade över 800 meter 2.4 meter högt industristängsel, kombinerat med två motoriserade fribärande skjutgrindar om 8 meter för tung trafik. Högsta krav på driftsäkerhet och passagekontroll."
  },
  {
    id: 2,
    image: "/src/assets/images/project-2.png",
    type: "Panelstängsel",
    segment: "Kommunal Fastighet",
    desc: "Säkring av utemiljö kring en nybyggd förskola. Vi installerade vridstyva panelstängsel som erbjuder hög säkerhet utan att ge en instängd känsla. Särskilt fokus lades på barnsäkra grindbeslag och noll tolerans mot skarpa kanter."
  },
  {
    id: 3,
    image: "/src/assets/images/project-3.png",
    type: "Bollfångarnät & Publikstängsel",
    segment: "Sport & Fritid",
    desc: "Komplett områdesskydd för en nyanlagd fotbollsanläggning. Leverans och montering av 6 meter höga bollfångarnät bakom målen, samt robusta publikstängsel med integrerade evakueringsgrindar längs långsidorna."
  },
  {
    id: 4,
    image: "/src/assets/images/project-4.png",
    type: "Automatiskt Smidesstaket",
    segment: "Privat Villa",
    desc: "Ett exklusivt arkitektritat smidesstaket till en modern privatbostad. Installationen krävde hög precision för att matcha fastighetens formspråk. Inkluderar en måttanpassad motoriserad skjutgrind styrd via GSM och app."
  },
  {
    id: 5,
    image: "/src/assets/images/project-5.png",
    type: "Högsäkerhetsstängsel",
    segment: "Skyddsobjekt",
    desc: "Uppgradering av perimeterskydd för en industrifastighet med förhöjd hotbild. Installation av säkerhetsklassat stängsel förstärkt med rakelbladstråd och sektionerade larmzoner för omedelbar intrångsdetektering."
  },
  {
    id: 6,
    image: "/src/assets/images/project-6.png",
    type: "Park & Områdesavgränsning",
    segment: "Offentlig Miljö",
    desc: "Ett storskaligt projekt för avgränsning av en kommunal parkmiljö. Vi monterade klassiska flätverksstängsel med överliggare som smälter in i naturen, samtidigt som det skapar en tydlig gräns mot trafikerade vägar."
  }
];

export default function Projects() {
  return (
    <main className="w-full pt-20">
      <section className="py-24 bg-[#0f1f2e]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4 block">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Utvalda projekt</h1>
            <p className="text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Vi är stolta över den kvalitet vi levererar. Här presenterar vi ett urval av projekt som visar vår bredd — från högsäkerhetsanläggningar till eleganta villamiljöer.
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
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                    {project.desc}
                  </p>
                  
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
              Varje installation är unik. Vi utgår alltid från era specifika förutsättningar för att leverera ett områdesskydd som håller över tid.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-[#0f1f2e] hover:bg-[#1a2f45] text-white rounded-none h-14 px-8 text-base tracking-wide">
                Kontakta oss idag
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}