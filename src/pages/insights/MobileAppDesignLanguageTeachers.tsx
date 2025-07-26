// src/pages/MobileAppDesignLanguageTeachers.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignLanguageTeachers = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Language Teachers
          </h1>
          <p className="text-lg">
            Transform your language lessons into a mobile experience your students never forget. Nivk.com creates stunning, student-focused mobile apps that empower teachers, streamline learning, and build thriving online classrooms.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📚 Why Language Teachers Need a Mobile App</h2>
          <p>
            Whether you're teaching Spanish, Mandarin, French, or English — a mobile app lets you scale beyond Zoom calls and PDFs. It becomes your classroom, your flashcard system, your quiz platform, and your community all in one place.
          </p>
          <p>
            An engaging mobile app allows students to study vocab on the go, watch bite-sized lessons, track progress, and even submit speaking practice — all from their phone.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features Your Language Students Will Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Daily streak tracker and study reminders</li>
            <li>Progress dashboards and vocabulary mastery scores</li>
            <li>Flashcard decks with spaced repetition</li>
            <li>Embedded video/audio lessons</li>
            <li>Voice recording practice with teacher feedback</li>
            <li>Student leaderboard or group chat for motivation</li>
            <li>One-tap booking for live tutoring sessions</li>
          </ul>
          <p>
            We design your app to encourage long-term learning habits and reduce student churn.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎨 Our Teacher-Centric UX/UI Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Curriculum Mapping:</strong> We align design around your teaching framework (CEFR, JLPT, DELE, etc.)</li>
            <li><strong>Student Personas:</strong> We design for busy professionals, high schoolers, or anyone in your niche.</li>
            <li><strong>Wireframes:</strong> We structure screens for maximum learning retention.</li>
            <li><strong>Visual Design:</strong> We bring your brand to life with engaging color, illustrations, and motion.</li>
            <li><strong>Delivery:</strong> You receive a fully dev-ready Figma or can opt for full-stack dev via Nivk.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧑‍🏫 Who Is This For?</h2>
          <p>
            We’ve designed apps for solo tutors, global education startups, and language schools offering:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📖 Daily vocab or grammar drills</li>
            <li>🌐 Group learning with chat-based feedback</li>
            <li>🎯 Exam prep (e.g., TOEFL, IELTS, HSK)</li>
            <li>💬 1-on-1 session booking</li>
            <li>🎁 Paid tiers or premium course bundles</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “This app made me look 10x more professional”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Before Nivk, I used Google Docs and Zoom. Now my students practice in the app, and I get reviews like ‘this feels better than Duolingo.’ Total game-changer.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Teacher, SpanishwithSofia.com</span>
          </blockquote>
        </section>

        {/* Backend Development */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">⚙️ Want a Fully Working App Too?</h2>
          <p>
            We don’t just design — we can also build your full backend with Supabase or integrate it with your Notion, Calendly, or Stripe setup.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Course unlocking with Stripe billing</li>
            <li>Session scheduling synced to Google Calendar</li>
            <li>Student login, streak data, and content access control</li>
            <li>Audio uploads from students for feedback</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">Explore our backend services</Link> and scale your classroom with confidence.
          </p>
        </section>

        {/* Jordan Belfort 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Language apps require focus, clarity, and retention — that’s exactly what we build for.</p>
          <p>✅ <strong>Trust the Service:</strong> From the first Figma screen to the final icon, we’re with you — translating your teaching into great UX.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk is known globally for clean, user-loved mobile UI. It’s the only thing we do — and we do it right.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 View <Link to="/mobile-app-design" className="text-orange-600 underline">our full mobile app design services</Link></p>
          <p>📖 Blog: <Link to="/blog/ux-for-language-apps" className="text-orange-600 underline">UX Tips for Language Learning Apps</Link></p>
          <p>💬 Compare: <Link to="/blog/top-edu-apps" className="text-orange-600 underline">Top 5 Language Apps We Love</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to teach more, manage less, and scale globally?
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

export default MobileAppDesignLanguageTeachers;
