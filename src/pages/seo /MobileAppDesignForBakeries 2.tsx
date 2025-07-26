import Header from "../components/Header";
import Footer from "../components/Footer";

const MobileAppDesignForBakeries = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Bakeries</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Delight Your Customers</h2>
        <p>Offer online ordering, loyalty rewards, and daily specials to keep your bakery top-of-mind and drive repeat business.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Showcase Your Creations</h2>
        <p>Display beautiful galleries of your baked goods, highlight seasonal treats, and let customers pre-order for special occasions.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Streamline Operations</h2>
        <p>Integrate with your POS, manage inventory, and simplify pickup or delivery scheduling for a seamless experience.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Grow Your Brand</h2>
        <p>Use push notifications, social sharing, and customer feedback to build loyalty and expand your bakery’s reach.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Bakery App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForBakeries; 