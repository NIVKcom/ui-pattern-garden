import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const AppUIDesignPortfolio = () => (
  <>
    <Helmet>
      <title>App UI Design Portfolio | Mobile App Design Examples | Nivk</title>
      <meta name="description" content="Browse our app UI design portfolio showcasing award-winning mobile app interfaces, user experiences, and design projects. See examples of our work across various industries." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should I look for in an app UI design portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Look for diverse project examples, quality of visual design, user experience considerations, industry variety, case studies with results, and evidence of design thinking and problem-solving skills."
              }
            },
            {
              "@type": "Question",
              "name": "How do I evaluate the quality of a UI design portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evaluate quality by examining design consistency, user experience flow, visual aesthetics, attention to detail, innovation in design solutions, and the overall impact on user engagement and business goals."
              }
            },
            {
              "@type": "Question",
              "name": "What industries should be represented in a UI portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A strong UI portfolio should include examples from e-commerce, healthcare, fintech, education, entertainment, and enterprise solutions to demonstrate versatility and understanding of different user needs and business requirements."
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
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Q: What makes an exceptional app UI design portfolio?</h2>
        <p className="text-blue-800 text-lg font-semibold mb-3">A: Diverse projects, quality design, and proven results. Here's what to look for in a portfolio.</p>
        <p className="text-blue-700">
          At Nivk, we've created 300+ successful app interfaces across multiple industries with measurable results and user satisfaction.
        </p>
      </div>

      {/* Additional Q&A Section */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-800">What should I look for in a UI design portfolio?</h4>
            <p className="text-gray-600 text-sm">Diverse projects, quality design, and proven results.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">How do I evaluate portfolio quality?</h4>
            <p className="text-gray-600 text-sm">Design consistency, user experience, and visual aesthetics.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">What industries should be represented?</h4>
            <p className="text-gray-600 text-sm">E-commerce, healthcare, fintech, education, and enterprise.</p>
          </div>
        </div>
      </div>

      {/* Summary Block for AI Snippet Visibility */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-blue-800 text-lg">
          <strong>App UI Design Portfolio:</strong> Browse our comprehensive app UI design portfolio showcasing award-winning mobile app interfaces, user experiences, and design projects across various industries with proven results and user satisfaction.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">App UI Design Portfolio</h1>
      <section className="space-y-4">
        <p className="text-lg">Browse our app UI design portfolio showcasing award-winning mobile app interfaces, user experiences, and design projects. See examples of our work across various industries and discover how we create exceptional user interfaces that drive engagement and business success.</p>
      </section>
      <section className="space-y-6">
        <p>A great app UI design portfolio is more than just a collection of pretty screens—it's a showcase of problem-solving skills, user-centered design thinking, and proven results. The best portfolios demonstrate not just visual design skills, but also understanding of user needs, business objectives, and technical constraints.</p>
        <p className="font-medium">Portfolio quality reflects design expertise and business impact. <strong>Pro tip:</strong> Look for portfolios that include case studies, user research insights, and measurable results that demonstrate the impact of good UI design.</p>
      </section>

      {/* Case Study Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-400">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Portfolio Highlight: E-commerce App Redesign</h3>
        <p className="text-gray-700 mb-3">"Our e-commerce app redesign increased conversion rates by 67% and user engagement by 89%. The intuitive interface and seamless user experience drove significant business growth."</p>
        <p className="text-sm text-gray-600">- Featured in our portfolio with detailed case study</p>
      </section>

      {/* Feature Set: Portfolio Categories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">Our Portfolio Categories</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>E-commerce and Retail Applications</li>
          <li>Healthcare and Medical Apps</li>
          <li>Financial Technology Solutions</li>
          <li>Education and Learning Platforms</li>
          <li>Entertainment and Media Apps</li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-600 mt-8">How We Build Our Portfolio</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Project Selection: We choose projects that showcase our best work.</li>
          <li>Case Study Development: We document the design process and results.</li>
          <li>Visual Documentation: We create compelling presentations of our work.</li>
          <li>Results Measurement: We track and showcase measurable outcomes.</li>
          <li>Continuous Updates: We regularly add new projects and achievements.</li>
        </ol>
      </section>

      {/* Interactive Quiz Section */}
      <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Quiz: What Makes a Great Portfolio?</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700">✓ Does it showcase diverse project types?</p>
          <p className="text-gray-700">✓ Are there detailed case studies with results?</p>
          <p className="text-gray-700">✓ Does it demonstrate design thinking and problem-solving?</p>
          <p className="text-gray-700 font-medium">If you answered yes to these, you're looking at a quality portfolio!</p>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Related Services</h3>
        <div className="flex flex-wrap gap-2">
          <a href="/top-app-ui-design-firm" className="text-blue-600 hover:text-blue-800 text-sm">Top App UI Design Firm</a>
          <a href="/app-ui-design-near-me" className="text-blue-600 hover:text-blue-800 text-sm">App UI Design Near Me</a>
          <a href="/mobile-app-development" className="text-blue-600 hover:text-blue-800 text-sm">Mobile App Development</a>
        </div>
      </section>

      {/* External Authority Links */}
      <section className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Learn More</h3>
        <div className="space-y-1 text-sm">
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 block">Behance - Creative Portfolio</a>
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 block">Dribbble - Design Portfolio</a>
        </div>
      </section>

      {/* CTA Section with Interactive Button */}
      <section className="space-y-4 mt-10">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
          <h3 className="text-2xl font-bold text-orange-700 mb-2">Ready to see more of our portfolio?</h3>
          <p className="text-orange-800 text-lg mb-4">Explore our complete app UI design portfolio and see how we can create exceptional interfaces for your project. Contact Nivk.com for a detailed portfolio review.</p>
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

export default AppUIDesignPortfolio; 