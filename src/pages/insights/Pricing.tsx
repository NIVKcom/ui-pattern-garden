import { ArrowRight, Calendar, MessageCircle, Target, DollarSign, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";

const Pricing = () => {
  const whyCallCards = [
    {
      icon: Target,
      title: "Every founder is different",
      description: "So are your design needs. We tailor everything to your specific product and goals."
    },
    {
      icon: DollarSign,
      title: "Avoid overpaying",
      description: "We'll help you focus on what matters most and skip what you don't need right now."
    },
    {
      icon: MessageCircle,
      title: "Honest feedback",
      description: "We'll give you real advice, even if Nivk isn't the right fit for your project."
    }
  ];

  const coveragePoints = [
    "Quick overview of your product vision",
    "Which features matter most to your users",
    "Your timeline and scope expectations",
    "Your budget comfort zone",
    "Honest recommendations (not a sales pitch)"
  ];

  const faqs = [
    {
      question: "Do I have to pay after the call?",
      answer: "No, it's completely free. No strings attached, no commitment required."
    },
    {
      question: "Can I just get a price estimate?",
      answer: "Once we understand your specific needs, we can give you an exact quote that makes sense."
    },
    {
      question: "What if I only need something small?",
      answer: "Perfect! That's exactly why the call helps us create something flexible just for you."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <LavaLamp />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-foreground leading-tight">
            Let's Talk About Your Mobile App Goals
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            No vague pricing. No upsells. Just a free 20-minute call to understand what you need — and what you don't.
          </p>
          
          <div className="pt-8">
           <Button 
             size="lg" 
             className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 sm:px-12 py-4 sm:py-6 font-bold text-lg sm:text-xl rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
             onClick={() => window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank')}
           >
             <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
             <span className="text-sm sm:text-xl">Book Your Free Consultation</span>
             <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
           </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - Moved to top */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas text-foreground mb-6">
              Our Plans
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Choose the perfect design solution for your project and team needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Starter App Design */}
            <Card className="relative group hover:scale-105 transition-all duration-500 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="relative p-8 lg:p-10">
                {/* Header Section - Standardized */}
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-3xl font-bebas text-foreground">
                     Starter Mobile App Design
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    A clean, custom UI for your MVP or mobile app idea.
                  </p>
                  <div className="text-4xl font-bebas text-foreground">
                    $999
                    <span className="text-lg text-muted-foreground font-normal"> / one-time</span>
                  </div>
                </div>

                {/* Testimonial Section - Standardized */}
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
                  <p className="text-foreground italic text-center mb-3">
                    "Nivk nailed our mobile app interface. Everyone keeps asking who designed it."
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <img 
                      src="/lovable-uploads/be03034b-3ca3-47db-b5f9-aa8c4e4fcee6.png" 
                      alt="Mira G. profile picture" 
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <p className="text-muted-foreground text-sm">
                      – Mira G., Founder at Looply
                    </p>
                  </div>
                </div>

                {/* Features Section - Standardized */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">1 custom mobile screen (iOS or Android)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Style guide and typography setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Figma file delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">2 minor revisions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Quick delivery (3–5 days)</span>
                  </div>
                </div>

                {/* Button Section - Standardized */}
                <div>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 sm:py-4 font-bold text-base sm:text-lg rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank')}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    <span className="text-sm sm:text-lg">Book a Free 20-Min Call</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Full Design Partner - Enhanced with Deep Orange-Purple Gradient */}
            <Card className="relative group hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl">
              {/* Enhanced animated gradient glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse blur-sm"></div>
              
              {/* Deep gradient background card */}
              <div className="relative bg-gradient-to-br from-orange-600/90 via-pink-600/90 to-purple-700/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">
                <CardContent className="relative p-8 lg:p-10">
                  {/* Header Section - Standardized */}
                  <div className="text-center space-y-4 mb-8">
                    <h3 className="text-3xl font-bebas text-white">
                      Full Design Partner
                    </h3>
                    <p className="text-lg text-white/90">
                      Ongoing, flexible design help for teams and growing startups.
                    </p>
                    <div className="text-4xl font-bebas text-white">
                      $2,400
                      <span className="text-lg text-white/90 font-normal"> / month</span>
                    </div>
                  </div>

                  {/* Testimonial Section - Standardized */}
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
                  <p className="text-white italic text-center mb-3">
                    "From Idea to real mobile app - A very smooth and easy experience front to back!"
                  </p>
                    <div className="flex items-center justify-center space-x-2">
                      <img 
                        src="/lovable-uploads/2fd2da16-c1e3-4345-91f8-30e2885a5d52.png" 
                        alt="Tomás Y. profile picture" 
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <p className="text-white/80 text-sm">
                        – Tomás Y., Head of Product at Wavely
                      </p>
                    </div>
                  </div>

                  {/* Features Section - Standardized */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/90">Unlimited design requests (in Notion or Trello)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                       <span className="text-white/90">Brand system, mobile apps, websites, decks, more</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/90">Average 48h turnaround</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/90">Pause or cancel anytime</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/90">Priority delivery + shared Figma workspace</span>
                    </div>
                  </div>

                  {/* Button Section - Standardized */}
                  <div>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 sm:py-4 font-bold text-base sm:text-lg rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank')}
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      <span className="text-sm sm:text-lg">Book a Free 20-Min Call</span>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why a Call First Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas text-center mb-16 text-foreground">
            Why a Call First?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyCallCards.map((card, index) => (
              <Card key={index} className="relative group hover:scale-105 transition-all duration-500 bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                    <card.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bebas text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 shadow-xl p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bebas text-center text-foreground">
              What We Cover In 20 Minutes
            </h2>
            
            <div className="space-y-6">
              {coveragePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-8 text-center">
             <Button 
               size="lg" 
               variant="outline"
               className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105"
               onClick={() => window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank')}
             >
               <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
               <span className="text-sm sm:text-lg">Schedule My Call</span>
               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
             </Button>
            </div>
          </div>
        </div>
      </section>


      {/* FAQs Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas text-center mb-16 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="relative group bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="relative p-8 space-y-4">
                  <h3 className="text-xl font-bebas text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bebas text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Book your free consultation and let's figure out the perfect plan for your mobile app.
          </p>
          
         <Button 
           size="lg" 
           className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 sm:px-12 py-4 sm:py-6 font-bold text-lg sm:text-xl rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
           onClick={() => window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank')}
         >
           <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
           <span className="text-sm sm:text-xl">Book Free Call Now</span>
           <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
         </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;