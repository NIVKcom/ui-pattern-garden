import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignUbud: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Summary Block for AI Snippet Visibility */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <p className="text-blue-800 text-lg">
            <strong>Expert Mobile App Design in Ubud:</strong> Nivk.com delivers world-class mobile app design services tailored for Ubud's innovative tech ecosystem. From wellness platforms to cultural tourism solutions, we create apps that resonate with Indonesian users and drive business growth in Bali's most dynamic digital hub.
          </p>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mobile App Design Ubud: Expert App Development for Bali
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Transform your business with professional mobile app design services in Ubud. Nivk.com specializes in creating innovative, user-centric mobile applications that drive engagement and deliver measurable results in Indonesia's competitive digital landscape.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Nivk for Mobile App Design in Ubud?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Market Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep understanding of Indonesian user behavior</li>
                <li>• Compliance with Indonesian regulations and standards</li>
                <li>• Integration with popular Indonesian platforms (GoPay, OVO)</li>
                <li>• Cultural adaptation for Balinese market</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Modern React Native and Flutter development</li>
                <li>• Optimized performance for Indonesian networks</li>
                <li>• Multi-language support (Indonesian, English)</li>
                <li>• Scalable architecture for rapid growth</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Ubud Mobile App Design Services
          </h2>

          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
              <p className="text-gray-700 mb-4">
                Create intuitive, visually appealing interfaces that align with Ubud's design-forward culture and user expectations. Our designs prioritize innovation while maintaining exceptional usability.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• User research and persona development</li>
                <li>• Wireframing and prototyping</li>
                <li>• Visual design and branding</li>
                <li>• User testing and optimization</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Development & Implementation</h3>
              <p className="text-gray-700 mb-4">
                Build robust, scalable mobile applications using cutting-edge technologies and best practices for the Ubud market.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Cross-platform development (iOS/Android)</li>
                <li>• Backend integration and API development</li>
                <li>• Payment system integration (GoPay, OVO, Stripe)</li>
                <li>• Performance optimization and testing</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Market Strategy & Launch</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive support for launching and promoting your app in the competitive Ubud market.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• App Store optimization (ASO)</li>
                <li>• Marketing strategy development</li>
                <li>• User acquisition planning</li>
                <li>• Analytics and performance tracking</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Ubud's Mobile App Market: Key Insights
          </h2>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">Market Overview</h3>
            <p className="text-yellow-800 mb-4">
              Ubud is Bali's cultural heart and a growing digital nomad hub with a thriving wellness and tourism ecosystem. The city's diverse, tech-savvy population expects cutting-edge mobile experiences with seamless functionality and innovative features.
            </p>
            <ul className="text-yellow-800 space-y-2">
              <li>• Growing smartphone penetration (80%+)</li>
              <li>• Strong preference for Android devices</li>
              <li>• High adoption of mobile payments and digital services</li>
              <li>• Demand for wellness, tourism, and cultural features</li>
            </ul>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Industries We Serve in Ubud
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Wellness & Holistic Health</h3>
              <p className="text-blue-800 mb-3">
                Wellness applications, holistic health platforms, and spiritual services tailored for Ubud's renowned wellness community and healing tourism.
              </p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Yoga and meditation apps</li>
                <li>• Wellness retreat platforms</li>
                <li>• Healing and therapy apps</li>
                <li>• Spiritual development tools</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Cultural Tourism & Arts</h3>
              <p className="text-green-800 mb-3">
                Cultural tourism applications, arts platforms, and heritage services for Ubud's rich cultural heritage and artistic community.
              </p>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Cultural experience apps</li>
                <li>• Art gallery platforms</li>
                <li>• Traditional craft marketplaces</li>
                <li>• Heritage tour applications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Eco-Tourism & Sustainability</h3>
              <p className="text-purple-800 mb-3">
                Eco-tourism applications, sustainability platforms, and environmental services for Ubud's commitment to sustainable practices.
              </p>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Eco-tourism booking apps</li>
                <li>• Sustainable living platforms</li>
                <li>• Environmental awareness tools</li>
                <li>• Green transportation apps</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Digital Nomad & Remote Work</h3>
              <p className="text-orange-800 mb-3">
                Remote work applications, digital nomad platforms, and coworking solutions for Ubud's growing community of location-independent professionals.
              </p>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Coworking space apps</li>
                <li>• Remote work tools</li>
                <li>• Digital nomad communities</li>
                <li>• Productivity platforms</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Ubud App Design Process
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Discovery & Research</h3>
                <p className="text-gray-700">
                  We begin by understanding your business goals, target audience, and the unique challenges of the Ubud market. This includes competitor analysis and user research specific to the Indonesian market.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategy & Planning</h3>
                <p className="text-gray-700">
                  Based on our research, we develop a comprehensive strategy that addresses the specific needs of Indonesian users, including feature prioritization and technical architecture planning.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Design & Prototyping</h3>
                <p className="text-gray-700">
                  Our design team creates intuitive, visually appealing interfaces that align with Ubud's design standards and user expectations. We focus on creating seamless user experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Development & Testing</h3>
                <p className="text-gray-700">
                  Our development team builds your app using modern technologies and best practices. We conduct thorough testing to ensure optimal performance and user experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Launch & Optimization</h3>
                <p className="text-gray-700">
                  We help you launch your app successfully in the Ubud market, including App Store optimization, marketing support, and ongoing performance monitoring.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Ubud Businesses Choose Nivk
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation Focus</h3>
              <p className="text-gray-700">
                We stay ahead of the latest mobile app trends and technologies, ensuring your app remains competitive in Ubud's fast-paced tech environment.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of Ubud's unique market dynamics, user behavior, and competitive landscape.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-700">
                Track record of successful app launches and measurable business growth for Ubud-based companies.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Build Your Mobile App in Ubud?
            </h2>
            <p className="text-gray-700 mb-6">
              Partner with Nivk.com to create a mobile app that dominates the Ubud market. Our expertise in Indonesian user behavior, local regulations, and technical excellence ensures your app's success.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800">
                Get Started Today: Free Consultation & Quote
              </p>
              <p className="text-gray-600">
                Contact us to discuss your project requirements and receive a detailed proposal tailored for the Ubud market.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignUbud; 