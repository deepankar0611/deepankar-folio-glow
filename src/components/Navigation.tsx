import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-background/80 backdrop-blur-sm border-b border-border'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-montserrat font-bold text-xl text-foreground">
            Bridge Code
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-inter text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-inter text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-inter text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => window.open('https://wa.me/919876543210?text=Hi%20there!%20I%20want%20a%20website/app%20for%20my%20business.%20Can%20we%20talk%3F', '_blank')}
              variant="outline"
              className="font-poppins font-medium px-6 border-border text-foreground hover:bg-secondary btn-shine"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="accent-gradient font-poppins font-medium px-6"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;