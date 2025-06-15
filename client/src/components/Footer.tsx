import { Link } from "wouter";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import footerLogo from "@assets/3-removebg-preview_1749920563703.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle 800px at 20% 20%, hsla(210, 100%, 50%, 0.04), transparent),
          radial-gradient(circle 600px at 80% 80%, hsla(189, 100%, 42%, 0.03), transparent),
          linear-gradient(45deg, hsla(255, 255, 255, 0.003) 1px, transparent 1px),
          linear-gradient(-45deg, hsla(255, 255, 255, 0.003) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 120px 120px, 120px 120px'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 maritime-glass p-3 rounded-2xl">
                <img 
                  src={footerLogo} 
                  alt="West Wind Electric Power Ltd Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold maritime-heading text-white">West Wind Electric Power Ltd</h3>
                <p className="text-sm text-cyan-300 font-medium">Maritime Engineering Excellence</p>
              </div>
            </div>
            
            <div className="space-y-6 text-sm">
              <div className="maritime-card p-4 rounded-xl">
                <p className="font-semibold text-cyan-300 mb-2 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Office Address
                </p>
                <p className="text-slate-300 leading-relaxed">Plot 8, The Providence Street</p>
                <p className="text-slate-300">Lekki Phase 1, Lagos</p>
              </div>
              
              <div className="maritime-card p-4 rounded-xl">
                <p className="font-semibold text-cyan-300 mb-2 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Contact
                </p>
                <p className="text-slate-300">Tel: +234 703 250 9442</p>
                <p className="text-slate-300">Mobile: +234 806 465 1345</p>
                <p className="text-slate-300 mt-2">admin@westwindelectricpower.com</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-3 h-3 maritime-sunset rounded-full mr-3"></div>
              Engineering Solutions
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Power Distribution Systems", "Industrial Control Systems", "Marine Electronics",
                "Electrical Installations", "Variable Frequency Drives", "Motor Control Centers",
                "Transformers & Switchgear", "Battery & Charging Systems", "Automation Solutions",
                "Generator Systems", "Instrumentation", "Project Commissioning"
              ].map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-center py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                    <div className="w-1 h-1 bg-slate-500 rounded-full mr-3 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white flex items-center">
              <div className="w-3 h-3 maritime-emerald rounded-full mr-3"></div>
              Navigation
            </h4>
            <div className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products & Services", href: "/products-services" },
                { name: "Partnerships", href: "/partnerships" },
                { name: "Contact Us", href: "/contact" }
              ].map((link, index) => (
                <Link key={index} href={link.href} className="group block">
                  <div className="maritime-card p-4 rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-slate-300 group-hover:text-cyan-300 font-medium transition-colors duration-300">
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700/50 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-slate-400">
              <p className="text-sm">&copy; 2024 West Wind Electric Power Ltd. All rights reserved.</p>
              <p className="text-xs mt-1">Engineering excellence since 2011</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-slate-400">Connect with us</span>
              <div className="flex space-x-4">
                <a href="#" className="maritime-card p-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <FaFacebook className="h-5 w-5 text-slate-400 hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a href="#" className="maritime-card p-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <FaWhatsapp className="h-5 w-5 text-slate-400 hover:text-green-400 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
