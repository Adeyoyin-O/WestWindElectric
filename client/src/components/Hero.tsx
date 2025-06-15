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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Advanced Overlay Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle 1200px at 30% 20%, hsla(210, 100%, 50%, 0.08), transparent),
          radial-gradient(circle 800px at 70% 80%, hsla(189, 100%, 42%, 0.06), transparent),
          radial-gradient(circle 600px at 90% 10%, hsla(175, 100%, 35%, 0.04), transparent),
          linear-gradient(135deg, hsla(255, 255, 255, 0.008) 1px, transparent 1px),
          linear-gradient(45deg, hsla(255, 255, 255, 0.005) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 120px 120px, 80px 80px'
      }}></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/20 rounded-2xl rotate-12 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-blue-400/15 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg rotate-45"></div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Column */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 maritime-glass rounded-full">
                <div className="w-3 h-3 maritime-sunset rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">Premium Engineering Solutions</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">{title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              {/* Subtitle */}
              {subtitle && (
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  {subtitle}
                </p>
              )}
              
              {/* Description */}
              {description && (
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
              
              {/* Action Buttons */}
              {showButtons && (
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <Button 
                    size="lg"
                    className="group maritime-ocean hover:shadow-2xl text-white font-semibold py-6 px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 text-lg flex items-center justify-center gap-3 shadow-xl"
                    onClick={onPrimaryClick}
                  >
                    {primaryButtonText}
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="group border-2 border-cyan-400/50 text-cyan-300 hover:text-slate-900 hover:bg-cyan-400 font-semibold py-6 px-10 rounded-2xl transition-all duration-500 text-lg maritime-glass flex items-center justify-center gap-3"
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonText}
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </Button>
                </div>
              )}
            </div>
            
            {/* Visual Column */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Visual Element */}
                <div className="w-96 h-96 maritime-glass rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 maritime-ocean rounded-2xl mx-auto flex items-center justify-center">
                        <ArrowUpRight className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">13+ Years</h3>
                      <p className="text-cyan-200">Engineering Excellence</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 maritime-glass rounded-2xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-32 h-20 maritime-glass rounded-2xl flex items-center justify-center">
                  <span className="text-sm font-semibold text-slate-700">EPIC Services</span>
                </div>
              </div>
            </div>
          </div>
          
          {children}
        </div>
      </div>
    </section>
  );
}
