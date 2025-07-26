import { lazy, Suspense } from 'react';
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Header = lazy(() => import('@/components/Header'));

const AppDesignJobsHiring = () => (
  <>
    <Helmet>
      <title>App Design Jobs Hiring | Mobile App Designer Careers 2025 | Nivk</title>
      <meta name="description" content="App design jobs hiring. Find mobile app design job opportunities, career paths, and hiring information for UI/UX designers in 2025." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are app design jobs hiring requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Requirements typically include UI/UX design skills, proficiency in design tools, portfolio of work, understanding of mobile platforms, and often a degree in design or related field."
              }
            },
            {
              "@type": "Question",
              "name": "How to find app design job opportunities?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use job boards, professional networks, company career pages, design communities, recruiters, and build a strong portfolio to attract opportunities."
              }
            },
            {
              "@type": "Question",
              "name": "What are the career paths in app design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Career paths include UI Designer, UX Designer, Product Designer, Design Lead, Creative Director, and specialized roles in mobile, web, or enterprise design."
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
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Q: What are app design jobs hiring requirements?</h2>
        <p className="text-blue-800 text-lg font-semibold mb-3">A: UI/UX design skills, design tool proficiency, strong portfolio, mobile platform knowledge, and often a design degree.</p>
        <p className="text-blue-700">Nivk connects talented designers with top companies and offers career guidance.</p>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-blue-800 text-lg">
          <strong>App Design Jobs Hiring:</strong> Find mobile app design job opportunities, career paths, and hiring information for UI/UX designers in 2025.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">App Design Jobs Hiring</h1>
      <section className="space-y-4">
        <p className="text-lg">Explore exciting career opportunities in app design. With <strong>growing demand</strong> for skilled designers (<a href="https://www.statista.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Statista</a>), the job market is thriving with competitive salaries and benefits.</p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Current Job Opportunities</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Senior Mobile App Designer</h3>
            <p className="text-gray-600 mb-3">Location: Remote/On-site | Experience: 5+ years</p>
            <p className="text-gray-700 mb-3">Lead design initiatives for mobile applications, mentor junior designers, and collaborate with cross-functional teams.</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Lead design projects from concept to completion</li>
              <li>• Mentor and guide junior design team members</li>
              <li>• Collaborate with product managers and developers</li>
              <li>• Establish design systems and best practices</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Apply Now</button>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">UX Designer - Mobile Apps</h3>
            <p className="text-gray-600 mb-3">Location: Hybrid | Experience: 3+ years</p>
            <p className="text-gray-700 mb-3">Focus on user experience design, research, and usability testing for mobile applications.</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Conduct user research and usability testing</li>
              <li>• Create user personas and journey maps</li>
              <li>• Design wireframes and prototypes</li>
              <li>• Analyze user feedback and iterate designs</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Apply Now</button>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">UI Designer - Startup Environment</h3>
            <p className="text-gray-600 mb-3">Location: On-site | Experience: 2+ years</p>
            <p className="text-gray-700 mb-3">Fast-paced startup environment seeking creative UI designer for innovative mobile app projects.</p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Design intuitive and engaging user interfaces</li>
              <li>• Work closely with development team</li>
              <li>• Contribute to product strategy and vision</li>
              <li>• Rapid prototyping and iteration</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Apply Now</button>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Career Paths in App Design</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Entry Level</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Junior UI Designer</li>
              <li>• UX Design Intern</li>
              <li>• Design Assistant</li>
              <li>• Freelance Designer</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Mid Level</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• UI/UX Designer</li>
              <li>• Product Designer</li>
              <li>• Mobile App Designer</li>
              <li>• Design Specialist</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Senior Level</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Senior Designer</li>
              <li>• Design Lead</li>
              <li>• UX Manager</li>
              <li>• Design Director</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Leadership</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Creative Director</li>
              <li>• Head of Design</li>
              <li>• VP of Design</li>
              <li>• Design Consultant</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">How to Find App Design Jobs</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Build a strong portfolio showcasing your best work</li>
          <li>Network with industry professionals and attend events</li>
          <li>Use job boards and professional networking sites</li>
          <li>Apply directly to companies you're interested in</li>
          <li>Work with specialized design recruiters</li>
          <li>Contribute to design communities and forums</li>
          <li>Stay updated with industry trends and tools</li>
        </ul>
      </section>
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
        <p className="text-xl mb-6">Connect with Nivk for exclusive job opportunities and career guidance.</p>
        <button onClick={() => window.location.href = '/contact'} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Started</button>
      </section>
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Career Resources</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/app-design-certification-courses" className="text-blue-600 hover:underline">App Design Certification Courses</a>
          <a href="/app-design-remote-work" className="text-blue-600 hover:underline">App Design Remote Work</a>
          <a href="/app-design-freelance-services" className="text-blue-600 hover:underline">App Design Freelance Services</a>
          <a href="/app-design-consultant" className="text-blue-600 hover:underline">App Design Consultant</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AppDesignJobsHiring; 