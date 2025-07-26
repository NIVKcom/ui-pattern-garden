import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Clock, MapPin, HelpCircle } from "lucide-react";

const Help = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of working with NIVK",
      icon: HelpCircle,
      articles: [
        "How to submit a project request",
        "Understanding our design process",
        "Project timeline expectations",
        "Communication preferences"
      ]
    },
    {
      title: "Project Management",
      description: "Managing your project effectively",
      icon: MessageCircle,
      articles: [
        "How to provide feedback",
        "Revision process and limits",
        "Change requests and pricing",
        "Project milestone tracking"
      ]
    },
    {
      title: "Technical Support",
      description: "Technical questions and troubleshooting",
      icon: Phone,
      articles: [
        "App store submission process",
        "Technical requirements",
        "Platform compatibility",
        "Performance optimization"
      ]
    },
    {
      title: "Billing & Payments",
      description: "Payment and billing information",
      icon: Mail,
      articles: [
        "Payment methods accepted",
        "Invoice and billing cycles",
        "Refund policy",
        "Project cost estimates"
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@nivk.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      responseTime: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time assistance",
      contact: "Available on website",
      responseTime: "Mon-Fri, 9AM-6PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-background paper-bg relative" style={{ overflow: 'visible' }}>
      {/* Full-page animated blob background */}
      <div className="fixed inset-0 w-full h-full z-0" style={{ overflow: 'visible' }}>
        <LavaLamp />
      </div>
      
      {/* Global gradient overlay */}
      <GlobalGradientOverlay />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>

          {/* Quick Contact */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Immediate Help?</h2>
              <p className="text-muted-foreground mb-6">Choose your preferred way to get in touch with us.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10 text-center">
                  <CardHeader>
                    <method.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                    <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-2">{method.contact}</p>
                    <p className="text-sm text-muted-foreground flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {method.responseTime}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Help Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Browse Help Topics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/80 border-white/10">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <category.icon className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                          • {article}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="backdrop-blur-sm bg-card/80 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and scope. Simple apps take 4-6 weeks, while complex 
                    applications may take 12-16 weeks. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/80 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">What information do you need to start a project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We need your project goals, target audience, preferred features, design preferences, and any 
                    existing brand guidelines. The more details you provide, the better we can serve your needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/80 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Do you provide ongoing support after launch?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We offer various support packages including bug fixes, updates, performance monitoring, 
                    and feature enhancements. Support options are discussed during project planning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact CTA */}
          <section>
            <Card className="backdrop-blur-sm bg-card/80 border-white/10 text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Still need help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our team is here to help you succeed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Help;