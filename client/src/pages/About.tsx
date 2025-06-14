import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Award, MonitorSpeaker, Zap, Building, Factory, Globe, Settings, Users, Star, Shield } from "lucide-react";
import aboutHeroImage from "@assets/alexander-kovalev-mIG_NqkYBoI-unsplash_1749906855750.jpg";

export default function About() {
  return (
    <div className="page-transition">
      {/* About Hero */}
      <Hero
        title="About Us"
        subtitle="Excellence in Electrical, Electronics and Instrumentation Services since 2011"
        backgroundImage={aboutHeroImage}
      />

      {/* Who We Are */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">Who We Are</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 mx-4">
            <div className="px-4">
              <div className="space-y-6 text-lg text-black leading-relaxed">
                <p>
                  <strong className="text-black">WEST WIND ELECTRIC POWER LTD</strong> is an independent service provider offering a wide range of Electrical, Electronics and instrumentation services.
                </p>
                <p>
                  We are a company registered under the Corporate Affairs Commission of Nigeria on <strong className="text-black">July 26th, 2011</strong> with RC number <strong className="text-black">968009</strong>.
                </p>
                <p>
                  We specialize in the <strong className="text-black">engineering, procurement, installation, and commissioning (EPIC)</strong> of electrical, electronics, instrumentation, and control systems, aiming to establish ourselves as a leading force in the industry.
                </p>
              </div>
            </div>
            <div className="elevated-card p-10 bg-white border border-gray-200">
              <div className="grid grid-cols-2 gap-10 text-center">
                <div className="group">
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">2011</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Established</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">13+</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-[var(--bright-coral)] mb-2">EPIC</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Services</div>
                </div>
                <div className="group">
                  <div className="text-lg font-bold text-[var(--bright-coral)] mb-2">968009</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">RC Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-20 mx-4">
            <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-12 text-center tracking-tight">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--primary-blue)] transition-colors duration-300">
                  <Building className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Building Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
              </div>
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--primary-blue)] transition-colors duration-300">
                  <Zap className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Power Generation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Advanced power generation and distribution networks</p>
              </div>
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--primary-blue)] transition-colors duration-300">
                  <Factory className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Industrial Plants</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Process automation and control systems</p>
              </div>
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--primary-blue)] transition-colors duration-300">
                  <MonitorSpeaker className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Marine Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Navigation and communication equipment</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-12 bg-gray-100">
            <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-10 text-center tracking-tight">Technical Coverage Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Control Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Transformers</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--accent-teal)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-[var(--primary-blue)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 tracking-tight">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="h-6 w-6 text-[var(--primary-blue)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 tracking-tight">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide solution-oriented services to our customers, shareholders and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-[var(--primary-blue)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 tracking-tight">Our Core Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
            </div>

            <div className="modern-card p-6 bg-white border border-gray-200">
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-[var(--accent-teal)] rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2">Customer Focus</h4>
                  <p className="text-gray-600 text-sm">Understanding and exceeding expectations</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-[var(--accent-teal)] rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2">Excellence</h4>
                  <p className="text-gray-600 text-sm">Delivering professional services beyond expectations</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-[var(--accent-teal)] rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2">Responsibility</h4>
                  <p className="text-gray-600 text-sm">Taking full accountability for our actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
