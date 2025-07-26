import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Changelog = () => {
  const updates = [
    {
      version: "v2.1.0",
      date: "January 15, 2025",
      type: "Feature",
      changes: [
        "Enhanced mobile responsiveness across all pages",
        "New interactive pricing calculator",
        "Improved contact form with better validation",
        "Added testimonials carousel with auto-play"
      ]
    },
    {
      version: "v2.0.5",
      date: "January 10, 2025",
      type: "Improvement",
      changes: [
        "Optimized page loading speeds by 40%",
        "Updated design system with new color palette",
        "Improved accessibility compliance",
        "Enhanced SEO meta tags"
      ]
    },
    {
      version: "v2.0.0",
      date: "January 1, 2025",
      type: "Major Update",
      changes: [
        "Complete website redesign with modern aesthetics",
        "New portfolio showcase with interactive galleries",
        "Added case studies for major projects",
        "Implemented new content management system",
        "Mobile-first responsive design approach"
      ]
    },
    {
      version: "v1.8.2",
      date: "December 20, 2024",
      type: "Bug Fix",
      changes: [
        "Fixed navigation menu on mobile devices",
        "Resolved contact form submission issues",
        "Corrected image loading on slower connections",
        "Fixed social media link redirects"
      ]
    },
    {
      version: "v1.8.0",
      date: "December 15, 2024",
      type: "Feature",
      changes: [
        "Added FAQ section with expandable answers",
        "New client dashboard preview",
        "Integrated live chat support",
        "Added project timeline visualization"
      ]
    },
    {
      version: "v1.7.1",
      date: "December 1, 2024",
      type: "Improvement",
      changes: [
        "Enhanced security measures",
        "Improved form validation",
        "Updated privacy policy compliance",
        "Performance optimizations"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Major Update":
        return "destructive";
      case "Feature":
        return "default";
      case "Improvement":
        return "secondary";
      case "Bug Fix":
        return "outline";
      default:
        return "default";
    }
  };

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
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Changelog
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest features, improvements, and fixes.
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {update.version}
                      </CardTitle>
                      <Badge variant={getTypeColor(update.type)}>{update.type}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {update.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Want to be notified about updates? Follow us on our social media channels or subscribe to our newsletter.
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Changelog;