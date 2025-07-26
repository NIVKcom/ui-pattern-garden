import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForAutoRepairShops: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Auto Repair Shops
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionize your auto repair business with custom mobile app design. Streamline operations, enhance customer experience, and drive growth with our expert mobile app design services.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-blue-800">
              <strong>Pro Tip:</strong> Auto repair shops with mobile apps see 40% higher customer retention and 25% increase in repeat business compared to traditional shops.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Auto Repair Shops Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined appointment scheduling and management</li>
                <li>• Real-time service updates and notifications</li>
                <li>• Digital vehicle history and maintenance records</li>
                <li>• Secure payment processing and invoicing</li>
                <li>• Customer feedback and review management</li>
                <li>• Inventory and parts tracking integration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 35% reduction in no-shows and cancellations</li>
                <li>• 50% faster service completion times</li>
                <li>• 30% increase in customer satisfaction scores</li>
                <li>• 45% improvement in operational efficiency</li>
                <li>• 60% reduction in phone call volume</li>
                <li>• 25% increase in average service ticket value</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Auto Repair Shop Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Appointment Scheduling System</h3>
              <p className="text-gray-600 mb-4">
                A robust appointment scheduling system is the cornerstone of any auto repair shop app. This feature should allow customers to book appointments based on available time slots, service type, and technician availability.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Real-time availability calendar</li>
                  <li>• Service type selection with pricing</li>
                  <li>• Vehicle information input</li>
                  <li>• Appointment confirmation and reminders</li>
                  <li>• Rescheduling and cancellation options</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Tracking and Updates</h3>
              <p className="text-gray-600 mb-4">
                Keep customers informed about their vehicle's repair progress with real-time service tracking. This feature builds trust and reduces customer anxiety about their vehicle's status.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tracking Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Service status updates (In Progress, Completed, Ready)</li>
                  <li>• Photo updates of work in progress</li>
                  <li>• Estimated completion times</li>
                  <li>• Push notifications for status changes</li>
                  <li>• Digital service history</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Digital Vehicle Profiles</h3>
              <p className="text-gray-600 mb-4">
                Create comprehensive digital profiles for each customer's vehicle, including maintenance history, service records, and upcoming maintenance reminders.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Profile Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Vehicle make, model, and year</li>
                  <li>• VIN number and registration details</li>
                  <li>• Complete service history</li>
                  <li>• Maintenance schedules and reminders</li>
                  <li>• Photos and documentation</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment and Invoicing</h3>
              <p className="text-gray-600 mb-4">
                Streamline the payment process with integrated payment processing, digital invoicing, and multiple payment options for customer convenience.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Payment Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Secure payment processing</li>
                  <li>• Multiple payment methods (credit card, digital wallets)</li>
                  <li>• Digital invoice generation</li>
                  <li>• Payment plan options</li>
                  <li>• Receipt storage and history</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Auto Repair Shop App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for one-handed use during vehicle drop-off</li>
                <li>• Include clear progress indicators for service status</li>
                <li>• Provide offline functionality for basic features</li>
                <li>• Use automotive industry terminology customers understand</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with existing shop management software</li>
                <li>• Connect with parts suppliers for real-time availability</li>
                <li>• Sync with accounting systems for seamless billing</li>
                <li>• Implement customer relationship management features</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Precision Auto Care</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "After implementing our custom mobile app, Precision Auto Care saw a 40% increase in appointment bookings and a 30% reduction in customer wait times. The digital vehicle profiles helped us provide more personalized service, leading to a 25% increase in customer retention."
            </p>
            <p className="text-gray-600">
              <strong>- Mike Rodriguez, Owner, Precision Auto Care</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom auto repair shop app?</h3>
              <p className="text-gray-600">
                A comprehensive auto repair shop app typically takes 8-12 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with our existing shop management software?</h3>
              <p className="text-gray-600">
                Yes, our apps are designed to integrate seamlessly with popular shop management systems like Mitchell 1, Alldata, and Shopware. We can also create custom integrations for proprietary systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What security measures are implemented for customer data?</h3>
              <p className="text-gray-600">
                We implement enterprise-grade security including SSL encryption, secure payment processing, and compliance with automotive industry data protection standards to ensure customer information remains safe.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom auto repair shop app cost?</h3>
              <p className="text-gray-600">
                Custom auto repair shop apps typically range from $15,000 to $35,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Auto Repair Shop?</h2>
          <p className="text-xl mb-6">
            Join the digital revolution and give your customers the modern experience they expect.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForAutoRepairShops; 