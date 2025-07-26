import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignYogaInstructors = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Yoga Instructors
          </h1>
          <p className="text-lg">
            Elevate your yoga brand with a personalized mobile app that helps you connect deeper with your community. Nivk.com designs calming, intuitive apps for yoga teachers and studios that help you build a loyal student base and offer value anytime, anywhere.
          </p>
        </section>

        {/* Why Yoga Teachers Need Apps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧘‍♀️ Why Yoga Instructors Need Their Own App</h2>
          <p>
            Instagram algorithms don’t serve your long-term growth. With your own branded app, you can offer a peaceful, ad-free space where students focus on wellness — not distractions.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Stream your classes without YouTube ads or platform limits</li>
            <li>Offer on-demand flows, meditations, and wellness programs</li>
            <li>Send nurturing reminders and practice challenges via push</li>
            <li>Sell memberships, retreats, and class bundles directly</li>
            <li>Build lasting student loyalty through better UX</li>
          </ul>
        </section>

        {/* App Features for Yoga Studios */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 What We Design into Yoga Apps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Class library with search and filters by duration or intensity</li>
            <li>Student progress tracking and streaks</li>
            <li>Push notifications for class drops or live sessions</li>
            <li>Stripe-powered payments and in-app membership flows</li>
            <li>Community sections for connection and retention</li>
            <li>“Favorites” and offline downloads for traveling students</li>
          </ul>
          <p>
            Each app is designed to feel light, calming, and fluid — like a natural extension of your practice.
          </p>
        </section>

        {/* Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our App Design Process for Yoga Professionals</h2>
          <p>
            Our process blends technical excellence with peaceful UX principles — making sure your app flows as beautifully as your sequences.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery:</strong> We explore your brand, mission, and class types.</li>
            <li><strong>Structure:</strong> We create wireframes based on user flows (e.g., beginner to advanced programs).</li>
            <li><strong>Design:</strong> You get a visually aligned, mobile-first interface with all screens mapped.</li>
            <li><strong>Handoff or Build:</strong> Get Figma files or let our dev team build it into a working app with backend features.</li>
          </ol>
        </section>

        {/* Types of Instructors We Help */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🌿 Yoga Professionals We Work With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Solo yoga instructors with online followings</li>
            <li>Yoga studios with multiple teachers and schedules</li>
            <li>Retreat organizers selling limited-time programs</li>
            <li>Spiritual wellness guides blending meditation and coaching</li>
            <li>Multi-language international teachers</li>
          </ul>
          <p>
            Whether you’re scaling from 1-on-1s to global flows, we’ll design the right interface to support your next growth chapter.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Frequently Asked Questions</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">How do payments work inside the app?</h3>
            <p>
              We support Stripe, in-app purchases, and memberships. You keep control, set pricing, and own your students’ data.
            </p>

            <h3 className="font-semibold">Can I update content regularly?</h3>
            <p>
              Yes. You can upload classes via CMS or integrate with platforms like Vimeo, YouTube unlisted, or custom APIs.
            </p>

            <h3 className="font-semibold">Do I need backend development?</h3>
            <p>
              If you want features like logins, progress tracking, or subscriptions — yes. We handle backend as an optional service.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Helpful Links as You Decide</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/brand" className="text-orange-600 underline">See other design work from Nivk</Link></li>
            <li><Link to="/talk" className="text-orange-600 underline">Get a quote for your yoga app</Link></li>
            <li><Link to="/faq" className="text-orange-600 underline">Compare us to other agencies</Link></li>
            <li><Link to="/about" className="text-orange-600 underline">Meet the team behind your app</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Your practice is ready to go digital — with peace, clarity, and ownership.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Your App Quote with Nivk.com
          </Link>
        </section>

        {/* Jordan Belfort’s 3 10s Embedded */}
        {/* - Product: App benefits + features shown in depth */}
        {/* - You/Us (salesperson): Friendly tone + clear process builds trust */}
        {/* - Company: Internal links to real work, FAQs, and company story */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignYogaInstructors;
