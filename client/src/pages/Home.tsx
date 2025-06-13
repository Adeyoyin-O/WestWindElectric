import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Zap, Settings, Monitor, Users, Globe, Clock } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleExploreServices = () => {
    setLocation("/products-services");
  };

  const handleGetConsultation = () => {
    setLocation("/contact");
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero
        title="Leading EPIC Solutions Provider in Nigeria"
        subtitle="Specializing in engineering, procurement, installation, and commissioning of electrical, electronics, and instrumentation systems for power and maritime industries"
        showButtons
        onPrimaryClick={handleExploreServices}
        onSecondaryClick={handleGetConsultation}
        primaryButtonText="Explore Solutions"
        secondaryButtonText="Get Consultation"
      />

      {/* Company Overview */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">
              Trusted EPIC Solutions Partner
            </h2>
            <p className="text-lg text-[var(--medium-gray)] max-w-4xl mx-auto leading-relaxed">
              Since 2011, West Wind Electric Power Ltd has been delivering comprehensive electrical, electronics and instrumentation services across Nigeria's power and maritime industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16 mx-4">
            <div className="modern-card p-8 text-center floating-element">
              <div className="w-16 h-16 teal-gradient rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Activity className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-4 leading-tight">Engineering & Design</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed">Custom system design and engineering solutions for electrical, electronics, and instrumentation projects</p>
            </div>
            <div className="modern-card p-8 text-center floating-element" style={{animationDelay: '1s'}}>
              <div className="w-16 h-16 purple-gradient rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Zap className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-4 leading-tight">Procurement & Installation</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed">Professional procurement services and expert installation of control systems and electrical equipment</p>
            </div>
            <div className="modern-card p-8 text-center floating-element" style={{animationDelay: '2s'}}>
              <div className="w-16 h-16 primary-gradient rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Settings className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-4 leading-tight">Commissioning</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed">Complete system commissioning and testing to ensure optimal performance and reliability</p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="elevated-card p-8 bg-gradient-to-r from-white to-gray-50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">13+</div>
                <div className="text-[var(--medium-gray)] font-semibold">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">EPIC</div>
                <div className="text-[var(--medium-gray)] font-semibold">Service Solutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-[var(--medium-gray)] font-semibold">Industry Sectors</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-[var(--medium-gray)] font-semibold">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">Our Core Services</h2>
            <p className="text-lg text-[var(--medium-gray)] max-w-3xl mx-auto leading-relaxed">Comprehensive electrical and instrumentation solutions tailored to your needs with industry-leading expertise</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="elevated-card overflow-hidden">
              <div className="h-48 teal-gradient flex items-center justify-center relative overflow-hidden diagonal-pattern">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="text-center text-white relative z-10">
                  <Monitor className="h-12 w-12 mx-auto mb-4 floating-element" />
                  <h3 className="text-2xl font-bold">Power & Control Systems</h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-4 leading-tight">Design & Installation</h3>
                <p className="text-[var(--medium-gray)] mb-6 leading-relaxed">Complete system design, procurement, installation, and commissioning of electrical and control equipment with cutting-edge technology</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Custom system design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Professional installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">System commissioning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Performance testing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="elevated-card overflow-hidden">
              <div className="h-48 purple-gradient flex items-center justify-center relative overflow-hidden diagonal-pattern">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="text-center text-white relative z-10">
                  <Activity className="h-12 w-12 mx-auto mb-4 floating-element" style={{animationDelay: '2s'}} />
                  <h3 className="text-2xl font-bold">Instrumentation Systems</h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-4 leading-tight">Maintenance & Repair</h3>
                <p className="text-[var(--medium-gray)] mb-6 leading-relaxed">Comprehensive maintenance and repair services to ensure optimal performance of your equipment with 24/7 support</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Preventive maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Emergency repairs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Equipment upgrades</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] text-sm">Technical support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="teal-gradient text-white hover:opacity-90 shadow-lg px-8 py-3 font-bold rounded-xl transform hover:scale-105 transition-all duration-300"
              onClick={handleExploreServices}
            >
              Explore All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
