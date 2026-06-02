import { Link } from "wouter";
import logoSrc from "../../assets/images/nordic_logo_white_transparent.png";
import { useLanguage } from "@/lib/language";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590332861296&sk=about";

export function Footer() {
  const { language, localizePath } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const content = language === "sv"
    ? {
        description: "Premium stängsel och grindlösningar för företag, kommuner och villor i Stockholm, Uppsala och Mälardalen.",
        contact: "Kontakt",
        headOffice: "HUVUDKONTOR",
        email: "E-POST",
        services: "Tjänster",
        company: "Företag",
        about: "Om oss",
        projects: "Våra projekt",
        quote: "Få kostnadsfri offert inom 24 timmar",
        contactUs: "Kontakta oss",
        privacy: "Integritetspolicy",
        terms: "Villkor",
        rights: "Alla rättigheter förbehållna.",
      }
    : {
        description: "Premium fencing and gate solutions for companies, municipalities and villas in Stockholm, Uppsala and the Mälardalen region.",
        contact: "Contact",
        headOffice: "HEAD OFFICE",
        email: "EMAIL",
        services: "Services",
        company: "Company",
        about: "About",
        projects: "Our projects",
        quote: "Get a free quote within 24 hours",
        contactUs: "Contact us",
        privacy: "Privacy Policy",
        terms: "Terms",
        rights: "All rights reserved.",
      };

  const serviceLinks = language === "sv"
    ? ["Industristängsel", "Skolstängsel", "Idrottsanläggningar", "Säkerhetsstängsel", "Automatiska grindar"]
    : ["Industrial fencing", "School fencing", "Sports facilities", "Security fencing", "Automatic gates"];

  const footerFacebookLabel = language === "sv" ? "Nordic Stängsel på Facebook" : "Nordic Stängsel on Facebook";

  return (
    <footer className="border-t border-white/10 bg-[#1a3349] pb-8 pt-16 text-white" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link href={localizePath("/")} className="mb-6 inline-block" onClick={scrollToTop}>
              <img src={logoSrc} alt="Nordic Stängsel" className="h-10 w-auto brightness-110" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">{content.description}</p>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">{content.contact}</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">{content.headOffice}</span>
                Vårsångsvägen 4<br />
                741 43 Knivsta
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">UPPSALA</span>
                +46 18 34 61 11
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">STOCKHOLM</span>
                +46 8 35 63 66
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">{content.email}</span>
                <a href="mailto:info@nordicstangsel.com" className="transition-colors hover:text-white">info@nordicstangsel.com</a>
              </li>
              <li>
                <span className="mb-2 block text-xs uppercase tracking-wider text-white/40">FACEBOOK</span>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footerFacebookLabel}
                  className="inline-flex min-h-10 items-center justify-center rounded-none border border-white bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1a3349] transition-colors hover:bg-white/90"
                  data-testid="button-footer-contact-facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">ORG.NR</span>
                559582-1900
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">{content.services}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link href={localizePath("/tjanster")} className="transition-colors hover:text-white" onClick={scrollToTop}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">{content.company}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href={localizePath("/om-oss")} className="transition-colors hover:text-white" onClick={scrollToTop}>{content.about}</Link></li>
              <li><Link href={localizePath("/projekt")} className="transition-colors hover:text-white" onClick={scrollToTop}>{content.projects}</Link></li>
              <li><Link href={localizePath("/kontakt")} className="transition-colors hover:text-white" onClick={scrollToTop}>{content.quote}</Link></li>
              <li><Link href={localizePath("/kontakt")} className="transition-colors hover:text-white" onClick={scrollToTop}>{content.contactUs}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 text-center text-xs text-white/40 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Nordic Stängsel AB. {content.rights}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:mt-0 md:justify-end">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center justify-center rounded-none border border-white/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#1a3349]"
              aria-label={footerFacebookLabel}
              data-testid="button-footer-facebook"
            >
              Facebook
            </a>
            <Link href={localizePath("/integritetspolicy")} className="transition-colors hover:text-white/80" onClick={scrollToTop}>{content.privacy}</Link>
            <Link href={localizePath("/villkor")} className="transition-colors hover:text-white/80" onClick={scrollToTop}>{content.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
