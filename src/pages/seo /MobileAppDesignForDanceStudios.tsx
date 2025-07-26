import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForDanceStudios: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Dance Studios
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your dance studio with custom mobile app design. Streamline class management, enhance student engagement, and boost enrollment with our expert mobile app design services.
          </p>
          <div className="bg-fuchsia-50 border-l-4 border-fuchsia-400 p-4 mb-8">
            <p className="text-fuchsia-800">
              <strong>Pro Tip:</strong> Dance studios with mobile apps see 45% higher student retention and 50% improvement in class attendance compared to traditional studios.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Dance Studios Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined class scheduling and registration</li>
                <li>• Enhanced student progress tracking</li>
                <li>• Virtual dance lessons and tutorials</li>
                <li>• Performance and recital management</li>
                <li>• Student communication and feedback systems</li>
                <li>• Payment processing and membership billing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 45% higher student retention rates</li>
                <li>• 50% improvement in class attendance</li>
                <li>• 40% increase in enrollment</li>
                <li>• 35% reduction in administrative tasks</li>
                <li>• 30% boost in parent satisfaction</li>
                <li>• 25% increase in revenue per student</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Dance Studio Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Class Management and Scheduling</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive class management system is essential for dance studios. This feature should streamline scheduling, registration, and attendance tracking to ensure smooth operations.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Management Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Class schedule and availability calendar</li>
                  <li>• Online registration and enrollment</li>
                  <li>• Attendance tracking and reporting</li>
                  <li>• Waitlist management</li>
                  <li>• Class capacity and instructor assignment</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Student Progress Tracking and Assessment</h3>
              <p className="text-gray-600 mb-4">
                Help students track their dance journey with comprehensive progress monitoring, skill assessment, and performance evaluation features.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Progress Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Skill level tracking and progression</li>
                  <li>• Performance assessment and feedback</li>
                  <li>• Dance technique video analysis</li>
                  <li>• Achievement badges and milestones</li>
                  <li>• Practice tracking and goal setting</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Virtual Learning and Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Extend learning beyond the studio with virtual dance lessons, tutorial videos, and practice resources that enhance student development.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Learning Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Live virtual dance classes</li>
                  <li>• Pre-recorded tutorial videos</li>
                  <li>• Practice routines and choreography</li>
                  <li>• Music library and playlists</li>
                  <li>• Interactive dance challenges</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Performance and Recital Management</h3>
              <p className="text-gray-600 mb-4">
                Streamline performance planning and recital coordination with integrated tools that handle event management, costume tracking, and audience engagement.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Performance Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Recital and performance scheduling</li>
                  <li>• Costume and prop management</li>
                  <li>• Ticket sales and audience management</li>
                  <li>• Performance video sharing</li>
                  <li>• Event photography and memories</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Dance Studio App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for students of all ages and skill levels</li>
                <li>• Implement visual class browsing and booking</li>
                <li>• Provide motivational progress tracking</li>
                <li>• Ensure easy communication with instructors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Studio Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with existing studio management systems</li>
                <li>• Connect with payment and billing platforms</li>
                <li>• Implement secure student data handling</li>
                <li>• Plan for seasonal performances and events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Rhythm & Grace Dance Studio</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our dance studio operations. We achieved 45% higher student retention, 50% improvement in class attendance, and saw a 40% increase in enrollment. The app's progress tracking and virtual learning features significantly enhanced student engagement."
            </p>
            <p className="text-gray-600">
              <strong>- Maria Rodriguez, Director, Rhythm & Grace Dance Studio</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom dance studio app?</h3>
              <p className="text-gray-600">
                A comprehensive dance studio app typically takes 8-12 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing studio management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular studio management systems like MindBody, Zen Planner, and Dance Studio Pro. We also provide APIs for custom integrations with proprietary systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What age groups can the app accommodate?</h3>
              <p className="text-gray-600">
                Our apps are designed to accommodate students of all ages, from young children to adults. We can customize the interface and features based on your target demographic and class structure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom dance studio app cost?</h3>
              <p className="text-gray-600">
                Custom dance studio apps typically range from $20,000 to $50,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Dance Studio?</h2>
          <p className="text-xl mb-6">
            Elevate your dance education with cutting-edge mobile app design and boost student engagement and retention.
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForDanceStudios; 