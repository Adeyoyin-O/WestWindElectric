import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ProductsServices from "@/pages/ProductsServices";
import Partnerships from "@/pages/Partnerships";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 800px 600px at 20% 10%, rgba(59, 130, 246, 0.04) 0%, transparent 60%),
          radial-gradient(ellipse 600px 800px at 80% 90%, rgba(251, 146, 60, 0.025) 0%, transparent 65%),
          radial-gradient(ellipse 700px 500px at 60% 50%, rgba(99, 102, 241, 0.02) 0%, transparent 70%),
          linear-gradient(45deg, transparent 49%, rgba(148, 163, 184, 0.02) 49%, rgba(148, 163, 184, 0.02) 51%, transparent 51%),
          linear-gradient(135deg, transparent 49%, rgba(71, 85, 105, 0.015) 49%, rgba(71, 85, 105, 0.015) 51%, transparent 51%),
          linear-gradient(180deg, rgba(248, 250, 252, 0.6) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(241, 245, 249, 0.3) 100%),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, transparent 20%, transparent 80%, rgba(255, 255, 255, 0.02) 100%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 120px 120px, 80px 80px, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products-services" component={ProductsServices} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
