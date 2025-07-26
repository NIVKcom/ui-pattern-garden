import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function LetsBuild() {
  return (
    <section className="relative py-48 px-6 overflow-hidden">
      {/* Massive gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Main giant gradient blob */}
        <div 
          className="absolute w-[1200px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, #FFA200 25%, #FF69B4 50%, #9966CC 75%, transparent 100%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(200px)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        
        {/* Secondary orbiting gradient */}
        <div 
          className="absolute w-[600px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, #FF7F7F 50%, transparent 100%)',
            top: '20%',
            left: '80%',
            filter: 'blur(120px)',
            animation: 'float 16s ease-in-out infinite reverse',
          }}
        />
        
        {/* Third floating gradient */}
        <div 
          className="absolute w-[500px] h-[350px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #20B2AA 0%, #48D1CC 50%, transparent 100%)',
            top: '70%',
            left: '10%',
            filter: 'blur(100px)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Glass container with content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-[0_16px_64px_rgba(0,0,0,0.1)]">
          
          {/* Floating sparkles */}
          <div className="absolute top-8 left-8 opacity-60">
            <Sparkles className="w-6 h-6 text-brand-orange animate-pulse" />
          </div>
          <div className="absolute top-12 right-12 opacity-40">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-16 left-16 opacity-50">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
              Have a Crazy Idea?
            </h2>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mb-4">
              Let's make it 
            </p>
            
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-orange via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 md:mb-16">
              Real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
              <LiquidButton 
                size="xxl" 
                className="w-full sm:w-auto text-gray-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 group"
                asChild
              >
                <Link to="/talk">
                  Contact Nivk
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </LiquidButton>
              
              <div className="text-base sm:text-lg text-gray-500 text-center">
                or just say hello at{" "}
                <a 
                  href="mailto:nivkdotcom@gmail.com" 
                  className="text-brand-orange hover:text-brand-orange/80 transition-colors font-semibold block sm:inline mt-1 sm:mt-0"
                >
                  nivkdotcom@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-brand-orange to-pink-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}