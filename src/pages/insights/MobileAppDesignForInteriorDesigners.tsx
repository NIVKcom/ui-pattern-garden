import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForInteriorDesigners = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Interior Designers</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Portfolio Galleries</h2>
        <p>Showcase your best work, before-and-after photos, and design concepts to inspire clients.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Client Collaboration</h2>
        <p>Share mood boards, gather feedback, and manage project milestones in one place.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Booking & Consultations</h2>
        <p>Let clients schedule consultations, request quotes, and communicate securely.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Design Resources</h2>
        <p>Offer tips, trends, and product recommendations to keep clients engaged.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Your Designer App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForInteriorDesigners; 