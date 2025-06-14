import { useLocation, Link } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Workflow, Ship, Cpu, ArrowRight, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@assets/buddy-an-uy5ZZI3rGXk-unsplash_1749921189527.jpg";
import serviceImage1 from "@assets/service11_1749934695026.jpg";
import serviceImage2 from "@assets/service10_1749934751504.jpg";
import serviceImage3 from "@assets/service7_1749934776068.jpg";
import serviceImage4 from "@assets/service8_1749934789632.jpg";
import serviceImage5 from "@assets/service9_1749934761978.jpg";
import serviceImage6 from "@assets/service18_1749934858577.jpg";
import serviceImage7 from "@assets/service14_1749934710232.jpg";
import serviceImage8 from "@assets/service23_1749934808291.jpg";
import serviceImage9 from "@assets/service20_1749934817170.jpg";
import serviceImage10 from "@assets/service19_1749934843078.jpg";
import serviceImage11 from "@assets/service17_1749934870522.jpg";
import serviceImage12 from "@assets/service15_1749934878839.jpg";
import { useState, useEffect } from "react";

// Service Carousel Component
function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: serviceImage1,
      title: "Power Distribution Systems",
      description: "High-voltage electrical switchgear and distribution panels"
    },
    {
      image: serviceImage2,
      title: "Industrial Control Systems",
      description: "Advanced automation and process control solutions"
    },
    {
      image: serviceImage3,
      title: "Electrical Installations",
      description: "Complete electrical switchboard and control panel systems"
    },
    {
      image: serviceImage4,
      title: "Marine Power Systems",
      description: "Specialized electrical systems for maritime applications"
    },
    {
      image: serviceImage5,
      title: "Testing & Commissioning",
      description: "Professional testing and system commissioning services"
    },
    {
      image: serviceImage6,
      title: "Control Panel Design",
      description: "Custom electrical control and monitoring systems"
    },
    {
      image: serviceImage7,
      title: "Infrastructure Cabling",
      description: "Structured cabling and electrical infrastructure systems"
    },
    {
      image: serviceImage8,
      title: "Generator Systems",
      description: "Industrial power generation and backup systems"
    },
    {
      image: serviceImage9,
      title: "Civil Engineering",
      description: "Foundation and structural work for electrical installations"
    },
    {
      image: serviceImage10,
      title: "Cable Installation",
      description: "Underground and overhead cable installation services"
    },
    {
      image: serviceImage11,
      title: "Industrial Equipment",
      description: "Heavy-duty industrial electrical equipment and installations"
    },
    {
      image: serviceImage12,
      title: "Project Construction",
      description: "Complete project execution from design to commissioning"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden shadow-xl">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-sm opacity-90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Side Arrow Navigation */}
      <button
        onClick={() => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={() => goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Service Badge */}
      <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
        Our Services
      </div>
    </div>
  );
}

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
      <section className="bg-gradient-to-r from-gray-50 to-slate-100 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center group p-4 rounded-lg bg-white/50 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">13+ Years of Proven Delivery</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Trusted expertise in<br />complex engineering projects</p>
            </div>
            
            <div className="text-center group p-4 rounded-lg bg-white/50 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">EPIC Services, All in One Place</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Complete engineering, procurement, installation & commissioning</p>
            </div>
            
            <div className="text-center group p-4 rounded-lg bg-white/50 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">Powering Land & Sea</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Specialized solutions for<br />power and maritime industries</p>
            </div>
            
            <div className="text-center group p-4 rounded-lg bg-white/50 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">Smart Systems Integration</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Advanced automation and<br />control system solutions</p>
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
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                About West Wind
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Engineering Excellence
                <span className="block text-blue-700">Since 2011</span>
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                West Wind Electric Power Ltd is a leading Nigerian engineering company specializing in comprehensive EPIC services. We deliver cutting-edge electrical, electronics, instrumentation, and maritime control systems that power industries across land and sea...
              </p>
              
              <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base transition-colors duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Services Carousel */}
            <div className="relative">
              <ServiceCarousel />
            </div>
            
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
              Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive EPIC Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial engineering design to final commissioning, we deliver end-to-end solutions for complex industrial projects
            </p>
          </div>

          {/* Connected Services Network */}
          <div className="relative mb-16">
            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1200 600">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              
              {/* Horizontal connections */}
              <line x1="200" y1="150" x2="400" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" />
              <line x1="400" y1="150" x2="600" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '0.5s'}} />
              <line x1="600" y1="150" x2="800" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Vertical connections */}
              <line x1="300" y1="150" x2="300" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1.5s'}} />
              <line x1="500" y1="150" x2="500" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '2s'}} />
              <line x1="700" y1="150" x2="700" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '2.5s'}} />
              
              {/* Bottom horizontal connections */}
              <line x1="200" y1="350" x2="400" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '3s'}} />
              <line x1="400" y1="350" x2="600" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '3.5s'}} />
              <line x1="600" y1="350" x2="800" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '4s'}} />
            </svg>

            {/* Service Cards Grid */}
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Engineering */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Workflow className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Engineering</h3>
                <p className="text-sm text-slate-600 text-center">Detailed design & technical specifications</p>
              </div>

              {/* Procurement */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Ship className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Procurement</h3>
                <p className="text-sm text-slate-600 text-center">Strategic sourcing & supply chain management</p>
              </div>

              {/* Installation */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Installation</h3>
                <p className="text-sm text-slate-600 text-center">Professional installation & integration</p>
              </div>

              {/* Commissioning */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Commissioning</h3>
                <p className="text-sm text-slate-600 text-center">Testing, optimization & handover</p>
              </div>
            </div>
          </div>

          {/* Scrollable Service Cards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Specialized Capabilities</h3>
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide" style={{scrollbarWidth: 'none'}}>
              {[
                { title: "Electrical Systems", icon: Zap, color: "from-blue-500 to-blue-600", description: "Power distribution, control panels, and electrical infrastructure" },
                { title: "Marine Electronics", icon: Ship, color: "from-teal-500 to-teal-600", description: "Navigation systems, communication equipment, and marine automation" },
                { title: "Instrumentation", icon: Settings, color: "from-orange-500 to-orange-600", description: "Process control, monitoring systems, and precision instruments" },
                { title: "Control Systems", icon: Cpu, color: "from-slate-500 to-slate-600", description: "PLC programming, SCADA systems, and automation solutions" },
                { title: "Power Generation", icon: Zap, color: "from-blue-500 to-blue-600", description: "Generator systems, UPS solutions, and backup power" },
                { title: "Project Management", icon: Workflow, color: "from-teal-500 to-teal-600", description: "End-to-end project coordination and delivery" }
              ].map((service, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link href="/products-services">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
