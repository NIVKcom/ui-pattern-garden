import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForMusicProducers = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Music Producers</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Showcase Your Portfolio</h2>
        <p>Let fans and clients listen to your tracks, view your discography, and explore your creative journey.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Collaborate Seamlessly</h2>
        <p>Enable real-time project sharing, feedback, and communication with artists and collaborators.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Monetize Your Work</h2>
        <p>Sell beats, offer exclusive content, and manage bookings directly through your app.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Engage Your Audience</h2>
        <p>Send push notifications for new releases, events, and behind-the-scenes updates.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Start Your Producer App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForMusicProducers; 