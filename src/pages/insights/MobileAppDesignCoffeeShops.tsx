// src/pages/MobileAppDesignCoffeeShops.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignCoffeeShops = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Coffee Shops
          </h1>
          <p className="text-lg">
            Want to increase foot traffic, mobile orders, and loyal customers? Nivk.com designs sleek mobile apps for cafés that make it easy for customers to order ahead, earn rewards, and fall in love with your brand experience.
          </p>
        </section>

        {/* Why Coffee Shops Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">☕ Why Coffee Shops Thrive With Mobile Apps</h2>
          <p>
            Coffee drinkers are creatures of habit—and a mobile app makes their morning routine smoother and faster. No lines. No waiting. Just tap, order, and sip.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>🚀 Skip-the-line ordering with pickup time slots</li>
            <li>📲 Mobile payment and wallet integrations</li>
            <li>🎁 Loyalty programs with punch cards or points</li>
            <li>🧾 Automatic receipt + email integration</li>
            <li>🔔 Push alerts for happy hour or drink drops</li>
            <li>🧠 User behavior analytics (see what sells!)</li>
          </ul>
          <p>
            A custom mobile app helps you control the customer experience, collect useful data, and reduce reliance on third-party apps that take fees and limit your brand.
          </p>
        </section>

        {/* Nivk’s Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Café App Design Process</h2>
          <p>
            Our design process is made to be efficient, aesthetic, and results-driven. Here’s how it works:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We learn your brand, vibe, and shop goals.</li>
            <li><strong>Wireframes:</strong> We plan out a user-first layout with a smooth flow.</li>
            <li><strong>UI Design:</strong> We use your brand colors (or help you pick them), and add photos, buttons, and interactions that match your café.</li>
            <li><strong>Handoff/Build:</strong> You receive a ready-to-build file or we handle the full-stack development with Supabase.</li>
          </ol>
        </section>

        {/* Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏙️ Who’s This For?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🧑‍🍳 Local coffee shops with multiple locations</li>
            <li>📍 Indie cafés in tourist-heavy neighborhoods</li>
            <li>💼 Co-working cafés looking to build community</li>
            <li>🛵 Espresso bars with delivery partners</li>
            <li>🌱 Organic or vegan cafés building loyal followings</li>
          </ul>
          <p>
            No matter your style—minimal, cozy, vintage, or bold—we’ll match it in the app design and UI.
          </p>
        </section>

        {/* Trust Signal + Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 Real Feedback</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Our app made pre-orders skyrocket. Now regulars order while still on the train—and we doubled loyalty visits in one month.”<br />
            <span className="text-sm text-gray-500">– Fictional Café Owner, Brussels</span>
          </blockquote>
          <p>
            At Nivk, we believe small brands deserve big design. We’ve helped coffee shops in Europe and the US build stronger daily habits with their customers—and we can do the same for you.
          </p>
        </section>

        {/* Backend Add-on */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧩 Want Backend + Analytics Too?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>👥 Account system with saved orders</li>
            <li>📈 Real-time insights (top drinks, drop-offs)</li>
            <li>🔄 Easy item updates without developer help</li>
            <li>💳 Stripe + Apple Pay + Google Pay built-in</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">Learn more about our full-stack app builds</Link>.
          </p>
        </section>

        {/* Jordan Belfort's 3 10s Reinforcement */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Product Confidence:</strong> Our apps are used across Europe by hospitality brands increasing re-orders and retention.</p>
          <p>✅ <strong>Service Trust:</strong> You talk directly with designers who understand customer flow, not middlemen.</p>
          <p>✅ <strong>Company Credibility:</strong> Nivk is a dedicated mobile agency, not a generalist shop — we specialize in apps that convert users into fans.</p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Get your app before the morning rush hits.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get a Quote Now – Limited Slots!
          </Link>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>
            🔗 Learn more at <Link to="/mobile-app-design" className="text-orange-600 underline">nivk.com/mobile-app-design</Link>
          </p>
          <p>
            📚 Read: <Link to="/blog/top-5-mobile-app-design-tips-for-coffee-brands" className="text-orange-600 underline">Top 5 Coffee App Design Tips</Link>
          </p>
          <p>
            💬 Or <Link to="/talk" className="text-orange-600 underline">talk to our design team</Link> directly.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignCoffeeShops;
