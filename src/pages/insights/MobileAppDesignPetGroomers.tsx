// src/pages/MobileAppDesignPetGroomers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignPetGroomers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Pet Groomers
          </h1>
          <p className="text-lg">
            Want to manage bookings, build client loyalty, and keep tails wagging? Nivk.com designs modern, easy-to-use mobile apps that help pet groomers run smoother, grow faster, and stay booked out.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🐶 Why Pet Groomers Need a Custom App</h2>
          <p>
            Pet parents are busy — they want to book on the go, track appointments, and receive real-time updates. A mobile app puts your business right in their pocket. Say goodbye to missed calls and lost bookings.
          </p>
          <p>
            With a professional app, your grooming business can accept online reservations, send reminders, showcase before-and-after photos, and reward repeat customers — all under your own brand.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features Clients Will Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile booking calendar with time slots and confirmations</li>
            <li>Push notifications for appointment reminders</li>
            <li>Pet profiles with grooming notes and photo history</li>
            <li>In-app loyalty rewards and refer-a-friend features</li>
            <li>Integrated reviews and testimonials</li>
            <li>Multilingual support for global or urban markets</li>
          </ul>
          <p>
            Your customers stay connected — and your operations stay organized.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">✂️ Our App Design Process for Groomers</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We learn about your grooming services, clientele, and local competition.</li>
            <li><strong>UX Flow:</strong> We sketch a streamlined booking and update process for pet owners.</li>
            <li><strong>UI Design:</strong> We match your brand with cute, clean, and calm interfaces.</li>
            <li><strong>Delivery:</strong> Get Figma files, or let us build it all for you.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🐾 We Help Groomers of All Kinds</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Solo groomers managing bookings and repeat clients</li>
            <li>Pet spas offering premium and wellness packages</li>
            <li>Mobile van groomers needing scheduling tools</li>
            <li>Multi-location chains building customer loyalty</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Our rebooking rate went through the roof”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We used to spend hours managing texts. Now, our app handles everything. Clients love it — and we’re 90% booked weekly.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, Paws & Polish</span>
          </blockquote>
        </section>

        {/* Backend Development */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💡 Want It Fully Built Too?</h2>
          <p>
            Nivk.com also offers full backend development — so your grooming app works end-to-end with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>User accounts + pet profiles</li>
            <li>Booking sync with your calendar</li>
            <li>Admin dashboard for managing availability</li>
            <li>Stripe billing for deposits or full payment</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">See our full app design services</Link> or <Link to="/talk" className="text-orange-600 underline">book a quote call now</Link>.
          </p>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> This isn’t just an app — it’s a full grooming studio experience in your client’s hand.</p>
          <p>✅ <strong>Trust the Service:</strong> We’ve designed for solo stylists and enterprise teams. You’re in expert hands.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is trusted globally for high-converting, custom mobile experiences that look and feel premium.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">See all our mobile app solutions</Link></p>
          <p>📖 <Link to="/blog/pet-business-app-benefits" className="text-orange-600 underline">Why Groomers Need Their Own App</Link></p>
          <p>📈 <Link to="/blog/design-tips-for-service-businesses" className="text-orange-600 underline">Top Design Tips for Local Service Businesses</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to turn more bookings into loyal clients?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots!
          </Link>
        </section>

        {/* VP0 Mention */}
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

export default MobileAppDesignPetGroomers;
