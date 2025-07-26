import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForDietitians: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Dietitians
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your dietitian practice with custom mobile app design. Streamline client management, enhance nutrition tracking, and improve health outcomes with our expert mobile app design services.
          </p>
          <div className="bg-lime-50 border-l-4 border-lime-400 p-4 mb-8">
            <p className="text-lime-800">
              <strong>Pro Tip:</strong> Dietitians with mobile apps see 55% higher client engagement and 40% improvement in health outcomes compared to traditional practice methods.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Dietitians Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined client management and appointment scheduling</li>
                <li>• Enhanced nutrition tracking and meal planning</li>
                <li>• Real-time health monitoring and progress tracking</li>
                <li>• Educational content and recipe sharing</li>
                <li>• Client communication and support systems</li>
                <li>• HIPAA-compliant data management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 55% higher client engagement</li>
                <li>• 40% improvement in health outcomes</li>
                <li>• 45% increase in client retention</li>
                <li>• 35% reduction in administrative tasks</li>
                <li>• 50% faster appointment scheduling</li>
                <li>• 30% increase in practice efficiency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Dietitian Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Client Management and Appointment System</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive client management system is essential for dietitians. This feature should streamline appointment scheduling, client profiles, and communication to ensure efficient practice operations.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Management Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Appointment scheduling and calendar management</li>
                  <li>• Client profile and health history tracking</li>
                  <li>• Secure messaging and communication</li>
                  <li>• Session notes and progress documentation</li>
                  <li>• Reminder and notification systems</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Nutrition Tracking and Meal Planning</h3>
              <p className="text-gray-600 mb-4">
                Help clients track their nutrition and plan meals with comprehensive food logging, macro tracking, and personalized meal planning features.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Nutrition Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Food diary and calorie tracking</li>
                  <li>• Macro and micronutrient analysis</li>
                  <li>• Personalized meal planning</li>
                  <li>• Recipe database and sharing</li>
                  <li>• Barcode scanning for food items</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Health Monitoring and Progress Tracking</h3>
              <p className="text-gray-600 mb-4">
                Monitor client health progress with integrated tracking features that provide insights into weight, measurements, and health metrics over time.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Monitoring Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Weight and body composition tracking</li>
                  <li>• Health metrics and vital signs</li>
                  <li>• Progress visualization and charts</li>
                  <li>• Goal setting and achievement tracking</li>
                  <li>• Health trend analysis</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Educational Content and Support</h3>
              <p className="text-gray-600 mb-4">
                Provide clients with educational resources, nutrition guidance, and ongoing support to enhance their health journey and improve outcomes.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Educational Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Nutrition education and articles</li>
                  <li>• Recipe collections and meal ideas</li>
                  <li>• Video tutorials and cooking guides</li>
                  <li>• Community support and forums</li>
                  <li>• Personalized nutrition tips</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-lime-500 to-green-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Dietitian App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for clients of all ages and tech comfort levels</li>
                <li>• Implement easy food logging and tracking</li>
                <li>• Provide motivational progress feedback</li>
                <li>• Ensure HIPAA compliance and data security</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Practice Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with existing practice management systems</li>
                <li>• Connect with wearable devices and health apps</li>
                <li>• Implement secure data handling and backup</li>
                <li>• Plan for scalability as your practice grows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: NutriWell Nutrition Practice</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our nutrition practice. We achieved 55% higher client engagement, 40% improvement in health outcomes, and saw a 45% increase in client retention. The app's nutrition tracking and meal planning features significantly enhanced client success."
            </p>
            <p className="text-gray-600">
              <strong>- Dr. Sarah Johnson, Registered Dietitian, NutriWell Nutrition Practice</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom dietitian app?</h3>
              <p className="text-gray-600">
                A comprehensive dietitian app typically takes 10-14 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing practice management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular practice management systems like Practice Fusion, Kareo, and SimplePractice. We also provide APIs for custom integrations with proprietary systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What security measures protect client health data?</h3>
              <p className="text-gray-600">
                We implement enterprise-grade security including HIPAA compliance, end-to-end encryption, secure data transmission, access controls, and audit trails to ensure client health information remains confidential and secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom dietitian app cost?</h3>
              <p className="text-gray-600">
                Custom dietitian apps typically range from $25,000 to $65,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-500 to-lime-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Dietitian Practice?</h2>
          <p className="text-xl mb-6">
            Elevate your nutrition practice with cutting-edge mobile app design and improve client health outcomes.
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

export default MobileAppDesignForDietitians; 