import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileAppDesignBali = () => (
  <>
    <Header />
    <main className="max-w-3xl mx-auto px-4 md:px-10 py-16 space-y-10 leading-relaxed text-neutral-900">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">Mobile App Design in Bali</h1>
      <section>
        <p>
          Bali is a global hotspot for digital nomads, startups, and creative entrepreneurs. Whether you’re launching a wellness app, a travel platform, or a local marketplace, great mobile app design is essential to stand out in Bali’s vibrant tech scene. At Nivk, we blend international design standards with local insight to help Bali businesses and founders succeed.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">Tactical Advice for Bali App Projects</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Design for a global audience—Bali attracts users from all over the world.</li>
          <li>Prioritize mobile-first UX and fast load times for users on the go.</li>
          <li>Integrate local features like multi-language support, event calendars, or payment gateways.</li>
          <li>Focus on clean, minimalist UI that reflects Bali’s aesthetic and lifestyle.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">Design Strategy: UI/UX for Bali’s Market</h2>
        <p>
          Our mobile app design process in Bali starts with research—understanding your users, your competition, and your brand’s unique story. We create wireframes, prototypes, and polished UI that reflect Bali’s creative energy. Every detail is crafted for usability, accessibility, and delight.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">Backend & Tech: Building for Bali</h2>
        <p>
          Need more than just design? Nivk can help you build a robust backend using tools like Supabase or Firebase, ensuring your Bali app is scalable and secure. We support MVP launches, API integrations, and analytics to help you grow.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">What Works in Bali: Our Experience</h2>
        <p>
          We’ve helped Bali-based founders and startups launch MVPs, improve retention, and delight users with thoughtful UI/UX tweaks. Our collaborative process and attention to detail set us apart—no templates, just results tailored to Bali’s market.
        </p>
      </section>
      <section>
        <p>
          If this sounds like what you need, we’d love to design it with you. Explore more about our <a href="/" className="text-orange-500 underline">mobile app design services</a>, learn <a href="/about" className="text-orange-500 underline">about Nivk</a>, or check our <a href="/faqs" className="text-orange-500 underline">FAQs</a>.
        </p>
      </section>
      <section className="text-center mt-10">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition">Start Your Bali App Project</a>
      </section>
    </main>
    <Footer />
  </>
);

export default MobileAppDesignBali; 