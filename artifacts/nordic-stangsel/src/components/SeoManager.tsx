import { useEffect } from "react";
import { useLocation } from "wouter";
import { buildLocalizedPath, stripLanguagePrefix, useLanguage } from "@/lib/language";

const SITE_URL = "https://nordicstangsel.com";

const seoByRoute = {
  "/": {
    sv: {
      title: "Stängsel och grindar i Stockholm, Uppsala och Mälardalen | Nordic Stängsel",
      description: "Stängsel, grindar och områdesskydd för företag, skolor, BRF:er och villor. Få kostnadsfri offert inom 24 timmar i Stockholm, Uppsala och Mälardalen.",
    },
    en: {
      title: "Fencing and gates in Stockholm, Uppsala and Mälardalen | Nordic Stängsel",
      description: "Fencing, gates and perimeter protection for companies, schools, housing associations and villas. Get a free quote within 24 hours in Stockholm, Uppsala and the Mälardalen region.",
    },
  },
  "/tjanster": {
    sv: {
      title: "Tjänster | Stängsel, grindar och områdesskydd | Nordic Stängsel",
      description: "Industristängsel, skolstängsel, säkerhetsstängsel, grindar och kundanpassade lösningar i Stockholm, Uppsala och Mälardalen.",
    },
    en: {
      title: "Services | Fencing, gates and perimeter protection | Nordic Stängsel",
      description: "Industrial fencing, school fencing, security fencing, gates and custom solutions in Stockholm, Uppsala and the Mälardalen region.",
    },
  },
  "/projekt": {
    sv: {
      title: "Projekt | Referenser och projektmiljöer | Nordic Stängsel",
      description: "Se projektmiljöer och referensnära exempel på stängsel, grindar och områdesskydd för företag, skolor och fastigheter.",
    },
    en: {
      title: "Projects | Reference environments and project types | Nordic Stängsel",
      description: "See project environments and reference-led examples of fencing, gates and perimeter protection for companies, schools and properties.",
    },
  },
  "/om-oss": {
    sv: {
      title: "Om oss | Nordic Stängsel",
      description: "Lär känna Nordic Stängsel som partner för stängsel, grindar och områdesskydd i Stockholm, Uppsala och Mälardalen.",
    },
    en: {
      title: "About | Nordic Stängsel",
      description: "Get to know Nordic Stängsel as a partner for fencing, gates and perimeter protection in Stockholm, Uppsala and the Mälardalen region.",
    },
  },
  "/kontakt": {
    sv: {
      title: "Kontakt | Få kostnadsfri offert inom 24 timmar | Nordic Stängsel",
      description: "Kontakta Nordic Stängsel för stängsel, grindar och områdesskydd. Få kostnadsfri offert inom 24 timmar i Stockholm, Uppsala och Mälardalen.",
    },
    en: {
      title: "Contact | Get a free quote within 24 hours | Nordic Stängsel",
      description: "Contact Nordic Stängsel for fencing, gates and perimeter protection. Get a free quote within 24 hours in Stockholm, Uppsala and the Mälardalen region.",
    },
  },
  "/integritetspolicy": {
    sv: {
      title: "Integritetspolicy | Nordic Stängsel",
      description: "Läs Nordic Stängsels integritetspolicy och hur vi behandlar personuppgifter.",
    },
    en: {
      title: "Privacy Policy | Nordic Stängsel",
      description: "Read Nordic Stängsel's privacy policy and how we process personal data.",
    },
  },
  "/villkor": {
    sv: {
      title: "Villkor | Nordic Stängsel",
      description: "Läs Nordic Stängsels allmänna villkor för offerter, beställningar, leverans och ansvar.",
    },
    en: {
      title: "Terms & Conditions | Nordic Stängsel",
      description: "Read Nordic Stängsel's general terms for quotes, orders, delivery and liability.",
    },
  },
} as const;

function upsertMeta(selector: string, attribute: "name" | "property", value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector.includes("[") ? "" : value);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, selector.match(/\"(.+)\"/)?.[1] ?? value);
  element.setAttribute("content", value);
}

function upsertNamedMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) {
      element.setAttribute("hreflang", hreflang);
    }
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function SeoManager() {
  const [location] = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const route = stripLanguagePrefix(location);
    const seo = seoByRoute[route as keyof typeof seoByRoute] ?? seoByRoute["/"];
    const localizedSeo = seo[language];
    const canonicalPath = buildLocalizedPath(route, language);
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const svUrl = `${SITE_URL}${buildLocalizedPath(route, "sv")}`;
    const enUrl = `${SITE_URL}${buildLocalizedPath(route, "en")}`;

    document.title = localizedSeo.title;
    document.documentElement.lang = language;

    upsertNamedMeta("description", localizedSeo.description);
    upsertNamedMeta("twitter:title", localizedSeo.title);
    upsertNamedMeta("twitter:description", localizedSeo.description);
    upsertNamedMeta("twitter:url", canonicalUrl);

    upsertPropertyMeta("og:title", localizedSeo.title);
    upsertPropertyMeta("og:description", localizedSeo.description);
    upsertPropertyMeta("og:url", canonicalUrl);
    upsertPropertyMeta("og:locale", language === "sv" ? "sv_SE" : "en_GB");

    upsertLink("canonical", canonicalUrl);
    upsertLink("alternate", svUrl, "sv");
    upsertLink("alternate", enUrl, "en");
    upsertLink("alternate", svUrl, "x-default");
  }, [language, location]);

  return null;
}
