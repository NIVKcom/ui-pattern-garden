"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Link, useLocation, useNavigate } from "react-router-dom"

interface LiquidGlassNavbarProps {
  className?: string
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="navbar-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
        
        <filter
          id="active-bubble-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08 0.08"
            numOctaves="2"
            seed="2"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="3" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="50"
            xChannelSelector="G"
            yChannelSelector="R"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

const navItems = [
  { label: "Achievements", href: "#achievements", isSection: true },
  { label: "Our Work", href: "#our-work", isSection: true },
  { label: "Comparison", href: "#comparison", isSection: true },
  { label: "FAQs", href: "/faqs", isSection: false },
]

export function LiquidGlassNavbar({ className }: LiquidGlassNavbarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  const [activeSection, setActiveSection] = React.useState('')

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (!item.isSection) return // Let normal navigation handle non-section links

    e.preventDefault()
    
    if (currentPath !== '/') {
      // Navigate to homepage first, then scroll
      navigate('/')
      setTimeout(() => {
        scrollToSection(item.href)
      }, 100)
    } else {
      // Direct scroll on homepage
      scrollToSection(item.href)
    }
  }

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Scroll-based section detection
  React.useEffect(() => {
    if (currentPath !== '/') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check each section to find which one is currently most visible
      let currentSection = '';
      let minDistance = Infinity;
      
      const sections = ['achievements', 'our-work', 'comparison'];
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementCenter = elementTop + rect.height / 2;
          const distance = Math.abs(scrollPosition - elementCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = `#${sectionId}`;
          }
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Set initial active section
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [currentPath])

  return (
    <>
      <nav className={cn("relative overflow-visible", className)}>
        {/* Main liquid glass bar */}
        <div className="relative rounded-full px-8 py-3 
            shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
            backdrop-blur-md bg-white/10 border border-white/10 overflow-visible">
          
          {/* Enhanced backdrop filter layer */}
          <div className="absolute inset-0 -z-10 rounded-full overflow-visible backdrop-blur-md" />
          
          {/* Flowing lava lamp elements within navbar */}
          <div className="absolute inset-0 -z-10 opacity-15 overflow-visible">
            <div 
              className="absolute w-8 h-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, #FFA200 0%, transparent 70%)',
                top: '-20%',
                left: '15%',
                animation: 'float 10s ease-in-out infinite',
              }}
            />
            <div 
              className="absolute w-6 h-6 rounded-full"
              style={{
                background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
                bottom: '-15%',
                right: '25%',
                animation: 'float 7s ease-in-out infinite reverse',
              }}
            />
            <div 
              className="absolute w-10 h-10 rounded-full"
              style={{
                background: 'radial-gradient(circle, #FFA200 0%, transparent 80%)',
                top: '50%',
                right: '50%',
                transform: 'translateY(-50%)',
                animation: 'float 12s ease-in-out infinite',
              }}
            />
          </div>
          
          {/* Additional glass bubbles */}
          <div className="absolute inset-0 opacity-10 overflow-visible">
            <div 
              className="absolute w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                top: '20%',
                left: '40%',
                animation: 'float 8s ease-in-out infinite',
              }}
            />
            <div 
              className="absolute w-3 h-3 rounded-full bg-white/30 backdrop-blur-sm"
              style={{
                bottom: '25%',
                right: '60%',
                animation: 'float 6s ease-in-out infinite reverse',
              }}
            />
          </div>
          
          {/* Navigation items */}
          <div className="flex items-center space-x-8 relative z-10">
            {navItems.map((item) => {
              const isActive = item.isSection 
                ? (currentPath === '/' && activeSection === item.href)
                : currentPath === item.href
              
              return (
                <div key={item.href} className="relative">
                  {/* Active bubble effect */}
                  {isActive && (
                    <div className="absolute inset-0 -m-2 rounded-full
                        shadow-[0_4px_16px_rgba(255,162,0,0.3)] 
                        backdrop-blur-sm bg-brand-orange/20 border border-brand-orange/30
                        transition-all duration-300">
                      <div className="absolute inset-0 rounded-full overflow-hidden bg-brand-orange/10 backdrop-blur-sm" />
                    </div>
                  )}
                  
                  {item.isSection ? (
                    <button
                      onClick={(e) => handleNavClick(e, item)}
                      className={cn(
                        "relative z-20 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                        isActive 
                          ? "text-brand-orange" 
                          : "text-gray-700 hover:text-brand-orange"
                      )}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "relative z-20 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                        isActive 
                          ? "text-brand-orange" 
                          : "text-gray-700 hover:text-brand-orange"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </nav>
      <GlassFilter />
    </>
  )
}