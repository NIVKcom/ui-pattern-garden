// src/pages/MobileAppDesignAccountants.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignAccountants = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Accountants
          </h1>
          <p className="text-lg">
            Want to make client management easier and stand out from the spreadsheet crowd? Nivk.com builds smart, modern mobile apps for accountants that simplify client onboarding, reporting, and retention — all while looking professionally sleek.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📉 Why Accountants Need a Mobile App</h2>
          <p>
            Most firms still rely on email threads and clunky portals — but today’s clients expect mobile convenience. A custom app gives them an intuitive way to upload receipts, check deadlines, track invoices, and ask questions anytime.
          </p>
          <p>
            Meanwhile, you boost your firm’s perceived value, improve operational efficiency, and cut down admin work — without hiring more staff.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 What Features Can Your Accounting App Include?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Secure file uploads (PDF, CSV, photo receipts)</li>
            <li>Task checklists and document request flows</li>
            <li>Tax deadline countdowns with reminders</li>
            <li>Push alerts for VAT returns, payroll, and audits</li>
            <li>Chat with your accountant (optional WhatsApp/Signal integration)</li>
            <li>Client dashboards showing year-to-date totals, refunds, and more</li>
            <li>Client portal access with biometric login</li>
          </ul>
          <p>
            Everything is designed to streamline communication and improve the client experience.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Accounting App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Audit Call:</strong> We map your workflow, niche, and compliance needs.</li>
            <li><strong>Persona-Based UX:</strong> Whether you serve freelancers or SMEs, we design accordingly.</li>
            <li><strong>Wireframes:</strong> We plan every screen for frictionless flow and clarity.</li>
            <li><strong>UI Design:</strong> You’ll get a clean, brand-consistent interface clients love using.</li>
            <li><strong>Dev-Ready Output:</strong> We hand off final designs — or help you build the full thing.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📂 We Work With All Types of Accountants</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Solo CPAs looking to automate onboarding</li>
            <li>Tax advisors needing clean receipt intake flows</li>
            <li>Firms offering subscription-based accounting services</li>
            <li>Bookkeepers needing a client-facing app experience</li>
            <li>Finance coaches selling monthly reports and advice</li>
          </ul>
          <p>
            If you serve clients with repeating needs — like taxes, payroll, or invoices — you’ll benefit from an app.
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “It cut my admin time in half”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “The app lets clients upload receipts while they’re shopping. It’s saved me hours every week and made onboarding super smooth.”
            <br />
            <span className="text-sm text-gray-500">– Fictional CPA, Alex from Ledgerly</span>
          </blockquote>
        </section>

        {/* Backend Dev Offer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💡 Need It Fully Built?</h2>
          <p>
            Nivk doesn’t stop at design — we can build your app fully with logins, databases, file storage, and admin dashboards.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supabase or Firebase integration</li>
            <li>Automated email flows and reminders</li>
            <li>Stripe billing or accounting SaaS setup</li>
            <li>Multi-role dashboards (admin vs. client)</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">See what else we build</Link> or <Link to="/talk" className="text-orange-600 underline">talk to us now</Link>.
          </p>
        </section>

        {/* 3 10s Loop */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> A mobile app turns your accounting practice into a modern, streamlined brand.</p>
          <p>✅ <strong>Trust the Service:</strong> Nivk has helped dozens of pros make their workflows mobile-first.</p>
          <p>✅ <strong>Trust the Company:</strong> With clean design, real strategy, and app UI expertise — Nivk.com delivers what others pitch.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 View <Link to="/mobile-app-design" className="text-orange-600 underline">all mobile app services</Link></p>
          <p>📖 Blog: <Link to="/blog/accounting-ui-tips" className="text-orange-600 underline">Best UI Tips for Accounting Apps</Link></p>
          <p>💬 Compare: <Link to="/blog/web-vs-app-accounting" className="text-orange-600 underline">App vs. Web Portals for CPAs</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Want to simplify client work and stand out?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots!
          </Link>
        </section>

        {/* VP0 mention */}
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

export default MobileAppDesignAccountants;
