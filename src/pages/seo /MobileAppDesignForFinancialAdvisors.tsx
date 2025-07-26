import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForFinancialAdvisors = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Financial Advisors</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Client Portals</h2>
        <p>Offer secure access to portfolios, reports, and personalized financial plans for your clients.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Appointment Scheduling</h2>
        <p>Enable clients to book meetings, receive reminders, and manage their financial check-ins.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Education & Insights</h2>
        <p>Share articles, calculators, and market updates to empower your clients’ financial decisions.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Compliance & Security</h2>
        <p>Utilize best-in-class security and compliance features to protect sensitive client data.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Advisor App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForFinancialAdvisors; 