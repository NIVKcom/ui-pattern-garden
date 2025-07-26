// src/pages/MobileAppDesignPersonalTrainers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignPersonalTrainers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Personal Trainers
          </h1>
          <p className="text-lg">
            Want to scale your fitness business and offer 24/7 support to clients? Nivk.com designs sleek, user-focused fitness apps for personal trainers — giving you the power to deliver coaching, plans, and community from your pocket.
          </p>
        </section>

        {/* Why Trainers Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💪 Why Personal Trainers Need a Mobile App</h2>
          <p>
            Fitness clients expect mobile-first experiences: workout reminders, progress tracking, messaging, and instant access to coaching. Ditch clunky spreadsheets and endless DMs — and centralize your value in one clean, modern app.
          </p>
          <p>
            With a branded app, you become more than a trainer. You become a fitness brand with recurring revenue, global reach, and 24/7 accountability tools.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features Your Clients Will Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Workout libraries with videos and tips</li>
            <li>Weekly plans + drag-and-drop calendars</li>
            <li>Habit tracking (water, sleep, steps)</li>
            <li>Push notifications for daily reminders</li>
            <li>Private messaging or comments per workout</li>
            <li>Progress photos + metric tracking</li>
            <li>Stripe subscriptions, trials, upsells</li>
          </ul>
          <p>
            Your app becomes the ultimate accountability system — and your business scales with it.
          </p>
        </section>

        {/* Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Fitness App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Strategy Session:</strong> We understand your business model and client journey.</li>
            <li><strong>UX Mapping:</strong> We sketch the flow from signup → plan → workout → feedback loop.</li>
            <li><strong>UI Design:</strong> We apply your brand with modern, high-energy visuals and smooth transitions.</li>
            <li><strong>Handoff or Build:</strong> You get dev-ready files — or we code the backend too.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏋️‍♀️ We Help All Types of Fitness Experts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>1-on-1 personal trainers building recurring income</li>
            <li>Fitness influencers turning fans into paying members</li>
            <li>Online coaching businesses scaling to 100s of clients</li>
            <li>Hybrid gyms creating community apps</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “My client base tripled in 2 months”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “I was coaching 10 people over Instagram DMs. Now I coach 150+ through my app — with better results and way less burnout.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Trainer, Mia Fit Pro</span>
          </blockquote>
        </section>

        {/* Backend Dev */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💡 Want It Fully Built Too?</h2>
          <p>
            Nivk isn’t just design — we offer optional backend dev too. Your app can include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>User auth, progress tracking, and media uploads</li>
            <li>Workout plan generation with AI or templates</li>
            <li>Stripe billing + gated content tiers</li>
            <li>In-app messages, reports, and admin dashboard</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">View all design services</Link> or <Link to="/talk" className="text-orange-600 underline">get started now</Link>.
          </p>
        </section>

        {/* Jordan Belfort's 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> This is more than design — it's your new digital coaching platform.</p>
          <p>✅ <strong>Trust the Service:</strong> We've worked with solo trainers and scaled influencers. The results are measurable.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is known for beautiful mobile design, fast turnaround, and modern tech that performs.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">See our full app services</Link></p>
          <p>📖 <Link to="/blog/top-fitness-app-ui-patterns" className="text-orange-600 underline">Top 7 Fitness App UI Patterns</Link></p>
          <p>📈 <Link to="/blog/online-trainer-vs-app" className="text-orange-600 underline">Why an App Beats Google Sheets for Trainers</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Want to grow your fitness biz and coach smarter?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots!
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

export default MobileAppDesignPersonalTrainers;
