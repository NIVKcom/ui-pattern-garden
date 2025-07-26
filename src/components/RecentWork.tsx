import FlipGallery from "@/components/ui/flip-gallery";
import { Sparkles } from "lucide-react";

export function RecentWork() {
  return (
    <section id="our-work" className="relative py-20 px-6 md:px-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Glass Container */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[3rem] p-8 md:p-12 shadow-[0_16px_64px_rgba(0,0,0,0.1)] relative">
          {/* Floating Sparkles */}
          <Sparkles 
            className="absolute top-8 right-12 text-orange-300/60 animate-pulse" 
            size={24} 
          />
          <Sparkles 
            className="absolute bottom-12 left-8 text-pink-300/60 animate-pulse" 
            size={20}
            style={{ animationDelay: '1s' }}
          />
          <Sparkles 
            className="absolute top-1/2 right-8 text-teal-300/60 animate-pulse" 
            size={16}
            style={{ animationDelay: '2s' }}
          />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[500px]">
            {/* Left Side - Text Content */}
            <div className="flex-1 lg:max-w-lg">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Still confused about us?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
                See our work
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Take a look at some of the beautiful apps we've created for startups and enterprises. 
                Each project showcases our commitment to design excellence and user experience.
              </p>
            </div>

            {/* Right Side - FlipGallery */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <FlipGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}