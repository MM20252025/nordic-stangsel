import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhiteSrc from "../../assets/images/nordic_logo_white_transparent.png";

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
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#0f1f2e]/96 backdrop-blur border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
      : "bg-[#1a3349] border-b border-transparent"
  }`;

  const linkClass = scrolled ? "text-white/75 hover:text-white" : "text-white/70 hover:text-white";
  const activeLinkClass = "text-white border-b-2 border-white pb-1";

  return (
    <header className={headerClass} data-testid="navbar">
      <div className="container mx-auto px-4 md:px-6 h-[80px] flex items-center justify-between">
        <Link href="/" className="inline-block" data-testid="link-logo">
          <img
            src={logoWhiteSrc}
            alt="Nordic Stängsel"
            className="h-10 w-auto brightness-110"
          />
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
            <Button className="bg-white text-[#0f1f2e] hover:bg-white/90 rounded-none transition-all duration-200">
              Begär offert
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-white"
          onClick={() => setIsOpen((open) => !open)}
          data-testid="button-mobile-menu"
          aria-expanded={isOpen}
          aria-label="Öppna meny"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-20 bg-[#0f1f2e] z-40 flex flex-col p-6 animate-in slide-in-from-top-2 md:hidden">
          <ul className="flex flex-col gap-6 text-center mt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
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
            <Link href="/kontakt">
              <Button size="lg" className="w-full bg-white text-[#0f1f2e] hover:bg-white/90 rounded-none text-lg">
                Begär offert
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
