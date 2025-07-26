import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignRotterdam: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mobile App Design Rotterdam | Nivk.com</title>
        <meta name="description" content="Transform your business in Rotterdam with custom mobile app design. Streamline operations, enhance customer engagement, and drive growth with our specialized mobile app solutions in the Netherlands' innovation hub." />
        <meta name="keywords" content="mobile app design Rotterdam, Rotterdam app development, Netherlands mobile apps, Dutch tech solutions, Rotterdam digital transformation" />
        <meta property="og:title" content="Mobile App Design Rotterdam | Nivk.com" />
        <meta property="og:description" content="Transform your business in Rotterdam with custom mobile app design. Streamline operations, enhance customer engagement, and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivk.com/mobile-app-design-rotterdam" />
        <link rel="canonical" href="https://nivk.com/mobile-app-design-rotterdam" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design Rotterdam
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business in Rotterdam with custom mobile app design. Streamline operations, 
            enhance customer engagement, and drive growth with our specialized mobile app solutions 
            in the Netherlands' innovation hub.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-orange-900 mb-4">Why Rotterdam Businesses Need Mobile Apps</h2>
            <p className="text-orange-800">
              In Rotterdam's dynamic port city and tech ecosystem, businesses need mobile apps to compete 
              effectively, reach digital-savvy consumers, and leverage the city's innovation culture. 
              Our custom mobile app design solutions are specifically tailored for Rotterdam's unique market.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Essential Features for Rotterdam Market Apps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Market Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration with Rotterdam's local services including iDEAL, Tikkie, 
                and other popular Dutch payment systems to maximize user adoption and convenience.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• iDEAL integration</li>
                <li>• Tikkie payments</li>
                <li>• Local business APIs</li>
                <li>• Dutch services</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-language Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive multi-language support with Dutch, English, and other European 
                languages to serve Rotterdam's diverse international and local population.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Dutch (Netherlands)</li>
                <li>• English support</li>
                <li>• European languages</li>
                <li>• Cultural adaptation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Port & Logistics Features</h3>
              <p className="text-gray-600 mb-4">
                Advanced features for Rotterdam's port and logistics industry, including 
                shipment tracking, port integration, and logistics management tools.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Port integration</li>
                <li>• Shipment tracking</li>
                <li>• Logistics management</li>
                <li>• Supply chain tools</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Hub Features</h3>
              <p className="text-gray-600 mb-4">
                Built-in features for Rotterdam's innovation ecosystem, including startup 
                integration, coworking space connectivity, and collaboration tools.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Startup ecosystem</li>
                <li>• Coworking integration</li>
                <li>• Innovation tools</li>
                <li>• Community features</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pro Tips for Rotterdam Mobile App Design
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Tip #1: Integrate Dutch Payment Systems</h3>
              <p className="text-orange-800">
                Design your app to integrate seamlessly with Rotterdam's popular payment systems 
                including iDEAL and Tikkie to provide familiar and convenient payment options 
                for Dutch users.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Tip #2: Leverage Port & Logistics</h3>
              <p className="text-blue-800">
                Design your app to tap into Rotterdam's strong port and logistics industry, 
                with features that support international trade, shipping, and supply chain management.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Tip #3: Optimize for Public Transport</h3>
              <p className="text-green-800">
                Integrate with Rotterdam's public transport system for route planning, real-time 
                updates, and seamless travel experiences to enhance user convenience and engagement.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Tip #4: Ensure EU Compliance</h3>
              <p className="text-purple-800">
                Build compliance with EU regulations from the ground up, including GDPR, 
                Dutch data protection laws, and financial services regulations to ensure 
                long-term success in the Rotterdam market.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Story: RotterdamPort Connect Mobile App
          </h2>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Revolutionizing Business in Rotterdam</h3>
              <p className="text-lg mb-6">
                "Our custom mobile app has transformed how we operate in Rotterdam's competitive market. 
                User engagement increased by 175%, local payment integration improved significantly, 
                and our port integration features have been particularly successful. The app's 
                logistics tools have helped us streamline operations in Europe's largest port."
              </p>
              <div className="flex items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">MV</span>
                </div>
                <div>
                  <p className="font-semibold">Mark van der Berg</p>
                  <p className="text-orange-100">Rotterdam Business Owner & Logistics Entrepreneur</p>
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
                How can a mobile app help my business in Rotterdam?
              </h3>
              <p className="text-gray-600">
                A mobile app can help you reach Rotterdam's tech-savvy consumers, integrate with 
                local payment systems like iDEAL and Tikkie, comply with EU regulations, and 
                provide port and logistics features to enhance customer experience and drive growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What features are most important for Rotterdam market apps?
              </h3>
              <p className="text-gray-600">
                Key features include local payment integration, multi-language support, 
                port and logistics integration, and innovation ecosystem features to maximize 
                your success in Rotterdam's competitive market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can the app integrate with Rotterdam's payment systems?
              </h3>
              <p className="text-gray-600">
                Yes, we can integrate your app with major Rotterdam payment systems including 
                iDEAL, Tikkie, and other local payment methods to provide seamless payment 
                experiences for Dutch users.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does a custom Rotterdam mobile app cost?
              </h3>
              <p className="text-gray-600">
                Costs typically range from $35,000 to $85,000 depending on features and complexity. 
                We offer flexible payment plans and can start with essential features to reduce 
                initial investment.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business in Rotterdam?
            </h2>
            <p className="text-xl mb-6">
              Let's discuss how a custom mobile app can help you succeed in Rotterdam's dynamic market.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
              >
                Get Started Today
              </a>
              <a
                href="/mobile-app-design-amsterdam"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300 inline-block"
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
              href="/mobile-app-design-amsterdam"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amsterdam</h3>
              <p className="text-gray-600">Custom mobile apps for businesses in Amsterdam</p>
            </a>
            <a
              href="/mobile-app-design-the-hague"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Hague</h3>
              <p className="text-gray-600">Mobile app solutions for The Hague businesses</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignRotterdam; 