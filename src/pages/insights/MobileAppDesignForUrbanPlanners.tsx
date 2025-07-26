import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDesignForUrbanPlanners: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mobile App Design for Urban Planners | Nivk.com</title>
        <meta name="description" content="Transform your urban planning business with custom mobile app design. Streamline project management, community engagement, and data visualization with our specialized mobile app solutions." />
        <meta name="keywords" content="mobile app design for urban planners, urban planning app development, project management apps, community engagement apps, city planning apps" />
        <meta property="og:title" content="Mobile App Design for Urban Planners | Nivk.com" />
        <meta property="og:description" content="Transform your urban planning business with custom mobile app design. Streamline project management, community engagement, and data visualization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivk.com/mobile-app-design-for-urban-planners" />
        <link rel="canonical" href="https://nivk.com/mobile-app-design-for-urban-planners" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile App Design for Urban Planners
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your urban planning business with custom mobile app design. Streamline project management, 
            community engagement, and data visualization with our specialized mobile app solutions.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Urban Planners Need Mobile Apps</h2>
            <p className="text-blue-800">
              In today's smart city landscape, urban planners need mobile apps to manage projects efficiently, 
              engage with communities, and visualize complex data. Our custom mobile app design solutions are 
              specifically tailored for urban planning professionals.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Essential Features for Urban Planning Apps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management & Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive project management tools with timeline tracking, resource allocation, and milestone 
                management to streamline urban planning projects and ensure timely delivery.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Project timeline management</li>
                <li>• Resource allocation tracking</li>
                <li>• Milestone monitoring</li>
                <li>• Budget management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
              <p className="text-gray-600 mb-4">
                Interactive community engagement platform with public consultations, feedback collection, and 
                stakeholder communication to ensure inclusive and transparent urban planning processes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Public consultation tools</li>
                <li>• Feedback collection</li>
                <li>• Stakeholder communication</li>
                <li>• Community forums</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Visualization & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced data visualization tools with interactive maps, demographic analysis, and real-time 
                analytics to support evidence-based urban planning decisions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Interactive mapping</li>
                <li>• Demographic analysis</li>
                <li>• Real-time analytics</li>
                <li>• Data reporting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">
                Regulatory compliance management with permit tracking, zoning information, and environmental 
                assessment tools to ensure projects meet all legal and regulatory requirements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Permit tracking</li>
                <li>• Zoning information</li>
                <li>• Environmental assessments</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pro Tips for Urban Planning App Design
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Tip #1: Prioritize Data Visualization</h3>
              <p className="text-blue-800">
                Design intuitive data visualization features with interactive maps, charts, and analytics 
                to help urban planners present complex information clearly and make informed decisions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Tip #2: Enable Community Collaboration</h3>
              <p className="text-green-800">
                Implement comprehensive community engagement tools with public consultations, feedback systems, 
                and stakeholder communication to ensure inclusive and transparent planning processes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Tip #3: Streamline Project Management</h3>
              <p className="text-purple-800">
                Include robust project management features with timeline tracking, resource allocation, and 
                milestone monitoring to ensure urban planning projects are completed efficiently and on time.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Tip #4: Ensure Regulatory Compliance</h3>
              <p className="text-orange-800">
                Build compliance management features with permit tracking, zoning information, and environmental 
                assessment tools to help urban planners navigate complex regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Story: UrbanPlan Connect Mobile App
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Revolutionizing Urban Planning Operations</h3>
              <p className="text-lg mb-6">
                "Our custom mobile app has transformed how we manage urban planning projects and engage with communities. 
                Project efficiency improved by 150%, community engagement increased by 200%, and our data visualization 
                capabilities have made complex planning information accessible to all stakeholders."
              </p>
              <div className="flex items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">RJ</span>
                </div>
                <div>
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-blue-100">Urban Planner & Smart City Consultant</p>
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
                How can a mobile app help my urban planning business?
              </h3>
              <p className="text-gray-600">
                A mobile app can streamline project management, enhance community engagement, improve data 
                visualization, and ensure regulatory compliance, ultimately making urban planning processes 
                more efficient and inclusive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What features are most important for urban planning apps?
              </h3>
              <p className="text-gray-600">
                Key features include project management tools, community engagement platforms, data visualization 
                capabilities, and regulatory compliance management to maximize your urban planning business potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can the app integrate with existing GIS and planning software?
              </h3>
              <p className="text-gray-600">
                Yes, we can integrate your app with various GIS platforms, CAD software, and planning tools 
                to create a comprehensive urban planning management solution that works with your existing workflow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does a custom urban planning mobile app cost?
              </h3>
              <p className="text-gray-600">
                Costs typically range from $35,000 to $90,000 depending on features and complexity. We offer 
                flexible payment plans and can start with essential features to reduce initial investment.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Urban Planning Business?
            </h2>
            <p className="text-xl mb-6">
              Let's discuss how a custom mobile app can enhance your project management and community engagement.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
              >
                Get Started Today
              </a>
              <a
                href="/mobile-app-design-for-consultants"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 inline-block"
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
              href="/mobile-app-design-for-consultants"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultants</h3>
              <p className="text-gray-600">Custom mobile apps for consulting and professional services</p>
            </a>
            <a
              href="/mobile-app-design-for-architects"
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Architects</h3>
              <p className="text-gray-600">Mobile app solutions for architectural design and project management</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignForUrbanPlanners; 