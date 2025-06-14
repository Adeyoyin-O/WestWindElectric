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
      <section className="section-spacing dynamic-gradient relative overflow-hidden">
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
            <div className="elevated-card p-8 bg-gradient-to-br from-white/90 via-cyan-50/30 to-blue-50/25 backdrop-blur-lg border-l-4 border-[var(--accent-cyan)]">
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
                <div className="w-16 h-16 cyan-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Building Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Electrical infrastructure for commercial and industrial facilities</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] mx-auto rounded-full"></div>
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
                <div className="w-16 h-16 orange-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Industrial Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Process automation and control systems</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-purple)] mx-auto rounded-full"></div>
              </div>
              <div className="modern-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 premium-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <MonitorSpeaker className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight technical-heading">Marine Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed professional-text">Navigation and communication equipment</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-10 bg-gradient-to-br from-white/90 via-purple-50/25 to-cyan-50/20 backdrop-blur-xl border-2 border-white/40">
            <div className="text-center mb-8">
              <div className="w-20 h-20 premium-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] technical-heading">Technical Coverage Areas</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-orange)] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-cyan-100/50">
                <div className="w-4 h-4 cyan-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Control Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-blue-100/50">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-purple-100/50">
                <div className="w-4 h-4 primary-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-orange-100/50">
                <div className="w-4 h-4 orange-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-yellow-100/50">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Transformers</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-cyan-100/50">
                <div className="w-4 h-4 cyan-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-purple-100/50">
                <div className="w-4 h-4 primary-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-blue-100/50">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-orange-100/50">
                <div className="w-4 h-4 orange-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-cyan-100/50">
                <div className="w-4 h-4 cyan-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-purple-100/50">
                <div className="w-4 h-4 premium-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white/85 p-4 rounded-xl backdrop-blur-md hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group border border-blue-100/50">
                <div className="w-4 h-4 electric-gradient rounded-full shadow-md group-hover:shadow-xl transition-all duration-300"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 circuit-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-cyan-50/40 to-purple-50/30"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-4 technical-heading">Our Foundation</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-orange)] mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mx-4">
            <div className="modern-card p-10 group hover:scale-105">
              <div className="w-20 h-20 cyan-gradient rounded-2xl flex items-center justify-center mb-8 shadow-2xl relative group-hover:shadow-3xl transition-all duration-500">
                <Server className="text-white h-10 w-10" />
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-electric)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 technical-heading">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text text-lg mb-6">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full"></div>
            </div>

            <div className="modern-card p-10 group hover:scale-105">
              <div className="w-20 h-20 electric-gradient rounded-2xl flex items-center justify-center mb-8 shadow-2xl relative group-hover:shadow-3xl transition-all duration-500">
                <Cpu className="text-white h-10 w-10" />
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--accent-gold)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 technical-heading">Our Mission</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text text-lg mb-6">
                To provide solution-oriented services to our customers, shareholders and stakeholders.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--accent-orange)] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 premium-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-orange-50/25 to-purple-50/30"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 premium-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl relative">
                <Shield className="text-white h-12 w-12" />
                <div className="absolute -inset-3 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-orange)] rounded-3xl blur opacity-30"></div>
              </div>
              <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-4 technical-heading">Our Core Values</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-orange)] mx-auto rounded-full mb-8"></div>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text text-xl max-w-3xl mx-auto">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
            </div>
            
            {/* Value pillars */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="elevated-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 cyan-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3 technical-heading">Customer Focus</h4>
                <p className="text-[var(--medium-gray)] professional-text">Understanding and exceeding client expectations through dedicated service</p>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="elevated-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 electric-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3 technical-heading">Excellence</h4>
                <p className="text-[var(--medium-gray)] professional-text">Delivering superior quality and precision in every engineering solution</p>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--accent-gold)] mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="elevated-card p-8 text-center group hover:scale-105">
                <div className="w-16 h-16 orange-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3 technical-heading">Responsibility</h4>
                <p className="text-[var(--medium-gray)] professional-text">Taking full accountability for our actions and delivering on commitments</p>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-purple)] mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
