import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroSrc from "../assets/images/hero-om-oss.png";

export default function About() {
  return (
    <main className="w-full pt-20">
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSrc}
            alt="Om Nordic Stängsel"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4 block">Om oss</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Nordic Stängsel</h1>
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
              <h2 className="text-3xl font-serif text-[#0f1f2e] mb-8">En professionell partner för stängsel och grindar</h2>
              <div className="prose prose-lg text-gray-600 font-sans max-w-none">
                <p>
                  Nordic Stängsel arbetar med stängsel- och grindlösningar för företag, skolor, idrottsanläggningar, kommuner, bostadsrättsföreningar och privata villakunder i Stockholm, Uppsala, Gävle och Västerås.
                </p>
                <p>
                  Vår roll är att hjälpa kunder att välja en lösning som fungerar i praktiken, passar platsens förutsättningar och håller ihop både tekniskt och visuellt.
                </p>
                <p>
                  Vi lägger stor vikt vid tydlig projektdialog, genomtänkt planering och ett montage som känns färdigt i varje detalj. Det är så vi vill att Nordic Stängsel ska upplevas som samarbetspartner.
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
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-4">Hur vi arbetar</h3>
              <p className="text-gray-600 leading-relaxed">
                Vi börjar med platsens behov och förutsättningar. Därefter konkretiserar vi lösning, omfattning och genomförande på ett sätt som gör projektet lätt att förstå och lättare att besluta om.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-4">Vad som är viktigt för oss</h3>
              <p className="text-gray-600 leading-relaxed">
                Ett bra resultat kräver tydliga beslut, relevant materialval och ett montage som fungerar över tid. Därför prioriterar vi struktur, precision och ett lugnt samarbete genom hela processen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f2e]">Våra arbetssätt</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Kvalitet", desc: "Vi väljer lösningar och utförande med långsiktig funktion och tydlig finish i fokus." },
              { icon: Target, title: "Noggrannhet", desc: "Vi planerar utifrån platsens verkliga förutsättningar i stället för generella standardlösningar." },
              { icon: Leaf, title: "Hållbarhet", desc: "Vi prioriterar lösningar som fungerar i vardagen och är rimliga att förvalta över tid." },
              { icon: Users, title: "Professionalism", desc: "Kommunikation, närvaro på plats och genomförande ska kännas ordnat från start till överlämning." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-white border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mx-auto w-14 h-14 bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-[#0f1f2e]/60 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif text-[#0f1f2e] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a3349] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 block">Nästa steg</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Vill du diskutera ett projekt?</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Vi hjälper dig gärna vidare med rätt lösning för platsen, användningen och de krav projektet ställer.
            </p>
            <Link href="/kontakt">
              <Button className="bg-white text-[#0f1f2e] hover:bg-white/90 rounded-none h-12 px-8 text-sm tracking-widest uppercase">
                Kontakta oss
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
