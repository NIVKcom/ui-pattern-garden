import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignEcommerceStores = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for E-Commerce Stores
          </h1>
          <p className="text-lg">
            Ready to turn one-time shoppers into lifetime customers? At <strong>Nivk.com</strong>, we design stunning mobile shopping apps that increase cart value, retention, and brand loyalty — all tailored to your e-commerce brand.
          </p>
        </section>

        {/* Why Mobile Matters for E-Com */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛒 Why Every Online Store Needs a Mobile App</h2>
          <p>
            Mobile apps outperform websites on every key metric: conversion rates, time-on-site, and re-engagement. With your own branded app, you can:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce cart abandonment with faster, cleaner checkouts</li>
            <li>Send targeted push offers to drive repeat orders</li>
            <li>Showcase products in immersive native UI</li>
            <li>Enable offline browsing for travel or poor Wi-Fi zones</li>
            <li>Build a loyal buyer base outside of Meta and Google ads</li>
          </ul>
          <p>
            Best of all? You own your customer — no algorithms, no middlemen, no % fees.
          </p>
        </section>

        {/* App Features for Online Shops */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📦 E-Commerce App Features Your Customers Expect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Personalized home screens based on purchase behavior</li>
            <li>Fast product search with filters, tags, and collections</li>
            <li>One-click checkout + Apple Pay / Google Pay support</li>
            <li>Loyalty program tracking (points, badges, VIP status)</li>
            <li>Real-time push for back-in-stock and flash sales</li>
            <li>Integrated reviews, UGC galleries, and video demos</li>
          </ul>
          <p>
            Every element is optimized for mobile gestures, scroll behaviors, and platform-native design systems (iOS/Android).
          </p>
        </section>

        {/* Our E-Com Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Mobile App Design Process for E-Com</h2>
          <p>
            From DTC fashion to niche subscription boxes, we create apps that feel like extensions of your brand — not just Shopify skins.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>1. Audit & Strategy:</strong> We analyze your storefront, buyer personas, and tech stack.</li>
            <li><strong>2. Wireframing:</strong> We lay out the shopping experience based on your funnel.</li>
            <li><strong>3. UI Design:</strong> Tailored to your aesthetic — modern, luxury, playful, or eco-minimal.</li>
            <li><strong>4. Delivery:</strong> You get pixel-perfect Figma files or full app development with backend logic.</li>
          </ol>
        </section>

        {/* Niches We Serve */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛍️ Brands We Build Shopping Apps For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Apparel and fashion retailers</li>
            <li>Beauty and skincare brands</li>
            <li>Subscription services (meals, vitamins, pet supplies)</li>
            <li>Luxury products with white-glove UX</li>
            <li>Global DTC brands scaling beyond Shopify</li>
          </ul>
          <p>
            If your store brings in €10k–€100k+ MRR and you're tired of fighting ad costs, a native app is your next smart move.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Frequently Asked Questions</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">Can this integrate with my Shopify or WooCommerce store?</h3>
            <p>
              Yes — we design and (if needed) develop apps that sync products, orders, and inventory with most platforms via APIs or middleware.
            </p>

            <h3 className="font-semibold">What does it cost to design an e-commerce app?</h3>
            <p>
              Most projects range from €2,000 to €4,500 for design. Full dev builds range from €6k to €12k depending on features.
            </p>

            <h3 className="font-semibold">Can you handle recurring subscriptions or memberships?</h3>
            <p>
              Absolutely. We build flows for monthly boxes, gated content, or premium tiers using Stripe and custom auth logic.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Want to See More?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/brand" className="text-orange-600 underline">Explore our design work</Link></li>
            <li><Link to="/talk" className="text-orange-600 underline">Book a free quote</Link></li>
            <li><Link to="/faq" className="text-orange-600 underline">See what makes us different</Link></li>
            <li><Link to="/about" className="text-orange-600 underline">Learn more about Nivk</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Ready to increase repeat purchases and reduce ad spend?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Your App Quote with Nivk.com
          </Link>
        </section>

        {/* Jordan Belfort’s 3 10s Embedded */}
        {/* - Product: Mobile apps for e-commerce, fully detailed */}
        {/* - Trust in Us: Our process, pricing, and niche experience is transparent */}
        {/* - Trust in Company: Internal links, credibility markers, structured delivery */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignEcommerceStores;
