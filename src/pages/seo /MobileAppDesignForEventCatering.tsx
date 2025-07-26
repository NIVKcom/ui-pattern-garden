import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForEventCatering: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Event Catering
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your event catering business with custom mobile app design. Streamline event management, enhance client communication, and boost operational efficiency with our expert mobile app design services.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8">
            <p className="text-orange-800">
              <strong>Pro Tip:</strong> Event catering businesses with mobile apps see 50% higher client satisfaction and 40% improvement in operational efficiency compared to traditional catering operations.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Event Catering Businesses Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined event planning and menu customization</li>
                <li>• Enhanced client communication and coordination</li>
                <li>• Real-time inventory and ingredient management</li>
                <li>• Staff scheduling and task assignment</li>
                <li>• Event timeline and logistics tracking</li>
                <li>• Payment processing and invoicing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 50% higher client satisfaction</li>
                <li>• 40% improvement in operational efficiency</li>
                <li>• 45% increase in event bookings</li>
                <li>• 35% reduction in coordination errors</li>
                <li>• 30% faster event setup and execution</li>
                <li>• 25% increase in repeat business</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Event Catering Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Event Planning and Menu Management</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive event planning system is essential for catering businesses. This feature should streamline event coordination, menu customization, and client collaboration to ensure successful events.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Planning Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Event details and requirements capture</li>
                  <li>• Menu customization and dietary restrictions</li>
                  <li>• Guest count and serving calculations</li>
                  <li>• Event timeline and schedule management</li>
                  <li>• Client approval and feedback system</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Inventory and Ingredient Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize your catering operations with intelligent inventory tracking that manages ingredients, supplies, and equipment efficiently across multiple events.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Inventory Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Real-time ingredient tracking and alerts</li>
                  <li>• Supplier management and ordering</li>
                  <li>• Equipment and utensil inventory</li>
                  <li>• Waste tracking and cost analysis</li>
                  <li>• Automated reorder notifications</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Staff Management and Task Assignment</h3>
              <p className="text-gray-600 mb-4">
                Coordinate your catering team effectively with features that handle scheduling, task assignment, and real-time communication during events.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Staff Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Staff scheduling and availability tracking</li>
                  <li>• Task assignment and progress monitoring</li>
                  <li>• Real-time communication and updates</li>
                  <li>• Performance tracking and feedback</li>
                  <li>• Emergency contact and backup planning</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Client Communication and Coordination</h3>
              <p className="text-gray-600 mb-4">
                Enhance client relationships with integrated communication tools that provide updates, coordinate logistics, and ensure smooth event execution.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Communication Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Real-time event status updates</li>
                  <li>• Client feedback and approval system</li>
                  <li>• Photo and video sharing</li>
                  <li>• Emergency contact and support</li>
                  <li>• Post-event follow-up and reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Event Catering App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for both clients and staff users</li>
                <li>• Implement visual menu and event planning</li>
                <li>• Provide real-time status updates</li>
                <li>• Ensure offline functionality for events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Operational Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with existing POS and accounting systems</li>
                <li>• Connect with supplier and vendor platforms</li>
                <li>• Implement GPS tracking for delivery teams</li>
                <li>• Plan for seasonal event fluctuations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Elite Event Catering</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our event catering operations. We achieved 50% higher client satisfaction, 40% improvement in operational efficiency, and saw a 45% increase in event bookings. The app's real-time coordination and inventory management features significantly enhanced our service quality."
            </p>
            <p className="text-gray-600">
              <strong>- Jennifer Martinez, Owner, Elite Event Catering</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom event catering app?</h3>
              <p className="text-gray-600">
                A comprehensive event catering app typically takes 10-14 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing catering management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular catering management systems like Caterease, Total Party Planner, and EventPro. We also provide APIs for custom integrations with proprietary systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What features help manage multiple events simultaneously?</h3>
              <p className="text-gray-600">
                Our apps include multi-event management features such as calendar views, resource allocation, staff scheduling across events, and real-time status tracking to help you manage multiple events efficiently.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom event catering app cost?</h3>
              <p className="text-gray-600">
                Custom event catering apps typically range from $25,000 to $60,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Event Catering Business?</h2>
          <p className="text-xl mb-6">
            Elevate your catering services with cutting-edge mobile app design and boost client satisfaction and operational efficiency.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForEventCatering; 