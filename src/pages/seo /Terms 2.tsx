import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using NIVK's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                NIVK provides mobile app design and development services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Mobile application design and user experience optimization</li>
                <li>Custom mobile app development</li>
                <li>App store optimization and deployment</li>
                <li>Maintenance and support services</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Project Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                All projects require a signed contract outlining scope, timeline, and payment terms. Changes to project scope 
                may result in additional charges and timeline adjustments. We reserve the right to showcase completed work 
                in our portfolio unless otherwise specified in the contract.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment schedules are outlined in individual project contracts. Late payments may result in project delays or 
                suspension of services. All prices are subject to applicable taxes and fees.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, clients receive ownership of the final deliverables. NIVK retains the right to reuse 
                general methodologies, techniques, and know-how gained during the project for future work.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                NIVK's liability is limited to the amount paid for services. We are not responsible for indirect, 
                incidental, or consequential damages resulting from the use of our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these terms, please contact us at legal@nivk.com.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Terms;