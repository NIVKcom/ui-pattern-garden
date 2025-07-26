// src/pages/MobileAppDesignFreelancers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignFreelancers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Freelancers
          </h1>
          <p className="text-lg">
            Want to stand out, automate your business, and wow clients? Nivk.com builds custom mobile apps for freelancers that showcase your brand, streamline bookings, and increase your income. It’s not just a portfolio—it’s your digital HQ.
          </p>
        </section>

        {/* Why Freelancers Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎯 Why Freelancers Need a Mobile App</h2>
          <p>
            In today’s market, a slick personal website isn’t enough. Clients expect responsiveness, self-service, and clarity. A branded mobile app gives you:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📅 Instant bookings with synced availability</li>
            <li>💬 Chat integration for client questions and updates</li>
            <li>💳 Embedded payments, invoices, and receipts</li>
            <li>📁 A mobile portfolio that works offline</li>
            <li>📌 Push updates for offers, availability, and news</li>
          </ul>
          <p>
            Whether you’re a designer, coach, writer, or consultant — your app can run parts of your business while you focus on doing the work you love.
          </p>
        </section>

        {/* Nivk’s Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">⚙️ Nivk’s UI Process for Freelancers</h2>
          <p>
            Our process is built to empower solopreneurs with enterprise-quality design and clarity.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We learn your business, niche, and how you work.</li>
            <li><strong>User Flow Mapping:</strong> We design based on your client’s journey and expectations.</li>
            <li><strong>Wireframes:</strong> We plan the structure for clarity and conversion.</li>
            <li><strong>Visual Design:</strong> We add your brand, images, testimonials, and orange accents.</li>
            <li><strong>Delivery or Development:</strong> You get a Figma handoff—or we code it for you.</li>
          </ol>
        </section>

        {/* Use Cases */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">👩‍💻 Perfect for Solo Operators</h2>
          <p>
            Our freelancer app designs are perfect for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📸 Photographers who want instant booking and galleries</li>
            <li>🎨 Designers showcasing client work and packages</li>
            <li>🧘 Coaches selling sessions and group classes</li>
            <li>✍️ Copywriters or translators offering on-demand services</li>
            <li>🧑‍💻 Developers promoting products, updates, or retainers</li>
          </ul>
          <p>
            No bloated features—just what helps you sell more and work less.
          </p>
        </section>

        {/* Social Proof & Trust */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🌟 Trusted by Freelancers Who Level Up</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Before Nivk, I was stuck juggling Stripe, Calendly, and PDFs. Now my clients book, pay, and view my services all in one place. Game changer.”<br />
            <span className="text-sm text-gray-500">– Fictional Client, UX Consultant</span>
          </blockquote>
          <p>
            We combine freelancer flexibility with premium design standards to help you hit 10/10 on product, provider, and brand trust—Jordan Belfort would approve.
          </p>
        </section>

        {/* Backend Offer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Need Backend Too?</h2>
          <p>
            Want your app to handle payments, form submissions, or client logins? We also offer custom backend builds using Supabase or Firebase, built to scale with your freelancing career. <Link to="/mobile-app-design" className="text-orange-600 underline">Learn more about our app architecture</Link>.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to own your digital presence and impress clients?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Slots!
          </Link>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>
            🔗 Want to <Link to="/mobile-app-design" className="text-orange-600 underline">compare app design services</Link>?
          </p>
          <p>
            🧠 Read more on our blog: <Link to="/blog/top-5-mobile-app-design-tips-for-freelancers" className="text-orange-600 underline">Top 5 App Design Tips for Freelancers</Link>
          </p>
          <p>
            🎨 <Link to="/brand" className="text-orange-600 underline">See how our brand-first approach converts</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignFreelancers;
