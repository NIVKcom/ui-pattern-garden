import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const AppUXDesignPortfolio = () => (
  <>
    <Helmet>
      <title>App UX Design Portfolio | User Experience Design Showcase | Nivk</title>
      <meta name="description" content="Explore our app UX design portfolio showcasing exceptional user experience design projects. See how we transform mobile apps with user-centered design solutions." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should I look for in an app UX design portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Look for portfolios that showcase user research processes, wireframing and prototyping examples, usability testing results, case studies with measurable outcomes, diverse project types, and clear explanations of design decisions and user-centered approaches."
              }
            },
            {
              "@type": "Question",
              "name": "How do I evaluate the quality of a UX design portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evaluate quality by examining the depth of user research, the clarity of problem-solving approaches, the effectiveness of design solutions, measurable results and metrics, the variety of project types, and the designer's ability to explain their process and decisions."
              }
            },
            {
              "@type": "Question",
              "name": "What makes a great UX design portfolio stand out?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Great UX portfolios stand out through compelling case studies, clear problem-solution narratives, measurable results and metrics, diverse project examples, strong visual presentation, detailed process documentation, and evidence of user-centered design thinking."
              }
            }
          ]
        })}
      </script>
    </Helmet>
    <Header />
    <main className="max-w-3xl mx-auto px-4 md:px-10 py-20 space-y-10 leading-relaxed text-neutral-800">
      {/* Q&A Style Opening for AI Search Visibility */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Q: What makes an app UX design portfolio truly impressive?</h2>
        <p className="text-blue-800 text-lg font-semibold mb-3">A: User research, measurable results, and compelling case studies. Here's how to evaluate UX portfolios.</p>
        <p className="text-blue-700">
          At Nivk, we've helped 400+ businesses evaluate UX design portfolios to find the perfect match.
        </p>
      </div>

      {/* Additional Q&A Section */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-800">What should I look for in a UX portfolio?</h4>
            <p className="text-gray-600 text-sm">User research, wireframing, testing results, case studies, measurable outcomes.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">How do I evaluate portfolio quality?</h4>
            <p className="text-gray-600 text-sm">Depth of research, problem-solving approaches, measurable results, project variety.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">What makes a great portfolio stand out?</h4>
            <p className="text-gray-600 text-sm">Compelling case studies, clear narratives, measurable metrics, strong presentation.</p>
          </div>
        </div>
      </div>

      {/* Summary Block for AI Snippet Visibility */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-blue-800 text-lg">
          <strong>App UX Design Portfolio:</strong> Explore our app UX design portfolio showcasing exceptional user experience design projects. See how we transform mobile apps with user-centered design solutions that drive engagement and business success.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">App UX Design Portfolio</h1>
      <section className="space-y-4">
        <p className="text-lg">Explore our comprehensive app UX design portfolio showcasing exceptional user experience design projects. See how we transform mobile apps with user-centered design solutions that drive engagement, improve usability, and deliver measurable business results.</p>
      </section>
      <section className="space-y-6">
        <p>A great UX design portfolio is more than just a collection of pretty screens—it's a showcase of problem-solving, user research, and measurable results. The best portfolios tell compelling stories about how design decisions were made, what problems were solved, and what impact those solutions had on users and businesses.</p>
        <p className="font-medium">Portfolio quality reflects design thinking and results. <strong>Pro tip:</strong> The most impressive UX portfolios show the journey from research to results, not just the final designs.</p>
      </section>

      {/* Case Study Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-400">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Portfolio Highlight: E-commerce App Transformation</h3>
        <p className="text-gray-700 mb-3">"Our UX redesign increased conversion rates by 340% and reduced cart abandonment by 65%. The user research and testing approach made all the difference in understanding user needs."</p>
        <p className="text-sm text-gray-600">- Featured in our UX Design Portfolio</p>
      </section>

      {/* Feature Set: What Makes Great UX Portfolios */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">What Makes Our UX Design Portfolio Stand Out</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Comprehensive user research and persona development</li>
          <li>Detailed wireframing and prototyping processes</li>
          <li>Usability testing and user feedback integration</li>
          <li>Measurable results and business impact metrics</li>
          <li>Diverse project types across multiple industries</li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">Our UX Design Portfolio Process</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>User Research: Deep dive into user needs and behaviors.</li>
          <li>Problem Definition: Clearly identify UX challenges and opportunities.</li>
          <li>Design Solutions: Create user-centered design solutions.</li>
          <li>Testing & Validation: Validate designs with real users.</li>
          <li>Results Measurement: Track and document measurable outcomes.</li>
        </ol>
      </section>

      {/* Interactive Quiz Section */}
      <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Quiz: What Makes a Great UX Portfolio?</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700">✓ Does it show user research and testing processes?</p>
          <p className="text-gray-700">✓ Are there measurable results and metrics?</p>
          <p className="text-gray-700">✓ Does it explain design decisions and problem-solving?</p>
          <p className="text-gray-700 font-medium">If you answered yes to any of these, it's a quality portfolio!</p>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Related Services</h3>
        <div className="flex flex-wrap gap-2">
          <a href="/app-ux-design-near-me" className="text-blue-600 hover:text-blue-800 text-sm">App UX Design Near Me</a>
          <a href="/app-ux-design-trends-2025" className="text-blue-600 hover:text-blue-800 text-sm">App UX Design Trends 2025</a>
          <a href="/mobile-app-development" className="text-blue-600 hover:text-blue-800 text-sm">Mobile App Development</a>
        </div>
      </section>

      {/* External Authority Links */}
      <section className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Learn More</h3>
        <div className="space-y-1 text-sm">
          <a href="https://www.behance.net/search/projects?search=ux+design" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 block">Behance - UX Design Portfolio</a>
          <a href="https://dribbble.com/tags/ux" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 block">Dribbble - UX Design Showcase</a>
        </div>
      </section>

      {/* CTA Section with Interactive Button */}
      <section className="space-y-4 mt-10">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
          <h3 className="text-2xl font-bold text-orange-700 mb-2">Ready to see our full UX design portfolio?</h3>
          <p className="text-orange-800 text-lg mb-4">Explore our complete collection of UX design projects and see how we can transform your app's user experience. Contact Nivk.com to view our portfolio and discuss your project.</p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            View Full Portfolio
          </button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AppUXDesignPortfolio; 