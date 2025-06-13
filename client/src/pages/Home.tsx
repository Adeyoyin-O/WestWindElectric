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
        title={
          <>
            Leading Maritime <span className="gradient-text">Electronics Solutions</span> in West Africa
          </>
        }
        subtitle="Providing top-notch navigation, communication, automation, and electrical solutions to the maritime industry across Nigeria and Africa"
        showButtons
        onPrimaryClick={handleExploreServices}
        onSecondaryClick={handleGetConsultation}
        primaryButtonText="Explore Solutions"
        secondaryButtonText="Get Consultation"
      />

      {/* Company Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--corporate-dark)] mb-6">
              Trusted Maritime Electronics Partner
            </h2>
            <p className="text-xl text-[var(--corporate-gray)] max-w-4xl mx-auto leading-relaxed">
              Since 2019, West Wind Marine Electronics Ltd has been setting the pace in marine navigation and communication solutions across the Gulf of Guinea
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="corporate-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 corporate-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Compass className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Navigation Systems</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed">Advanced navigation equipment for safe and efficient maritime operations with cutting-edge technology</p>
            </div>
            <div className="corporate-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 corporate-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Radio className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Communication Solutions</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed">Reliable communication systems for maritime safety and operations ensuring seamless connectivity</p>
            </div>
            <div className="corporate-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 corporate-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ServerCog className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Automation & Electrical</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed">Complete automation and electrical solutions for modern vessels with intelligent control systems</p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="corporate-gradient rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-[var(--accent-orange)] mb-3">5+</div>
                <div className="text-blue-100 text-lg font-medium">Years of Excellence</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[var(--accent-orange)] mb-3">100+</div>
                <div className="text-blue-100 text-lg font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[var(--accent-orange)] mb-3">50+</div>
                <div className="text-blue-100 text-lg font-medium">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[var(--accent-orange)] mb-3">24/7</div>
                <div className="text-blue-100 text-lg font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--corporate-dark)] mb-6">Our Core Services</h2>
            <p className="text-xl text-[var(--corporate-gray)] max-w-3xl mx-auto">Comprehensive maritime electronics solutions tailored to your needs with industry-leading expertise</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="corporate-card rounded-3xl overflow-hidden">
              <div className="h-64 corporate-gradient flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <Compass className="h-20 w-20 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold">Navigation Control Systems</h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Design & Installation</h3>
                <p className="text-[var(--corporate-gray)] mb-6 leading-relaxed">Complete system design, procurement, installation, and commissioning of maritime electronics equipment with cutting-edge technology</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Custom system design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Professional installation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">System commissioning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 accent-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Performance testing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="corporate-card rounded-3xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[var(--accent-orange)] to-orange-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="text-center text-white relative z-10">
                  <Radio className="h-20 w-20 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold">Communication Systems</h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Maintenance & Repair</h3>
                <p className="text-[var(--corporate-gray)] mb-6 leading-relaxed">Comprehensive maintenance and repair services to ensure optimal performance of your maritime equipment with 24/7 support</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 corporate-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Preventive maintenance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 corporate-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Emergency repairs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 corporate-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Equipment upgrades</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 corporate-gradient rounded-full"></div>
                    <span className="text-sm text-[var(--corporate-gray)]">Technical support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="corporate-gradient text-white hover:opacity-90 shadow-xl px-12 py-4 text-lg font-semibold rounded-xl"
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
