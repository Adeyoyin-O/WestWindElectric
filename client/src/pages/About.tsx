import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Award, MonitorSpeaker, Zap, Building, Factory, Globe, Settings, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
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
                  We are a company registered under the Corporate Affairs Commission of Nigeria on July 26th, 2011 with RC number 968009.
                </p>
                <p>
                  We specialize in the engineering, procurement, installation, and commissioning (EPIC) of electrical, electronics, instrumentation, and control systems, aiming to establish ourselves as a leading force in the industry.
                </p>
              </div>
            </div>
            <div className="elevated-card p-10 bg-gradient-to-br from-white via-blue-50 to-white border border-gray-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--primary-blue)] to-transparent opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[var(--bright-coral)] to-transparent opacity-10 rounded-tr-full"></div>
              
              <div className="grid grid-cols-2 gap-10 text-center relative z-10">
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">2011</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Established</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">13+</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-2xl font-bold text-[var(--bright-coral)] mb-2">EPIC</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Services</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-lg font-bold text-[var(--bright-coral)] mb-2">968009</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">RC Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="mb-20 mx-4">
            <div className="text-center mb-12">
              <span className="text-sm font-bold text-[var(--bright-coral)] uppercase tracking-wider mb-2 block">Our Capabilities</span>
              <h3 className="text-2xl font-semibold text-[var(--primary-dark)] tracking-tight">Technical Expertise</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)] to-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-transparent group-hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-blue)] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Building Systems</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Infrastructure</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Commercial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--bright-coral)] to-red-600 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-transparent group-hover:border-red-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--bright-coral)] to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Power Generation</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">Advanced power generation and distribution networks</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Generation</span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Distribution</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-transparent group-hover:border-slate-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Factory className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Industrial Plants</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">Process automation and control systems</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">Automation</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">Control Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-transparent group-hover:border-teal-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MonitorSpeaker className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Marine Systems</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">Navigation and communication equipment</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Navigation</span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Communication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--primary-blue)] to-transparent opacity-5 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--bright-coral)] to-transparent opacity-5 rounded-tl-full"></div>
            
            <div className="text-center mb-10 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-1 bg-[var(--bright-coral)] rounded-full mr-2"></div>
                <div className="w-4 h-1 bg-[var(--primary-blue)] rounded-full mr-2"></div>
                <div className="w-2 h-1 bg-[var(--bright-coral)] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--primary-dark)] tracking-tight">Technical Coverage Areas</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--bright-coral)] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Control Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Generators & Pumps</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Turbo Generators</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Medium & Low Voltage Panels</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Transformers</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Ship Steering Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Gyrocompass</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Voyage Data Recorder</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Radio Survey on Ships & Rigs</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Bridge Equipment Installation</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">Navigation Systems</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="w-2 h-2 bg-[var(--bright-coral)] rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm font-medium">DC & AC Control Panels</span>
              </div>
            </div>
            
            {/* Link to Products & Services */}
            <div className="w-full text-center mt-6 pt-4 border-t border-gray-200">
              <Link 
                href="/products-services" 
                className="inline-flex items-center space-x-2 text-[var(--bright-coral)] hover:text-red-700 font-medium transition-colors duration-200 group"
              >
                <span>View Our Products & Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-20 h-20 border-2 border-[var(--primary-blue)] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-16 h-16 border-2 border-[var(--bright-coral)] rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 mx-4">
            <div className="modern-card p-8 bg-white border border-gray-200 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--primary-blue)] to-transparent opacity-10 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-blue)] to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 tracking-tight">Our Vision</h3>
                <div className="w-12 h-1 bg-[var(--primary-blue)] rounded-full mb-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
                </p>
              </div>
            </div>

            <div className="modern-card p-8 bg-white border border-gray-200 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--bright-coral)] to-transparent opacity-10 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-blue)] to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Compass className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4 tracking-tight">Our Mission</h3>
                <div className="w-12 h-1 bg-[var(--primary-blue)] rounded-full mb-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  To provide solution-oriented services to our customers, shareholders and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 bg-white">
        <div className="container mx-auto mx-4">
          <div className="modern-card p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gray-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-[var(--primary-blue)]" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-4 tracking-tight">Our Core Values</h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
                Our core values are centered on understanding customers' needs, providing professional services beyond expectations and taking full responsibility for our actions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-5 h-5 text-[var(--primary-blue)]" />
                    </div>
                  </div>
                  <div className="pt-8 text-center">
                    <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-4">Customer Focus</h4>
                    <p className="text-gray-600 leading-relaxed">Understanding and exceeding expectations through dedicated service and attention to detail</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-5 h-5 text-[var(--primary-blue)]" />
                    </div>
                  </div>
                  <div className="pt-8 text-center">
                    <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-4">Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">Delivering professional services beyond expectations with the highest quality standards</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-[var(--primary-blue)]" />
                    </div>
                  </div>
                  <div className="pt-8 text-center">
                    <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-4">Responsibility</h4>
                    <p className="text-gray-600 leading-relaxed">Taking full accountability for our actions and maintaining ethical business practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
