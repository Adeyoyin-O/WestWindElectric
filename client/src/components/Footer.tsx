import { Link } from "wouter";
import { Anchor, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white py-20 diagonal-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-5 mb-8">
              <div className="w-16 h-16 teal-gradient rounded-2xl flex items-center justify-center shadow-2xl">
                <Anchor className="text-white h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">West Wind Marine Electronics</h3>
                <p className="text-gray-300 text-sm font-semibold">Excellence in Maritime Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg">
              Leading provider of maritime electronics solutions across West Africa since 2019. 
              Delivering innovation, reliability, and excellence in every project.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p className="font-medium">RC Number: 1558935</p>
              <p>Registered: February 5th, 2019</p>
              <p>Corporate Affairs Commission of Nigeria</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Navigation Systems</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Communication Solutions</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Automation Systems</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-300 transition-colors font-medium">Electrical Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Info</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-bold text-white mb-2">Office Address</p>
                <p className="leading-relaxed">Plot 8, The Providence Street</p>
                <p>Lekki Phase 1, Lagos</p>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Phone</p>
                <p>Tel: +234 703 250 9442</p>
                <p>Mobile: +234 806 465 1345</p>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Email</p>
                <p>admin@westwindelectricpower.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-6 md:mb-0">
            <p className="font-medium">&copy; 2024 West Wind Marine Electronics Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
