import { lazy, Suspense } from 'react';
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Header = lazy(() => import('@/components/Header'));

const AppUIRedesignAgency = () => (
  <>
    <Helmet>
      <title>App UI Redesign Agency | Mobile App UI Design Services 2025 | Nivk</title>
      <meta name="description" content="App UI redesign agency. Professional mobile app UI redesign services to modernize your app's visual design, improve user interface, and enhance brand consistency." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is an app UI redesign agency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An app UI redesign agency specializes in modernizing and improving the visual design of mobile applications, focusing on user interface elements, visual hierarchy, and brand consistency."
              }
            },
            {
              "@type": "Question",
              "name": "How much does app UI redesign cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "App UI redesign costs typically range from $8,000 to $35,000 depending on app complexity, number of screens, design system requirements, and the extent of visual improvements needed."
              }
            },
            {
              "@type": "Question",
              "name": "What are the benefits of app UI redesign?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Benefits include improved user engagement, better brand perception, increased conversion rates, modern visual appeal, enhanced accessibility, and competitive advantage in the market."
              }
            }
          ]
        })}
      </script>
    </Helmet>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
    <main className="max-w-3xl mx-auto px-4 md:px-10 py-20 space-y-10 leading-relaxed text-neutral-800">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Q: What is an app UI redesign agency?</h2>
        <p className="text-blue-800 text-lg font-semibold mb-3">A: Specialized agency that modernizes and improves the visual design of mobile applications, focusing on user interface elements and brand consistency.</p>
        <p className="text-blue-700">Nivk has redesigned 200+ app UIs with 95% client satisfaction and 40% average improvement in user engagement.</p>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-blue-800 text-lg">
          <strong>App UI Redesign Agency:</strong> Professional mobile app UI redesign services to modernize your app's visual design, improve user interface, and enhance brand consistency.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">App UI Redesign Agency</h1>
      <section className="space-y-4">
        <p className="text-lg">Transform your app's visual appeal with professional UI redesign services. With <strong>75% of users</strong> judging app credibility based on design (<a href="https://www.statista.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Statista</a>), modern UI design is crucial for success.</p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">UI Redesign Services</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete UI Overhaul</h3>
            <p className="text-gray-600 mb-3">Starting at $15,000</p>
            <p className="text-gray-700 mb-3">Comprehensive UI redesign with modern design systems and visual improvements.</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Complete visual redesign</li>
              <li>• Modern design system creation</li>
              <li>• Color palette optimization</li>
              <li>• Typography improvements</li>
              <li>• Icon and illustration design</li>
              <li>• Brand consistency enhancement</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Quote</button>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Component Redesign</h3>
            <p className="text-gray-600 mb-3">Starting at $8,000</p>
            <p className="text-gray-700 mb-3">Targeted redesign of specific UI components and elements.</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Button and form redesign</li>
              <li>• Navigation improvements</li>
              <li>• Card and list layouts</li>
              <li>• Modal and dialog design</li>
              <li>• Loading states and animations</li>
              <li>• Error state improvements</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Quote</button>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Brand Refresh</h3>
            <p className="text-gray-600 mb-3">Starting at $12,000</p>
            <p className="text-gray-700 mb-3">UI redesign focused on brand alignment and visual consistency.</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Brand color integration</li>
              <li>• Logo and branding updates</li>
              <li>• Visual identity alignment</li>
              <li>• Style guide creation</li>
              <li>• Brand asset optimization</li>
              <li>• Marketing material consistency</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Quote</button>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">UI Redesign Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Discovery & Analysis</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Current UI audit</li>
              <li>• Competitor analysis</li>
              <li>• User feedback review</li>
              <li>• Brand assessment</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Design Strategy</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Visual direction planning</li>
              <li>• Design system creation</li>
              <li>• Component architecture</li>
              <li>• Style guide development</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Visual Design</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• High-fidelity mockups</li>
              <li>• Interactive prototypes</li>
              <li>• Animation design</li>
              <li>• Asset creation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Implementation</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Developer handoff</li>
              <li>• Design system documentation</li>
              <li>• Quality assurance</li>
              <li>• Launch support</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Benefits of UI Redesign</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">User Experience</h3>
            <p className="text-gray-700">Improved visual clarity, better navigation, and enhanced user engagement through modern design principles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Brand Perception</h3>
            <p className="text-gray-700">Enhanced brand credibility, professional appearance, and improved market positioning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance</h3>
            <p className="text-gray-700">Increased conversion rates, higher user retention, and improved app store ratings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Competitive Edge</h3>
            <p className="text-gray-700">Modern design that stands out from competitors and meets current design trends.</p>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">UI Redesign Success Stories</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">E-commerce App - 50% Conversion Increase</h3>
            <p className="text-gray-700">UI redesign led to 50% increase in conversion rates and 35% improvement in user session duration.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Banking App - 4.8 Star Rating</h3>
            <p className="text-gray-700">Modern UI redesign achieved 4.8-star app store rating and 60% increase in user satisfaction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Fitness App - 80% User Retention</h3>
            <p className="text-gray-700">Visual redesign resulted in 80% user retention improvement and 45% increase in daily active users.</p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Redesign Your App UI?</h2>
        <p className="text-xl mb-6">Get started with Nivk's professional UI redesign services today.</p>
        <button onClick={() => window.location.href = '/contact'} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Started</button>
      </section>
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Related UI Redesign Resources</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/app-ux-redesign-agency" className="text-blue-600 hover:underline">App UX Redesign Agency</a>
          <a href="/app-ui-ux-redesign-agency" className="text-blue-600 hover:underline">App UI UX Redesign Agency</a>
          <a href="/app-design-consultant" className="text-blue-600 hover:underline">App Design Consultant</a>
          <a href="/app-design-pricing-2025" className="text-blue-600 hover:underline">App Design Pricing 2025</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AppUIRedesignAgency; 