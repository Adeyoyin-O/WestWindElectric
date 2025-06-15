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
      description: "Professional installation and system integration",
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
      {/* Creative Header Section - No Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-green-100/25 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Innovative Title Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-600/10 backdrop-blur-sm rounded-full text-blue-700 font-medium mb-6 border border-blue-200/50">
              <Layers className="w-5 h-5 mr-2" />
              Complete Solutions Portfolio
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Products &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Delivering comprehensive EPIC services with cutting-edge technology solutions 
              for maritime and industrial excellence
            </p>
          </div>

          {/* EPIC Services Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {epicServices.map((service, index) => (
              <div key={service.letter} className="group relative">
                <div className="relative bg-gradient-to-br from-white via-slate-50/90 to-blue-50/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
                  {/* Background texture and patterns */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {/* Circuit-like pattern for tech feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_35%,_rgba(59,130,246,0.1)_35%,_rgba(59,130,246,0.1)_65%,_transparent_65%)] bg-[length:20px_20px]"></div>
                    {/* Subtle dots pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(71,85,105,0.15)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
                  </div>
                  
                  {/* Gradient accent corners */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100/40 via-transparent to-transparent rounded-full blur-xl transform -translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-100/30 via-transparent to-transparent rounded-full blur-lg transform translate-x-6 translate-y-6"></div>
                  
                  {/* Large Letter */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500 relative z-10`}>
                    <span className="text-2xl font-bold text-white">{service.letter}</span>
                  </div>
                  
                  {/* Service icon with enhanced styling */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <service.icon className="w-6 h-6 text-slate-600" />
                    </div>
                  </div>
                  

                  
                  <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="relative z-10 text-slate-700 mb-4 text-sm leading-relaxed font-medium">{service.description}</p>
                  
                  <div className="relative z-10 space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories with Creative Layout */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-orange-100 text-orange-700 hover:bg-orange-200">
              Service Categories
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Solution Portfolio
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From navigation systems to automation solutions, we deliver excellence across all maritime technology domains
            </p>
          </div>

          {/* Creative Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={category.title} 
                   className={`group relative ${index === 4 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                <Card className="h-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-slate-300 overflow-hidden relative group backdrop-blur-sm">
                  {/* Animated Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-slate-600 to-orange-500 group-hover:h-2 transition-all duration-300"></div>
                  
                  {/* Enhanced Background Patterns */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                    {/* Subtle mesh pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,_rgba(120,119,198,0.15)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
                    {/* Gradient overlays */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-100/40 via-transparent to-transparent rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100/30 via-transparent to-transparent rounded-full blur-xl transform -translate-x-8 translate-y-8"></div>
                  </div>
                  
                  {/* Floating geometric elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-12 right-12 w-2 h-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  <CardHeader className="relative z-10 pb-4 pt-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full shadow-sm"></div>
                        <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full opacity-70 shadow-sm"></div>
                      </div>
                      <Badge className="bg-white/80 backdrop-blur-sm text-slate-800 border border-slate-200/50 font-semibold px-3 py-1 shadow-sm">
                        {category.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-slate-700 mb-6 leading-relaxed font-medium">{category.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Key Solutions</h4>
                      <div className="space-y-3">
                        {category.solutions.map((solution, idx) => (
                          <div key={solution} className="flex items-start group/item">
                            <div className="flex items-center mr-3 mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:bg-orange-500 transition-colors duration-300 shadow-sm"></div>
                              <div className="w-8 h-px bg-gradient-to-r from-blue-300 to-transparent ml-1"></div>
                            </div>
                            <span className="text-sm text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors duration-200 font-medium">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced Card Footer */}
                    <div className="mt-6 pt-4 border-t border-gradient-to-r from-slate-200/60 via-blue-200/40 to-slate-200/60">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-sm"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full shadow-sm"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-sm"></div>
                        </div>
                        <span className="text-xs text-slate-500 font-bold bg-slate-100/50 px-2 py-1 rounded-full">0{index + 1}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Excellence</h3>
              <p className="text-blue-100">Over a decade of successful project deliveries across Nigeria and West Africa</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Ship className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maritime Expertise</h3>
              <p className="text-blue-100">Specialized knowledge in marine electronics and maritime industry requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Support</h3>
              <p className="text-blue-100">End-to-end service from design and installation to training and maintenance</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
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
