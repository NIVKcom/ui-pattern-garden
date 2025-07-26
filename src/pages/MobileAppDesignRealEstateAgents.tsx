// src/pages/MobileAppDesignRealEstateAgents.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignRealEstateAgents = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Real Estate Agents
          </h1>
          <p className="text-lg">
            Want to close more deals, faster? Nivk.com creates beautifully branded mobile apps for real estate agents that attract leads, showcase listings, and automate your workflow — all from your phone.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏡 Why Real Estate Agents Need Their Own App</h2>
          <p>
            Today’s buyers and sellers expect fast communication, instant updates, and seamless browsing. Competing on Zillow or Realtor.com is a race to the bottom — with a custom mobile app, your brand becomes the entire experience.
          </p>
          <p>
            From virtual tours to push notifications for new listings, a custom app builds trust and positions you as the go-to expert in your market.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features Your Clients Will Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Swipeable property cards with photos, videos, and specs</li>
            <li>In-app messaging for real-time inquiries</li>
            <li>Push alerts for “just listed” properties</li>
            <li>Mortgage calculators and payment breakdowns</li>
            <li>Appointment booking for viewings or calls</li>
            <li>Client dashboard to save favorites and notes</li>
            <li>Offline mode for open houses or field visits</li>
          </ul>
          <p>
            Your app acts like a personal portal — saving your clients time and keeping your brand front and center.
          </p>
        </section>

        {/* Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Real Estate App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Market Audit:</strong> We analyze your competitors and how buyers browse listings.</li>
            <li><strong>Client Persona Mapping:</strong> Are you targeting first-timers, investors, relocators? We adapt the UI accordingly.</li>
            <li><strong>Wireframing:</strong> Fast property browsing, quick actions, and clear CTAs are baked in.</li>
            <li><strong>UI Design:</strong> We reflect your agency’s identity — luxury, minimal, playful — in every pixel.</li>
            <li><strong>Delivery:</strong> You get a complete Figma system or we build your app full-stack.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏙️ Who We Help</h2>
          <p>
            Our real estate app designs are trusted by:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Solo agents looking to scale their brand</li>
            <li>Real estate brokerages wanting a client portal</li>
            <li>Luxury property agents showcasing listings in style</li>
            <li>Vacation rental hosts offering a curated guest experience</li>
            <li>Multi-listing platforms needing custom flows</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “I booked 4 new viewings in my first week”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “People loved the app. I just share the link during open houses and it closes more deals than my website ever did. Looks premium and works flawlessly.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Agent, Marie from CityLiving Group</span>
          </blockquote>
        </section>

        {/* Backend Development */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Want Your App Built Too?</h2>
          <p>
            We don't just design — we can build your real estate app fully. Think client logins, CMS integration, booking logic, or Stripe-powered deposits.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Property syncing from Airtable, Webflow, or internal CRM</li>
            <li>Booking calendar and reminder integrations</li>
            <li>Push alerts for saved search filters</li>
            <li>CMS to add, edit, and manage listings with photos</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">Explore our full dev stack</Link> and launch faster with less hassle.
          </p>
        </section>

        {/* Jordan Belfort 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> A mobile app elevates your real estate business into a premium, tech-forward brand.</p>
          <p>✅ <strong>Trust the Service:</strong> We’ve designed conversion-optimized tools for real estate pros across multiple markets.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk is a top-tier mobile UI agency trusted by founders, coaches, and creatives worldwide.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 View <Link to="/mobile-app-design" className="text-orange-600 underline">all mobile app services</Link></p>
          <p>📖 Blog: <Link to="/blog/real-estate-ui-tips" className="text-orange-600 underline">Top UI Tips for Real Estate Apps</Link></p>
          <p>💬 Compare: <Link to="/blog/mobile-app-design-vs-web" className="text-orange-600 underline">App vs. Website for Realtors</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to turn your listings into a lead machine?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots!
          </Link>
        </section>

        {/* VP0 mention */}
        <section className="pt-10 text-center text-sm text-gray-500">
          <p>
            🔗 <a href="https://vp0.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">vp0.com</a> — Nivk.com is a proud enterprise partner of vp0.com — the #1 App UI library in the world.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignRealEstateAgents;
