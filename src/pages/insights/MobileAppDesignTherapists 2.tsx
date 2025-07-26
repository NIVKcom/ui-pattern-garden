// src/pages/MobileAppDesignTherapists.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignTherapists = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Therapists
          </h1>
          <p className="text-lg">
            Offer patients a private, reliable, and user-friendly mobile experience. At Nivk.com, we design custom therapist apps that support scheduling, journaling, secure messaging, and self-guided mental health tools — all within your brand.
          </p>
        </section>

        {/* Why Therapists Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Why Therapists Are Going Mobile</h2>
          <p>
            Mental health is personal — and a mobile app allows you to extend support beyond the 1-hour session. Whether you're a solo practitioner or run a group practice, your app can offer clients:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📅 Appointment booking + rescheduling</li>
            <li>🔐 Encrypted, HIPAA-ready messaging</li>
            <li>📔 Secure journaling tools and check-ins</li>
            <li>📈 Progress tracking and milestone reminders</li>
            <li>📹 Embedded exercises or video content</li>
            <li>💬 Pre-session prompts + post-session summaries</li>
          </ul>
          <p>
            This isn't about replacing therapy — it’s about deepening the therapeutic relationship, improving retention, and giving clients 24/7 access to their own growth.
          </p>
        </section>

        {/* Nivk Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎨 How We Design Therapist Apps That Feel Safe + Empowering</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Strategy:</strong> We learn your tone — whether it's warm, clinical, modern, or spiritual.</li>
            <li><strong>UX Planning:</strong> We structure flows around clarity and comfort, minimizing overwhelm.</li>
            <li><strong>Visual Design:</strong> We use neutral colors, soft animations, and your brand voice to build trust.</li>
            <li><strong>Content Support:</strong> Need prompts, scripts, or CBT-based content? We can help craft or embed it.</li>
            <li><strong>Handoff or Full Build:</strong> We can provide Figma files or implement a full Supabase-powered app with login, progress, and CMS.</li>
          </ol>
        </section>

        {/* Who This Is For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧑‍⚕️ We Work With:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🧍 Solo therapists building client loyalty</li>
            <li>🏥 Mental health clinics with multiple staff</li>
            <li>📱 Coaches and counselors offering digital tools</li>
            <li>🧘 Mindfulness-based therapists and wellness brands</li>
            <li>🎯 CBT, DBT, ACT and trauma-informed professionals</li>
          </ul>
          <p>
            Whatever your modality, we design with empathy — ensuring that your app feels like an extension of your practice, not a generic tool.
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 What Clients Say</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “My clients tell me the app helps them feel more supported between sessions. It’s like they’re still connected — even on hard days.”<br />
            <span className="text-sm text-gray-500">– Fictional Therapist, London</span>
          </blockquote>
          <p>
            When people trust your brand, they engage more. Our therapist clients often see increased retention and referrals after launching their apps.
          </p>
        </section>

        {/* Backend Add-On */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧩 Backend + Client Progress Integration</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🔐 Supabase-powered secure login</li>
            <li>📊 Progress tracking dashboards</li>
            <li>📥 Admin tools for managing resources, prompts, and appointments</li>
            <li>📬 Optional weekly check-ins via push or email</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">Explore our full-stack capabilities</Link>.
          </p>
        </section>

        {/* Jordan Belfort’s 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> We’ve designed therapist apps that clients use daily, improving session outcomes and loyalty.</p>
          <p>✅ <strong>Trust the Service:</strong> You’ll work 1-on-1 with our senior designers — no outsourcing, no misalignment.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk is a mobile design agency dedicated to clear, ethical, high-converting UX. We’re focused and proven.</p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Want a calm, clean app for your therapy clients?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get a Quote – Limited Design Slots
          </Link>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>
            🔗 Learn more: <Link to="/mobile-app-design" className="text-orange-600 underline">nivk.com/mobile-app-design</Link>
          </p>
          <p>
            📚 Blog: <Link to="/blog/top-therapist-app-design-patterns" className="text-orange-600 underline">Top Therapist App Design Patterns</Link>
          </p>
          <p>
            💬 Or <Link to="/talk" className="text-orange-600 underline">schedule a call</Link> now.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignTherapists;
