// src/pages/MobileAppDesignFintechStartups.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignFintechStartups = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for FinTech Startups
          </h1>
          <p className="text-lg">
            Whether you’re building the next neobank, investing tool, or budgeting app — Nivk.com creates stunning, high-converting fintech interfaces that feel secure, sleek, and scalable from day one.
          </p>
        </section>

        {/* Why FinTech Needs UX Precision */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💸 Why UX Is Critical in FinTech</h2>
          <p>
            In FinTech, trust equals retention. Users abandon apps that feel slow, confusing, or untrustworthy — even if your backend is rock solid. That’s why top fintech startups partner with Nivk to ensure their first impression is flawless.
          </p>
          <p>
            From onboarding and KYC flows to data dashboards and micro-interactions, we design with user psychology, conversion, and compliance in mind.
          </p>
        </section>

        {/* Key Features for FinTech Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 FinTech App Features We Can Design</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>KYC/AML onboarding flows with document upload</li>
            <li>Interactive budgeting dashboards</li>
            <li>Investment portfolio visualizations</li>
            <li>Multi-account & multi-currency support</li>
            <li>Secure login, 2FA, biometric flows</li>
            <li>Crypto wallet and transaction interfaces</li>
          </ul>
          <p>
            Need something custom like Web3 wallet connectivity or Plaid integrations? We’ve done it.
          </p>
        </section>

        {/* FinTech Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Our FinTech Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Audit:</strong> We evaluate your UX gaps, user risks, and flow drop-offs.</li>
            <li><strong>Wireframe:</strong> We map each step to match your core KPIs.</li>
            <li><strong>UI Design:</strong> Clean, high-trust aesthetics — with friction-free flow.</li>
            <li><strong>Handoff:</strong> Dev-ready Figma files + optional frontend build by our team.</li>
          </ol>
        </section>

        {/* Ideal Clients */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏦 Who This Is For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Early-stage FinTech startups ready for MVP launch</li>
            <li>Crypto apps needing frictionless wallets</li>
            <li>Trading platforms & investment tools</li>
            <li>Banking-as-a-Service (BaaS) interfaces</li>
            <li>Accounting or invoicing tools with complex flows</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “They made our finance app feel human”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Our crypto savings app needed to feel warm, not scary. Nivk designed a flow that made our users feel empowered, secure — and ready to fund their wallets.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, VoltNest</span>
          </blockquote>
        </section>

        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💡 Want Backend Too?</h2>
          <p>
            Nivk also builds apps — not just designs. If you're looking for a full MVP build, we offer:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supabase / Firebase integrations</li>
            <li>Plaid, Stripe, and banking API workflows</li>
            <li>Mobile-first frontend builds with auth & dashboards</li>
            <li>Crypto wallet support (Metamask, Phantom, etc.)</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Book a scoping call</Link> or check out <Link to="/mobile-app-design" className="text-orange-600 underline">our full services here</Link>.
          </p>
        </section>

        {/* 3 10s Trust Loop */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> We’ve helped launch 20+ finance apps in the last 12 months.</p>
          <p>✅ <strong>Trust the Service:</strong> Our Figma-to-dev workflow is used by teams backed by Y Combinator, Seedcamp, and more.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com isn’t just a freelancer — we’re a battle-tested agency for ambitious FinTech founders.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app design services</Link></p>
          <p>📖 <Link to="/blog/fintech-design-laws" className="text-orange-600 underline">7 UI Laws That Make FinTech Apps Feel Safe</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get a custom quote</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to bring your FinTech app to life with beautiful, bank-grade UX?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Capacity
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

export default MobileAppDesignFintechStartups;
