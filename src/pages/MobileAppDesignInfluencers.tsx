// src/pages/MobileAppDesignInfluencers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignInfluencers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Influencers
          </h1>
          <p className="text-lg">
            Ready to own your audience? Nivk.com designs powerful, branded mobile apps for influencers who want full control over content, monetization, and community—without relying on algorithms or third-party platforms.
          </p>
        </section>

        {/* Why Influencers Need Their Own App */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Why Influencers Are Launching Mobile Apps</h2>
          <p>
            Social media platforms are unpredictable. Algorithms change. Reach drops. But your mobile app? It’s yours forever. A custom app lets you:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>🚀 Share exclusive content, videos, and offers</li>
            <li>📈 Grow a direct subscriber list (not just followers)</li>
            <li>🛍️ Sell merch, courses, or memberships inside the app</li>
            <li>📬 Send push updates for launches, drops, or tours</li>
            <li>👑 Build a premium experience that reflects your brand</li>
          </ul>
          <p>
            You’ve built the audience. Now build the ecosystem that turns attention into income—with design that matches your vibe.
          </p>
        </section>

        {/* Nivk’s App Design Process for Influencers */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎨 How We Build Apps That Match Your Influence</h2>
          <p>
            We know influencers need more than pretty UI. You need fan conversion, merch logistics, and user flow. Our process:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Kickoff Call:</strong> We learn your aesthetic, audience habits, and brand DNA.</li>
            <li><strong>Experience Mapping:</strong> We define the fan flow: discover → engage → purchase → repeat.</li>
            <li><strong>Wireframes:</strong> Clean, fast layouts tailored to your content types (videos, stories, etc.).</li>
            <li><strong>High-Fidelity UI:</strong> We style it in your tone—minimal, colorful, edgy, or luxury.</li>
            <li><strong>Handoff or Build:</strong> Get dev-ready Figma files or full-stack delivery with Supabase/Firebase.</li>
          </ol>
        </section>

        {/* Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">👥 Who Is This For?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🎤 Musicians or podcasters who want gated episodes and push drops</li>
            <li>💄 Beauty creators launching their own product lines</li>
            <li>🏋️ Fitness influencers offering member-only programs</li>
            <li>✈️ Travel vloggers sharing curated maps, hotels, & tips</li>
            <li>🎮 Streamers selling guides, hosting fan clubs or Discord perks</li>
          </ul>
          <p>
            Our apps help you monetize attention and upgrade from “just another feed” to a full-on brand experience.
          </p>
        </section>

        {/* Trust Signal + Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 Real Impact, Real Results</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “The app Nivk built made me feel like I was finally in control. My fans now get early merch drops, stream my videos, and message me in one place. It paid for itself in 2 weeks.”<br />
            <span className="text-sm text-gray-500">– Fictional Influencer, Fashion Niche</span>
          </blockquote>
          <p>
            We’re trusted by rising creators, influencers, and solo founders who want a reliable, premium, brand-consistent way to deliver content and convert fans.
          </p>
        </section>

        {/* Backend Offer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Want Login, Subscriptions, or CMS?</h2>
          <p>
            We offer optional backends for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>🔐 Subscriber logins with paywall</li>
            <li>🗂️ Custom content management system (CMS)</li>
            <li>📦 Shopify or Stripe integrations</li>
            <li>🛠️ Admin panel to edit content without code</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">See how our backend builds work</Link>.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to break out of the algorithm trap and build your own platform?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Slots!
          </Link>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>
            🔗 Learn more about our <Link to="/mobile-app-design" className="text-orange-600 underline">mobile app design services</Link>
          </p>
          <p>
            ✏️ Read our blog post: <Link to="/blog/why-influencers-need-an-app" className="text-orange-600 underline">Why Influencers Are Launching Their Own Apps</Link>
          </p>
          <p>
            💼 Explore <Link to="/brand" className="text-orange-600 underline">our portfolio and brand-first approach</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignInfluencers;
