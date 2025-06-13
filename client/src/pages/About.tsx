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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                West Wind Marine Electronics Ltd was born out of passion to provide top-notch services and solutions to customers in the areas of Navigation, communication, automation, and electrical solutions in the Maritime industry particularly in Nigeria and across Africa.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Registered under the Corporate Affairs Commission of Nigeria on February 5th, 2019 with RC number 1558935, we have established ourselves as a solution provider and integrator of Navigation and communication equipment.
              </p>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[var(--navy)] mb-2">Company Registration Details</h3>
                  <p className="text-sm text-gray-600">RC Number: 1558935</p>
                  <p className="text-sm text-gray-600">Registration Date: February 5th, 2019</p>
                  <p className="text-sm text-gray-600">Registered with: Corporate Affairs Commission of Nigeria</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <Handshake className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Professional Nigerian Business Team</h3>
                  <p className="text-blue-100 mt-2">Maritime Office Setting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 maritime-gradient rounded-full flex items-center justify-center mb-4">
                  <Eye className="text-white h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-[var(--navy)]">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To grow organically into a knowledge-based organization and a pace setter in marine Navigation and communication around the Gulf of Guinea, providing innovative solutions that enhance maritime safety and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 maritime-gradient rounded-full flex items-center justify-center mb-4">
                  <Target className="text-white h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-[var(--navy)]">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide customers with quality service and competitive solutions in navigation, communication, automation, and electrical systems, ensuring the highest standards of maritime safety and operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project, delivering solutions that exceed expectations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Reliability</h3>
              <p className="text-gray-600">Our clients trust us to deliver consistent, dependable solutions and services</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technology to provide innovative maritime solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
