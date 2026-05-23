import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, MapPin, Clock, Hammer, ShieldCheck, Factory, School, Home as HomeIcon, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. Hero section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center bg-[#0f1f2e]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero-home.png" 
            alt="Professionell stängselmontering" 
            className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f2e] via-[#0f1f2e]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
                Professionella stängsel och grindlösningar för företag, skolor, idrottsanläggningar och villor
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
                Moderna, säkra och hållbara lösningar med professionell montering i hela Sverige.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-white text-[#0f1f2e] hover:bg-gray-100 rounded-none h-14 px-8 text-base tracking-wide w-full sm:w-auto">
                    Begär offert
                  </Button>
                </Link>
                <Link href="/projekt">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white rounded-none h-14 px-8 text-base tracking-wide w-full sm:w-auto">
                    Våra projekt
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scrolla</span>
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-white absolute top-0"
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Trust section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="flex flex-col items-start p-6 bg-white border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Hammer className="h-8 w-8 text-[#0f1f2e] mb-4 stroke-[1.5]" />
              <h3 className="font-semibold text-lg text-[#0f1f2e] mb-2 font-serif">Professionell montering</h3>
              <p className="text-gray-500 text-sm">Erfarna montörer säkerställer högsta kvalitet.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-start p-6 bg-white border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <MapPin className="h-8 w-8 text-[#0f1f2e] mb-4 stroke-[1.5]" />
              <h3 className="font-semibold text-lg text-[#0f1f2e] mb-2 font-serif">Hela Sverige</h3>
              <p className="text-gray-500 text-sm">Lokala kontor i Uppsala och Stockholm, rikstäckande.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-start p-6 bg-white border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ShieldCheck className="h-8 w-8 text-[#0f1f2e] mb-4 stroke-[1.5]" />
              <h3 className="font-semibold text-lg text-[#0f1f2e] mb-2 font-serif">Hållbara material</h3>
              <p className="text-gray-500 text-sm">Svensk kvalitet byggd för nordiskt klimat.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-start p-6 bg-white border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Clock className="h-8 w-8 text-[#0f1f2e] mb-4 stroke-[1.5]" />
              <h3 className="font-semibold text-lg text-[#0f1f2e] mb-2 font-serif">Snabb offert</h3>
              <p className="text-gray-500 text-sm">Tydliga priser och snabb återkoppling.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Expertis</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f2e]">Våra tjänster</h2>
            </div>
            <Link href="/tjanster">
              <Button variant="ghost" className="hover:bg-transparent text-[#0f1f2e] hover:text-[#1a2f45] p-0 group">
                Se alla tjänster <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Industristängsel", icon: Factory, desc: "Robusta lösningar för industriområden och logistikcentra." },
              { title: "Förskolestängsel", icon: School, desc: "Säkra och hållbara stängsel för förskolor och skolor." },
              { title: "Idrottsanläggningar", icon: Shield, desc: "Höga stängsel anpassade för sport och bollplaner." },
              { title: "Säkerhetsstängsel", icon: ShieldCheck, desc: "Högsta säkerhetsklass för skyddsobjekt." },
              { title: "Villastängsel", icon: HomeIcon, desc: "Eleganta stängsel och grindar för privata bostäder." },
              { title: "Automatiska grindar", icon: ChevronRight, desc: "Smarta grindlösningar för bekväm inpassering." },
            ].map((service, i) => (
              <Link key={i} href="/tjanster">
                <motion.div 
                  className="group block p-8 border border-gray-100 hover:border-gray-300 transition-all bg-white hover:bg-gray-50 cursor-pointer h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <service.icon className="h-8 w-8 text-gray-400 group-hover:text-[#0f1f2e] transition-colors mb-6 stroke-[1.5]" />
                  <h3 className="font-serif text-xl text-[#0f1f2e] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Referenser</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f2e]">Utvalda projekt</h2>
            </div>
            <Link href="/projekt">
              <Button variant="ghost" className="hover:bg-transparent text-[#0f1f2e] hover:text-[#1a2f45] p-0 group">
                Se alla projekt <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-200">
                <img src="/src/assets/images/project-1.png" alt="Industristängsel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Industrifastighet</span>
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">Säkerhetsstängsel</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Komplett installation av 2.4m högt säkerhetsstängsel med motoriserad skjutgrind för logistikcenter.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] group-hover:text-blue-700 transition-colors">
                Läs mer <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-200">
                <img src="/src/assets/images/project-2.png" alt="Skolfencing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Kommunal skola</span>
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">Panelstängsel</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Säker inhägnad av nybyggd förskola med barnsäkra grindar och robusta nätpaneler.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] group-hover:text-blue-700 transition-colors">
                Läs mer <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-200">
                <img src="/src/assets/images/project-3.png" alt="Idrottsanläggning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Sport & Fritid</span>
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">Bollfångarnät</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Höga stängsel för ny utomhusarena inklusive specialanpassade publikgrindar och entréer.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] group-hover:text-blue-700 transition-colors">
                Läs mer <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5 & 6. Why choose us / Process */}
      <section className="py-24 bg-[#0f1f2e] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 block">Fördelar</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-10">Varför Nordic Stängsel?</h2>
              
              <ul className="space-y-8">
                {[
                  { title: "Kompromisslös Kvalitet", desc: "Vi arbetar uteslutande med högkvalitativa material anpassade för det nordiska klimatet." },
                  { title: "Rikstäckande Kapacitet", desc: "Med utgångspunkt i Uppsala och Stockholm hanterar vi projekt över hela Sverige." },
                  { title: "Lång Erfarenhet", desc: "Våra montörer besitter den kunskap som krävs för komplexa och krävande installationer." },
                  { title: "Totalentreprenad", desc: "Från första projektering till slutbesiktning — vi tar ett helhetsansvar för din installation." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-white/40 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-serif mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 w-[1px] bg-white/10 hidden md:block"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 block">Arbetsgång</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-10">Vår arbetsprocess</h2>

              <div className="space-y-12">
                {[
                  { step: "01", title: "Kontakt & Offert", desc: "En första genomgång av era behov följt av ett tydligt prisförslag." },
                  { step: "02", title: "Projektering", desc: "Mätning på plats, materialval och planering av genomförande." },
                  { step: "03", title: "Montering", desc: "Effektivt och fackmannamässigt montage utfört av våra egna team." },
                  { step: "04", title: "Slutbesiktning", desc: "Gemensam genomgång av leveransen för att säkerställa högsta kvalitet." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="relative flex gap-8 md:pl-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#1a2f45] border border-white/20 items-center justify-center font-serif text-lg z-10">
                      {item.step}
                    </div>
                    <div className="md:hidden text-2xl font-serif text-white/30 pt-1">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Reviews */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Omdömen</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f2e]">Vad säger våra kunder?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Mycket professionellt utförande från start till mål. Stängslet kring vår logistikanläggning levererades enligt tidplan och kvaliteten är över förväntan.",
                role: "Platschef",
                company: "Logistikcenter, Stockholm"
              },
              {
                text: "Vi anlitade Nordic Stängsel för en förskola. Montörerna var tillmötesgående, noga med säkerheten och resultatet blev en trygg och snygg miljö.",
                role: "Projektledare",
                company: "Kommunal fastighetsförvaltning"
              },
              {
                text: "Fantastisk service. Det automatiska skjutgrindsystemet till vår bostadsrättsförening fungerar felfritt och installationen gick väldigt smidigt.",
                role: "Styrelseordförande",
                company: "BRF, Uppsala"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                className="bg-gray-50 p-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-6 text-[#0f1f2e]">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-[#0f1f2e] text-sm">{review.role}</p>
                  <p className="text-xs text-gray-500">{review.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quote Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}