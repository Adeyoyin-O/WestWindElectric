import { Link } from "wouter";
import { Anchor, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--corporate-dark)] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 corporate-gradient rounded-xl flex items-center justify-center">
                <Anchor className="text-white h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">West Wind Marine Electronics</h3>
                <p className="text-gray-300 text-sm">Excellence in Maritime Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Leading provider of maritime electronics solutions across West Africa since 2019. 
              Delivering innovation, reliability, and excellence in every project.
            </p>
            <div className="text-sm text-gray-400">
              <p>RC Number: 1558935</p>
              <p>Registered: February 5th, 2019</p>
              <p>Corporate Affairs Commission of Nigeria</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products-services" className="text-gray-300 hover:text-white transition-colors">Navigation Systems</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-white transition-colors">Communication Solutions</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-white transition-colors">Automation Systems</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-white transition-colors">Electrical Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white mb-1">Office Address</p>
                <p>Plot 8, The Providence Street</p>
                <p>Lekki Phase 1, Lagos</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone</p>
                <p>Tel: +234 703 250 9442</p>
                <p>Mobile: +234 806 465 1345</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <p>admin@westwindelectricpower.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2024 West Wind Marine Electronics Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
