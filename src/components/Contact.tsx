import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email, phone, and message are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully! 🚀",
      description: "Thanks! You’ll receive a proposal within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'deepankarsingh.dev@gmail.com',
      link: 'mailto:deepankarsingh.dev@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/deepankarsingh',
      link: 'https://linkedin.com/in/deepankarsingh'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/deepankar',
      link: 'https://github.com/deepankar'
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+91 98765 43210',
      link: 'https://wa.me/919876543210?text=Hi!%20I%20need%20a%20website%20or%20app%20for%20my%20business.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 fade-in-down">
              Start with Bridge Code 🚀
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Tell us about your tool, website, or app. Get a plan and proposal within 24 hours.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-background border-border shadow-soft hover-lift">
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Phone/WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Budget Range (optional)
                  </label>
                  <Input
                    id="budget"
                    name="budget"
                    type="text"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. ₹50k–₹2L"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full accent-gradient font-poppins font-medium py-6 text-lg"
                >
                  Get Proposal in 24 Hours
                </Button>
              </form>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-6">
                  Get in touch
                </h3>
                <p className="font-inter text-muted-foreground mb-8">
                  Reach out via email or WhatsApp. We typically respond within 1–6 hours (IST).
                </p>
              </div>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-4 bg-background/50 border-border hover-lift shadow-soft">
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-poppins font-medium text-foreground">
                          {contact.label}
                        </div>
                        <div className="font-inter text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
              
              {/* Call to Action */}
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="text-center">
                  <h4 className="font-montserrat font-bold text-lg text-foreground mb-3">
                    Ready to start your project?
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground mb-6">
                    Free 15‑min consultation. Hindi/English dono mein baat kar sakte hain.
                  </p>
                  <Button 
                    className="accent-gradient font-poppins font-medium px-6"
                    onClick={() => window.open('https://wa.me/919876543210?text=Can%20we%20schedule%20a%2015-min%20consultation%3F', '_blank')}
                  >
                    Schedule on WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;