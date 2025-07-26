import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignForPortraitPhotographers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mobile App Design for Portrait Photographers | Nivk.com</title>
        <meta name="description" content="Elevate your portrait photography business with custom mobile app design. Streamline client management, portfolio showcasing, and booking processes with our specialized mobile app solutions." />
        <meta name="keywords" content="mobile app design for portrait photographers, photography app development, client management apps, portfolio apps, photography booking apps" />
        <meta property="og:title" content="Mobile App Design for Portrait Photographers | Nivk.com" />
        <meta property="og:description" content="Elevate your portrait photography business with custom mobile app design. Streamline client management, portfolio showcasing, and booking processes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivk.com/mobile-app-design-for-portrait-photographers" />
        <link rel="canonical" href="https://nivk.com/mobile-app-design-for-portrait-photographers" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Portrait Photographers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Elevate your portrait photography business with custom mobile app design. Streamline client management, 
            portfolio showcasing, and booking processes with our specialized mobile app solutions.
          </p>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4">Why Portrait Photographers Need Mobile Apps</h2>
            <p className="text-purple-800">
              In today's digital photography landscape, portrait photographers need mobile apps to showcase their work, 
              manage client relationships, and streamline their business operations. Our custom mobile app design 
              solutions are specifically tailored for portrait photography businesses.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Essential Features for Portrait Photography Apps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Showcase</h3>
              <p className="text-gray-600 mb-4">
                Stunning portfolio galleries with high-resolution image display, categorized collections, and 
                social sharing capabilities to showcase your best work to potential clients.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• High-resolution image galleries</li>
                <li>• Categorized portfolio collections</li>
                <li>• Social media integration</li>
                <li>• Before/after comparisons</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive client database with contact information, session history, preferences, and 
                communication tools to maintain strong client relationships.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Client database management</li>
                <li>• Session history tracking</li>
                <li>• Client preference notes</li>
                <li>• Communication tools</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking & Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Streamlined booking system with calendar integration, availability management, and automated 
                confirmations to reduce administrative overhead.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Online booking calendar</li>
                <li>• Availability management</li>
                <li>• Automated confirmations</li>
                <li>• Payment processing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Delivery</h3>
              <p className="text-gray-600 mb-4">
                Secure image delivery platform with watermarking, download tracking, and client feedback 
                collection to streamline the delivery process.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Secure image galleries</li>
                <li>• Watermarking options</li>
                <li>• Download tracking</li>
                <li>• Client feedback collection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pro Tips for Portrait Photography App Design
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Tip #1: Optimize for Visual Impact</h3>
              <p className="text-purple-800">
                Design your app with visual appeal in mind. Use high-quality images, smooth transitions, and 
                elegant typography to create a premium experience that reflects your photography style.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Tip #2: Streamline Client Communication</h3>
              <p className="text-blue-800">
                Integrate messaging, consultation scheduling, and feedback collection to maintain clear 
                communication with clients throughout the photography process.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Tip #3: Include Pricing Transparency</h3>
              <p className="text-green-800">
                Display clear pricing information, package details, and add-on services to help clients 
                make informed decisions and reduce inquiry friction.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Tip #4: Enable Social Sharing</h3>
              <p className="text-orange-800">
                Make it easy for clients to share their photos on social media with built-in sharing 
                features, branded watermarks, and referral incentives.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Story: PortraitPro Mobile App
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Revolutionizing Portrait Photography Business</h3>
              <p className="text-lg mb-6">
                "Our custom mobile app has transformed how we showcase our work and manage clients. Booking 
                inquiries increased by 120%, client satisfaction improved significantly, and our administrative 
                workload decreased by 70%. The app's beautiful design perfectly reflects our photography style."
              </p>
              <div className="flex items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">MJ</span>
                </div>
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-purple-100">Portrait Photographer & Studio Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How can a mobile app help my portrait photography business?
              </h3>
              <p className="text-gray-600">
                A mobile app can streamline client bookings, showcase your portfolio professionally, manage 
                client relationships, and automate administrative tasks, allowing you to focus more on 
                photography and less on business operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can the app integrate with my existing photography equipment?
              </h3>
              <p className="text-gray-600">
                Yes, we can integrate your app with various photography equipment and software, including 
                camera systems, editing software, and cloud storage solutions for seamless workflow management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What features are most important for portrait photographers?
              </h3>
              <p className="text-gray-600">
                Key features include portfolio showcasing, client booking systems, image delivery platforms, 
                client management tools, and social media integration to maximize your business potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does a custom photography mobile app cost?
              </h3>
              <p className="text-gray-600">
                Costs typically range from $20,000 to $60,000 depending on features and complexity. We offer 
                flexible payment plans and can start with essential features to reduce initial investment.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Portrait Photography Business?
            </h2>
            <p className="text-xl mb-6">
              Let's discuss how a custom mobile app can showcase your work and streamline your business operations.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
              >
                Get Started Today
              </a>
              <a
                href="/mobile-app-design-for-dance-studios"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300 inline-block"
              >
                View Related Services
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Mobile App Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/mobile-app-design-for-dance-studios"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dance Studios</h3>
              <p className="text-gray-600">Custom mobile apps for dance instruction and studio management</p>
            </a>
            <a
              href="/mobile-app-design-for-creative-coworking-spaces"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Coworking Spaces</h3>
              <p className="text-gray-600">Mobile app solutions for creative workspace management</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForPortraitPhotographers; 