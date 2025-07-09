import { useLocation } from "wouter";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Compass, 
  Radio, 
  ServerCog, 
  Zap, 
  Wrench, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Anchor,
  Ship,
  Cpu,
  Activity,
  Settings,
  Users,
  Award,
  Target,
  Layers,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Import service images
import engineeringImg from "@assets/erinada-valpurgieva-QCOg4dicY74-unsplash_1750062999962.jpg";
import procurementImg from "@assets/hassan-pasha-0gzN6YsgAjo-unsplash_1750062955446.jpg";
import installationImg from "@assets/rob-lambert-9Q_pLLP_jmA-unsplash_1750062971469.jpg";
import commissioningImg from "@assets/ricardo-gomez-angel-MagdWoazARo-unsplash_1750062987636.jpg";

export default function ProductsServices() {
  const [, setLocation] = useLocation();
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  const handleRequestQuote = useCallback(() => {
    setLocation("/contact");
  }, [setLocation]);

  const toggleService = useCallback((index: number) => {
    setExpandedServices(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      return newExpanded;
    });
  }, []);

  // Handle anchor links from footer
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#service-')) {
      const serviceIndex = parseInt(hash.replace('#service-', ''));
      if (!isNaN(serviceIndex)) {
        // Expand the service
        setExpandedServices(prev => new Set(prev).add(serviceIndex));
        
        // Scroll to the service after a brief delay
        setTimeout(() => {
          const element = document.getElementById(`service-${serviceIndex}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    // Handle initial hash on page load
    handleHashChange();
    
    // Listen for hash changes (when clicking same page links)
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  const services = useMemo(() => [
    { name: "Pumps and Motors", description: "High-performance pumps and electric motors for industrial and marine applications, ensuring reliable fluid handling and mechanical drive solutions." },
    { name: "Electrical and Lighting Fittings", description: "Comprehensive range of electrical components and LED lighting systems designed for harsh marine and industrial environments." },
    { name: "Circuit Breakers", description: "Advanced circuit protection devices including MCBs, MCCBs, and ACBs for reliable electrical system safety and fault isolation." },
    { name: "Transformers", description: "Power and distribution transformers engineered for marine and industrial applications with superior efficiency and durability." },
    { name: "Medium and Low Voltage Panels", description: "Custom-designed switchgear panels for voltage distribution, control, and protection in complex electrical systems." },
    { name: "DC Panels, Battery Chargers and Batteries", description: "Complete DC power solutions including marine-grade batteries, intelligent chargers, and distribution panels for critical systems." },
    { name: "Starters (DOL, Star-Delta, Auto Transformer)", description: "Motor starting solutions including direct-on-line, star-delta, and soft-start systems for optimal motor performance and protection." },
    { name: "Variable Frequency Drives (VFD)", description: "Advanced motor control systems providing precise speed control, energy efficiency, and enhanced motor protection capabilities." },
    { name: "Control Consoles", description: "Ergonomic control stations and operator interfaces designed for marine bridge systems and industrial automation applications." },
    { name: "Electric Installations", description: "Complete electrical installation services including design, implementation, testing, and commissioning of electrical systems." },
    { name: "Rewinding of Motors and Generator Spare Parts", description: "Professional motor and generator refurbishment services including rewinding, balancing, and supply of genuine spare parts." },
    { name: "Inverters and UPS Systems", description: "Uninterruptible power supplies and power inverters ensuring continuous operation of critical systems and equipment." },
    { name: "Motor Control Centers (MCC)", description: "Centralized motor control solutions with intelligent protection, monitoring, and remote operation capabilities for industrial applications." }
  ], []);

  const epicServices = useMemo(() => [
    {
      letter: "E",
      title: "Engineering",
      description: "Advanced system design and technical engineering solutions",
      icon: Settings,
      color: "from-blue-600 to-blue-700",
      features: ["System Architecture", "Technical Specifications", "Custom Solutions", "Performance Analysis"],
      image: engineeringImg
    },
    {
      letter: "P",
      title: "Procurement",
      description: "Strategic sourcing and equipment acquisition services",
      icon: Target,
      color: "from-green-600 to-green-700",
      features: ["Equipment Sourcing", "Vendor Management", "Quality Assurance", "Cost Optimization"],
      image: procurementImg
    },
    {
      letter: "I",
      title: "Installation",
      description: "Expert professional installation and seamless system integration",
      icon: Wrench,
      color: "from-orange-600 to-orange-700",
      features: ["Expert Installation", "System Integration", "Testing & Validation", "Documentation"],
      image: installationImg
    },
    {
      letter: "C",
      title: "Commissioning",
      description: "Complete system commissioning and operational validation",
      icon: Activity,
      color: "from-purple-600 to-purple-700",
      features: ["System Commissioning", "Performance Testing", "Crew Training", "Operational Handover"],
      image: commissioningImg
    }
  ], []);

  const serviceCategories = useMemo(() => [
    {
      icon: Zap,
      title: "Electrical Equipment",
      description: "Complete range of electrical components and systems for industrial applications",
      badge: "Electrical",
      badgeColor: "bg-blue-100 text-blue-700",
      solutions: ["Pumps and Motors", "Electrical and Lighting Fittings", "Circuit Breakers", "Transformers"]
    },
    {
      icon: ServerCog,
      title: "Control Panels & Systems", 
      description: "Advanced control solutions for industrial automation and power management",
      badge: "Control Systems",
      badgeColor: "bg-green-100 text-green-700",
      solutions: ["Medium and Low Voltage Panels", "DC Panels, Battery Chargers and Batteries", "Control Consoles", "Motor Control Centers (MCC)"]
    },
    {
      icon: Settings,
      title: "Motor Controls & Drives",
      description: "Comprehensive motor control solutions for optimal performance and efficiency",
      badge: "Motor Control",
      badgeColor: "bg-orange-100 text-orange-700", 
      solutions: ["Starters (DOL, Star-Delta, Auto Transformer)", "Variable Frequency Drives (VFD)", "Rewinding of Motors and Generator Spare Parts"]
    },
    {
      icon: Activity,
      title: "Power & Backup Systems",
      description: "Reliable power solutions and backup systems for continuous operations",
      badge: "Power Systems",
      badgeColor: "bg-purple-100 text-purple-700",
      solutions: ["Inverters and UPS Systems", "DC Panels, Battery Chargers and Batteries"]
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description: "Professional installation and maintenance services for all electrical systems",
      badge: "Installation",
      badgeColor: "bg-cyan-100 text-cyan-700",
      solutions: ["Electric Installations", "System Integration", "Maintenance Services", "Technical Support"]
    }
  ], []);

  return (
    <div className="page-transition">
      {/* Hero Section with Background Image */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Modern Diagonal Background */}
        <div className="absolute inset-0">
          {/* Diagonal Split Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
          
          {/* Diagonal Light Section */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100 transform rotate-12 scale-150 origin-top-left"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-slate-100/95"></div>
          </div>

          {/* Professional Hexagon Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="60" height="52" patternUnits="userSpaceOnUse">
                  <polygon points="30,4 48,15 48,37 30,48 12,37 12,15" 
                           fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)"/>
            </svg>
          </div>

          {/* Modern Accent Elements */}
          <div className="absolute inset-0">
            {/* Top Left Accent - Moved from Bottom */}
            <div className="absolute top-0 left-0 w-48 h-48">
              <div className="absolute top-6 left-6 w-28 h-28 bg-purple-500/10 rounded-lg -rotate-12"></div>
              <div className="absolute top-12 left-12 w-20 h-20 bg-blue-500/15 rounded-lg rotate-45"></div>
            </div>
            
            {/* Top Right Accent */}
            <div className="absolute top-0 right-0 w-64 h-64">
              <div className="absolute top-8 right-8 w-32 h-32 bg-blue-500/10 rounded-lg rotate-45"></div>
              <div className="absolute top-16 right-16 w-24 h-24 bg-orange-500/10 rounded-lg rotate-12"></div>
            </div>

            {/* Center Technical Elements */}
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
              <div className="w-4 h-4 bg-blue-500/20 rounded-full"></div>
              <div className="absolute top-8 left-8 w-3 h-3 bg-orange-500/20 rounded-full"></div>
              <div className="absolute -top-4 left-12 w-2 h-2 bg-purple-500/20 rounded-full"></div>
            </div>
            
            <div className="absolute top-1/3 right-1/3">
              <div className="w-6 h-6 bg-blue-500/15 rotate-45"></div>
              <div className="absolute top-6 -left-6 w-4 h-4 bg-orange-500/15 rotate-12"></div>
            </div>
          </div>

          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Innovative Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-600/10 backdrop-blur-sm rounded-full text-blue-700 font-medium mb-6 border border-blue-200/50">
              <Layers className="w-5 h-5 mr-2" />
              Complete Solutions Portfolio
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Products &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our full range of services built to meet your electrical and instrumentation needs
            </p>
          </div>

          {/* EPIC Services Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {epicServices.map((service, index) => (
              <div key={service.letter} className="group relative">
                <div className="relative bg-white rounded shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden will-change-transform">
                  {/* Service Image Header */}
                  <div className="relative h-32 bg-gradient-to-br from-slate-100 to-slate-50">
                    <img 
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  
                  <div className="p-6">
                    {/* Large Letter */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white border-2 border-slate-300 rounded-sm flex items-center justify-center shadow-sm">
                      <span className="text-xl font-bold text-slate-800">{service.letter}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto"></div>
            </div>

            {/* Interactive Service List */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              <div className="space-y-2">
                {services.slice(0, 6).map((service, index) => (
                  <div key={index} id={`service-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleService(index)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-slate-700 font-medium">{service.name}</span>
                      {expandedServices.has(index) ? (
                        <ChevronUp className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                      )}
                    </button>
                    <div className={`overflow-hidden dropdown-content ${
                      expandedServices.has(index) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-3 text-sm text-slate-600 leading-relaxed bg-gray-50">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {services.slice(7).map((service, index) => {
                  const actualIndex = index + 7;
                  return (
                    <div key={actualIndex} id={`service-${actualIndex}`} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleService(actualIndex)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-slate-700 font-medium">{service.name}</span>
                        {expandedServices.has(actualIndex) ? (
                          <ChevronUp className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                        )}
                      </button>
                      <div className={`overflow-hidden dropdown-content ${
                        expandedServices.has(actualIndex) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-4 pb-3 text-sm text-slate-600 leading-relaxed bg-gray-50">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Centered item below columns */}
            <div className="flex justify-center mt-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden w-full max-w-md">
                <button
                  onClick={() => toggleService(6)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-slate-700 font-medium">{services[6].name}</span>
                  {expandedServices.has(6) ? (
                    <ChevronUp className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                  )}
                </button>
                <div className={`overflow-hidden dropdown-content ${
                  expandedServices.has(6) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-3 text-sm text-slate-600 leading-relaxed bg-gray-50">
                    {services[6].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto"></div>
            </div>

            {/* Compact Three-Column Layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* First Item */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="text-6xl font-bold text-blue-500/20 leading-none">01</div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded transform rotate-12"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Proven Industry Expertise</h3>
                <p className="text-blue-100 leading-relaxed">Over a decade of hands-on experience delivering trusted solutions across power and maritime sectors.</p>
              </div>

              {/* Second Item */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="text-6xl font-bold text-orange-500/20 leading-none">02</div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/30 rounded transform -rotate-12"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Full-Service Capability</h3>
                <p className="text-blue-100 leading-relaxed">From concept to commissioning, we provide complete EPIC solutions tailored to your project needs.</p>
              </div>

              {/* Third Item */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="text-6xl font-bold text-green-500/20 leading-none">03</div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Uncompromised Quality</h3>
                <p className="text-blue-100 leading-relaxed">We prioritize excellence, using best-in-class practices to ensure safe, reliable, and efficient outcomes.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={handleRequestQuote}
            >
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
