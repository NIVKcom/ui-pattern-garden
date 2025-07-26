// src/pages/MobileAppDesignSubscriptionBoxes.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignSubscriptionBoxes = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Subscription Box Businesses
          </h1>
          <p className="text-lg">
            Turn casual customers into monthly superfans. At Nivk.com, we design modern, high-performing mobile apps tailored for subscription box brands — helping you increase retention, personalize the unboxing experience, and boost recurring revenue.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📈 Why Subscription Brands Need a Mobile App</h2>
          <p>
            In the world of subscription boxes — beauty, coffee, pets, books, or snacks — customer loyalty is everything. A custom app lets you:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Track shipments and update billing seamlessly</li>
            <li>Offer exclusive content or discounts to subscribers</li>
            <li>Enable one-tap skips, swaps, or upgrades</li>
            <li>Show unboxing previews and upcoming items</li>
            <li>Push personalized notifications based on past purchases</li>
          </ul>
          <p>
            Unlike clunky email flows or mobile web checkouts, a well-designed native app makes users feel connected to your brand — like your product lives on their phone, not just in their mailbox.
          </p>
        </section>

        {/* What We Build In */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features for Subscription Businesses</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Account dashboard with skip/swap/pause controls</li>
            <li>Dynamic box preview carousel with editable contents</li>
            <li>Push reminders for upcoming renewals</li>
            <li>Gamified loyalty points with redemption options</li>
            <li>Referral system with social sharing</li>
            <li>Feedback collection for each month’s box</li>
          </ul>
          <p>
            Your app becomes more than a portal — it becomes your retention engine.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Subscription UX/UI Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We audit your current retention flow and subscriber UX.</li>
            <li><strong>Journey Mapping:</strong> From onboarding → renewal → reactivation — every screen is mapped.</li>
            <li><strong>Wireframes:</strong> We iterate key interactions for simplicity and delight.</li>
            <li><strong>High-Fidelity UI:</strong> Tailored to your brand, with ecommerce best practices built-in.</li>
            <li><strong>Delivery:</strong> Dev-ready Figma files or optional full-stack app build.</li>
          </ol>
        </section>

        {/* Who This Is For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📦 We Build for Every Box Type</h2>
          <p>
            Whether you're a startup or scaling DTC giant, we've designed subscription box apps in industries like:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>🎁 Beauty & wellness boxes (e.g., skincare kits)</li>
            <li>☕ Coffee, tea, and gourmet snacks</li>
            <li>🐾 Pet product subscriptions</li>
            <li>📚 Book-of-the-month clubs</li>
            <li>👕 Apparel and fashion accessories</li>
            <li>🧪 Niche B2B subscription kits (e.g., lab samples)</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Our Churn Rate Dropped by 23%”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We thought a mobile app was overkill for our 4,000 subscribers — but Nivk’s design made it dead simple to launch. Our churn dropped and referrals exploded.”<br />
            <span className="text-sm text-gray-500">– Fictional Subscription Founder, London</span>
          </blockquote>
        </section>

        {/* Backend Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔐 Backend Integrations (Optional)</h2>
          <p>
            Want your app to sync with Shopify, Stripe, Recharge, or your own backend? We build headless app infrastructure using Supabase, allowing you to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Track inventory per customer</li>
            <li>Auto-push monthly box logic to users</li>
            <li>Send email receipts + in-app confirmations</li>
            <li>Enable secure login with biometric support</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">See our full-stack services here</Link>.
          </p>
        </section>

        {/* Jordan Belfort 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Your app becomes the new face of your subscription experience — not just a reorder tool.</p>
          <p>✅ <strong>Trust the Service:</strong> Nivk designs for conversion, habit, and brand love — not just aesthetics.</p>
          <p>✅ <strong>Trust the Company:</strong> We’re not generalists. We only do app design — and we’re damn good at it.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 Learn more at <Link to="/mobile-app-design" className="text-orange-600 underline">nivk.com/mobile-app-design</Link></p>
          <p>📖 Blog: <Link to="/blog/subscription-app-onboarding-ux" className="text-orange-600 underline">How to Onboard Users in Subscription Apps</Link></p>
          <p>🧠 Compare: <Link to="/blog/best-subscription-app-designs" className="text-orange-600 underline">Best Subscription App Designs</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Want to lower churn, increase reorders, and look world-class?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots!
          </Link>
        </section>

        {/* VP0 Link */}
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

export default MobileAppDesignSubscriptionBoxes;
