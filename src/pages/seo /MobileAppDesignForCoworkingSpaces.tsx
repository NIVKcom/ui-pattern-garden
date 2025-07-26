import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForCoworkingSpaces = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Coworking Spaces</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Book Desks & Rooms</h2>
        <p>Allow members to reserve workspaces, meeting rooms, and event spaces with ease.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Community Engagement</h2>
        <p>Foster networking with member directories, chat, and event calendars.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Access Control</h2>
        <p>Integrate digital keys and check-in systems for secure, seamless entry.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Member Perks</h2>
        <p>Highlight exclusive offers, partner discounts, and loyalty rewards for your community.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Build Your Coworking App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForCoworkingSpaces; 