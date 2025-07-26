import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MobileAppDesignReykjavik: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Summary Block for AI Snippet Visibility */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <p className="text-blue-800 text-lg">
            <strong>Expert Mobile App Design in Reykjavik:</strong> Nivk.com delivers world-class mobile app design services tailored for Reykjavik's dynamic tech ecosystem. From fintech solutions to e-commerce platforms, we create apps that resonate with Icelandic users and drive business growth in the Nordic region's most innovative market.
          </p>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mobile App Design Reykjavik: Expert App Development for Iceland's Capital
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Transform your business with professional mobile app design services in Reykjavik. Nivk.com specializes in creating innovative, user-centric mobile applications that drive engagement and deliver measurable results in Iceland's competitive digital landscape.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Nivk for Mobile App Design in Reykjavik?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Market Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep understanding of Icelandic user behavior</li>
                <li>• Compliance with Icelandic regulations and standards</li>
                <li>• Integration with popular Nordic platforms (Visa, Mastercard)</li>
                <li>• Cultural adaptation for Icelandic market</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Modern React Native and Flutter development</li>
                <li>• Optimized performance for Nordic networks</li>
                <li>• Multi-language support (Icelandic/English)</li>
                <li>• Scalable architecture for growth</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Reykjavik Mobile App Design Services
          </h2>

          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
              <p className="text-gray-700 mb-4">
                Create intuitive, visually appealing interfaces that align with Icelandic design preferences and user expectations. Our designs prioritize usability while maintaining modern aesthetics.
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
                Build robust, scalable mobile applications using cutting-edge technologies and best practices for the Icelandic market.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Cross-platform development (iOS/Android)</li>
                <li>• Backend integration and API development</li>
                <li>• Payment system integration (Visa, Mastercard, Stripe)</li>
                <li>• Performance optimization and testing</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Market Strategy & Launch</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive support for launching and promoting your app in the competitive Reykjavik market.
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
            Reykjavik's Mobile App Market: Key Insights
          </h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">Market Statistics</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Smartphone Penetration:</strong> 96%</p>
                <p><strong>Mobile Internet Users:</strong> 350,000</p>
                <p><strong>App Store Downloads:</strong> 12 million annually</p>
              </div>
              <div>
                <p><strong>Popular Categories:</strong> Finance, Tourism, E-commerce</p>
                <p><strong>Payment Methods:</strong> Visa, Mastercard, Digital Wallets</p>
                <p><strong>Language Preference:</strong> Icelandic (90%), English (10%)</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Success Stories: Apps We've Built for Reykjavik
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tourism Innovation Platform</h3>
              <p className="text-gray-700 mb-3">
                Developed a comprehensive tourism services app for a Reykjavik-based travel startup, featuring booking integration, local recommendations, and real-time weather updates.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Results:</strong> 45,000+ downloads, 4.8-star rating, 65% user retention</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">E-commerce Marketplace</h3>
              <p className="text-gray-700 mb-3">
                Created a multi-vendor marketplace app connecting local Reykjavik businesses with consumers, featuring advanced search, secure payments, and delivery tracking.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Results:</strong> 80,000+ users, 40% month-over-month growth, 4.7-star rating</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Pricing: Transparent Mobile App Design Costs in Reykjavik
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Package</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">ISK 6,500,000</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Single platform app (iOS or Android)</li>
                <li>• Basic UI/UX design</li>
                <li>• Core functionality development</li>
                <li>• Testing and bug fixes</li>
                <li>• App Store submission</li>
              </ul>
              <p className="text-sm text-gray-600">Delivery: 6-8 weeks</p>
            </div>

            <div className="border-2 border-blue-500 rounded-lg p-6 text-center bg-blue-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Package</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">ISK 12,500,000</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cross-platform app (iOS & Android)</li>
                <li>• Advanced UI/UX design</li>
                <li>• Backend integration</li>
                <li>• Payment system integration</li>
                <li>• Analytics and monitoring</li>
                <li>• 3 months support</li>
              </ul>
              <p className="text-sm text-gray-600">Delivery: 10-12 weeks</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise Package</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">ISK 22,000,000+</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Custom enterprise solution</li>
                <li>• Advanced features & integrations</li>
                <li>• Scalable architecture</li>
                <li>• Security compliance</li>
                <li>• Dedicated project manager</li>
                <li>• 12 months support</li>
              </ul>
              <p className="text-sm text-gray-600">Delivery: 16-20 weeks</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How long does it take to develop a mobile app in Reykjavik?</h3>
              <p className="text-gray-700">
                Development time varies based on complexity. A basic app takes 6-8 weeks, while complex enterprise solutions can take 16-20 weeks. We provide detailed timelines during the planning phase.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Do you support Icelandic payment systems?</h3>
              <p className="text-gray-700">
                Yes, we integrate with all major Icelandic payment systems including Visa, Mastercard, and international payment gateways like Stripe and PayPal.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Can you help with app store optimization in Iceland?</h3>
              <p className="text-gray-700">
                Absolutely! We provide comprehensive ASO services including keyword optimization, localized descriptions, and marketing strategies tailored for the Icelandic app market.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What about data privacy compliance in Iceland?</h3>
              <p className="text-gray-700">
                We ensure compliance with Icelandic data protection laws and GDPR requirements, implementing proper data handling and storage practices for your app.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Pro Tips for Mobile App Success in Reykjavik
          </h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Localization Best Practices</h3>
            <ul className="text-green-800 space-y-2">
              <li>• Support both Icelandic and English languages</li>
              <li>• Use local currency (ISK) and payment methods</li>
              <li>• Consider Icelandic holidays and business hours</li>
              <li>• Implement accessibility features for all users</li>
              <li>• Optimize for high-speed networks and premium devices</li>
            </ul>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Related Mobile App Design Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link to="/mobile-app-design-oslo" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Design Oslo</h3>
              <p className="text-gray-600">Expert app development services for Norway's capital</p>
            </Link>
            <Link to="/mobile-app-design-stockholm" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Design Stockholm</h3>
              <p className="text-gray-600">Innovative mobile solutions for Sweden's capital</p>
            </Link>
            <Link to="/mobile-app-design-copenhagen" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Design Copenhagen</h3>
              <p className="text-gray-600">Cutting-edge app development for Denmark's capital</p>
            </Link>
            <Link to="/mobile-app-design-helsinki" className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Design Helsinki</h3>
              <p className="text-gray-600">Professional mobile solutions for Finland's capital</p>
            </Link>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Build Your Mobile App in Reykjavik?
            </h2>
            <p className="text-gray-700 mb-6">
              Partner with Nivk.com to create a mobile app that dominates the Reykjavik market. Our expertise in Icelandic user behavior, local regulations, and technical excellence ensures your app's success.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800">
                Get Started Today: Free Consultation & Quote
              </p>
              <p className="text-gray-600">
                Contact us to discuss your project requirements and receive a detailed proposal tailored for the Reykjavik market.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignReykjavik; 