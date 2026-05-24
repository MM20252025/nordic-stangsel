import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhiteSrc from "../../assets/images/nordic_logo_white_transparent.png";
import logoLightSrc from "../../assets/images/nordic_logo_horizontal.png";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/projekt", label: "Projekt" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white border-b border-gray-200 shadow-sm"
      : "bg-[#1a3349] border-b border-transparent"
  }`;

  const linkClass = scrolled ? "text-[#0f1f2e]/70 hover:text-[#0f1f2e]" : "text-white/70 hover:text-white";
  const activeLinkClass = scrolled
    ? "text-[#0f1f2e] border-b-2 border-[#0f1f2e] pb-1"
    : "text-white border-b-2 border-white pb-1";

  return (
    <header className={headerClass} data-testid="navbar">
      <div className="container mx-auto px-4 md:px-6 h-[80px] flex items-center justify-between">
        <Link href="/" className="inline-block" data-testid="link-logo">
          {scrolled ? (
            <img src={logoLightSrc} alt="Nordic Stängsel" className="h-10 w-auto" />
          ) : (
            <img src={logoWhiteSrc} alt="Nordic Stängsel" className="h-10 w-auto brightness-110" />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location === link.href ? activeLinkClass : linkClass
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/kontakt" data-testid="link-nav-cta">
            {scrolled ? (
              <Button className="bg-[#1a3349] text-white hover:bg-[#264056] rounded-none transition-all duration-200">
                Få kostnadsfri offert inom 24 timmar
              </Button>
            ) : (
              <Button variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white hover:text-[#0f1f2e] rounded-none transition-all duration-200">
                Få kostnadsfri offert inom 24 timmar
              </Button>
            )}
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 -mr-2 ${scrolled ? "text-[#0f1f2e]" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-20 bg-[#1a3349] z-40 flex flex-col p-6 animate-in slide-in-from-top-2 md:hidden">
          <ul className="flex flex-col gap-6 text-center mt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-medium ${
                    location === link.href ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link href="/kontakt" onClick={() => setIsOpen(false)}>
              <Button size="lg" className="w-full bg-white text-[#0f1f2e] hover:bg-white/90 rounded-none text-lg whitespace-normal leading-snug py-4 h-auto min-h-14">
                Få kostnadsfri offert inom 24 timmar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
