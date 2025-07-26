import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForCateringBusinesses = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Catering Businesses</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Menu Showcases</h2>
        <p>Present your catering menus, packages, and specialties with mouth-watering visuals.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Event Booking</h2>
        <p>Let clients request quotes, book services, and manage event details easily.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Client Testimonials</h2>
        <p>Highlight reviews and success stories to build trust and attract new business.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Streamlined Operations</h2>
        <p>Manage orders, payments, and logistics from a single, easy-to-use platform.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Catering App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForCateringBusinesses; 