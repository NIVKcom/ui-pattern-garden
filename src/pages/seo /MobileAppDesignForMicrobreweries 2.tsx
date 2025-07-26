import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignForMicrobreweries: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Microbreweries
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your microbrewery business with custom mobile app design. Streamline beer ordering, enhance customer engagement, and boost craft beer sales with our expert mobile app design services.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
            <p className="text-amber-800">
              <strong>Pro Tip:</strong> Microbreweries with mobile apps see 65% higher customer engagement and 55% improvement in beer sales compared to traditional ordering methods.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Microbreweries Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined beer ordering and delivery management</li>
                <li>• Enhanced customer engagement and loyalty programs</li>
                <li>• Real-time inventory and beer availability tracking</li>
                <li>• Personalized beer recommendations and tasting notes</li>
                <li>• Brewery tours and event booking</li>
                <li>• Craft beer education and community building</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 65% higher customer engagement</li>
                <li>• 55% improvement in beer sales</li>
                <li>• 60% increase in customer retention</li>
                <li>• 50% boost in brewery tour bookings</li>
                <li>• 45% increase in beer club memberships</li>
                <li>• 40% improvement in customer satisfaction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Microbrewery Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Beer Ordering and Delivery Management</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive beer ordering system is essential for microbreweries. This feature should streamline beer selection, ordering, and delivery management to ensure optimal customer experience and sales growth.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Ordering Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Comprehensive beer catalog and descriptions</li>
                  <li>• Real-time availability and stock tracking</li>
                  <li>• Customizable beer packages and growlers</li>
                  <li>• Delivery scheduling and tracking</li>
                  <li>• Pickup and curbside service options</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Beer Education and Tasting Notes</h3>
              <p className="text-gray-600 mb-4">
                Provide comprehensive beer education with detailed tasting notes, brewing information, and craft beer knowledge that enhances customer appreciation and engagement.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Education Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Detailed beer descriptions and tasting notes</li>
                  <li>• Brewing process and ingredient information</li>
                  <li>• Beer style guides and food pairing suggestions</li>
                  <li>• Seasonal and limited edition beer highlights</li>
                  <li>• Customer reviews and ratings</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Brewery Tours and Event Management</h3>
              <p className="text-gray-600 mb-4">
                Streamline brewery tour bookings, event management, and customer experiences with comprehensive scheduling and management tools.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tour Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Brewery tour scheduling and booking</li>
                  <li>• Event management and ticket sales</li>
                  <li>• Private party and group booking</li>
                  <li>• Tour guide information and availability</li>
                  <li>• Special events and beer release parties</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Customer Loyalty and Community Building</h3>
              <p className="text-gray-600 mb-4">
                Build strong customer relationships with loyalty programs, beer clubs, and community features that enhance brand engagement and retention.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Loyalty Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Beer club membership management</li>
                  <li>• Loyalty points and rewards programs</li>
                  <li>• Exclusive beer releases and early access</li>
                  <li>• Customer community and social features</li>
                  <li>• Referral programs and incentives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Microbrewery App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for craft beer enthusiasts</li>
                <li>• Implement easy beer discovery and ordering</li>
                <li>• Provide rich beer information and education</li>
                <li>• Ensure smooth tour and event booking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with POS and inventory systems</li>
                <li>• Connect with delivery and logistics platforms</li>
                <li>• Implement age verification and compliance</li>
                <li>• Plan for seasonal beer releases and events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Craft Haven Brewery</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our microbrewery business. We achieved 65% higher customer engagement, 55% improvement in beer sales, and saw a 60% increase in customer retention. The app's ordering system and beer education features significantly enhanced our craft beer community."
            </p>
            <p className="text-gray-600">
              <strong>- Jake Brewster, Founder, Craft Haven Brewery</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom microbrewery app?</h3>
              <p className="text-gray-600">
                A comprehensive microbrewery app typically takes 12-16 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing brewery management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular brewery management systems like Ekos, Beer30, and various POS systems. We also provide APIs for custom integrations with proprietary brewery and inventory management systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What features help manage beer inventory effectively?</h3>
              <p className="text-gray-600">
                Our apps include comprehensive inventory management features such as real-time stock tracking, beer availability updates, batch management, expiration tracking, and automated reordering to help manage microbrewery operations effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom microbrewery app cost?</h3>
              <p className="text-gray-600">
                Custom microbrewery apps typically range from $30,000 to $70,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Microbrewery Business?</h2>
          <p className="text-xl mb-6">
            Elevate your craft beer business with cutting-edge mobile app design and boost customer engagement and beer sales.
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

export default MobileAppDesignForMicrobreweries; 