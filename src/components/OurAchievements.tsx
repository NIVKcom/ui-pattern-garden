import AchievementGlassCard from "@/components/ui/achievement-glass-card";

const achievements = [
  {
    title: "10+ Years of Experience",
    description: "We've been building UI since Figma was in beta.",
    gradient: "from-orange-300 via-orange-500 to-yellow-400"
  },
  {
    title: "€60,000+ Saved",
    description: "Our UI work has cut dev costs across 35+ brands.",
    gradient: "from-yellow-200 via-orange-400 to-rose-300"
  },
  {
    title: "35+ Brands Helped",
    description: "From small startups to scale-ups, we bring ideas to life.",
    gradient: "from-orange-500 via-pink-400 to-fuchsia-400"
  }
];

export function OurAchievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            10+ years of creativity, savings, and scaling with great brands.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {achievements.map((achievement, index) => (
            <AchievementGlassCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              gradient={achievement.gradient}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}