const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo/Name */}
            <div className="font-montserrat font-bold text-2xl text-foreground mb-4">
              Deepankar Singh
            </div>
            
            {/* Tagline */}
            <p className="font-inter text-muted-foreground mb-8 max-w-md mx-auto">
              Freelance App & Web Developer specializing in modern digital solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:deepankarsingh.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300"
                aria-label="Email"
              >
                📧
              </a>
              <a
                href="https://linkedin.com/in/deepankarsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://github.com/deepankar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                📱
              </a>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <a 
                href="#about" 
                className="font-inter text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#services" 
                className="font-inter text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="font-inter text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="font-inter text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            
            {/* Copyright */}
            <div className="pt-8 border-t border-border">
              <p className="font-inter text-sm text-muted-foreground">
                © {currentYear} Deepankar Singh. All Rights Reserved. Made with ❤️ by Deepankar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;