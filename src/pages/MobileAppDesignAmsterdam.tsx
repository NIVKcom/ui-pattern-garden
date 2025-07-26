// src/pages/MobileAppDesignAmsterdam.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileAppDesignAmsterdam = () => {
  return (
    <>
      <Header />
      <main className="px-4 md:px-10 py-16 max-w-3xl mx-auto text-neutral-800 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
          Mobile App Design in Amsterdam
        </h1>

        <p className="text-lg">
          Nivk helps Amsterdam startups and local businesses design elegant, intuitive mobile apps that users love. Whether you're building a fitness app, fintech tool, or community platform — our UI/UX team turns your idea into reality.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-orange-600">Why Choose Nivk?</h2>
          <p>
            With years of experience crafting apps across industries, Nivk delivers clean UI, frictionless UX, and optional backend development. We specialize in turning wireframes into polished, scalable interfaces that work across iOS and Android.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-600">Amsterdam-Focused Design</h2>
          <p>
            We understand the Amsterdam market — from early-stage startups in Noord to established firms in Zuid. Our process includes local market research, Dutch-language UI options, and timezone-aligned collaboration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-600">Need Backend Too?</h2>
          <p>
            Beyond app design, Nivk offers backend development using modern tools like Supabase, Firebase, and Node.js. We can turn your idea into a fully functional MVP.
          </p>
        </section>

        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-orange-600">Ready to Launch?</h2>
          <p className="mb-4">
            Get a free design consultation for your Amsterdam app idea — no strings attached.
          </p>
          <a
            href="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
          >
            Get Your Quote
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MobileAppDesignAmsterdam;
