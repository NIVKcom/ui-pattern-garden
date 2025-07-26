import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignDeliveryBusinesses = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Delivery Businesses
          </h1>
          <p className="text-lg">
            Launch, scale, or modernize your delivery company with a sleek, branded mobile app. At <strong>Nivk.com</strong>, we design high-performance mobile apps for food, parcel, grocery, and B2B delivery businesses — so you can streamline logistics, track orders in real time, and delight your customers at every doorstep.
          </p>
        </section>

        {/* Why Delivery Needs Great UX */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🚚 Why Delivery Apps Need Exceptional UI/UX</h2>
          <p>
            Your customers want speed and simplicity. Your drivers want clarity and routes. Your back office wants data and control. A well-designed mobile app brings all of that together — fast.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Order friction kills revenue — great UX boosts conversions</li>
            <li>Live tracking reduces support tickets & builds trust</li>
            <li>Driver UI = efficiency = fewer mistakes</li>
            <li>Well-designed onboarding lowers drop-off rates</li>
          </ul>
          <p>
            Most delivery apps are clunky clones. We build yours to stand out — and work flawlessly across all devices.
          </p>
        </section>

        {/* App Features for Delivery */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features Built for Scale & Speed</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time GPS tracking with map overlays</li>
            <li>Push notifications for status updates</li>
            <li>Driver mode with route optimization & proof-of-delivery capture</li>
            <li>In-app payments & tip support</li>
            <li>Order history and re-order in 2 taps</li>
            <li>Admin dashboards for dispatch, analytics & CRM (via backend)</li>
          </ul>
          <p>
            From restaurant delivery to last-mile logistics — we design everything to convert and operate at scale.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ How We Design Delivery Apps That Actually Deliver</h2>
          <p>
            Our design process ensures every screen is conversion-optimized, branded, and ready for action:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We map your ops model (single restaurant, marketplace, courier fleet, etc.)</li>
            <li><strong>Flow Design:</strong> We wireframe key user paths: customer → order → dispatch → driver → delivery → feedback</li>
            <li><strong>UI/UX Design:</strong> We apply modern design with brand colors, intuitive layouts, and smooth animations</li>
            <li><strong>Dev-Ready Handoff:</strong> You get a build-ready design — or we can develop it for you with backend integration</li>
          </ol>
        </section>

        {/* Delivery Types We Serve */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏢 Who We Work With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Food delivery brands (restaurant chains, ghost kitchens)</li>
            <li>Local courier startups competing with Uber Eats/Postmates</li>
            <li>Grocery delivery platforms with inventory sync</li>
            <li>Courier companies and B2B logistics firms</li>
            <li>eCommerce brands building same-day delivery options</li>
          </ul>
          <p>
            Whether you need a consumer-facing mobile app, a driver dashboard, or admin panel — we’ve designed it before.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Frequently Asked by Delivery Founders</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">Can you design both customer and driver apps?</h3>
            <p>
              Yes. We specialize in multi-sided platforms — customer, driver, admin — and ensure UX flows smoothly between them.
            </p>

            <h3 className="font-semibold">Do you build backend features too?</h3>
            <p>
              Yes. We offer optional backend development for features like dispatch logic, live tracking, and order management.
            </p>

            <h3 className="font-semibold">What’s the timeline to get started?</h3>
            <p>
              We typically start design within 3–5 days. Delivery depends on scope, but most MVPs are done within 2–4 weeks.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Learn More Before You Commit</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/brand" className="text-orange-600 underline">See delivery UI case studies</Link></li>
            <li><Link to="/talk" className="text-orange-600 underline">Book a free quote call</Link></li>
            <li><Link to="/faq" className="text-orange-600 underline">See how we compare to agencies</Link></li>
            <li><Link to="/about" className="text-orange-600 underline">About the Nivk.com team</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Your delivery experience deserves clean UX, smart flows, and real trust.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Your App Quote with Nivk.com
          </Link>
        </section>

        {/* Jordan Belfort’s 3 10s Embedded */}
        {/* 1. Product: Clear use cases, pain points, & feature benefits */}
        {/* 2. You/Us: Process clarity, speed, tailored for delivery vertical */}
        {/* 3. Company: Nivk.com consistently linked, positioned as trustworthy design partner */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignDeliveryBusinesses;
