import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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
  secondaryButtonText = "Get a Quote"
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
      
      {/* Enhanced Animated Power Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="power-line"></div>
        <div className="power-line"></div>
        <div className="power-line"></div>
        <div className="power-line"></div>
        <div className="power-line"></div>
        <div className="energy-orb"></div>
        <div className="energy-orb"></div>
        <div className="energy-orb"></div>
        <div className="spark-effect"></div>
        <div className="spark-effect"></div>
        <div className="spark-effect"></div>
      </div>
      
      {/* Enhanced Wave Effect at Bottom */}
      <div className="wave-effect z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white bg-opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {typeof title === 'string' ? title : title}
          </h1>
          {subtitle && (
            <p className="text-lg lg:text-xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button 
                size="lg"
                className="blue-gradient hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base w-full sm:w-48 flex items-center justify-center gap-2"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-base backdrop-blur-sm bg-transparent w-full sm:w-48 flex items-center justify-center gap-2"
                onClick={onSecondaryClick}
              >
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
}
