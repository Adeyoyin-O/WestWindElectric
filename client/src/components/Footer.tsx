import { Link } from "wouter";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import footerLogo from "@assets/3-removebg-preview_1749920563703.png";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 diagonal-pattern relative overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #000000 0px,
            #000000 15px,
            #333333 15px,
            #333333 18px
          )`
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={footerLogo} 
                  alt="West Wind Electric Power Ltd Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">West Wind Electric Power Ltd</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-bold text-white mb-1">Office Address</p>
                <p className="leading-relaxed">Plot 8, The Providence Street</p>
                <p>Lekki Phase 1, Lagos</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Phone</p>
                <p>Tel: +234 703 250 9442</p>
                <p>Mobile: +234 806 465 1345</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Email</p>
                <p>admin@westwindelectricpower.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-cyan-400 transition-colors">Pumps and Motors</li>
              <li className="hover:text-cyan-400 transition-colors">Electrical and Lighting Fittings</li>
              <li className="hover:text-cyan-400 transition-colors">Circuit Breakers</li>
              <li className="hover:text-cyan-400 transition-colors">Transformers</li>
              <li className="hover:text-cyan-400 transition-colors">Medium and Low Voltage Panels</li>
              <li className="hover:text-cyan-400 transition-colors">DC Panels, Battery Chargers and Batteries</li>
              <li className="hover:text-cyan-400 transition-colors">Starters (DOL, Star-Delta, Auto Transformer)</li>
              <li className="hover:text-cyan-400 transition-colors">Variable Frequency Drives (VFD)</li>
              <li className="hover:text-cyan-400 transition-colors">Control Consoles</li>
              <li className="hover:text-cyan-400 transition-colors">Electric Installations</li>
              <li className="hover:text-cyan-400 transition-colors">Rewinding of Motors and Generator Spare Parts</li>
              <li className="hover:text-cyan-400 transition-colors">Inverters and UPS Systems</li>
              <li className="hover:text-cyan-400 transition-colors">Motor Control Centers (MCC)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">About Us</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Products & Services</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Partnerships</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 West Wind Electric Power Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
