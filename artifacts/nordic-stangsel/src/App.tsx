import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SeoManager } from "@/components/SeoManager";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Integritetspolicy from "@/pages/Integritetspolicy";
import Villkor from "@/pages/Villkor";
import {
  GrindarStockholmPage,
  GrindarUppsalaPage,
  StangselStockholmPage,
  StangselUppsalaPage,
} from "@/pages/LocationPages";
import { OmradesskyddForetagPage, StangselBrfPage } from "@/pages/AudiencePages";
import { IndustristangselPage, VillastangselGrindarPage } from "@/pages/ProductPages";
import {
  AutomatgrindarPage,
  PanelstangselPage,
  SkjutgrindarPage,
  SkolstangselPage,
} from "@/pages/ServiceFocusPages";
import {
  OmradesskyddStockholmPage,
  OmradesskyddUppsalaPage,
  StangselBrfStockholmPage,
  StangselBrfUppsalaPage,
} from "@/pages/AudienceLocationPages";
import { LanguageProvider } from "@/lib/language";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/en" component={Home} />
      <Route path="/stangsel-stockholm" component={StangselStockholmPage} />
      <Route path="/en/stangsel-stockholm" component={StangselStockholmPage} />
      <Route path="/stangsel-uppsala" component={StangselUppsalaPage} />
      <Route path="/en/stangsel-uppsala" component={StangselUppsalaPage} />
      <Route path="/grindar-stockholm" component={GrindarStockholmPage} />
      <Route path="/en/grindar-stockholm" component={GrindarStockholmPage} />
      <Route path="/grindar-uppsala" component={GrindarUppsalaPage} />
      <Route path="/en/grindar-uppsala" component={GrindarUppsalaPage} />
      <Route path="/omradesskydd-foretag" component={OmradesskyddForetagPage} />
      <Route path="/en/omradesskydd-foretag" component={OmradesskyddForetagPage} />
      <Route path="/stangsel-brf" component={StangselBrfPage} />
      <Route path="/en/stangsel-brf" component={StangselBrfPage} />
      <Route path="/industristangsel" component={IndustristangselPage} />
      <Route path="/en/industristangsel" component={IndustristangselPage} />
      <Route path="/villastangsel-grindar" component={VillastangselGrindarPage} />
      <Route path="/en/villastangsel-grindar" component={VillastangselGrindarPage} />
      <Route path="/skolstangsel" component={SkolstangselPage} />
      <Route path="/en/skolstangsel" component={SkolstangselPage} />
      <Route path="/panelstangsel" component={PanelstangselPage} />
      <Route path="/en/panelstangsel" component={PanelstangselPage} />
      <Route path="/automatgrindar" component={AutomatgrindarPage} />
      <Route path="/en/automatgrindar" component={AutomatgrindarPage} />
      <Route path="/skjutgrindar" component={SkjutgrindarPage} />
      <Route path="/en/skjutgrindar" component={SkjutgrindarPage} />
      <Route path="/stangsel-brf-stockholm" component={StangselBrfStockholmPage} />
      <Route path="/en/stangsel-brf-stockholm" component={StangselBrfStockholmPage} />
      <Route path="/stangsel-brf-uppsala" component={StangselBrfUppsalaPage} />
      <Route path="/en/stangsel-brf-uppsala" component={StangselBrfUppsalaPage} />
      <Route path="/omradesskydd-stockholm" component={OmradesskyddStockholmPage} />
      <Route path="/en/omradesskydd-stockholm" component={OmradesskyddStockholmPage} />
      <Route path="/omradesskydd-uppsala" component={OmradesskyddUppsalaPage} />
      <Route path="/en/omradesskydd-uppsala" component={OmradesskyddUppsalaPage} />
      <Route path="/tjanster" component={Services} />
      <Route path="/en/tjanster" component={Services} />
      <Route path="/projekt" component={Projects} />
      <Route path="/en/projekt" component={Projects} />
      <Route path="/om-oss" component={About} />
      <Route path="/en/om-oss" component={About} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/en/kontakt" component={Contact} />
      <Route path="/integritetspolicy" component={Integritetspolicy} />
      <Route path="/en/integritetspolicy" component={Integritetspolicy} />
      <Route path="/villkor" component={Villkor} />
      <Route path="/en/villkor" component={Villkor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <LanguageProvider>
            <ScrollToTop />
            <SeoManager />
            <div className="min-h-screen flex flex-col font-sans">
              <Navbar />
              <div className="flex-1 flex flex-col">
                <Router />
              </div>
              <Footer />
            </div>
          </LanguageProvider>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
