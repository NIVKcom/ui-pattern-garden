import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you contact us for services, 
                subscribe to our newsletter, or interact with our website. This may include your name, email address, 
                phone number, and project details.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about projects and updates</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share information with trusted service providers who assist us in 
                operating our website and conducting our business.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information. You may also opt out of 
                marketing communications at any time. To exercise these rights, please contact us using the information below.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@nivk.com or through 
                our website contact form.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;