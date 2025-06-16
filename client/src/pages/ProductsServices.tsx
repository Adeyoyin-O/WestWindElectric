import { useLocation } from "wouter";
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
  Layers
} from "lucide-react";

// Import service images
import engineeringImg from "@assets/erinada-valpurgieva-QCOg4dicY74-unsplash_1750062999962.jpg";
import procurementImg from "@assets/hassan-pasha-0gzN6YsgAjo-unsplash_1750062955446.jpg";
import installationImg from "@assets/rob-lambert-9Q_pLLP_jmA-unsplash_1750062971469.jpg";
import commissioningImg from "@assets/ricardo-gomez-angel-MagdWoazARo-unsplash_1750062987636.jpg";

export default function ProductsServices() {
  const [, setLocation] = useLocation();

  const handleRequestQuote = () => {
    setLocation("/contact");
  };

  const epicServices = [
    {
      letter: "E",
      title: "Engineering",
      description: "Advanced system design and technical engineering solutions",
      icon: Settings,
      color: "from-blue-600 to-blue-700",
      features: ["System Architecture", "Technical Specifications", "Custom Solutions", "Performance Analysis"]
    },
    {
      letter: "P",
      title: "Procurement",
      description: "Strategic sourcing and equipment acquisition services",
      icon: Target,
      color: "from-green-600 to-green-700",
      features: ["Equipment Sourcing", "Vendor Management", "Quality Assurance", "Cost Optimization"]
    },
    {
      letter: "I",
      title: "Installation",
      description: "Expert professional installation and seamless system integration",
      icon: Wrench,
      color: "from-orange-600 to-orange-700",
      features: ["Expert Installation", "System Integration", "Testing & Validation", "Documentation"]
    },
    {
      letter: "C",
      title: "Commissioning",
      description: "Complete system commissioning and operational validation",
      icon: Activity,
      color: "from-purple-600 to-purple-700",
      features: ["System Commissioning", "Performance Testing", "Crew Training", "Operational Handover"]
    }
  ];

  const serviceCategories = [
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
  ];

  return (
    <div className="page-transition">
      {/* Hero Section with Background Image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Dynamic Professional Background */}
        <div className="absolute inset-0">
          {/* Rich Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100"></div>
          
          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0">
            {/* Large Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 via-blue-500/8 to-transparent rounded-full blur-3xl transform -translate-x-40 translate-y-40"></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/8 to-purple-400/6 rounded-full blur-2xl"></div>
          </div>

          {/* Technical Pattern Overlay */}
          <div className="absolute inset-0 opacity-60">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="#64748b" opacity="0.3"/>
                </pattern>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                </pattern>
              </defs>
              
              {/* Dot Pattern */}
              <rect width="100%" height="100%" fill="url(#dots)"/>
              
              {/* Grid Overlay */}
              <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4"/>
              
              {/* Modern Circuit Design */}
              <g opacity="0.7">
                {/* Main Circuit Lines */}
                <path d="M100 150 L300 150 L320 130 L500 130 L520 150 L750 150" 
                      stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M100 300 L200 300 L220 280 L400 280 L420 300 L650 300" 
                      stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M100 450 L350 450 L370 430 L550 430 L570 450 L800 450" 
                      stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.4"/>
                
                {/* Vertical Connections */}
                <path d="M300 50 L300 200 L320 220 L320 380 L300 400 L300 550" 
                      stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M650 80 L650 250 L670 270 L670 430 L650 450 L650 600" 
                      stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4"/>
                
                {/* Circuit Nodes */}
                <circle cx="300" cy="150" r="6" fill="#3b82f6" opacity="0.8"/>
                <circle cx="650" cy="300" r="6" fill="#1e40af" opacity="0.8"/>
                <circle cx="320" cy="280" r="4" fill="#6366f1" opacity="0.7"/>
                <circle cx="570" cy="450" r="5" fill="#3b82f6" opacity="0.6"/>
              </g>
              
              {/* Professional Geometric Elements */}
              <g opacity="0.3">
                <rect x="850" y="100" width="120" height="80" rx="8" fill="#3b82f6"/>
                <rect x="900" y="220" width="100" height="60" rx="6" fill="#1e40af"/>
                <rect x="950" y="320" width="140" height="90" rx="10" fill="#6366f1"/>
                
                {/* Left Side Elements */}
                <rect x="50" y="380" width="160" height="100" rx="12" fill="#3b82f6"/>
                <rect x="20" y="250" width="120" height="80" rx="8" fill="#1e40af"/>
              </g>
            </svg>
          </div>

          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
          
          {/* Final Overlay for Content Clarity */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Innovative Title Section */}
          <div className="text-center mb-16">
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
                <div className="relative bg-white rounded shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Service Image Header */}
                  <div className="relative h-32 bg-gradient-to-br from-slate-100 to-slate-50">
                    <img 
                      src={[
                        engineeringImg,
                        procurementImg,
                        installationImg,
                        commissioningImg
                      ][index]}
                      alt={service.title}
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



      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose West Wind?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              13+ years of proven excellence in delivering comprehensive maritime solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Excellence</h3>
              <p className="text-blue-100">Over a decade of successful project deliveries across Nigeria and West Africa</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Ship className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maritime Expertise</h3>
              <p className="text-blue-100">Specialized knowledge in marine electronics and maritime industry requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Support</h3>
              <p className="text-blue-100">End-to-end service from design and installation to training and maintenance</p>
            </div>
          </div>

          <div className="text-center">
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
