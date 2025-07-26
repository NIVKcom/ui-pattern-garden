// src/pages/MobileAppDesignLocalRetailers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignLocalRetailers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Local Retailers
          </h1>
          <p className="text-lg">
            Your store isn’t just a location — it’s a brand, a heartbeat in your neighborhood. Let’s bring that experience to your customers’ pockets.
          </p>
        </section>

        {/* Emotional Hook */}
        <section className="space-y-6">
          <p>
            You’ve built trust in your community. Customers know your face, love your products, and refer their friends. But when they leave your shop… are they still connected to you?
          </p>
          <p className="font-medium">
            A custom mobile app lets you stay in their lives — not just in their memories.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📲 Why Local Retailers Are Launching Apps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Offer click-and-collect and same-day delivery</li>
            <li>Share flash deals and restocks with push notifications</li>
            <li>Run a loyalty program with points and rewards</li>
            <li>Enable contactless payments and receipts</li>
            <li>Showcase new arrivals, staff picks, and seasonal promos</li>
          </ul>
          <p>
            Your store deserves the same level of tech as the big brands — just built smarter and more affordably.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ What Working With Nivk Looks Like</h2>
          <p>
            We don’t just design apps. We craft tools your customers will actually use — and love.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Shop Discovery:</strong> We learn your layout, story, audience, and goals.</li>
            <li><strong>UX Strategy:</strong> We design flows that mirror your in-store experience digitally.</li>
            <li><strong>Visual Design:</strong> We match your signage, color palette, and vibe perfectly.</li>
            <li><strong>Delivery:</strong> You get Figma files and dev-ready assets — or full-stack dev from our team.</li>
          </ol>
        </section>

        {/* Who This Is For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛍️ Who Is This For?</h2>
          <p>
            This works especially well for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Boutique fashion stores</li>
            <li>Bookshops and indie retailers</li>
            <li>Plant stores and florists</li>
            <li>Gift, craft, or stationery shops</li>
            <li>Food and specialty grocers</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “I never imagined how much a mobile app would transform my business. Nivk captured my store’s essence perfectly — now 30% of our orders are in-app.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, Bloom&Co</span>
          </blockquote>
        </section>

        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔧 Want Full-Stack Development?</h2>
          <p>
            If you don’t have a tech team, we’ve got you covered. We offer backend development with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Inventory management system</li>
            <li>Stripe checkout and QR-based payment flows</li>
            <li>Coupon codes, rewards, and referrals</li>
            <li>Admin dashboard for product updates</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Book a free backend consultation</Link>.
          </p>
        </section>

        {/* Trust Section — Jordan Belfort 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Your own mobile app makes you unforgettable — it's a storefront in every customer’s pocket.</p>
          <p>✅ <strong>Trust the Team:</strong> We’ve worked with dozens of local shops — we know how to design apps that actually convert.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is a top-rated mobile design agency that prioritizes independent businesses.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app design services</Link></p>
          <p>📝 <Link to="/blog/why-every-local-shop-needs-an-app" className="text-orange-600 underline">Blog: Why Every Local Shop Needs a Mobile App</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your local retail app quote now</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Stop losing customers to big-box apps. Reclaim your customer experience today.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Studio Slots Available
          </Link>
        </section>

        {/* VP0 Partnership Footer */}
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

export default MobileAppDesignLocalRetailers;
