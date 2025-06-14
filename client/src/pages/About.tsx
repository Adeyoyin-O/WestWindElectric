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
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight bg-white px-8 relative">Who We Are</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] mx-auto rounded-full"></div>
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
            <div className="elevated-card p-8 bg-gradient-to-br from-white via-blue-50/10 to-slate-50/40 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
              <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                <div className="group">
                  <div className="text-3xl font-bold gradient-text mb-2 accent-dot">2011</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Established</div>
                  <div className="w-8 h-px bg-gradient-to-r from-[var(--accent-steel)] to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold gradient-text mb-2 accent-dot">13+</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Years Experience</div>
                  <div className="w-8 h-px bg-gradient-to-r from-[var(--accent-electric)] to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold gradient-text mb-2 accent-dot">EPIC</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Services</div>
                  <div className="w-8 h-px bg-gradient-to-r from-[var(--primary-blue)] to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold gradient-text mb-2 accent-dot">968009</div>
                  <div className="text-[var(--medium-gray)] font-semibold">RC Number</div>
                  <div className="w-8 h-px bg-gradient-to-r from-[var(--secondary-gray)] to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-16 mx-4">
            <div className="text-center mb-8 relative">
              <h3 className="text-2xl font-semibold text-[var(--primary-dark)] tracking-tight relative inline-block">
                Technical Expertise
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full"></div>
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-all duration-300 group relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full opacity-30"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shimmer">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Building Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-all duration-300 group relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full opacity-30"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shimmer">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Power Generation</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Advanced power generation and distribution networks</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-slate-50/40 hover:shadow-lg transition-all duration-300 group relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-[var(--dark-steel)] to-[var(--secondary-gray)] rounded-full opacity-30"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--dark-steel)] to-[var(--secondary-gray)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shimmer">
                  <Factory className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Industrial Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Process automation and control systems</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white to-slate-50/30 hover:shadow-lg transition-all duration-300 group relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-[var(--secondary-gray)] to-[var(--primary-dark)] rounded-full opacity-30"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--secondary-gray)] to-[var(--primary-dark)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shimmer">
                  <MonitorSpeaker className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Marine Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Navigation and communication equipment</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-8 bg-gradient-to-br from-slate-50/50 to-blue-50/30 technical-grid border-l-4 border-blue-300/70 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-blue-300/70 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-slate-300/60 to-transparent"></div>
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-6 text-center technical-heading relative">
              Technical Coverage Areas
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </h3>
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

      {/* Section Divider */}
      <div className="py-8 bg-gradient-to-r from-transparent via-slate-200/30 to-transparent">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-[var(--accent-electric)] to-[var(--primary-blue)] rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-slate-300 to-slate-300"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-slate-100/50 via-blue-50/30 to-slate-100/50 industrial-texture">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-8 bg-gradient-to-br from-white to-blue-50/20 border-l-3 border-slate-300/80 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 steel-gradient rounded-lg flex items-center justify-center mb-6 shadow-md relative">
                <Server className="text-white h-8 w-8" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-steel)] to-[var(--dark-steel)] rounded-lg blur opacity-25"></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-8 bg-gradient-to-br from-white to-blue-50/20 border-l-3 border-slate-300/80 hover:shadow-xl transition-all duration-300">
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
            <div className="modern-card p-10 text-center bg-gradient-to-br from-white via-blue-50/10 to-white backdrop-blur-sm border-t-3 border-blue-300/70 shadow-xl">
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
