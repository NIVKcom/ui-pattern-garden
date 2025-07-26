import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MobileAppDesignForGyms = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Mobile App Design for Gyms</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Class Scheduling</h2>
        <p>Allow members to book classes, view timetables, and receive reminders for upcoming sessions.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Membership Management</h2>
        <p>Enable sign-ups, renewals, and payment processing for a seamless gym experience.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Workout Tracking</h2>
        <p>Help users log workouts, set goals, and monitor progress with interactive tools.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-400">Community & Challenges</h2>
        <p>Foster engagement with leaderboards, group challenges, and social features.</p>
      </section>
      <div className="mt-12 text-center">
        <a href="/talk" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Build Your Gym App</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default MobileAppDesignForGyms; 