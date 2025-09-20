import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Startup Founder',
      company: 'TechVenture Labs',
      rating: 5,
      text: 'Delivered exactly what I wanted – fast, modern app. Exceeded expectations.',
      image: '👨🏻‍💼'
    },
    {
      name: 'Neha Sharma',
      role: 'Marketing Director',
      company: 'Digital Growth Co.',
      rating: 5,
      text: 'Reliable and creative. Our SEO ranking improved massively.',
      image: '👩🏻‍💼'
    },
    {
      name: 'Michael Lee',
      role: 'Business Owner',
      company: 'Lee Enterprises',
      rating: 5,
      text: 'Best freelancer I\'ve worked with – timely and detail-oriented.',
      image: '👨🏻‍💻'
    },
    {
      name: 'Priya Patel',
      role: 'Product Manager',
      company: 'InnovateTech',
      rating: 5,
      text: 'Outstanding mobile app development. Clean code and great UI/UX.',
      image: '👩🏻‍💻'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-400 text-lg">⭐</span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Clients Say
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Don't just take my word for it – here's what my clients have to say about working with me.
            </p>
          </div>
          
          {/* Testimonial Slider */}
          <div className="relative">
            <Card className="p-8 md:p-12 bg-card border-border text-center">
              <div className="mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="font-inter text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* All Testimonials Grid (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary/5 border-primary/50 scale-105'
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="font-inter text-sm text-muted-foreground mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{testimonial.image}</span>
                  <div>
                    <div className="font-poppins font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="font-inter text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;