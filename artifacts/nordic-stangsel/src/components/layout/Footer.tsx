import { Link } from "wouter";
import logoSrc from "@assets/nordic_horizontal_black_centered_1779516240284.png";

export function Footer() {
  return (
    <footer className="bg-[#0f1f2e] text-white pt-16 pb-8 border-t border-white/10" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src={logoSrc}
                alt="Nordic Stängsel"
                className="h-12 w-auto brightness-125"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium stängsel och grindlösningar för företag, kommuner och villor över hela Sverige.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 font-serif">Kontakt</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">HUVUDKONTOR</span>
                Segerstavägen 7B<br />
                741 43 Knivsta
              </li>
              <li>
                <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">UPPSALA</span>
                +46 18 34 61 11
              </li>
              <li>
                <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">STOCKHOLM</span>
                +46 8 35 63 66
              </li>
              <li>
                <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">ORG.NR</span>
                559582-1900
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 font-serif">Tjänster</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/tjanster" className="hover:text-white transition-colors">Industristängsel</Link></li>
              <li><Link href="/tjanster" className="hover:text-white transition-colors">Förskolestängsel</Link></li>
              <li><Link href="/tjanster" className="hover:text-white transition-colors">Idrottsanläggningar</Link></li>
              <li><Link href="/tjanster" className="hover:text-white transition-colors">Säkerhetsstängsel</Link></li>
              <li><Link href="/tjanster" className="hover:text-white transition-colors">Automatiska grindar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 font-serif">Företag</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/projekt" className="hover:text-white transition-colors">Våra projekt</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Begär offert</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakta oss</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Nordic Stängsel AB. Alla rättigheter förbehållna.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="hover:text-white/80 cursor-pointer">Integritetspolicy</span>
            <span className="hover:text-white/80 cursor-pointer">Villkor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}