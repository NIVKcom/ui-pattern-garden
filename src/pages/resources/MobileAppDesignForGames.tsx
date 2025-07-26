import { lazy, Suspense } from 'react';
const Header = lazy(() => import('@/components/Header'));
const Footer = lazy(() => import('@/components/Footer'));
import { Helmet } from "react-helmet";

const MobileAppDesignForGames = () => (
  <>
    <Helmet>
      <title>Mobile App Design for Games | Game App UI/UX Design 2025 | Nivk</title>
      <meta name="description" content="Expert mobile app design for games. Create engaging game interfaces, intuitive controls, and immersive user experiences for mobile gaming apps in 2025." />
      <meta name="keywords" content="mobile app design for games, game app design, mobile game UI, game app interface, mobile gaming design, game app UX, mobile game development" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://nivk.com/mobile-app-design-for-games" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What makes mobile game app design different from other apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mobile game app design requires specialized attention to interactive elements, gesture controls, visual feedback, and immersive experiences that keep players engaged and motivated."
              }
            },
            {
              "@type": "Question",
              "name": "How important is UI/UX design for mobile games?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "UI/UX design is crucial for mobile games as it directly impacts player engagement, retention, and monetization. Poor design can lead to high uninstall rates and negative reviews."
              }
            },
            {
              "@type": "Question",
              "name": "What are the key elements of successful mobile game design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Successful mobile game design includes intuitive controls, clear visual hierarchy, engaging onboarding, smooth performance, and compelling visual design that matches the game's theme and target audience."
              }
            }
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile Game App Design",
          "provider": {
            "@type": "Organization",
            "name": "Nivk",
            "url": "https://nivk.com"
          },
          "description": "Professional mobile app design services for games, including UI/UX design, interactive elements, and immersive gaming experiences.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Game App Design Services"
          }
        })}
      </script>
    </Helmet>

    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>

    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Mobile App Design for Games
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create immersive, engaging, and profitable mobile gaming experiences with expert UI/UX design that captivates players and drives success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Start Your Game Design
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Game Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Game Vision into Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Mobile game design requires a unique blend of creativity, psychology, and technical expertise. Our specialized team creates engaging interfaces that keep players hooked while maximizing monetization opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Engaging User Experience</h3>
              <p className="text-gray-600">Create intuitive controls and smooth interactions that keep players immersed in your game world.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Monetization Optimization</h3>
              <p className="text-gray-600">Design revenue-generating features that feel natural and enhance rather than disrupt the gaming experience.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Focused</h3>
              <p className="text-gray-600">Optimize for smooth gameplay across all devices while maintaining stunning visual quality and responsive controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Essential Features for Mobile Game Design
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">User Interface Elements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Intuitive Controls:</strong> Touch-friendly buttons, gestures, and navigation that feel natural</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Visual Feedback:</strong> Immediate response to user actions with animations and effects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Progress Indicators:</strong> Clear visual representation of player advancement and achievements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Inventory Systems:</strong> Easy-to-use item management and character customization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">User Experience Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Onboarding Flow:</strong> Smooth tutorial and introduction to game mechanics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Social Features:</strong> Leaderboards, friend systems, and multiplayer integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Monetization UI:</strong> In-app purchases, ads, and premium features integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>Settings & Customization:</strong> Audio, graphics, and gameplay preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Business Impact of Professional Game Design
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Metric</th>
                  <th className="px-6 py-4 text-center font-semibold">Poor Design</th>
                  <th className="px-6 py-4 text-center font-semibold">Professional Design</th>
                  <th className="px-6 py-4 text-center font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Player Retention (Day 1)</td>
                  <td className="px-6 py-4 text-center text-red-600">25%</td>
                  <td className="px-6 py-4 text-center text-green-600">65%</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">+160%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Session Duration</td>
                  <td className="px-6 py-4 text-center text-red-600">8 minutes</td>
                  <td className="px-6 py-4 text-center text-green-600">22 minutes</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">+175%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">In-App Purchase Rate</td>
                  <td className="px-6 py-4 text-center text-red-600">2.1%</td>
                  <td className="px-6 py-4 text-center text-green-600">8.7%</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">+314%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">App Store Rating</td>
                  <td className="px-6 py-4 text-center text-red-600">2.8/5</td>
                  <td className="px-6 py-4 text-center text-green-600">4.6/5</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">+64%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">User Acquisition Cost</td>
                  <td className="px-6 py-4 text-center text-red-600">$4.20</td>
                  <td className="px-6 py-4 text-center text-green-600">$1.85</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">-56%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Success Story: Puzzle Quest Mobile
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">The Challenge</h3>
                <p className="text-gray-600 mb-6">
                  A puzzle game startup struggled with low player retention and poor monetization despite having engaging gameplay mechanics. The original design had confusing navigation and unclear progression systems.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Solution</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    Redesigned onboarding flow with interactive tutorials
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    Implemented clear progression indicators and achievement systems
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    Created intuitive in-app purchase integration
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    Optimized for performance across all device types
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-center">Results After 6 Months</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Player Retention</span>
                    <span className="text-green-600 font-semibold">+180%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Daily Active Users</span>
                    <span className="text-green-600 font-semibold">+245%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Revenue per User</span>
                    <span className="text-green-600 font-semibold">+320%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">App Store Rating</span>
                    <span className="text-green-600 font-semibold">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Next Hit Game?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the ranks of successful game developers who trust Nivk to create engaging, profitable mobile gaming experiences that players love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Start Your Game Design Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Related Game Design Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/insights/mobile-app-design-trends-2025" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Mobile App Design Trends 2025</h3>
              <p className="text-gray-600">Discover the latest trends shaping mobile app design and user experience.</p>
            </a>
            <a href="/insights/gaming-app-design-tools" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Gaming App Design Tools</h3>
              <p className="text-gray-600">Explore the best tools and technologies for creating mobile games.</p>
            </a>
            <a href="/insights/mobile-app-design-cost" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Mobile App Design Cost</h3>
              <p className="text-gray-600">Understand the investment required for professional mobile app design.</p>
            </a>
          </div>
        </div>
      </section>
    </main>

    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </>
);

export default MobileAppDesignForGames; 