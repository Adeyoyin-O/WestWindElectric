import { useLocation, Link } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Workflow, Ship, Cpu, ArrowRight, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@assets/buddy-an-uy5ZZI3rGXk-unsplash_1749921189527.jpg";
import serviceImage1 from "@assets/alexander-kovalev-mIG_NqkYBoI-unsplash_1749906855750.jpg";
import serviceImage2 from "@assets/buddy-an-uy5ZZI3rGXk-unsplash_1749906284778.jpg";
import serviceImage3 from "@assets/2_1749919437736.png";
import serviceImage4 from "@assets/3-removebg-preview_1749920563703.png";
import { useState, useEffect } from "react";

// Service Carousel Component
function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: serviceImage1,
      title: "Electrical Infrastructure",
      description: "Advanced electrical systems and power distribution"
    },
    {
      image: serviceImage2,
      title: "Maritime Systems",
      description: "Specialized marine electronics and control systems"
    },
    {
      image: serviceImage3,
      title: "Industrial Automation",
      description: "Smart automation and control solutions"
    },
    {
      image: serviceImage4,
      title: "EPIC Services",
      description: "Engineering, Procurement, Installation & Commissioning"
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

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

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
    </div>
  );
}
