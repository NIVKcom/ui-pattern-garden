
import { Sparkles, Zap, Heart, Star, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgencyPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-10 w-14 h-14 bg-green-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-purple-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with playful styling */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
            Ready to Build Something
            <span className="block text-yellow-500 animate-pulse">AMAZING?</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
            <p className="text-xl md:text-2xl text-gray-700 font-bold">
              Our Super Team Creates Perfect Apps Just for YOU!
            </p>
            <Sparkles className="w-8 h-8 text-pink-400 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>

        {/* Feature cards in a playful grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 border-4 border-pink-200">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-3">Made with LOVE</h3>
            <p className="text-gray-600 font-medium">Every pixel crafted with care and attention to make your mobile app absolutely perfect!</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 border-4 border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-3">SUPER Fast</h3>
            <p className="text-gray-600 font-medium">Lightning-speed development that doesn't compromise on quality or fun!</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 border-4 border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-3">5-Star Quality</h3>
            <p className="text-gray-600 font-medium">Premium mobile apps that users absolutely love and can't stop using!</p>
          </div>
        </div>

        {/* Team showcase */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border-4 border-yellow-200 transform hover:scale-102 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-4xl font-black text-gray-800 mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Meet Our SUPER Team!
          </h3>
          <p className="text-xl text-gray-600 font-medium mb-6 max-w-3xl mx-auto">
            We're not just developers - we're dream makers! Our team of creative wizards, design ninjas, and coding superheroes work together to bring your wildest mobile app ideas to life!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full text-pink-800 font-bold text-lg transform hover:scale-110 transition-transform">🎨 UI/UX Wizards</span>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full text-blue-800 font-bold text-lg transform hover:scale-110 transition-transform">💻 Code Ninjas</span>
            <span className="px-6 py-3 bg-gradient-to-r from-green-200 to-green-300 rounded-full text-green-800 font-bold text-lg transform hover:scale-110 transition-transform">🚀 Launch Heroes</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white text-xl font-black px-12 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
          >
            <Rocket className="w-6 h-6 mr-3 animate-bounce" />
            Let's Build Your Dream Mobile App!
            <Sparkles className="w-6 h-6 ml-3 animate-spin" />
          </Button>
          <p className="mt-4 text-gray-600 font-medium text-lg">
            🎉 Ready to turn your ideas into the next big thing? Let's chat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgencyPromo;
