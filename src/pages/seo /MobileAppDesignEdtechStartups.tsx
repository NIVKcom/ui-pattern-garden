// src/pages/MobileAppDesignEdtechStartups.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignEdtechStartups = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for EdTech Startups
          </h1>
          <p className="text-lg">
            Nivk.com designs intuitive, student-friendly mobile apps for EdTech startups — from gamified learning platforms to LMS dashboards and course delivery tools.
          </p>
        </section>

        {/* Why EdTech UX Is Unique */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎓 Why UX Matters More in EdTech</h2>
          <p>
            Education apps serve a wide range of users — kids, adults, institutions. That means accessibility, clarity, and motivation must be built into every interaction. A confusing UI can result in poor engagement, abandoned courses, and frustrated teachers.
          </p>
          <p>
            We create EdTech mobile apps that feel as smart as the content they deliver — with adaptive layouts, bite-sized lesson flows, and gamified UX that improves retention and results.
          </p>
        </section>

        {/* EdTech App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📚 Features We Commonly Design</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Course dashboards with progress tracking</li>
            <li>Gamified quizzes and interactive modules</li>
            <li>Push notifications for lessons, streaks, and rewards</li>
            <li>Offline mode for downloads and lesson caching</li>
            <li>Live class interfaces (Zoom/WebRTC embedded)</li>
            <li>Voice-over/text-to-speech accessibility flows</li>
          </ul>
          <p>
            Whether you're launching a solo learning app or a full B2B education platform, we adapt our UX process to your market, goals, and teaching model.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Our EdTech App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Strategy:</strong> We map the learning journey — student, teacher, admin.</li>
            <li><strong>Wireframe:</strong> We prototype course structures and dashboard layouts.</li>
            <li><strong>UI Design:</strong> We craft visual styles that feel modern, calming, and clear.</li>
            <li><strong>Handoff:</strong> We deliver clean, dev-ready designs or build it for you.</li>
          </ol>
        </section>

        {/* Ideal Clients */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📘 Who We Work With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>EdTech MVPs and bootstrapped startups</li>
            <li>Online academies expanding to mobile</li>
            <li>Interactive course creators & solopreneurs</li>
            <li>Language, finance, and career education apps</li>
            <li>VC-backed EdTech platforms scaling fast</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Students loved the simplicity”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We wanted to avoid complex LMS tools and just ship our lessons. Nivk gave us a mobile-first design that kept our students focused and active from lesson 1.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, LearnLoop</span>
          </blockquote>
        </section>

        {/* Backend Add-On */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Want Backend Too?</h2>
          <p>
            Nivk also builds full LMS backends and mobile-first EdTech tools. We can deliver:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supabase + Postgres course data pipelines</li>
            <li>Auth + progress tracking with gamification</li>
            <li>AI tutor integrations using GPT-4-turbo</li>
            <li>CMS systems for lesson uploads & video delivery</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Talk to us about full-stack builds</Link> or check our <Link to="/mobile-app-design" className="text-orange-600 underline">design-only services</Link>.
          </p>
        </section>

        {/* 3 10s Trust Loop */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> We understand what keeps learners engaged — and we design for it.</p>
          <p>✅ <strong>Trust the Team:</strong> Our UI specialists have designed 40+ learning interfaces across web and mobile.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is a trusted partner of VC-backed EdTechs and solo creators alike.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app design services</Link></p>
          <p>📖 <Link to="/blog/top-ui-tips-for-edtech" className="text-orange-600 underline">Top UI Tips for EdTech Startups</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get a free design quote</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Launch a mobile app your learners will actually finish.
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

export default MobileAppDesignEdtechStartups;
