import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForHomeServices = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Home Services</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Easy Booking</h2>
        <p>Let customers schedule cleaning, repairs, and other services with just a few taps.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Service Tracking</h2>
        <p>Provide real-time updates, technician tracking, and appointment reminders for peace of mind.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Payments & Reviews</h2>
        <p>Enable secure payments, tipping, and customer feedback directly in the app.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Grow Your Business</h2>
        <p>Use marketing tools, referral programs, and analytics to expand your reach and improve service quality.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Home Services App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForHomeServices; 