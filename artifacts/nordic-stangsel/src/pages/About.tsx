import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="w-full pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center bg-[#0f1f2e]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero-om-oss.png" 
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
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-[#0f1f2e] mb-8">Vi bygger säkerhet över hela Sverige</h2>
              <div className="prose prose-lg text-gray-600 font-sans max-w-none">
                <p>
                  Nordic Stängsel etablerades med en tydlig övertygelse: stängsel och grindar är inte bara funktionella avskärmningar, de är infrastrukturella investeringar som kräver högsta grad av professionalism och materialkännedom.
                </p>
                <p>
                  Vi är ett premium installationsföretag som vänder sig till kunder med höga krav på kvalitet, leveranssäkerhet och estetik. Med kontor i Uppsala och Stockholm hanterar vi entreprenader över hela landet — från avancerade högsäkerhetsanläggningar för industri, till skräddarsydda smideslösningar för privata fastigheter.
                </p>
                <p>
                  Vår styrka ligger i helheten. Vi hanterar hela kedjan från första projektering och riskbedömning, genom markarbete och installation, fram till färdigbesiktning. Våra montörer är certifierade experter som förstår vikten av noggrannhet, oavsett om det handlar om en enskild villagrind eller kilometerlånga industristängsel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-4">Vår vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Att vara Sveriges mest pålitliga och kvalitetsmedvetna leverantör av områdesskydd. Vi ska driva branschstandarden framåt gällande montagekvalitet, säkerhet och kundupplevelse.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-4">Vårt uppdrag</h3>
              <p className="text-gray-600 leading-relaxed">
                Att erbjuda trygga, hållbara och estetiskt tilltalande lösningar som skyddar människor, egendom och värden. Vi levererar säkerhet som håller för framtiden.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f2e]">Våra Kärnvärden</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Kvalitet", desc: "Vi kompromissar aldrig med materialval eller utförande. Rätt från början." },
              { icon: Target, title: "Pålitlighet", desc: "Vi håller vad vi lovar, levererar i tid och kommunicerar rakt och ärligt." },
              { icon: Leaf, title: "Hållbarhet", desc: "Svenska stålprodukter byggda för att klara nordiskt klimat under decennier." },
              { icon: Users, title: "Professionalism", desc: "Våra montörer uppträder alltid med högsta yrkesheder ute hos kund." }
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

      {/* Customers & Details */}
      <section className="py-24 bg-[#0f1f2e] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            <div>
              <h3 className="text-2xl font-serif mb-6">Vilka vi arbetar för</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Vi har kapacitet att hantera projekt i alla storlekar. Våra uppdragsgivare återfinns inom både privat och offentlig sektor.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Byggföretag & Entreprenörer</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Kommuner & Myndigheter</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Industrier & Logistik</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Skolor & Förskolor</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Idrottsföreningar</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Fastighetsbolag & BRF</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/40"></div> Privata villaägare</li>
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