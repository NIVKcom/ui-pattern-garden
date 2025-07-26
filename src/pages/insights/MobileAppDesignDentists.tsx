import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignDentists = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Dentists
          </h1>
          <p className="text-lg">
            Make your dental clinic modern, professional, and accessible with a custom-branded mobile app. At <strong>Nivk.com</strong>, we design intuitive mobile apps for dentists that streamline appointments, boost patient retention, and build trust — all from your pocket.
          </p>
        </section>

        {/* Why Dentists Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🦷 Why Dental Clinics Benefit from a Mobile App</h2>
          <p>
            Most patients now prefer digital-first services — including healthcare. A mobile app for your dental practice ensures your clinic stays top-of-mind and top-of-touch.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Online booking with real-time availability</li>
            <li>Automated appointment reminders & no-show reduction</li>
            <li>Push notifications for hygiene checkups & campaigns</li>
            <li>Before/after galleries and patient education tools</li>
            <li>HIPAA-compliant messaging & support</li>
          </ul>
          <p>
            It’s not just about convenience — it’s about giving your patients peace of mind and ease of access to care.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Dental App Features Your Patients Will Appreciate</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>1-click booking and rescheduling</li>
            <li>Push alerts for reminders and promotions</li>
            <li>Dental care tips & brushing reminders</li>
            <li>In-app patient intake and consent forms</li>
            <li>Smile gallery to show off case studies</li>
            <li>Loyalty or referral rewards program</li>
          </ul>
          <p>
            Whether you’re a family dentist, orthodontist, or cosmetic practice — we tailor your app to your brand and ideal patient journey.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ How We Design Dental Apps That Feel Trustworthy</h2>
          <p>
            Our process helps you go from “just a clinic” to a professional brand with digital presence — no tech stress required.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We learn about your clinic type, team, and patient demographics.</li>
            <li><strong>Wireframing:</strong> We map out appointment flows, onboarding, and key actions.</li>
            <li><strong>UI Design:</strong> We match your branding with clean, calming UX choices (fonts, colors, layout).</li>
            <li><strong>Delivery:</strong> You receive ready-to-code Figma files, or we handle the backend too.</li>
          </ol>
        </section>

        {/* Types of Practices We Help */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏥 Dental Professionals We Work With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>General and family dentists</li>
            <li>Cosmetic & aesthetic dental practices</li>
            <li>Orthodontists & pediatric specialists</li>
            <li>Multi-location clinics and DSO brands</li>
            <li>Solo dental startups building online-first brands</li>
          </ul>
          <p>
            Whether you’re scaling or modernizing — a mobile app helps you stay patient-first in every interaction.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Common Questions from Dental Clients</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">Can the app integrate with my current booking system?</h3>
            <p>
              Yes. We work with existing tools like Zocdoc, Calendly, Doctible, and also build custom integrations when needed.
            </p>

            <h3 className="font-semibold">Is the app HIPAA-compliant?</h3>
            <p>
              Absolutely — we ensure privacy, security, and compliance if you choose our backend development add-on.
            </p>

            <h3 className="font-semibold">Can I update it myself?</h3>
            <p>
              Yes. We can integrate a simple CMS for you to upload content, promos, or schedule changes on your own.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Explore More Before You Commit</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/brand" className="text-orange-600 underline">See other health & wellness UI projects</Link></li>
            <li><Link to="/talk" className="text-orange-600 underline">Book your custom quote</Link></li>
            <li><Link to="/faq" className="text-orange-600 underline">Understand how we work</Link></li>
            <li><Link to="/about" className="text-orange-600 underline">Meet the Nivk team</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Your clinic deserves a seamless mobile experience. We’ll design it for you.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Your App Quote with Nivk.com
          </Link>
        </section>

        {/* Jordan Belfort’s 3 10s Embedded */}
        {/* 1. Product: Dental app benefits shown clearly */}
        {/* 2. You/Us: Friendly tone, professional process, pricing transparency */}
        {/* 3. Company: Nivk.com is linked across the site with proof & consistency */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignDentists;
