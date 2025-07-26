// src/pages/MobileAppDesignNonprofits.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignNonprofits = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Nonprofit Organizations
          </h1>
          <p className="text-lg">
            Connect with donors, engage volunteers, and make a bigger impact. Nivk.com designs nonprofit apps that simplify giving and inspire community action.
          </p>
        </section>

        {/* Emotional Hook */}
        <section className="space-y-6">
          <p>
            Every dollar counts. Every hour matters. Yet your mission competes with noisy inboxes, outdated tools, and clunky donation forms. You deserve better.
          </p>
          <p className="font-medium">
            A mobile app brings your mission to their fingertips — donations, events, updates, and volunteer action, all in one place.
          </p>
        </section>

        {/* Feature Set */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features That Empower Your Cause</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One-tap donations with Apple Pay, Google Pay, or credit card</li>
            <li>Event calendars with RSVP and ticketing</li>
            <li>Push notifications for urgent campaigns or impact stories</li>
            <li>Volunteer sign-ups and shift scheduling</li>
            <li>Member portals with resources, rewards, and badges</li>
            <li>Offline mode for global access in low-bandwidth areas</li>
          </ul>
          <p>
            Whether you’re feeding families, planting trees, or providing education — your app should reflect your mission with the same energy and care.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Nonprofit App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Mission Discovery:</strong> We get to know your values, team, and desired outcomes.</li>
            <li><strong>UX Planning:</strong> We prioritize accessibility, speed, and simplicity for all users.</li>
            <li><strong>UI Design:</strong> Clean, emotionally compelling visuals aligned with your cause.</li>
            <li><strong>Launch or Hand-Off:</strong> You choose between final design files or full-stack delivery.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎯 Perfect for These Types of Nonprofits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Environmental and climate nonprofits</li>
            <li>Education, youth, or scholarship orgs</li>
            <li>Animal welfare and rescue groups</li>
            <li>Food banks, shelters, and crisis support</li>
            <li>Human rights and policy advocacy groups</li>
          </ul>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> An app improves your fundraising results, boosts volunteer engagement, and creates transparency — all in one place.</p>
          <p>✅ <strong>Trust the Team:</strong> Our team has built apps for lean teams, social causes, and global initiatives. We care about your outcomes.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is a values-driven design agency built to serve organizations that make the world better.</p>
        </section>

        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔧 Want More Than Design?</h2>
          <p>
            Our backend dev services bring your design to life:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom donation flows (one-time or recurring)</li>
            <li>Real-time impact dashboards for donors</li>
            <li>Volunteer hour tracking and verification</li>
            <li>CRM integrations (e.g., Salesforce, Airtable, Mailchimp)</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Book a backend consult →</Link>
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Our donor engagement jumped 32% within 60 days of launching the app. Nivk made it beautiful, simple, and mission-aligned.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, BrightFuture.org</span>
          </blockquote>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app services</Link></p>
          <p>🧠 <Link to="/blog/why-nonprofits-need-apps" className="text-orange-600 underline">Blog: Why Nonprofits Need Their Own App</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your quote now</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Let’s amplify your mission with a mobile app built for real impact.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now — Limited Nonprofit Slots This Quarter
          </Link>
        </section>

        {/* VP0 Footer */}
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

export default MobileAppDesignNonprofits;
