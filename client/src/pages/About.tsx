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
      <section className="section-spacing bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 circuit-pattern">
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
            <div className="elevated-card p-8 bg-gradient-to-br from-white via-blue-50/10 to-slate-50/40 backdrop-blur-sm">
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
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Building Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Power Generation</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Advanced power generation and distribution networks</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-slate-50/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--dark-steel)] to-[var(--secondary-gray)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Industrial Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Process automation and control systems</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-slate-50/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--secondary-gray)] to-[var(--primary-dark)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MonitorSpeaker className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Marine Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Navigation and communication equipment</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-8 bg-gradient-to-br from-slate-50/50 to-blue-50/30 technical-grid border-l-2 border-blue-200/60">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-6 text-center technical-heading">Technical Coverage Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Control Panels</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-gray)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Transformers</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-gray)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-gray)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 p-3 rounded-md backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
                <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--secondary-gray)] rounded-full shadow-sm"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-slate-100/50 via-blue-50/30 to-slate-100/50 industrial-texture">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-8 bg-gradient-to-br from-white to-blue-50/20 border-l border-slate-200/80 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 steel-gradient rounded-lg flex items-center justify-center mb-6 shadow-md relative">
                <Server className="text-white h-8 w-8" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-lg blur opacity-25"></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-8 bg-gradient-to-br from-white to-blue-50/20 border-l border-slate-200/80 hover:shadow-xl transition-all duration-300">
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
            <div className="modern-card p-10 text-center bg-gradient-to-br from-white via-blue-50/10 to-white backdrop-blur-sm border-t border-blue-200/50 shadow-xl">
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
