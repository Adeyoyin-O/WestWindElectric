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
import controlPanelImage from "@assets/staff-woman-worker-work-operate-cutting-machine-lathe-cnc-engineer-modern-factory-working-woman-smart-women-worker-industry-workplace-photo_1749941219517.jpg";
import electricalPanelImage from "@assets/electricity-electrical-maintenance-service-electrician-260nw-2251896605_1749941607977.jpg";
import marineControlImage from "@assets/image_1749942411532.png";
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
    <div className="maritime-transition">
      {/* Hero Section */}
      <Hero
        title="Your EPIC Partner in Maritime Engineering Excellence"
        subtitle="From electrical systems to control infrastructure, we deliver precision-engineered solutions that power industries across land and sea with unmatched expertise and reliability."
        backgroundImage={heroBackground}
        showButtons
        onPrimaryClick={handleExploreServices}
        onSecondaryClick={handleGetQuote}
        primaryButtonText="Explore Services"
        secondaryButtonText="Get Quote"
      />

      {/* Stats Highlight Strip */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(600px circle at 20% 20%, hsla(210, 100%, 35%, 0.05), transparent),
            radial-gradient(800px circle at 80% 80%, hsla(189, 100%, 42%, 0.04), transparent),
            linear-gradient(90deg, hsla(215, 20%, 25%, 0.01) 1px, transparent 1px),
            linear-gradient(0deg, hsla(215, 20%, 25%, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="maritime-elevated text-center group p-8 hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 maritime-ocean rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold maritime-heading mb-3">13+ Years Excellence</h3>
              <p className="maritime-text text-sm leading-relaxed">Proven track record delivering complex engineering projects with precision and reliability</p>
            </div>
            
            <div className="maritime-elevated text-center group p-8 hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 maritime-steel rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold maritime-heading mb-3">Complete EPIC Solutions</h3>
              <p className="maritime-text text-sm leading-relaxed">Full-service engineering, procurement, installation, and commissioning capabilities</p>
            </div>
            
            <div className="maritime-elevated text-center group p-8 hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 maritime-emerald rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold maritime-heading mb-3">Maritime Specialists</h3>
              <p className="maritime-text text-sm leading-relaxed">Specialized expertise in both land-based and marine electrical systems</p>
            </div>
            
            <div className="maritime-elevated text-center group p-8 hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 maritime-sunset rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold maritime-heading mb-3">Smart Integration</h3>
              <p className="maritime-text text-sm leading-relaxed">Advanced automation and intelligent control system solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle 800px at 15% 25%, hsla(210, 100%, 35%, 0.03), transparent),
            radial-gradient(circle 600px at 85% 75%, hsla(175, 100%, 35%, 0.025), transparent),
            linear-gradient(45deg, hsla(215, 20%, 25%, 0.005) 1px, transparent 1px),
            linear-gradient(-45deg, hsla(215, 20%, 25%, 0.005) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 80px 80px, 80px 80px'
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Company Intro */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 maritime-glass rounded-full text-sm font-semibold">
                <div className="w-3 h-3 maritime-sunset rounded-full mr-3"></div>
                About West Wind Electric
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="maritime-heading">Engineering Excellence</span>
                  <span className="block text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Since 2011</span>
                </h2>
                
                <p className="text-xl maritime-text leading-relaxed">
                  West Wind Electric Power Ltd stands as Nigeria's premier engineering company, delivering comprehensive EPIC services that power critical infrastructure across maritime and industrial sectors.
                </p>
                
                <p className="text-lg maritime-text leading-relaxed">
                  Our expertise spans cutting-edge electrical systems, advanced electronics, precision instrumentation, and sophisticated maritime control solutions—engineered to meet the most demanding operational requirements.
                </p>
              </div>
              
              <div className="pt-6">
                <Link href="/about" className="group inline-flex items-center maritime-card px-8 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-xl">
                  <span className="maritime-subheading">Discover Our Story</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-blue-600" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Enhanced Services Carousel */}
            <div className="relative">
              <div className="maritime-elevated p-4">
                <ServiceCarousel />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 maritime-glass rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 maritime-glass rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle 1000px at 25% 25%, hsla(210, 100%, 50%, 0.08), transparent),
            radial-gradient(circle 800px at 75% 75%, hsla(189, 100%, 42%, 0.06), transparent),
            linear-gradient(45deg, hsla(255, 255, 255, 0.005) 1px, transparent 1px),
            linear-gradient(-45deg, hsla(255, 255, 255, 0.005) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100px 100px, 100px 100px'
        }}></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 maritime-glass rounded-full text-sm font-semibold mb-8">
              <div className="w-3 h-3 maritime-sunset rounded-full mr-3"></div>
              <span className="text-slate-700">Our Engineering Solutions</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Precision-Engineered
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Maritime Systems</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions spanning power distribution, automation control, and maritime electronics—engineered for mission-critical performance
            </p>
          </div>

          {/* Premium Service Layout */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            {/* Featured Service Card */}
            <div className="col-span-12 lg:col-span-8 group">
              <div className="relative h-[500px] maritime-elevated overflow-hidden transform transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src={electricalPanelImage}
                  alt="Advanced electrical distribution panel systems"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <div className="inline-flex items-center px-4 py-2 maritime-sunset rounded-full text-sm font-semibold mb-4">
                    Power Systems Engineering
                  </div>
                  <h3 className="text-3xl font-bold mb-4 maritime-heading text-white">
                    Electrical Distribution & Control Systems
                  </h3>
                  <p className="text-lg text-slate-200 leading-relaxed mb-6">
                    Advanced switchgear, distribution panels, and high-voltage power systems engineered for industrial facilities and maritime vessels with uncompromising safety and reliability standards.
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">High-Voltage Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Marine Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Service Cards */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="group">
                <div className="relative h-[240px] maritime-elevated overflow-hidden transform transition-all duration-700 hover:scale-[1.02]">
                  <img 
                    src={controlPanelImage}
                    alt="Industrial automation and control systems"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-flex items-center px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                      Automation Systems
                    </div>
                    <h3 className="text-xl font-bold mb-2">Industrial Control</h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      Cutting-edge automation and process control solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative h-[240px] maritime-elevated overflow-hidden transform transition-all duration-700 hover:scale-[1.02]">
                  <img 
                    src={marineControlImage}
                    alt="Marine navigation and control systems"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-flex items-center px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                      Maritime Electronics
                    </div>
                    <h3 className="text-xl font-bold mb-2">Marine Systems</h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      Specialized electronic systems for maritime vessels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/products-services">
              <Button 
                className="group relative px-12 py-6 maritime-glass hover:shadow-2xl transform transition-all duration-500 hover:scale-105 text-lg font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center maritime-subheading">
                  Explore Complete Solutions
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-blue-600" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
