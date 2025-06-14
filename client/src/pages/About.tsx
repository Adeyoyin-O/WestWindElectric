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
      <section className="section-spacing bg-white">
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
            <div className="elevated-card p-8 bg-gradient-to-br from-white to-gray-50">
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
              <div className="modern-card p-6 text-center">
                <Building className="h-10 w-10 mx-auto mb-4 text-[var(--accent-steel)]" />
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Building Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
              </div>
              <div className="modern-card p-6 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4 text-[var(--accent-electric)]" />
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Power Generation</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Advanced power generation and distribution networks</p>
              </div>
              <div className="modern-card p-6 text-center">
                <Factory className="h-10 w-10 mx-auto mb-4 text-[var(--dark-steel)]" />
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Industrial Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Process automation and control systems</p>
              </div>
              <div className="modern-card p-6 text-center">
                <MonitorSpeaker className="h-10 w-10 mx-auto mb-4 text-[var(--secondary-gray)]" />
                <h4 className="text-base font-semibold text-[var(--primary-dark)] mb-2 leading-tight">Marine Systems</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Navigation and communication equipment</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-8 bg-white">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-6 text-center technical-heading">Technical Coverage Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-steel)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Control Panels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-electric)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-dark)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-steel)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-electric)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Transformers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-dark)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-steel)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-electric)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-dark)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-steel)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-electric)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-dark)] rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm professional-text">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-8">
              <div className="w-16 h-16 steel-gradient rounded-sm flex items-center justify-center mb-6 shadow-sm">
                <Server className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-8">
              <div className="w-16 h-16 electric-gradient rounded-sm flex items-center justify-center mb-6 shadow-sm">
                <Cpu className="text-white h-8 w-8" />
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
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 primary-gradient rounded-sm flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Shield className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 technical-heading">Our Core Values</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed professional-text">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
