import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/2_1749919921017.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products & Services", href: "/products-services" },
  { name: "Partnerships", href: "/partnerships" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="modern-glass border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <img 
                src={logoImage} 
                alt="West Wind Electric Power Ltd Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[var(--primary-dark)] leading-tight tracking-tight">West Wind Electric Power Ltd</h1>
              <p className="text-xs text-[var(--medium-gray)] font-semibold">EPIC Solutions Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-5 py-3 font-semibold text-sm transition-all duration-300 rounded-xl",
                  location === item.href
                    ? "text-[var(--primary-blue)] nav-link active bg-gradient-to-r from-blue-50 to-teal-50"
                    : "text-[var(--medium-gray)] hover:text-[var(--primary-blue)] hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                className="ml-4 blue-gradient text-white hover:opacity-90 shadow-lg px-6 py-2 text-sm font-bold rounded-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[var(--primary-dark)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden modern-glass border-t border-gray-100">
            <div className="p-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-4 px-6 font-semibold rounded-xl transition-all duration-300",
                    location === item.href
                      ? "text-[var(--primary-blue)] bg-gradient-to-r from-blue-50 to-teal-50"
                      : "text-[var(--medium-gray)] hover:bg-gray-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-6 blue-gradient text-white py-4 text-lg font-bold rounded-xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
