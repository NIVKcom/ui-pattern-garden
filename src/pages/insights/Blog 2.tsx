import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Mobile App Design in 2025",
      description: "Exploring emerging trends and technologies shaping the mobile app landscape.",
      category: "Design Trends",
      date: "January 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "Building User-Centric Mobile Experiences",
      description: "A comprehensive guide to designing apps that users actually want to use.",
      category: "User Experience",
      date: "January 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "From Concept to App Store: Our Design Process",
      description: "An inside look at how we transform ideas into successful mobile applications.",
      category: "Process",
      date: "January 5, 2025",
      readTime: "6 min read"
    },
    {
      title: "Mobile App Performance Optimization",
      description: "Best practices for creating fast, responsive mobile applications.",
      category: "Development",
      date: "December 28, 2024",
      readTime: "7 min read"
    },
    {
      title: "The Psychology of Mobile App Colors",
      description: "How color choices impact user behavior and app success.",
      category: "Design Psychology",
      date: "December 20, 2024",
      readTime: "4 min read"
    },
    {
      title: "Cross-Platform vs Native: Making the Right Choice",
      description: "Comparing development approaches to help you choose the best strategy.",
      category: "Strategy",
      date: "December 15, 2024",
      readTime: "9 min read"
    }
  ];

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
        
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              NIVK Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, trends, and best practices from the world of mobile app design and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10 hover:bg-card/90 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              More articles coming soon! Subscribe to our newsletter to stay updated.
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Blog;