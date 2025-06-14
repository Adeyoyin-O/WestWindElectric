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
            <div className="elevated-card p-8 bg-gradient-to-br from-white via-indigo-50/15 to-blue-50/25 backdrop-blur-sm border-l-4 border-gradient-to-b from-blue-400 to-purple-500">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">2011</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Established</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">13+</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Years Experience</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">EPIC</div>
                  <div className="text-[var(--medium-gray)] font-semibold">Services</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">968009</div>
                  <div className="text-[var(--medium-gray)] font-semibold">RC Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-16 mx-4">
            <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-8 text-center tracking-tight">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/30 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-2 border-blue-200">
                <div className="w-14 h-14 teal-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:rotate-3 transition-transform duration-300">
                  <Building className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Building Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white via-yellow-50/20 to-orange-50/30 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-2 border-orange-200">
                <div className="w-14 h-14 orange-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:rotate-3 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Power Generation</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Advanced power generation and distribution networks</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white via-green-50/20 to-emerald-50/30 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-2 border-green-200">
                <div className="w-14 h-14 green-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:rotate-3 transition-transform duration-300">
                  <Factory className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Industrial Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Process automation and control systems</p>
              </div>
              <div className="modern-card p-6 text-center bg-gradient-to-br from-white via-purple-50/20 to-violet-50/30 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-2 border-purple-200">
                <div className="w-14 h-14 purple-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:rotate-3 transition-transform duration-300">
                  <MonitorSpeaker className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Marine Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Navigation and communication equipment</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-8 bg-gradient-to-br from-indigo-50/30 via-blue-50/20 to-cyan-50/30 technical-grid border-l-4 border-gradient-to-b from-blue-400 to-indigo-500 shadow-lg">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-8 text-center technical-heading">Technical Coverage Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-cyan-100">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Control Panels</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-emerald-100">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-orange-100">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-purple-100">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-pink-100">
                <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Transformers</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-blue-100">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-green-100">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-indigo-100">
                <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-amber-100">
                <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-teal-100">
                <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-violet-100">
                <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-md"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text font-medium">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-sm border border-slate-100">
                <div className="w-4 h-4 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full shadow-md"></div>
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
            <div className="modern-card p-8 bg-gradient-to-br from-white via-emerald-50/15 to-teal-50/25 border-l-4 border-emerald-400 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-18 h-18 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative group-hover:rotate-6 transition-transform duration-300">
                <Server className="text-white h-9 w-9" />
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-30"></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-8 bg-gradient-to-br from-white via-orange-50/15 to-amber-50/25 border-l-4 border-orange-400 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-18 h-18 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative group-hover:rotate-6 transition-transform duration-300">
                <Cpu className="text-white h-9 w-9" />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl blur opacity-30"></div>
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
            <div className="modern-card p-10 text-center bg-gradient-to-br from-white via-indigo-50/10 to-purple-50/15 backdrop-blur-sm border-t-4 border-gradient-to-r from-indigo-400 to-purple-500 shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl relative group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white h-12 w-12" />
                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 rounded-3xl blur opacity-25"></div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6 technical-heading">Our Core Values</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text text-lg max-w-2xl mx-auto">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
              
              {/* Value highlights */}
              <div className="grid md:grid-cols-3 gap-8 mt-10 pt-8 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-base font-semibold text-[var(--primary-dark)]">Customer Focus</span>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-base font-semibold text-[var(--primary-dark)]">Excellence</span>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-base font-semibold text-[var(--primary-dark)]">Responsibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
