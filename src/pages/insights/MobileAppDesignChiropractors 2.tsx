// src/pages/MobileAppDesignChiropractors.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignChiropractors = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Chiropractors
          </h1>
          <p className="text-lg">
            Want to streamline appointments, improve patient retention, and grow your chiropractic clinic? Nivk.com creates elegant mobile apps that give chiropractors a professional edge — with smooth booking, follow-up, and care tools.
          </p>
        </section>

        {/* Why Chiropractors Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💼 Why Chiropractors Need a Mobile App</h2>
          <p>
            Your clients expect more than spinal relief — they want clear follow-ups, digital booking, and ongoing wellness support. With a custom mobile app, your clinic becomes more than a service — it becomes a 24/7 resource and brand experience.
          </p>
          <p>
            A mobile app removes friction and elevates professionalism. It also keeps your patients accountable — and coming back.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 What Your App Can Include</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Booking calendar synced with your practice schedule</li>
            <li>Automated appointment reminders</li>
            <li>Exercise libraries + posture videos</li>
            <li>Patient progress tracking</li>
            <li>In-app wellness forms and consent uploads</li>
            <li>Push notifications for check-ins and education</li>
          </ul>
          <p>
            All beautifully branded to match your clinic’s tone and values.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Chiropractor App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Initial Discovery:</strong> We learn your care model, services, and target clients.</li>
            <li><strong>User Flow Mapping:</strong> We lay out the ideal patient journey from booking to care.</li>
            <li><strong>UX/UI Design:</strong> We create a calm, professional interface that builds trust.</li>
            <li><strong>Delivery or Dev:</strong> Receive Figma files or choose full backend development.</li>
          </ol>
        </section>

        {/* Who We Help */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧑‍⚕️ Built for Chiropractic Clinics of All Sizes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Independent chiropractors and solo clinics</li>
            <li>Multi-location practices seeking consistency</li>
            <li>Holistic wellness centers and sports rehab clinics</li>
            <li>Chiropractors with online posture and video libraries</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “My practice looks and feels elite now”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We were juggling calls, forms, and reminders. Now patients book and check in through our app — it saves hours every week and our brand looks amazing.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, Dr. Renee ChiroCare</span>
          </blockquote>
        </section>

        {/* Backend Dev */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💡 Want a Fully Coded App Too?</h2>
          <p>
            Beyond design, Nivk.com can develop your app from backend to frontend:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>HIPAA-compliant patient portals</li>
            <li>Secure upload for intake forms and history</li>
            <li>Video library hosting + subscriptions</li>
            <li>Stripe billing + reminder automation</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all design services</Link> or <Link to="/talk" className="text-orange-600 underline">book a call now</Link>.
          </p>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> You’re not just getting an app — you're upgrading your practice experience.</p>
          <p>✅ <strong>Trust the Service:</strong> We’ve helped clinics from Amsterdam to Austin build apps that streamline and scale.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is built on clarity, consistency, and expert UI/UX for healthcare professionals.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile design packages</Link></p>
          <p>📖 <Link to="/blog/appointment-app-ui-patterns" className="text-orange-600 underline">Top UI Patterns for Booking Apps</Link></p>
          <p>📈 <Link to="/blog/healthcare-mobile-design" className="text-orange-600 underline">Best Practices for Healthcare App Design</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to modernize your clinic with a branded app?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Availability!
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

export default MobileAppDesignChiropractors;
