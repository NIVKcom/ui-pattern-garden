import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Brand = () => {
  const colorPalette = [
    { name: "Primary Orange", hex: "#FFA200", description: "Main brand color for CTAs and highlights" },
    { name: "Secondary Pink", hex: "#FF80C4", description: "Accent color for gradients and emphasis" },
    { name: "Accent Purple", hex: "#B388FF", description: "Supporting color for variety and depth" },
    { name: "Background Dark", hex: "#0A0A0A", description: "Primary background color" },
    { name: "Text Light", hex: "#FFFFFF", description: "Primary text color on dark backgrounds" },
    { name: "Text Muted", hex: "#A1A1AA", description: "Secondary text color" }
  ];

  const logoVariations = [
    { name: "Primary Logo", description: "Main logo with full color treatment" },
    { name: "White Logo", description: "For use on dark backgrounds" },
    { name: "Black Logo", description: "For use on light backgrounds" },
    { name: "Icon Only", description: "Simplified version for small applications" }
  ];

  const typography = [
    { name: "Primary Font", font: "Inter", usage: "Headings, UI elements, body text" },
    { name: "Display Font", font: "Inter", usage: "Large headings and hero text" },
    { name: "Monospace", font: "JetBrains Mono", usage: "Code snippets and technical content" }
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
              Brand Guidelines
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our visual identity and brand standards for consistent application across all touchpoints.
            </p>
          </div>

          {/* Logo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Logo</h2>
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/718d133e-2817-4ea0-9fca-62b9acb14406.png" 
                alt="NIVK Logo" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <p className="text-muted-foreground">Our primary logo represents innovation, creativity, and technical excellence.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logoVariations.map((variation, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{variation.name}</CardTitle>
                    <CardDescription>{variation.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Color Palette */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Color Palette</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorPalette.map((color, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10">
                  <CardHeader>
                    <div 
                      className="w-full h-20 rounded-md mb-4" 
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <CardTitle className="text-lg text-foreground">{color.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">{color.hex}</Badge>
                    <CardDescription>{color.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Typography</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {typography.map((type, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground" style={{ fontFamily: type.font }}>
                      {type.name}
                    </CardTitle>
                    <Badge variant="secondary">{type.font}</Badge>
                    <CardDescription>{type.usage}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold mb-2" style={{ fontFamily: type.font }}>Aa</p>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: type.font }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Usage Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="backdrop-blur-sm bg-card/80 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Do's</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use the logo with adequate clear space</li>
                    <li>• Maintain consistent color usage</li>
                    <li>• Use approved typography combinations</li>
                    <li>• Ensure sufficient contrast for accessibility</li>
                    <li>• Use high-resolution assets for print</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-sm bg-card/80 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Don'ts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Don't stretch or distort the logo</li>
                    <li>• Don't use unauthorized color variations</li>
                    <li>• Don't place logo on busy backgrounds</li>
                    <li>• Don't use outdated logo versions</li>
                    <li>• Don't modify typography weights arbitrarily</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Need brand assets or have questions about usage? Contact our team for brand guidelines and asset downloads.
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Brand;