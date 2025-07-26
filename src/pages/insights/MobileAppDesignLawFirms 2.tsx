import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignLawFirms = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Law Firms
          </h1>
          <p className="text-lg">
            Make your legal practice more accessible, trusted, and modern with a mobile app designed by Nivk.com. We craft secure, on-brand apps that help law firms streamline client interaction, offer 24/7 access to case resources, and strengthen client loyalty.
          </p>
        </section>

        {/* Why Law Firms Need a Mobile App */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">⚖️ Why Law Firms Should Go Mobile</h2>
          <p>
            In today’s legal world, clients expect instant updates and digital convenience. An app allows your firm to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Offer secure document access & uploads</li>
            <li>Send push updates on case status</li>
            <li>Enable direct encrypted chat with lawyers</li>
            <li>Let clients view court dates and prepare</li>
            <li>Showcase services, attorneys, and client rights</li>
          </ul>
          <p>
            Plus, your firm looks modern, responsive, and ahead of the curve — a key competitive advantage in a traditional field.
          </p>
        </section>

        {/* Features We Design for Legal Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features Your Clients Will Appreciate</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Client onboarding flow with e-signatures</li>
            <li>Secure cloud-based document library</li>
            <li>Private case update notifications</li>
            <li>Billing, retainers, and invoice tracking</li>
            <li>Legal FAQ database (organized by practice area)</li>
            <li>Real-time chat with designated team members</li>
          </ul>
          <p>
            We design with legal privacy standards in mind — ensuring all UI and flows can integrate with secure backend systems (e.g., GDPR, HIPAA, local data laws).
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Legal App Design Process</h2>
          <p>
            We take legal UX seriously — blending credibility, usability, and modern standards to elevate your firm’s mobile experience.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Strategy Call:</strong> We define your target client (e.g. corporate, personal injury, real estate law).</li>
            <li><strong>Wireframes:</strong> We map legal flows like consultations, file exchange, and case timelines.</li>
            <li><strong>Visual Design:</strong> We use your logo, tone, and trust-building colors like navy, gray, and orange accents.</li>
            <li><strong>Delivery:</strong> You get dev-ready files or we build it fully with backend support.</li>
          </ol>
        </section>

        {/* Niches We Help */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏛️ Types of Law Firms We Support</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Family law firms (divorce, custody, mediation)</li>
            <li>Immigration & visa lawyers</li>
            <li>Corporate compliance & contract law</li>
            <li>Personal injury attorneys</li>
            <li>Property & real estate law</li>
          </ul>
          <p>
            Whether you're a boutique law firm or a multi-location legal network, we scale the design to fit your client load and brand tone.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Frequently Asked Questions</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">Do law apps require custom backend work?</h3>
            <p>
              Most do. We integrate with secure tools like Supabase, Firebase, or your internal CMS with encrypted auth flows.
            </p>

            <h3 className="font-semibold">How much does a legal app design cost?</h3>
            <p>
              Our legal UI/UX design packages start around €2,000. With backend dev, most projects range €6,000–€10,000 depending on complexity.
            </p>

            <h3 className="font-semibold">What about compliance and security?</h3>
            <p>
              We collaborate with your legal IT to ensure encryption, privacy policies, and user flows meet legal and jurisdictional standards.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Learn More or Take the Next Step</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/brand" className="text-orange-600 underline">See examples of our work</Link></li>
            <li><Link to="/talk" className="text-orange-600 underline">Request a quote</Link></li>
            <li><Link to="/faq" className="text-orange-600 underline">Learn how we compare to other design teams</Link></li>
            <li><Link to="/about" className="text-orange-600 underline">Meet the Nivk team</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Your law firm deserves a better mobile experience.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Your App Quote with Nivk.com
          </Link>
        </section>

        {/* Jordan Belfort’s 3 10s Embedded */}
        {/* - Product: Benefits of custom law apps are clearly laid out */}
        {/* - Salesperson: Our team’s design process is described with trust cues */}
        {/* - Company: Nivk is referenced throughout, with internal credibility links */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignLawFirms;
