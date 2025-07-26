import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignForUrbanFarmers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mobile App Design for Urban Farmers | Nivk.com</title>
        <meta name="description" content="Transform your urban farming business with custom mobile app design. Streamline crop management, market sales, and community engagement with our specialized mobile app solutions." />
        <meta name="keywords" content="mobile app design for urban farmers, urban farming app development, crop management apps, farm-to-table apps, sustainable agriculture apps" />
        <meta property="og:title" content="Mobile App Design for Urban Farmers | Nivk.com" />
        <meta property="og:description" content="Transform your urban farming business with custom mobile app design. Streamline crop management, market sales, and community engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivk.com/mobile-app-design-for-urban-farmers" />
        <link rel="canonical" href="https://nivk.com/mobile-app-design-for-urban-farmers" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Urban Farmers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your urban farming business with custom mobile app design. Streamline crop management, 
            market sales, and community engagement with our specialized mobile app solutions.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Why Urban Farmers Need Mobile Apps</h2>
            <p className="text-green-800">
              In today's sustainable agriculture landscape, urban farmers need mobile apps to manage crops efficiently, 
              connect with local markets, and engage with their community. Our custom mobile app design solutions are 
              specifically tailored for urban farming businesses.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Essential Features for Urban Farming Apps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Crop Management & Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive crop management system with planting schedules, growth tracking, and harvest 
                planning to optimize your urban farming operations and maximize yields.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Planting schedule management</li>
                <li>• Growth tracking and monitoring</li>
                <li>• Harvest planning tools</li>
                <li>• Weather integration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market & Sales Management</h3>
              <p className="text-gray-600 mb-4">
                Streamlined market management with inventory tracking, pricing tools, and direct-to-consumer 
                sales to maximize your farm's revenue and market reach.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Inventory management</li>
                <li>• Pricing optimization</li>
                <li>• Direct sales platform</li>
                <li>• Order management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
              <p className="text-gray-600 mb-4">
                Interactive community features with CSA programs, educational content, and local market 
                connections to build strong relationships with your customers and community.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• CSA program management</li>
                <li>• Educational content</li>
                <li>• Community forums</li>
                <li>• Local market connections</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Tracking</h3>
              <p className="text-gray-600 mb-4">
                Sustainability monitoring tools with resource tracking, environmental impact assessment, and 
                certification management to demonstrate your commitment to sustainable practices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Resource usage tracking</li>
                <li>• Environmental impact metrics</li>
                <li>• Certification management</li>
                <li>• Sustainability reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pro Tips for Urban Farming App Design
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Tip #1: Focus on Crop Management</h3>
              <p className="text-green-800">
                Design intuitive crop management features with planting calendars, growth tracking, and 
                harvest scheduling to help urban farmers optimize their limited space and maximize productivity.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Tip #2: Enable Direct Market Access</h3>
              <p className="text-blue-800">
                Implement direct-to-consumer sales features with inventory management, pricing tools, and 
                order processing to help urban farmers bypass traditional distribution channels and increase profits.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Tip #3: Build Community Connections</h3>
              <p className="text-purple-800">
                Include community engagement features like CSA programs, educational content, and local 
                market connections to build strong relationships with customers and support sustainable agriculture.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Tip #4: Track Sustainability Metrics</h3>
              <p className="text-orange-800">
                Implement sustainability tracking features to monitor resource usage, environmental impact, 
                and certification compliance to demonstrate your commitment to sustainable urban agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Story: UrbanFarm Connect Mobile App
          </h2>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Revolutionizing Urban Farming Operations</h3>
              <p className="text-lg mb-6">
                "Our custom mobile app has transformed how we manage our urban farm and connect with our community. 
                Crop yields improved by 40%, direct sales increased by 200%, and our CSA membership grew significantly. 
                The app's sustainability tracking features have helped us demonstrate our environmental commitment."
              </p>
              <div className="flex items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">ML</span>
                </div>
                <div>
                  <p className="font-semibold">Maria Lopez</p>
                  <p className="text-green-100">Urban Farmer & Sustainable Agriculture Advocate</p>
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
                How can a mobile app help my urban farming business?
              </h3>
              <p className="text-gray-600">
                A mobile app can streamline crop management, optimize market sales, enhance community engagement, 
                and track sustainability metrics, ultimately increasing your farm's productivity and profitability 
                while supporting sustainable urban agriculture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What features are most important for urban farming apps?
              </h3>
              <p className="text-gray-600">
                Key features include crop management tools, market and sales platforms, community engagement 
                features, and sustainability tracking to maximize your urban farming business potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can the app integrate with existing farming equipment?
              </h3>
              <p className="text-gray-600">
                Yes, we can integrate your app with various farming technologies including irrigation systems, 
                weather stations, and monitoring devices to create a comprehensive urban farming management solution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does a custom urban farming mobile app cost?
              </h3>
              <p className="text-gray-600">
                Costs typically range from $25,000 to $70,000 depending on features and complexity. We offer 
                flexible payment plans and can start with essential features to reduce initial investment.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Urban Farming Business?
            </h2>
            <p className="text-xl mb-6">
              Let's discuss how a custom mobile app can enhance your crop management and boost your market reach.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
              >
                Get Started Today
              </a>
              <a
                href="/mobile-app-design-for-organic-farms"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300 inline-block"
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
              href="/mobile-app-design-for-organic-farms"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organic Farms</h3>
              <p className="text-gray-600">Custom mobile apps for organic farming and sustainable agriculture</p>
            </a>
            <a
              href="/mobile-app-design-for-food-delivery-services"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Food Delivery Services</h3>
              <p className="text-gray-600">Mobile app solutions for farm-to-table delivery and food distribution</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForUrbanFarmers; 