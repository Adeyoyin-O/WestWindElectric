import { useLocation, Link } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Workflow, Ship, Cpu, ArrowRight, Zap, Settings } from "lucide-react";
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

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-slate-300 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-slate-200 rounded-lg rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-200 rounded-lg rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Company Intro */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                About West Wind Electric Power
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Engineering Excellence
                <span className="block text-blue-700">Since 2013</span>
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                West Wind Electric Power Ltd is a leading Nigerian engineering company specializing in comprehensive EPIC services. We deliver cutting-edge electrical, electronics, instrumentation, and maritime control systems that power industries across land and sea...
              </p>
              
              <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Engineering Animation */}
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 overflow-hidden shadow-xl">
                
                {/* Animated Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Horizontal Lines */}
                  <line x1="50" y1="80" x2="350" y2="80" stroke="url(#circuitGradient)" strokeWidth="3" className="animate-pulse" />
                  <line x1="50" y1="150" x2="350" y2="150" stroke="url(#circuitGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                  <line x1="50" y1="220" x2="350" y2="220" stroke="url(#circuitGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '1s'}} />
                  
                  {/* Vertical Lines */}
                  <line x1="150" y1="50" x2="150" y2="250" stroke="url(#circuitGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                  <line x1="250" y1="50" x2="250" y2="250" stroke="url(#circuitGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '2s'}} />
                  
                  {/* Circuit Nodes */}
                  <circle cx="150" cy="80" r="6" fill="#1e40af" className="animate-pulse" />
                  <circle cx="250" cy="80" r="6" fill="#1e40af" className="animate-pulse" style={{animationDelay: '0.3s'}} />
                  <circle cx="150" cy="150" r="6" fill="#1e40af" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                  <circle cx="250" cy="150" r="6" fill="#1e40af" className="animate-pulse" style={{animationDelay: '0.9s'}} />
                  <circle cx="150" cy="220" r="6" fill="#1e40af" className="animate-pulse" style={{animationDelay: '1.2s'}} />
                  <circle cx="250" cy="220" r="6" fill="#1e40af" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                </svg>
                
                {/* Floating Engineering Icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                  <Settings className="w-6 h-6 text-slate-600" />
                </div>
                
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
                  <Ship className="w-6 h-6 text-blue-700" />
                </div>
                
                {/* Central Engineering Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-2xl flex items-center justify-center animate-spin" style={{animationDuration: '10s'}}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
