// src/pages/MobileAppDesignTutoringServices.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignTutoringServices = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Tutoring Services
          </h1>
          <p className="text-lg">
            Empower your students with a learning experience that’s structured, mobile-friendly, and distinctly yours. Nivk.com designs modern tutoring apps that boost learning outcomes and retention.
          </p>
        </section>

        {/* Pain Point */}
        <section className="space-y-6">
          <p>
            Tutoring today is hybrid, fast-paced, and highly competitive. But most tutoring businesses rely on clunky platforms, scattered scheduling tools, and generic messaging systems.
          </p>
          <p className="font-medium">
            Your own branded mobile app gives your students a single, professional space for lessons, homework, communication, and progress tracking.
          </p>
        </section>

        {/* App Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📚 App Features Built for Learning</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Lesson scheduling with calendar sync</li>
            <li>Homework uploads + submission tracking</li>
            <li>Progress reports + feedback system</li>
            <li>Push reminders for sessions and assignments</li>
            <li>In-app chat with tutors and admins</li>
            <li>Quizzes and interactive flashcards</li>
          </ul>
          <p>
            Your students deserve a clean, motivating environment — not another confusing app. Let’s make that happen.
          </p>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Our Tutoring App Design Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We learn about your teaching model, lesson frequency, and user types.</li>
            <li><strong>UX Planning:</strong> We map the flows for students, tutors, and admins.</li>
            <li><strong>UI Design:</strong> Clean, student-friendly visuals that reflect your brand.</li>
            <li><strong>Handoff or Full Build:</strong> Get Figma exports or opt for full-stack dev.</li>
          </ol>
        </section>

        {/* Audience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎯 Perfect For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Private tutors with growing student bases</li>
            <li>Online academies</li>
            <li>Test prep services (SAT, GMAT, IELTS)</li>
            <li>Language teachers</li>
            <li>After-school programs and enrichment centers</li>
          </ul>
        </section>

        {/* 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> A well-designed tutoring app simplifies everything — and shows parents you're serious about quality education.</p>
          <p>✅ <strong>Trust the Service:</strong> We’ve helped education brands create scalable systems students love using.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is the design agency trusted by fast-growing startups and global teams alike.</p>
        </section>

        {/* Backend Dev */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💻 Want Backend Too?</h2>
          <p>
            We offer full-stack app development:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Student dashboards</li>
            <li>Automated reminders</li>
            <li>Progress analytics</li>
            <li>Admin panels</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Let’s talk development →</Link>
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Our tutoring app helped us scale to 500+ students in 4 months. Parents love the transparency. Kids love the experience.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, ScholarLaunch</span>
          </blockquote>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile design niches</Link></p>
          <p>💡 <Link to="/blog/top-7-student-app-features" className="text-orange-600 underline">Blog: 7 Features Every Student App Needs</Link></p>
          <p>📞 <Link to="/talk" className="text-orange-600 underline">Book your quote consultation</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Make learning smooth, smart, and scalable with your own mobile app.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now — 2 Spots Left This Month
          </Link>
        </section>

        {/* VP0 */}
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

export default MobileAppDesignTutoringServices;
