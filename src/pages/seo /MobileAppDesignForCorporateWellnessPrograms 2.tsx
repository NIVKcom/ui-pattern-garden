import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignForCorporateWellnessPrograms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Corporate Wellness Programs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your corporate wellness program with custom mobile app design. Boost employee engagement, improve health outcomes, and reduce healthcare costs with our expert mobile app design services.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 mb-8">
            <p className="text-emerald-800">
              <strong>Pro Tip:</strong> Companies with wellness apps see 35% higher employee participation and 25% reduction in healthcare costs compared to traditional wellness programs.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Corporate Wellness Programs Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Increased employee engagement and participation</li>
                <li>• Personalized health tracking and goal setting</li>
                <li>• Real-time health monitoring and feedback</li>
                <li>• Social features and team challenges</li>
                <li>• Integration with wearable devices and health apps</li>
                <li>• Comprehensive wellness analytics and reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 35% higher employee participation rates</li>
                <li>• 25% reduction in healthcare costs</li>
                <li>• 40% improvement in employee satisfaction</li>
                <li>• 30% decrease in absenteeism</li>
                <li>• 45% increase in productivity</li>
                <li>• 20% improvement in employee retention</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Corporate Wellness Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Health Tracking and Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health tracking features that monitor various wellness metrics and provide personalized insights to help employees achieve their health goals.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Tracking Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Activity and exercise tracking</li>
                  <li>• Nutrition and meal planning</li>
                  <li>• Sleep quality monitoring</li>
                  <li>• Stress and mental health assessment</li>
                  <li>• Vital signs and biometric data</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Gamification and Social Features</h3>
              <p className="text-gray-600 mb-4">
                Engage employees through gamification elements, team challenges, and social features that make wellness fun and encourage healthy competition.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Engagement Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Points, badges, and achievement systems</li>
                  <li>• Team challenges and competitions</li>
                  <li>• Leaderboards and social sharing</li>
                  <li>• Wellness challenges and campaigns</li>
                  <li>• Peer support and encouragement</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Personalized Wellness Coaching</h3>
              <p className="text-gray-600 mb-4">
                Provide personalized wellness guidance and coaching based on individual health data, preferences, and goals to maximize program effectiveness.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Coaching Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Personalized health recommendations</li>
                  <li>• Goal setting and progress tracking</li>
                  <li>• Educational content and resources</li>
                  <li>• Virtual coaching sessions</li>
                  <li>• Behavioral change support</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Analytics and Reporting Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics and reporting tools that provide insights into program effectiveness, employee engagement, and health outcomes for HR and management teams.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Analytics Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Employee participation metrics</li>
                  <li>• Health outcome tracking</li>
                  <li>• ROI and cost savings analysis</li>
                  <li>• Engagement and satisfaction surveys</li>
                  <li>• Custom report generation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Corporate Wellness App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for busy professionals with limited time</li>
                <li>• Implement quick health check-ins and tracking</li>
                <li>• Provide motivational elements and progress celebrations</li>
                <li>• Ensure privacy and data security compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with existing HR and benefits systems</li>
                <li>• Connect with wearable devices and health apps</li>
                <li>• Implement secure data handling and HIPAA compliance</li>
                <li>• Plan for scalability as company size grows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: TechCorp Wellness</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom wellness app transformed our corporate wellness program. We achieved 35% higher employee participation, 25% reduction in healthcare costs, and saw a 40% improvement in employee satisfaction. The app's gamification features and personalized coaching significantly enhanced engagement."
            </p>
            <p className="text-gray-600">
              <strong>- Lisa Rodriguez, HR Director, TechCorp Wellness</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom corporate wellness app?</h3>
              <p className="text-gray-600">
                A comprehensive corporate wellness app typically takes 10-14 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing HR and benefits systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular HR systems like Workday, BambooHR, and benefits platforms. We also provide APIs for custom integrations with proprietary systems and health insurance providers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What security measures protect employee health data?</h3>
              <p className="text-gray-600">
                We implement enterprise-grade security including HIPAA compliance, end-to-end encryption, secure data transmission, access controls, and audit trails to ensure employee health information remains confidential and secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom corporate wellness app cost?</h3>
              <p className="text-gray-600">
                Custom corporate wellness apps typically range from $25,000 to $70,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Corporate Wellness Program?</h2>
          <p className="text-xl mb-6">
            Boost employee health and engagement with cutting-edge mobile app design and reduce healthcare costs.
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

export default MobileAppDesignForCorporateWellnessPrograms; 