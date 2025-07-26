import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Link } from "react-router-dom";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-32 px-6 overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Main orange gradient blob */}
        <div 
          className="absolute w-[600px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #FFA200 0%, #FF6B35 40%, transparent 70%)',
            top: '10%',
            left: '60%',
            filter: 'blur(100px)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        
        {/* Secondary pink gradient blob */}
        <div 
          className="absolute w-[500px] h-[350px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF69B4 0%, #FF1493 40%, transparent 70%)',
            top: '40%',
            left: '10%',
            filter: 'blur(80px)',
            animation: 'float 12s ease-in-out infinite reverse',
          }}
        />
        
        {/* Tertiary coral gradient blob */}
        <div 
          className="absolute w-[400px] h-[300px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #FF7F7F 0%, #FFB347 40%, transparent 70%)',
            top: '60%',
            left: '70%',
            filter: 'blur(120px)',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
      </div>

      {/* Glass Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
              We Bring Your Dream Mobile App to Reality
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              From stunning component kits to fully custom designs, we deliver 
              premium mobile experiences that users love. Fast turnaround, 
              endless possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <LiquidButton 
                size="xxl" 
                className="w-full sm:w-auto text-gray-900 font-bold text-lg px-8 py-4"
              >
                Browse Our Kits
              </LiquidButton>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-gray-700 font-semibold"
                asChild
              >
                <Link to="/talk">Book a Free Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}