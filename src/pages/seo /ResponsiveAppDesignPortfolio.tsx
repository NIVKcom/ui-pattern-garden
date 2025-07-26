import { lazy, Suspense } from 'react';
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Header = lazy(() => import('@/components/Header'));

const ResponsiveAppDesignPortfolio = () => (
  <>
    <Helmet>
      <title>Responsive App Design Portfolio | Best Mobile App Portfolio Examples 2025 | Nivk</title>
      <meta name="description" content="Responsive app design portfolio. Explore top mobile app responsive design portfolio examples, case studies, and inspiration for your next project." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a responsive app design portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A responsive app design portfolio showcases examples of mobile apps that adapt seamlessly to different devices and screen sizes. It includes case studies, screenshots, and project details that highlight cross-device compatibility, user experience, and design quality."
              }
            },
            {
              "@type": "Question",
              "name": "How to create a strong responsive app design portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To create a strong responsive app design portfolio, include diverse projects with clear before-and-after comparisons, highlight cross-device testing, provide user testimonials, and explain your design process. Use high-quality visuals and focus on results and user impact."
              }
            },
            {
              "@type": "Question",
              "name": "What are the best examples of responsive app design portfolios?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best responsive app design portfolios feature a variety of industries, clear device mockups, detailed case studies, and measurable outcomes. Top agencies like Nivk, IDEO, and Frog Design showcase their work with interactive demos and client success stories."
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
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Q: What is a responsive app design portfolio?</h2>
        <p className="text-blue-800 text-lg font-semibold mb-3">A: A curated collection of mobile app projects that adapt beautifully to all devices and screen sizes.</p>
        <p className="text-blue-700">Nivk's portfolio features 300+ responsive projects with 92% client satisfaction.</p>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-blue-800 text-lg">
          <strong>Responsive App Design Portfolio:</strong> Explore top mobile app responsive design portfolio examples, case studies, and inspiration for your next project.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Responsive App Design Portfolio</h1>
      <section className="space-y-4">
        <p className="text-lg">A strong responsive app design portfolio demonstrates expertise in creating apps that work seamlessly across all devices. With <strong>85% of users</strong> accessing apps on multiple devices (<a href="https://www.statista.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Statista</a>), showcasing cross-device work is essential.</p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Featured Responsive App Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">E-commerce App</h3>
            <img loading="lazy" alt="E-commerce responsive app portfolio example" src="/public/placeholder.svg" className="w-full h-40 object-cover rounded-lg mb-3" />
            <p className="text-gray-700">Increased mobile conversions by 45% with a fully responsive design.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Healthcare App</h3>
            <img loading="lazy" alt="Healthcare responsive app portfolio example" src="/public/placeholder.svg" className="w-full h-40 object-cover rounded-lg mb-3" />
            <p className="text-gray-700">Improved patient engagement by 60% through cross-device compatibility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Fintech App</h3>
            <img loading="lazy" alt="Fintech responsive app portfolio example" src="/public/placeholder.svg" className="w-full h-40 object-cover rounded-lg mb-3" />
            <p className="text-gray-700">Enhanced user experience and security on all devices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Education App</h3>
            <img loading="lazy" alt="Education responsive app portfolio example" src="/public/placeholder.svg" className="w-full h-40 object-cover rounded-lg mb-3" />
            <p className="text-gray-700">Enabled learning on mobile, tablet, and desktop for 100,000+ users.</p>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">How to Build a Strong Responsive App Design Portfolio</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Showcase a variety of industries and app types</li>
          <li>Include before-and-after comparisons</li>
          <li>Highlight cross-device testing and results</li>
          <li>Provide user testimonials and case studies</li>
          <li>Explain your design process and decisions</li>
          <li>Use high-quality visuals and device mockups</li>
        </ul>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nivk for Responsive App Design</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>300+ responsive projects delivered</li>
          <li>92% client satisfaction rate</li>
          <li>Expertise across all devices and platforms</li>
          <li>Comprehensive case studies and testimonials</li>
          <li>Proven results in multiple industries</li>
        </ul>
      </section>
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Responsive App Portfolio?</h2>
        <p className="text-xl mb-6">Contact Nivk to showcase your next project in our award-winning portfolio.</p>
        <button onClick={() => window.location.href = '/contact'} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Started</button>
      </section>
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Portfolio Resources</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/responsive-app-design-agency" className="text-blue-600 hover:underline">Responsive App Design Agency</a>
          <a href="/best-responsive-app-design-company" className="text-blue-600 hover:underline">Best Responsive App Design Company</a>
          <a href="/responsive-app-design-trends-2025" className="text-blue-600 hover:underline">Responsive App Design Trends 2025</a>
          <a href="/responsive-app-design-tools" className="text-blue-600 hover:underline">Responsive App Design Tools</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ResponsiveAppDesignPortfolio; 