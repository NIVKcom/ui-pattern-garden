import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";

const About = () => {
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
              About NIVK
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of designers and developers dedicated to creating exceptional mobile experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                NIVK was founded with a simple mission: to bridge the gap between innovative ideas and stunning mobile applications. 
                We believe that great design isn't just about aesthetics—it's about creating intuitive experiences that users love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since our inception, we've worked with startups and established companies alike, helping them bring their 
                visions to life through thoughtful design and cutting-edge technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with mobile applications that not only look exceptional but also deliver meaningful 
                value to their users. We're committed to staying at the forefront of design trends and technology to 
                ensure our clients always receive the best possible solution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project we undertake is an opportunity to push boundaries, challenge conventions, and create 
                something truly remarkable.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose NIVK?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our diverse team brings years of experience in design, development, and user experience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Proven Process</h3>
                <p className="text-muted-foreground">
                  We follow a structured approach that ensures quality, timelines, and client satisfaction.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Long-term Partnership</h3>
                <p className="text-muted-foreground">
                  We believe in building lasting relationships and supporting our clients beyond project completion.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default About;