import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always keep it dark navy
  const headerClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0f1f2e] border-b border-white/10";

  return (
    <header className={headerClass} data-testid="navbar">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col text-white group" data-testid="link-logo">
          <span className="font-sans font-bold tracking-[0.2em] text-xl leading-none">NORDIC</span>
          <span className="font-sans font-light tracking-[0.3em] text-xs text-white/80 group-hover:text-white transition-colors">STÄNGSEL</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    location === link.href ? "text-white border-b-2 border-white pb-1" : "text-white/70"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/kontakt" data-testid="link-nav-cta">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#0f1f2e] rounded-none">
              Begär offert
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-[#0f1f2e] z-40 flex flex-col p-6 animate-in slide-in-from-top-2 md:hidden">
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