// src/pages/MobileAppDesignHealthtechStartups.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignHealthtechStartups = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for HealthTech Startups
          </h1>
          <p className="text-lg">
            Whether you're building a digital health tracker, telemedicine platform, or AI diagnostics tool — Nivk.com designs mobile apps that users trust, love, and return to.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧬 Why HealthTech Apps Demand Expert Design</h2>
          <p>
            HealthTech isn’t like other verticals — users expect clinical precision, emotional safety, and complete clarity. A cluttered or confusing app can break trust or even cause harm.
          </p>
          <p>
            Whether your app is patient-facing, B2B, or for provider coordination, design determines how well it's adopted. That's why HealthTech startups trust Nivk.com with their UX — we make complexity feel intuitive.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features Your Health App Might Need</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Symptom checkers or diagnostic input flows</li>
            <li>Data visualization dashboards (charts, vitals, trends)</li>
            <li>HIPAA-compliant messaging or appointment booking</li>
            <li>Onboarding with insurance/provider integrations</li>
            <li>Smart reminders for medication, health tasks, or check-ins</li>
            <li>Accessibility-first UI for neurodiverse or aging users</li>
          </ul>
        </section>

        {/* Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Process for HealthTech UX</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We map out your regulatory, medical, and business model constraints.</li>
            <li><strong>User Research:</strong> We study your patients, doctors, or payers to shape flows.</li>
            <li><strong>Wireframes:</strong> We architect clarity into every screen.</li>
            <li><strong>High-Fidelity UI:</strong> Colors, spacing, typography — tuned for trust and usability.</li>
            <li><strong>Developer-Ready Handoff:</strong> You get perfectly spec’d Figma or optional code builds.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏥 Ideal for These Startup Types</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Telemedicine apps & video consult platforms</li>
            <li>Health tracking or fitness wearables</li>
            <li>Mental health & therapy apps</li>
            <li>AI diagnosis & lab interpretation tools</li>
            <li>Chronic condition monitoring tools</li>
            <li>Healthcare B2B workflow SaaS</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Our compliance + UX needs were met 100%”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We serve patients with epilepsy — so clarity and calm were critical. Nivk delivered designs that not only passed audits but got praise from actual neurologists.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, MedPilot AI</span>
          </blockquote>
        </section>

        {/* Backend Option */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💡 Need Backend or HIPAA-Compliant Builds?</h2>
          <p>
            In addition to design, we can build your app with full-stack support:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supabase or Firebase auth & data sync</li>
            <li>Custom API integrations (e.g., Apple Health, HL7)</li>
            <li>On-device encryption and access controls</li>
            <li>DevOps-ready builds for Vercel or AWS</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Book a free scoping call</Link> or learn more at <Link to="/mobile-app-design" className="text-orange-600 underline">/mobile-app-design</Link>.
          </p>
        </section>

        {/* 3 10s Trust Loop */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> HealthTech design is our specialty — not an afterthought.</p>
          <p>✅ <strong>Trust the Service:</strong> From onboarding to handoff, we’re collaborative, fast, and detail-obsessed.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com powers founders across healthcare, SaaS, and high-trust categories.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">See all mobile app design services</Link></p>
          <p>📖 <Link to="/blog/medical-app-design-rules" className="text-orange-600 underline">5 Must-Follow Design Rules for Medical Apps</Link></p>
          <p>📈 <Link to="/blog/startup-ux" className="text-orange-600 underline">Why UX Can Make or Break Your Startup</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to turn your health app idea into reality?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Capacity
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

export default MobileAppDesignHealthtechStartups;
