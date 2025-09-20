import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 fade-in-down">
            Hi, I'm{' '}
            <span className="text-gradient">Deepankar Singh</span>{' '}
            👋
          </h1>
          
          <h2 className="font-inter font-medium text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 fade-in-up">
            Freelance App & Web Developer | Digital Creator | SEO Specialist
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up">
            I help startups, businesses, and individuals grow with modern mobile apps, 
            websites, and smart digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <Button
              onClick={() => scrollToSection('portfolio')}
              size="lg"
              className="font-poppins font-medium px-8 py-6 text-lg bg-primary hover:bg-primary/90 glow-primary"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="font-poppins font-medium px-8 py-6 text-lg border-accent text-accent hover:bg-accent/10 glow-accent"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;