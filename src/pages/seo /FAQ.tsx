import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GlobalGradientOverlay } from "@/components/ui/global-gradient-overlay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    id: "item-1",
    question: "How fast do you deliver designs?",
    answer: "Most designs are delivered in 48–72 hours depending on complexity."
  },
  {
    id: "item-2",
    question: "Can I cancel anytime?",
    answer: "Yes, you can pause or cancel your subscription whenever you like."
  },
  {
    id: "item-3",
    question: "Who will I be working with?",
    answer: "You'll be working directly with Laurens (Head of Design) and Igor (Head of Development)."
  },
  {
    id: "item-4",
    question: "What kind of apps do you design?",
    answer: "We specialize in mobile apps, web apps, and vibe-heavy UI/UX experiences."
  },
  {
    id: "item-5",
    question: "What if I don't like a design?",
    answer: "No worries — unlimited revisions are included in every plan."
  },
  {
    id: "item-6",
    question: "Can I use the designs for commercial projects?",
    answer: "Yes, all designs are 100% yours and come with full rights."
  }
];

const FAQ = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    window.open('https://calendar.app.google/rEfdzBqm7z8nCo31A', '_blank');
  };

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
        
        {/* Main FAQ Section */}
        <section className="py-20 px-4 min-h-screen flex flex-col justify-center">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 drop-shadow-xl">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground drop-shadow-lg max-w-2xl mx-auto">
                Everything you need to know before getting started.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[3rem] p-8 md:p-12 shadow-2xl animate-fade-in hover:bg-white/15 transition-all duration-300">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border-b border-white/20 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-foreground hover:text-muted-foreground py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/90 text-base md:text-lg leading-relaxed pb-6 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Final CTA Section */}
            <div className="text-center mt-16 animate-fade-in">
              <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[3rem] p-8 md:p-12 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Still have questions?
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Book a free 20-min consultation and let's chat about your project
                </p>
                <LiquidButton
                  onClick={handleBookConsultation}
                  className="px-8 py-4 text-lg font-semibold"
                >
                  Get in Touch
                </LiquidButton>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;