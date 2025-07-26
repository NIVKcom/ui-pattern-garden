// src/pages/MobileAppDesignPhotographers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignPhotographers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Photographers
          </h1>
          <p className="text-lg">
            Stand out in a saturated market with a sleek, branded mobile app. At Nivk.com, we design mobile experiences tailored to the unique business of photography — making your portfolio, bookings, and client galleries effortless to use and unforgettable.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📸 Why Photographers Need a Custom App</h2>
          <p>
            Clients don’t just want good photos — they want seamless service. A mobile app gives you a polished, professional way to share work, streamline communication, and simplify client interactions.
          </p>
          <p>
            Whether you're a wedding photographer, portrait artist, or content creator, a mobile app helps convert leads, manage sessions, and deliver images in a premium digital environment.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features We Design for Photography Apps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile galleries with watermark protection</li>
            <li>Client login with appointment history</li>
            <li>Secure file download + image purchase flows</li>
            <li>Session booking with calendar integration</li>
            <li>In-app messaging + shoot prep reminders</li>
            <li>Brandable splash screen, colors, and logo</li>
          </ul>
          <p>
            Every pixel is tailored to elevate your visual brand and turn casual browsers into loyal clients.
          </p>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Design Process for Photographers</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Strategy Call:</strong> We learn your niche, workflow, and client lifecycle.</li>
            <li><strong>UX Planning:</strong> We map how prospects convert and how clients engage post-shoot.</li>
            <li><strong>UI Design:</strong> We build a clean, mobile-first interface that reflects your artistry.</li>
            <li><strong>Delivery:</strong> You receive dev-ready files — or we fully develop it for you.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎯 Who This Is Perfect For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wedding and engagement photographers</li>
            <li>Portrait and headshot professionals</li>
            <li>Product and brand content creators</li>
            <li>Event, travel, and lifestyle shooters</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “The app closed 4 bookings in our first week”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “I never thought a simple app could make this much difference. I look more legit, and clients love the gallery experience.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, Amber Studio</span>
          </blockquote>
        </section>

        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔧 Want Backend Tools Too?</h2>
          <p>
            Need your galleries, booking system, and client CRM fully integrated? We do more than design — we build secure, scalable backend systems so your entire photo biz lives in one place:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Stripe billing + PayPal options</li>
            <li>Automatic appointment confirmations</li>
            <li>Watermarked downloads + file hosting</li>
            <li>Client notes, shotlists, and ratings</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Talk to us about development</Link> and get a full-stack mobile experience.
          </p>
        </section>

        {/* 3 10s Persuasion */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> A custom app gives your photography brand the credibility and conversion boost it needs.</p>
          <p>✅ <strong>Trust the Team:</strong> We’ve worked with over 100 creative brands and freelancers — including designers, videographers, and photographers.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com delivers world-class UI with obsessive attention to flow, visual style, and retention.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">See all mobile app design services</Link></p>
          <p>📸 <Link to="/blog/portfolio-app-best-practices" className="text-orange-600 underline">Blog: Best Practices for a Mobile Photography Portfolio</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get a custom app quote</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Show your work. Book more shoots. Own your brand.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your Photography App Quote Now
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

export default MobileAppDesignPhotographers;
