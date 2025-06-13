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
          <div className="maritime-gradient rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--gold)] mb-2">5+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--gold)] mb-2">100+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--gold)] mb-2">50+</div>
                <div className="text-blue-100">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--gold)] mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--navy)] mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive maritime electronics solutions tailored to your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <Compass className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Navigation Control Room</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Design & Installation</h3>
                <p className="text-gray-600 mb-4">Complete system design, procurement, installation, and commissioning of maritime electronics equipment</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom system design</li>
                  <li>• Professional installation</li>
                  <li>• System commissioning</li>
                  <li>• Performance testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <Radio className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Communication Systems</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Maintenance & Repair</h3>
                <p className="text-gray-600 mb-4">Comprehensive maintenance and repair services to ensure optimal performance of your maritime equipment</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Preventive maintenance</li>
                  <li>• Emergency repairs</li>
                  <li>• Equipment upgrades</li>
                  <li>• Technical support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
