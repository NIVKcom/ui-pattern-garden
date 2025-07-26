import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignChicago = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">Mobile App Design in Chicago</h1>
          <p className="text-lg">Nivk.com helps Chicago startups, agencies, and enterprises launch beautiful, high-converting mobile apps. From fintech to food delivery, our UI/UX design and mobile app development services are tailored for the Windy City’s fast-moving tech scene.</p>
        </section>
        {/* Emotional Hook */}
        <section className="space-y-6">
          <p>Chicago’s tech ecosystem is booming, but competition is fierce. Your users expect seamless onboarding, fast performance, and a design that feels as bold as the city itself. Don’t let clunky UX or generic templates hold you back.</p>
          <p className="font-medium">A custom mobile app puts your brand in their pocket—delivering value, engagement, and loyalty with every tap.</p>
        </section>
        {/* Feature Set */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features for Chicago Innovators</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Lightning-fast onboarding and authentication</li>
            <li>Real-time updates for events, sports, or local news</li>
            <li>Push notifications for offers, loyalty, and engagement</li>
            <li>Integrated maps and location-based services</li>
            <li>Secure payments (Apple Pay, Google Pay, credit card)</li>
            <li>Dark mode and accessibility for all users</li>
          </ul>
          <p>Whether you’re building for River North startups or South Side communities, your app should reflect Chicago’s diversity and drive.</p>
        </section>
        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Chicago App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We learn your goals, users, and what makes your Chicago business unique.</li>
            <li><strong>UX Planning:</strong> We map user journeys, prioritize speed, and design for retention.</li>
            <li><strong>UI Design:</strong> Clean, bold visuals that capture your brand and Chicago’s energy.</li>
            <li><strong>Launch or Hand-Off:</strong> Choose between final design files or full-stack delivery.</li>
          </ol>
        </section>
        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎯 Perfect for These Chicago Businesses</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fintech and trading platforms</li>
            <li>Food delivery and restaurant apps</li>
            <li>Sports, events, and ticketing startups</li>
            <li>Healthcare and wellness providers</li>
            <li>Education and nonprofit organizations</li>
          </ul>
        </section>
        {/* Trust/Retention */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Our apps boost engagement, retention, and revenue—built for Chicago’s pace.</p>
          <p>✅ <strong>Trust the Team:</strong> Nivk’s designers and developers have launched successful apps for Chicago startups and global brands.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is a values-driven agency with a track record of results in the Midwest and beyond.</p>
        </section>
        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔧 Need Backend or Full-Stack?</h2>
          <p>Our backend dev services bring your design to life:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom APIs and integrations</li>
            <li>Real-time analytics and dashboards</li>
            <li>Payment processing and user management</li>
            <li>Cloud hosting and security</li>
          </ul>
          <p><Link to="/talk" className="text-orange-600 underline">Book a backend consult →</Link></p>
        </section>
        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Our app launch in Chicago was a hit—Nivk’s design made all the difference.”<br />
            <span className="text-sm text-gray-500">– Fictional Client, WindyCityTech</span>
          </blockquote>
        </section>
        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/" className="text-orange-600 underline">Explore all mobile app services</Link></p>
          <p>🧠 <Link to="/about" className="text-orange-600 underline">About Nivk</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your quote now</Link></p>
          <p>❓ <Link to="/faqs" className="text-orange-600 underline">FAQs</Link></p>
        </section>
        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">Ready to launch your Chicago app? Let’s build something iconic together.</p>
          <Link to="/talk" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition">Get Your App Quote Now</Link>
        </section>
        {/* Partner/Credibility */}
        <section className="pt-10 text-center text-sm text-gray-500">
          <p>🔗 <a href="https://vp0.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">vp0.com</a> — Nivk.com is a proud enterprise partner of vp0.com — the #1 App UI library in the world.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MobileAppDesignChicago; 