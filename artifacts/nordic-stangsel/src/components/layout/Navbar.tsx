import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NordicLogo } from "@/components/NordicLogo";

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
      setScrolled(window.scrollY >= 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white border-b border-[#0f1f2e]/10 shadow-sm" : "bg-transparent border-transparent"
  }`;

  const linkClass = scrolled ? "text-[#0f1f2e]/70 hover:text-[#0f1f2e]" : "text-white/70 hover:text-white";
  const activeLinkClass = scrolled ? "text-[#0f1f2e] border-b-2 border-[#0f1f2e] pb-1" : "text-white border-b-2 border-white pb-1";
  const mobileBtnClass = scrolled ? "text-[#0f1f2e] p-2 -mr-2" : "text-white p-2 -mr-2";

  return (
    <header className={headerClass} data-testid="navbar">
      <div className="container mx-auto px-4 md:px-6 h-[80px] flex items-center justify-between">
        <Link href="/" className="inline-block" data-testid="link-logo">
          <NordicLogo color={scrolled ? "#0f1f2e" : "white"} />
        </Link>

        {/* Desktop Nav */}
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
              <Button className="bg-[#0f1f2e] text-white hover:bg-[#1a2f45] rounded-none">
                Begär offert
              </Button>
            ) : (
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#0f1f2e] rounded-none">
                Begär offert
              </Button>
            )}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${mobileBtnClass}`}
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