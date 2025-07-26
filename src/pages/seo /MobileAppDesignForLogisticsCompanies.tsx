import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForLogisticsCompanies = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Logistics Companies</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Real-Time Tracking</h2>
        <p>Enable customers and partners to track shipments, deliveries, and vehicles in real time for transparency and trust.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Optimize Operations</h2>
        <p>Automate route planning, inventory management, and driver assignments to boost efficiency and reduce costs.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Seamless Communication</h2>
        <p>Facilitate instant messaging, notifications, and document sharing between teams and clients.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Analytics & Reporting</h2>
        <p>Provide dashboards and reports to monitor KPIs, delivery times, and customer satisfaction.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Logistics App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForLogisticsCompanies; 