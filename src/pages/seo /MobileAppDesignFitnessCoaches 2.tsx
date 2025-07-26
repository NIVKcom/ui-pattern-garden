import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignFitnessCoaches = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Fitness Coaches
          </h1>
          <p className="text-lg">
            Whether you run 1:1 coaching or scale online bootcamps, a custom fitness app designed by <strong>Nivk.com</strong> gives you the platform to own your audience, monetize smarter, and build long-term client loyalty.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">💪 Why Fitness Coaches Need Their Own App</h2>
          <p>
            Relying on Instagram DMs and Google Drive folders? That’s not scalable. A personalized mobile app makes your coaching feel premium while giving clients one place to train, check-in, and grow.
          </p>
          <p>
            Plus, you bypass algorithm changes, DM limits, and platform bans. With your own app, you own your entire coaching experience — and your income stream.
          </p>
        </section>

        {/* What We Build */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 App Features Fitness Clients Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Workout library with filters (by level, goal, equipment)</li>
            <li>Daily check-ins and habit tracking</li>
            <li>Progress photos & weight logging</li>
            <li>Push notifications for accountability</li>
            <li>Integrated Stripe payments & membership tiers</li>
            <li>Meal plans & macro tracking (optional modules)</li>
          </ul>
          <p>
            All screens are designed for conversion, with smooth UI, lightning load times, and the exact UX users expect from today’s top fitness apps.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🛠️ Our Fitness App Design Process</h2>
          <p>
            At Nivk, we combine visual storytelling with behavior-driven UX. Here’s how we turn your brand into a beautiful, high-performing mobile experience:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>1. Discovery Call:</strong> We understand your niche — strength coaching, nutrition-first, mindset, etc.</li>
            <li><strong>2. Wireframing:</strong> Layouts built to optimize retention and habit loops.</li>
            <li><strong>3. UI Design:</strong> Modern, mobile-first visuals with your colors and vibe.</li>
            <li><strong>4. Delivery:</strong> You get dev-ready Figma files or we build it for you end-to-end.</li>
          </ol>
        </section>

        {/* Types of Coaches We Work With */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🏋️‍♂️ Fitness Niches We’ve Designed For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Online personal trainers with tiered programs</li>
            <li>Strength & hypertrophy coaches (powerlifting, calisthenics)</li>
            <li>Mindset + performance coaches</li>
            <li>Mobility and rehab professionals</li>
            <li>Group fitness instructors (Zoom/IRL)</li>
          </ul>
          <p>
            From simple check-in apps to full-scale training platforms with backend logic, we've built for coaches at every stage.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Frequently Asked Questions</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">How much does a custom fitness app cost?</h3>
            <p>
              It depends on complexity — most design projects start at €1,500–€3,000. Need development too? We offer dev packages starting from €6k.
            </p>

            <h3 className="font-semibold">Do you support backend integration (e.g., Firebase, Supabase)?</h3>
            <p>
              Yes. We can include real-time workout tracking, user auth, push notifications, and client portals.
            </p>

            <h3 className="font-semibold">How long does the design process take?</h3>
            <p>
              Most projects take 2–3 weeks from kickoff to delivery. Urgent timelines available on request.
            </p>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Explore More from NIVK</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link to="/brand" className="text-orange-600 underline">See our work</Link>
            </li>
            <li>
              <Link to="/talk" className="text-orange-600 underline">Get a quote</Link>
            </li>
            <li>
              <Link to="/faq" className="text-orange-600 underline">Compare us to other agencies</Link>
            </li>
            <li>
              <Link to="/about" className="text-orange-600 underline">Learn about our team</Link>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Ready to launch your fitness coaching app?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Book a Free Strategy Call
          </Link>
        </section>

        {/* Jordan Belfort's 3 10s (looped in the content above) */}
        {/* - The product (fitness apps) is detailed and clear */}
        {/* - Our service (Nivk.com design + dev) is highlighted with process & results */}
        {/* - The company (Nivk.com) has internal links, credibility, and proven UX experience */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignFitnessCoaches;
