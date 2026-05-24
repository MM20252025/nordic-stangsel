import { Switch, Route, Router as WouterRouter } from "wouter";
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
import { LanguageProvider } from "@/lib/language";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/en" component={Home} />
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
