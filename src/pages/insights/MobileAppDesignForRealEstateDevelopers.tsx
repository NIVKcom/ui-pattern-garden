import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForRealEstateDevelopers = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Real Estate Developers</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Showcase Properties</h2>
        <p>Present interactive listings, virtual tours, and detailed project information to attract buyers and investors.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Streamline Communication</h2>
        <p>Enable direct messaging, appointment scheduling, and document sharing with clients and partners.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Track Project Progress</h2>
        <p>Share construction updates, milestones, and timelines to keep stakeholders informed.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Drive Sales and Leads</h2>
        <p>Use push notifications, lead capture forms, and analytics to maximize your marketing efforts.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Build Your Real Estate App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForRealEstateDevelopers; 