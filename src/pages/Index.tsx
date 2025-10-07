import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="divide-y divide-border">
        <Hero />
        <About />
        <Services />
        <InteractiveShowcase />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Namaste!%20Mujhe%20website%20ya%20app%20banwani%20hai.%20Please%20guide%20me."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform"
      >
        {/* WhatsApp Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .19 5.31.19 11.87c0 2.09.55 4.12 1.61 5.92L0 24l6.37-1.65c1.73.95 3.69 1.45 5.69 1.45h.01c6.56 0 11.87-5.31 11.87-11.87 0-3.18-1.24-6.17-3.42-8.45ZM12.07 21.6h-.01c-1.73 0-3.43-.46-4.92-1.33l-.35-.2-3.78.98 1.01-3.68-.23-.38a9.8 9.8 0 0 1-1.5-5.12c0-5.42 4.41-9.83 9.83-9.83 2.62 0 5.08 1.02 6.94 2.88a9.75 9.75 0 0 1 2.89 6.95c0 5.42-4.41 9.83-9.83 9.83Zm5.41-7.35c-.3-.15-1.75-.86-2.02-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.54-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.5.07-.76.38-.26.3-1 1-1 2.42s1.02 2.8 1.16 3c.15.2 2 3.05 4.86 4.28.68.3 1.22.48 1.63.61.68.22 1.3.19 1.78.11.54-.08 1.75-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.19-.57-.34Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;