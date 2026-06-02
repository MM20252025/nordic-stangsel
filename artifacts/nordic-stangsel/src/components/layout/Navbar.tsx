import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhiteSrc from "../../assets/images/nordic_logo_white_transparent.png";
import logoLightSrc from "../../assets/images/nordic_logo_horizontal.png";
import { useLanguage } from "@/lib/language";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590332861296&sk=about";
const INSTAGRAM_URL = "https://www.instagram.com/nordic_stangselab/";

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 512" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0C152.14 0 104.28 44.38 104.28 124.72v70.62H23V288h81.28v224h100.17V288z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, localizePath } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const navLinks = language === "sv"
    ? [
        { href: "/", label: "Start" },
        { href: "/tjanster", label: "Tjänster" },
        { href: "/projekt", label: "Projekt" },
        { href: "/om-oss", label: "Om oss" },
        { href: "/kontakt", label: "Kontakt" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/tjanster", label: "Services" },
        { href: "/projekt", label: "Projects" },
        { href: "/om-oss", label: "About" },
        { href: "/kontakt", label: "Contact" },
      ];

  const ctaLabel = language === "sv" ? "Få kostnadsfri offert inom 24 timmar" : "Get a free quote within 24 hours";
  const openLabel = language === "sv" ? "Öppna meny" : "Open menu";
  const closeLabel = language === "sv" ? "Stäng meny" : "Close menu";
  const facebookAriaLabel = language === "sv" ? "Nordic Stängsel på Facebook" : "Nordic Stängsel on Facebook";
  const instagramAriaLabel = language === "sv" ? "Nordic Stängsel på Instagram" : "Nordic Stängsel on Instagram";

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
  const switcherBase = scrolled ? "border-gray-300 bg-white text-[#0f1f2e]" : "border-white/30 bg-white/5 text-white";
  const switcherActive = scrolled ? "bg-[#1a3349] text-white border-[#1a3349]" : "bg-white text-[#0f1f2e] border-white";
  const socialIconButtonClass = "border-[#315f97] bg-[#315f97] text-white hover:border-[#3c70ad] hover:bg-[#3c70ad]";

  return (
    <header className={headerClass} data-testid="navbar">
      <div className="container mx-auto flex h-[80px] items-center justify-between px-4 md:px-6">
        <Link href={localizePath("/")} className="inline-block" data-testid="link-logo" onClick={scrollToTop}>
          {scrolled ? (
            <img src={logoLightSrc} alt="Nordic Stängsel" className="h-10 w-auto" />
          ) : (
            <img src={logoWhiteSrc} alt="Nordic Stängsel" className="h-10 w-auto brightness-110" />
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const localizedHref = localizePath(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={localizedHref}
                    onClick={scrollToTop}
                    className={`text-sm font-medium transition-colors ${
                      location === localizedHref ? activeLinkClass : linkClass
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex items-center gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={facebookAriaLabel}
                title={facebookAriaLabel}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-[3px] border transition-colors ${socialIconButtonClass}`}
                data-testid="button-nav-facebook"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={instagramAriaLabel}
                title={instagramAriaLabel}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-[3px] border transition-colors ${socialIconButtonClass}`}
                data-testid="button-nav-instagram"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage("sv")}
              className={`min-w-10 border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${switcherBase} ${language === "sv" ? switcherActive : ""}`}
              aria-pressed={language === "sv"}
            >
              SV
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`min-w-10 border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${switcherBase} ${language === "en" ? switcherActive : ""}`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <Link href={localizePath("/kontakt")} data-testid="link-nav-cta" onClick={scrollToTop}>
            {scrolled ? (
              <Button className="rounded-none bg-[#1a3349] text-white transition-all duration-200 hover:bg-[#264056]">
                {ctaLabel}
              </Button>
            ) : (
              <Button variant="outline" className="rounded-none border-white/50 bg-transparent text-white transition-all duration-200 hover:bg-white hover:text-[#0f1f2e]">
                {ctaLabel}
              </Button>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={facebookAriaLabel}
            title={facebookAriaLabel}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[3px] border transition-colors ${socialIconButtonClass}`}
            data-testid="button-mobile-header-facebook"
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={instagramAriaLabel}
            title={instagramAriaLabel}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[3px] border transition-colors ${socialIconButtonClass}`}
            data-testid="button-mobile-header-instagram"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <button
            className={`-mr-2 p-2 ${scrolled ? "text-[#0f1f2e]" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? closeLabel : openLabel}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-[#1a3349] p-6 animate-in slide-in-from-top-2 md:hidden">
          <div className="mb-8 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage("sv")}
              className={`min-w-12 border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${language === "sv" ? "border-white bg-white text-[#0f1f2e]" : "border-white/30 bg-white/5 text-white"}`}
              aria-pressed={language === "sv"}
            >
              SV
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`min-w-12 border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${language === "en" ? "border-white bg-white text-[#0f1f2e]" : "border-white/30 bg-white/5 text-white"}`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <ul className="mt-8 flex flex-col gap-6 text-center">
            {navLinks.map((link) => {
              const localizedHref = localizePath(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={localizedHref}
                    onClick={() => {
                      scrollToTop();
                      setIsOpen(false);
                    }}
                    className={`text-2xl font-medium ${location === localizedHref ? "text-white" : "text-white/70"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex justify-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={facebookAriaLabel}
                title={facebookAriaLabel}
                onClick={() => setIsOpen(false)}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-[3px] border transition-colors ${socialIconButtonClass}`}
                data-testid="button-mobile-menu-facebook"
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={instagramAriaLabel}
                title={instagramAriaLabel}
                onClick={() => setIsOpen(false)}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-[3px] border transition-colors ${socialIconButtonClass}`}
                data-testid="button-mobile-menu-instagram"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
          <div className="mt-12 text-center">
            <Link href={localizePath("/kontakt")} onClick={() => {
              scrollToTop();
              setIsOpen(false);
            }}>
              <Button size="lg" className="h-auto min-h-14 w-full whitespace-normal rounded-none bg-white py-4 text-lg leading-snug text-[#0f1f2e] hover:bg-white/90">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
