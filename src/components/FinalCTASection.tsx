import { useNavigate } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function FinalCTASection() {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank');
  };

  return (
    <section className="relative py-48 px-6 overflow-hidden">
      {/* Floating gradient orbs background */}
      <div className="absolute inset-0 -z-10">
        {/* Orange orb */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #FFA500 0%, #FF8C00 40%, transparent 70%)',
            top: '20%',
            left: '10%',
            filter: 'blur(120px)',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        
        {/* Pink-purple orb */}
        <div 
          className="absolute w-80 h-80 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #E6E6FA 0%, #DDA0DD 40%, transparent 70%)',
            bottom: '10%',
            right: '15%',
            filter: 'blur(100px)',
            animation: 'float 18s ease-in-out infinite reverse',
          }}
        />
        
        {/* Coral orb */}
        <div 
          className="absolute w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF7F7F 0%, #FFA500 40%, transparent 70%)',
            top: '50%',
            right: '20%',
            filter: 'blur(80px)',
            animation: 'float 22s ease-in-out infinite',
          }}
        />
      </div>

      {/* Glass container with content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[3rem] p-16 md:p-24 shadow-[0_16px_64px_rgba(0,0,0,0.1)]">
          
          {/* Floating sparkles around glass container */}
          <div className="absolute top-8 left-8 opacity-60">
            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />
          </div>
          <div className="absolute top-12 right-12 opacity-40">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-16 left-16 opacity-50">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute bottom-12 right-16 opacity-30">
            <Sparkles className="w-3 h-3 text-orange-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="relative z-10">
            {/* Main headline */}
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Let's Talk First.
            </h2>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              No bloated packages. No generic tiers. Let's figure out what you{" "}
              <span className="text-orange-500 font-semibold italic">actually</span>{" "}
              need in a quick 20-minute chat.
            </p>
            
            {/* CTA Button with animations */}
            <div className="relative group mb-6">
              {/* Sparkle trail background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute w-4 h-4 text-orange-400/60 animate-ping"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1.5 + Math.random()}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Button with hover effects */}
              <div className="relative transform group-hover:-translate-y-1 transition-transform duration-300">
                <LiquidButton
                  variant="default"
                  size="xl"
                  onClick={handleBookConsultation}
                  className="relative text-lg font-semibold px-12 py-6 text-gray-900 transition-all duration-300 shadow-2xl"
                >
                  <Phone />
                  Book My Free Consultation
                </LiquidButton>
              </div>
            </div>
            
            {/* Microtext */}
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We'll help you scope your project and show what working with Nivk actually looks like.
            </p>
          </div>
        </div>
      </div>

      {/* Additional ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}