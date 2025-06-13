import { Link } from "wouter";
import { Anchor, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--maritime-blue)] to-[var(--gold)] rounded-lg flex items-center justify-center">
                <Anchor className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">West Wind Marine</h3>
                <p className="text-sm text-blue-200">Electronics Ltd</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Leading provider of maritime electronics solutions across West Africa since 2019.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/products-services" className="hover:text-white transition-colors">Navigation Systems</Link></li>
              <li><Link href="/products-services" className="hover:text-white transition-colors">Communication Solutions</Link></li>
              <li><Link href="/products-services" className="hover:text-white transition-colors">Automation Systems</Link></li>
              <li><Link href="/products-services" className="hover:text-white transition-colors">Electrical Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/partnerships" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <p>Plot 8, The Providence Street</p>
              <p>Lekki Phase 1, Lagos</p>
              <p>+234 703 250 9442</p>
              <p>admin@westwindelectricpower.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-blue-200 mb-4 md:mb-0">
            <p>&copy; 2024 West Wind Marine Electronics Ltd. All rights reserved.</p>
            <p className="mt-1">RC Number: 1558935 | Registered: February 5th, 2019</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
