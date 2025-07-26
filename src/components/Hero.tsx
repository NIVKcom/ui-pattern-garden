import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative">
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-foreground max-w-5xl mx-auto leading-tight relative z-10">
            Your Dedicated App Design Team.
          </h1>
        </div>
        
        {/* Supporting Text */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium relative z-10">
          From component kits to full apps — we design playful UIs that ship fast.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 font-bold text-lg rounded-full transition-colors"
            onClick={() => {
              const workSection = document.getElementById('our-work');
              if (workSection) {
                const headerOffset = 100;
                const elementPosition = workSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            View Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 font-bold text-lg rounded-full transition-colors"
            asChild
          >
            <Link to="/talk">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;