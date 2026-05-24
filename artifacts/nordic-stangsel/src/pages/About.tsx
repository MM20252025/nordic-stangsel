import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroSrc from "../assets/images/hero-om-oss.png";

export default function About() {
  return (
    <main className="w-full pt-20">
      <section className="relative flex h-[50vh] min-h-[400px] w-full items-center bg-[#1a3349]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSrc}
            alt="Om Nordic Stängsel"
            className="h-full w-full object-cover object-center opacity-40 mix-blend-overlay"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/70">Om oss</span>
            <h1 className="mb-6 text-4xl font-serif text-white md:text-6xl">En partner för stängsel, grindar och områdesskydd</h1>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
              Nordic Stängsel hjälper kunder att fatta trygga beslut kring funktion, säkerhet och utförande i Stockholm, Uppsala, Gävle och Västerås.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-3xl font-serif text-[#0f1f2e]">En professionell partner för stängsel och grindar</h2>
              <div className="prose prose-lg max-w-none font-sans text-gray-600">
                <p>
                  Nordic Stängsel arbetar med stängsel- och grindlösningar för företag, skolor, idrottsanläggningar, kommuner, bostadsrättsföreningar och privata villakunder i Stockholm, Uppsala, Gävle och Västerås.
                </p>
                <p>
                  Vår roll är att hjälpa kunder att välja en lösning som fungerar i praktiken, passar platsens förutsättningar och håller ihop både tekniskt och visuellt.
                </p>
                <p>
                  Vi lägger stor vikt vid tydlig projektdialog, snabb återkoppling och ett montage som känns färdigt i varje detalj. Det är så vi vill att Nordic Stängsel ska upplevas som samarbetspartner.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-4 text-2xl font-serif text-[#0f1f2e]">Hur vi arbetar</h3>
              <p className="leading-relaxed text-gray-600">
                Vi börjar med platsens behov och förutsättningar. Därefter konkretiserar vi lösning, omfattning och genomförande på ett sätt som gör projektet lätt att förstå, lättare att besluta om och enklare att genomföra utan onödiga omvägar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4 text-2xl font-serif text-[#0f1f2e]">Vad som är viktigt för oss</h3>
              <p className="leading-relaxed text-gray-600">
                Ett bra resultat kräver tydliga beslut, relevant materialval och ett montage som fungerar över tid. Därför prioriterar vi struktur, precision och ett lugnt samarbete genom hela processen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-serif text-[#0f1f2e] md:text-4xl">Våra arbetssätt</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Kvalitet", desc: "Vi väljer lösningar och utförande med långsiktig funktion och tydlig finish i fokus." },
              { icon: Target, title: "Noggrannhet", desc: "Vi planerar utifrån platsens verkliga förutsättningar i stället för generella standardlösningar." },
              { icon: Leaf, title: "Hållbarhet", desc: "Vi prioriterar lösningar som fungerar i vardagen och är rimliga att förvalta över tid." },
              { icon: Users, title: "Professionalism", desc: "Kommunikation, närvaro på plats och genomförande ska kännas ordnat från start till överlämning." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
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
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/40">Nästa steg</span>
            <h2 className="mb-6 text-3xl font-serif md:text-4xl">Vill du diskutera ett projekt?</h2>
            <p className="mb-10 leading-relaxed text-white/60">
              Beskriv kort projektet så återkommer vi snabbt med rätt nästa steg och kostnadsfri offert inom 24 timmar.
            </p>
            <Link href="/kontakt">
              <Button className="h-12 rounded-none bg-white px-8 text-sm uppercase tracking-widest text-[#0f1f2e] hover:bg-white/90">
                Få kostnadsfri offert inom 24 timmar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
