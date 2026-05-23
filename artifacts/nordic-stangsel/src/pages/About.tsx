import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import aboutHeroSrc from "../assets/images/hero-om-oss.png";

export default function About() {
  return (
    <main className="w-full pt-20">
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroSrc}
            alt="Om Nordic Stängsel"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4 block">Företaget</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Om Nordic Stängsel</h1>
            <p className="text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              En professionell partner för stängsel, grindar och områdesskydd med fokus på tydlig projektering, säker montering och hållbara lösningar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-[#0f1f2e] mb-8">Vi bygger tryggare och tydligare miljöer</h2>
              <div className="prose prose-lg text-gray-600 font-sans max-w-none">
                <p>
                  Nordic Stängsel arbetar med stängsel- och grindlösningar för verksamheter, offentliga miljöer och privata fastigheter. Vårt fokus ligger på funktion, långsiktig hållbarhet och ett utförande som känns genomarbetat från första kontakt till färdig installation.
                </p>
                <p>
                  Vi hjälper kunder som behöver en lösning som både skyddar, styr flöden och passar platsens arkitektur. Det kan handla om industrimiljöer, skolor, idrottsanläggningar, bostadsrättsföreningar eller villor med höga krav på finish och driftsäkerhet.
                </p>
                <p>
                  I varje uppdrag prioriterar vi tydlig kommunikation, realistisk planering och ett noggrant montage. Ambitionen är enkel: att leverera en lösning som fungerar i vardagen och håller över tid.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-4">Vår inriktning</h3>
              <p className="text-gray-600 leading-relaxed">
                Att leverera stängsel- och grindlösningar som kombinerar säkerhet, tydlig funktion och ett mer genomarbetat uttryck än standardalternativen på marknaden.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-4">Vårt arbetssätt</h3>
              <p className="text-gray-600 leading-relaxed">
                Vi arbetar strukturerat med behovsanalys, lösningsförslag, montering och uppföljning, så att varje projekt får rätt nivå av säkerhet, estetik och användbarhet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f2e]">Det vi värdesätter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Kvalitet", desc: "Materialval, detaljer och montage ska hålla en nivå som känns trygg även på lång sikt." },
              { icon: Target, title: "Pålitlighet", desc: "Tydliga besked, realistiska tidplaner och ett arbete som följs upp ordentligt." },
              { icon: Leaf, title: "Hållbarhet", desc: "Lösningar som är anpassade för nordiskt klimat och daglig användning över tid." },
              { icon: Users, title: "Professionalism", desc: "Ett lugnt, noggrant och respektfullt arbetssätt i varje kontakt med kund och på arbetsplats." }
            ].map((val, i) => (
              <motion.div
                key={i}
                className="text-center p-8 bg-white border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mx-auto w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                  <val.icon className="h-7 w-7 text-[#0f1f2e]/60 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif text-[#0f1f2e] mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a3349] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif mb-6">Vilka vi arbetar för</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Vi arbetar med uppdrag där säkerhet, tydliga flöden och ett professionellt uttryck är viktiga delar av helheten.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Skolor</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Kommuner</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Idrottsanläggningar</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Företag</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Bostadsrättsföreningar</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Villaägare</li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-2xl font-serif mb-6">Företagsuppgifter</h3>
              <div className="space-y-6 text-white/80">
                <div>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Huvudkontor</span>
                  <p>Segerstavägen 7B, 741 43 Knivsta</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Region Uppsala</span>
                    <p>+46 18 34 61 11</p>
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Region Stockholm</span>
                    <p>+46 8 35 63 66</p>
                  </div>
                </div>
                <div>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">Organisationsnummer</span>
                  <p>559582-1900</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link href="/kontakt">
                  <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-[#0f1f2e] rounded-none h-12">
                    Kontakta oss <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
