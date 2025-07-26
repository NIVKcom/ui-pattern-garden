import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForPetStores = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Pet Stores</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Showcase Products</h2>
        <p>Display your pet food, toys, and accessories with beautiful galleries and easy navigation.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Online Ordering</h2>
        <p>Enable customers to order for delivery or pickup, manage subscriptions, and track orders.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Pet Care Resources</h2>
        <p>Share tips, guides, and event info to help pet owners care for their animals.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Loyalty & Rewards</h2>
        <p>Offer points, discounts, and special deals to keep customers coming back.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Pet Store App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForPetStores; 