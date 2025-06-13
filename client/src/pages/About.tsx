import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cpu, Activity, Shield, Lightbulb, Building, Zap, Globe, Settings } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition">
      {/* About Hero */}
      <Hero
        title="About West Wind Electric Power Ltd"
        subtitle="Excellence in Electrical, Electronics and Instrumentation Services since 2011"
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
            <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-8 text-center">Our Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="modern-card p-8 text-center">
                <Building className="h-12 w-12 mx-auto mb-4 text-teal-600" />
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-3 leading-tight">Building Construction</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Complete electrical systems for commercial and industrial buildings</p>
              </div>
              <div className="modern-card p-8 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-3 leading-tight">Power Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Advanced power generation and distribution systems</p>
              </div>
              <div className="modern-card p-8 text-center">
                <Settings className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-3 leading-tight">Manufacturing Plants</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Industrial automation and control systems</p>
              </div>
              <div className="modern-card p-8 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-3 leading-tight">Vessels</h4>
                <p className="text-[var(--medium-gray)] text-sm leading-relaxed">Maritime navigation and communication systems</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-8 bg-gradient-to-r from-white to-gray-50">
            <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-6 text-center">Technical Coverage Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Control Panels</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Transformers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] text-sm">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-8">
              <div className="w-16 h-16 teal-gradient rounded-lg flex items-center justify-center mb-6 shadow-sm floating-element">
                <Database className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-8">
              <div className="w-16 h-16 purple-gradient rounded-lg flex items-center justify-center mb-6 shadow-sm floating-element" style={{animationDelay: '1s'}}>
                <Cpu className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4">Our Mission</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed">
                To provide solution-oriented services to our customers, shareholders and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 primary-gradient rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm floating-element">
                <Shield className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4">Our Core Values</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
