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
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Large Letter */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                    <span className="text-2xl font-bold text-white">{service.letter}</span>
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

          {/* Modern Professional Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={category.title} 
                   className={`group relative ${index === 4 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group-hover:border-slate-200">
                  {/* Hero Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50 overflow-hidden">
                    {/* Abstract geometric background */}
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-400/15 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-slate-400/10 to-transparent rounded-full blur-xl"></div>
                    </div>
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 border border-white/50">
                          {/* Service Category Images */}
                          {index === 0 && (
                            <img 
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzMxNDc1NSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NzVDNjkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMjAwIiB5Mj0iMjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzNzNCNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjM2NkY5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPCEtLSBCYWNrZ3JvdW5kIC0tPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0Y4RkFGQyIvPgo8IS0tIE1haW4gZWxlY3RyaWNhbCBwYW5lbCAtLT4KPHJlY3QgeD0iMzAiIHk9IjQwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEyMCIgcng9IjEyIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIgc3Ryb2tlPSIjMUIxRTI4IiBzdHJva2Utd2lkdGg9IjMiLz4KPCEtLSBDb250cm9sIGxpZ2h0cyAtLT4KPGNpcmNsZSBjeD0iNzAiIGN5PSI4MCIgcj0iMTIiIGZpbGw9IiNGRjM0MzQiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iODAiIHI9IjEyIiBmaWxsPSIjRkZBQzMzIi8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjgwIiByPSIxMiIgZmlsbD0iIzIyQzU1RSIvPgo8IS0tIEluZGljYXRvciBsaWdodHMgLS0+CjxjaXJjbGUgY3g9IjcwIiBjeT0iODAiIHI9IjYiIGZpbGw9IiNGRkY3RUQiIG9wYWNpdHk9IjAuOCIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNiIgZmlsbD0iI0ZGRjdFRCIgb3BhY2l0eT0iMC44Ii8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjgwIiByPSI2IiBmaWxsPSIjRkZGN0VEIiBvcGFjaXR5PSIwLjgiLz4KPCEtLSBEaXNwbGF5IC0tPgo8cmVjdCB4PSI2MCIgeT0iMTEwIiB3aWR0aD0iODAiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjMUExQTFBIi8+CjxyZWN0IHg9IjY1IiB5PSIxMTUiIHdpZHRoPSI3MCIgaGVpZ2h0PSI4IiByeD0iMiIgZmlsbD0iIzIyQzU1RSIvPgo8cmVjdCB4PSI2NSIgeT0iMTI3IiB3aWR0aD0iNTAiIGhlaWdodD0iOCIgcng9IjIiIGZpbGw9IiMyMkM1NUUiLz4KPCEtLSBXaXJlcyAtLT4KPHBhdGggZD0iTTcwIDUwIFE3MCAzMCA5MCAzMCBRMTEwIDMwIDExMCA1MCIgc3Ryb2tlPSIjRkZBQzMzIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTEzMCA1MCBRMTMwIDMwIDE1MCAzMCBRMTcwIDMwIDE3MCA1MCIgc3Ryb2tlPSIjM0I4MkY2IiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz4KPCEtLSBTd2l0Y2hlcyAtLT4KPHJlY3QgeD0iNDUiIHk9IjE1MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzM3NEY2NiIvPgo8cmVjdCB4PSI5MiIgeT0iMTUwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjMzc0RjY2Ii8+CjxyZWN0IHg9IjE0MCIgeT0iMTUwIiB3aWR0aD0iMTUiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjMzc0RjY2Ii8+CjwvZXZnPg=="
                              alt="Electrical Equipment"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {index === 1 && (
                            <img 
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFCMzI0NiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNTQ5NjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8IS0tIEJhY2tncm91bmQgLS0+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkFGQkZDIi8+CjwhLS0gTWFpbiBjb250cm9sIGNhYmluZXQgLS0+CjxyZWN0IHg9IjI1IiB5PSIzMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNDAiIHJ4PSIxNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzBfMSkiIHN0cm9rZT0iIzBGMTcyOSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjwhLS0gQ29udHJvbCBwYW5lbHMgLS0+CjxyZWN0IHg9IjQwIiB5PSI1MCIgd2lkdGg9IjM1IiBoZWlnaHQ9IjI1IiByeD0iNCIgZmlsbD0iIzNCODJGNiIvPgo8cmVjdCB4PSI4NSIgeT0iNTAiIHdpZHRoPSIzNSIgaGVpZ2h0PSIyNSIgcng9IjQiIGZpbGw9IiNFRjQ0NDQiLz4KPHJlY3QgeD0iMTMwIiB5PSI1MCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiByeD0iNCIgZmlsbD0iIzIyQzU1RSIvPgo8IS0tIERpc3BsYXkgc2NyZWVuIC0tPgo8cmVjdCB4PSI0MCIgeT0iOTAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIHJ4PSI2IiBmaWxsPSIjMEYxNzI5Ii8+CjxyZWN0IHg9IjQ1IiB5PSI5NSIgd2lkdGg9IjExMCIgaGVpZ2h0PSIxMCIgcng9IjIiIGZpbGw9IiMyMkM1NUUiLz4KPHJlY3QgeD0iNDUiIHk9IjEwOCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjEwIiByeD0iMiIgZmlsbD0iIzIyQzU1RSIvPgo8cmVjdCB4PSI0NSIgeT0iMTIxIiB3aWR0aD0iOTAiIGhlaWdodD0iNCIgcng9IjIiIGZpbGw9IiM5NEEzQjgiLz4KPCEtLSBDb250cm9sIGtub2JzIC0tPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjE1NSIgcj0iMTAiIGZpbGw9IiMzNzRGNjYiIHN0cm9rZT0iIzFFMjkzQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjE1NSIgcj0iMTAiIGZpbGw9IiMzNzRGNjYiIHN0cm9rZT0iIzFFMjkzQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjE1NSIgcj0iMTAiIGZpbGw9IiMzNzRGNjYiIHN0cm9rZT0iIzFFMjkzQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjwhLS0gS25vYiBpbmRpY2F0b3JzIC0tPgo8cGF0aCBkPSJNNjAgMTQ3IEw2MCA0OEwGNjAgMTYzIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMDAgMTQ3IEwxMDAgMTYzIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNDAgMTQ3IEwxNDAgMTYzIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwhLS0gU3RhdHVzIExFRCAtLT4KPGNpcmNsZSBjeD0iMTcwIiBjeT0iNDAiIHI9IjgiIGZpbGw9IiNGRkFDMzMiLz4KPGNpcmNsZSBjeD0iMTcwIiBjeT0iNDAiIHI9IjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4="
                              alt="Control Panels & Systems"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {index === 2 && (
                            <img 
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMF8xIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI3MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzc0RjY2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFCMkM0NyIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+CjwhLS0gQmFja2dyb3VuZCAtLT4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGOUZBRkIiLz4KPCEtLSBNYWluIG1vdG9yIGNhc2luZyAtLT4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI3MCIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzBfMSkiIHN0cm9rZT0iIzBGMTcyOSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjwhLS0gSW5uZXIgY2lyY2xlcyAtLT4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzQ5MUY5IiBzdHJva2Utd2lkdGg9IjMiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkJCRjI0IiBzdHJva2Utd2lkdGg9IjMiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkY0NDQ0IiBzdHJva2Utd2lkdGg9IjMiLz4KPCEtLSBDb25uZWN0aW9uIHBvaW50cyAtLT4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMzAiIHI9IjgiIGZpbGw9IiMyMkM1NUUiLz4KPGNpcmNsZSBjeD0iMTcwIiBjeT0iMTAwIiByPSI4IiBmaWxsPSIjMjJDNTVFIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjE3MCIgcj0iOCIgZmlsbD0iIzIyQzU1RSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjEwMCIgcj0iOCIgZmlsbD0iIzIyQzU1RSIvPgo8IS0tIENlbnRlciBzaGFmdCAtLT4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMCIgZmlsbD0iIzRBNTA2MSIgc3Ryb2tlPSIjMUYyOTM3IiBzdHJva2Utd2lkdGg9IjIiLz4KPCEtLSBDb250cm9sIGNhYmxlcyAtLT4KPHBhdGggZD0iTTEwMCAzMCBMMTAwIDEwIiBzdHJva2U9IiNGRkFDMzMiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNzAgMTAwIEwxOTAgMTAwIiBzdHJva2U9IiNGRkFDMzMiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMDAgMTcwIEwxMDAgMTkwIiBzdHJva2U9IiNGRkFDMzMiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMCAxMDAgTDEwIDEwMCIgc3Ryb2tlPSIjRkZBQzMzIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8IS0tIEZhbiBibGFkZXMgLS0+CjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEwMCAxMDApIj4KPHBhdGggZD0iTTk1IDg1IEwxMDUgMTE1IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMTUgOTUgTDg1IDEwNSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjwvZXZnPg=="
                              alt="Motor Controls & Drives"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {index === 3 && (
                            <img 
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFCMzI0NiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNzRGNjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8IS0tIEJhY2tncm91bmQgLS0+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkNGREZGIi8+CjwhLS0gTWFpbiBVUFMgdW5pdCAtLT4KPHJlY3QgeD0iMzAiIHk9IjUwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIgc3Ryb2tlPSIjMEYxNzI5IiBzdHJva2Utd2lkdGg9IjMiLz4KPCEtLSBCYXR0ZXJ5IGluZGljYXRvcnMgLS0+CjxyZWN0IHg9IjQ1IiB5PSI3MCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjE1IiByeD0iMyIgZmlsbD0iIzIyQzU1RSIvPgo8cmVjdCB4PSI4MCIgeT0iNzAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNSIgcng9IjMiIGZpbGw9IiMyMkM1NUUiLz4KPHJlY3QgeD0iMTE1IiB5PSI3MCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjE1IiByeD0iMyIgZmlsbD0iIzIyQzU1RSIvPgo8cmVjdCB4PSIxNTAiIHk9IjcwIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHJ4PSIzIiBmaWxsPSIjRkZBQzMzIi8+CjwhLS0gRGlzcGxheSBzY3JlZW4gLS0+CjxyZWN0IHg9IjQ1IiB5PSIxMDAiIHdpZHRoPSIxMTAiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjMEYxNzI5Ii8+CjxyZWN0IHg9IjUwIiB5PSIxMDUiIHdpZHRoPSIxMDAiIGhlaWdodD0iNiIgcng9IjIiIGZpbGw9IiMyMkM1NUUiLz4KPHJlY3QgeD0iNTAiIHk9IjExNCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjYiIHJ4PSIyIiBmaWxsPSIjMjJDNTVFIi8+CjxyZWN0IHg9IjUwIiB5PSIxMjMiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzIiByeD0iMSIgZmlsbD0iIzk0QTNCOCIvPgo8IS0tIFBvd2VyIGNvbm5lY3Rpb25zIC0tPgo8cGF0aCBkPSJNNjAgMzAgTDYwIDUwIiBzdHJva2U9IiNGRkFDMzMiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMDAgMjAgTDEwMCA1MCIgc3Ryb2tlPSIjRkZBQzMzIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQwIDQwIEwxNDAgNTAiIHN0cm9rZT0iI0ZGQUMzMyIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPCEtLSBQb3dlciBpbmRpY2F0b3JzIC0tPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjI1IiByPSI1IiBmaWxsPSIjRkZBQzMzIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjE1IiByPSI1IiBmaWxsPSIjRkZBQzMzIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjM1IiByPSI1IiBmaWxsPSIjRkZBQzMzIi8+CjwhLS0gT3V0cHV0IGNvbm5lY3Rpb25zIC0tPgo8cGF0aCBkPSJNMzAgMTcwIEw1MCA1MDA1MCA1MCA4MCA1MDA1MCA1MCAxMTAgMTcwIiBzdHJva2U9IiMyMkM1NUUiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTcwIDEwMCBMMTkwIDEwMCIgc3Ryb2tlPSIjMjJDNTVFIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4="
                              alt="Power & Backup Systems"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {index === 4 && (
                            <img 
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzNCODJGNiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxRDQxRDgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8IS0tIEJhY2tncm91bmQgLS0+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkNGREZGIi8+CjwhLS0gSW5zdGFsbGF0aW9uIHRvb2xib3ggLS0+CjxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIgc3Ryb2tlPSIjMEYxNzI5IiBzdHJva2Utd2lkdGg9IjIiLz4KPCEtLSBUb29scyAtLT4KPCEtLSBTY3Jld2RyaXZlciAtLT4KPHJlY3QgeD0iNjAiIHk9IjgwIiB3aWR0aD0iODAiIGhlaWdodD0iNiIgcng9IjMiIGZpbGw9IiNGRkFDMzMiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSI4MyIgcj0iNiIgZmlsbD0iIzM3NEY2NiIvPgo8IS0tIFdyZW5jaCAtLT4KPHJlY3QgeD0iNjAiIHk9IjEwMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjQiIHJ4PSIyIiBmaWxsPSIjMzc0RjY2Ii8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iMTAyIiByPSI4IiBmaWxsPSIjMzc0RjY2IiBzdHJva2U9IiMxRjI5MzciIHN0cm9rZS13aWR0aD0iMiIvPgo8IS0tIERyaWxsIC0tPgo8cmVjdCB4PSI2MCIgeT0iMTE4IiB3aWR0aD0iNjAiIGhlaWdodD0iNiIgcng9IjMiIGZpbGw9IiMxRjI5MzciLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSIxMjEiIHI9IjgiIGZpbGw9IiMzNzRGNjYiIHN0cm9rZT0iIzFGMjkzNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iMTIxIiByPSI0IiBmaWxsPSIjRkZBQzMzIi8+CjwhLS0gVm9sdG1ldGVyIC0tPgo8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxMDAiIHI9IjE4IiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMzNzRGNjYiIHN0cm9rZS13aWR0aD0iMyIvPgo8cGF0aCBkPSJNMTMyIDEwMCBMMTQ4IDEwMCIgc3Ryb2tlPSIjRkY0NDQ0IiBzdHJva2Utd2lkdGg9IjMiLz4KPHBhdGggZD0iTTE0MCA5MiBMMTQwIDEwOCIgc3Ryb2tlPSIjRkY0NDQ0IiBzdHJva2Utd2lkdGg9IjMiLz4KPCEtLSBJbnN0YWxsYXRpb24gY2FibGVzIC0tPgo8cGF0aCBkPSJNNDAgNDAgUTcwIDIwIDEwMCA0MCBRMTMwIDIwIDE2MCA0MCIgc3Ryb2tlPSIjRkZBQzMzIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNCIgZmlsbD0iI0ZGQUMzMyIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI0MCIgcj0iNCIgZmlsbD0iI0ZGQUMzMyIvPgo8Y2lyY2xlIGN4PSIxNjAiIGN5PSI0MCIgcj0iNCIgZmlsbD0iI0ZGQUMzMyIvPgo8IS0tIEdyb3VuZCBsaW5lcyAtLT4KPHBhdGggZD0iTTMwIDE2MCBMNTAgMTUwIEw4MCA1NTE2MCBMMTEwIDMwMTE1MCBMMTcwIDE2MCIgc3Ryb2tlPSIjMjJDNTVFIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz4KPCEtLSBTYWZldHkgZ2VhciAtLT4KPHJlY3QgeD0iODAiIHk9IjQ1IiB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHJ4PSIyIiBmaWxsPSIjRkZBQzMzIi8+Cjwvc3ZnPg=="
                              alt="Installation Services"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        
                        {/* Floating dots around icon */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse delay-700"></div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-slate-800 border-0 font-semibold px-3 py-1.5 shadow-sm">
                        {category.badge}
                      </Badge>
                    </div>
                    
                    {/* Index Number */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-sm font-bold text-slate-700">0{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {category.description}
                      </p>
                    </div>
                    
                    {/* Solutions Grid */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Key Solutions</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {category.solutions.map((solution, idx) => (
                          <div key={solution} className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:bg-orange-500 transition-colors duration-200"></div>
                            </div>
                            <span className="text-sm text-slate-700 leading-relaxed font-medium group-hover/item:text-slate-900 transition-colors duration-200">
                              {solution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Area */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-slate-500 font-medium">Available Now</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>
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
