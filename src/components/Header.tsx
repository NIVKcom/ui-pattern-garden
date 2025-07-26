
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { LiquidGlassNavbar } from "@/components/ui/liquid-glass-navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Achievements", href: "#achievements", isSection: true },
    { label: "Our Work", href: "#our-work", isSection: true },
    { label: "Comparison", href: "#comparison", isSection: true },
    { label: "FAQs", href: "/faqs", isSection: false },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (!item.isSection) {
      navigate(item.href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(item.href);
      }, 100);
    } else {
      scrollToSection(item.href);
    }
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-transparent sticky top-0 z-50 backdrop-blur-sm relative" style={{ overflow: 'visible' }}>
      {/* Enhanced lava lamp effect for header - extending far beyond boundaries */}
      <div className="absolute -top-40 -bottom-40 left-0 right-0 -z-10 opacity-10" style={{ overflow: 'visible' }}>
        <div 
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFA200 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
            top: '20%',
            left: '20%',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFA200 0%, transparent 80%)',
            bottom: '10%',
            right: '30%',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-28 h-28 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FF8C42 0%, transparent 75%)',
            top: '5%',
            left: '50%',
            animation: 'float 11s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-36 h-36 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFA200 0%, transparent 85%)',
            bottom: '5%',
            left: '15%',
            animation: 'float 14s ease-in-out infinite reverse',
          }}
        />
      </div>
      
      {/* Gradient overlay extending far beyond header */}
      <div className="absolute -top-20 -bottom-20 left-0 right-0 -z-5 opacity-5" style={{ overflow: 'visible' }}>
        <div 
          className="absolute w-full h-60 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #FFA200 30%, #FF6B35 70%, transparent 100%)',
            top: '50%',
            left: '0%',
            transform: 'translateY(-50%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-full h-40 rounded-full blur-2xl"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, #FF8C42 50%, transparent 100%)',
            top: '20%',
            left: '0%',
            animation: 'float 16s ease-in-out infinite reverse',
          }}
        />
      </div>
      
      <div className="container-wide mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/718d133e-2817-4ea0-9fca-62b9acb14406.png" 
                alt="NIVK Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Liquid Glass Navigation */}
          <div className="hidden md:flex">
            <LiquidGlassNavbar />
          </div>
          
          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LiquidButton 
              className="hidden sm:inline-flex text-gray-900 font-bold text-sm"
              asChild
            >
              <Link to="/talk">Plans and Pricing</Link>
            </LiquidButton>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-white/20">
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="flex justify-center">
                    <Link 
                      to="/" 
                      onClick={() => setIsOpen(false)}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="/lovable-uploads/718d133e-2817-4ea0-9fca-62b9acb14406.png" 
                        alt="NIVK Logo" 
                        className="h-12 w-auto"
                      />
                    </Link>
                  </div>
                  
                  {/* Navigation items */}
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item)}
                        className="text-left text-lg font-semibold text-gray-700 hover:text-brand-orange transition-colors py-2"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  
                  {/* CTA Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <Link 
                      to="/talk" 
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-6 rounded-full transition-colors"
                    >
                      Plans and Pricing
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
