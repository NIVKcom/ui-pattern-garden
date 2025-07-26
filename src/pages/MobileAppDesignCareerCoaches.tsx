// src/pages/MobileAppDesignCareerCoaches.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignCareerCoaches = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Career Coaches
          </h1>
          <p className="text-lg">
            Build deeper relationships with your clients. Nivk.com crafts modern, intuitive mobile apps that help career coaches deliver lasting transformation — at scale.
          </p>
        </section>

        {/* Emotional Hook */}
        <section className="space-y-6">
          <p>
            You change lives by helping people find purpose, clarity, and momentum. But your calendar is full, your inbox is flooded, and your client experience lives across too many tools.
          </p>
          <p className="font-medium">
            What if your clients had a single app — built just for them — to stay accountable, access content, book sessions, and track their growth?
          </p>
        </section>

        {/* Feature Set */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📲 What Your Coaching App Could Include</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Session booking with calendar sync</li>
            <li>Custom milestone tracking</li>
            <li>Daily mindset check-ins</li>
            <li>Homework modules and resources</li>
            <li>Push reminders and motivational nudges</li>
            <li>Private journal or reflection log</li>
            <li>Client progress dashboard (viewable by you and them)</li>
          </ul>
          <p>
            Whether you're helping Gen Z grads, mid-career pivoters, or executive leaders — your app becomes the digital bridge between calls.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧭 Our Design Process for Coaches</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Strategy Session:</strong> We map your services, flows, and coaching style.</li>
            <li><strong>UX Blueprint:</strong> We design around your program stages and client journey.</li>
            <li><strong>UI Design:</strong> Elegant, calm, motivational design aligned with your brand.</li>
            <li><strong>Hand-off or Dev:</strong> You receive a clickable prototype or a built app — your call.</li>
          </ol>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Your clients deserve an experience beyond Zoom and Google Docs. A mobile app builds accountability and loyalty — effortlessly.</p>
          <p>✅ <strong>Trust the Team:</strong> We’ve worked with solo coaches, coaching platforms, and wellness brands. Our job is to make your brilliance feel intuitive in digital form.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is a specialist design agency focused 100% on mobile excellence. We don’t dabble. We deliver.</p>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">👥 Who This Works Best For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>1:1 career coaches scaling to group programs</li>
            <li>Resume writers and personal brand consultants</li>
            <li>Leadership and confidence coaches</li>
            <li>Job hunt and interview specialists</li>
            <li>Creators building hybrid coaching courses</li>
          </ul>
        </section>

        {/* Backend Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Want Backend? We've Got You.</h2>
          <p>
            Nivk.com can also build the backend infrastructure for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Client logins and progress saving</li>
            <li>In-app purchases or session credits</li>
            <li>Email and push notification flows</li>
            <li>Stripe integration and billing history</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Talk to us about backend dev →</Link>
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “My app transformed how I run my coaching business. Clients actually complete their pre-work now — and I look 10x more professional.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, Elevate Coaching</span>
          </blockquote>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app services</Link></p>
          <p>📘 <Link to="/blog/mobile-apps-for-coaches" className="text-orange-600 underline">Blog: Do Coaches Need Their Own App?</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your quote now</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to turn your coaching service into an unforgettable experience?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now — Only 3 Spots Open This Month
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

export default MobileAppDesignCareerCoaches;
