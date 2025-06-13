import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Radio, ServerCog, Award, Users, Globe, Clock } from "lucide-react";

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
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--primary-dark)] mb-8 tracking-tight">
              Trusted EPIC Solutions Partner
            </h2>
            <p className="text-2xl text-[var(--medium-gray)] max-w-5xl mx-auto leading-relaxed">
              Since 2011, West Wind Electric Power Ltd has been delivering comprehensive electrical, electronics and instrumentation services across Nigeria's power and maritime industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <div className="modern-card p-10 text-center floating-element">
              <div className="w-24 h-24 teal-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Compass className="text-white h-12 w-12" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-6">Engineering & Design</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed text-lg">Custom system design and engineering solutions for electrical, electronics, and instrumentation projects</p>
            </div>
            <div className="modern-card p-10 text-center floating-element" style={{animationDelay: '1s'}}>
              <div className="w-24 h-24 purple-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Radio className="text-white h-12 w-12" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-6">Procurement & Installation</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed text-lg">Professional procurement services and expert installation of control systems and electrical equipment</p>
            </div>
            <div className="modern-card p-10 text-center floating-element" style={{animationDelay: '2s'}}>
              <div className="w-24 h-24 primary-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <ServerCog className="text-white h-12 w-12" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-6">Commissioning</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed text-lg">Complete system commissioning and testing to ensure optimal performance and reliability</p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="elevated-card p-16 bg-gradient-to-r from-white to-gray-50 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
              <div>
                <div className="text-6xl font-bold gradient-text mb-4">13+</div>
                <div className="text-[var(--medium-gray)] text-xl font-semibold">Years of Excellence</div>
              </div>
              <div>
                <div className="text-6xl font-bold gradient-text mb-4">EPIC</div>
                <div className="text-[var(--medium-gray)] text-xl font-semibold">Service Solutions</div>
              </div>
              <div>
                <div className="text-6xl font-bold gradient-text mb-4">4</div>
                <div className="text-[var(--medium-gray)] text-xl font-semibold">Industry Sectors</div>
              </div>
              <div>
                <div className="text-6xl font-bold gradient-text mb-4">24/7</div>
                <div className="text-[var(--medium-gray)] text-xl font-semibold">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--primary-dark)] mb-8 tracking-tight">Our Core Services</h2>
            <p className="text-2xl text-[var(--medium-gray)] max-w-4xl mx-auto leading-relaxed">Comprehensive maritime electronics solutions tailored to your needs with industry-leading expertise</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="elevated-card overflow-hidden">
              <div className="h-80 teal-gradient flex items-center justify-center relative overflow-hidden diagonal-pattern">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="text-center text-white relative z-10">
                  <Compass className="h-24 w-24 mx-auto mb-8 floating-element" />
                  <h3 className="text-4xl font-bold">Navigation Control Systems</h3>
                </div>
              </div>
              <div className="p-12">
                <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-6">Design & Installation</h3>
                <p className="text-[var(--medium-gray)] mb-8 leading-relaxed text-lg">Complete system design, procurement, installation, and commissioning of maritime electronics equipment with cutting-edge technology</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Custom system design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Professional installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">System commissioning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 teal-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Performance testing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="elevated-card overflow-hidden">
              <div className="h-80 purple-gradient flex items-center justify-center relative overflow-hidden diagonal-pattern">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="text-center text-white relative z-10">
                  <Radio className="h-24 w-24 mx-auto mb-8 floating-element" style={{animationDelay: '2s'}} />
                  <h3 className="text-4xl font-bold">Communication Systems</h3>
                </div>
              </div>
              <div className="p-12">
                <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-6">Maintenance & Repair</h3>
                <p className="text-[var(--medium-gray)] mb-8 leading-relaxed text-lg">Comprehensive maintenance and repair services to ensure optimal performance of your maritime equipment with 24/7 support</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Preventive maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Emergency repairs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Equipment upgrades</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 purple-gradient rounded-full"></div>
                    <span className="text-[var(--medium-gray)] font-medium">Technical support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <Button 
              size="lg"
              className="teal-gradient text-white hover:opacity-90 shadow-2xl px-16 py-6 text-xl font-bold rounded-2xl transform hover:scale-105 transition-all duration-300"
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
