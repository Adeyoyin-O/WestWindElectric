import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cpu, MonitorSpeaker, Shield, Zap, Building, Factory, Globe, Settings } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition">
      {/* About Hero */}
      <Hero
        title="About Us"
        subtitle="Excellence in Electrical, Electronics and Instrumentation Services since 2011"
        backgroundImage="https://images.unsplash.com/photo-1581092918484-8313f4b19a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Who We Are */}
      <section className="section-spacing premium-mesh relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">Who We Are</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 mx-4">
            <div className="px-4">
              <div className="space-y-6 text-lg text-[var(--medium-gray)] leading-relaxed">
                <p>
                  <strong className="text-[var(--primary-dark)]">WEST WIND ELECTRIC POWER LTD</strong> is an independent service provider offering a wide range of Electrical, Electronics and instrumentation services.
                </p>
                <p>
                  We are a company registered under the Corporate Affairs Commission of Nigeria on <strong className="text-[var(--primary-dark)]">July 26th, 2011</strong> with RC number <strong className="text-[var(--primary-dark)]">968009</strong>.
                </p>
                <p>
                  We specialize in the <strong className="text-[var(--primary-dark)]">engineering, procurement, installation, and commissioning (EPIC)</strong> of electrical, electronics, instrumentation, and control systems, aiming to establish ourselves as a leading force in the industry.
                </p>
              </div>
            </div>
            <div className="elevated-card p-8 bg-gradient-to-br from-white/95 via-blue-50/20 to-slate-50/30 backdrop-blur-md border-l-4 border-[var(--accent-gold)]">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">2011</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Established</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">13+</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">EPIC</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">968009</div>
                  <div className="text-[var(--medium-gray)] font-semibold">RC Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-16 mx-4">
            <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-8 text-center tracking-tight">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="modern-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 steel-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Building Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Electrical infrastructure for commercial and industrial facilities</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
              </div>
              <div className="modern-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 electric-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Power Generation</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Advanced power generation and distribution networks</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
              </div>
              <div className="modern-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Industrial Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Process automation and control systems</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
              </div>
              <div className="modern-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 premium-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <MonitorSpeaker className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Marine Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Navigation and communication equipment</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--premium-navy)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-10 bg-gradient-to-br from-white/95 via-slate-50/40 to-blue-50/20 backdrop-blur-lg border-2 border-white/30">
            <div className="text-center mb-8">
              <div className="w-20 h-20 premium-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] technical-heading">Technical Coverage Areas</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-electric)] via-[var(--accent-gold)] to-[var(--accent-electric)] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 steel-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Control Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 primary-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 steel-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Transformers</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 primary-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 steel-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 primary-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 steel-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl backdrop-blur-md hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                <div className="w-4 h-4 primary-gradient rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-slate-100/50 via-blue-50/30 to-slate-100/50 industrial-texture">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-8 bg-gradient-to-br from-white to-blue-50/20 border-l-4 border-[var(--accent-steel)] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 steel-gradient rounded-lg flex items-center justify-center mb-6 shadow-md relative">
                <Server className="text-white h-8 w-8" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-lg blur opacity-25"></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-8 bg-gradient-to-br from-white to-blue-50/20 border-l-4 border-[var(--accent-electric)] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 electric-gradient rounded-lg flex items-center justify-center mb-6 shadow-md relative">
                <Cpu className="text-white h-8 w-8" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-lg blur opacity-25"></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Mission</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                To provide solution-oriented services to our customers, shareholders and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-br from-white to-slate-50/40 circuit-pattern">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="modern-card p-10 text-center bg-gradient-to-br from-white via-blue-50/10 to-white backdrop-blur-sm border-t-4 border-[var(--primary-blue)] shadow-xl">
              <div className="w-20 h-20 primary-gradient rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg relative">
                <Shield className="text-white h-10 w-10" />
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-gray)] rounded-xl blur opacity-20"></div>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-6 technical-heading">Our Core Values</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text text-lg max-w-2xl mx-auto">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
              
              {/* Value highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-[var(--primary-dark)]">Customer Focus</span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-[var(--primary-dark)]">Excellence</span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-gray)] rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-[var(--primary-dark)]">Responsibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
