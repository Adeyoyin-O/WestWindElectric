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
    <section className="relative hero-gradient text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gold-gradient hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] font-semibold py-4 px-8 rounded-lg transition-all duration-300"
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
