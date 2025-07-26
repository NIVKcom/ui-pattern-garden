import { Zap, Palette, Shield } from "lucide-react";

export function DesignPhilosophy() {
  const features = [
    {
      icon: Zap,
      title: "Fast to Deliver",
      description: "Ship your designs faster than ever with our pre-built components and rapid prototyping process."
    },
    {
      icon: Palette,
      title: "Custom for Every Vibe",
      description: "Tailored designs that match your brand personality and speak directly to your audience."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Future-proof designs with scalable architecture and maintainable code structures."
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Purple gradient blob */}
        <div 
          className="absolute w-[700px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #9966CC 0%, #DA70D6 40%, transparent 70%)',
            top: '20%',
            left: '20%',
            filter: 'blur(130px)',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        
        {/* Gold gradient blob */}
        <div 
          className="absolute w-[550px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, #FFA500 40%, transparent 70%)',
            top: '10%',
            left: '70%',
            filter: 'blur(100px)',
            animation: 'float 11s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Designs that Ship with Personality
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glass card with individual blur bubbles */}
              <div className="relative backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/20 transition-all duration-300 h-full">
                
                {/* Individual gradient blob for each card */}
                <div 
                  className="absolute w-32 h-32 rounded-full opacity-40 -z-10"
                  style={{
                    background: index === 0 
                      ? 'radial-gradient(circle, #FF6B35 0%, transparent 70%)'
                      : index === 1 
                      ? 'radial-gradient(circle, #FF69B4 0%, transparent 70%)'
                      : 'radial-gradient(circle, #9966CC 0%, transparent 70%)',
                    top: '-20px',
                    right: '-20px',
                    filter: 'blur(40px)',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-orange/20 to-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                    <feature.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}