import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const MobileAppDesignCryptoStartups = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-10 py-20 text-neutral-800 space-y-14 leading-relaxed">
        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-500">
            Mobile App Design for Crypto Startups
          </h1>
          <p className="text-lg">
            Your crypto product deserves more than just hype — it needs clarity, trust, and usability. At <strong>Nivk.com</strong>, we design conversion-ready mobile apps for crypto startups that help users onboard confidently, transact securely, and actually understand your Web3 product.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔐 Why Great UI/UX is Make-or-Break in Crypto</h2>
          <p>
            Web3 has a trust problem — not because of the tech, but because of the way it’s presented. Confusing UX, jargon-filled onboarding, and sketchy visuals cause user drop-off even before signup. If your app isn’t clear, you’re invisible.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Users fear losing funds due to UX errors</li>
            <li>Most wallets and dApps have <em>horrible</em> first-time flows</li>
            <li>Design is what makes your protocol feel safe, secure, and real</li>
          </ul>
          <p>
            The difference between 1,000 users and 100,000 often comes down to UI trust cues. That’s what we design into every screen.
          </p>
        </section>

        {/* What We Design for Crypto Startups */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">📱 Features Built for Onboarding, Holding, and Scaling</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Smooth token wallet creation with recovery flows</li>
            <li>Secure 2FA and biometric auth UX</li>
            <li>Swapping and trading flows with anti-fat finger design</li>
            <li>Multi-chain asset dashboards with clarity & hierarchy</li>
            <li>Social wallet / Web3 login experiences (e.g., Magic, WalletConnect)</li>
            <li>Gamified staking, yield farming, or NFT rewards UIs</li>
          </ul>
          <p>
            We design apps that reduce churn, explain value, and keep users coming back — even during bear markets.
          </p>
        </section>

        {/* Our Design Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">⚙️ Our Crypto UX Process — Trusted by Founders</h2>
          <p>
            Whether you're building a wallet, DAO tool, or token marketplace — we adapt our proven design process to your vision:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Discovery & DeFi Audit:</strong> We understand your product’s utility, chain, and goals.</li>
            <li><strong>UX Mapping:</strong> We design the full user journey, from wallet connect to completion.</li>
            <li><strong>UI Design:</strong> You get elegant, on-brand interfaces that make your protocol feel secure and intuitive.</li>
            <li><strong>Optional Build:</strong> Our dev partners can code the full app — with or without Web3 integrations.</li>
          </ol>
        </section>

        {/* Who This Is For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🪙 Startups We've Helped or Advised</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>DeFi dashboards with staking + LP views</li>
            <li>Crypto wallets (hot, custodial, and non-custodial)</li>
            <li>NFT membership apps & POAPs</li>
            <li>Decentralized social (e.g., Lens, Farcaster clients)</li>
            <li>Yield platforms with real-time APR displays</li>
            <li>Web3 gaming + marketplace dApps</li>
          </ul>
          <p>
            Whether you're pre-MVP or scaling post-raise — we design mobile-first UX that earns user trust and capitalizes on your innovation.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🤔 Crypto Founders Usually Ask Us...</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">Do you understand crypto design patterns?</h3>
            <p>
              Yes. We’ve worked on apps across L1s, L2s, and EVM-compatible chains. From Connect Wallet to contract interaction — we get it.
            </p>

            <h3 className="font-semibold">Can you design around legal / KYC requirements?</h3>
            <p>
              Absolutely. We’ve helped clients navigate KYC flows, risk warnings, and disclaimers that still feel usable and branded.
            </p>

            <h3 className="font-semibold">Do you build too, or just design?</h3>
            <p>
              We offer optional full-stack development — especially useful if you need auth, backend dashboards, or mobile builds (React Native / Expo).
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-orange-500">🔗 Useful Links for Web3 Builders</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/brand" className="text-orange-600 underline">See mobile-first product designs</Link></li>
            <li><Link to="/talk" className="text-orange-600 underline">Request a quote for your crypto app</Link></li>
            <li><Link to="/faq" className="text-orange-600 underline">Compare us to other product agencies</Link></li>
            <li><Link to="/about" className="text-orange-600 underline">About Nivk.com and how we think</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            Launch your crypto product with a world-class mobile app experience — fast.
          </p>
          <Link
            to="/talk"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get Your App Quote with Nivk.com
          </Link>
        </section>

        {/* Jordan Belfort’s 3 10s Embedded */}
        {/* 1. Product: Clear app benefits and niche-specific features */}
        {/* 2. You/Us: Process clarity, language familiarity, crypto credibility */}
        {/* 3. Company: Nivk.com reinforced through helpful links and proof */}
      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDesignCryptoStartups;
