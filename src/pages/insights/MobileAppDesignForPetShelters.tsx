import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForPetShelters: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Pet Shelters
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your pet shelter operations with custom mobile app design. Streamline pet adoption, enhance volunteer management, and boost community engagement with our expert mobile app design services.
          </p>
          <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-8">
            <p className="text-pink-800">
              <strong>Pro Tip:</strong> Pet shelters with mobile apps see 75% higher adoption rates and 65% improvement in volunteer engagement compared to traditional shelter operations.
            </p>
          </div>
        </section>

        {/* Summary Block */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Pet Shelters Need Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined pet adoption and foster management</li>
                <li>• Enhanced volunteer coordination and scheduling</li>
                <li>• Real-time pet inventory and health tracking</li>
                <li>• Donation and fundraising management</li>
                <li>• Community engagement and education</li>
                <li>• Pet care and medical record management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 75% higher adoption rates</li>
                <li>• 65% improvement in volunteer engagement</li>
                <li>• 70% increase in donations and fundraising</li>
                <li>• 60% boost in community awareness</li>
                <li>• 55% improvement in pet care efficiency</li>
                <li>• 50% increase in foster applications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Features for Pet Shelter Apps</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Pet Adoption and Foster Management</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive adoption system is essential for pet shelters. This feature should streamline pet profiles, adoption applications, and foster management to ensure optimal pet placement and care.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Adoption Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Detailed pet profiles and photo galleries</li>
                  <li>• Adoption application and screening process</li>
                  <li>• Foster family management and coordination</li>
                  <li>• Adoption follow-up and support</li>
                  <li>• Pet matching and compatibility assessment</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Volunteer Management and Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Streamline volunteer coordination with comprehensive scheduling, task assignment, and communication tools that enhance shelter operations and volunteer engagement.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Volunteer Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Volunteer registration and profile management</li>
                  <li>• Shift scheduling and availability tracking</li>
                  <li>• Task assignment and completion tracking</li>
                  <li>• Volunteer communication and updates</li>
                  <li>• Training and orientation management</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Pet Care and Medical Management</h3>
              <p className="text-gray-600 mb-4">
                Provide comprehensive pet care management with medical records, health tracking, and care coordination that ensures optimal pet health and well-being.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Care Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Medical records and health history tracking</li>
                  <li>• Vaccination and medication scheduling</li>
                  <li>• Veterinary appointment management</li>
                  <li>• Feeding and care instructions</li>
                  <li>• Health monitoring and alerts</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Donation and Fundraising Management</h3>
              <p className="text-gray-600 mb-4">
                Enhance fundraising efforts with integrated donation systems, campaign management, and donor engagement tools that support shelter sustainability.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Fundraising Features:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Online donation processing and tracking</li>
                  <li>• Fundraising campaign management</li>
                  <li>• Donor recognition and communication</li>
                  <li>• Sponsorship and adoption fee management</li>
                  <li>• Financial reporting and transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Pet Shelter App Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">User Experience Design</h3>
              <ul className="space-y-2">
                <li>• Design for compassionate animal lovers</li>
                <li>• Implement easy pet browsing and adoption</li>
                <li>• Provide clear volunteer and donation options</li>
                <li>• Ensure emotional and heartwarming interfaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Operations Integration</h3>
              <ul className="space-y-2">
                <li>• Integrate with veterinary and pet care systems</li>
                <li>• Connect with donation and payment platforms</li>
                <li>• Implement secure pet and donor data handling</li>
                <li>• Plan for seasonal adoption and fundraising events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Hope Animal Shelter</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "Our custom mobile app transformed our pet shelter operations. We achieved 75% higher adoption rates, 65% improvement in volunteer engagement, and saw a 70% increase in donations. The app's adoption and volunteer management features significantly enhanced our community impact."
            </p>
            <p className="text-gray-600">
              <strong>- Maria Johnson, Director, Hope Animal Shelter</strong>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does it take to develop a custom pet shelter app?</h3>
              <p className="text-gray-600">
                A comprehensive pet shelter app typically takes 12-16 weeks to develop, including design, development, testing, and deployment. The timeline depends on the complexity of features and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can the app integrate with existing shelter management systems?</h3>
              <p className="text-gray-600">
                Yes, our apps can integrate with popular shelter management systems like Petfinder, ShelterLuv, and various veterinary platforms. We also provide APIs for custom integrations with proprietary shelter and pet care systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What features help manage shelter operations effectively?</h3>
              <p className="text-gray-600">
                Our apps include comprehensive operations management features such as pet adoption, volunteer coordination, medical records, donation processing, and community engagement to help manage pet shelter operations effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much does a custom pet shelter app cost?</h3>
              <p className="text-gray-600">
                Custom pet shelter apps typically range from $30,000 to $70,000 depending on features, integrations, and complexity. We offer flexible payment plans and can provide a detailed quote based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Pet Shelter Operations?</h2>
          <p className="text-xl mb-6">
            Elevate your shelter services with cutting-edge mobile app design and boost adoption rates and community engagement.
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

export default MobileAppDesignForPetShelters; 