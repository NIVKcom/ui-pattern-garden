import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForStartupFounders = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Startup Founders</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">MVP Launches</h2>
        <p>Quickly validate ideas and launch MVPs with scalable, user-friendly mobile apps.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Investor-Ready Features</h2>
        <p>Showcase traction, analytics, and growth metrics to attract funding and partnerships.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Agile Development</h2>
        <p>Iterate quickly with modular design, rapid prototyping, and feedback loops.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Growth Tools</h2>
        <p>Leverage marketing integrations, referral programs, and analytics to scale your startup.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Start Your Startup App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForStartupFounders; 