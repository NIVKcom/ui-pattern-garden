import AchievementGlassCard from "@/components/ui/achievement-glass-card";

const benefits = [
  {
    title: "⚡ Lightning-Fast Turnaround",
    description: "Designs delivered in 48–72 hours. Faster than you can brief us again.",
    gradient: "from-orange-300 via-orange-500 to-purple-400",
  },
  {
    title: "💳 Predictable Pricing", 
    description: "Fixed rates. No surprises. No invoices that hurt.",
    gradient: "from-orange-400 via-pink-500 to-purple-400",
  },
  {
    title: "👤 Founder-First Mindset",
    description: "We design with your users in mind — and your budget.",
    gradient: "from-purple-300 via-purple-500 to-pink-400",
  },
  {
    title: "🔧 Built to Scale",
    description: "Reusable UI components made to ship with dev.",
    gradient: "from-pink-400 via-orange-400 to-orange-500",
  },
  {
    title: "🎨 Custom Mobile App Vibes",
    description: "Each UI is tailored — no recycled templates.",
    gradient: "from-orange-300 via-orange-500 to-pink-400",
  },
  {
    title: "📋 Design You'll Actually Use",
    description: "Simple. Clear. Developer-ready. What more could you want?",
    gradient: "from-purple-400 via-pink-400 to-orange-400",
  },
];

export const WhyNivk = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Nivk?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designs that ship fast, look good, and vibe with your users.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <AchievementGlassCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              gradient={benefit.gradient}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};