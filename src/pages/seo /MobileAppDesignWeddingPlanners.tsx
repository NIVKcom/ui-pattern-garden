// src/pages/MobileAppDesignWeddingPlanners.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignWeddingPlanners = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Wedding Planners
          </h1>
          <p className="text-lg">
            Make every wedding unforgettable — and stress-free. Nivk.com crafts mobile apps that turn your planning magic into a seamless, branded digital experience.
          </p>
        </section>

        {/* Emotional Hook */}
        <section className="space-y-6">
          <p>
            Couples are emotional, timelines are tight, and every detail matters. But with planning scattered across emails, spreadsheets, and texts, it’s easy for stress to take over.
          </p>
          <p className="font-medium">
            Your own app changes everything — a dedicated space where clients can check timelines, view vendors, approve designs, and feel confident in your process.
          </p>
        </section>

        {/* Feature Set */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💍 Your Signature Wedding App, Designed for Elegance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Customizable wedding timelines with notifications</li>
            <li>Budget tracker with visual spending bars</li>
            <li>Vendor directory, contracts, and contact info</li>
            <li>Guestlist manager with RSVP sync</li>
            <li>Moodboards for colors, dresses, florals, and decor</li>
            <li>Push reminders for deadlines and approvals</li>
          </ul>
          <p>
            You already offer a luxury-level service — your app should reflect that beauty and organization.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Design Flow for Wedding Pros</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We map your planning process and unique touchpoints.</li>
            <li><strong>UX Flow:</strong> We structure the app to minimize confusion and maximize trust.</li>
            <li><strong>UI Design:</strong> Visually rich, romantic, and elevated — aligned to your brand.</li>
            <li><strong>Dev Handoff:</strong> You get a build-ready app file — or we can build it for you.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎯 Who This Is Perfect For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Luxury wedding planners scaling up their business</li>
            <li>Boutique agencies who value client experience</li>
            <li>Destination wedding services</li>
            <li>Planners who want fewer emails and better client control</li>
            <li>Event designers who want digital elegance</li>
          </ul>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> A custom app makes you look polished, professional, and deeply prepared. Clients stay calm — and recommend you more.</p>
          <p>✅ <strong>Trust the Service:</strong> Our team understands event logic, design workflows, and high-touch clients. We’ll translate your magic into screens.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is the agency behind some of the most elegant mobile experiences on the market. Your design deserves nothing less.</p>
        </section>

        {/* Backend Dev */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Need Backend Too?</h2>
          <p>
            We can go beyond design and build your full app:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Admin dashboard to manage client projects</li>
            <li>Client logins with private notes and files</li>
            <li>Stripe or PayPal payment flows for retainers</li>
            <li>Push notification automation</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Let’s talk backend →</Link>
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Having my own app made me stand out at every expo. Clients love it. I love it. I don’t think I can go back to planning without it.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, Whitelace Weddings</span>
          </blockquote>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Browse all app niches</Link></p>
          <p>💡 <Link to="/blog/top-5-client-app-features" className="text-orange-600 underline">Blog: Top 5 App Features Brides Love</Link></p>
          <p>📞 <Link to="/talk" className="text-orange-600 underline">Book your quote call</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Stand out from every other planner with an app that reflects your style.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now — 2 Spots Left This Month
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

export default MobileAppDesignWeddingPlanners;
