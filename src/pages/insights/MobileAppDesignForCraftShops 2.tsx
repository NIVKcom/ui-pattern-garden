import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignForCraftShops: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Craft Shops
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your craft shop with custom mobile app design. Streamline inventory management, enhance customer engagement, and boost sales with our expert mobile app design services.
          </p>
          <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
            <p className="text-pink-800">
              <strong>Pro Tip:</strong> Craft shops with mobile apps see 40% increase in customer engagement and 30% boost in repeat purchases compared to traditional retail methods.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Craft Shops Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined inventory and product management</li>
                <li>• Enhanced customer engagement and loyalty programs</li>
                <li>• Online ordering and pickup services</li>
                <li>• Craft class and workshop booking</li>
                <li>• Social media integration and community building</li>
                <li>• Sales analytics and performance tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 40% increase in customer engagement</li>
                <li>• 30% boost in repeat purchases</li>
                <li>• 35% improvement in inventory turnover</li>
                <li>• 45% increase in workshop bookings</li>
                <li>• 25% reduction in administrative tasks</li>
                <li>• 50% faster checkout process</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Craft Shop Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Product Catalog and Inventory Management</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive product catalog system is essential for craft shops. This feature should streamline inventory management, product showcasing, and stock tracking to ensure optimal product availability.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Catalog Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Product categorization and search</li>
                  <li>• Real-time inventory tracking</li>
                  <li>• Product images and detailed descriptions</li>
                  <li>• Price management and promotions</li>
                  <li>• Low stock alerts and reorder notifications</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Customer Engagement and Loyalty Program</h3>
              <p className="text-gray-600 mb-4">
                Build strong customer relationships with integrated loyalty programs, personalized recommendations, and engagement features that encourage repeat visits and purchases.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Engagement Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Customer loyalty points and rewards</li>
                  <li>• Personalized product recommendations</li>
                  <li>• Birthday and special occasion reminders</li>
                  <li>• Customer feedback and review system</li>
                  <li>• Social sharing and community features</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Workshop and Class Booking System</h3>
              <p className="text-gray-600 mb-4">
                Streamline workshop and craft class management with an integrated booking system that handles scheduling, payments, and customer communication efficiently.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Booking Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Class schedule and availability calendar</li>
                  <li>• Online registration and payment processing</li>
                  <li>• Class capacity management</li>
                  <li>• Automated reminders and confirmations</li>
                  <li>• Workshop material requirements tracking</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. E-commerce and Order Management</h3>
              <p className="text-gray-600 mb-4">
                Expand your reach with integrated e-commerce features that allow customers to shop online while maintaining the personal touch of your craft shop.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">E-commerce Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Online shopping cart and checkout</li>
                  <li>• Multiple payment options</li>
                  <li>• Order tracking and status updates</li>
                  <li>• Curbside pickup and delivery options</li>
                  <li>• Return and exchange management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Craft Shop App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for creative and craft-focused users</li>
                <li>• Implement visual product browsing</li>
                <li>• Provide inspiration and project ideas</li>
                <li>• Ensure easy workshop discovery and booking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with POS and inventory systems</li>
                <li>• Connect with social media platforms</li>
                <li>• Implement customer relationship management</li>
                <li>• Plan for seasonal inventory and promotions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Creative Corner Craft Shop</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our craft shop business. We achieved 40% increase in customer engagement, 30% boost in repeat purchases, and saw a 45% increase in workshop bookings. The app's loyalty program and online ordering features significantly enhanced our customer experience."
            </p>
            <p className="text-gray-600">
              <strong>- Emma Thompson, Owner, Creative Corner Craft Shop</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom craft shop app?</h3>
              <p className="text-gray-600">
                A comprehensive craft shop app typically takes 8-12 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with our existing POS and inventory systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular POS systems like Square, Shopify, and QuickBooks. We also provide APIs for custom integrations with proprietary systems and inventory management tools.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What payment methods can be supported in the app?</h3>
              <p className="text-gray-600">
                Our apps support multiple payment methods including credit cards, digital wallets (Apple Pay, Google Pay), PayPal, and gift cards. We can also integrate with your existing payment processors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom craft shop app cost?</h3>
              <p className="text-gray-600">
                Custom craft shop apps typically range from $18,000 to $45,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Craft Shop?</h2>
          <p className="text-xl mb-6">
            Elevate your craft business with cutting-edge mobile app design and boost customer engagement and sales.
          </p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForCraftShops; 