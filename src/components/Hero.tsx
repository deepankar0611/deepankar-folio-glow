import { Button } from '@/components/ui/button';
import { useEffect, useRef, useCallback } from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionRef = useRef<HTMLElement | null>(null);
  const floatARef = useRef<HTMLDivElement | null>(null);
  const floatBRef = useRef<HTMLDivElement | null>(null);

  // Parallax for floating shapes
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const handleMove = (e: MouseEvent) => {
      const rect = sectionEl.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (floatARef.current) {
        floatARef.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
      }
      if (floatBRef.current) {
        floatBRef.current.style.transform = `translate3d(${x * -30}px, ${y * -30}px, 0)`;
      }
    };

    sectionEl.addEventListener('mousemove', handleMove);
    return () => sectionEl.removeEventListener('mousemove', handleMove);
  }, []);

  // Magnetic button effect
  const handleMagnet = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate3d(${relX * 0.08}px, ${relY * 0.08}px, 0)`;
  }, []);

  const resetMagnet = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate3d(0,0,0)';
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Minimal subtle grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(hsl(215 16% 47% / 0.08) 1px, transparent 1px)',backgroundSize:'24px 24px'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 fade-in-down">
            Bridge Code:{' '}
            <span className="text-gradient">Tools, Websites & Apps</span>
          </h1>

          <h2 className="font-inter font-medium text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 fade-in-up">
            We design and ship production‑ready products that clients love to use.
          </h2>

          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up">
            From internal tools to marketing sites to Android/iOS apps—Bridge Code delivers fast,
            scalable, and beautifully animated experiences that convert and retain users.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              className="font-poppins font-medium px-8 py-6 text-lg bg-foreground text-background hover:opacity-90 btn-shine"
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/919876543210?text=Namaste!%20Mujhe%20website%20ya%20app%20banwani%20hai.%20Please%20guide%20me.', '_blank')}
              variant="outline"
              size="lg"
              className="font-poppins font-medium px-8 py-6 text-lg border-border text-foreground hover:bg-secondary btn-shine"
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Removed blobs for a cleaner editorial look */}
    </section>
  );
};

export default Hero;