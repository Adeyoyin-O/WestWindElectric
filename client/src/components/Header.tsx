import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products & Services", href: "/products-services" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-effect border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-14 h-14 corporate-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Anchor className="text-white h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--corporate-dark)] leading-tight">West Wind Marine Electronics</h1>
              <p className="text-sm text-[var(--corporate-gray)] font-medium">Maritime Solutions Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 font-semibold text-sm transition-all duration-200 rounded-lg",
                  location === item.href
                    ? "text-[var(--corporate-blue)] nav-link active bg-blue-50"
                    : "text-[var(--corporate-gray)] hover:text-[var(--corporate-blue)] hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="ml-4 corporate-gradient text-white hover:opacity-90 shadow-lg px-6"
              size="sm"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[var(--corporate-dark)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-gray-100">
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-3 px-4 font-semibold rounded-lg transition-all duration-200",
                    location === item.href
                      ? "text-[var(--corporate-blue)] bg-blue-50"
                      : "text-[var(--corporate-gray)] hover:bg-gray-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 corporate-gradient text-white">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
