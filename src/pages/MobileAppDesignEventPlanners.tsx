// src/pages/MobileAppDesignEventPlanners.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignEventPlanners = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Event Planners
          </h1>
          <p className="text-lg">
            Turn chaotic logistics into streamlined experiences. Nivk.com designs beautiful mobile apps that help event planners coordinate, engage, and wow their audience — effortlessly.
          </p>
        </section>

        {/* Why Event Planners Need an App */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📅 Why Event Apps Are Now Essential</h2>
          <p>
            Whether you're managing a wedding, conference, concert, or corporate summit — mobile is where your attendees are. An event app helps you centralize info, real-time updates, interactive schedules, and attendee engagement without relying on messy spreadsheets or PDFs.
          </p>
          <p>
            With Nivk-designed apps, you reduce no-shows, boost engagement, and deliver a premium experience your guests will remember.
          </p>
        </section>

        {/* Features for Event Planners */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎟️ What We Design for Event Apps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Interactive schedules and real-time updates</li>
            <li>Push notifications for venue changes or keynotes</li>
            <li>Digital check-in and QR code ticketing</li>
            <li>VIP access workflows and personalized agendas</li>
            <li>Speaker bios, sponsor showcases, and venue maps</li>
            <li>Live polls, Q&A modules, and attendee networking</li>
          </ul>
          <p>
            Every pixel is optimized for clarity, speed, and action — so guests never miss a moment.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔧 Our Mobile Design Process for Events</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Kickoff Call:</strong> We understand the scope — single-day, multi-track, or recurring event series.</li>
            <li><strong>Information Architecture:</strong> We wireframe all essential flows — from check-in to feedback collection.</li>
            <li><strong>UI/UX Design:</strong> Branded, modern, and highly usable — from opening screen to end-of-event review.</li>
            <li><strong>Handoff:</strong> We give you dev-ready assets — or handle the build if needed.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎤 Ideal Clients We Support</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wedding & party planners with premium clientele</li>
            <li>Conference organizers & speaking tour managers</li>
            <li>Festival and concert production teams</li>
            <li>Corporate event teams & internal HR departments</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Saved us hours of stress”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We were managing 600+ guests for a hybrid summit — Nivk's app saved us hours of confusion and made check-in a breeze.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, SummitCircle</span>
          </blockquote>
        </section>

        {/* Backend Option */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">⚙️ Want the Backend Too?</h2>
          <p>
            We offer full event stack support, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom CMS for speaker and session management</li>
            <li>Real-time attendee database + RSVP systems</li>
            <li>Live polling dashboards and integrations</li>
            <li>Multi-device support + live event metrics</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Get in touch</Link> if you want a complete backend + frontend event experience — no tech stress included.
          </p>
        </section>

        {/* Trust Loop — Jordan Belfort's 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Our designs streamline every phase of the event journey.</p>
          <p>✅ <strong>Trust the Team:</strong> We’ve worked on live events, backstage flows, and complex RSVP systems.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is the design partner of choice for forward-thinking organizers.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">View all mobile design services</Link></p>
          <p>🧠 <Link to="/blog/top-mobile-ui-trends-for-events" className="text-orange-600 underline">Top Mobile UI Trends for Events in 2025</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your quote</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Let’s turn your next event into a seamless mobile experience.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots
          </Link>
        </section>

        {/* VP0 Footer */}
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

export default MobileAppDesignEventPlanners;
