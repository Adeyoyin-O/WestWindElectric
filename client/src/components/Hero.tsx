import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
  showButtons?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  backgroundImage,
  showButtons = false,
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonText = "Explore Our Services",
  secondaryButtonText = "Get Free Consultation"
}: HeroProps) {
  return (
    <section className="relative hero-gradient text-white py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white bg-opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {typeof title === 'string' ? title : title}
          </h1>
          {subtitle && (
            <p className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto font-light">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="burnt-orange-gradient hover:opacity-90 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--corporate-dark)] font-bold py-5 px-10 rounded-2xl transition-all duration-300 text-lg backdrop-blur-sm"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
}
