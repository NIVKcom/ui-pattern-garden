// src/pages/MobileAppDesignConsultants.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignConsultants = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Consultants
          </h1>
          <p className="text-lg">
            Whether you're a solo strategist or a boutique agency, a mobile app makes your consulting business more scalable, personal, and professional. At Nivk.com, we design mobile-first experiences that give consultants the edge.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📈 Why Consultants Need a Mobile App</h2>
          <p>
            Your time is your product. A well-designed mobile app reduces admin, automates scheduling, streamlines onboarding, and helps you build consistent client relationships — even while you sleep.
          </p>
          <p>
            Instead of juggling emails and PDFs, your clients get one branded mobile hub: proposals, invoices, check-ins, resources, and messaging — all wrapped in a UX that reflects your professionalism.
          </p>
        </section>

        {/* What We Design for Consultants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features We Build for Consultants</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Client onboarding flows and intake forms</li>
            <li>Session scheduling + Zoom/Meet integrations</li>
            <li>Chat or async check-in capabilities</li>
            <li>Document hubs for proposals, roadmaps, audits</li>
            <li>Progress trackers for ongoing engagements</li>
            <li>Push notifications for reminders and insights</li>
          </ul>
          <p>
            We help you create an app that feels like a 24/7 assistant — letting you focus on what you do best: delivering results.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Consultant-Focused Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We identify your client journey and unique deliverables.</li>
            <li><strong>Flow Mapping:</strong> We wireframe client-facing and admin sections for clarity and speed.</li>
            <li><strong>UI Design:</strong> Your visual brand becomes a seamless mobile experience.</li>
            <li><strong>Dev-Ready Handoff:</strong> Or we build it fully for you — code and all.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">👔 We Work With:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Marketing, strategy, and growth consultants</li>
            <li>Freelance business coaches</li>
            <li>Brand and UX consultants</li>
            <li>Legal and operations advisors</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Our consulting flow is now fully automated”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Clients now book, pay, and onboard directly through the app. It’s sleek, simple, and saves hours every week.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, ElevateCo</span>
          </blockquote>
        </section>

        {/* Backend Development Offer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">⚙️ Want Backend Support Too?</h2>
          <p>
            We don’t just design — we also build backend systems to automate your consulting business:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Client databases and secure portals</li>
            <li>Stripe billing and invoice automation</li>
            <li>Notion-style resource libraries</li>
            <li>Progress tracking and contract management tools</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Book a call</Link> to see how we can build the entire tech stack — without the dev hassle.
          </p>
        </section>

        {/* Jordan Belfort 3 10s Persuasion Loop */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Your clients deserve a premium mobile experience.</p>
          <p>✅ <strong>Trust the Team:</strong> We’ve worked with consultants across 12+ industries — from pitch decks to launch.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is known for clean UX, tight execution, and real business results.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">See all mobile app design services</Link></p>
          <p>🧠 <Link to="/blog/how-to-design-a-client-handoff-app" className="text-orange-600 underline">Blog: How to Design a Client Handoff App</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your quote</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Let’s build the smartest tool in your consulting toolbox.
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

export default MobileAppDesignConsultants;
