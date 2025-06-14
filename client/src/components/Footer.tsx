import { Link } from "wouter";
import { Anchor, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white py-12 diagonal-pattern">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 teal-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Anchor className="text-white h-6 w-6" />
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
              <li className="hover:text-teal-300 transition-colors">Pumps and Motors</li>
              <li className="hover:text-teal-300 transition-colors">Electrical and Lighting Fittings</li>
              <li className="hover:text-teal-300 transition-colors">Circuit Breakers</li>
              <li className="hover:text-teal-300 transition-colors">Transformers</li>
              <li className="hover:text-teal-300 transition-colors">Medium and Low Voltage Panels</li>
              <li className="hover:text-teal-300 transition-colors">DC Panels, Battery Chargers and Batteries</li>
              <li className="hover:text-teal-300 transition-colors">Starters (DOL, Star-Delta, Auto Transformer)</li>
              <li className="hover:text-teal-300 transition-colors">Variable Frequency Drives (VFD)</li>
              <li className="hover:text-teal-300 transition-colors">Control Consoles</li>
              <li className="hover:text-teal-300 transition-colors">Electric Installations</li>
              <li className="hover:text-teal-300 transition-colors">Rewinding of Motors and Generator Spare Parts</li>
              <li className="hover:text-teal-300 transition-colors">Inverters and UPS Systems</li>
              <li className="hover:text-teal-300 transition-colors">Motor Control Centers (MCC)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">About Us</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Products & Services</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Partnerships</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 West Wind Electric Power Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
