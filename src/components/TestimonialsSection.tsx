import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  projectImage: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  clientAvatar: string;
  reply?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    projectImage: '/lovable-uploads/61fe1807-701e-4dee-875e-1f2c9cbcb9f6.png',
    quote: "Nivk just gets it. Our pet care mobile app finally looks as cute as the puppies we feature.",
    clientName: 'Maya Liu',
    clientTitle: 'Chief Marketing Officer',
    clientAvatar: '/lovable-uploads/837e1c7d-08d8-4faf-8e78-36fd22e2eb41.png',
    reply: "Loved working with you ❤️"
  },
  {
    id: 2,
    projectImage: '/lovable-uploads/b9012a93-1fc0-4a7c-87fe-eb6453526e55.png',
    quote: "We asked for elegant UI. Nivk gave us a brand we're proud to pitch in VC meetings.",
    clientName: 'Alex Renner',
    clientTitle: 'Co-Founder',
    clientAvatar: '/lovable-uploads/d37ec9c3-072b-44e6-acf8-8430df6e258e.png',
    reply: "Appreciate it Alex ❤️🎨"
  },
  {
    id: 3,
    projectImage: '/lovable-uploads/dfa402c5-60a2-4871-99a2-b0c2ed43cc09.png',
    quote: "The sleep mobile app UI feels so smooth, I almost dozed off during testing. Love it.",
    clientName: 'Jules Tanaka',
    clientTitle: 'Head of Product Experience',
    clientAvatar: '/lovable-uploads/60421d4c-3b29-445d-a668-70673c297bfb.png',
    reply: "The pleasure is ours Jules❤️"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">

      {/* Glass container with content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[3rem] p-8 md:p-16 shadow-[0_16px_64px_rgba(0,0,0,0.1)]">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Recent Work & What People Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A few of the mobile apps we've helped bring to life — and what our clients think.
            </p>
          </motion.div>

          {/* Desktop Grid Layout */}
          <motion.div 
            className="hidden lg:grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} variants={cardVariants} />
            ))}
          </motion.div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            <motion.div 
              className="overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} variants={cardVariants} />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="p-2 backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="p-2 backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  variants: any;
}

const TestimonialCard = ({ testimonial, variants }: TestimonialCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  const CardWrapper = shouldReduceMotion ? 'div' : motion.div;
  const cardProps = shouldReduceMotion ? {} : { variants };

  return (
    <CardWrapper {...cardProps} className="group">
      <div className="relative">
        {/* Enhanced Card with Orange Gradient */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#FFD37E]/20 via-[#FFA200]/15 to-[#FF7A5A]/25 border border-orange-200/60 rounded-3xl p-6 shadow-xl shadow-orange-200/30 hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-500 hover:scale-[1.02] hover:from-[#FFD37E]/25 hover:via-[#FFA200]/20 hover:to-[#FF7A5A]/30 ring-1 ring-orange-100/30">
          
          {/* Enhanced floating gradient orb */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#FFA200]/40 to-[#FF7A5A]/30 rounded-full blur-xl opacity-70"></div>
          
          {/* Project Image with stronger overlay */}
          <div className="mb-6 relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={testimonial.projectImage} 
              alt="Project preview"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stronger gradient overlay for better separation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20"></div>
          </div>

          {/* Enhanced Chat-style Testimonial */}
          <div className="space-y-4">
            {/* Enhanced Client Message Bubble */}
            <div className="relative">
              <div className="bg-white/30 backdrop-blur-md border border-white/60 rounded-2xl rounded-bl-md p-4 relative shadow-[0_4px_16px_rgba(0,0,0,0.1)] ring-1 ring-white/10">
                <p className="text-sm leading-relaxed text-foreground font-medium drop-shadow-sm">
                  {testimonial.quote}
                </p>
                {/* Enhanced chat bubble tail with stronger opacity */}
                <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/30 drop-shadow-sm" />
              </div>
            </div>

            {/* Enhanced Reply Bubble (if exists) */}
            {testimonial.reply && (
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-orange-400/30 to-coral-400/30 backdrop-blur-md border border-orange-200/50 rounded-2xl rounded-br-md p-3 max-w-[80%] relative shadow-[0_4px_16px_rgba(0,0,0,0.15)] ring-1 ring-white/20">
                  <p className="text-xs text-foreground font-medium drop-shadow-sm">
                    {testimonial.reply}
                  </p>
                  <p className="text-[10px] text-muted-foreground/80 mt-1 drop-shadow-sm">nivk</p>
                  {/* Enhanced chat bubble tail */}
                  <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-200/50 drop-shadow-sm" />
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Client Info with stronger separator */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/30 relative">
            {/* Subtle inner glow on separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="relative">
              <img 
                src={testimonial.clientAvatar} 
                alt={testimonial.clientName}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white/40 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/30 to-transparent ring-1 ring-white/20" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground drop-shadow-sm">
                {testimonial.clientName}
              </h4>
              <p className="text-xs text-muted-foreground/80 drop-shadow-sm">
                {testimonial.clientTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced floating gradient orb effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFA200]/20 via-[#FFD37E]/15 to-[#FF7A5A]/20 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      </div>
    </CardWrapper>
  );
};

export default TestimonialsSection;