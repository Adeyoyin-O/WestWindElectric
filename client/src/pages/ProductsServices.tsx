import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Radio, 
  ServerCog, 
  Zap, 
  Wrench, 
  GraduationCap,
  CheckCircle 
} from "lucide-react";

export default function ProductsServices() {
  const [, setLocation] = useLocation();

  const handleRequestQuote = () => {
    setLocation("/contact");
  };

  const services = [
    {
      icon: Compass,
      title: "Navigation Systems",
      description: "Advanced navigation equipment including GPS, radar, ECDIS, and autopilot systems",
      features: [
        "GPS Navigation Systems",
        "Radar Systems", 
        "ECDIS (Electronic Chart Display)",
        "Autopilot Systems"
      ]
    },
    {
      icon: Radio,
      title: "Communication Systems",
      description: "Reliable maritime communication solutions for safety and operational efficiency",
      features: [
        "VHF Radio Systems",
        "Satellite Communication",
        "Emergency Communication",
        "Intercom Systems"
      ]
    },
    {
      icon: ServerCog,
      title: "Automation Systems",
      description: "Complete automation solutions for modern vessel operations and control",
      features: [
        "Engine Room Automation",
        "Bridge Automation",
        "Cargo Control Systems",
        "Safety Management Systems"
      ]
    },
    {
      icon: Zap,
      title: "Electrical Solutions",
      description: "Complete electrical systems design, installation, and maintenance services",
      features: [
        "Power Distribution Systems",
        "Lighting Systems",
        "Emergency Power Systems",
        "Electrical Panel Design"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance and repair services to ensure optimal performance",
      features: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "System Upgrades",
        "Performance Optimization"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Professional training and ongoing technical support for your crew",
      features: [
        "Equipment Training",
        "Technical Documentation",
        "24/7 Support Hotline",
        "Remote Diagnostics"
      ]
    }
  ];

  return (
    <div className="page-transition">
      {/* Services Hero */}
      <Hero
        title="Products & Services"
        subtitle="Comprehensive maritime electronics solutions for the modern maritime industry"
      />

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We design, procure, install, commission, repair, and maintain Navigation, communication, instrumentation, automation, and electrical equipment for the maritime industry.
              </p>
              <div className="space-y-4">
                {[
                  "System Design & Engineering",
                  "Equipment Procurement", 
                  "Professional Installation",
                  "System Commissioning",
                  "Repair & Maintenance"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="text-[var(--gold)] h-5 w-5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-96 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <ServerCog className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Ship Electronics Systems</h3>
                  <p className="text-blue-100 mt-2">Advanced Navigation & Communication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 maritime-gradient rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-white h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[var(--navy)]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 maritime-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Maritime Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts design and implement the perfect electronics solution for your vessel
          </p>
          <Button 
            size="lg"
            className="gold-gradient hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={handleRequestQuote}
          >
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
