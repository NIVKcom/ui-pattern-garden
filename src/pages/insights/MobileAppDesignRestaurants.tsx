import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignRestaurants = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Restaurants
          </h1>
          <p className="text-lg">
            Want to grow your restaurant with a branded mobile experience? Nivk.com designs stunning, intuitive apps for restaurants that boost orders, increase loyalty, and bring customers back again and again.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🍽️ Why Restaurants Need a Custom Mobile App</h2>
          <p>
            Most diners now search, order, and book using their smartphones. Competing with third-party delivery platforms? A custom app puts control back in your hands — no more 30% commission cuts, lost brand identity, or limited customer data.
          </p>
          <p>
            With a beautifully designed mobile app, your restaurant can offer smooth ordering, direct booking, digital loyalty cards, and instant updates for happy hour, specials, or events — all in one place.
          </p>
        </section>

        {/* What We Design for Restaurants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features Your Guests Will Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Interactive digital menus with modifiers and photos</li>
            <li>One-click reordering for loyal guests</li>
            <li>QR code table-side ordering</li>
            <li>Loyalty programs with rewards and point tracking</li>
            <li>Push notifications for promos, events, and specials</li>
            <li>Multilingual support for tourist-heavy locations</li>
          </ul>
          <p>
            Every app we design is optimized for usability, speed, and conversion — ensuring your guests complete their orders or reservations with minimal friction.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Restaurant App Design Process</h2>
          <p>
            At Nivk.com, we guide you from idea to execution with a process tailored to food businesses:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We learn your menu, audience, and tech goals.</li>
            <li><strong>UX Research:</strong> We analyze your flow and competition (e.g., OpenTable, Uber Eats).</li>
            <li><strong>Wireframing:</strong> We structure the app for conversion, clarity, and ease of use.</li>
            <li><strong>UI Design:</strong> We apply your brand with modern, mouth-watering visuals.</li>
            <li><strong>Delivery:</strong> You receive a dev-ready design or optional full-stack build.</li>
          </ol>
        </section>

        {/* Local Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏙️ Who This Is For</h2>
          <p>
            We’ve designed mobile apps for all kinds of restaurants, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fast casual chains wanting custom ordering apps</li>
            <li>Fine dining restaurants offering reservations and pre-set menus</li>
            <li>Food trucks and pop-ups using QR code menus</li>
            <li>Cafés launching loyalty apps for daily traffic</li>
            <li>Multi-location brands with dynamic pricing needs</li>
          </ul>
        </section>

        {/* Backend Dev Offer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔐 Need Backend Too?</h2>
          <p>
            We don’t just design. If you need real functionality — logins, analytics, inventory sync, Stripe payments — we also build scalable backends using Firebase or Supabase. You get beautiful front-ends with powerful tech under the hood.
          </p>
          <Link to="/talk" className="text-orange-500 underline">Learn more about backend development</Link>
        </section>

        {/* Internal Links */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-500">Explore More</h3>
          <ul className="list-disc list-inside">
            <li><Link to="/#our-work" className="text-orange-500 underline">See our recent app designs</Link></li>
            <li><Link to="/talk" className="text-orange-500 underline">Request a quote</Link></li>
            <li><Link to="/pricing" className="text-orange-500 underline">Compare pricing plans</Link></li>
            <li><Link to="/faq" className="text-orange-500 underline">Read common client questions</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">❓ FAQ – Mobile App Design for Restaurants</h2>

          <div>
            <h3 className="font-semibold">How long does it take to design a restaurant app?</h3>
            <p>Our standard design timeline is 2–3 weeks for most restaurant apps. Full builds (with backend) typically take 4–6 weeks.</p>
          </div>

          <div>
            <h3 className="font-semibold">Do you support food delivery apps?</h3>
            <p>Yes — we can design apps for delivery-only brands or restaurants with internal delivery staff. Custom order logic, driver tracking, and distance-based pricing can be included.</p>
          </div>

          <div>
            <h3 className="font-semibold">Can I update my menu after launch?</h3>
            <p>Absolutely. If you choose our backend option, you’ll get a lightweight admin dashboard to manage content like menus, prices, or specials in real-time.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Ready to launch your restaurant’s mobile app?
          </p>
          <a
            href="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-xl transition"
          >
            Get Your App Quote with Nivk.com
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignRestaurants;

