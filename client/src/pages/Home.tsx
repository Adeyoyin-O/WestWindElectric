import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Workflow, Ship, Cpu } from "lucide-react";
import heroBackground from "@assets/buddy-an-uy5ZZI3rGXk-unsplash_1749921189527.jpg";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleExploreServices = () => {
    setLocation("/products-services");
  };

  const handleGetQuote = () => {
    setLocation("/contact");
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero
        title="Leading EPIC Solutions Provider in Nigeria"
        subtitle="Specializing in engineering, procurement, installation, and commissioning of electrical, electronics, and instrumentation systems for power and maritime industries"
        backgroundImage={heroBackground}
        showButtons
        onPrimaryClick={handleExploreServices}
        onSecondaryClick={handleGetQuote}
        primaryButtonText="Explore"
        secondaryButtonText="Get a Quote"
      />

      {/* Stats Highlight Strip */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center group p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">10+ Years of Proven Delivery</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Trusted expertise in<br />complex engineering projects</p>
            </div>
            
            <div className="text-center group p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">EPIC Services, All in One Place</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Complete engineering, procurement, installation & commissioning</p>
            </div>
            
            <div className="text-center group p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">Powering Land & Sea</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Specialized solutions for<br />power and maritime industries</p>
            </div>
            
            <div className="text-center group p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">Smart Systems Integration</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Advanced automation and<br />control system solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
