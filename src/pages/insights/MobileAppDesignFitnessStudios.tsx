// src/pages/MobileAppDesignFitnessStudios.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignFitnessStudios = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Fitness Studios
          </h1>
          <p className="text-lg">
            Turn your fitness studio into a digital powerhouse. Nivk.com builds beautiful, intuitive mobile apps that drive membership growth, simplify bookings, and keep your clients engaged around the clock.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💪 Why Fitness Studios Need a Custom Mobile App</h2>
          <p>
            In the fitness industry, convenience = retention. Your members want real-time access to class schedules, trainers, progress tracking, and community features — all in one place.
          </p>
          <p>
            A custom mobile app sets you apart from local gyms using outdated tools. It gives you full control over branding, member experience, and communication — without relying on clunky third-party platforms.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Core Features for Studio Success</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Class bookings + waitlist management</li>
            <li>Membership subscriptions with in-app payments</li>
            <li>Progress tracking and personal records</li>
            <li>Trainer bios and direct messaging</li>
            <li>Push notifications for last-minute changes</li>
            <li>Nutrition guides, blog posts, and video workouts</li>
          </ul>
          <p>
            Everything is optimized for mobile UX, ensuring that your members stick with your studio — not your competitors.
          </p>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our App Design Process for Studios</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We learn your studio’s audience, class flow, and branding.</li>
            <li><strong>Wireframes:</strong> We map out user journeys like booking, tracking, and renewal.</li>
            <li><strong>UI Design:</strong> We bring your brand to life with vibrant, action-focused design.</li>
            <li><strong>Final Delivery:</strong> Get a dev-ready design — or let us build it for you.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏋️‍♂️ Perfect for These Studio Types</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Yoga and pilates studios</li>
            <li>CrossFit and functional training gyms</li>
            <li>Spin and cycle classes</li>
            <li>Bootcamp, HIIT, and circuit gyms</li>
            <li>Dance and barre studios</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Our bookings doubled in the first month”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “The Nivk team understood exactly what our members wanted. The app is fast, clean, and it’s now our #1 retention tool.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, PulseFit Studio</span>
          </blockquote>
        </section>

        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔧 Want Full Backend Support?</h2>
          <p>
            Want us to handle the tech too? Our backend team can build your entire system — from class scheduling to payment processing — all synced with your app.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Stripe integration for memberships</li>
            <li>Live trainer dashboards and class caps</li>
            <li>Workout plans and exercise libraries</li>
            <li>Analytics for retention and revenue</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Let’s talk full-stack fitness app development</Link>.
          </p>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> This is the future of fitness — a personalized app that gives your members everything they need, instantly.</p>
          <p>✅ <strong>Trust the Team:</strong> We've worked with dozens of fitness brands — from boutique studios to franchises — and know what works.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is known for exceptional design quality, reliable communication, and deep mobile expertise.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app design services</Link></p>
          <p>💡 <Link to="/blog/fitness-studio-app-success" className="text-orange-600 underline">Read: 5 Ways Fitness Apps Improve Studio Retention</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get a studio app quote now</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Your studio deserves more than a generic booking system.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your Fitness Studio App Quote Today
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

export default MobileAppDesignFitnessStudios;
