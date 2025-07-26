import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { WhatWeDo } from "@/components/WhatWeDo";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { RecentWork } from "@/components/RecentWork";
import { OurAchievements } from "@/components/OurAchievements";

import { WhyNivk } from "@/components/WhyNivk";
import { ComparisonTable } from "@/components/ComparisonTable";
import LeadershipTeam from "@/components/LeadershipTeam";
import { LetsBuild } from "@/components/LetsBuild";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-bg relative" style={{ overflow: 'visible' }}>
      {/* Full-page animated blob background */}
      <div className="fixed inset-0 w-full h-full z-0" style={{ overflow: 'visible' }}>
        <LavaLamp />
      </div>
      
      {/* Global gradient overlay */}
      <GlobalGradientOverlay />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <TestimonialsSection />
        <OurAchievements />
        <WhatWeDo />
        <DesignPhilosophy />
        <WhyNivk />
        <RecentWork />
        <LeadershipTeam />
        <ComparisonTable />
        <LetsBuild />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
