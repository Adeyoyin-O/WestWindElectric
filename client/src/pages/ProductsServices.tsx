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
      icon: Compass,
      title: "Navigation Systems",
      description: "Advanced navigation equipment for safe and efficient maritime operations",
      badge: "Navigation",
      badgeColor: "bg-blue-100 text-blue-700",
      solutions: ["GPS & GNSS Systems", "Radar Technology", "Electronic Chart Systems", "Autopilot Solutions"]
    },
    {
      icon: Radio,
      title: "Communication Systems", 
      description: "Reliable communication solutions ensuring safety and connectivity at sea",
      badge: "Communication",
      badgeColor: "bg-green-100 text-green-700",
      solutions: ["VHF Radio Systems", "Satellite Communication", "Emergency Beacons", "Intercom Networks"]
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Complete electrical infrastructure for marine and industrial applications",
      badge: "Power Systems",
      badgeColor: "bg-orange-100 text-orange-700", 
      solutions: ["Power Distribution", "Control Panels", "Emergency Systems", "Lighting Solutions"]
    },
    {
      icon: ServerCog,
      title: "Automation & Control",
      description: "Smart automation systems for enhanced operational efficiency",
      badge: "Automation",
      badgeColor: "bg-purple-100 text-purple-700",
      solutions: ["Engine Room Automation", "Bridge Systems", "SCADA Solutions", "Process Control"]
    },
    {
      icon: Anchor,
      title: "Maritime Electronics",
      description: "Specialized marine electronics for vessel operations and safety",
      badge: "Marine Tech",
      badgeColor: "bg-cyan-100 text-cyan-700",
      solutions: ["Navigation Aids", "Safety Equipment", "Monitoring Systems", "Hull Instrumentation"]
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing technical support",
      badge: "Support",
      badgeColor: "bg-indigo-100 text-indigo-700",
      solutions: ["Equipment Training", "Technical Support", "Documentation", "Remote Diagnostics"]
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
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Large Letter */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                    <span className="text-2xl font-bold text-white">{service.letter}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl mb-4 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
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
          <div className="grid lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={category.title} 
                   className={`group relative ${index === 2 ? 'lg:col-span-1 lg:row-span-2' : ''} ${index === 5 ? 'lg:col-span-2' : ''}`}>
                <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge className={`${category.badgeColor} border-0 font-medium`}>
                        {category.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-800 text-sm">Key Solutions:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.solutions.map((solution) => (
                          <div key={solution} className="flex items-center">
                            <ArrowRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                            <span className="text-xs text-slate-600">{solution}</span>
                          </div>
                        ))}
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
