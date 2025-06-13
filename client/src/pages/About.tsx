import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Award, Handshake, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition">
      {/* About Hero */}
      <Hero
        title="About West Wind Marine Electronics"
        subtitle="Pioneering maritime electronics solutions across West Africa since 2019"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--corporate-dark)] mb-8">Our Story</h2>
              <p className="text-[var(--corporate-gray)] mb-8 leading-relaxed text-lg">
                West Wind Marine Electronics Ltd was born out of passion to provide top-notch services and solutions to customers in the areas of Navigation, communication, automation, and electrical solutions in the Maritime industry particularly in Nigeria and across Africa.
              </p>
              <p className="text-[var(--corporate-gray)] mb-8 leading-relaxed text-lg">
                Registered under the Corporate Affairs Commission of Nigeria on February 5th, 2019 with RC number 1558935, we have established ourselves as a solution provider and integrator of Navigation and communication equipment.
              </p>
              <div className="corporate-card rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                <h3 className="font-bold text-[var(--corporate-dark)] mb-4 text-xl">Company Registration Details</h3>
                <div className="space-y-2">
                  <p className="text-[var(--corporate-gray)]"><span className="font-semibold">RC Number:</span> 1558935</p>
                  <p className="text-[var(--corporate-gray)]"><span className="font-semibold">Registration Date:</span> February 5th, 2019</p>
                  <p className="text-[var(--corporate-gray)]"><span className="font-semibold">Registered with:</span> Corporate Affairs Commission of Nigeria</p>
                </div>
              </div>
            </div>
            <div>
              <div className="corporate-card rounded-3xl overflow-hidden shadow-2xl">
                <div className="h-96 corporate-gradient flex items-center justify-center text-white relative">
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="text-center relative z-10">
                    <Handshake className="h-24 w-24 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-3">Professional Nigerian Business Team</h3>
                    <p className="text-blue-100 text-lg">Maritime Office Setting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="corporate-card rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 corporate-gradient rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Eye className="text-white h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--corporate-dark)] mb-6">Our Vision</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed text-lg">
                To grow organically into a knowledge-based organization and a pace setter in marine Navigation and communication around the Gulf of Guinea, providing innovative solutions that enhance maritime safety and efficiency.
              </p>
            </div>

            <div className="corporate-card rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 accent-gradient rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="text-white h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--corporate-dark)] mb-6">Our Mission</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed text-lg">
                To provide customers with quality service and competitive solutions in navigation, communication, automation, and electrical systems, ensuring the highest standards of maritime safety and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--corporate-dark)] mb-6">Our Core Values</h2>
            <p className="text-xl text-[var(--corporate-gray)]">The principles that guide everything we do</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center corporate-card rounded-2xl p-8">
              <div className="w-20 h-20 corporate-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Excellence</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed">We strive for excellence in every project, delivering solutions that exceed expectations</p>
            </div>

            <div className="text-center corporate-card rounded-2xl p-8">
              <div className="w-20 h-20 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Handshake className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Reliability</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed">Our clients trust us to deliver consistent, dependable solutions and services</p>
            </div>

            <div className="text-center corporate-card rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--success-green)] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lightbulb className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--corporate-dark)] mb-4">Innovation</h3>
              <p className="text-[var(--corporate-gray)] leading-relaxed">We embrace cutting-edge technology to provide innovative maritime solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
