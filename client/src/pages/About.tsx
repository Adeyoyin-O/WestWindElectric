import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Award, Handshake, Lightbulb, Building, Zap, Globe, Settings } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition">
      {/* About Hero */}
      <Hero
        title="About West Wind Electric Power Ltd"
        subtitle="Excellence in Electrical, Electronics and Instrumentation Services since 2011"
      />

      {/* Who We Are */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">Who We Are</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
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
            <div className="elevated-card p-12 bg-gradient-to-br from-white to-gray-50">
              <div className="grid grid-cols-2 gap-12 text-center">
                <div>
                  <div className="text-5xl font-bold gradient-text mb-4">2011</div>
                  <div className="text-[var(--medium-gray)] text-lg font-semibold">Established</div>
                </div>
                <div>
                  <div className="text-5xl font-bold gradient-text mb-4">13+</div>
                  <div className="text-[var(--medium-gray)] text-lg font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold gradient-text mb-4">EPIC</div>
                  <div className="text-[var(--medium-gray)] text-lg font-semibold">Services</div>
                </div>
                <div>
                  <div className="text-5xl font-bold gradient-text mb-4">968009</div>
                  <div className="text-[var(--medium-gray)] text-lg font-semibold">RC Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-[var(--primary-dark)] mb-12 text-center">Our Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="modern-card p-8 text-center">
                <Building className="h-16 w-16 mx-auto mb-6 text-teal-600" />
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Building Construction</h4>
                <p className="text-[var(--medium-gray)]">Complete electrical systems for commercial and industrial buildings</p>
              </div>
              <div className="modern-card p-8 text-center">
                <Zap className="h-16 w-16 mx-auto mb-6 text-purple-600" />
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Power Plants</h4>
                <p className="text-[var(--medium-gray)]">Advanced power generation and distribution systems</p>
              </div>
              <div className="modern-card p-8 text-center">
                <Settings className="h-16 w-16 mx-auto mb-6 text-blue-600" />
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Manufacturing Plants</h4>
                <p className="text-[var(--medium-gray)]">Industrial automation and control systems</p>
              </div>
              <div className="modern-card p-8 text-center">
                <Globe className="h-16 w-16 mx-auto mb-6 text-indigo-600" />
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Vessels</h4>
                <p className="text-[var(--medium-gray)]">Maritime navigation and communication systems</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-12 bg-gradient-to-r from-white to-gray-50">
            <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-8 text-center">Technical Coverage Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Control Panels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Transformers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 teal-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 purple-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 primary-gradient rounded-full"></div>
                <span className="text-[var(--medium-gray)] font-medium">DC & AC Control Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="modern-card p-12">
              <div className="w-24 h-24 teal-gradient rounded-3xl flex items-center justify-center mb-10 shadow-2xl floating-element">
                <Eye className="text-white h-12 w-12" />
              </div>
              <h3 className="text-4xl font-bold text-[var(--primary-dark)] mb-8">Our Vision</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed text-xl">
                To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
              </p>
            </div>

            <div className="modern-card p-12">
              <div className="w-24 h-24 purple-gradient rounded-3xl flex items-center justify-center mb-10 shadow-2xl floating-element" style={{animationDelay: '1s'}}>
                <Target className="text-white h-12 w-12" />
              </div>
              <h3 className="text-4xl font-bold text-[var(--primary-dark)] mb-8">Our Mission</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed text-xl">
                To provide solution-oriented services to our customers, shareholders and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--primary-dark)] mb-8 tracking-tight">Our Core Values</h2>
            <p className="text-2xl text-[var(--medium-gray)] max-w-4xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="elevated-card p-16 bg-gradient-to-r from-white to-gray-50">
            <div className="text-center">
              <div className="w-32 h-32 primary-gradient rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl floating-element">
                <Handshake className="text-white h-16 w-16" />
              </div>
              <h3 className="text-4xl font-bold text-[var(--primary-dark)] mb-8">Customer-Centric Excellence</h3>
              <p className="text-[var(--medium-gray)] leading-relaxed text-2xl max-w-5xl mx-auto">
                Our core value is centered on understanding customers' needs, providing professional services beyond customers' expectations and taking full responsibility for our actions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
