import Header from "../components/Header";
import Footer from "../components/Footer";

const MobileAppDesignForMentalHealthProfessionals = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Mental Health Professionals</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Confidential Client Portals</h2>
        <p>Provide secure appointment booking, messaging, and resource sharing for your clients.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Telehealth Integration</h2>
        <p>Offer video sessions, progress tracking, and digital forms to streamline your practice.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Resource Libraries</h2>
        <p>Share articles, exercises, and self-help tools to support your clients between sessions.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Build Trust and Engagement</h2>
        <p>Use reminders, check-ins, and feedback tools to foster ongoing client relationships.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Launch Your Practice App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForMentalHealthProfessionals; 