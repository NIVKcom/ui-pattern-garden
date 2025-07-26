// src/pages/MobileAppDesignFoodTrucks.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignFoodTrucks = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Food Trucks
          </h1>
          <p className="text-lg">
            Your food truck moves fast — your app should move faster. Nivk.com designs mobile apps that help you find, feed, and retain loyal fans with ease.
          </p>
        </section>

        {/* Story Hook */}
        <section className="space-y-6">
          <p>
            You’ve built a following the hard way: street by street, bite by bite. But on a rainy day or busy lunch hour, how easy is it for fans to order ahead or find your location?
          </p>
          <p className="font-medium">
            Your app is your second window — always open, always accessible.
          </p>
        </section>

        {/* Benefits */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🚚 Features Your Fans Will Love</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Live location tracking of your food truck</li>
            <li>Order-ahead system with pickup time slots</li>
            <li>Push alerts for daily locations and limited drops</li>
            <li>Loyalty stamps and point systems</li>
            <li>Visual menus with allergen and dietary filters</li>
            <li>Instagram integration for daily specials</li>
          </ul>
          <p>
            Think like Chick-fil-A, act like a startup. Your app gives you control over your customer journey — from first craving to final bite.
          </p>
        </section>

        {/* Our Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🍔 Our Food Truck App Design Process</h2>
          <p>
            We know the hustle — and we design around it.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery Call:</strong> We learn your menu, route, peak hours, and audience.</li>
            <li><strong>UX Mapping:</strong> We design around your real flow — not assumptions.</li>
            <li><strong>UI Design:</strong> Bright, appetizing, branded, and clear.</li>
            <li><strong>Optional Dev:</strong> Want it built? Our dev team handles it start to finish.</li>
          </ol>
        </section>

        {/* Who It's For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🌮 Who This Works For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Single-location food trucks looking to grow</li>
            <li>Multi-city food concepts needing consistent UX</li>
            <li>Festival vendors or market regulars</li>
            <li>Catering trucks with scheduling needs</li>
            <li>Vegan/health-focused trucks that want a clean interface</li>
          </ul>
        </section>

        {/* Trust Section — Jordan Belfort 3 10s */}
        <section className="space-y-4 text-sm text-gray-600">
          <p>✅ <strong>Believe in the Product:</strong> A custom app makes your food truck easier to find, order from, and fall in love with — again and again.</p>
          <p>✅ <strong>Trust the Team:</strong> We’ve designed apps for small businesses across industries. We understand lean teams, mobile-first UX, and fast decision-making.</p>
          <p>✅ <strong>Trust the Company:</strong> Nivk.com is a boutique agency focused on premium mobile UI/UX. We build with design clarity and conversion in mind.</p>
        </section>

        {/* Backend Dev Upsell */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🧠 Need Backend? We Build That Too</h2>
          <p>
            Want more than design? We offer full development for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Live location sync with Google Maps</li>
            <li>Stripe or Tap-to-Pay integrations</li>
            <li>Order queue management</li>
            <li>Admin dashboard for menu edits and hours</li>
          </ul>
          <p>
            <Link to="/talk" className="text-orange-600 underline">Book a backend discovery call →</Link>
          </p>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <blockquote className="italic border-l-4 border-orange-400 pl-4">
            “We launched our food truck app and got 200 downloads in the first weekend. Now customers order ahead during lunch and skip the line.”
            <br />
            <span className="text-sm text-gray-500">– Fictional Client, TurboTacos</span>
          </blockquote>
        </section>

        {/* Internal Links */}
        <section className="pt-10 border-t border-gray-200 space-y-3 text-sm">
          <p>🔗 <Link to="/mobile-app-design" className="text-orange-600 underline">Explore all mobile app services</Link></p>
          <p>📝 <Link to="/blog/how-to-launch-a-food-truck-app" className="text-orange-600 underline">Blog: How to Launch a Food Truck App</Link></p>
          <p>💬 <Link to="/talk" className="text-orange-600 underline">Get your quote now</Link></p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-lg font-medium">
            Want to skip the delivery app fees and own your customer relationship?
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
          >
            Get Your App Quote Now — We Only Take 3 Clients This Month
          </Link>
        </section>

        {/* VP0 Footer */}
        <section className="pt-10 text-center text-sm text-gray-500">
          <p>
            🔗 <a href="https://vp0.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">vp0.com</a> — Nivk.com is a proud enterprise partner of vp0.com — the #1 App UI library in the world.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignFoodTrucks;
