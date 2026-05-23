import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, MapPin, Clock, Hammer, ShieldCheck, Factory, School, Home as HomeIcon, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import logoTransparentSrc from "../assets/images/nordic_logo_white_transparent.png";

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. Hero section */}
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center bg-[#0f1f2e]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero-tjanster.png" 
            alt="Professionell stängselmontering" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0c1824]/35"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1824]/25 via-transparent to-[#0c1824]/55"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img
              src={logoTransparentSrc}
              alt="Nordic Stängsel"
              className="h-24 md:h-32 lg:h-36 w-auto mb-12 brightness-125 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            />

            <div className="w-10 h-[1px] bg-white/30 mb-8"></div>

            <h1 className="text-[1.875rem] leading-[1.2] md:text-[2.75rem] md:leading-[1.1] lg:text-[3.5rem] lg:leading-[1.08] font-serif font-medium text-white mb-6 max-w-4xl">
              Professionella stängsel och grindlösningar för företag, skolor, idrottsanläggningar och villor
            </h1>

            <p className="text-sm md:text-base text-white/60 font-light max-w-sm mb-12 leading-relaxed tracking-wide">
              Genomtänkta lösningar med professionell montering i Sverige.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt">
                <Button className="bg-white text-[#0c1824] hover:bg-white/90 font-medium rounded-none h-12 px-8 text-sm tracking-widest uppercase transition-all duration-200 w-full sm:w-auto">
                  Begär offert
                </Button>
              </Link>
              <Link href="/projekt">
                <Button variant="outline" className="bg-transparent text-white border border-white/30 hover:border-white/70 hover:bg-white/5 rounded-none h-12 px-8 text-sm tracking-widest uppercase transition-all duration-200 w-full sm:w-auto">
                  Våra projekt
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60px] flex items-center border-t border-white/10 z-10">
          <div className="container mx-auto px-4 md:px-6 flex items-center gap-8 text-white/40 text-xs uppercase tracking-[0.2em]">
            <span>Uppsala: +46 18 34 61 11</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Stockholm: +46 8 35 63 66</span>
          </div>
        </div>
      </section>

      {/* 2. Trust section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { icon: Hammer, title: "Professionell montering", desc: "Erfarna montörer säkerställer högsta kvalitet." },
              { icon: MapPin, title: "Hela Sverige", desc: "Kontor i Uppsala och Stockholm — rikstäckande." },
              { icon: ShieldCheck, title: "Hållbara material", desc: "Svensk kvalitet byggd för nordiskt klimat." },
              { icon: Clock, title: "Snabb offert", desc: "Tydliga priser och snabb återkoppling." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-start px-8 py-10 first:pl-0 last:pr-0 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <item.icon className="h-7 w-7 text-[#0f1f2e]/50 mb-5 stroke-[1.5]" />
                <h3 className="font-serif text-base text-[#0f1f2e] mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services section */}
      <section className="py-28 bg-white">
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
                  className="group block p-8 border border-gray-100 hover:border-[#0f1f2e] transition-all bg-white hover:bg-[#0f1f2e] cursor-pointer h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <service.icon className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors mb-6 stroke-[1.5]" />
                  <h3 className="font-serif text-xl text-[#0f1f2e] group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{service.desc}</p>
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
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-200 relative">
                <div className="absolute inset-0 bg-[#0f1f2e]/0 group-hover:bg-[#0f1f2e]/20 transition-all duration-500 z-10"></div>
                <img src="/src/assets/images/project-1.png" alt="Industristängsel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Industrifastighet</span>
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">Säkerhetsstängsel</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Komplett installation av 2.4m högt säkerhetsstängsel med motoriserad skjutgrind för logistikcenter.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] group-hover:text-[#0f1f2e] transition-colors">
                Läs mer <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-2" />
              </span>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-200 relative">
                <div className="absolute inset-0 bg-[#0f1f2e]/0 group-hover:bg-[#0f1f2e]/20 transition-all duration-500 z-10"></div>
                <img src="/src/assets/images/project-2.png" alt="Skolfencing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Kommunal skola</span>
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">Panelstängsel</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Säker inhägnad av nybyggd förskola med barnsäkra grindar och robusta nätpaneler.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] group-hover:text-[#0f1f2e] transition-colors">
                Läs mer <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-2" />
              </span>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-200 relative">
                <div className="absolute inset-0 bg-[#0f1f2e]/0 group-hover:bg-[#0f1f2e]/20 transition-all duration-500 z-10"></div>
                <img src="/src/assets/images/project-3.png" alt="Idrottsanläggning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Sport & Fritid</span>
              <h3 className="text-2xl font-serif text-[#0f1f2e] mb-3">Bollfångarnät</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Höga stängsel för ny utomhusarena inklusive specialanpassade publikgrindar och entréer.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[#0f1f2e] group-hover:text-[#0f1f2e] transition-colors">
                Läs mer <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-2" />
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
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 bg-[#1a2f45] border border-white/20 items-center justify-center font-serif text-lg z-10">
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
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Omdömen</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f2e]">Vad säger våra kunder?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-white p-8 border border-gray-100 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-6 text-[#0f1f2e]/70">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="font-medium text-[#0f1f2e] text-sm">{review.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{review.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quote Section */}
      <section className="py-24 bg-[#0f1f2e]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 block">Kostnadsfri offert</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Begär offert</h2>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}