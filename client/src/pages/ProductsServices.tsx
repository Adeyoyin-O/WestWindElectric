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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxOTIwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjE5MjAiIHkyPSI4MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4RkFGQyIvPgo8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iI0Y1RjhGQSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMEU3RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8IS0tIEJhY2tncm91bmQgLS0+CjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjgwMCIgZmlsbD0idXJsKCNiZykiLz4KCjwhLS0gTWFyaXRpbWUgU2hpcCBTaWxob3VldHRlcyAtLT4KPGcgb3BhY2l0eT0iMC4wNSI+CjxwYXRoIGQ9Ik0xMDAgNjAwIEwyMDAgNTUwIEw0MDAgNTgwIEw2MDAgNTYwIEw4MDAgNTcwIEwxMDAwIDU1MCBMMTI2MCA1NjAgTDE1MDAgNTgwIEwxNzAwIDU2MCBMMTU4MCA2NDBMMTQ2MCA2NDBMMTMyMCA2MTBMMTI4MCA2MTBMMTE0MCA2NTBMMTA4MCA2NTBMOTY2IDYzMEw5MjAgNjMwTDc4NiA2NTBMNzQwIDY1MEw2MTYgNjMwTDU3MCA2MzBMNDQ2IDY1MEw0MDAgNjUwTDI2NiA2MzBMMjIwIDYzMEwxMDYgNjUwWiIgZmlsbD0iIzE5MjIzMSIvPgo8L2c+Cgo8IS0tIEVsZWN0cmljYWwgRXF1aXBtZW50IC0tPgo8ZyBvcGFjaXR5PSIwLjA4Ij4KPCEtLSBDb250cm9sIFBhbmVscyAtLT4KPHJlY3QgeD0iMTQwMCIgeT0iMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MCIgcng9IjEwIiBmaWxsPSIjMzc0RjY2Ii8+CjxyZWN0IHg9IjE0MjAiIHk9IjIyMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxNDAiIHJ4PSI4IiBmaWxsPSIjNDc1NTY5Ii8+CjxyZWN0IHg9IjE0MzAiIHk9IjI0MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzI5NCyMEU1RSIvPgo8cmVjdCB4PSIxNDcwIiB5PSIyNDAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgcng9IjQiIGZpbGw9IiNGRjQ0NDQiLz4KPHJlY3QgeD0iMTUxMCIgeT0iMjQwIiB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjMjJDNTVFIi8+Cgo8IS0tIE1vdG9yIC0tPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzNjAiIHI9IjEwMCIgZmlsbD0iIzM3NEY2NiIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzNjAiIHI9IjcwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MzY2RjkiIHN0cm9rZS13aWR0aD0iNCIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzNjAiIHI9IjIwIiBmaWxsPSIjNGE1MDYxIi8+Cgo8IS0tIFBvd2VyIExpbmVzIC0tPgo8cGF0aCBkPSJNNjAwIDEwMCBMNjAwIDcwMCIgc3Ryb2tlPSIjOTFBM0I4IiBzdHJva2Utd2lkdGg9IjgiLz4KPHBhdGggZD0iTTgwMCAxMDAgTDgwMCA3MDAiIHN0cm9rZT0iIzkxQTNCOCIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxwYXRoIGQ9Ik0xMDAwIDEwMCBMMTAwMCA3MDAiIHN0cm9rZT0iIzkxQTNCOCIgc3Ryb2tlLXdpZHRoPSI4Ii8+Cgo8IS0tIEluc3RydW1lbnRhdGlvbiAtLT4KPHJlY3QgeD0iMTYwIiB5PSI1MDAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTIwIiByeD0iOCIgZmlsbD0iIzM3NEY2NiIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSI1NDAiIHI9IjIwIiBmaWxsPSIjNjM2NkY5Ii8+CjxjaXJjbGUgY3g9IjI2MCIgY3k9IjU0MCIgcj0iMjAiIGZpbGw9IiNGRkFDMzMiLz4KPGNpcmNsZSBjeD0iMzIwIiBjeT0iNTQwIiByPSIyMCIgZmlsbD0iIzIyQzU1RSIvPgo8L2c+Cgo8IS0tIEdyaWQgUGF0dGVybiAtLT4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRUJFQ0YyIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMyIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+Cjwvc3ZnPg=="
            alt="Maritime Engineering Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
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
