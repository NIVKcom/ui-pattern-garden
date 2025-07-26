import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignForCodingBootcamps: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Coding Bootcamps
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your coding bootcamp with custom mobile app design. Streamline learning, enhance student engagement, and improve outcomes with our expert mobile app design services.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-8">
            <p className="text-indigo-800">
              <strong>Pro Tip:</strong> Coding bootcamps with mobile apps see 45% higher student completion rates and 60% improvement in learning engagement compared to traditional programs.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Coding Bootcamps Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined course management and progress tracking</li>
                <li>• Interactive coding exercises and challenges</li>
                <li>• Real-time feedback and code review systems</li>
                <li>• Student collaboration and peer learning features</li>
                <li>• Career services and job placement tools</li>
                <li>• Alumni network and community building</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 45% higher student completion rates</li>
                <li>• 60% improvement in learning engagement</li>
                <li>• 40% increase in student satisfaction scores</li>
                <li>• 50% reduction in administrative overhead</li>
                <li>• 35% faster course delivery</li>
                <li>• 25% increase in job placement rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Coding Bootcamp Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Interactive Learning Management System</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive learning management system is essential for coding bootcamps. This feature should provide seamless course delivery, progress tracking, and interactive learning experiences.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Course content delivery and organization</li>
                  <li>• Progress tracking and milestone management</li>
                  <li>• Video lessons and live streaming capabilities</li>
                  <li>• Assignment submission and grading</li>
                  <li>• Learning path customization</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Code Editor and Development Environment</h3>
              <p className="text-gray-600 mb-4">
                Provide students with a mobile-optimized coding environment that allows them to write, test, and debug code on-the-go, enhancing their learning flexibility.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Development Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Syntax highlighting and code completion</li>
                  <li>• Real-time code execution and testing</li>
                  <li>• Version control integration</li>
                  <li>• Debugging tools and error handling</li>
                  <li>• Multiple programming language support</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Student Collaboration and Peer Learning</h3>
              <p className="text-gray-600 mb-4">
                Foster a collaborative learning environment with features that enable students to work together, share knowledge, and support each other's learning journey.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Collaboration Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Study groups and team projects</li>
                  <li>• Code sharing and review systems</li>
                  <li>• Discussion forums and Q&A platforms</li>
                  <li>• Peer mentoring and tutoring</li>
                  <li>• Real-time messaging and notifications</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Career Services and Job Placement</h3>
              <p className="text-gray-600 mb-4">
                Support students' career development with integrated tools for job preparation, networking, and placement services that help them transition into tech careers.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Career Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Portfolio building and showcase tools</li>
                  <li>• Resume builder and optimization</li>
                  <li>• Interview preparation resources</li>
                  <li>• Job board and application tracking</li>
                  <li>• Alumni network and mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Coding Bootcamp App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Learning Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for bite-sized learning sessions</li>
                <li>• Implement gamification and achievement systems</li>
                <li>• Provide offline access to course materials</li>
                <li>• Ensure responsive design for all screen sizes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Implementation</h3>
              <ul className="space-y-2">
                <li>• Use cloud-based development environments</li>
                <li>• Implement real-time collaboration features</li>
                <li>• Ensure secure code storage and sharing</li>
                <li>• Plan for scalability as student numbers grow</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: CodeCraft Academy</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app revolutionized our coding bootcamp. We achieved 45% higher completion rates, 60% improvement in student engagement, and saw a 25% increase in job placement rates. The app's interactive coding environment and peer collaboration features created a truly immersive learning experience."
            </p>
            <p className="text-gray-600">
              <strong>- Sarah Johnson, Director, CodeCraft Academy</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom coding bootcamp app?</h3>
              <p className="text-gray-600">
                A comprehensive coding bootcamp app typically takes 12-16 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing learning management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular LMS platforms like Canvas, Moodle, and Blackboard. We also provide APIs for custom integrations with proprietary systems and educational tools.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What programming languages can be supported in the mobile app?</h3>
              <p className="text-gray-600">
                Our apps can support multiple programming languages including JavaScript, Python, Java, C++, Ruby, and more. We can customize the development environment based on your curriculum requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom coding bootcamp app cost?</h3>
              <p className="text-gray-600">
                Custom coding bootcamp apps typically range from $30,000 to $80,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Coding Bootcamp?</h2>
          <p className="text-xl mb-6">
            Elevate your educational experience with cutting-edge mobile app design and help more students succeed in tech.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForCodingBootcamps; 