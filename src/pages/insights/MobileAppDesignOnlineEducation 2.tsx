// src/pages/MobileAppDesignOnlineEducation.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignOnlineEducation = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Online Education Platforms
          </h1>
          <p className="text-lg">
            Engage learners anywhere, anytime. Nivk.com creates sleek, intuitive mobile apps for online education brands, coaches, and course creators — fully customized for your content, users, and growth strategy.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🎓 Why Education Needs World-Class App UX</h2>
          <p>
            Learners today expect more than a clunky course dashboard — they want an elegant, distraction-free mobile experience. Whether you're delivering cohort-based live classes, self-paced videos, or certifications, great mobile design increases:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📈 Course completion rates</li>
            <li>📥 App retention & usage</li>
            <li>📊 Learner progress visibility</li>
            <li>💬 Community and engagement</li>
            <li>💰 Sales and upsells for premium content</li>
          </ul>
          <p>
            At Nivk, we turn your course platform into a branded mobile learning environment people love to open every day.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 How We Design Education Apps That Actually Teach</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We understand your learning model — LMS? Drip-based? Cohort?</li>
            <li><strong>User Personas:</strong> We map students, instructors, admins — and their pain points.</li>
            <li><strong>Flow Planning:</strong> We structure screens for course access, module browsing, assessments, and notes.</li>
            <li><strong>UI Execution:</strong> We bring your brand to life with educational UX patterns like progress rings, badges, and video-first layouts.</li>
            <li><strong>Delivery:</strong> You get a dev-ready Figma file or optional full build with Supabase + Next.js.</li>
          </ol>
        </section>

        {/* Who It’s For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧑‍🏫 Perfect for Educators & Platforms Like:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📹 Course creators (Teachable, Kajabi, Gumroad)</li>
            <li>🏫 EdTech startups building LMS platforms</li>
            <li>💼 Corporate training providers</li>
            <li>📚 University departments launching mobile programs</li>
            <li>🧘 Niche creators in fitness, coding, mindset, or parenting</li>
          </ul>
          <p>
            We’ve designed learning experiences for everyone from startup founders to Ivy League professors.
          </p>
        </section>

        {/* Real Impact */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💬 “Our Completion Rate Jumped by 38%”</h2>
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “Before working with Nivk, our course was stuck on desktop. Since launching our mobile app, completion rates and feedback have skyrocketed.”<br />
            <span className="text-sm text-gray-500">– Fictional EdTech Founder, Berlin</span>
          </blockquote>
        </section>

        {/* Backend Option */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔐 Backend + LMS Integrations</h2>
          <p>
            Want your app to track lessons, progress, and even quizzes? Our Supabase-backed builds can integrate:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Authentication (Google, Apple, email)</li>
            <li>🎯 Completion tracking + streak counters</li>
            <li>💬 In-app feedback forms & discussion areas</li>
            <li>📤 Video lesson uploads (YouTube, Vimeo, or self-hosted)</li>
            <li>🛒 Stripe for premium module access</li>
          </ul>
          <p>
            <Link to="/mobile-app-design" className="text-orange-600 underline">Explore full app development services here</Link>.
          </p>
        </section>

        {/* 3 10s: Jordan Belfort Loop */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> Your mobile app becomes a daily educational habit — and a scalable asset.</p>
          <p>✅ <strong>Trust the Service:</strong> Nivk’s team works with coaches, teachers, and developers to deliver apps that truly educate.</p>
          <p>✅ <strong>Trust the Company:</strong> As a niche mobile design agency, we focus entirely on UI/UX and performance. You’ll feel the difference.</p>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 Related: <Link to="/mobile-app-design" className="text-orange-600 underline">nivk.com/mobile-app-design</Link></p>
          <p>📚 Blog: <Link to="/blog/top-edtech-app-ux-patterns" className="text-orange-600 underline">Top EdTech App UX Patterns</Link></p>
          <p>💬 Or <Link to="/talk" className="text-orange-600 underline">book a discovery call</Link> today.</p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Ready to scale your course or learning brand?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now – Limited Spots!
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignOnlineEducation;
