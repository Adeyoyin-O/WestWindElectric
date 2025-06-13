import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Handshake, 
  Users, 
  Network, 
  Briefcase, 
  GraduationCap, 
  Globe,
  CheckCircle
} from "lucide-react";

export default function Partnerships() {
  const [, setLocation] = useLocation();

  const handleExploreOpportunities = () => {
    setLocation("/contact");
  };

  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Strategic Alliances",
      description: "Long-term partnerships focused on mutual growth and market expansion",
      features: [
        "Joint market development",
        "Shared resources and expertise", 
        "Collaborative innovation"
      ]
    },
    {
      icon: Users,
      title: "Technology Partners",
      description: "Collaborations with technology providers and equipment manufacturers",
      features: [
        "Equipment integration",
        "Technology transfer",
        "Joint product development"
      ]
    },
    {
      icon: Network,
      title: "Channel Partners",
      description: "Distribution and sales partnerships to extend market reach",
      features: [
        "Sales representation",
        "Local market access",
        "Customer relationship management"
      ]
    },
    {
      icon: Briefcase,
      title: "Project Partnerships",
      description: "Collaborative partnerships for specific projects and initiatives",
      features: [
        "Joint project execution",
        "Risk sharing",
        "Complementary capabilities"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training Partners",
      description: "Educational partnerships for skill development and knowledge transfer",
      features: [
        "Technical training programs",
        "Certification courses",
        "Knowledge sharing initiatives"
      ]
    },
    {
      icon: Globe,
      title: "Regional Partners",
      description: "Local partnerships for regional market penetration and support",
      features: [
        "Local market knowledge",
        "Regional service delivery",
        "Cultural understanding"
      ]
    }
  ];

  const partnershipBenefits = [
    "Access to Expertise",
    "Quality Assurance", 
    "Market Expansion",
    "Ongoing Support"
  ];

  return (
    <div className="page-transition">
      {/* Partnership Hero */}
      <Hero
        title="Strategic Partnerships"
        subtitle="Building strong relationships to deliver exceptional maritime solutions"
      />

      {/* Partnership Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">Our Partnership Approach</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe in collaborative partnerships that create mutual value and drive innovation in the maritime industry. Our partnership model is built on trust, expertise, and shared commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <Handshake className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Nigerian Business Professionals</h3>
                  <p className="text-blue-100 mt-2">Partnership Meeting</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Partnership Benefits</h3>
              <div className="space-y-4">
                {partnershipBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-4">
                    <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--navy)] mb-2">{benefit}</h4>
                      <p className="text-gray-600">
                        {benefit === "Access to Expertise" && "Leverage our deep maritime electronics knowledge and industry experience"}
                        {benefit === "Quality Assurance" && "Benefit from our rigorous quality standards and proven methodologies"}
                        {benefit === "Market Expansion" && "Expand your reach across West Africa through our established network"}
                        {benefit === "Ongoing Support" && "Receive continuous support and collaboration throughout projects"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">Types of Partnerships</h2>
            <p className="text-xl text-gray-600">Flexible partnership models to suit different business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((partnership) => (
              <Card key={partnership.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 maritime-gradient rounded-full flex items-center justify-center mb-4">
                    <partnership.icon className="text-white h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[var(--navy)]">
                    {partnership.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{partnership.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {partnership.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="maritime-gradient text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Interested in Partnership?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our network of partners and leverage our expertise to grow your business in the maritime industry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="gold-gradient hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                  onClick={handleExploreOpportunities}
                >
                  Explore Partnership Opportunities
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Download Partnership Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
