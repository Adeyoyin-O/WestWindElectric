import { Link } from "wouter";
import { Anchor, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white py-12 diagonal-pattern">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 teal-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Anchor className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">West Wind Electric Power Ltd</h3>
                <p className="text-gray-300 text-xs font-semibold">EPIC Solutions Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
              Leading provider of electrical, electronics and instrumentation services across Nigeria since 2011. 
              Delivering EPIC solutions with innovation, reliability, and excellence in every project.
            </p>
            <div className="text-xs text-gray-400 space-y-1">
              <p className="font-medium">RC Number: 968009</p>
              <p>Registered: July 26th, 2011</p>
              <p>Corporate Affairs Commission of Nigeria</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Navigation Systems</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Communication Solutions</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Automation Systems</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Electrical Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
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
