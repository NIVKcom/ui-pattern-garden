import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForFoodDeliveryServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Food Delivery Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your food delivery business with custom mobile app design. Streamline order management, enhance customer experience, and boost delivery efficiency with our expert mobile app design services.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
            <p className="text-amber-800">
              <strong>Pro Tip:</strong> Food delivery services with mobile apps see 65% higher customer satisfaction and 50% improvement in delivery efficiency compared to traditional delivery methods.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Food Delivery Services Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined order processing and management</li>
                <li>• Enhanced customer experience and satisfaction</li>
                <li>• Real-time delivery tracking and updates</li>
                <li>• Driver management and route optimization</li>
                <li>• Payment processing and order history</li>
                <li>• Restaurant and menu management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 65% higher customer satisfaction</li>
                <li>• 50% improvement in delivery efficiency</li>
                <li>• 55% increase in order volume</li>
                <li>• 45% reduction in delivery times</li>
                <li>• 40% increase in customer retention</li>
                <li>• 35% boost in driver productivity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Food Delivery Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Order Management and Processing</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive order management system is essential for food delivery services. This feature should streamline order processing, menu management, and customer communication to ensure smooth operations.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Order Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Real-time order processing and confirmation</li>
                  <li>• Menu customization and special requests</li>
                  <li>• Order status tracking and updates</li>
                  <li>• Payment processing and invoicing</li>
                  <li>• Order history and reordering</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Delivery Tracking and Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize delivery operations with real-time tracking, route optimization, and driver management features that ensure timely and efficient deliveries.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Delivery Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Real-time delivery tracking and ETA</li>
                  <li>• Route optimization and navigation</li>
                  <li>• Driver assignment and management</li>
                  <li>• Delivery zone and time slot management</li>
                  <li>• Delivery confirmation and feedback</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Customer Experience and Engagement</h3>
              <p className="text-gray-600 mb-4">
                Enhance customer satisfaction with features that provide seamless ordering, personalized recommendations, and excellent service throughout the delivery process.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Customer Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• User-friendly ordering interface</li>
                  <li>• Personalized menu recommendations</li>
                  <li>• Loyalty programs and rewards</li>
                  <li>• Customer support and feedback</li>
                  <li>• Push notifications and updates</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Restaurant and Menu Management</h3>
              <p className="text-gray-600 mb-4">
                Streamline restaurant operations with comprehensive menu management, inventory tracking, and order coordination features.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Restaurant Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Menu creation and management</li>
                  <li>• Inventory tracking and alerts</li>
                  <li>• Order queue and preparation tracking</li>
                  <li>• Restaurant analytics and reporting</li>
                  <li>• Staff management and scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Food Delivery App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for quick and easy ordering</li>
                <li>• Implement clear delivery tracking</li>
                <li>• Provide excellent customer support</li>
                <li>• Ensure fast and reliable performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Operational Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with existing POS and inventory systems</li>
                <li>• Connect with payment processors</li>
                <li>• Implement GPS tracking for deliveries</li>
                <li>• Plan for peak hours and scalability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: QuickBite Delivery</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our food delivery operations. We achieved 65% higher customer satisfaction, 50% improvement in delivery efficiency, and saw a 55% increase in order volume. The app's real-time tracking and seamless ordering features significantly enhanced our service quality."
            </p>
            <p className="text-gray-600">
              <strong>- David Kim, CEO, QuickBite Delivery</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom food delivery app?</h3>
              <p className="text-gray-600">
                A comprehensive food delivery app typically takes 12-16 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing restaurant management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular restaurant management systems like Square, Toast, and Lightspeed. We also provide APIs for custom integrations with proprietary POS and inventory systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What features help manage delivery drivers effectively?</h3>
              <p className="text-gray-600">
                Our apps include comprehensive driver management features such as real-time GPS tracking, route optimization, delivery assignment, performance monitoring, and communication tools to help manage your delivery team efficiently.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom food delivery app cost?</h3>
              <p className="text-gray-600">
                Custom food delivery apps typically range from $30,000 to $80,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Food Delivery Business?</h2>
          <p className="text-xl mb-6">
            Elevate your delivery services with cutting-edge mobile app design and boost customer satisfaction and operational efficiency.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForFoodDeliveryServices; 