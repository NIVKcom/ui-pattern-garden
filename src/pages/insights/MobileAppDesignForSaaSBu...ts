import Header from "../components/Header";
import Footer from "../components/Footer";

const MobileAppDesignForSaaSBusinesses = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for SaaS Businesses</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Onboard Users Effortlessly</h2>
        <p>Guide new users with intuitive flows, in-app tutorials, and helpful resources to boost activation.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Drive Engagement</h2>
        <p>Leverage notifications, personalized dashboards, and analytics to keep users coming back.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Integrate Seamlessly</h2>
        <p>Connect with third-party tools, APIs, and payment gateways for a frictionless experience.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Scale with Confidence</h2>
        <p>Utilize robust infrastructure, security best practices, and scalable design patterns for growth.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Start Your SaaS App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForSaaSBusinesses; 